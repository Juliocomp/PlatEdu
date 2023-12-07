import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Diversity3TwoToneIcon from '@mui/icons-material/Diversity3TwoTone';
import FeedIcon from '@mui/icons-material/Feed';
import ChecklistIcon from '@mui/icons-material/Checklist';
import { Typography } from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' , background:'black' }}>
          <Box sx={{ display: 'flex', gap: 2 }}>

            <Button href='/Card-Course-Especific.jsx' color="inherit"><FeedIcon sx={{ mr: 1 }} />Feed</Button>
            <Button href='/Card-Course-Especific-Persons.jsx' color="inherit"><Diversity3TwoToneIcon sx={{ mr: 1 }} />Personas</Button>
            <Button color="inherit"><ChecklistIcon sx={{ mr: 1 }} />Calificaciones</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}