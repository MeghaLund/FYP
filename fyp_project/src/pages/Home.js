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
          <li>
            <img
              src="https://play-lh.googleusercontent.com/N2cHHFBQgDQaUQORHf_9EuB_hza2C1PGcRg1N7QKZeCyAXdAZu8qYdTNF2zgvX6UAgU=w600-h300-pc0xffffff-pd"
              alt="Image 9"
            />
          </li>
        </ul>
      </div>

     
      <Footer />
    </div>
  );
}

export default Home;
