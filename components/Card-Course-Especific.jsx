import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid, TextField, Avatar } from "@mui/material";
import Data from "@/app/data.json";

function Capp() {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handlePublicComment = (index, user) => {
    // Agregar el comentario a la lista de comentarios
    setComments([...comments, { index, user, text: commentText }]);
    // Limpiar el campo de texto
    setCommentText("");
  };

  return (
    <Container
      maxWidth="lg"
      style={{ marginTop: "50px", background: "black" }}
    >
      <Grid container spacing={10} style={{ marginTop: "20px" }}>
        {Data.map((result, index) => (
          <Grid
            item
            sx={{ width: "100%", display: "flex", flexDirection: "column" }}
            key={index}
          >
            <Card style={{ display: "flex", flexDirection: "column" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {result.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {result.des}
                </Typography>
              </CardContent>
              <CardActions style={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  src={result.userImage}
                  alt={result.userName}
                  sx={{ marginRight: 1 }}
                />
                <TextField
                  label="Comentario Público"
                  variant="outlined"
                  size="small"
                  value={commentText}
                  onChange={handleCommentChange}
                />
                <Button
                  size="small"
                  onClick={() => handlePublicComment(index, result)}
                >
                  Agregar Comentario
                </Button>
              </CardActions>
              {/* Mostrar comentarios */}
              <CardContent>
                {comments
                  .filter((comment) => comment.index === index)
                  .map((comment, commentIndex) => (
                    <div
                      key={commentIndex}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Avatar
                        src={comment.user.userImage}
                        alt={comment.user.userName}
                        sx={{ marginRight: 1 }}
                      />
                      <Typography>{comment.text}</Typography>
                    </div>
                  ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Capp;
