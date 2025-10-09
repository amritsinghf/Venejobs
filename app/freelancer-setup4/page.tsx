'use client'

import React from 'react';
import RealNavbar from '../components/realnavbar';
import Footer from '../components/footer';
import './styles.css';

export default function FreelancerSetup4() {
  return (
    <>
      <RealNavbar />
      <main className="postad-wrapper">
        <div className="postad-container">
          <div className="postad-left">
            <div className="postad-step-numbers">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <span key={n} className={`step-number ${n === 3 ? 'active-step' : ''}`}>{n}</span>
              ))}
            </div>
            <h1 className="postad-title">Let’s share your professional experience</h1>
            <p className="postad-subtitle">
              Let clients know where you’ve been and what you’ve done. Highlight your past roles, achievements, and the value you brought to previous projects.
            </p>
          </div>

          <div className="postad-right">
            <div className="experience-section">
              <h2 className="section-title">Add Education</h2>
              <div className="experience-box">
                <button className="add-experience-button">＋ Add Education</button>
              </div>
            </div>

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