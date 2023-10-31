'use client';

import SignInBtn from './signin-btn';
import { useSession } from 'next-auth/react';
import { Avatar, Grid, Paper, Typography } from '@mui/material';

export default function UserInfo() {
    const { status, data: session } = useSession();

    if (status === 'authenticated') {
        return (
            <Grid container justifyContent='center'>
                <Paper elevation={8}  sx={{ p: 3, borderRadius: 3, bgcolor: '#FFE082' }} >
                    <Avatar src={session?.user?.image} sx={{ width: 60, height: 60, bgcolor: 'white' }} />
                    <Typography variant='h5' sx={{ mt: 2 }}>
                        Name: <Typography variant='subtitle1' component='span' sx={{ fontWeight: 'bold' }}>{session?.user.name}</Typography>
                    </Typography>
                    <Typography variant='h5' sx={{ mt: 2 }}>
                        Email: <Typography variant='subtitle1' component='span' sx={{ fontWeight: 'bold' }}>{session?.user.email}</Typography>
                    </Typography>
                </Paper>
            </Grid>
        );
    } else {
        return <SignInBtn />;
    }
}