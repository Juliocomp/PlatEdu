import MiniDrawer from '@/components/sideMenu';
import { CurtainsOutlined } from '@mui/icons-material';
import { Container, Typography, Button, List, ListItem, ListItemText, Box } from '@mui/material';
import Capp from '@/components/CardCourseEspecific';
import { Main } from '@/components/sideMenu';


export default function Home() {
  
  return (
    <Box sx={{background:'black'}} >
    <MiniDrawer/>
    <Typography style={{ margin: '25px', color: 'white',fontSize: '32px'  }}>
      Python
      </Typography>
    <Capp/>
    </Box>
 
    
    
  );
}
