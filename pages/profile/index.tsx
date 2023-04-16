import { useState } from 'react';
import Head from 'next/head';
import Footer from '@/component/Footer';
import { Grid, Container } from '@mui/material';
import ProfileCover from '@/component/page-components/profile/ProfileCover';
import { getToken } from '@/utility/setUser';
import Snackbars from '@/component/Snackbar';
import AuthLayout from '@/layouts/AuthLayout';

function UserProfile() {
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

UserProfile.getLayout = AuthLayout

export default UserProfile;
