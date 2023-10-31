import React from 'react';
import { useRouter } from 'next/router';

const CursoDetalle = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Detalles del Curso {id}</h1>
      <p>Contenido del curso...</p>
    </div>
  );
};

export default CursoDetalle;




