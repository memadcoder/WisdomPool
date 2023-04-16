import SignIn from './SignIn';
import {
  Container,
  Grid,
} from '@mui/material';


function LoginForm() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={10} lg={8} mx="auto">
          <SignIn />
        </Grid>
      </Grid>
    </Container>
  );
}

export default LoginForm;
