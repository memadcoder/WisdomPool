import Head from 'next/head';

import SidebarLayout from '@/layouts/SidebarLayout';
import { Container, Grid } from '@mui/material';
import Footer from '@/components/Footer';
import ActivityTab from '@/content/Management/Users/settings/ActivityTab';
import { checkAuthentication } from '@/utility/checkAuthentication';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getResources } from '@/api';

function Content() {
  const router = useRouter();
  const [contents, setContents] = useState(null);
  const { courseId, contentId } = router.query;
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    getCourseContent();
  }, []);

  const getCourseContent = async () => {
    try {
      const response = await getResources(`/course/${courseId}/course-content`);
      console.log('response.data', response.data);
      const dataToSet = [
        {
          id: '3',
          sequence: 0,
          content: {
            id: '1',
            title: 'Bohemain Rhapsody',
            description: 'Bohemain Rhapsody, The Muppets Music Video',
            slug: 'Bohemain-Rhapsody',
            link: 'https://www.youtube.com/embed/tgbNymZ7vqY',
            contentType: 'VIDEO',
            byAdmin: true
          }
        },
        {
          id: '4',
          sequence: 1,
          content: {
            id: '2',
            title: 'Nodejs Tutorial in One Video',
            description: 'Nodejs Tutorial in hindi',
            slug: 'Nodejs-Tutorial-in-One-Video',
            link: 'https://www.youtube.com/embed/BLl32FvcdVM',
            contentType: 'VIDEO',
            byAdmin: true
          }
        },
        {
          id: '5',
          sequence: 2,
          content: {
            id: '3',
            title: 'Code With Mosh',
            description:
              'this is the description about code with mosh tutorial',
            slug: 'Code-With-Mosh',
            link: 'https://www.youtube.com/embed/TlB_eWDSMt4',
            contentType: 'VIDEO',
            byAdmin: true
          }
        }
      ];
      // setContents(response.data);
      setContents(dataToSet);
      setLoading(false);
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <>
      <Head>
        <title>Wisdom Pool</title>
      </Head>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <Grid item xs={12}>
              <ActivityTab contentId={contentId} contents={contents} />
            </Grid>
          )}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

Content.getLayout = (page) => {
  const [isLoggedIn, setIsloggedIn] = useState(checkAuthentication()); // use later
  return <SidebarLayout isAuthenticated>{page}</SidebarLayout>;
};

export default Content;
