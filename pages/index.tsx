import Head from 'next/head';
import * as React from 'react';
import SidebarLayout from '@/layouts/SidebarLayout';
import { Container, Grid } from '@mui/material';
import Footer from '@/components/Footer';
import Avatars from 'pages/components/avatars';
import Snackbars from '@/components/Snackbar';
import { checkAuthentication } from '@/utility/checkAuthentication';

function DashboardCrypto() {
  return (
    <>
      <Head>
        <title>Wisdom Pool</title>
      </Head>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12}>
            <Avatars />
          </Grid>
        </Grid>
        <Snackbars />
      </Container>
      <Footer />
    </>
  );
}

DashboardCrypto.getLayout = (page) => {
  const [isLoggedIn, setIsloggedIn] = React.useState(checkAuthentication()); // use later
  return <SidebarLayout isAuthenticated>{page}</SidebarLayout>;
};

export default DashboardCrypto;
