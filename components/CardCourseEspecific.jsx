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
            <Grid item xs={1000} md={100} sm={100000} key={index}>
                          <Card sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>


            </Grid>

        ))}

      </Grid>  
      </Container> 
    
  );
}

export default Capp;
