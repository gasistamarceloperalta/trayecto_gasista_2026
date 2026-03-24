import React, { useState } from 'react';

export default function QuickLinks() {
  const [showModal, setShowModal] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const links = [
    { title: 'Normativas', icon: 'bi-book', colorClass: 'bg-primary-custom', url: 'https://www.enargas.gob.ar/secciones/normativa/normas-tecnicas.php', isModal: true },
    { title: 'Plan de Estudios', icon: 'bi-journal-text', colorClass: 'bg-secondary-custom', url: 'https://drive.google.com/file/d/15X2nWUpvYtFDtiRYQfx4Dq_2R3pEvwUb/preview', originalUrl: 'https://drive.google.com/file/d/15X2nWUpvYtFDtiRYQfx4Dq_2R3pEvwUb/view?usp=sharing', isModal: true },
    { title: 'Asociación', icon: 'bi-people', colorClass: 'bg-tertiary-custom', url: 'https://www.aigasra.com.ar/', isModal: true },
    { title: 'Distribución', icon: 'bi-building', colorClass: 'bg-quaternary-custom', url: 'https://www.naturgyban.com.ar/', isModal: true },
  ];

  const handleCardClick = (link) => {
    if (link.isModal) {
      setActiveLink(link);
      setShowModal(true);
    }
  };

  return (
    <>
      <section className="container py-5 mt-n5 position-relative" style={{ zIndex: 10, marginTop: '-20px' }}>
        <div className="row g-4">
          {links.map((link, index) => (
            <div 
              className="col-12 col-md-6 col-lg-3" 
              key={index}
              onClick={() => handleCardClick(link)}
              style={{ cursor: link.isModal ? 'pointer' : 'default' }}
            >
              <div className={`card quick-link-card text-center h-100 ${link.colorClass} shadow transition-all hover-shadow`}>
                <div className="card-body py-4">
                  <i className={`bi ${link.icon} display-4 mb-3 d-block`}></i>
                  <h5 className="card-title fw-bold m-0">{link.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Dinámico */}
      {showModal && activeLink && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable" role="document">
            <div className="modal-content shadow-lg" style={{ height: '85vh' }}>
              <div className="modal-header bg-light">
                <h5 className="modal-title fw-bold text-primary-custom">
                  <i className={`bi ${activeLink.icon} me-2`}></i>{activeLink.title}
                </h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
              </div>
              <div className="modal-body p-0 bg-white">
                <iframe 
                  src={activeLink.url} 
                  title={activeLink.title} 
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  allowFullScreen
                />
              </div>
              <div className="modal-footer bg-light py-2">
                <a href={activeLink.originalUrl || activeLink.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm me-auto">
                  <i className="bi bi-box-arrow-up-right me-2"></i>Abrir en nueva pestaña
                </a>
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}