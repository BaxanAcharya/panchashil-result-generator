import React from "react";

import { useHistory } from "react-router-dom";
import "../../App.css";

const NoFound = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="container-fluid notFound">
      <div className="text-center">
        <div className="error mx-auto" data-text="404">
          404
        </div>
        <p className="lead text-gray-800 mb-5">Page Not Found</p>
        <p className="text-gray-900  mb-0 ">
          It looks like the content you are trying to access is not available
        </p>
        <button className="btn" onClick={goBack}>
          &larr; Back
        </button>
      </div>
    </div>
  );
};

export default NoFound;
