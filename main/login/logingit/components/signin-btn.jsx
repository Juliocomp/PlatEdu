'use client';

import { Button, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { signIn } from 'next-auth/react';

export default function SignInBtn() {
  return (
    <Button
      onClick={() => signIn('google')}
      variant='contained'
      color='primary'
      sx={{
        borderRadius: '24px',
        padding: '8px 16px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          backgroundColor: '#2E7D32',
        },
      }}
    >
      <GoogleIcon sx={{ fontSize: 30, marginRight: 1 }} />
      <Typography variant="button" sx={{ color: 'white' }}>
        Sign in with Google
      </Typography>
    </Button>
  );
}