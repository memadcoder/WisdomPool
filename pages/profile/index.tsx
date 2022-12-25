import { useState } from 'react';
import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import Footer from '@/components/Footer';
import { Grid, Container } from '@mui/material';
import ProfileCover from '@/content/Management/Users/details/ProfileCover';
import { checkAuthentication } from '@/utility/checkAuthentication';
import { getToken } from '@/utility/setUser';

function ManagementUserProfile() {
  const [loggedInUser, setUser] = useState(getToken()?.user);

  const user = {
    savedCards: 7,
    name: loggedInUser?.name,
    coverImg: '/static/images/placeholders/covers/5.jpg',
    avatar: '/static/images/avatars/4.jpg',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage",
    jobtitle: 'User'
  };

  return (
    <>
      <Head>
        <title>User Details - Management</title>
      </Head>
      <Container sx={{ mt: 3 }} maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} md={8}>
            <ProfileCover user={user} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

ManagementUserProfile.getLayout = (page) => {
  const [isLoggedIn, setIsloggedIn] = useState(checkAuthentication());

  return <SidebarLayout isAuthenticated={isLoggedIn}>{page}</SidebarLayout>;
};

export default ManagementUserProfile;
