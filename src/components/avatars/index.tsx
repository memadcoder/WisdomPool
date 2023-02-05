import { useEffect } from 'react';
import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import PageTitle from '@/components/PageTitle';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Divider,
  Typography,
  Box,
  Button
} from '@mui/material';
import Text from '@/components/Text';
import NextLink from 'next/link';
import PageHeader from '@/content/Dashboards/Crypto/PageHeader';
import Comment from '@/components/Comment';
import { checkAuthentication } from '@/utility/checkAuthentication';
import { useState } from 'react';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import { useRouter } from 'next/router';
import { createResource } from '@/api';
import StatusNoData from '@/components/status/no-data';
import CircularProgress from '@mui/material/CircularProgress';

function Avatars({ poolFeeds, enrolledCourse, title, subHeading, isLoading }) {
  const router = useRouter();
  const [isLoggedIn, setIsloggedIn] = useState(checkAuthentication());

  const enrollInCourse = async (courseId) => {
    try {
      const response = await createResource({ course: courseId }, '/enrol');
      router.push(`/course/${courseId}`);
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleEnroll = (courseId) => {
    if (!isLoggedIn) return router.push('/login');
    if (isLoggedIn && !checkIfCourseEnrolled(courseId)) {
      return enrollInCourse(courseId);
    }
    router.push(`/course/${courseId}`);
  };

  const checkIfCourseEnrolled = (courseId) => {
    const enrolled = enrolledCourse?.filter(
      (enroll) => enroll.course.id === courseId
    );
    const flag = enrolled?.length ? true : false;
    return flag;
  };

  return (
    <>
      <Head>
        <title>Wisdom Pool - {title}</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
        <PageTitle
          // heading="Pool"
          subHeading={subHeading}
        />
      </PageTitleWrapper>
      <Container maxWidth="md">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              {poolFeeds?.length ? (
                poolFeeds?.map((feed) => {
                  return (
                    <Grid item xs={12} key={feed.id}>
                      <Card>
                        <Box
                          p={3}
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          style={{
                            cursor: 'pointer',
                            background: '#223354'
                            // color: 'ActiveBorder'
                          }}
                        >
                          <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="stretch"
                            spacing={1}
                          >
                            <Grid item xs={12} sm={9}>
                              <NextLink href={`course/${feed.id}`} passHref>
                                <Box style={{ color: 'ButtonHighlight' }}>
                                  <Typography variant="h4" gutterBottom>
                                    {feed.title}
                                  </Typography>
                                  <Typography
                                    variant="subtitle2"
                                    color={'ButtonHighlight'}
                                  >
                                    {feed.description}
                                  </Typography>
                                </Box>
                              </NextLink>
                            </Grid>

                            <Grid item xs={12} sm={3}>
                              <Button
                                variant="outlined"
                                color="success"
                                endIcon={
                                  !isLoggedIn ? (
                                    <SubscriptionsIcon />
                                  ) : checkIfCourseEnrolled(feed.id) ? (
                                    <CheckCircleIcon />
                                  ) : (
                                    <SubscriptionsIcon />
                                  )
                                }
                                startIcon={
                                  feed?.byAdmin ? (
                                    <StarIcon color="warning" />
                                  ) : (
                                    ''
                                  )
                                }
                                onClick={() => {
                                  handleEnroll(feed.id);
                                }}
                              >
                                {!isLoggedIn
                                  ? 'Enroll'
                                  : checkIfCourseEnrolled(feed.id)
                                  ? 'Enrolled'
                                  : 'Enroll'}
                              </Button>
                            </Grid>
                          </Grid>
                        </Box>

                        <Divider />
                      </Card>
                    </Grid>
                  );
                })
              ) : (
                <StatusNoData />
              )}
            </>
          )}
        </Grid>
      </Container>
    </>
  );
}

export default Avatars;
