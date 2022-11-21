import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProductsPage from "./Pages/ProductsPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <div
        className="main-container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            overflowY: "auto",
          }}
        >
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/Products" element={<ProductsPage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <div
          style={{
            height: 150,
          }}
        >
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
