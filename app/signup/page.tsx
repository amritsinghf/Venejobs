'use client';
import './styles.css';
import Link from 'next/link';
import { useState } from 'react';

export default function SignUpPage() {
  const [role, setRole] = useState<'freelancer' | 'client'>('freelancer');

  return (
    <div className="signup-backdrop">
      <div className="signup-card">
        <div className="logo"> {/* Replace with actual logo if needed */}
          <img src="/logo.svg" alt="Venejobs" />
        </div>
        <h1 className="signup-title">Sign up</h1>
        <p className="signup-subtext">
          Already have an account? <Link href="/login">Sign in</Link>
        </p>

        <div className="role-toggle">
          <button
            className={role === 'freelancer' ? 'active' : ''}
            onClick={() => setRole('freelancer')}
          >
            I'm a Freelancer
          </button>
          <button
            className={role === 'client' ? 'active' : ''}
            onClick={() => setRole('client')}
          >
            I'm a Client
          </button>
        </div>

        <form className="signup-form">
          <input placeholder="Name" required />
          <input placeholder="Username" required />
          <input placeholder="Email Address" type="email" required />
          <input placeholder="Password" type="password" required />
          <label className="checkbox">
            <input type="checkbox" required /> I agree with{' '}
            <a href="/privacy">Privacy Policy</a> and{' '}
            <a href="/terms">Terms of Use</a>
          </label>
          <button type="submit" className="submit-btn">Sign In</button>
        </form>
      </div>
    </div>
  );
}
