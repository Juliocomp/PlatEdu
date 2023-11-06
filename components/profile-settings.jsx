import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { useSession } from "next-auth/react";
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

const StyledAvatar = styled(Avatar)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const StyledInput = styled(TextField)`
  display: none; // Oculta el input file
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

export default function ProfileSettings() {
  
  const { data: session, status } = useSession()
  const [usernameValue, setUsernameValue] = useState(session?.user.name);
  const [emailValue, setEmailValue] = useState(session?.user.email);
  const [passwordValue, setPasswordValue] = useState(session?.user.passwordValue);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  if (status === "authenticated") {
    return (
      <Box sx={{ width: '100%' }}>        
        <Grid 
          container
          justifyContent='center'
          alignItems='center'
          style={{ marginTop: '30px' }} 
          spacing={{ xs: 1, sm: 1, md: 1}}
        >
          <Grid item xs={3} md={5}/>

          <Grid item xs={8} md={6} fullWidth>
            <div>
              <label htmlFor="image-upload">
                <StyledAvatar alt="Avatar" src={selectedImage} style={{margin: "10px", width: "200px", height: "200px"}} />
                <StyledInput
                  accept="image/*"
                  id="image-upload"
                  type="file"
                  onChange={handleImageChange}
                />
                <StyledButton
                  color="primary"
                  component="span"
                  style={{ backgroundColor: 'black', color: 'white', width: "200px", height: "30px", marginLeft:'10px', marginBottom: '25px'}}
                >
                  Upload Image
                </StyledButton>
              </label>
            </div>
          </Grid>
          <Grid item xs={1} md={1}/>


          <Grid item xs={1} md={3.5}/>
          <Grid item xs={2.5} md={1}>
            <Item >
              Name:
            </Item>
          </Grid>
          <Grid item xs={7} md={3.5}>
            <TextField id="filled-basic" label="Name" value={usernameValue} onChange={(e) => setUsernameValue(e.target.value)} fullWidth/>
          </Grid>
          <Grid item xs={1.5} md={4}/>

          <Grid item xs={1} md={2.5}/>
          <Grid item xs={2.5} md={1}>
            <Item >
              Email:
            </Item>
          </Grid>
          <Grid item xs={7} md={3.5}>
            <TextField id="filled-basic" label="Email" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} fullWidth/>
          </Grid>
          <Grid item xs={1} md={3}/>

          <Grid item xs={0.5} md={2.5}/>
          <Grid item xs={2.5} md={1}>
            <Item >
              Password:
            </Item>
          </Grid>
          <Grid item xs={7} md={3.5}>
            <TextField id="filled-basic" label="Password" type="password" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} fullWidth/>
          </Grid>
          <Grid item xs={0.5} md={3}/>

          <Grid item xs={6} md={2.1}>
            <StyledButton
              color="primary"
              component="span"
              style={{ backgroundColor: 'green', color: 'white', width: "200px", height: "40px", marginLeft:'10px', marginBottom: '25px'}}
              fullWidth
            >
              Save
            </StyledButton>
          </Grid> 
        </Grid>
      </Box>
    );
  }
  else{
  }
}