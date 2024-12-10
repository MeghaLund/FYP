import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Contact.css";

function Contact() {
    return (
        <div>
            <Header />

            <main className="contact-container">
                <h2>Contact Us</h2>
                <p>
                    Please fill out the information below, and a representative from the <strong>SDDA (Skin Disease Diagnosis Assistance)</strong> team will get back to you as soon as possible.
                </p>
                <p><strong>PLEASE NOTE:</strong></p>
                <p>
                    SDDA is dedicated to helping users identify and understand the severity of 
                    skin conditions through a web interface. However, we do not offer personalized
                    medical advice or diagnosis. For detailed health inquiries or emergencies, 
                    please consult a qualified dermatologist or visit a healthcare facility.
                </p>
                <p>Thank you for your understanding!</p>

                <Link to="/">Go Back to Home</Link>
            </main>

            
            <Footer />
        </div>
    );
}

export default Contact;
