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
      <Grid container spacing={10} style={{marginTop:'20px'}}>
        {Data.map((result,index)=>(
            <Grid item sx={{ width: '100%', display: 'flex', flexDirection: 'column' }} key={index}>
                          <Card >
<<<<<<< HEAD
<<<<<<< HEAD
                          <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
=======
=======
>>>>>>> 9de214990ed416a5088fafc1ba038e643cfb3ecc
      <CardMedia
        sx={{ height: 140 }}
        image={result.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
<<<<<<< HEAD
>>>>>>> 87a65458b9fd09fac6deb37a5d90f1111e6e5174
=======
>>>>>>> 9de214990ed416a5088fafc1ba038e643cfb3ecc
            {result.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {result.des}
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