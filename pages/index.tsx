import Head from 'next/head';
import * as React from 'react';
import SidebarLayout from '@/layouts/SidebarLayout';
import { Container, Grid } from '@mui/material';
import Footer from '@/component/Footer';
import CourseList from '@/component/CourseList';
import Snackbars from '@/component/Snackbar';
import { checkAuthentication } from '@/utility/checkAuthentication';
import { getResources } from '@/api';
import AuthLayout from '@/layouts/AuthLayout';

function Home() {
  const [isLoggedIn, setIsloggedIn] = React.useState(checkAuthentication());
  const [poolFeeds, setPoolFeeds] = React.useState(null);
  const [enrolledCourse, setEnrolledCourse] = React.useState(null);
  const [isLoading, setLoading] = React.useState(true);

  const subHeading =
    'Pool contains recommended contents according to your interest.';
  React.useEffect(() => {
    setLoading(true);
    getPoolFeeds();
    if (isLoggedIn) getEnrolledCourse();
  }, []);

  const getPoolFeeds = async () => {
    try {
      const response = await getResources('/course');
      setPoolFeeds(response.data);
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  };

  const getEnrolledCourse = async () => {
    try {
      const response = await getResources('/enroll');
      setEnrolledCourse(response.data);
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
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
            <CourseList
              isLoading={isLoading}
              poolFeeds={poolFeeds}
              enrolledCourse={enrolledCourse}
              title={'Pool'}
              subHeading={subHeading}
            />
          </Grid>
        </Grid>
        <Snackbars />
      </Container>
      <Footer />
    </>
  );
}



Home.getLayout = AuthLayout

export default Home;
