import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Header from "./Header"; 
import "./Login.css";

function Login() {
    
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email address").required("Email is required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    });

    const handleSubmit = (values) => {
        console.log("Form Data:", values);
        alert("Login successful!");
    };

    return (
        <>
            <Header /> 
            <div className="login-container">
                <h2>Log In</h2>

                <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form>
                            <label>Email</label>
                            <Field
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="input-field"
                            />
                            <ErrorMessage name="email" component="div" className="error" />

                            <label>Password</label>
                            <Field
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="input-field"
                            />
                            <ErrorMessage name="password" component="div" className="error" />

                            <button type="submit" className="login-btn">
                                Log In
                            </button>
                        </Form>
                    )}
                </Formik>

                <p>
                    Not a member? <Link to="/register">Register</Link>
                </p>

                <p>
                    <a href="/forgot-password">Forgot password?</a>
                </p>
            </div>
        </>
    );
}

export default Login;
