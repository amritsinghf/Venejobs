'use client'

import React from 'react';
import RealNavbar from '../components/realnavbar';
import Footer from '../components/footer';
import './styles.css';

export default function PostJobStep2() {
  const categories = [
    'Contabilidad y Consultoría',
    'Asistencia Administrativa',
    'Atención al Cliente',
    'Ingeniería y Arquitectura',
    'Diseño y Creatividad',
    'Ventas y Marketing',
    'Desarrollo Web y Móvil',
    'IT y Redes',
    'Redacción y Traducción'
  ];

  const skills = [
    'Diseño de Interfaces',
    'Diseño Web',
    'Diseño de Apps',
    'Flujo de Usuario',
    'Wireframing',
    'Diseño UX',
    'Prototipado',
    'Diseño de Interacción'
  ];

  return (
    <>
      <RealNavbar />
      <main className="postad-wrapper">
        <div className="postad-container">
          <div className="postad-left">
            <div className="postad-step-numbers">
              {[1, 2, 3, 4, 5].map((n) => (
                <span key={n} className={`step-number ${n === 1 ? 'active-step' : ''}`}>{n}</span>
              ))}
            </div>
            <h1 className="postad-title">Encuentra al freelancer ideal para tu proyecto</h1>
            <p className="postad-subtitle">
              Esto te ayudará a destacar tu oferta frente a los candidatos adecuados. ¡Es lo primero que verán, así que hazlo contar!
            </p>
          </div>

          <div className="postad-right">
            <div className="category-section">
              <h2 className="section-title">Selecciona la categoría</h2>
              <div className="category-buttons">
                {categories.map((cat, index) => (
                  <button key={index} className="category-button">{cat}</button>
                ))}
              </div>
            </div>

            <div className="skills-section">
              <h2 className="section-title">Agrega o busca habilidades</h2>
              <p className="skills-hint">Para mejores resultados, selecciona entre 3 y 5 habilidades</p>
              <input type="text" placeholder="Buscar o escribir habilidad" className="skill-input" />
              <p className="popular-label">Habilidades populares para UX/UI</p>
              <div className="skills-buttons">
                {skills.map((skill, index) => (
                  <button key={index} className="skill-button">{skill}</button>
                ))}
              </div>
            </div>

            <div className="nav-buttons">
              <button className="back-button">← Atrás</button>
              <button className="next-button">Siguiente →</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
