import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
//router operation needs browserrouter from react router dom
import "alertifyjs/build/css/alertify.css";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import { Provider } from "react-redux";
import store from "./redux/reducers/store";

//The Provider makes the Redux store available to 
//any nested components that have been wrapped in the connect() function. 

//BrowserRouter is for routing components
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
