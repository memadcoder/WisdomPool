import {
  Box,
  CardMedia,
  Typography,
  Card,
  CardHeader,
  Divider,
  Avatar,
  IconButton,
  Button,
  CardActions,
  Link
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { styled } from '@mui/material/styles';

import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
import CommentTwoToneIcon from '@mui/icons-material/CommentTwoTone';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import Text from '@/components/Text';
import { useState } from 'react';

const CardActionsWrapper = styled(CardActions)(
  ({ theme }) => `
     background: ${theme.colors.alpha.black[5]};
     padding: ${theme.spacing(3)};
`
);
const course = {
  title: 'Node Js',
  description:
    'You will be able to know basics fundamental of Nodejs from different  youtube content creator. there are total 4 videos. Sit and enjoy your learning. You will be able to know basics fundamental of Nodejs from different youtube content creator. there are total 4 videos. Sit and enjoy your learning. You will be able to know basics fundamental of Nodejs from different youtube content creator. there are total 4 videos. Sit and enjoy your learning.',
  contentDetails: [
    {
      link: 'https://www.youtube.com/embed/tgbNymZ7vqY',
      title: 'Bohemain Rhapsody',
      channelName: 'Bohemain Rocks',
      description: 'Bohemain Rhapsody, The Muppets Music Video',
      videoLength: '4:47 mins',
      contentCreatorLink: 'https://www.youtube.com/@MuppetsStudio',
      thumpsUp: [{ name: 'Madhav Gautam' }],
      comments: [{ name: 'Madhav Gautam', comment: 'This is nice Video' }]
    },
    {
      link: 'https://www.youtube.com/embed/BLl32FvcdVM',
      title: 'Nodejs Tutorial in One Video',
      channelName: 'CodeWithHarry',
      description: 'Nodejs Tutorial in hindi',
      videoLength: '1:48 hours',
      contentCreatorLink: 'https://www.youtube.com/@CodeWithHarry',
      thumpsUp: [{ name: 'Madhav Gautam' }],
      comments: [
        { name: 'Madhav Gautam', comment: 'This is nice Video' },
        { name: 'Madhav Gautam', comment: 'This is nice Video' }
      ]
    },
    {
      link: 'https://www.youtube.com/embed/TlB_eWDSMt4',
      title: '',
      description: '',
      videoLength: '',
      contentCreatorLink: '',
      thumpsUp: [{ name: 'Madhav Gautam' }],
      comments: [{ name: 'Madhav Gautam', comment: 'This is nice Video' }]
    },
    {
      link: 'https://www.youtube.com/embed/JnvKXcSI7yk&t=24008s',
      title: '',
      description: '',
      videoLength: '',
      contentCreatorLink: '',
      thumpsUp: [{ name: 'Madhav Gautam' }],
      comments: [{ name: 'Madhav Gautam', comment: 'This is nice Video' }]
    }
  ]
};

function ActivityTab() {
  const [currentContent, setCurrentContent] = useState(0);

  return (
    <Card>
      <CardHeader
        // avatar={<Avatar src="/static/images/avatars/5.jpg" />}
        action={
          <IconButton color="primary">
            <MoreHorizTwoToneIcon fontSize="medium" />
          </IconButton>
        }
        titleTypographyProps={{ variant: 'h4' }}
        subheaderTypographyProps={{ variant: 'subtitle2' }}
        title={course.title}
        subheader={
          <>{course.description}</>
          // <>
          //   Managing Partner,{' '}
          //   <Link
          //     href="@/content/Management/Users/settings/ActivityTab#"
          //     underline="hover"
          //   >
          //     #software
          //   </Link>
          //   ,{' '}
          //   <Link
          //     href="@/content/Management/Users/settings/ActivityTab#"
          //     underline="hover"
          //   >
          //     #managers
          //   </Link>
          //   , Google Inc.
          // </>
        }
      />
      {/* <Box px={3} pb={2}>
        <Typography variant="h4" fontWeight="normal">
          {course.description}
        </Typography>
      </Box> */}
      <div className="course-video-frame">
        <iframe
          width="100%"
          height="600px"
          src={course.contentDetails[currentContent].link}
          frameborder="0"
          allowfullscreen
        ></iframe>
        <div
          className="arrow-button-container"
          style={{
            position: 'relative',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <ArrowBackIosNewIcon
            fontSize="medium"
            onClick={() => {
              if (currentContent - 1 >= 0)
                setCurrentContent(currentContent - 1);
              console.log('Current Content', currentContent);
            }}
            style={{
              color: 'white',
              cursor: 'pointer',
              position: 'absolute',
              marginTop: '-45px',
              marginRight: '30px'
            }}
          />
          <ArrowForwardIosIcon
            fontSize="medium"
            onClick={() => {
              if (currentContent + 1 <= course.contentDetails.length)
                setCurrentContent(currentContent + 1);
              console.log('Current Content', currentContent);
            }}
            style={{
              color: 'white',
              cursor: 'pointer',
              position: 'absolute',
              marginTop: '-45px',
              marginLeft: '30px'
            }}
          />
        </div>
      </div>
      <Box p={3}>
        <Typography variant="h2" sx={{ pb: 1 }}>
          {course.contentDetails[currentContent].title}
        </Typography>
        <Typography variant="subtitle2">
          <Link
            href={course.contentDetails[currentContent].contentCreatorLink}
            underline="hover"
          >
            {course.contentDetails[currentContent].channelName}
          </Link>{' '}
          • {course.contentDetails[currentContent].videoLength}
        </Typography>
      </Box>
      <Divider />
      <CardActionsWrapper
        sx={{
          display: { xs: 'block', md: 'flex' },
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box>
          <Button startIcon={<ThumbUpAltTwoToneIcon />} variant="contained">
            Like
          </Button>
          <Button
            startIcon={<CommentTwoToneIcon />}
            variant="outlined"
            sx={{ mx: 2 }}
          >
            Comment
          </Button>
          <Button startIcon={<ShareTwoToneIcon />} variant="outlined">
            Share
          </Button>
        </Box>
        <Box sx={{ mt: { xs: 2, md: 0 } }}>
          <Typography variant="subtitle2" component="span">
            <Text color="black">
              <b>{course.contentDetails[currentContent].thumpsUp.length}</b>
            </Text>{' '}
            reactions •{' '}
            <Text color="black">
              <b>{course.contentDetails[currentContent].comments.length}</b>
            </Text>{' '}
            comments
          </Typography>
        </Box>
      </CardActionsWrapper>
    </Card>
  );
}

export default ActivityTab;
