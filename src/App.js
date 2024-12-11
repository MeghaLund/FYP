import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact"; 
import SymptomsChecker from "./pages/SymptomsChecker";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Signup />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} /> 
        <Route path="/services/SymptomsChecker" element={<SymptomsChecker />} />
      </Routes>
    </Router>
  );
}

export default App;
