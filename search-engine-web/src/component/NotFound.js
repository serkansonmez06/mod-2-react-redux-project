import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound">
      <img
        id="notFound"
        src="https://miro.medium.com/max/1200/1*G_0pNJ2R2WtWRDtKsxvYGg.jpeg"
        alt="warning"
      />
      <Link to="/Search-Image" className="btn btn-primary" id="navButton">
        Go to Search Engine
      </Link>
    </div>
  );
}

export default NotFound;
