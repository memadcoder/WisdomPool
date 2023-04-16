import * as React from 'react';
import Head from 'next/head';

import { Container, Grid } from '@mui/material';

import SidebarLayout from '@/layouts/SidebarLayout';
import Footer from '@/components/Footer';
import CourseList from '@/component/CourseList';
import Snackbars from '@/components/Snackbar';
import { checkAuthentication } from '@/utility/checkAuthentication';
import { getResources } from '@/api';
import AuthLayout from '@/layouts/AuthLayout';

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
      const response = await getResources('/enroll');
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
            <CourseList
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

EnrolledCourse.getLayout = AuthLayout
export default EnrolledCourse;
