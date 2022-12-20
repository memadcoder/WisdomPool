import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import { Button, Grid } from '@mui/material';

function SecurityDetailsModal(props) {
  const { setModal, open } = props;
  const handleClose = () => {
    setModal();
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth={true}>
      <DialogTitle>Update Security Credentials</DialogTitle>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
        padding="15px 15px 15px 15px"
      >
        <Grid item xs={12}>
          <TextField
            required
            type="password"
            id="standard-required"
            label="Old Password"
            variant="standard"
            fullWidth={true}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            type="password"
            id="standard-required"
            label="New Password"
            variant="standard"
            fullWidth={true}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            type="password"
            id="standard-required"
            label="Confirm New Password"
            // defaultValue=""
            variant="standard"
            fullWidth={true}
          />
        </Grid>
        <Grid item xs={12}>
          <Button size="large" variant="outlined" fullWidth>
            Confirm Change
          </Button>
        </Grid>
      </Grid>
    </Dialog>
  );
}

SecurityDetailsModal.propTypes = {
  setModal: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default SecurityDetailsModal;
