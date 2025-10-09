'use client';

import React from "react";
import RealNavbar from "../components/realnavbar";
import Footer from "../components/footer";
import "./styles.css"; // Reuse existing styles

export default function PostJobStep1({ onNext }: { onNext?: () => void } = {}) {
  return (
    <>
      <RealNavbar />
      <main className="postad-wrapper">
        <div className="postad-container">
          <div className="postad-left">
            <div className="postad-step-numbers">
              {[1, 2, 3, 4, 5].map((n) => (
                <span key={n} className="step-number">{n}</span>
              ))}
            </div>

            <h1 className="postad-title">Comencemos con un buen título.</h1>
            <p className="postad-subtitle">
              Esto ayuda a que tu oferta destaque y llegue a los candidatos correctos. Es lo primero que verán, así que haz que cuente!
            </p>
          </div>

          <div className="postad-right">
            <label className="input-label">Write a title for your job post</label>
            <input type="text" placeholder="Enter your title" className="input-field" />

            <div className="example-titles">
              <p className="example-title">Example titles</p>
              <ul>
                <li>Diseñador UX/UI para dar vida a prototipos y maquetas de sitio web</li>
                <li>Editor de video para crear video explicativo tipo pizarra</li>
                <li>Asistente remoto para gestionar agenda y atención al cliente</li>
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
