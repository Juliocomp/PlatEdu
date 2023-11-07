import React from 'react';
import { Grid } from '@mui/material';
import Navbar from '@/components/navbar';
import { useSession } from "next-auth/react"
import Adminsettings from '@/components/Adminsettings';
import { SessionProvider } from "next-auth/react"

export default function Home() {
  return (
    <Adminsettings/>
  );
}
