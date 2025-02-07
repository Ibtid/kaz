import React, { useState } from "react";
import colors from "../../colors"; // Import colors

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with", email, password);
  };

  return (
    <div className={`flex items-center justify-center min-h-screen ${colors.background} p-4`}>
      <div className={`w-full max-w-md ${colors.cardBackground} p-8 rounded-lg`}>
        <h2 className={`text-3xl font-bold ${colors.textWhite} text-center mb-6`}>
          TOPSTEP <span className="bg-white text-black px-2">X</span>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={`block text-sm font-medium ${colors.textGray}`}>Username</label>
            <input
              type="email"
              className={`w-full mt-1 p-2 ${colors.inputBackground} ${colors.inputBorder} rounded-lg ${colors.textWhite} ${colors.focusRing} outline-none`}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className={`block text-sm font-medium ${colors.textGray}`}>Password</label>
            <input
              type="password"
              className={`w-full mt-1 p-2 ${colors.inputBackground} ${colors.inputBorder} rounded-lg ${colors.textWhite} ${colors.focusRing} outline-none`}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <p className={`text-xs ${colors.textGray} text-center cursor-pointer hover:underline`}>
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
