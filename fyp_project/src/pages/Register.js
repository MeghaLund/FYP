import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Register.css";
import Header from "./Header";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm your password"),
      terms: Yup.bool()
        .oneOf([true], "You must accept the terms and conditions"),
    }),
    onSubmit: (values) => {
      console.log("Form data", values);
      alert("Registration successful!");
    },
  });

  return (
    <>
      <Header /> 
      <div className="register-container">
        <h2>SignUp</h2>
        <form onSubmit={formik.handleSubmit} className="register-form">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="error">{formik.errors.password}</div>
          )}

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="error">{formik.errors.confirmPassword}</div>
          )}

          <div className="checkbox-container">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              checked={formik.values.terms}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="terms">
              I accept the <a href="#terms">Terms of Use</a> and{" "}
              <a href="#privacy">Privacy Policy</a>
            </label>
          </div>
          {formik.touched.terms && formik.errors.terms && (
            <div className="error">{formik.errors.terms}</div>
          )}

          
          <div className="button-container">
            <button type="submit" className="register-btn">
              Submit
            </button>
          </div>
        </form>

       
        <div className="button-container">
          <button className="Account-btn">I have an Account</button>
        </div>
      </div>
    </>
  );
};

export default Register;
