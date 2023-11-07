import React, { useState, useEffect } from 'react';
import { Grid, Snackbar, Alert , Container} from '@mui/material';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';


const StyledInput = styled(TextField)`
  display: none;
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
`;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#363434',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#fff',
}));


const Itemcurso = styled(Paper)(({ theme }) => ({
    backgroundColor: '#532178',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#fff',
  }));

  const Itemalum = styled(Paper)(({ theme }) => ({
    backgroundColor: '#A02A79',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#fff',
  }));

export default function Adminsettings() {
  const router = useRouter();

  const { data: session, status } = useSession(); // Session info and status


  const [usernameValue, setUsernameValue] = useState(session?.user.name);
  

  const buttonStyles = {
    enabled: {
      backgroundColor: 'green',
      color: 'white',
      cursor: 'not-allowed', // Hand icon
      text:'Conectadx'
    },
    disabled: {
      backgroundColor: 'gray', // Change color if is disabled
      color: 'white',
      cursor: 'not-allowed', // Blocked icon
      text:'Desconectadx'
    },
};


const itemsColumn1 = ['Matematicas', 'Historia', 'Python', 'EDA', 'Java'];
const itemsColumn2 = ['Julio César','Jessica Saucedo', 'Eric Aguilar', 'Israel Lopez', 'Karina Madrigal'];

function getRandomBoolean() {
    return Math.random() < 0.5;
  }



    return (

        <Grid 
          container
          justifyContent='center'
          alignItems='center'
          style={{ marginTop: '30px' }} 
          spacing={{ xs: 1, sm: 1, md: 1}}
        >
            <Grid item xs={6}> 
            <Grid item xs={2.5} md={12}>
            <Item >
              Nombre de los cursos:
            </Item>
          </Grid>
          <Grid item xs={1} md={3.5}/>


          {itemsColumn1.map((constant, index) => (
            
        <Grid item xs={6} key={index}>

            <Itemcurso >
            {constant}
            </Itemcurso>
          
        </Grid>
        
        
      ))}
            </Grid>




            <Grid item xs={6}> 
            <Grid item xs={2.5} md={12}>
            <Item >
              Estudiantes registradxs:
            </Item>
          </Grid>
          <Grid item xs={1} md={3.5}/>


          {itemsColumn2.map((constant, index) => (
            
        <Grid item xs={12} key={index}>

            <Grid item xs={6} key={index}>

            <Itemalum >
            {constant}
            </Itemalum>


            </Grid>

            <Grid item xs={2}>

            <StyledButton
              color="primary"
              component="span"
              style={{
                ...buttonStyles.enabled, // Default style
                width: "40px",
                height: "40px",
                marginLeft: '10px',
                marginBottom: '25px',
                ...(getRandomBoolean() ? buttonStyles.enabled : buttonStyles.disabled) // Disabled style
              }}

            />

            </Grid>
            
        </Grid>


        
      ))}
            </Grid>


        </Grid>




        
      );


    
};




