import React from 'react';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-dark text-white pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold mb-4 text-primary-custom">
              <i className="bi bi-fire me-2"></i>Trayecto Gasista Domiciliario
            </h5>
            <p className="text-white">
              Sumate a nuestro material de estudio y dominá el oficio con mayor salida laboral. 
              Formación técnica de calidad, paso a paso, apuntando a la matriculacion.
            </p>
          </div>
          
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold mb-4 text-secondary-custom">Contacto</h5>
            <p className="mb-2"><i className="bi bi-person-badge me-3 text-primary-custom"></i> Estudiante Marcelo Peralta</p>
            <p className="mb-2"><i className="bi bi-envelope me-3 text-primary-custom"></i> gasista.marcelo.peralta@gmail.com</p>
            <p className="mb-2"><i className="bi bi-geo-alt me-3 text-primary-custom"></i> Buenos Aires, Argentina</p>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold mb-4 text-tertiary-custom">Redes Sociales</h5>
            <div className="d-flex gap-3">
              <a href="https://www.facebook.com/profile.php?id=61586432125738" className="text-white fs-4 text-decoration-none hover-primary"><i className="bi bi-facebook"></i></a>
              <a href="https://x.com/GasistaMarcelo" className="text-white fs-4 text-decoration-none hover-primary"><i className="bi bi-twitter-x"></i></a>
              <a href="https://www.instagram.com/gasista.marcelo.peralta/" className="text-white fs-4 text-decoration-none hover-primary"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white fs-4 text-decoration-none hover-primary"><i className="bi bi-linkedin"></i></a>
              <a href="https://www.youtube.com/@MarceloPeralta.gasista" className="text-white fs-4 text-decoration-none hover-primary"><i className="bi bi-youtube"></i></a>
            </div>
          </div>
        </div>
        
        <hr className="mb-4 border-secondary opacity-25" />
        
        <div className="row align-items-center">
          <div className="col-12 text-center">
            <p className="mb-0 text-white">
              © {new Date().getFullYear()} Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
