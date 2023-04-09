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
import NextLink from 'next/link';
import { checkAuthentication } from '@/utility/checkAuthentication';
import { useState } from 'react';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import AddTaskIcon from '@mui/icons-material/AddTask';
import StarIcon from '@mui/icons-material/Star';
import { useRouter } from 'next/router';
import { getResources } from '@/api';
import CircularProgress from '@mui/material/CircularProgress';
import StatusNoData from '@/components/status/no-data';
import AuthLayout from '@/layouts/AuthLayout';

function Avatars() {
  const router = useRouter();
  const [isLoggedIn, setIsloggedIn] = useState(checkAuthentication());
  const [contents, setContents] = useState(null);
  const [courseDetails, setCourseDetails] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { courseId } = router.query;

  useEffect(() => {
    if (courseId) {
      getCourseDetails();
      getCourseContent();
    }
  }, [courseId]);

  const getCourseDetails = async () => {
    try {
      const response = await getResources(`/course/${courseId}/course-content`);
      setCourseDetails(response.data);
      console.log({ courseDetails });
    } catch (error) {
      console.log('error', error);
    }
  };

  const getCourseContent = async () => {
    try {
      const response = await getResources(`/course/${courseId}/course-content`);
      setContents(response.data);
      console.log({ contents });
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Wisdom Pool - Course{}</title>
        {/* replace title with selected course later */}
      </Head>
      <PageTitleWrapper>
        {/* <PageHeader /> */}
        <PageTitle
          // heading="Pool"
          subHeading="All the contents(Video/Blog) of selected course is available here."
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
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              {contents?.length ? (
                contents?.map((feed) => {
                  return (
                    <Grid item xs={12} key={feed.content._id}>
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
                              <NextLink
                                href={`${courseId}/content/${feed.content._id}`}
                                passHref
                              >
                                <Box style={{ color: 'ButtonHighlight' }}>
                                  <Typography variant="h4" gutterBottom>
                                    {feed.content.title}
                                  </Typography>
                                  <Typography
                                    variant="subtitle2"
                                    color={'ButtonHighlight'}
                                  >
                                    {feed.content.description}
                                  </Typography>
                                </Box>
                              </NextLink>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                              <Button
                                variant="outlined"
                                color="success"
                                startIcon={
                                  feed?.content?.byAdmin ? (
                                    <StarIcon color="warning" />
                                  ) : (
                                    ''
                                  )
                                }
                                endIcon={
                                  isLoggedIn && feed?.content?.completed ? (
                                    <AddTaskIcon />
                                  ) : (
                                    <PlayCircleFilledIcon />
                                  )
                                }
                                onClick={() => {
                                  router.push(
                                    `${courseId}/content/${feed.content._id}`
                                  );
                                }}
                              >
                                {!isLoggedIn
                                  ? 'Start'
                                  : feed?.completed
                                  ? 'Read Again'
                                  : 'Start'}
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

Avatars.getLayout = AuthLayout;

export default Avatars;
