import { UserContext } from '@/contexts/UserContext';
import { Typography } from '@mui/material';
import { useContext } from 'react';

function PageHeader() {
  const { loggedInUser } = useContext(UserContext);

  const user = {
    name: loggedInUser?.user?.name,
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
