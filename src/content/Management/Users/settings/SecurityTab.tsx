import { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  Grid,
  ListItem,
  List,
  ListItemText,
  Button
} from '@mui/material';
import SecurityDetailsModal from '@/components/Modal/Profile/SecurityDetailsModal';

function SecurityTab() {
  const [open, setOpen] = useState(false);
  const setModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box pb={2}>
            <Typography variant="h3">Security</Typography>
            <Typography variant="subtitle2">
              Change your security preferences below
            </Typography>
          </Box>
          <Card>
            <List>
              <ListItem sx={{ p: 3 }}>
                <ListItemText
                  primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                  secondaryTypographyProps={{
                    variant: 'subtitle2',
                    lineHeight: 1
                  }}
                  primary="Change Password"
                  secondary="You can change your password here"
                />
                <Button
                  size="large"
                  variant="outlined"
                  onClick={() => {
                    setModal();
                  }}
                >
                  Change password
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
        <SecurityDetailsModal open={open} setModal={setModal} />
      </Grid>
    </>
  );
}

export default SecurityTab;
