import React from 'react';

export default function ClassCard({ title, description, image, onCheckIt, disabled }) {
  return (
    <div className="card class-card">
      <img src={image} className="card-img-top" alt={title} style={{ height: '220px', objectFit: 'cover', opacity: disabled ? 0.7 : 1 }} />
      <div className="card-body d-flex flex-column">
        <h5 className={`card-title fw-bold ${disabled ? 'text-muted' : 'text-primary-custom'}`}>{title}</h5>
        <p className="card-text flex-grow-1 text-muted">{description}</p>
        <button 
          onClick={onCheckIt} 
          className={`btn w-100 mt-3 fw-bold rounded-pill shadow-sm ${disabled ? 'btn-secondary disabled' : 'btn-secondary-custom'}`}
          disabled={disabled}
        >
          {disabled ? 'Próximamente' : 'Ingresar'} {disabled ? <i className="bi bi-clock ms-1"></i> : <i className="bi bi-arrow-right ms-1"></i>}
        </button>
      </div>
      <div className="card-footer bg-body">
        <div className="d-flex justify-content-between icon-row px-2 py-2">
          <i className="bi bi-journal-text" title="Marco Teórico"></i>
          <i className="bi bi-images" title="Imágenes"></i>
          <i className="bi bi-file-earmark-bar-graph" title="Infografía"></i>
          <i className="bi bi-play-btn" title="Video"></i>
          <i className="bi bi-file-earmark-pdf" title="Manuales"></i>
        </div>
      </div>
    </div>
  );
}