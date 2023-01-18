import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import { Button, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { useContext, useState } from 'react';
import { SnackbarContext } from '@/contexts/SnackbarContext';
import { updateResource } from '@/api';
import Snackbars from '@/components/Snackbar';
import { useRouter } from 'next/router';
import { clearToken } from '@/utility/setUser';

function PersonalDetailsModal(props) {
  const router = useRouter();
  const { setModal, open, user } = props;
  const [error, setError] = useState('');
  const [userDetails, setUserDetails] = useState(user);

  const handleClose = () => {
    setError('');
    setModal();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
      name: data.get('name')
    };

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
      <DialogTitle>Update Personal Details</DialogTitle>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
        padding="15px 15px 15px 15px"
      >
        <Grid item xs={12}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              required
              id="name"
              name="name"
              label="User Name"
              defaultValue={userDetails?.name}
              variant="standard"
              fullWidth={true}
              error={error ? true : false}
              helperText={error}
            />
            <Grid item xs={12} mt={3}>
              <Button size="large" variant="outlined" fullWidth type="submit">
                Confirm Update
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  );
}

PersonalDetailsModal.propTypes = {
  setModal: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  user: PropTypes.any
};

export default PersonalDetailsModal;
