import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
//router operation needs browserrouter from react router dom
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js'; // this is for nav bar
// import 'alertifyjy/build/css/alertifyjy.min.css'
import {Provider} from 'react-redux'
import configureStore from './redux/reducers/configureStore'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>

<BrowserRouter>
  
  <App />

</BrowserRouter>
  </Provider>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
