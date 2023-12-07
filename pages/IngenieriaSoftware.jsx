import MiniDrawer from '@/components/side-Menu';
import { CurtainsOutlined } from '@mui/icons-material';
import { Container, Typography, Button, List, ListItem, ListItemText, Box } from '@mui/material';
import Capp from '@/components/Card-Course-Especific';
import { Main } from '@/components/side-Menu';
import ButtonAppBar from '@/components/navbar-Course'

export default function Home() {
  
  return (
    <Box sx={{background:'black'}} >
    <ButtonAppBar/>
    
    <MiniDrawer/>
    <Typography style={{ margin: '25px', color: 'white',fontSize: '32px'  }}>
      Ingenieria de Software
      </Typography>
    <Capp/>
    </Box>
 
    
    
  );
}
