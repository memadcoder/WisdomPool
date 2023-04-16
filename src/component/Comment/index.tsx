import {
  Box,
  Avatar,
  InputBase,
  ListItemAvatar,
  ListItemText,
  List,
  ListItemButton
} from '@mui/material';
import { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import { styled } from '@mui/material/styles';
import { getResources, createResource, deleteResource } from '@/api';
import AlertDialog from '@/component/AlertDialog';
import { getToken } from '@/utility/setUser';
import CircularProgress from '@mui/material/CircularProgress';

const MessageInputWrapper = styled(InputBase)(
  ({ theme }) => `
      font-size: ${theme.typography.pxToRem(18)};
      padding: ${theme.spacing(1)};
      width: 100%;
  `
);

const ListItemWrapper = styled(ListItemButton)(
  ({ theme }) => `
          &.MuiButtonBase-root {
              margin: ${theme.spacing(1)} 0;
          }
    `
);

function Comment({ courseId, contentId }) {
  const [comments, setComments] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [loggedInUser, setUser] = useState(getToken()?.user);

  const setConfirmDialog = () => {
    setOpen(!open);
  };

  const confirmAgree = async () => {
    try {
      const response = await deleteResource(deletingId, `/comment`);
      const filteredComments = comments.filter(
        (comment) => comment.id !== deletingId
      );
      setComments(filteredComments);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getComments();
  }, [courseId, contentId]);

  const getComments = async () => {
    console.log("get comments")
    try {
      const response = await getResources(
        `/comment?courseId=${courseId}&contentId=${contentId}`
      );
    console.log("comments received")
    setComments(response.data);
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  };
  const updateComments = async (comment) => {
    try {
      const response = await createResource(
        {
          contentId: contentId,
          courseId: courseId,
          comment
        },
        `/comment`
      );

      const updatedComments = [
        {
          user: { name: response.data.user.name, _id: response.data.user._id },
          comment: response.data.comment
        },
        ...comments
      ];
      setComments(updatedComments);
    } catch (error) {
      console.log('error', error);
    }
  };
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      updateComments(event.target.value);
      event.target.value = '';
    }
  };
  return (
    <>
      {loggedInUser?._id ? (
        <div
          className="comment-input-section"
          style={{ margin: '12px 12px 12px 12px' }}
        >
          <Box flexGrow={1} display="flex" alignItems="center">
            <Avatar
              sx={{ display: { xs: 'none', sm: 'flex' }, mr: 1 }}
              alt={user.name}
              src={user.avatar}
            />
            <MessageInputWrapper
              autoFocus
              placeholder="Write your comment here..."
              fullWidth
              onKeyDown={handleKeyDown}
            />
          </Box>
        </div>
      ) : (
        <></>
      )}

      {isLoading ? (
        <CircularProgress />
      ) : (
        <div className="comment-view-section">
          <List disablePadding component="div">
            {comments?.length ? (
              comments.map((comment) => {
                return (
                  <ListItemWrapper key={comment._id}>
                    <ListItemAvatar>
                      <Avatar src="/static/images/avatars/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      sx={{
                        mr: 1
                      }}
                      primaryTypographyProps={{
                        color: 'textPrimary',
                        variant: 'h5',
                        noWrap: true
                      }}
                      secondaryTypographyProps={{
                        color: 'textSecondary',
                        noWrap: true
                      }}
                      primary={comment.user.name}
                      secondary={comment.comment}
                    />
                    {/* <ListItemAvatar> */}
                    {comment.user._id === loggedInUser?._id ? (
                      <>
                        {' '}
                        <DeleteIcon
                          onClick={() => {
                            setDeletingId(comment._id);
                            setOpen(true);
                          }}
                        />
                        <AlertDialog
                          open={open}
                          setOpen={setConfirmDialog}
                          confirmAgree={confirmAgree}
                          message="Are you sure you want to delete?"
                        />
                      </>
                    ) : (
                      <></>
                    )}

                    {/* </ListItemAvatar> */}
                  </ListItemWrapper>
                );
              })
            ) : (
              <></>
            )}
          </List>
        </div>
      )}
    </>
  );
}

export default Comment;
