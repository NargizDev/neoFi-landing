import React, { useState } from "react";
import { useAuth } from "@/shared/lib/auth/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const LogInPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setEmailError("");
    setPasswordError("");
    let valid = true;
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      valid = false;
    }
    if (!valid) return;
    try {
      await login(email, password);
      navigate("/");
    } catch {
      setError("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-section-alt">
      <form
        onSubmit={handleSubmit}
        className="bg-[#181818] p-8 rounded-2xl shadow-lg w-full max-w-md flex flex-col gap-6"
      >
        <h2 className="text-3xl font-bold text-white mb-2">Sign in to NeoFi</h2>
        <input
          className="p-3 rounded-lg bg-[#232323] text-white placeholder-gray-400 border border-[#232323] focus:border-neon outline-none transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          type="email"
        />
        {emailError && <div className="text-red-500 text-sm">{emailError}</div>}
        <input
          className="p-3 rounded-lg bg-[#232323] text-white placeholder-gray-400 border border-[#232323] focus:border-neon outline-none transition"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        {passwordError && (
          <div className="text-red-500 text-sm">{passwordError}</div>
        )}
        <button
          type="submit"
          className="bg-gradient-to-r from-neon to-neon-light text-black font-semibold py-3 rounded-lg shadow-md hover:opacity-90 transition"
        >
          Sign In
        </button>
        {error && <div className="text-red-500 text-center">{error}</div>}
        <div className="text-gray-400 text-center">
          Don't have an account?{" "}
          <Link to="/sign-up" className="text-neon hover:underline">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LogInPage;
