'use client';

import { Button, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { signIn } from 'next-auth/react';

export default function SignInBtn() {
  return (
    <Button
      onClick={() => signIn('github')}
      variant='contained'
      color='primary'
      style={{
        borderRadius: 35,
        backgroundColor: "#21b6ae",
        padding: "18px 36px",
        fontSize: "18px"
      }}
      sx={{
        borderRadius: '28px',
        padding: '8px 16px',
        backgroundColor: '#212121',
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