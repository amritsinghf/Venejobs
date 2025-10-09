'use client'

import React from 'react';
import RealNavbar from '../components/realnavbar';
import Footer from '../components/footer';
import './styles.css';

export default function PostJobStep3() {
  return (
    <>
      <RealNavbar />
      <main className="postad-wrapper">
        <div className="postad-container">
          <div className="postad-left">
            <div className="postad-step-numbers">
              {[1, 2, 3, 4, 5].map((n) => (
                <span key={n} className={`step-number ${n === 2 ? 'active-step' : ''}`}>{n}</span>
              ))}
            </div>
            <h1 className="postad-title">Define el alcance de tu proyecto</h1>
            <p className="postad-subtitle">
              Piensa en la magnitud del trabajo, las tareas involucradas y el tiempo estimado que tomará completarlo.
            </p>
          </div>

          <div className="postad-right">
            {/* Tamaño del proyecto */}
            <div className="section-group">
              <h2 className="section-title">Tamaño del proyecto</h2>
              <div className="select-group">
                <div className="select-box selected">
                  <span className="select-title">Grande</span>
                  <span className="select-desc">Iniciativas completas (ej. diseño + desarrollo de un sitio completo)</span>
                </div>
                <div className="select-box">
                  <span className="select-title">Mediano</span>
                  <span className="select-desc">Proyectos definidos (ej. página de aterrizaje)</span>
                </div>
                <div className="select-box">
                  <span className="select-title">Pequeño</span>
                  <span className="select-desc">Tareas rápidas (ej. actualizar texto o imágenes)</span>
                </div>
              </div>
            </div>

            {/* Duración */}
            <div className="section-group">
              <h2 className="section-title">Duración estimada</h2>
              <div className="duration-options">
                <button className="select-button">1–2 días</button>
                <button className="select-button">1 a 4 semanas</button>
                <button className="select-button selected">1 a 3 meses</button>
                <button className="select-button">3 a 6 meses</button>
                <button className="select-button">Permanente</button>
              </div>
            </div>

            {/* Nivel de experiencia */}
            <div className="section-group">
              <h2 className="section-title">Nivel de experiencia necesario</h2>
              <div className="select-group">
                <div className="select-box selected">
                  <span className="select-title">Inicial</span>
                  <span className="select-desc">Para alguien que recién comienza en esta área</span>
                </div>
                <div className="select-box">
                  <span className="select-title">Intermedio</span>
                  <span className="select-desc">Con experiencia previa sustancial</span>
                </div>
                <div className="select-box">
                  <span className="select-title">Experto</span>
                  <span className="select-desc">Con conocimientos avanzados en el tema</span>
                </div>
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
