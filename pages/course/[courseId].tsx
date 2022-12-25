import Head from 'next/head';

import SidebarLayout from '@/layouts/SidebarLayout';
import { Container, Grid } from '@mui/material';
import Footer from '@/components/Footer';
import ActivityTab from '@/content/Management/Users/settings/ActivityTab';
import { checkAuthentication } from '@/utility/checkAuthentication';
import { useState } from 'react';

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
            <ActivityTab />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

DashboardCrypto.getLayout = (page) => {
  const [isLoggedIn, setIsloggedIn] = useState(checkAuthentication());
  return <SidebarLayout isAuthenticated={isLoggedIn}>{page}</SidebarLayout>;
};

export default DashboardCrypto;
