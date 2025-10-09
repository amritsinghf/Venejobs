'use client';

import './signin.css';
import { useState } from 'react';

export default function SignIn({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="signin-modal">
      <div className="signin-container">
        <button className="close-button" onClick={onClose}>✕</button>
        <h2>Sign in</h2>
        <p>
          Don’t have an account yet? <span className="signup-link">Sign up</span>
        </p>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="signin-options">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember me
          </label>
          <span className="forgot-password">Forgot password?</span>
        </div>
        <button className="submit">Sign In</button>
      </div>
    </div>
  );
}
