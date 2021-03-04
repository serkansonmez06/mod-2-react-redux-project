import React, { Component } from "react";
import alertifyjs from "alertifyjs"; // alertifyjs is framework
import { FormGroup } from "reactstrap"; //import reactstrap for styling
import "../App.css";
class SearchComponent extends Component {
  state = {
    baseUrl: "https://api.unsplash.com/search/photos/?per_page=5&client_id=",
    accessKey: "age-dmYcxYinzenv4oHzL4f9_NJWqU3otOzhdlhAQYA",
    query: "&query=",
    inputValue: "",
    searchUrl: "",
    images: [],
  };

  handleChange = (event) => {
    // console.log("handlechange running");
    this.setState({ inputValue: event.target.value });
    // collect user input
    const tempSearchURL =
      this.state.baseUrl +
      this.state.accessKey +
      this.state.query +
      event.target.value;

    this.setState({ searchUrl: tempSearchURL });
    //update search url with user input
  };

  handleSubmit = (event) => {
    //console.log(this.state.inputValue);
    // it prevents a browser reload/refresh.
    this.getImages();
    event.preventDefault();
  };

  handleReset = () => {
    this.setState({
      //resets state property.
      inputValue: "",
      searchUrl: "",
      images: [],
    });
    alertifyjs.success("Reseting", 1.5); // framework to create notification
    //each click invokes alertify method
    // console.log("reset");
  };

  getImages = () => {
    //console.log("getimages is running");
    fetch(this.state.searchUrl) // fetch data from updated state
      .then((response) => response.json()) // response is json type data
      .then((data) => {
        //console.log(data.results[0].urls.small)
        const imgs = this.state.images.concat(data.results); // concat data.results to images array.
        // console.log(imgs);
        this.setState({ images: imgs }); // update state images array
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
            Reset
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
