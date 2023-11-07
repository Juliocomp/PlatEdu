import React, { useState } from "react";
import { useRouter } from "next/router";
import { Grid, Button, TextField } from '@mui/material';

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const [courseKey, setCourseKey] = useState(""); // Estado para la clave del curso
  const router = useRouter();

  // Función para manejar el cambio en el campo de entrada de la clave del curso
  const handleCourseKeyChange = (event) => {
    setCourseKey(event.target.value);
  };

  // Función para agregar el curso a la lista
  const addCourse = () => {
    setCourses([...courses, { id: courseKey, name: `Curso ${courseKey}` }]);
    setCourseKey(""); // Reiniciar el campo de entrada
  };

  // Función para redirigir a la página de detalles del curso
  const viewCourseDetails = (courseId) => {
    router.push(`${courseId}`);
  };

  return (
    <Grid item xs={8} md={6} fullWidth>
      <div style={{ textAlign: 'center' }}>
        <h1>Mis Cursos</h1>
        <TextField
          label="Clave del Curso"
          value={courseKey}
          onChange={handleCourseKeyChange}
        />
        <br /> <br />
        <Button variant="contained" onClick={addCourse} style={{ backgroundColor: '#000000', color: '#ffffff' }}>
          Agregar Curso
        </Button>
        <br /> <br />
        {courses.map((course, index) => (
          <React.Fragment key={course.id}>
            <Button
              variant="outlined"
              style={{ borderColor: '#000000', color: '#000000', margin: '10px' }} // Espacio entre botones
              onClick={() => viewCourseDetails(course.id)}
            >
              {course.name}
            </Button>
          </React.Fragment>
        ))}
      </div>
    </Grid>
  );
  
};

export default MyCourses;
