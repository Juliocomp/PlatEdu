import React from 'react';
import { Grid } from '@mui/material';
import Navbar from '@/components/navbar';
import { useSession } from "next-auth/react"

export default function ProfileSettings() {
  
  const { data: session, status } = useSession()
  if (status === "authenticated") {
    return <p>Signed in as {session.user.email}</p>
  }
  else{
    return (
      <Grid 
          container
          justifyContent='center'
          alignItems='center'
          style={{ marginTop: '30px' }}
      >
          <Grid item xs={6}>
          Name
          </Grid>
          <Grid item xs={6}>
          Photo
          </Grid>
      </Grid>
    );}
}