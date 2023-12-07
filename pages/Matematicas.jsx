import MiniDrawer from '@/components/sideMenu';
import { CurtainsOutlined } from '@mui/icons-material';
import { Container, Typography,Box } from '@mui/material';
import Capp from '@/components/CardCourseEspecific';
import ButtonAppBar from '@/components/navBarCourse'

export default function Home() {
  
  return (
    <Box sx={{background:'black'}} >
    <ButtonAppBar/>
    
    <MiniDrawer/>
    <Typography style={{ margin: '25px', color: 'white',fontSize: '32px'  }}>
      Matematicas
    </Typography>
    <Capp/>
    </Box>
 
    
    
  );
}

