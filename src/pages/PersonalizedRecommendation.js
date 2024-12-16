import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./PersonalizedRecommendation.css";

const PersonalizedRecommendation = () => {
  return (
    <div>
      {/* Header Component */}
      <Header />
       
      {/* Background Section */}
      <div className="recommendation-container">
      <div className="center-text">features</div>
      </div>

      {/* New Section with Left Image and Right Text */}
      <div className="new-section">
        {/* Left Side - Image */}
        <div className="right-image">
          <img
            src="https://molesafe.com/wp-content/uploads/2024/08/4lop_1yvk_230810-686x1024.jpg"
            alt="Skin Analysis"
          />
        </div>

        {/* Right Side - Text */}
        <div className="left-text">
          <h2>SDDA Dermatologist Can Save Your Life</h2>
          <p><strong>Early Detection is Your Best Defense!</strong></p>
          <p>
            Skin cancer is one of the most dangerous diseases that the SDDA
            Dermatologist on our platform can help identify.
          </p>
          <p>
            Skin cancer is the most common cancer in the United States and
            worldwide.
          </p>
          <p>Every hour, more than 2 lives are lost globally due to skin cancer.</p>
          <p>
            Melanoma, a type of skin cancer, spreads earlier and faster than
            other forms.
          </p>
        </div>
      </div>

      {/* Why SDDA Dermatologist Section */}
      <div className="features-section">
        <h2>Why is SDDA Dermatologist worth using?</h2>
        <hr className="horizontal-line" />

        <div className="features-container">
          {/* Smart */}
          <div className="feature-box">
            <img
              src="https://cdn-icons-png.flaticon.com/512/10348/10348996.png"
              alt="Smart"
              className="feature-icon"
            />
            <h3>Smart</h3>
            <p>
              Our SDDA AI Dermatologist leverages cutting-edge artificial
              intelligence, combining the expertise of IT specialists and
              dermatologists. It offers diagnostic accuracy that matches a
              professional dermatologist's precision.
            </p>
          </div>

          {/* Simple */}
          <div className="feature-box">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7585/7585967.png"
              alt="Simple"
              className="feature-icon"
            />
            <h3>Simple</h3>
            <p>
              Simply place your phone near a mole or any skin formation, and
              within 1 minute, you'll get a quick analysis highlighting any
              cause for concern.
            </p>
          </div>

          {/* Accessible */}
          <div className="feature-box">
            <img
              src="https://cdn-icons-png.flaticon.com/512/481/481682.png"
              alt="Accessible"
              className="feature-icon"
            />
            <h3>Accessible</h3>
            <p>
              The SDDA AI Dermatologist is available anytime, anywhere. Keep
              your skin health in check with a quick scan at your
              convenience—whether you're at home, work, or on the go.
            </p>
          </div>

          {/* Affordable */}
          <div className="feature-box">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Affordable"
              className="feature-icon"
            />
            <h3>Affordable</h3>
            <p>
              With advanced image analytics, the SDDA platform provides
              dermatological insights at an unbeatable price. Benefit from
              customizable bundles and flexible pricing plans designed to save
              time and cost without compromising accuracy.
            </p>
          </div>
        </div>
      </div>

      {/* How to Use AI Dermatologist Section */}
      <div className="how-to-use-section">
        <h2>How to use SDDA Dermatologist?</h2>
        <hr className="horizontal-line" />

        <div className="steps-container">
          {/* Step 1 */}
          <div className="step">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2819/2819724.png"
              alt="Take a Photo"
              className="step-icon"
            />
            <h3>Take a Photo</h3>
            <p>
              Keep zoomed at the closest distance (less than 10 cm), keep in focus
              and center only the skin mark (without hair, wrinkles, and other objects).
            </p>
          </div>

          {/* Step 2 */}
          <div className="step">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7859/7859335.png"
              alt="Send Photo"
              className="step-icon"
            />
            <h3>Identify and Send</h3>
            <p>
              Send your photo to the AI system. It will analyze it and send you a
              risk assessment in seconds.
            </p>
          </div>

          {/* Step 3 */}
          <div className="step">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2300/2300246.png"
              alt="Receive Results"
              className="step-icon"
            />
            <h3>Receive Your Risk Assessment</h3>
            <p>
              Get results within 60 seconds and receive advice on the next steps
              to take for your skin health.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default PersonalizedRecommendation;
