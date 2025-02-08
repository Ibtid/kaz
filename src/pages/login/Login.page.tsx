import React, { useState } from "react";
import colors from "../../colors"; // Import colors
import { useUser } from "../../context";
import { useNavigate } from "react-router-dom";
import UiPaths from "../../paths/uiPaths";

const Login = () => {
  const { user, setUser } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook for navigation
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUser(password)
    console.log("Logging in with", email, password);
    navigate(UiPaths.Dashboard)
  };

  return (
    <div
      className={`flex items-center justify-center min-h-screen ${colors.background} p-4`}
    >
      <div
        className={`w-full max-w-md ${colors.cardBackground} p-8 rounded-lg`}
      >
        <h2
          className={`text-3xl font-bold ${colors.textWhite} text-center mb-6`}
        >
          BENEVOLENT <span className="bg-black text-white px-2">C</span>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={`block text-sm font-medium ${colors.textGray}`}>
              Email
            </label>
            <input
              type="email"
              className={`w-full mt-1 p-2 ${colors.inputBackground} ${colors.border} rounded-lg ${colors.textPrimary} outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500`}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className={`block text-sm font-medium ${colors.textGray}`}>
              Password
            </label>
            <input
              type="password"
              className={`w-full mt-1 p-2 ${colors.inputBackground} ${colors.border} rounded-lg ${colors.textPrimary} outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500`}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <p
            className={`text-xs ${colors.textGray} text-center cursor-pointer hover:underline`}
          >
            Forgot Password?
          </p>
          <button
            type="submit"
            className={`w-full py-2 rounded-lg font-bold transition ${
              email && password ? colors.buttonEnabled : colors.buttonDisabled
            }`}
            disabled={!email || !password}
          >
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
