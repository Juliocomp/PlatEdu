import React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { InputAdornment } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { signIn } from 'next-auth/react';

const LogForm = () => {
 

  

  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica para enviar los datos de inicio de sesión al servidor.
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Email"
        variant="outlined"
        InputProps={{
            startAdornment:(
                <InputAdornment position="start">
                    <AccountCircle/>
                </InputAdornment>
            ),
        }}
        
        
        
        
        
      />
      <br />
      <br />



      <TextField
        label="Pasword"
        variant="outlined"
        type="password"
        
        
        
        
      />
      <br />



      <Button variant="contained"
        color="primary" 
        type="submit" style={{
        borderRadius: 35,
        backgroundColor: "#212121",
        padding: "18px 36px",
        fontSize: "18px"
      }}
      sx={{
        borderRadius: '28px',
        padding: '8px 16px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          backgroundColor: '#2E7112',
        },
      }}>
        LogIn
      </Button>



      <br />
      <Button
      onClick={() => signIn('github')}
      variant='contained'
      color='primary'
      style={{
        borderRadius: 35,
        backgroundColor: "#212121",
        padding: "18px 36px",
        fontSize: "18px"
      }}
      sx={{
        borderRadius: '28px',
        padding: '8px 16px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          backgroundColor: '#2E7112',
        },
      }}
    >
      <GitHubIcon sx={{ fontSize: 30, marginRight: 1 }} />
      <Typography variant="button" sx={{ color: 'white' }}>
        GitHUb
      </Typography>
   
      
    </Button>

    </form>
  );
};

export default LogForm;
