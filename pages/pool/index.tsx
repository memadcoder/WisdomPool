import Head from 'next/head';
import * as React from 'react';
import SidebarLayout from '@/layouts/SidebarLayout';
import { Container, Grid } from '@mui/material';
import Footer from '@/components/Footer';
import Avatars from 'pages/components/avatars';
import Snackbars from '@/components/Snackbar';
import { checkAuthentication } from '@/utility/checkAuthentication';
import { getResources } from '@/api';

function DashboardCrypto() {
  const [isLoggedIn, setIsloggedIn] = React.useState(checkAuthentication());
  const [poolFeeds, setPoolFeeds] = React.useState(null);
  const [enrolledCourse, setEnrolledCourse] = React.useState(null);
  React.useEffect(() => {
    getPoolFeeds();
    if (isLoggedIn) getEnrolledCourse();
  }, []);

  const getPoolFeeds = async () => {
    try {
      const response = await getResources('/course');
      setPoolFeeds(response.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  const getEnrolledCourse = async () => {
    try {
      const response = await getResources('/enrol');
      setEnrolledCourse(response.data);
    } catch (error) {
      console.log('error', error);
    }
  };
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
            <Avatars
              poolFeeds={poolFeeds}
              enrolledCourse={enrolledCourse}
              title="Pool"
            />
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
