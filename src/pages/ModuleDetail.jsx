import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { modulesData } from '../data/modules';

export default function ModuleDetail() {
  const { id } = useParams();
  const module = modulesData.find(m => m.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!module) {
    return (
      <div className="container py-5 text-center min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <h2 className="display-4 fw-bold text-danger mb-4">Módulo no encontrado</h2>
        <p className="lead text-muted mb-4">El módulo que intentas buscar no existe o ha sido movido.</p>
        <Link to="/" className="btn btn-primary-custom btn-lg rounded-pill px-4">
          <i className="bi bi-house me-2"></i>Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="mb-4">
        <Link to="/" className="btn btn-outline-secondary rounded-pill px-3">
          <i className="bi bi-arrow-left me-2"></i>Volver a Módulos
        </Link>
      </div>
      
      <div className="row mb-5 align-items-center">
        <div className="col-lg-8">
          <h1 className="display-4 fw-bold text-primary-custom mb-3">{module.title}</h1>
          <p className="lead text-muted">{module.description}</p>
        </div>
      </div>

      <div className="row g-5">
        <div className="col-lg-8">
          {/* Marco Teórico */}
          <section className="mb-5 bg-white p-4 rounded shadow-sm border-top border-primary border-4">
            <h3 className="fw-bold mb-4 text-dark">
              <i className="bi bi-journal-text me-3 text-primary-custom fs-2 align-middle"></i>
              Marco Teórico
            </h3>
            <p className="text-muted lh-lg">
              Aquí se desarrolla el contenido teórico fundamental del <strong>{module.title}</strong>. 
              Este apartado incluye los conceptos principales, las normativas vigentes (como la NAG-200), 
              procedimientos de cálculo, y las especificaciones técnicas necesarias para la correcta 
              ejecución de las tareas profesionales.
            </p>
            <p className="text-muted lh-lg">
              El objetivo es brindar al estudiante las bases sólidas para comprender el "por qué" de cada 
              procedimiento, garantizando instalaciones seguras y eficientes de acuerdo a la reglamentación.
            </p>
          </section>

          {/* Imágenes */}
          <section className="mb-5 bg-white p-4 rounded shadow-sm border-top border-secondary border-4">
            <h3 className="fw-bold mb-4 text-dark">
              <i className="bi bi-images me-3 text-secondary-custom fs-2 align-middle"></i>
              Imágenes de Referencia
            </h3>
            <div className="row g-3">
              <div className="col-md-6">
                <img src={module.image} alt={module.title} className="img-fluid rounded shadow-sm w-100" style={{ height: '250px', objectFit: 'cover' }} />
              </div>
              <div className="col-md-6">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" alt="Práctica" className="img-fluid rounded shadow-sm w-100" style={{ height: '250px', objectFit: 'cover' }} />
              </div>
            </div>
          </section>

          {/* Video Educativo */}
          <section className="mb-5 bg-white p-4 rounded shadow-sm border-top border-danger border-4">
            <h3 className="fw-bold mb-4 text-dark">
              <i className="bi bi-play-btn me-3 text-danger fs-2 align-middle"></i>
              Video Educativo
            </h3>
            <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
              <iframe src={module.videoUrl} title="Video Educativo" allowFullScreen></iframe>
            </div>
          </section>
        </div>

        <div className="col-lg-4">
          {/* Infografía */}
          <section className="mb-5 bg-light p-4 rounded shadow-sm border">
            <h4 className="fw-bold mb-4 text-dark border-bottom pb-2">
              <i className="bi bi-file-earmark-bar-graph me-2 text-tertiary-custom"></i>
              Infografía
            </h4>
            <div className="text-center py-4 bg-white rounded border border-dashed">
              <i className="bi bi-diagram-3 display-1 text-muted mb-3"></i>
              <h5 className="fw-bold">Esquema Conceptual</h5>
              <p className="text-muted small px-3">Representación visual de los procesos y componentes clave del módulo.</p>
              <button className="btn btn-sm btn-outline-tertiary mt-2">Ver Infografía Completa</button>
            </div>
          </section>

          {/* Manuales */}
          <section className="mb-5 bg-light p-4 rounded shadow-sm border">
            <h4 className="fw-bold mb-4 text-dark border-bottom pb-2">
              <i className="bi bi-file-earmark-pdf me-2 text-quaternary-custom"></i>
              Manuales
            </h4>
            <div className="list-group list-group-flush">
              <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center bg-transparent px-0">
                <div>
                  <i className="bi bi-file-pdf text-danger me-2"></i>
                  <span className="fw-semibold text-dark">Manual Técnico</span>
                </div>
                <span className="badge bg-primary-custom rounded-pill"><i className="bi bi-download"></i></span>
              </a>
              <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center bg-transparent px-0">
                <div>
                  <i className="bi bi-file-pdf text-danger me-2"></i>
                  <span className="fw-semibold text-dark">Guía de Prácticas</span>
                </div>
                <span className="badge bg-primary-custom rounded-pill"><i className="bi bi-download"></i></span>
              </a>
              <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center bg-transparent px-0">
                <div>
                  <i className="bi bi-file-pdf text-danger me-2"></i>
                  <span className="fw-semibold text-dark">Normativa NAG-200</span>
                </div>
                <span className="badge bg-primary-custom rounded-pill"><i className="bi bi-download"></i></span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
