'use client';


import LogForm from '@/components/logform'
import { useSession } from 'next-auth/react';
import { Grid } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';


export default function UserInfo() {
    const { status, data: session } = useSession();

    console.log('INFO: Status value: ' + status);

    if(status=== 'authenticated')
    {
        console.log('INFO: Home page');
        return (
            <div>
              
              <Grid 
                container
                justifyContent='center'
                alignItems='center'
                style={{ height: '25vh', marginTop: '-24px', marginBottom:'0px'}}
              >
                <SchoolIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <Typography
                variant="h1"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                EduPlat
                
                
              </Typography>
              
                
              </Grid>
              <Typography
                variant="h3"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                
                
                The Educational Plataform of the future
              </Typography>
               <br />
               
              
               
              
            </div>
            
          )
    }
    else{
        console.log('INFO: Login Form Redirect');
        return <LogForm/>;
      }  
    
}