'use client';

import { Button, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { signIn } from 'next-auth/react';
import Navbar from '@/components/navbar';
import LogForm from '@/components/logform'

export default function SignInBtn() {
  return (

    
    <Button
      onClick={() => signIn('github')}
      variant='contained'
      color='primary'
      style={{
        borderRadius: 35,
        backgroundColor: "#212121",
        padding: "18px 36px",
        fontSize: "18px",
        width:"270px",
        height:"60px",
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
        Sign in with GitHUb
      </Typography>
   
      
    </Button>
    
    
  
      
    
    
  );
}