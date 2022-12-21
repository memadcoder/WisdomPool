import {
  Box,
  Avatar,
  InputBase,
  ListItemAvatar,
  ListItemText,
  List,
  ListItemButton
} from '@mui/material';

import { styled } from '@mui/material/styles';

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

function Comment() {
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };

  return (
    <>
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
          />
        </Box>
      </div>
      <div className="comment-view-section">
        <List disablePadding component="div">
          <ListItemWrapper>
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
              primary="Zain Baptista"
              secondary="Hey there, how are you today? Is it ok if I call you?"
            />
          </ListItemWrapper>
          <ListItemWrapper>
            <ListItemAvatar>
              <Avatar src="/static/images/avatars/2.jpg" />
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
              primary="Kierra Herwitz"
              secondary="Hi! Did you manage to send me those documents"
            />
          </ListItemWrapper>
          <ListItemWrapper>
            <ListItemAvatar>
              <Avatar src="/static/images/avatars/3.jpg" />
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
              primary="Craig Vaccaro"
              secondary="Ola, I still haven't received the program schedule"
            />
          </ListItemWrapper>
          <ListItemWrapper>
            <ListItemAvatar>
              <Avatar src="/static/images/avatars/4.jpg" />
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
              primary="Adison Press"
              secondary="I recently did some buying on Amazon and now I'm stuck"
            />
          </ListItemWrapper>
        </List>
      </div>
    </>
  );
}

export default Comment;
