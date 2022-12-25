import Head from 'next/head';

import SidebarLayout from '@/layouts/SidebarLayout';
import { Container, Grid } from '@mui/material';
import Footer from '@/components/Footer';
import ActivityTab from '@/content/Management/Users/settings/ActivityTab';
import Avatars from 'pages/components/avatars';
import { checkAuthentication } from '@/utility/checkAuthentication';
import { useState } from 'react';
// import { withPrivateRoute } from '@/hocs/withPrivateRoute';

function DashboardCrypto() {
  return (
    <>
      <Head>
        <title>Wisdom Pool</title>
      </Head>
      {/* <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper> */}
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12}>
            {/* <Avatars /> */}
            <ActivityTab />
          </Grid>
          {/* <Grid item xs={12}>
            <AccountBalance />
          </Grid>
          <Grid item lg={8} xs={12}>
            <Wallets />
          </Grid>
          <Grid item lg={4} xs={12}>
            <AccountSecurity />
          </Grid>
          <Grid item xs={12}>
            <WatchList />
          </Grid> */}
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
