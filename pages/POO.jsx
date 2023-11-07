import MiniDrawer from '@/components/sideMenu';
import { CurtainsOutlined } from '@mui/icons-material';
import { Container, Typography, Button, List, ListItem, ListItemText, Box } from '@mui/material';
import Capp from '@/components/CardCourseEspecific';
import { Main } from '@/components/sideMenu';


export default function Home() {
  
  return (
      <Box sx={{background:'black'}} >
      <MiniDrawer/>
      <Typography style={{ margin: '25px',fontWeight: 'roboto' , color: 'white',fontSize: '32px'  }}>
      Programación Orientada a Objetos
      </Typography>
      <Capp/>
      </Box>
  
      
    
  );
}
