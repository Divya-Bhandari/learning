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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    const user = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    localStorage.setItem(
      "travelmateUser",
      JSON.stringify(user)
    );

    localStorage.setItem(
      "travelmateLoggedIn",
      "true"
    );

    navigate("/");
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
              required
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
              required
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
              required
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
              required
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

          <p>
            Already have an account?
          </p>

          <Link to="/login">
            Login
          </Link>

        </div>

      </div>

    </main>
  );
};

export default Register;