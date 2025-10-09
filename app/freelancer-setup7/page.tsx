'use client';

import React, { useState } from 'react';
import RealNavbar from '../components/realnavbar';
import Footer from '../components/footer';
import './styles.css';
import CongratsPopup from '../components/congratspopup';
import '../components/congratspopup.css';

export default function FreelancerSetup7() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = () => {
    // You could add validation here
    setShowPopup(true);
  };

  return (
    <>
      {showPopup && (
        <CongratsPopup
          title="¡Felicidades! Tu perfil está completo"
          description="Ya puedes explorar proyectos, conectar con clientes y comenzar tu carrera como freelancer."
          onClose={() => setShowPopup(false)}
        />
      )}

      <RealNavbar />
      <main className="postad-wrapper">
        <div className="postad-container">
          <div className="postad-left">
            <div className="postad-step-numbers">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <span key={n} className={`step-number ${n === 6 ? 'active-step' : ''}`}>{n}</span>
              ))}
            </div>
            <h1 className="postad-title">¡Ya casi terminas! Vamos a finalizar tu perfil.</h1>
            <p className="postad-subtitle">
              Solo faltan algunos datos para completar tu perfil. Esto nos ayuda a mantener la plataforma segura y a que los clientes puedan confiar en ti y pagarte sin problemas.
            </p>
          </div>

          <div className="postad-right">
            <div className="rate-section">

              {/* Foto de perfil */}
              <div className="rate-group">
                <label className="input-label">Foto de perfil</label>
                <div className="profile-photo-placeholder">📷</div>
              </div>

              {/* Nombre completo */}
              <div className="rate-group">
                <label className="input-label">Nombre completo</label>
                <input className="text-input" type="text" placeholder="Ejemplo: María Fernanda Gómez" />
              </div>

              {/* Fecha de nacimiento */}
              <div className="rate-group">
                <label className="input-label">Fecha de nacimiento</label>
                <input className="text-input" type="date" />
              </div>

              {/* País */}
              <div className="rate-group">
                <label className="input-label">País</label>
                <select className="select-input">
                  <option value="">Selecciona tu país</option>
                  <option>Venezuela</option>
                  <option>Colombia</option>
                  <option>Argentina</option>
                  <option>México</option>
                  <option>Chile</option>
                  <option>Perú</option>
                  <option>España</option>
                  <option>Estados Unidos</option>
                </select>
              </div>

              {/* Teléfono */}
              <div className="rate-group">
                <label className="input-label">Número de teléfono</label>
                <input className="text-input" type="tel" placeholder="+58 Ingresar número" />
              </div>
            </div>

            {/* Botones de navegación */}
            <div className="nav-buttons">
              <button className="back-button">← Atrás</button>
              <button className="next-button" onClick={handleSubmit}>Finalizar perfil →</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
