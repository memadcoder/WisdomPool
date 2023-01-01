import { useState } from 'react';
import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import Footer from '@/components/Footer';
import { Grid, Container } from '@mui/material';
import ProfileCover from '@/content/Management/Users/details/ProfileCover';
import { checkAuthentication } from '@/utility/checkAuthentication';
import { getToken } from '@/utility/setUser';
import Snackbars from '@/components/Snackbar';

function ManagementUserProfile() {
  const [loggedInUser, setUser] = useState(getToken()?.user);

  const user = {
    savedCards: 7,
    name: loggedInUser?.name,
    coverImg: '/static/images/placeholders/covers/5.jpg',
    avatar: '/static/images/avatars/default-profile.jpg',
    description: 'Do that to others what you expect from you.',
    jobtitle: 'User'
  };

  return (
    <>
      <Head>
        <title>
          Wisdom Pool - User{' '}
          {loggedInUser?.name ? `, ${loggedInUser?.name}` : ''}
        </title>
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
      <Snackbars />
      <Footer />
    </>
  );
}

ManagementUserProfile.getLayout = (page) => {
  const [isLoggedIn, setIsloggedIn] = useState(checkAuthentication()); // use this time also

  return <SidebarLayout isAuthenticated={isLoggedIn}>{page}</SidebarLayout>;
};

export default ManagementUserProfile;
