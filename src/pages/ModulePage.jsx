import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { modulesData } from '../data/modules';

export default function ModulePage() {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const moduleInfo = modulesData.find(m => m.id === parseInt(moduleId));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!moduleInfo) {
    return (
      <div className="container py-5 text-center">
        <h2 className="display-6 text-muted">Módulo no encontrado</h2>
        <button className="btn btn-primary-custom mt-3" onClick={() => navigate('/')}>Volver al inicio</button>
      </div>
    );
  }

   // Generar clases para el módulo (14 para el módulo 1, 16 para los demás)
  const classes = Array.from({ length: moduleId === '1' ? 14 : 16 }, (_, i) => i + 1);
const getClassDate = (modId, classNum) => {
    if (modId === '1') {
      const dates = {
        1: '09 de marzo del 2026',
        2: '10 de marzo del 2026',
        3: '11 de marzo del 2026',
        4: '12 de marzo del 2026',
        5: '16 de marzo del 2026',
        6: '17 de marzo del 2026',
        7: '18 de marzo del 2026',
        8: '19 de marzo del 2026',
        9: '25 de marzo del 2026',
        10: '26 de marzo del 2026',
        11: '30 de marzo del 2026',
        12: '31 de marzo del 2026',
        13: '01 de abril del 2026',
        14: '06 de abril del 2026',
      };
      return dates[classNum] ? `Clase ${classNum} dictada el dia ${dates[classNum]}` : null;
    }
    if (modId === '2') {
      const dates = {
        1: '07 de abril del 2026',
        2: '08 de abril del 2026',
        3: '09 de abril del 2026',
        4: '13 de abril del 2026',
      };
      return dates[classNum] ? `Clase ${classNum} dictada el día ${dates[classNum]}` : null;
    }
    return null;
  };
  return (
    <div className="container py-5">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none text-primary-custom fw-semibold">
              <i className="bi bi-house-door-fill me-1"></i>Inicio
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">{moduleInfo.title}</li>
        </ol>
      </nav>
      
      <div className="mb-5">
        <h1 className="display-4 fw-bold text-body mb-3">{moduleInfo.title}</h1>
        <p className="lead text-muted">{moduleInfo.description}</p>
        <div className="bg-primary-custom mt-4" style={{ height: '4px', width: '80px', borderRadius: '2px' }}></div>
      </div>
      
      <div className="row g-4">
        {classes.map(classNum => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={classNum}>
            <div className="card h-100 shadow-sm class-card border-0 bg-body">
              <div className="card-body text-center p-4 d-flex flex-column">
                <div className="bg-body-secondary text-primary-custom rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-3 shadow-sm" style={{ width: '70px', height: '70px', fontSize: '1.8rem', fontWeight: 'bold' }}>
                  {classNum}
                </div>
                <h5 className="card-title fw-bold mb-2">Clase {classNum}</h5>
                <p className="card-text text-muted small mb-4 flex-grow-1">
                  {getClassDate(moduleId, classNum)
                    ? getClassDate(moduleId, classNum)
                    : `Contenido, material teórico y práctico de la clase ${classNum}.`}
                </p>
                <Link to={`/module/${moduleId}/class/${classNum}`} className="btn btn-primary-custom w-100 rounded-pill fw-semibold">
                  Ingresar a la Clase
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}