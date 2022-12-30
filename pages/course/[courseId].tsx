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
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import AddTaskIcon from '@mui/icons-material/AddTask';
import StarIcon from '@mui/icons-material/Star';
import { useRouter } from 'next/router';
import { getResources } from '@/api';

function Avatars() {
  const router = useRouter();
  const [isLoggedIn, setIsloggedIn] = useState(checkAuthentication());
  const [contents, setContents] = useState(null);
  const { courseId } = router.query;

  useEffect(() => {
    getCourseContent();
  }, []);

  const getCourseContent = async () => {
    try {
      const response = await getResources(`/course/${courseId}/course-content`);
      console.log('response.data', response.data);
      setContents(response.data);
    } catch (error) {
      console.log('error', error);
    }
  };
  const handleEnroll = () => {
    if (!isLoggedIn) router.push('/login');
  };
  return (
    <>
      <Head>
        <title>Pool</title>
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
          {contents?.length &&
            contents?.map((feed) => {
              return (
                <Grid item xs={12} key={feed.content.id}>
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
                      <NextLink
                        href={`${courseId}/content/${feed.content.id}`}
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
                          router.push(`${courseId}/content/${feed.content.id}`);
                        }}
                      >
                        {!isLoggedIn
                          ? 'Start'
                          : feed?.completed
                          ? 'Read Again'
                          : 'Start'}
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
