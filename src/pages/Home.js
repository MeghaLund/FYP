import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer"; 
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <Header />
      <main className="main-content">
        <h2>Skin Disease Diagnosis Assistance</h2>
        <p>Welcome to SDDA, a platform to diagnose and manage your skin health effectively.</p>
        <Link to="/login" className="login-btn1">
          Login
        </Link>
      </main>

      

      <div className="flex-container">
        <ul>
          <li>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz6VX_0daVXLBRbLFGI5GK31UXm7D64Hygcg&s"
              alt="Image 1"
            />
          </li>
          <li>
            <img
              src="https://thumbs.dreamstime.com/b/all-skin-body-types-line-green-stamp-cosmetic-beauty-product-outline-sticker-natural-face-type-label-dermatology-treatment-248768700.jpg"
              alt="Image 2"
            />
          </li>
          <li>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSao2JGmSohG5JVFOG0s8_JGkYgLKXVTQAmg&s"
              alt="Image 3"
            />
          </li>
          <li>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCJI_cJKK7q6-SSHlmDw55AuCJ5rUNEpUaYg&s"
              alt="Image 4"
            />
          </li>
          <li>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTuz6Y9vlz1-8Wnp3breIJ6telYLO2ATaD8A&s"
              alt="Image 5"
            />
          </li>
          <li>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShz0vr6ccAShnwj2VSIG_f7TKZ0MiHQekxHw&s"
              alt="Image 6"
            />
          </li>
          <li>
            <img
              src="https://external-preview.redd.it/wfvl3qLo1POTnLcmCddMe5DqohNSBqYsgsmbquuRjpY.jpg?width=1080&crop=smart&auto=webp&s=74424f74d663b36589396c689602a8cc74f300cc"
              alt="Image 7"
            />
          </li>
          <li>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5v7mGv6HfNFP2IoQstj0gRAVHZKQUtros1g&s"
              alt="Image 8"
            />
          </li>
          {/* <li>
            <img
              src="https://play-lh.googleusercontent.com/N2cHHFBQgDQaUQORHf_9EuB_hza2C1PGcRg1N7QKZeCyAXdAZu8qYdTNF2zgvX6UAgU=w600-h300-pc0xffffff-pd"
              alt="Image 9"
            />
          </li> */}
        </ul>
      </div>

      <div className="info-section">
        <h2>Get to Know Our SDDA</h2>
        <p>
          Our <strong>SDDA-Skin Disease Diagnosis Assistant</strong> helps you understand your skin health with ease and accuracy. The user-friendly interface guides you to relevant insights, showing the severity of your condition—beginner, mild, or severe—so you can take preventive action.
        </p>
        <p>
          With advanced technology and accurate analysis, we aim to educate and empower you to make informed skincare choices. While the system provides valuable insights, it’s for <strong>informational purposes only</strong> and not a substitute for professional medical advice. Always consult a dermatologist for personalized guidance and treatment.
        </p>
      </div>

      {/* Adding the Health Articles section */}
      <div className="articles-section">
        <h2>Health Articles</h2>
        <div className="articles-container">
          {/* Article Card 1 */}
          <div className="article-card">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/041/900/227/small_2x/ai-generated-allergy-young-woman-face-pimples-generate-ai-photo.jpg"
              alt="Article 1"
            />
            <h3>Understanding Acne</h3>
            <p>Tips to identify, treat, and prevent acne effectively.</p>
          </div>

          {/* Article Card 2 */}
          <div className="article-card">
            <img
              src="https://purclarityskincare.com/cdn/shop/articles/hands-patient-suffering-from-psoriasis_1_1a1d49ee-157c-41af-81d3-deba49c88305_1200x.jpg?v=1687948634"
              alt="Article 2"
            />
            <h3>About psoriasis</h3>
            <p>Psoriasis has multiple stages, including the stages of plaque psoriasis and guttate psoriasis</p>
          </div>

          {/* Article Card 3 */}
          <div className="article-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPf1gxo1r2yCwjgJLFHSplKmvY6QoM7bMVA&s"
              alt="Article 3"
            />
            <h3>Nail Fungus</h3>
            <p>Nail fungus is a common infection of the nail. It begins as a white or yellow-brown spot under the tip of your fingernail or toenail.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
