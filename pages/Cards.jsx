
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import Rating from '@mui/material/Rating';

const cardStyle = {
  maxWidth: 345,
  height: '100%', //para fijar el tamano 
  margin: '30px'   //margen aplicado 
};

const descripcionStyle = { //estilo para el texto de las tarjetas
  overflowY: 'auto',// Habilitar el desplazamiento vertical si el contenido es largo
  maxHeight: '100px' //cuando se pase de todo el contenido de la carta 
};

const ratingStyle = { //estilo para el rating
  display: 'flex', //establecemos el tipo de visualizacion, un flexbox
  alignItems: 'center', //alineamos al centro del contenedor
  justifyContent: 'flex-end',//elementos dentro del contenedor se alinearán horizontalmente en el extremo derecho del espacio disponible.
};

const anchorStyle = {
  textDecoration: 'none', // Elimina el subrayado
  color: 'inherit', // Usa el color heredado (por defecto)
};

const Tarjetas=({imagen,nombreCurso,descripcion,rating,href}) => {
  

  return (
    <a href={href} style={anchorStyle}>
      <Card sx={cardStyle}>
        <CardActionArea style={{ flex: 1 }}>
          <CardMedia
            component="img"
            height="140" //alto de la imagen, altera el tamano de la carta 
            image={imagen}
            alt="imagen curso"
            style={{ objectFit: 'cover' }} // Establecer objectFit en 'cover'
          />
          <CardContent style={{ flex: 1 }}>
            <Typography gutterBottom variant="h5" component="div" >
                {nombreCurso} 
            </Typography >
            <Typography sx={descripcionStyle}ariant="body2" color="text.secondary" >
                {descripcion} 
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
            
          <Rating name="no-value" value={rating} style={ratingStyle} disabled/>
          
        </CardActions>
      </Card>
    </a>

  );
};
export default Tarjetas;