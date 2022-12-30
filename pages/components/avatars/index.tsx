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
import { getResources, createResource } from '@/api';

function Avatars() {
  const router = useRouter();
  const [isLoggedIn, setIsloggedIn] = useState(checkAuthentication());
  const [poolFeeds, setPoolFeeds] = useState(null);
  const [enrolledCourse, setEnrolledCourse] = useState(null);

  useEffect(() => {
    getPoolFeeds();
    if (isLoggedIn) getEnrolledCourse();
  }, []);

  const getPoolFeeds = async () => {
    try {
      const response = await getResources('/course');
      console.log('response.data', response.data);
      setPoolFeeds(response.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  const enrollInCourse = async (courseId) => {
    try {
      const response = await createResource({ course: courseId }, '/enrol');
      router.push(`/course/${courseId}`);
    } catch (error) {
      console.log('error', error);
    }
  };

  const getEnrolledCourse = async () => {
    try {
      const response = await getResources('/enrol');
      console.log('enrolled course', response.data);
      setEnrolledCourse(response.data);
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
        <title>Pool</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
        <PageTitle
          // heading="Pool"
          subHeading="Pool contains recommended contents according to your interest."
          docs="https://material-ui.com/components/avatars/"
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
          {poolFeeds?.length &&
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

                      <Button
                        variant="outlined"
                        color="success"
                        endIcon={
                          !isLoggedIn ? (
                            <SubscriptionsIcon />
                          ) : feed?.enrolled ? (
                            <CheckCircleIcon />
                          ) : (
                            <SubscriptionsIcon />
                          )
                        }
                        startIcon={
                          feed?.byAdmin ? <StarIcon color="warning" /> : ''
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
                    </Box>

                    <Divider />
                    {/* <CardContent sx={{ p: 4 }}>
                      <Typography variant="subtitle2">
                        <Grid container spacing={0}>
                          <Grid
                            item
                            xs={12}
                            sm={4}
                            md={3}
                            textAlign={{ sm: 'right' }}
                          >
                            <Box pr={3} pb={2}>
                              Total Time:
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={8} md={9}>
                            <Text color="black">
                              <b>{feed?.totalTime}</b>
                            </Text>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={4}
                            md={3}
                            textAlign={{ sm: 'right' }}
                          >
                            <Box pr={3} pb={2}>
                              Created Date:
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={8} md={9}>
                            <Text color="black">
                              <b>{feed?.createdDate}</b>
                            </Text>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={4}
                            md={3}
                            textAlign={{ sm: 'right' }}
                          >
                            <Box pr={3} pb={2}>
                              Content Creators:
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={8} md={9}>
                            <Box sx={{ maxWidth: { xs: 'auto', sm: 300 } }}>
                              {feed?.authors?.map((author, index) => {
                                return (
                                  <>
                                    <Text color="black" key={index}>
                                      {author}
                                    </Text>
                                    <br />
                                  </>
                                );
                              })}
                            </Box>
                          </Grid>
                        </Grid>
                      </Typography>
                    </CardContent>
                    <Divider /> */}
                    {/* <Comment /> */}
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </>
  );
}

Avatars.getLayout = (page) => {
  const [isLoggedIn, setIsloggedIn] = useState(checkAuthentication()); // use later
  return <SidebarLayout isAuthenticated>{page}</SidebarLayout>;
};

export default Avatars;
