
import { Container, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
//import { useRouter } from 'next/router'; // Para la navegación en Next.js

const Curso = () => {
 //const router = useRouter();

  const temarioDelCurso = [
    'Tema 1: Introducción al curso',
    'Tema 2: Desarrollo de la plataforma educativa',
    'Tema 3: Evaluación del aprendizaje',
    
  ];

  const tareasPorEntregar = [
    'Tarea 1: Investigación sobre un tema específico',
    'Tarea 2: Desarrollo de un proyecto',

  ];

  const tareasEntregadas = [
    'Tarea 3: Presentación de un proyecto',
  
  ];

  //const goToProfile = () => {
    // Lógica para navegar al perfil del usuario
    //router.push('./perfil');
 // };

 // const goToAnotherCourse = () => {
    // Lógica para navegar a otro curso
    //router.push('/otro-curso');
//  };

  return (
    <Container>
      <Typography variant="h3">Nombre del Curso</Typography>

      <Typography variant="h4">Temario:</Typography>
      <List>
        {temarioDelCurso.map((tema, index) => (
          <ListItem key={index}>
            <ListItemText primary={tema} />
          </ListItem>
        ))}
      </List>

      <Typography variant="h4">Tareas por entregar:</Typography>
      <List>
        {tareasPorEntregar.map((tarea, index) => (
          <ListItem key={index}>
            <ListItemText primary={tarea} />
          </ListItem>
        ))}
      </List>

      <Typography variant="h4">Tareas entregadas:</Typography>
      <List>
        {tareasEntregadas.map((tarea, index) => (
          <ListItem key={index}>
            <ListItemText primary={tarea} />
          </ListItem>
        ))}
      </List>

      <Button variant="contained" /*onClick={goToProfile}*/>Ir al Perfil</Button>
      <Button variant="contained" /*onClick={goToAnotherCourse}*/>Ir a Otro Curso</Button>
    </Container>
  );
};

export default Curso;
