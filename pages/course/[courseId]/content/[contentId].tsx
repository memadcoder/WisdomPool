import Head from 'next/head';

import SidebarLayout from '@/layouts/SidebarLayout';
import { Container, Grid } from '@mui/material';
import Footer from '@/components/Footer';
import ActivityTab from '@/content/Management/Users/settings/ActivityTab';
import { checkAuthentication } from '@/utility/checkAuthentication';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getResources } from '@/api';
import CircularProgress from '@mui/material/CircularProgress';
import AuthLayout from '@/layouts/AuthLayout';

function Content() {
  const router = useRouter();
  const [contents, setContents] = useState(null);
  const { courseId, contentId } = router.query;
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    if(courseId && contentId) {
      getCourseContent();
    }
  }, [courseId, contentId]);

  const getCourseContent = async () => {
    try {
      const response = await getResources(`/course/${courseId}/course-content`);
      setContents(response.data);
      setLoading(false);
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          {isLoading ? (
            <CircularProgress style={{ marginTop: '100px' }} />
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

Content.getLayout = AuthLayout;

export default Content;
