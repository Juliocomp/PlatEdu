import * as React from 'react';
import darkTheme from '@/styles/theme'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Navbar from '@/components/navbar'
import { Typography,Grid, Badge } from '@mui/material';
import { AlignHorizontalLeft,AnnouncementSharp,AssignmentLateSharp, Event, Message } from '@mui/icons-material';

const drawerWidth = 250;


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));




const sideMenu =() =>{

  const theme  = darkTheme;
  const [open, setOpen] = React.useState( false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(!open);
  };
 
  return (
    
    <Box sx={{ display: 'flex' }}>
      
      
      <AppBar position="absolute" sx={{ background: "black"}} open={open}>
        <Toolbar >
            <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            <Navbar  />
            </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <AlignHorizontalLeft />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
              {[
                { text: 'Tareas Pendientes', icon: < AssignmentLateSharp /> , href:'/catalogo'},
                { text: 'Novedades', icon: <AnnouncementSharp /> , path: '/Novedades'},
                { text: 'Calendario', icon: <Event />, path: '/Calendario' },
                { text: 'Mensajes', icon: <Message />, path: '/Mensajes' }
                ].map((item, index) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                    </ListItemButton>
              </ListItem>
              ))}
        </List>
        
        <Divider />
        
       
      </Drawer>
    
    </Box>
  );
}

export default sideMenu;