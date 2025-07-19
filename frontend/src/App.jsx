import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componants/Navbar";
import Footer from "./componants/Footer";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import Event from "./pages/Event";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Navbar />} />
          <Route path="/" element={<Footer />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/Event" element={<Event />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
