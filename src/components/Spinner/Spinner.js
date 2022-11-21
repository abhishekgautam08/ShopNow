import React from "react";
import Load from "./Spinner.gif";
import "./Spinner.css";
const Spinner = () => {
  return (
    <>
      <img className="spinner-center" src={Load} alt="loading" />
    </>
  );
};

export default Spinner;
