import MiniDrawer from '@/components/sideMenu';
import { CurtainsOutlined } from '@mui/icons-material';
import { Container, Typography, Button, List, ListItem, ListItemText, Box } from '@mui/material';
import Capp from '@/components/CardCourseEspecific';
import { Main } from '@/components/sideMenu';


export default function Home() {
  
  return (
    <Box>
    <MiniDrawer/>
    <h1>Ingenieria de Software
    </h1>
    <Capp/>
    </Box>
 
    
    
  );
}
