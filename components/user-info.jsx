'use client';


import LogForm from '@/components/logform'
import { useSession } from 'next-auth/react';
import { Container, Grid } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Paper from '@mui/material/Paper';






export default function UserInfo() {
    const { status, data: session } = useSession();

    console.log('INFO: Status value: ' + status);

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    if(status != 'loading'){
      if(status=== 'authenticated')
      {
          console.log('INFO: Home page');
          return (
            <Container 
              container
              justifyContent='center'
              alignItems='center'
              style={{ height: '25vh', marginTop: '-24px', marginBottom:'0px'}}
            >
              <Typography
                variant="h1"
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                EduPlat  
                <SchoolIcon sx={{ display: { xs: 'flex', md: 'flex' } }} />
              </Typography>

              <Typography
                variant="h4"
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                The Educational Plataform of the future
              </Typography>
                          <Card
                          sx={{
                            backgroundColor: '#000000', // Cambia este color a tu preferencia
                          }}
                          
                          >
              <CardMedia
                component="img"
                color="black"
                alt="Technological Image"

                //height="600" // Ajusta la altura de la imagen según tus necesidades
                image="/static/images/home_1.jpg" // Reemplaza con la ruta de tu imagen
              />
              <Typography
                variant="h6"
                component="a"
                href="/"
                sx={{
                  p: 2,
                  display: { xs: 'flex', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  //color: 'inherit',
                  color: 'white',
                  textDecoration: 'none',
                  textAlign: 'right',
                  fontSize: '1.5rem',
                }}
              >
                Join thousands of classes from hundreds of different proffessors
              </Typography>
            </Card>


            <Typography
                variant="h6" // Cambiado de h4 a h6 para hacer la letra más pequeña
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  textAlign: 'right', // Alineación del texto a la derecha
                  fontSize: '1.5rem', // Puedes ajustar el tamaño de la fuente según tus preferencias
                }}
              >
                In this platform your knowledge is the most valuable thing. Perfect connection with your teachers and other classmates is what PlatEdu believes in
              </Typography>

              <Card
                          sx={{
                            backgroundColor: '#000000', // Cambia este color a tu preferencia
                          }}
                          
                          >
              <CardMedia
                component="img"
                color="black"
                alt="Technological Image"
                width="300"
                height="300" // Ajusta la altura de la imagen según tus necesidades
                image="/static/images/home_4.jpg" // Reemplaza con la ruta de tu imagen
              />
              </Card>

              <Card
                          sx={{
                            backgroundColor: '#000000', // Cambia este color a tu preferencia
                          }}
                          
                          >
              <CardMedia
                component="img"
                color="black"
                alt="Technological Image"

                //height="600" // Ajusta la altura de la imagen según tus necesidades
                image="/static/images/home_3.gif" // Reemplaza con la ruta de tu imagen
              />
              <Typography
                variant="h6"
                component="a"
                href="/"
                sx={{
                  p: 2,
                  display: { xs: 'flex', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  //color: 'inherit',
                  color: 'white',
                  textDecoration: 'none',
                  textAlign: 'right',
                  fontSize: '1.5rem',
                }}
              >
                Intuitive and useful user interface
              </Typography>
            </Card>
              



            
            </Container>




          )
      }
      else{
        console.log('INFO: Login Form Redirect');
        return <LogForm/>;
      }  
  }
}