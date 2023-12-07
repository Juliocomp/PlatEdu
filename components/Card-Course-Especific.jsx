import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid, TextField, Avatar } from "@mui/material";
import Data from "@/app/data.json";

function Capp() {
  const [commentTexts, setCommentTexts] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Recuperar comentarios almacenados en localStorage al cargar la página
    const storedComments = JSON.parse(localStorage.getItem("comments")) || [];
    setComments(storedComments);
  }, []);

  const handleCommentChange = (cardId, event) => {
    setCommentTexts({
      ...commentTexts,
      [cardId]: event.target.value
    });
  };

  const handlePublicComment = (cardId, user) => {
    const commentText = commentTexts[cardId];

    if (commentText) {
      // Agregar el comentario a la lista de comentarios
      const newComment = { cardId, user, text: commentText, id: Date.now() };
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      // Almacenar comentarios en localStorage
      localStorage.setItem("comments", JSON.stringify(updatedComments));
      // Limpiar el campo de texto
      setCommentTexts({
        ...commentTexts,
        [cardId]: ""
      });
    }
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
                  value={commentTexts[result.id] || ""}
                  onChange={(event) => handleCommentChange(result.id, event)}
                />
                <Button
                  size="small"
                  onClick={() => handlePublicComment(result.id, result)}
                >
                  Agregar Comentario
                </Button>
              </CardActions>
              {/* Mostrar comentarios */}
              <CardContent>
                {comments
                  .filter((comment) => comment.cardId === result.id)
                  .map((comment) => (
                    <div
                      key={comment.id}
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
