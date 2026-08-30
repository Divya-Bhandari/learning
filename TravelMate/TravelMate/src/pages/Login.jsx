import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    const savedUser = JSON.parse(
      localStorage.getItem("travelmateUser")
    );

    if (!savedUser) {
      setError("No account found. Please register first.");
      return;
    }

    if (
      formData.email !== savedUser.email ||
      formData.password !== savedUser.password
    ) {
      setError("Incorrect email or password.");
      return;
    }

    localStorage.setItem(
      "travelmateLoggedIn",
      "true"
    );

    navigate("/");
  };

  return (
    <main className="login-page">
      <div className="login-card">

        <div className="login-header">
          <span>TravelMate</span>

          <h1>Welcome Back</h1>

          <p>
            Login to continue planning your next journey.
          </p>
        </div>

        {error && (
          <div className="login-error">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="login-field">
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

          <div className="login-field">
            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="login-submit-button"
          >
            Login
          </button>

        </form>

        <div className="login-register">
          <p>
            Don't have an account?
          </p>

          <Link to="/register">
            Create Account
          </Link>
        </div>

      </div>
    </main>
  );
};

export default Login;