import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CardSample from "@/components/cardbase";
import { Grid } from "@mui/material";
import Data from '@/app/data.json';

function cards() {
  return (
      <Container maxWidth="lg" style={{marginTop:"10rem"}}> 
      <h1>hola</h1>
      <Grid container spacing={5} style={{marginTop:'20px'}}>
        {Data.map((result,index)=>(
            <Grid item xs={12} md={4} sm={4} key={index}>
                 <Card sx={{ maxWidth: 345 }}>
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

export default cards;
