
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import Rating from '@mui/material/Rating';

const cardStyle = {
  maxWidth: 345,
  height: '100%', //para fijar el tamano 
  margin: '30px',   //margen aplicado 
  borderRadius: 12
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

const CardTemplate=({image,title,description,rating,href}) => {
  
  return (
    <a href={href} style={anchorStyle}>
      <Card sx={cardStyle}>
        <CardActionArea style={{ flex: 1 }}>
          <CardMedia
            component="img"
            height="140" //alto de la imagen, altera el tamano de la carta 
            image={image}
            alt="imagen curso"
            style={{ objectFit: 'cover' }} // Establecer objectFit en 'cover'
          />
          <CardContent style={{ flex: 1 }}>
            <Typography gutterBottom variant="h5" component="div" >
                {title} 
            </Typography >
            <Typography sx={descripcionStyle}ariant="body2" color="text.secondary" >
                {description} 
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          
            
          <Rating name="no-value" value={rating} style={ratingStyle} disabled/>
          
        </CardActions>
      </Card>
    </a>

  );
};
export default CardTemplate;
