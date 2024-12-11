import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./SymptomsChecker.css";

// Import local images
import femaleChildFront from "../images/female_child_front.jpeg";
import femaleChildBack from "../images/female_child_back.jpeg";
import maleChildBack from "../images/male_child_back.jpeg";
import maleChildFront from "../images/male_child_front.jpeg";
import femaleTeenBack from "../images/female_teen_back.jpeg";
import femaleTeenFront from "../images/female_teen_front.jpeg";
import maleTeenBack from "../images/male_teen_back.jpeg";
import maleTeenFront from "../images/male_teen_front.jpeg";
import femaleAdultBack from "../images/female_adult_back.jpeg";
import femaleAdultFront from "../images/female_adult_front.jpeg";
import maleAdultBack from "../images/male_adult_back.jpeg";
import maleAdultFront from "../images/male_adult_front.jpeg";

const SymptomsChecker = () => {
  const [ageGroup, setAgeGroup] = useState("Infant");
  const [gender, setGender] = useState("Female");
  const [view, setView] = useState("Front");

  const getImageSrc = () => {
    if (ageGroup === "Infant")
      return view === "Front"
        ? gender === "Female"
          ? "https://via.placeholder.com/300x450?text=Infant+Female+Front"
          : "https://via.placeholder.com/300x450?text=Infant+Male+Front"
        : gender === "Female"
        ? "https://via.placeholder.com/300x450?text=Infant+Female+Back"
        : "https://via.placeholder.com/300x450?text=Infant+Male+Back";

    if (ageGroup === "Child")
      return view === "Front"
        ? gender === "Female"
          ? femaleChildFront
          : maleChildFront
        : gender === "Female"
        ? femaleChildBack
        : maleChildBack;

    if (ageGroup === "Teen")
      return view === "Front"
        ? gender === "Female"
          ? femaleTeenFront
          : maleTeenFront
        : gender === "Female"
        ? femaleTeenBack
        : maleTeenBack;

    if (ageGroup === "Adult")
      return view === "Front"
        ? gender === "Female"
          ? femaleAdultFront
          : maleAdultFront
        : gender === "Female"
        ? femaleAdultBack
        : maleAdultBack;

    return "https://via.placeholder.com/300x450?text=No+Image";
  };

  return (
    <div>
      <Header />

      <div className="symptoms-checker">
        <div className="options-container">
          <div className="age-group">
            <h3>Select Age Group</h3>
            {["Infant", "Child", "Teen", "Adult"].map((group) => (
              <button
                key={group}
                className={`age-btn ${ageGroup === group ? "active" : ""}`}
                onClick={() => setAgeGroup(group)}
              >
                {group}
              </button>
            ))}
          </div>

          <div className="gender">
            <h3>Select Gender</h3>
            {[
              { label: "Female", value: "Female" },
              { label: "Male", value: "Male" },
            ].map((gen) => (
              <button
                key={gen.value}
                className={`gender-btn ${gender === gen.value ? "active" : ""}`}
                onClick={() => setGender(gen.value)}
              >
                {gen.label}
              </button>
            ))}
          </div>

          <div className="body-parts">
            <h3>Select Body Part</h3>
            <div className="body-part-list">
              {["Foot", "Leg", "Genitalia", "Arm", "Back", "Chest", "Face", "Buttocks", "Scalp", "Hand", "Widespread", "Stomach", "Neck", "Armpit"].map((part) => (
                <button key={part} className="body-part-btn">
                  {part}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="image-container">
          <img
            src={getImageSrc()}
            alt={`${ageGroup} ${gender} ${view} Image`}
            className="body-image"
          />
          <div className="image-toggle">
            <button
              className={`toggle-btn ${view === "Front" ? "active" : ""}`}
              onClick={() => setView("Front")}
            >
              Front
            </button>
            <button
              className={`toggle-btn ${view === "Back" ? "active" : ""}`}
              onClick={() => setView("Back")}
            >
              Back
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SymptomsChecker;
