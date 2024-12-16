import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Login.css";

function Feedback() {
  
  // Validation schema to ensure input correctness
  const validationSchema = Yup.object().shape({
    diseaseName: Yup.string().required("Please enter the disease name"),
    recommendation: Yup.string().required("Doctor's recommendation is required"),
  });

  // Handle form submission
  const handleSubmit = (values) => {
    console.log("Feedback Data:", values);
    alert("Feedback submitted successfully!");
  };

  return (
    <>
      <Header />

      <div className="login-container">
        <h2>Submit Your Feedback</h2>

        <Formik
          initialValues={{ diseaseName: "", recommendation: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className="field-container">
                <label>Disease Name</label>
                <Field
                  type="text"
                  name="diseaseName"
                  placeholder="Enter disease name"
                  className="input-field"
                />
                <ErrorMessage name="diseaseName" component="div" className="error" />
              </div>

              <div className="field-container">
                <label>Doctor's Recommendation</label>
                <Field
                  as="textarea"
                  name="recommendation"
                  placeholder="Enter doctor's recommendation"
                  rows="4"
                  className="input-field"
                />
                <ErrorMessage name="recommendation" component="div" className="error" />
              </div>

              <button type="submit" className="login-btn">
                Submit Feedback
              </button>
            </Form>
          )}
        </Formik>

        <p>
          <Link to="/">Go back to Home</Link>
        </p>
      </div>

      <Footer />
    </>
  );
}

export default Feedback;
