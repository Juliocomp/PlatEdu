'use client';


import LogForm from '@/components/logform'
import { useSession } from 'next-auth/react';
import { Container, Grid } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';


export default function UserInfo() {
    const { status, data: session } = useSession();

    console.log('INFO: Status value: ' + status);

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
              
            </Container>
          )
      }
      else{
        console.log('INFO: Login Form Redirect');
        return <LogForm/>;
      }  
  }
}