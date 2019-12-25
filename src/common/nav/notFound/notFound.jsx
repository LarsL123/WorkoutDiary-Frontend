import React from "react";
import { Link } from "react-router-dom";

const goBack = () => {
  window.history.back();
};

const NotFound = () => {
  return (
    <React.Fragment>
      <h1>Page not found! Try a nother link.</h1>
      <button className="btn btn-link" onClick={goBack}>
        <h2>Return to last page</h2>
      </button>
      <button className="btn btn-link">
        <Link to="/">
          <h2>Home</h2>
        </Link>
      </button>
    </React.Fragment>
  );
};

export default NotFound;
