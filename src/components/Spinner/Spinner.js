import React from "react";
import Load from "./Spinner.gif";

const Spinner = () => {
  return (
    <>
      <img className="my-3" src={Load} alt="loading" />
    </>
  );
};

export default Spinner;
