'use client'

import React from 'react';
import RealNavbar from '../components/realnavbar';
import Footer from '../components/footer';
import './styles.css';

export default function FreelancerSetup2() {
  const categories = [
    'Accounting & Consulting',
    'Admin Support',
    'Customer Service',
    'Engineering & Architecture',
    'Design & Creative',
    'Sales & Marketing',
    'Web, Mobile & Software Dev',
    'IT & Networking',
    'Writing'
  ];

  const skills = [
    'User Interface Design',
    'Website Design',
    'App Design',
    'User Flow',
    'Wireframing',
    'User Experience Design',
    'Prototyping',
    'Interaction Design'
  ];

  return (
    <>
      <RealNavbar />
      <main className="postad-wrapper">
        <div className="postad-container">
          <div className="postad-left">
            <div className="postad-step-numbers">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <span key={n} className={`step-number ${n === 1 ? 'active-step' : ''}`}>{n}</span>
              ))}
            </div>
            <h1 className="postad-title">Let’s choose your category and showcase your skills</h1>
            <p className="postad-subtitle">
              Select the work you love to do and highlight your top skills. This helps us match you with the right jobs and clients on Venejobs.
            </p>
          </div>

          <div className="postad-right">
            <div className="category-section">
              <h2 className="section-title">Select the Category</h2>
              <div className="category-buttons">
                {categories.map((cat, index) => (
                  <button key={index} className="category-button">{cat}</button>
                ))}
              </div>
            </div>

            <div className="skills-section">
              <h2 className="section-title">Search skills or add your own</h2>
              <p className="skills-hint">For the best results, add 3–5 skills</p>
              <input type="text" placeholder="Search or add a skill" className="skill-input" />
              <p className="popular-label">Popular skills for UX/UI Design</p>
              <div className="skills-buttons">
                {skills.map((skill, index) => (
                  <button key={index} className="skill-button">{skill}</button>
                ))}
              </div>

            </div> {/* ✅ closes .postad-right */}
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
