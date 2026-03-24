import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { modulesData } from '../data/modules';
import Module1Class1 from './Module1Class1';
import Module1Class2 from './Module1Class2';
import Module1Class3 from './Module1Class3';
import Module1Class4 from './Module1Class4';
import Module1Class5 from './Module1Class5';
import Module1Class6 from './Module1Class6';
import Module1Class7 from './Module1Class7';
import Module1Class8 from './Module1Class8';

export default function ClassPage() {
  const { moduleId, classId } = useParams();
  const navigate = useNavigate();
  const moduleInfo = modulesData.find(m => m.id === parseInt(moduleId));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!moduleInfo) {
    return (
      <div className="container py-5 text-center">
        <h2 className="display-6 text-muted">Clase no encontrada</h2>
        <button className="btn btn-primary-custom mt-3" onClick={() => navigate('/')}>Volver al inicio</button>
      </div>
    );
  }

  const isModule1Class1 = moduleId === '1' && classId === '1';
  const isModule1Class2 = moduleId === '1' && classId === '2';
  const isModule1Class3 = moduleId === '1' && classId === '3';
  const isModule1Class4 = moduleId === '1' && classId === '4';
  const isModule1Class5 = moduleId === '1' && classId === '5';
  const isModule1Class6 = moduleId === '1' && classId === '6';
  const isModule1Class7 = moduleId === '1' && classId === '7';
  const isModule1Class8 = moduleId === '1' && classId === '8';

  return (
    <div className="container py-5">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none text-primary-custom fw-semibold">
              <i className="bi bi-house-door-fill me-1"></i>Inicio
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/module/${moduleId}`} className="text-decoration-none text-primary-custom fw-semibold">
              {moduleInfo.title}
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">Clase {classId}</li>
        </ol>
      </nav>
      
      <div className="mb-5">
        <h6 className="text-primary-custom text-uppercase fw-bold tracking-wider">{moduleInfo.title}</h6>
        <h1 className="display-4 fw-bold text-body mt-2">Clase {classId}</h1>
        <div className="bg-secondary-custom mt-4" style={{ height: '4px', width: '80px', borderRadius: '2px' }}></div>
      </div>

      {isModule1Class1 ? (
        <Module1Class1 />
      ) : isModule1Class2 ? (
        <Module1Class2 />
      ) : isModule1Class3 ? (
        <Module1Class3 />
      ) : isModule1Class4 ? (
        <Module1Class4 />
      ) : isModule1Class5 ? (
        <Module1Class5 />
      ) : isModule1Class6 ? (
        <Module1Class6 />
      ) : isModule1Class7 ? (
        <Module1Class7 />
      ) : isModule1Class8 ? (
        <Module1Class8 />
      ) : (
        <>
          {/* Marco Teórico */}
          <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-primary">
            <h3 className="fw-bold mb-4 d-flex align-items-center">
              <i className="bi bi-book-half me-3 text-primary-custom fs-2"></i>
              Marco Teórico
            </h3>
            <div className="text-muted lh-lg">
              <p>Aquí se desarrollará el contenido teórico de la clase {classId}. Este espacio está reservado para la explicación detallada de los conceptos, normativas y procedimientos correspondientes al temario del módulo de <strong>{moduleInfo.title}</strong>.</p>
              <p>El marco teórico es fundamental para comprender las bases de la instalación, los materiales permitidos y las regulaciones vigentes (como la NAG-200) que todo gasista matriculado debe conocer y aplicar.</p>
            </div>
          </section>

          {/* Imágenes */}
          <section className="mb-5">
            <h3 className="fw-bold mb-4 d-flex align-items-center">
              <i className="bi bi-images me-3 text-secondary-custom fs-2"></i>
              Imágenes Ilustrativas
            </h3>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="ratio ratio-4x3 rounded overflow-hidden shadow-sm">
                  <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600" alt="Ilustración 1" className="object-fit-cover" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="ratio ratio-4x3 rounded overflow-hidden shadow-sm">
                  <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600" alt="Ilustración 2" className="object-fit-cover" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="ratio ratio-4x3 rounded overflow-hidden shadow-sm">
                  <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600" alt="Ilustración 3" className="object-fit-cover" />
                </div>
              </div>
            </div>
          </section>

          {/* Infografía */}
          <section className="mb-5 bg-body-secondary p-4 p-md-5 rounded shadow-sm">
            <h3 className="fw-bold mb-4 d-flex align-items-center">
              <i className="bi bi-file-bar-graph me-3 text-tertiary-custom fs-2"></i>
              Infografía
            </h3>
            <div className="text-center py-5 bg-body border rounded shadow-sm">
              <i className="bi bi-diagram-3 text-muted opacity-50" style={{ fontSize: '5rem' }}></i>
              <h5 className="mt-4 text-body fw-bold">Diagrama de Procesos</h5>
              <p className="text-muted mb-0">Espacio reservado para la infografía o diagrama de flujo de la clase {classId}.</p>
            </div>
          </section>

          {/* Video Educativo */}
          <section className="mb-5">
            <h3 className="fw-bold mb-4 d-flex align-items-center">
              <i className="bi bi-play-btn-fill me-3 text-danger fs-2"></i>
              Video Educativo
            </h3>
            <div className="ratio ratio-16x9 rounded overflow-hidden shadow-lg">
              <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Video Educativo" allowFullScreen></iframe>
            </div>
          </section>

          {/* Manuales */}
          <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-quaternary">
            <h3 className="fw-bold mb-4 d-flex align-items-center">
              <i className="bi bi-journal-text me-3 text-quaternary-custom fs-2"></i>
              Manuales y Descargas
            </h3>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="p-3 border rounded d-flex justify-content-between align-items-center bg-body-secondary hover-shadow transition-all">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-file-earmark-pdf-fill text-danger fs-3 me-3"></i>
                    <div>
                      <h6 className="mb-1 fw-bold">Apunte Teórico Clase {classId}</h6>
                      <small className="text-muted">PDF Document • 2.4 MB</small>
                    </div>
                  </div>
                  <button className="btn btn-sm btn-outline-primary rounded-pill px-3">
                    <i className="bi bi-download"></i>
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3 border rounded d-flex justify-content-between align-items-center bg-body-secondary hover-shadow transition-all">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-file-earmark-word-fill text-primary fs-3 me-3"></i>
                    <div>
                      <h6 className="mb-1 fw-bold">Guía de Trabajos Prácticos</h6>
                      <small className="text-muted">Word Document • 1.1 MB</small>
                    </div>
                  </div>
                  <button className="btn btn-sm btn-outline-primary rounded-pill px-3">
                    <i className="bi bi-download"></i>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
