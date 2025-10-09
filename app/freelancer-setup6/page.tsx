'use client';

import React from 'react';
import RealNavbar from '../components/realnavbar';
import Footer from '../components/footer';
import './styles.css';

export default function FreelancerSetup6() {
  return (
    <>
      <RealNavbar />
      <main className="postad-wrapper">
        <div className="postad-container">
          <div className="postad-left">
            <div className="postad-step-numbers">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <span key={n} className={`step-number ${n === 5 ? 'active-step' : ''}`}>{n}</span>
              ))}
            </div>
            <h1 className="postad-title">Decide how much you want to earn for your skills and time</h1>
            <p className="postad-subtitle">
              Set an hourly rate that reflects your experience and the value you bring. This helps clients understand your expectations and ensures fair, transparent work on Venejobs.
            </p>
          </div>

          <div className="postad-right">
            <div className="rate-section">
              {/* Row with hourly rate and service fee side by side */}
              <div className="rate-row">
                <div className="rate-group">
                  <label className="input-label">Set your hourly rate</label>
                  <input className="text-input" type="text" placeholder="$0.00" />
                </div>

                <div className="rate-group">
                  <label className="input-label">Service fee</label>
                  <select className="select-input">
                    <option>$0.00</option>
                    <option>10%</option>
                    <option>15%</option>
                    <option>20%</option>
                  </select>
                </div>
              </div>

              {/* Note about service fee */}
              <p className="rate-note">
                This service fee helps us run the platform, provide support, and ensure secure, protected payments. Set your hourly rate based on what you want to earn.
              </p>

              {/* You'll get */}
              <div className="rate-group">
                <label className="input-label">You'll get</label>
                <input className="text-input" type="text" placeholder="$0.00" />
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="nav-buttons">
              <button className="back-button">← Back</button>
              <button className="next-button">Review Job Post →</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
