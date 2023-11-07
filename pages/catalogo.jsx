import Tarjetas from './Cards';
import { Grid } from '@mui/material';

const gridItemStyle = {
  marginBottom: '100px', // Ajusta la cantidad de píxeles según tus necesidades
};

export default function catalogoCursos() {
  return (
    <Grid container spacing={1} >
       <Grid item xs={12} sm={6} md={3} >
          <Tarjetas
            imagen="/static/images/math.jpg"
            nombreCurso="Matematicas"
            descripcion="Este curso de Matemáticas Avanzadas 
            se adentra en los aspectos más profundos y desafiantes 
            de las matemáticas, abarcando teoría y aplicaciones. 
            Es adecuado para estudiantes apasionados por las matemáticas 
            y que desean explorar conceptos a
            vanzados que tienen un impacto significativo en diversas disciplinas."
            rating={3}
            href='/Matematicas'

         ></Tarjetas>
       </Grid>

       <Grid item xs={12} sm={6} md={3}>
          <Tarjetas
            imagen="/static/images/poo.png"
            nombreCurso="Programacion Orientada a objetos"
            descripcion="Descripción del Curso:
            Este curso de Programación Orientada a Objetos (POO) 
            está diseñado para proporcionar a los estudiantes 
            una base sólida en los conceptos, principios y prácticas 
            de la programación orientada a objetos. La POO es un enfoque 
            fundamental en el desarrollo de software y es ampliamente 
            utilizada en la industria de la tecnología."
            rating={5}
            href='/POO'


         ></Tarjetas>
       </Grid>

       <Grid item xs={12} sm={6} md={3}>
          <Tarjetas
            imagen="/static/images/soft.png"
            nombreCurso="Ingenieria de software"
            descripcion="Este curso de Ingeniería de Software ofrece una 
            inmersión completa en los principios, métodos y prácticas f
            undamentales de la ingeniería de software. Los estudiantes adquirirán 
            un profundo entendimiento de cómo diseñar, desarrollar y gestionar software 
            de alta calidad,
             cumpliendo con los estándares de la industria."
            rating={2}
            href='/IngenieriaSoftware'

         ></Tarjetas>
       </Grid>
        
       <Grid item xs={12} sm={6} md={3}>
          <Tarjetas
            imagen="/static/images/python.jpg"
            nombreCurso="Python"
            descripcion="Este curso de Python está diseñado para 
            introducir a los principiantes en el mundo de la programación 
            utilizando el lenguaje Python. Python es conocido por su simplicidad 
            y versatilidad, lo que lo hace ideal para aquellos que desean aprender a programar desde 
            cero o ampliar sus habilidades en programación."
            rating={2}
            href='/Python'

         ></Tarjetas>
       </Grid>
       <Grid item xs={12} sm={6} md={3}>
          <Tarjetas
            imagen="/static/images/Segnales.jpg"
            nombreCurso="Sistemas de comunicaciones."
            descripcion="ste curso de Comunicaciones Avanzadas en Sistemas de Red está 
            diseñado para proporcionar a los estudiantes una comprensión sólida de los 
            principios y tecnologías fundamentales que sustentan las modernas redes de 
            comunicaciones. A medida que la demanda de conectividad y comunicación global
            continúa creciendo, la habilidad para diseñar, implementar y gestionar sistemas
            de comunicaciones eficientes se convierte en un
            activo esencial en el mundo de la tecnología."
            rating={2}
            href='/SisCom'

         ></Tarjetas>
       </Grid>

       
       
       
    </Grid>
    
  );
}
