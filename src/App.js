import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import PersonalizedRecommendation from "./pages/PersonalizedRecommendation";
import SymptomsChecker from "./pages/SymptomsChecker";
import Feedback from "./pages/Feedback";
import SkinCondition from "./pages/SkinCondition";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Signup />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/services/PersonalizedRecommendation" element={<PersonalizedRecommendation />} />
        <Route path="/services/SymptomsChecker" element={<SymptomsChecker />} />
        <Route path="/services/SkinCondition" element={<SkinCondition />} />
        <Route path="/services/Feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}

export default App;
