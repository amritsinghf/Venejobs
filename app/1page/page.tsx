'use client';

import { useState } from "react";
import Image from "next/image";
import "./styles.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Signup from "../components/signup";

export default function Home() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <Navbar />

      {showSignup && <Signup onClose={() => setShowSignup(false)} />}

      <main className={`hero-section ${showSignup ? 'blurred' : ''}`}>
        {/* Lado Izquierdo - Texto */}
        <div className="hero-text">
          <h1>Contrataciones sin esfuerzo, trabajo con propósito en Venejobs.</h1>
          <p>
            Conecta con personas talentosas al mejor precio para aprovechar al máximo tu tiempo y presupuesto.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Buscar Freelancer</button>
            <button className="btn-secondary">Buscar Trabajo</button>
            <button
              className="btn-secondary"
              onClick={() => {
                console.log("Sign Up button clicked");
                setShowSignup(true);
              }}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Lado Derecho - Imágenes */}
        <div className="hero-images">
          <div
            className="image-crop image-crop--guy"
            style={{ position: "relative", width: "300px", height: "300px" }}
          >
            <Image
              src="/guy.png"
              alt="Freelancer"
              fill
              className="rounded-image image-adjust"
            />
            <div className="image-label">
              <p className="label-title">✔ Calidad garantizada</p>
              <p className="label-sub">Freelancers verificados</p>
            </div>
          </div>

          <div className="image-card">
            <Image
              src="/woman.png"
              alt="Seguro"
              width={338}
              height={505}
              className="rounded-image"
            />
            <div className="image-label">
              <p className="label-title">✔ Seguro y confiable</p>
              <p className="label-sub">Protección para ambas partes</p>
            </div>
          </div>
        </div>
      </main>

      <section className="how-it-works">
        <h2>¿Cómo Funciona?</h2>
        <p className="subtitle">
          Encuentra el talento perfecto para llevar tus proyectos al siguiente nivel con un proceso simple y eficaz.
        </p>
        <div className="steps-container">
          <div className="step">
            <img src="/icon-post-job.svg" alt="Publica un Trabajo" />
            <div className="step-title">Publica un Trabajo</div>
            <div className="step-desc">
              Describe tu necesidad, define presupuesto y establece el tiempo estimado.
            </div>
          </div>
          <div className="step">
            <img src="/icon-review.svg" alt="Revisa Propuestas" />
            <div className="step-title">Revisa Propuestas</div>
            <div className="step-desc">
              Compara presupuestos y perfiles de freelancers para elegir al más adecuado.
            </div>
          </div>
          <div className="step">
            <img src="/icon-collaborate.svg" alt="Colabora Fácilmente" />
            <div className="step-title">Colabora Fácilmente</div>
            <div className="step-desc">
              Trabaja con profesionales y haz seguimiento del progreso en una plataforma segura.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
