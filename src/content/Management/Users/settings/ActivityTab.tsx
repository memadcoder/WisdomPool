import {
  Box,
  Typography,
  Card,
  CardHeader,
  Divider,
  IconButton,
  Button,
  CardActions,
  Link
} from '@mui/material';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { styled } from '@mui/material/styles';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
import CommentTwoToneIcon from '@mui/icons-material/CommentTwoTone';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import Text from '@/components/Text';
import { useState } from 'react';
import Comment from '@/components/Comment';

const CardActionsWrapper = styled(CardActions)(
  ({ theme }) => `
     background: ${theme.colors.alpha.black[5]};
     padding: ${theme.spacing(3)};
`
);

const course = {
  title: 'Node Js',
  currentContent: 1,
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
      comments: [{ name: 'Madhav Gautam', comment: 'This is nice Video' }],
      completeStatus: 'COMPLETED'
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
      ],
      completeStatus: 'NOT_COMPLETED'
    },
    {
      link: 'https://www.youtube.com/embed/TlB_eWDSMt4',
      title: 'Code With Mosh',
      description: '',
      videoLength: '',
      contentCreatorLink: '',
      thumpsUp: [{ name: 'Madhav Gautam' }],
      comments: [{ name: 'Madhav Gautam', comment: 'This is nice Video' }],
      completeStatus: 'NOT_COMPLETED'
    }
  ]
};

function ActivityTab() {
  const [currentContent, setCurrentContent] = useState(course.currentContent);

  return (
    <Card>
      <CardHeader
        action={
          <IconButton color="primary">
            <MoreHorizTwoToneIcon fontSize="medium" />
          </IconButton>
        }
        titleTypographyProps={{ variant: 'h4' }}
        subheaderTypographyProps={{ variant: 'subtitle2' }}
        title={course.title}
        subheader={<>{course.description}</>}
      />
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
            justifyContent: 'center',
            backgroundColor: 'rgb(17, 25, 42)',
            color: 'white'
          }}
        >
          <div>
            <p
              style={{
                fontSize: '10px',
                position: 'absolute',
                marginLeft: '-140px',
                marginTop: '6px',
                width: '145px',
                height: '30px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                textAlign: 'right'
              }}
            >
              {course.contentDetails[currentContent - 1]?.title ||
                'No Previous'}
            </p>
            <SkipPreviousIcon
              fontSize="large"
              onClick={() => {
                if (currentContent - 1 >= 0)
                  setCurrentContent(currentContent - 1);
              }}
              style={{
                color: 'white',
                cursor: 'pointer'
              }}
            />
          </div>
          <div>
            <p
              style={{
                fontSize: '10px',
                textAlign: 'left',
                position: 'absolute',
                marginLeft: '30px',
                marginTop: '6px',
                width: '150px',
                height: '30px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {course.contentDetails[currentContent + 1]?.title || 'No Next'}
            </p>
            <SkipNextIcon
              fontSize="large"
              onClick={() => {
                if (currentContent + 1 < course.contentDetails.length)
                  setCurrentContent(currentContent + 1);
              }}
              style={{
                color: 'white',
                cursor: 'pointer'
              }}
            />
          </div>
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
      <Comment />
    </Card>
  );
}

export default ActivityTab;
