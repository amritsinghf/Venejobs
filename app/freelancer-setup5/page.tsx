'use client'

import React from 'react';
import RealNavbar from '../components/realnavbar';
import Footer from '../components/footer';
import './styles.css';

export default function FreelancerSetup5() {
  return (
    <>
      <RealNavbar />
      <main className="postad-wrapper">
        <div className="postad-container">
          <div className="postad-left">
            <div className="postad-step-numbers">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <span key={n} className={`step-number ${n === 4 ? 'active-step' : ''}`}>{n}</span>
              ))}
            </div>
            <h1 className="postad-title">Let’s tell us what languages you speak</h1>
            <p className="postad-subtitle">
            Let clients know which languages you’re comfortable working in. This helps you connect with the right opportunities on Venejobs.
            </p>
          </div>

          <div className="postad-right">
  <div className="language-section">
    <div className="language-group">
      <label className="input-label">Language</label>
      <select className="select-input">
        <option>Select language</option>
        <option>Ingles</option>
        <option>Español</option>
        <option>Portugues</option>
        <option>Frances</option>
        <option>Italiano</option>
        <option>Aleman</option>
        <option>Chino</option>



      </select>
    </div>

    <div className="language-group">
      <label className="input-label">Proficiency level</label>
      <select className="select-input">
        <option>Select Proficiency level</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
    </div>
  </div>

  {/* ✅ Add this block below the language-section */}
 
  <div className="nav-buttons">
              <button className="back-button">← Back</button>
              <button className="next-button">Next →</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}