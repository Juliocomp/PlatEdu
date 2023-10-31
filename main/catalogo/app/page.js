import React from 'react';
import Link from 'next/link';

const cursos = [
  { id: 1, nombre: 'Curso de Matemáticas' },
  { id: 2, nombre: 'Curso de Historia' },
  { id: 3, nombre: 'Curso de Ciencias' },
  { id: 4, nombre: 'Curso de Lengua Extranjera' }
];

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const CatalogoCursos = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Catálogo de Cursos</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <div >
          {cursos.map(curso => (
            <li key={curso.id} style={{ display: 'inline-block', margin: '5px' }}>
              <Link href={`/curso/${curso.id}`}>
                <button style={{ backgroundColor: getRandomColor(), color: 'white' }}>
                  {curso.nombre}
                </button>
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default CatalogoCursos;
