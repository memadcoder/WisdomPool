import Head from 'next/head';

import SidebarLayout from '@/layouts/SidebarLayout';

import Footer from '@/components/Footer';
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography,
  Box,
  Button
} from '@mui/material';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import Text from '@/components/Text';
import NextLink from 'next/link';
import { useState } from 'react';
import EditCourseModal from '@/components/Modal/CourseModal/EditCourse';

const poolFeeds = [
  {
    _id: 1,
    courseId: 1,
    title: 'Nodejs Fundamental',
    authors: ['Madhav Gautam', 'Sagar Devkota', 'Amrit Devkota'],
    description:
      'This is description about Nodejs.This is description about Nodejs.This is description about Nodejs.This is description about Nodejs.',
    totalVideos: 5,
    totalTime: '2 hrs',
    thumbsUp: 2,
    comments: 3,
    isStarred: true,
    createdDate: '12 March 2022'
  },
  {
    _id: 1,
    courseId: 2,
    title: 'Nodejs Fundamental',
    authors: ['Madhav Gautam', 'Sagar Devkota', 'Amrit Devkota'],
    description:
      'This is description about Nodejs.This is description about Nodejs.This is description about Nodejs.This is description about Nodejs.',
    totalVideos: 5,
    totalTime: '2 hrs',
    thumbsUp: 2,
    comments: 3,
    isStarred: true,
    createdDate: '12 March 2022'
  },
  {
    _id: 1,
    courseId: 3,
    title: 'Nodejs Fundamental',
    authors: ['Madhav Gautam', 'Sagar Devkota', 'Amrit Devkota'],
    description:
      'This is description about Nodejs.This is description about Nodejs.This is description about Nodejs.This is description about Nodejs.',
    totalVideos: 5,
    totalTime: '2 hrs',
    thumbsUp: 2,
    comments: 3,
    isStarred: true,
    createdDate: '12 March 2022'
  },
  {
    _id: 1,
    courseId: 4,
    title: 'Nodejs Fundamental',
    authors: ['Madhav Gautam', 'Sagar Devkota', 'Amrit Devkota'],
    description:
      'This is description about Nodejs.This is description about Nodejs.This is description about Nodejs.This is description about Nodejs.',
    totalVideos: 5,
    totalTime: '2 hrs',
    thumbsUp: 2,
    comments: 3,
    isStarred: true,
    createdDate: '12 March 2022'
  },
  {
    _id: 1,
    courseId: 5,
    title: 'Nodejs Fundamental',
    authors: ['Madhav Gautam', 'Sagar Devkota', 'Amrit Devkota'],
    description: '',
    totalVideos: 5,
    totalTime: '2 hrs',
    thumbsUp: 2,
    comments: 3,
    isStarred: true,
    createdDate: '12 March 2022'
  }
];

function MyCourse() {
  const [open, setOpen] = useState(false);
  const setEditCourseModal = () => {
    setOpen(!open);
  };
  return (
    <>
      <Head>
        <title>My Course</title>
      </Head>
      <Container maxWidth="md">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          {poolFeeds.map((feed) => {
            {
              /* <Grid item xs={12}>
            <Card>
              <CardHeader title="Images" />
              <Divider />
              <CardContent>
                <Stack direction="row" spacing={2}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatars/1.jpg" />
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatars/2.jpg"
                  />
                  <Avatar
                    alt="Cindy Baker"
                    src="/static/images/avatars/3.jpg"
                  />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Letters" />
              <Divider />
              <CardContent>
                <Stack direction="row" spacing={2}>
                  <Avatar>H</Avatar>
                  <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                  <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                </Stack>
                <Divider sx={{ my: 5 }} />
                <Stack direction="row" spacing={2}>
                  <Avatar {...stringAvatar('Kent Dodds')} />
                  <Avatar {...stringAvatar('Jed Watson')} />
                  <Avatar {...stringAvatar('Tim Neutkens')} />
                </Stack>
              </CardContent>
            </Card>
          </Grid> */
            }
            {
              /* <Grid item xs={12}>
            <Card>
              <CardHeader title="Sizes" />
              <Divider />
              <CardContent>
                <Stack direction="row" spacing={2}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatars/4.jpg"
                    sx={{ width: 24, height: 24 }}
                  />
                  <Avatar alt="Remy Sharp" src="/static/images/avatars/5.jpg" />
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatars/3.jpg"
                    sx={{ width: 56, height: 56 }}
                  />
                </Stack>
              </CardContent>
            </Card>
          </Grid> */
            }
            return (
              <>
                <Grid item xs={12} key={feed._id}>
                  <Card>
                    <Box
                      p={3}
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Box>
                        <Typography variant="h4" gutterBottom>
                          {feed.title}
                        </Typography>
                        <Typography variant="subtitle2">
                          {feed.description}
                        </Typography>
                      </Box>
                      <Button
                        variant="text"
                        startIcon={<EditTwoToneIcon />}
                        onClick={() => {
                          setEditCourseModal();
                        }}
                      >
                        Edit
                      </Button>
                    </Box>
                    <Divider />
                    <NextLink href={`course/${feed.courseId}`} passHref>
                      <CardContent sx={{ p: 4 }} style={{ cursor: 'pointer' }}>
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
                                <b>{feed.totalTime}</b>
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
                                <b>{feed.createdDate}</b>
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
                                {feed.authors.map((author, index) => {
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
                    </NextLink>
                  </Card>
                </Grid>
                <EditCourseModal
                  open={open}
                  setEditCourseModal={setEditCourseModal}
                />
              </>
            );
          })}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

MyCourse.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default MyCourse;
