import React from 'react';
import { useNavigate } from 'react-router-dom';
import ClassCard from './ClassCard';
import { modulesData } from '../data/modules';

export default function ModulesGrid() {
  const navigate = useNavigate();

  return (
    <section id="modulos" className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold text-body mb-3">Módulos del Trayecto</h2>
        <div className="mx-auto bg-primary-custom" style={{ height: '4px', width: '80px', borderRadius: '2px' }}></div>
      </div>
      
      <div className="row g-4">
        {modulesData.map((mod) => (
          <div className="col-12 col-md-6 col-lg-4" key={mod.id}>
            <ClassCard 
              title={mod.title}
              description={mod.description}
              image={mod.image}
              disabled={mod.disabled}
              onCheckIt={() => navigate(`/module/${mod.id}`)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}