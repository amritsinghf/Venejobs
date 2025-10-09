'use client';

import React, { useState } from 'react';
import RealNavbar from '../components/realnavbar';
import Footer from '../components/footer';
import CongratsPopup from '../components/congratspopup';
import '../components/congratspopup.css';
import './styles.css';

export default function ReviewJobDetails() {
  const [showPopup, setShowPopup] = useState(false);

  const handlePublish = () => {
    setShowPopup(true);
  };

  return (
    <>
      {showPopup && (
        <CongratsPopup
          title="¡Felicidades! Tu trabajo está publicado"
          description="Empezarás a recibir propuestas pronto. También puedes explorar freelancers para encontrar el mejor talento."
          onClose={() => setShowPopup(false)}
        />
      )}

      <RealNavbar />
      <main className="review-wrapper">
        <div className="review-container">
          <h1 className="review-title">Revisa los detalles de tu trabajo</h1>
          <p className="review-subtitle">
            Tómate un momento para revisar los datos del proyecto y asegurarte de que todo esté claro antes de publicarlo.
          </p>

          <div className="review-card">
            {/* Título */}
            <div className="review-block">
              <div className="review-row">
                <h2 className="review-label">Título</h2>
                <div className="review-value">Diseño Web Interactivo en Figma</div>
              </div>
            </div>

            {/* Descripción */}
            <div className="review-block">
              <div className="review-row">
                <h2 className="review-label">Descripción</h2>
                <div className="review-value">
                  Buscamos un diseñador UI talentoso para unirse a nuestro equipo. Como diseñador UI, serás responsable de crear interfaces visualmente atractivas y fáciles de usar para aplicaciones web y móviles.
                  <ul>
                    <li>Dominio de herramientas como Sketch, Figma o Adobe XD</li>
                    <li>Buen entendimiento de principios UX y mejores prácticas</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Archivos adjuntos */}
            <div className="review-block">
              <div className="review-row">
                <h2 className="review-label">Archivos adjuntos</h2>
                <img src="/project-details.png" alt="file icon" style={{ width: '30px', height: '30px' }} />
                <div>
                  <div className="file-name">project-details.pdf</div>
                  <div className="file-size">2.3mb</div>
                </div>
              </div>
            </div>

            {/* Categoría y Habilidades */}
            <div className="review-block">
              <div className="review-row">
                <h2 className="review-label">Categoría</h2>
                <div className="review-value">Diseño</div>
              </div>
              <div className="review-row">
                <h2 className="review-label">Habilidades</h2>
                <div className="review-value">Diseño UX/UI, Diseño Web, Wireframing, User Flow</div>
              </div>
            </div>

            {/* Tamaño, Duración, Experiencia, Presupuesto */}
            <div className="review-block">
              <div className="review-row">
                <h2 className="review-label">Tamaño del proyecto</h2>
                <div className="review-value">Grande</div>
              </div>
              <div className="review-row">
                <h2 className="review-label">Duración estimada</h2>
                <div className="review-value">Menos de un mes</div>
              </div>
              <div className="review-row">
                <h2 className="review-label">Nivel de experiencia requerido</h2>
                <div className="review-value">Inicial</div>
              </div>
              <div className="review-row">
                <h2 className="review-label">Presupuesto</h2>
                <div className="review-value">$500.00</div>
              </div>
            </div>

            {/* Botones */}
            <div className="review-buttons">
              <button className="btn-secondary">← Atrás</button>
              <div className="review-buttons-right">
                <button className="btn-outline">Guardar como borrador</button>
                <button className="btn-primary" onClick={handlePublish}>Publicar trabajo →</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
