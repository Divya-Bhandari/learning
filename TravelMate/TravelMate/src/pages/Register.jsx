import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const name = formData.name.trim();
    const email = formData.email.trim().toLowerCase();

    if (
      !name ||
      !email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const existingUser = JSON.parse(
      localStorage.getItem("travelmateUser")
    );

    if (
      existingUser &&
      existingUser.email.toLowerCase() === email
    ) {
      setError(
        "An account with this email already exists."
      );
      return;
    }

    const user = {
      name,
      email,
      password: formData.password,
    };

    localStorage.setItem(
      "travelmateUser",
      JSON.stringify(user)
    );

    localStorage.removeItem("travelmateLoggedIn");

    setSuccess(
      "Account created successfully! Redirecting to login..."
    );

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <main className="register-page">
      <div className="register-card">
        <div className="register-header">
          <span>TravelMate</span>

          <h1>Create Account</h1>

          <p>
            Create your account and start planning
            your next journey.
          </p>
        </div>

        {error && (
          <div className="register-error">
            {error}
          </div>
        )}

        {success && (
          <div className="register-success">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="register-field">
            <label htmlFor="name">
              Full Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>

          <div className="register-field">
            <label htmlFor="email">
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="register-field">
            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
            />
          </div>

          <div className="register-field">
            <label htmlFor="confirmPassword">
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="register-submit-button"
          >
            Create Account
          </button>
        </form>

        <div className="register-login">
          <p>Already have an account?</p>

          <Link to="/login">
            Login
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Register;