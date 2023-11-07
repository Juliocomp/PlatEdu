import React, { useState } from "react";
import { useRouter } from "next/router";
import { Grid, Button, TextField, Paper } from '@mui/material';

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const [courseKey, setCourseKey] = useState("");
  const router = useRouter();

  const handleCourseKeyChange = (event) => {
    setCourseKey(event.target.value);
  };

  const addCourse = () => {
    setCourses([...courses, { id: courseKey, name: `Curso ${courseKey}` }]);
    setCourseKey("");
  };

  const viewCourseDetails = (courseId) => {
    router.push(`${courseId}`);
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: '100px', backgroundColor: '#F0F3F4' }}>
          <div style={{ textAlign: 'center' }}>
            <h1>Mis Cursos</h1>
            <TextField
              label="Clave del Curso"
              value={courseKey}
              onChange={handleCourseKeyChange}
            />
            <br /> <br />
            <Button
              variant="contained"
              onClick={addCourse}
              style={{ backgroundColor: '#000000', color: '#ffffff' }}
            >
              Agregar Curso
            </Button>
            <br /> <br />
            {courses.map((course, index) => (
              <React.Fragment key={course.id}>
                <Button
                  variant="outlined"
                  style={{backgroundColor: '#FFFFFF', borderColor: '#000000', color: '#000000', margin: '10px' }}
                  onClick={() => viewCourseDetails(course.id)}
                >
                  {course.name}
                </Button>
              </React.Fragment>
            ))}
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MyCourses;
