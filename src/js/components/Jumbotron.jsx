import React from "react";

//create the NavBar
const Jumbotron = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="p-5 mb-4 bg-light col-8 rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
          <p className="col-md-8 fs-4">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            Call to action
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
