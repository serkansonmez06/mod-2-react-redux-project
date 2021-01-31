import React, { Component } from "react";
import { List } from "react-mdl";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// import * as categoryActions from "../redux/actions/categoriesAction";

class SearchComponent extends Component {
  state = {
    baseUrl: "https://api.unsplash.com/search/photos/?per_page=1&client_id=",
    accessKey: "",
    query: "&query=",
    inputValue: "",
    searchUrl: "",
    images: [],
  };

  // componentDidMount() {
  //   console.log("componentdidmount is running");
  //   this.getImages();
  // }

  // handleReset=()=>{
  //   this.setState({ images:[]})
  //   console.log("reset")
  // }
  handleChange = (event) => {
    console.log("handlechange running");
    this.setState({ inputValue: event.target.value }, () => {
      console.log(this.state.inputValue);
    });
   
    const tempSearchURL =
      this.state.baseUrl +
      this.state.accessKey +
      this.state.query +
      event.target.value;
  
    this.setState({ searchUrl: tempSearchURL }, () => {
      //console.log(this.state.searchUrl);
    });

  };

  handleSubmit = (event) => {
    //console.log(this.state.inputValue);
    this.getImages();
    event.preventDefault();

    //console.log(`tempsearch: ${tempSearchURL}`);
    //console.log("this.state.searchURL: " + this.state.searchUrl);
  };

  getImages = () => {
    //console.log("getimages is running");
    fetch(this.state.searchUrl)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data.results[0].urls.small)
        const imgs = this.state.images.concat(data.results);
        console.log(imgs);
        this.setState({ images: imgs }, () => {
          console.log(this.state.images);
        });
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            id="search_box"
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />

          <input type="submit" />
          
        </form>
        {/* <button onSubmit={this.handleReset}>reset</button> */}
        <ul>
          {this.state.images.map((item, i) => (
            <h1 key={i}>
              <img src={item.urls.small}></img>
            </h1>
          ))}
        </ul>
      </div>
    );
  }
}

export default SearchComponent;

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: {
//         displayImages: bindActionCreators(categoryActions.displayImages, dispatch),
//     },
//   };
// }

// connect(mapDispatchToProps)
