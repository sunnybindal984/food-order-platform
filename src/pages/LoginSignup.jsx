import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";

const LoginSignup = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      let userCredential;

      if (isLogin) {
        // 🔵 LOGIN
        userCredential = await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
      } else {
        // 🟢 SIGNUP
        if (formData.password !== formData.confirmPassword) {
          return setError("Passwords do not match");
        }

        userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );

        // Save user name
        await updateProfile(userCredential.user, {
          displayName: formData.name,
        });
      }

      const user = userCredential.user;

      const userData = {
        uid: user.uid,
        name: user.displayName || user.email.split("@")[0],
        email: user.email,
      };

      // Save session
      localStorage.setItem("user", JSON.stringify(userData));

      onLogin(userData);
      navigate("/");

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>{isLogin ? "Login" : "Signup"}</h2>

      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        {!isLogin && (
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
        )}

        {error && <p>{error}</p>}

        <button type="submit">
          {isLogin ? "Login" : "Signup"}
        </button>
      </form>

      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Create Account" : "Already have account?"}
      </button>
    </div>
  );
};

export default LoginSignup;