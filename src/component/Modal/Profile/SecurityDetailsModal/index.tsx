import { useState } from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import { Button, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { updateResource } from '@/api';
import { clearToken } from '@/utility/setUser';
import { useRouter } from 'next/router';

function SecurityDetailsModal(props) {
  const router = useRouter();
  const { setModal, open } = props;
  const [error, setError] = useState('');

  const handleClose = () => {
    setError('');
    setModal();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
      password: data.get('password'),
      rePassword: data.get('re-password')
    };

    if (payload.password !== payload.rePassword)
      setError("Password Didn't Matched");

    // update details
    try {
      const response = await updateResource(payload, '/users/me');
      clearToken();
      router.push('/login');
    } catch (error) {
      console.log(error);
      setError(error.response.data.message || error.response.data.message?.[0]);
    }
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth={true}>
      <DialogTitle>Update Security Credentials</DialogTitle>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
          padding="15px 15px 15px 15px"
        >
          {/* <Grid item xs={12}>
            <TextField
              required
              type="password"
              id="standard-required"
              label="Old Password"
              variant="standard"
              fullWidth={true}
            />
          </Grid> */}
          <Grid item xs={12}>
            <TextField
              required
              name="password"
              id="password"
              type="password"
              label="New Password"
              variant="standard"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              type="password"
              id="re-password"
              name="re-password"
              label="Confirm New Password"
              variant="standard"
              fullWidth={true}
              error={error ? true : false}
              helperText={error}
            />
          </Grid>
          <Grid item xs={12}>
            <Button size="large" variant="outlined" fullWidth type="submit">
              Confirm Change
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
}

SecurityDetailsModal.propTypes = {
  setModal: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default SecurityDetailsModal;
