import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us-container">
      <Header />

      
      <main className="main-content1">
        <h2>About Us</h2>
      </main>

      
      <div className="about-us-content">
        <h3>About SDDA</h3>
        <p>
          SDDA (Skin Disease Diagnosis Assistance) is an AI-driven web platform that helps users detect and manage skin diseases early. By combining CNNs for image analysis and LLMs for symptom interpretation, it provides accurate diagnoses, preventive advice, and personalized insights to protect skin health.
        </p>

        <h3>Our Goal</h3>
        <ul>
          <li><strong>Early Detection:</strong> Identify skin conditions before they become severe.</li>
          <li><strong>Accurate Diagnosis:</strong> Use advanced AI to ensure precise identification of skin diseases.</li>
          <li><strong>Personalized Recommendations:</strong> Offer tailored advice and suggest dermatologist consultations when needed.</li>
          <li><strong>Accessibility:</strong> A web-based platform accessible anytime, anywhere.</li>
        </ul>

        <h3>Our Content</h3>
        <p>
          SDDA combines AI-driven image segmentation and NLP-based symptom interpretation to deliver reliable diagnostic insights. All content is focused on providing actionable and preventive advice to help users manage their skin health effectively.
        </p>

        <h3>Privacy Commitment</h3>
        <p>
          SDDA prioritizes user privacy, ensuring that no personal or identifiable data is stored. Google Analytics is used solely for improving interactions while maintaining strict privacy guidelines.
        </p>

        <h3>Key Benefits</h3>
        <ul>
          <li><strong>Timely Diagnosis:</strong> Prevent severe conditions with early detection.</li>
          <li><strong>User-Friendly Interface:</strong> Easy navigation and quick uploads.</li>
          <li><strong>Convenience & Accessibility:</strong> Access skin care insights from any device.</li>
          <li><strong>Reliable Recommendations:</strong> Combines CNN-based analysis and LLMs for actionable advice.</li>
        </ul>
      </div>

     
      <Footer />
    </div>
  );
}

export default AboutUs;
