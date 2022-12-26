import { useState, useContext } from 'react';
import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';

import Footer from '@/components/Footer';
import { Container, Grid } from '@mui/material';
import AlertDialog from '@/components/AlertDialog';
import { UserContext } from '@/contexts/UserContext';
import Feeds from 'pages/components/Feeds';
import { checkAuthentication } from '@/utility/checkAuthentication';

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

function Favourites() {
  // const { isLoggedIn } = useContext(UserContext);
  const [isLoggedIn, setIsloggedIn] = useState(checkAuthentication());
  const [open, setOpen] = useState(false);

  const setConfirmDialog = () => {
    setOpen(!open);
  };

  const confirmAgree = () => {};

  return (
    <>
      <Head>
        <title>Favourites</title>
      </Head>
      <Container maxWidth="md">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Feeds
            feeds={poolFeeds}
            setModal={setConfirmDialog}
            type="Unfavorite"
            DialogModal={
              <AlertDialog
                open={open}
                setOpen={setConfirmDialog}
                confirmAgree={confirmAgree}
                message="Are you sure you want to unfavorite?"
              />
            }
          />
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

Favourites.getLayout = (page) => {
  const [isLoggedIn, setIsloggedIn] = useState(checkAuthentication()); //used now

  return <SidebarLayout isAuthenticated={isLoggedIn}>{page}</SidebarLayout>;
};

export default Favourites;
