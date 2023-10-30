import React from 'react';
import { Grid } from '@mui/material';
import Navbar from '@/components/navbar';
import { useSession } from "next-auth/react"
import ProfileSettings from '@/components/profile-settings';
import { SessionProvider } from "next-auth/react"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <SessionProvider>
        <ProfileSettings/>
      </SessionProvider>
    </div>
  );
}
