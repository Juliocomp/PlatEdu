import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container,Grid } from "@mui/material";
import Data from '@/app/data.json';


function Capp() {
  return (
      <Container maxWidth="lg" style={{marginTop:"50 px", background: "black"}}> 
            <h1>hola</h1>
      <Grid container spacing={10} style={{marginTop:'20px'}}>
        {Data.map((result,index)=>(
            <Grid item sx={{ width: '100%', display: 'flex', flexDirection: 'column' }} key={index}>
                          <Card >
<<<<<<< HEAD
=======
      <CardMedia
<<<<<<< HEAD
        sx={{ height: 70 }}
        image="/static/images/cards/contemplative-reptile.jpg"
=======
        sx={{ height: 140 }}
        image={result.img}
>>>>>>> db9a144f089fde92b949a5a3f7d2301196c4cf75
        title="green iguana"
      />
>>>>>>> 4a8d0720394addfda745487920cf5bdbb8ffdcb1
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
<<<<<<< HEAD
          TAREA 1 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Para esta primera tarea se desea investigar sobre el "Boom Latinoamerocano", enlistar los principales autores y su obras.
=======
            {result.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {result.des}
>>>>>>> db9a144f089fde92b949a5a3f7d2301196c4cf75
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comentario Publico</Button>
        <Button size="small">Comentario Privado</Button>
      </CardActions>
    </Card>


            </Grid>

        ))}

      </Grid>  
      </Container> 
    
  );
}

export default Capp;
