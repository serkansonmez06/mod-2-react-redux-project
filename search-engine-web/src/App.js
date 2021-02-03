import React from "react";
import "./App.css";
import MainComponent from "../src/component/MainComponent";
import FooterComp from "../src/component/FooterComp";
import Nav from "../src/component/Nav";

function App() {
  return (
    <div className="appJs">
      <Nav />
      <MainComponent />
      <FooterComp />
    </div>
  );
}

export default App;
