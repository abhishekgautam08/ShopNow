import React from "react";
import { Link } from "react-router-dom";

const AppBarItem = () => {
  return (
    <>
      <Link to="/">Home</Link>
      &nbsp; &nbsp;
      <Link to="/about">About</Link>
      &nbsp; &nbsp;
      <Link to="/contact">Contact</Link>
    </>
  );
};

export default AppBarItem;
