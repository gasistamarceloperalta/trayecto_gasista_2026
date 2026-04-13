import React from 'react';
const imagenes = import.meta.glob(
  '../assets/images/modulo02/clase_01/*',
  { eager: true }
);
const img = (nombre) => imagenes[`../assets/images/modulo02/clase_01/${nombre}`]?.default;
export default function Module2Class1() {
  return (
    <>
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-primary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-book-half me-3 text-primary-custom fs-2"></i>
          Clase 01 - 07/04: Cuestionario de Estudio y Práctica Técnica
        </h3>
        <div className="text-muted lh-lg">
          <h4 className="fw-bold text-body mt-4 mb-3">Marco Teórico: Conceptos Clave del Mundo del Trabajo</h4>
          <p>Durante la sesión, se analizaron los pilares del derecho laboral individual y colectivo:</p>
          
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item bg-transparent px-0">
              <strong>Sindicato:</strong> Asociación permanente de trabajadores constituida para la defensa y promoción de sus intereses económicos, sociales y profesionales frente al empleador y el Estado. Se compone de trabajadores de una misma actividad, oficio o categoría.
            </li>
            <li className="list-group-item bg-transparent px-0">
              <strong>Representación Sindical:</strong> Los representantes son elegidos mediante voto directo, libre y secreto de los afiliados, bajo el marco de la Ley 23.551.
            </li>
            <li className="list-group-item bg-transparent px-0">
              <strong>Convenio Colectivo de Trabajo (CCT):</strong> Acuerdo entre un sindicato con personería gremial y una representación patronal que regula condiciones laborales y salariales con fuerza de ley (erga omnes).
            </li>
            <li className="list-group-item bg-transparent px-0">
              <strong>Paritaria:</strong> Espacio de negociación paritario donde ambas partes discuten actualizaciones del CCT, principalmente salarios.
            </li>
            <li className="list-group-item bg-transparent px-0">
              <strong>Relación Laboral:</strong> Se configura cuando una persona presta servicios voluntarios en favor de otra, bajo dependencia técnica, económica y jurídica, a cambio de una remuneración.
            </li>
            <li className="list-group-item bg-transparent px-0">
              <strong>Empleo Formal vs. Informal:</strong> El empleo formal se registra ante los organismos de seguridad social (ARCA/AFIP). El informal, en cambio, priva al trabajador de aportes, obra social y protección legal.
            </li>
            <li className="list-group-item bg-transparent px-0">
              <strong>Modalidades de Contratación:</strong> Se identificaron el contrato por tiempo indeterminado (modalidad principal), a plazo fijo, eventual, a tiempo parcial, de aprendizaje y de grupo.
            </li>
          </ul>

          <h4 className="fw-bold text-body mt-4 mb-3">Reflexión sobre la Modernización Laboral</h4>
          <p>Se observó que el material suministrado requiere una actualización urgente frente a la Ley 27.742 (Ley de Modernización Laboral). Esta norma representa un cambio de paradigma: se desplaza desde un sistema de protección rígido centralizado en la LCT (modelo 2019) hacia uno basado en la descentralización y la autonomía de la voluntad. El desafío radica en fomentar la competitividad sin comprometer el "trabajo decente" ni caer en la precarización.</p>

          <h4 className="fw-bold text-body mt-4 mb-3">Actividades Realizadas</h4>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item bg-transparent px-0">
              <strong>Trabajo Grupal:</strong> El Cuestionario de Estudio fue resuelto por el Grupo 3.
            </li>
            <li className="list-group-item bg-transparent px-0">
              <strong>Corrección:</strong> Se contrastaron las respuestas con los apuntes del instructor, detectando las brechas normativas mencionadas.
            </li>
            <li className="list-group-item bg-transparent px-0">
              <strong>Laboratorio Técnico:</strong> Se realizó el desmontaje de las instalaciones de gas ubicadas en el muro derecho de la pizarra.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-5">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-images me-3 text-secondary-custom fs-2"></i>
          Imágenes Ilustrativas
        </h3>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="ratio ratio-4x3 rounded overflow-hidden shadow-sm">
              <img src={img('desarme_01.jpg')} alt="Práctica de desarme 1" className="img-fluid rounded shadow-sm w-100 object-fit-cover" />
            </div>
          </div>
        </div>
      </section>
<section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-quaternary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-journal-text me-3 text-quaternary-custom fs-2"></i>
          Documentación
        </h3>
        <div className="row g-3">
          <div className="col-md-6">
            <a href="https://drive.google.com/file/d/1mkj6lW1_iGs6qGuVbWlBo8__TmgE07GL/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              <div className="p-3 border rounded d-flex justify-content-between align-items-center bg-body-secondary hover-shadow transition-all h-100">
                <div className="d-flex align-items-center">
                  <i className="bi bi-file-earmark-pdf-fill text-danger fs-3 me-3"></i>
                  <div>
                    <h6 className="mb-1 fw-bold text-body">Relaciones del Trabajo y Orientación Profesional</h6>
                    <small className="text-muted">Google Drive Link</small>
                  </div>
                </div>
                <button className="btn btn-sm btn-outline-primary rounded-pill px-3">
                  <i className="bi bi-box-arrow-up-right"></i>
                </button>
              </div>
            </a>
          </div>
          <div className="col-md-6">
            <a href="https://drive.google.com/file/d/1lPAQM1rMyr3DX1sQu4iUG9_VoG1Cr_wA/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              <div className="p-3 border rounded d-flex justify-content-between align-items-center bg-body-secondary hover-shadow transition-all h-100">
                <div className="d-flex align-items-center">
                  <i className="bi bi-file-earmark-pdf-fill text-danger fs-3 me-3"></i>
                  <div>
                    <h6 className="mb-1 fw-bold text-body">LEY DE MODERNIZACIÓN LABORAL - Ley 27802</h6>
                    <small className="text-muted">Google Drive Link</small>
                  </div>
                </div>
                <button className="btn btn-sm btn-outline-primary rounded-pill px-3">
                  <i className="bi bi-box-arrow-up-right"></i>
                </button>
              </div>
            </a>
          </div>
        </div>
      </section>
      <footer className="text-center mt-5 pt-4 border-top text-muted">
        <p>© 2026 Curso de Trayecto Gasista Estudiante Marcelo Peralta</p>
      </footer>
    </>
  );
}