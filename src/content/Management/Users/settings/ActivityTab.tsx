import Head from 'next/head';
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
import { useEffect, useState } from 'react';
import Comment from '@/components/Comment';
import { useRouter } from 'next/router';

const CardActionsWrapper = styled(CardActions)(
  ({ theme }) => `
     background: ${theme.colors.alpha.black[5]};
     padding: ${theme.spacing(3)};
`
);

function ActivityTab({ contentId, contents }) {
  const router = useRouter();
  const { courseId } = router.query;
  const [currentContent, setContent] = useState(null);
  const [nextContent, setNextContent] = useState(null);
  const [prevContent, setPrevContent] = useState(null);

  useEffect(() => {
    const current = contents.filter((data) => data.content.id === contentId);
    setContent(current[0]);
  }, [contentId]);

  useEffect(() => {
    setNextContent(null);
    setPrevContent(null);
    const next = contents.filter(
      (data) => data.sequence === currentContent?.sequence + 1
    );
    const prev = contents.filter(
      (data) => data.sequence === currentContent?.sequence - 1
    );
    if (next.length) setNextContent(next[0].content);
    if (prev.length) setPrevContent(prev[0].content);
  }, [currentContent]);

  return (
    <>
      <Head>
        <title>Wisdom Pool - {currentContent?.content?.title}</title> 
        {/* make this dynamic according to sele */}
      </Head>
      <Card>
        <CardHeader
          action={
            <IconButton color="primary">
              <MoreHorizTwoToneIcon fontSize="medium" />
            </IconButton>
          }
          titleTypographyProps={{ variant: 'h4' }}
          subheaderTypographyProps={{ variant: 'subtitle2' }}
          title={currentContent?.content?.title}
          subheader={<>{currentContent?.content?.description}</>}
        />
        <div className="course-video-frame">
          <iframe
            width="100%"
            height="600px"
            src={currentContent?.content?.link}
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
                  marginTop: '22px',
                  width: '145px',
                  height: '30px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  textAlign: 'right'
                }}
              >
                {prevContent?.title || 'No Previous'}
              </p>
              <SkipPreviousIcon
                sx={{ fontSize: 60 }}
                onClick={() => {
                  if (prevContent?.id)
                    router.push(
                      `http://localhost:3001/course/${courseId}/content/${prevContent.id}`
                    );
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
                  marginLeft: '50px',
                  marginTop: '22px',
                  width: '150px',
                  height: '30px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                {nextContent?.title || 'No Next'}
              </p>
              <SkipNextIcon
                sx={{ fontSize: 60 }}
                onClick={() => {
                  if (nextContent?.id)
                    router.push(
                      `http://localhost:3001/course/${courseId}/content/${nextContent?.id}`
                    );
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
            {currentContent?.content?.title}
          </Typography>
          <Typography variant="subtitle2">
            <Link
              href={currentContent?.content?.contentCreatorLink}
              underline="hover"
            >
              {currentContent?.content?.channelName}
            </Link>{' '}
            • {currentContent?.content?.videoLength}
          </Typography>
        </Box>
        <Divider />
        <Comment courseId={courseId} contentId={contentId} />
      </Card>
    </>
  );
}

export default ActivityTab;
