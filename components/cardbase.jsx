import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function CardSample() {
  const Item = styled(Paper)(() => ({
    backgroundColor: 'black',
    padding: 8,
    textAlign: 'center',
    color: 'black',
  }));
  return (
    <>
      <Grid container spacing={4}>

        <Grid item xs={6}>
          <Item elevation={3}>One</Item>
        </Grid>

        <Grid item xs={6}>
          <Item elevation={3}>Two</Item>
        </Grid>

        <Grid item xs={6}>
          <Item elevation={3}>Three</Item>
        </Grid>

        <Grid item xs={6}>
          <Item elevation={3}>Four</Item>
        </Grid>

        <Grid item xs={6}>
          <Item elevation={3}>Five</Item>
        </Grid>

        <Grid item xs={6}>
          <Item elevation={3}>Six</Item>
        </Grid>

      </Grid>
    </>
  )
}

export default CardSample;