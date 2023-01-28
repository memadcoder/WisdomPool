import Head from 'next/head';
import { useState, useContext } from 'react';
import SidebarLayout from '@/layouts/SidebarLayout';

import Footer from '@/components/Footer';
import { Container, Grid } from '@mui/material';
import AlertDialog from '@/components/AlertDialog';
import Feeds from '@/components/Feeds';
import { UserContext } from '@/contexts/UserContext';
import { checkAuthentication } from '@/utility/checkAuthentication';
import AuthLayout from '@/layouts/AuthLayout';

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

function Liked() {
  const [open, setOpen] = useState(false);

  const setConfirmDialog = () => {
    setOpen(!open);
  };

  const confirmAgree = () => {};

  return (
    <>
      <Head>
        <title>Liked</title>
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
            type="Unlike"
            DialogModal={
              <AlertDialog
                open={open}
                setOpen={setConfirmDialog}
                confirmAgree={confirmAgree}
                message="Are you sure you want to unlike?"
              />
            }
          />
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

Liked.getLayout = AuthLayout

export default Liked;
