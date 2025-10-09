'use client';
import React from "react";
import RealNavbar from "../components/realnavbar";
import Footer from "../components/footer";
import "./styles.css"; // ✅ Correct path to CSS

export default function FreelancerSetup1({ onNext }: { onNext?: () => void } = {}) {
  return (
    <>
      <RealNavbar />
      <main className="postad-wrapper">
        <div className="postad-container">
          <div className="postad-left">
          <div className="postad-step-numbers">
  {[1, 2, 3, 4, 5, 6].map((n) => (
    <span key={n} className="step-number">{n}</span>
  ))}
</div>

            <h1 className="postad-title"> ¡Genial! Ahora agrega un título profesional que muestre a los clientes lo que mejor sabes hacer</h1>
            <p className="postad-subtitle">
            Causa una gran primera impresión compartiendo tu título profesional. Esto ayuda a los clientes a entender rápidamente tu experiencia.
            </p>
          </div>

          <div className="postad-right">
            <label className="input-label">Cuéntanos que sabes hacer</label>
            <input type="text" placeholder="Enter your title" className="input-field" />

            <div className="example-titles">
              <p className="example-title">Titulos de ejemplo</p>
              <ul>
                <li>Diseñador UX/UI Certificado por Google | Experto en Sitios Web</li>
                <li>Diseñador UX/UI | Especialista en Aplicaciones Web y Móviles</li>
                <li>Diseñador UX/UI, Desarrollador de Apps Móviles, Experto en Marketing</li>
              </ul>
            </div>

            <div className="button-right">
              <button className="postad-next-btn" onClick={onNext}>Next →</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
