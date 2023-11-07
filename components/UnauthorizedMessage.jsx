import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

const ContainerWrapper = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const ErrorTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  marginBottom: theme.spacing(2),
}));

const ButtonWrapper = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: 'black',
  color: 'white',
}));

function UnauthorizedErrorPage() {
  return (
    <ContainerWrapper maxWidth="sm">
      <ErrorTitle variant="h2">Error 401 - Unauthorized</ErrorTitle>
      <Typography variant="h4">
        Sorry, you do not have permission to access this page.
      </Typography>
      <ButtonWrapper variant="contained" color="primary">
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 300,
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Go back to the home page
        </Typography>
      </ButtonWrapper>
    </ContainerWrapper>
  );
}

export default UnauthorizedErrorPage;