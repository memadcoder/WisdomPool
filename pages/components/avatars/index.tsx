import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import PageTitle from '@/components/PageTitle';
import PageTitleWrapper from '@/components/PageTitleWrapper';
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
import Text from '@/components/Text';
import NextLink from 'next/link';
import Footer from '@/components/Footer';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple, green, pink } from '@mui/material/colors';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PageHeader from '@/content/Dashboards/Crypto/PageHeader';
import Comment from '@/components/Comment';

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name)
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
  };
}

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

function Avatars() {
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
              <Grid item xs={12} key={feed._id}>
                <Card>
                  <NextLink href={`course/${feed.courseId}`} passHref>
                    <Box
                      p={3}
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      style={{ cursor: 'pointer' }}
                    >
                      <Box>
                        <Typography variant="h4" gutterBottom>
                          {feed.title}
                        </Typography>
                        <Typography variant="subtitle2">
                          {feed.description}
                        </Typography>
                      </Box>
                      {/* <Button variant="text" startIcon={<EditTwoToneIcon />}>
              Edit
            </Button> */}
                    </Box>
                  </NextLink>

                  <Divider />
                  <CardContent sx={{ p: 4 }}>
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
                  <Divider />
                  <Comment />
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      {/* <Footer /> */}
    </>
  );
}

Avatars.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Avatars;
