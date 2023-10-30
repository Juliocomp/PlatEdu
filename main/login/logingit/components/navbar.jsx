'use client';

import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Navbar() {
    const { status } = useSession();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' sx={{ boxShadow: 'md' }}>
                <Toolbar>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                        App
                    </Typography>
                    {status === 'authenticated' ? (
                        <Button onClick={() => signOut()} color='inherit'>Sign Out</Button>
                    ) : (
                        <Button onClick={() => signIn('google')} color='inherit'>Sign In</Button>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}