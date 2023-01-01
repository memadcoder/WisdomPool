import Head from 'next/head';
import * as React from 'react';
import SidebarLayout from '@/layouts/SidebarLayout';
import { Container, Grid } from '@mui/material';
import Footer from '@/components/Footer';
import Avatars from 'pages/components/avatars';
import Snackbars from '@/components/Snackbar';
import { checkAuthentication } from '@/utility/checkAuthentication';
import { getResources } from '@/api';

function EnrolledCourse() {
  const [isLoggedIn, setIsloggedIn] = React.useState(checkAuthentication());
  const [isLoading, setLoading] = React.useState(true);
  const [poolFeeds, setPoolFeeds] = React.useState(null);
  const [enrolledCourse, setEnrolledCourse] = React.useState(null);

  const subHeading = 'Enrolled contains course you have already joined to.';

  React.useEffect(() => {
    if (isLoggedIn) getEnrolledCourse();
  }, []);

  const getEnrolledCourse = async () => {
    try {
      const response = await getResources('/enrol');
      setEnrolledCourse(response.data);
      const filteredData = response?.data?.map((value) => value.course);
      setPoolFeeds(filteredData);
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Wisdom Pool - Enrolled Course</title>
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
              title="Enrolled Course"
              subHeading={subHeading}
              isLoading={isLoading}
            />
          </Grid>
        </Grid>
        <Snackbars />
      </Container>
      <Footer />
    </>
  );
}

EnrolledCourse.getLayout = (page) => {
  const [isLoggedIn, setIsloggedIn] = React.useState(checkAuthentication()); // use now
  return <SidebarLayout isAuthenticated={isLoggedIn}>{page}</SidebarLayout>;
};

export default EnrolledCourse;
