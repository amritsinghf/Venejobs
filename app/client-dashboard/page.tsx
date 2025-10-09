'use client';

import React, { useState } from 'react';
import RealNavbar from '../components/realnavbar';
import Footer from '../components/footer';
import './styles.css';

export default function ClientDashboard() {
  const [activeTab, setActiveTab] = useState<'jobs' | 'contracts'>('jobs');

  return (
    <>
      <RealNavbar />
      <main className="dashboard-wrapper">
        <div className="dashboard-container">
          {/* Header */}
          <div className="dashboard-header">
            <div className="dashboard-header-top">
              <h1 className="dashboard-title">¡Bienvenido de nuevo, Alishan!</h1>
              <div className="dashboard-buttons">
                <button className="top-button">Publicar trabajo</button>
                <button className="top-button light">Encontrar talento</button>
              </div>
            </div>
            <p className="dashboard-subtitle">
              Aquí está lo que está pasando con tus proyectos hoy. ¿Listo para encontrar talento top?
            </p>
          </div>

          {/* Section title */}
          <h2 className="dashboard-section-title small">Tus Publicaciones de Trabajo y Contratos Activos</h2>

          {/* Tabs */}
          <div className="dashboard-tabs">
            <div className="dashboard-tab-buttons">
              <button
                className={`tab-button ${activeTab === 'jobs' ? 'active' : ''}`}
                onClick={() => setActiveTab('jobs')}
              >
                Todas las publicaciones
              </button>
              <button
                className={`tab-button ${activeTab === 'contracts' ? 'active' : ''}`}
                onClick={() => setActiveTab('contracts')}
              >
                Tus contratos activos
              </button>
            </div>
          </div>

          {/* Listings */}
          {activeTab === 'jobs' ? (
            <div className="job-list">
              {[...Array(5)].map((_, i) => (
                <div className="job-card" key={i}>
                  <div className="job-info">
                    <h3 className="job-title small">
                      {i === 0
                        ? 'Landing Page Figma Designer'
                        : i === 1
                        ? '¿Puedes diseñar sitios modernos en Wordpress rápido?'
                        : i === 2 || i === 4
                        ? 'Diseño de una app completa'
                        : 'Soporte UX/UI a largo plazo'}
                    </h3>
                    <div className="job-meta job-meta-stacked">
                      <span>Publicado hace 4 días</span>
                      <div className="price-inline">
                        <img src="/price-tag.png" alt="Icono de precio" className="price-icon" />
                        <span>$330.00 · Precio fijo</span>
                      </div>
                    </div>
                  </div>

                  <div className="job-stats">
                    <span>Propuestas (2)</span>
                  </div>

                  <div className="job-actions">
                    <button className="view-details-button">Ver detalles</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="job-list">
              {[...Array(5)].map((_, i) => (
                <div className="job-card" key={i}>
                  <div className="job-info" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <img
                      src={`https://randomuser.me/api/portraits/men/${i + 30}.jpg`}
                      alt="avatar"
                      style={{ width: 48, height: 48, borderRadius: '50%' }}
                    />
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <h3 className="job-title small" style={{ marginBottom: 4 }}>Usuario {i + 1}</h3>
                        <span className="contract-badge">Contrato Activo</span>
                      </div>
                      <p style={{ fontSize: 14, color: '#666' }}>¿Puedes diseñar sitios modernos?</p>
                      <p style={{ fontSize: 12, color: '#888' }}>Fecha de inicio: 13 Dic</p>
                    </div>
                  </div>

                  <div className="job-stats" style={{ fontSize: 14 }}>
                    <p>Monto contrato: $1000.00</p>
                    <p>Monto pagado: $500.00</p>
                  </div>

                  <div className="job-actions">
                    <button className="view-details-button">Ver contrato</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="pagination">
            <button className="page-btn">1</button>
            <button className="page-btn active">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">4</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
