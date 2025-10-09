'use client';

import './signup.css';
import { useState } from 'react';

export default function Signup({ onClose }: { onClose: () => void }) {
  const [type, setType] = useState<'freelancer' | 'client'>('freelancer');

  return (
    <div className="signup-modal">
      <div className="signup-container">
        <button className="close-button" onClick={onClose}>✕</button>
        <h2>Sign up</h2>
        <p>
          Already have an account? <span className="signin-link">Sign in</span>
        </p>
        <div className="signup-toggle">
          <button className={type === 'freelancer' ? 'active' : ''} onClick={() => setType('freelancer')}>I’m a Freelancer</button>
          <button className={type === 'client' ? 'active' : ''} onClick={() => setType('client')}>I’m a Client</button>
        </div>
        <input placeholder="Name" />
        <input placeholder="Username" />
        <input placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <label className="policy">
          <input type="checkbox" />
          I agree with <span>Privacy Policy</span> and <span>Terms of Use</span>
        </label>
        <button className="submit">Sign In</button>
      </div>
    </div>
  );
}
