import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import { Button, Grid } from '@mui/material';

function EditCourseModal(props) {
  const { setModal, open } = props;
  const handleClose = () => {
    setModal();
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth={true}>
      <DialogTitle>Update Course Details</DialogTitle>
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
            id="standard-required"
            label="Required"
            defaultValue="Title"
            variant="standard"
            fullWidth={true}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="standard-required"
            label="Required"
            defaultValue="Title"
            variant="standard"
            fullWidth={true}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="standard-required"
            label="Required"
            defaultValue="Title"
            variant="standard"
            fullWidth={true}
          />
        </Grid>
        <Grid item xs={12}>
          <Button size="large" variant="outlined" fullWidth>
            Confirm Update
          </Button>
        </Grid>
      </Grid>
    </Dialog>
  );
}

EditCourseModal.propTypes = {
  setModal: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default EditCourseModal;
