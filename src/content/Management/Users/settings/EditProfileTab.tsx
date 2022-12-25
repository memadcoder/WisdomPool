import { useState } from 'react';
import {
  Grid,
  Typography,
  CardContent,
  Card,
  Box,
  Divider,
  Button
} from '@mui/material';

import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import Text from '@/components/Text';
import Label from '@/components/Label';
import PersonalDetailsModal from '@/components/Modal/Profile/PersonalDetailsModal';
import { getToken } from '@/utility/setUser';

function EditProfileTab() {
  const [loggedInUser, setUser] = useState(getToken()?.user);
  const [open, setOpen] = useState(false);
  const setModal = () => {
    setOpen(!open);
  };

  const user = {
    name: loggedInUser?.name,
    avatar: '/static/images/avatars/1.jpg'
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <Box
              p={3}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Typography variant="h4" gutterBottom>
                  Personal Details
                </Typography>
                <Typography variant="subtitle2">
                  Manage informations related to your personal details
                </Typography>
              </Box>
              <Button
                variant="text"
                startIcon={<EditTwoToneIcon />}
                onClick={() => {
                  setModal();
                }}
              >
                Edit
              </Button>
            </Box>
            <Divider />
            <CardContent sx={{ p: 4 }}>
              <Typography variant="subtitle2">
                <Grid container spacing={0}>
                  <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                    <Box pr={3} pb={2}>
                      Name:
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={8} md={9}>
                    <Text color="black">
                      <b>{loggedInUser?.name}</b>
                    </Text>
                  </Grid>
                  <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                    <Box pr={3} pb={2}>
                      Email ID:
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={8} md={9}>
                    <Text color="black">
                      <b>{loggedInUser?.user?.email}</b>
                    </Text>
                    <Box pl={1} component="span">
                      <Label color="success">Primary</Label>
                    </Box>
                  </Grid>
                </Grid>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <PersonalDetailsModal open={open} setModal={setModal} />
    </>
  );
}

export default EditProfileTab;
