import { FC, useState } from 'react';
import PropTypes from 'prop-types';
import { Typography, Button, Grid } from '@mui/material';
import { checkAuthentication } from '@/utility/checkAuthentication';

interface PageTitleProps {
  heading?: string;
  subHeading?: string;
  docs?: string;
}

const PageTitle: FC<PageTitleProps> = ({
  heading = '',
  subHeading = '',
  docs = '',
  ...rest
}) => {
  const [isLoggedIn, setIsloggedIn] = useState(checkAuthentication()); // used now
  const [open, setOpen] = useState(false);
  const setAddCourseModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        {...rest}
      >
        <Grid item>
          <Typography variant="h3" component="h3" gutterBottom>
            {heading}
          </Typography>
          <Typography variant="subtitle2">{subHeading}</Typography>
        </Grid>
        {/* {isLoggedIn && (
          <>
            <Grid item>
              <Button
                sx={{ mt: { xs: 2, md: 0 } }}
                variant="contained"
                startIcon={<AddTwoToneIcon fontSize="small" />}
                onClick={() => {
                  setAddCourseModal();
                }}
              >
                Add Course
              </Button>
            </Grid>
            <AddCourseModal open={open} setAddCourseModal={setAddCourseModal} />
          </>
        )} */}
      </Grid>
    </>
  );
};

PageTitle.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  docs: PropTypes.string
};

export default PageTitle;
