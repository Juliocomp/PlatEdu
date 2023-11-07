import UserInfo from '@/components/user-info';
import { Grid } from '@mui/material';
import Navbar from '@/components/navbar';
import LogForm from '@/components/logform'

export default function Home() {
  return (
    <Grid 
      container
      justifyContent='center'
      alignItems='center'
      style={{ height: '100vh', marginTop: '-24px' }}
    >
      <UserInfo />
    </Grid>
  );
}