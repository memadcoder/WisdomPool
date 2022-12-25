import { useState } from 'react';
import { getToken } from '@/utility/setUser';
import { Typography } from '@mui/material';

function PageHeader() {
  const [loggedInUser, setUser] = useState(getToken()?.user);

  const user = {
    name: loggedInUser?.name,
    avatar: '/static/images/avatars/1.jpg'
  };

  return (
    <>
      <Typography variant="h3" component="h3" gutterBottom>
        User Settings
      </Typography>
      <Typography variant="subtitle2">
        {user.name}, this could be your user settings panel.
      </Typography>
    </>
  );
}

export default PageHeader;
