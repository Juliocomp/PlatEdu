'use client'

import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SchoolIcon from '@mui/icons-material/School';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSession, signOut } from "next-auth/react";


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

function ResponsiveAppBar({ customImage }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { status, data: session } = useSession();
  const [selectedImage, setSelectedImage] = useState(session?.user.image);

  useEffect(() => {
    if (session) {
      const customImage = sessionStorage.getItem('customImage');
      if (customImage) {
        setSelectedImage(customImage);
        console.log('INFO: Image value loaded: ' + customImage);
      } else {
        setSelectedImage(session.user.image);
        console.log('INFO: Image value loaded: ' + session.user.image);
      }
    }
  }, [session]);

  const handleSignOut = async () => {
    console.log('INFO: Login out from user session.')
    await signOut();
    console.log('SUCCESS: Session logout.')
    window.location.href = '/'; // Redirect to home
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  if (status === 'authenticated') {
    return (
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar >
              <SchoolIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                EduPlat
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  <MenuItem key='Cataloug Courses' onClick={handleCloseNavMenu}>
                    <Button
                      key='Cataloug Courses'
                      onClick={handleCloseNavMenu}
                      href='/catalogo'
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      Cataloug Courses
                    </Button>
                  </MenuItem>
                  <MenuItem key='My Courses' onClick={handleCloseNavMenu}>
                    <Button
                      key='My Courses'
                      onClick={handleCloseNavMenu}
                      href='/mycourses'
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      My Courses
                    </Button>
                  </MenuItem>
                  <MenuItem key='Administration' onClick={handleCloseNavMenu}>
                    <Button
                      key='Administration'
                      onClick={handleCloseNavMenu}
                      href='/administrator'
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      Administration
                    </Button>
                  </MenuItem>
                </Menu>
              </Box>

              <SchoolIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                EduPlat
              </Typography>
              
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button
                  key='Cataloug Courses'
                  onClick={handleCloseNavMenu}
                  href='/catalogo'
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Cataloug Courses
                </Button>
                <Button
                  key='My Courses'
                  onClick={handleCloseNavMenu}
                  href='/mycourses'
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  My Courses
                </Button>
                <Button
                  key='Administration'
                  onClick={handleCloseNavMenu}
                  href='/administrator'
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Administration
                </Button>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar src={selectedImage} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem>
                    <Button
                      href='/profile'
                      sx={{
                        mr: 2,
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.2rem',
                        color: 'inherit',
                        textDecoration: 'none',
                      }}
                      // Executes when log out button is clicked
                      onClick={handleSignOut}
                    >
                      Profile
                    </Button>
                  </MenuItem>
                  
                  <MenuItem component='button'>
                    <Button
                      sx={{
                        mr: 2,
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.2rem',
                        color: 'inherit',
                        textDecoration: 'none',
                      }}
                      // Executes when log out button is clicked
                      onClick={handleSignOut}
                    >
                      Logout
                    </Button>
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
      
    );
  }
  else{
    return (
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar >
              <SchoolIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                EduPlat
              </Typography>

              <SchoolIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                EduPlat
              </Typography>

            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
      
    );
  }
}
export default ResponsiveAppBar;