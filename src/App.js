import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import Navbar from "./components/Header/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
