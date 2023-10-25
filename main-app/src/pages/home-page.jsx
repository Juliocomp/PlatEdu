import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { cards, defaultTheme } from '../constants/Constants';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Typography, Stack } from '@mui/material';

export default function HomePage() {
    return(
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <main>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth='sm'>
                        <Typography
                            component='h1'
                            variant='h2'
                            align='center'
                            color='text.primary'
                            gutterBottom
                        >
                            Home Page
                        </Typography>
                        <Typography
                            variant='h5'
                            align='center'
                            color='text.secondary'
                            paragraph
                        >
                            Something short and leading about the collection below—its contents,
                            the creator, etc. Make it short and sweet, but not too short so folks
                            don&apos;t simply skip over it entirely.
                        </Typography>
                        <Stack
                            sx={{ pt:4 }}
                            direction='row'
                            spacing={2}
                            justifyContent='center'
                        >
                            <Button variant='contained'>Pricing</Button>
                        </Stack>
                    </Container>
                </Box>
                <Container sx={{ py: 8 }} maxWidth='md'>
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component='div'
                                        sx={{
                                            pt: '56.25%'
                                        }}
                                        image='https://source.unsplash.com/random?wallpapers'
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant='h5' component='h2'>
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to describe the
                                            content.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">View</Button>
                                        <Button size="small">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))

                        }
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );
}