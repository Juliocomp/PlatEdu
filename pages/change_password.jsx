import React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Typography, Grid } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { InputAdornment } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { signIn } from 'next-auth/react';

const change_password = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh' }}
    >
      <form onSubmit={handleSubmit}>
        <Grid item>
          <TextField
            label="Email"
            variant="outlined"
            style={{
              width: '270px',
              height: '60px',
            }}
          />
        </Grid>

        <br />
        <br />


        <Grid item>
          <TextField
            label="Old password"
            variant="outlined"
            type="password"
            style={{
              width: '270px',
              height: '60px',
            }}
          />
        </Grid>
        <br />
        <br />

        <Grid item>
          <TextField
            label="New password"
            variant="outlined"
            type="password"
            style={{
              width: '270px',
              height: '60px',
            }}
          />
        </Grid>
        <br />
        <br />
        

        


        <Grid item>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{
              borderRadius: 35,
              backgroundColor: '#212121',
              paddingTop: '18px',
              fontSize: '18px',
              width: '270px',
              height: '60px',
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
            Change password
          </Button>
        </Grid>

        <br />
        <br />
      </form>
    </Grid>
  );
};

export default change_password;
