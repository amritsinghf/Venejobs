'use client'

import React from 'react';
import RealNavbar from '../components/realnavbar';
import Footer from '../components/footer';
import './styles.css';

export default function PostJobStep5() {
  return (
    <>
      <RealNavbar />
      <main className="postad-wrapper">
        <div className="postad-container">
          <div className="postad-left">
            <div className="postad-step-numbers">
              {[1, 2, 3, 4, 5].map((n) => (
                <span key={n} className={`step-number ${n === 4 ? 'active-step' : ''}`}>{n}</span>
              ))}
            </div>
            <h1 className="postad-title">Comparte los detalles de tu proyecto</h1>
            <p className="postad-subtitle">
              Proporciona una descripción clara del proyecto, incluyendo tus metas, requerimientos y expectativas, para atraer al talento adecuado.
            </p>
          </div>

          <div className="postad-right">
            {/* Descripción */}
            <div className="section-group">
              <label htmlFor="description" className="section-title">Describe el trabajo o proyecto</label>
              <textarea
                id="description"
                className="textarea-input"
                placeholder="Ejemplo: Necesito un asistente virtual que responda correos, organice archivos y dé seguimiento a tareas del equipo."
                rows={8}
              />
            </div>

            {/* Subir archivo */}
            <div className="section-group">
              <label className="section-title">Sube tu archivo</label>
              <div className="upload-area">
                <button className="upload-button">📎 Adjuntar archivo</button>
                <p className="upload-note">Tamaño máximo de archivo: 100MB</p>
              </div>
            </div>

            {/* Navegación */}
            <div className="nav-buttons">
              <button className="back-button">← Atrás</button>
              <button className="next-button">Revisar publicación →</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
