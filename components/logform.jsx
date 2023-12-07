import React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Typography,Grid } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { InputAdornment } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { signIn } from 'next-auth/react';
import SignInBtn from './signin-btn';
import Popup from './PopupForgot';
import Popup from './PopupRegister';



const LogForm = () => {
/*
  const [showPopup, setShowPopup] = useState(false);
  const [dataFromPopup, setDataFromPopup] = useState('');

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleReceiveData = (data) => {
    setDataFromPopup(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
*/





  return (
    <form onSubmit={handleSubmit}>
      

     

      <TextField
         label="Email"
        variant="outlined"
        style={{width:"270px",
        height:"60px",}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
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
        style={{width:"270px",
        height:"60px",
        }}
        
        
        
        
      />
      <br />
      <br />



      <Button variant="contained"
        color="primary" 
        type="submit" 
        style={{
        borderRadius: 35,
        backgroundColor: "#212121",
        paddingTop: "18px",
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
      }}>
        LogIn
      </Button>
      
      <br />
      <br />

      <Button variant="contained"
        color="primary" 
        type="submit" 
        style={{
        borderRadius: 35,
        backgroundColor: "#212121",
        paddingTop: "7px",
        fontSize: "10px",
        width:"100px",
        height:"30px",
       
        }}
      sx={{
        borderRadius: '28px',
        padding: '8px 16px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          backgroundColor: '#2E7112',
        },
      }}>
        Register
      </Button>

      <Button variant="contained"
        color="primary" 
        type="submit" 
        style={{
        borderRadius: 35,
        backgroundColor: "#212121",
        paddingTop: "7px",
        fontSize: "10px",
        width:"180px",
        height:"30px",
       
        }}
      sx={{
        borderRadius: '28px',
        padding: '8px 16px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          backgroundColor: '#2E7112',
        },
      }}>
        Forgot my password
      </Button>

      

      <br />
      <br />
      <SignInBtn/>
    </form>
  );
};

export default LogForm;
