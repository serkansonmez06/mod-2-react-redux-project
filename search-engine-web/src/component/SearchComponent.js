import React, { Component } from "react";
import alertifyjs from "alertifyjs";
import { FormGroup } from "reactstrap";
import "../App.css";
class SearchComponent extends Component {
  state = {
    baseUrl: "https://api.unsplash.com/search/photos/?per_page=5&client_id=",
    accessKey: "",
    query: "&query=",
    inputValue: "",
    searchUrl: "",
    images: [],
  };

  componentDidMount() {
    console.log("componentdidmount is running");
    this.getImages();
  }

  handleChange = (event) => {
    console.log("handlechange running");
    this.setState({ inputValue: event.target.value }, () => {});

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
  };

  handleReset = () => {
    this.setState({
      inputValue: "",
      searchUrl: "",
      images: [],
    });
    alertifyjs.success("Reseting", 1.5);
    console.log("reset");
  };

  getImages = () => {
    //console.log("getimages is running");
    fetch(this.state.searchUrl)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data.results[0].urls.small)
        const imgs = this.state.images.concat(data.results);
        console.log(imgs);
        this.setState({ images: imgs });
      });
  };

  render() {
    return (
      <div className="searchComp">
        <form onSubmit={this.handleSubmit} class="form-group">
          <FormGroup>
            <div className="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Search for any image"
                value={this.state.inputValue}
                onChange={this.handleChange}
              />
              <div className="input-group-append">
                <button className="btn btn-warning" type="submit">
                  Search
                </button>
              </div>
            </div>
          </FormGroup>

          <button onClick={this.handleReset} class="btn btn-success">
            reset
          </button>
        </form>
        <ul id="searchImgDisplay">
          {this.state.images.map((item, i) => (
            <h1 key={i}>
              <img src={item.urls.small} alt="displayImage"></img>
            </h1>
          ))}
        </ul>
      </div>
    );
  }
}

export default SearchComponent;
