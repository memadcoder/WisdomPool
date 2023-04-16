import { useState } from 'react';
import { Typography, Avatar, Grid, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { getToken } from '@/utility/setUser';

function PageHeader() {
  const [loggedInUser, setUser] = useState(getToken()?.user);

  const user = {
    name: loggedInUser?.name,
    avatar: '/static/images/avatars/1.jpg'
  };
  const theme = useTheme();

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Avatar
          sx={{
            mr: 2,
            width: theme.spacing(8),
            height: theme.spacing(8)
          }}
          variant="rounded"
          alt={user.name}
          src={user.avatar}
        />
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Welcome, {user.name}
        </Typography>
        <Typography variant="subtitle2">Let's Grow Together !</Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
