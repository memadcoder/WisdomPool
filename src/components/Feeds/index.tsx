import Head from 'next/head';

import SidebarLayout from '@/layouts/SidebarLayout';
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
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import Text from '@/components/Text';
import NextLink from 'next/link';
import { withPrivateRoute } from '@/hocs/withPrivateRoute';
import { checkAuthentication } from '@/utility/checkAuthentication';
import { useState } from 'react';

function Feeds(props: any) {
  const { feeds, setModal, type, DialogModal } = props;
  let Icon: any;

  if (type === 'Unfavorite') {
    Icon = <FavoriteIcon />;
  }
  if (type === 'Unlike') {
    Icon = <ThumbUpAltIcon />;
  }
  if (type === 'Edit') {
    Icon = <EditTwoToneIcon />;
  }

  return (
    <>
      {feeds.map((feed: any) => {
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
                    startIcon={Icon}
                    onClick={() => {
                      setModal();
                    }}
                  >
                    {type}
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
            {DialogModal}
          </>
        );
      })}
    </>
  );
}

Feeds.getLayout = (page) => {
  const [isLoggedIn, setIsloggedIn] = useState(checkAuthentication()); //use later
  return <SidebarLayout isAuthenticated>{page}</SidebarLayout>;
};

export default Feeds;
