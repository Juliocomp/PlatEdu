import React, { useState } from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from '../constants/Constants'
import LoginPage from '../pages/login-page'
import HomePage from '../pages/home-page';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage isLoggedIn={isLoggedIn} login={handleLogin} />} />
          <Route
            path='/welcome'
            element={isLoggedIn ? <HomePage /> : <Navigate to='/login' />}
          />
          <Route path='/*' element={<Navigate to='/login' />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const root = createRoot(document.getElementById('app'));
root.render(<App />)