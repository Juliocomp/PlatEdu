import React from 'react';
import { Grid } from '@mui/material';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Grid 
        container
        justifyContent='center'
        alignItems='center'
        style={{ height: '100vh', marginTop: '-24px' }}
      >
        Profile
      </Grid>
    </div>
  );
}
