import React from "react";
import PageNotFoundImage from "../../img/PageNotFound.png";
import "./pagenotfound.css";
import BackLink from "../BackLink";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <BackLink style={{ color: "#000000" }} />
      <img src={PageNotFoundImage} />
    </div>
  );
};

export default PageNotFound;
