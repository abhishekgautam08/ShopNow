import React from "react";
import AppBar from "./components/Header/AppBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import SideBar from "./components/SideBar/SideBar";
import { Box, Stack } from "@mui/material";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Box>
        <AppBar />
        <Stack direction="row" spacing={0.5} justifyContent="space-between">
          <SideBar />
          <Cards />
        </Stack>
        <Footer />
      </Box>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
