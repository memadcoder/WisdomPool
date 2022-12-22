import {
  Typography,
  Box,
  Card,
  Container,
  Button,
  styled,
  Grid
} from '@mui/material';
import type { ReactElement } from 'react';
import BaseLayout from 'src/layouts/BaseLayout';

import Link from 'src/components/Link';
import Head from 'next/head';

import Logo from 'src/components/LogoSign';
import Hero from 'src/content/Overview/Hero';
import SignUp from '@/components/SignUp';

const HeaderWrapper = styled(Card)(
  ({ theme }) => `
    width: 100%;
    display: flex;
    align-items: center;
    height: ${theme.spacing(10)};
    margin-bottom: ${theme.spacing(10)};
  `
);

const OverviewWrapper = styled(Box)(
  ({ theme }) => `
      overflow: auto;
      background: ${theme.palette.common.white};
      flex: 1;
      overflow-x: hidden;
  `
);

function Register() {
  return (
    <OverviewWrapper>
      <Head>
        <title>Wisdom Pool</title>
      </Head>
      <HeaderWrapper>
        <Container maxWidth="lg">
          <Box display="flex" alignItems="center">
            <Logo />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              flex={1}
            >
              <Box />
              {/* <Box>
                  <Button
                    component={Link}
                    href="/pool"
                    variant="contained"
                    sx={{ ml: 2 }}
                  >
                    Live Preview
                  </Button>
                </Box> */}
            </Box>
          </Box>
        </Container>
      </HeaderWrapper>
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Grid
          spacing={{ xs: 6, md: 10 }}
          justifyContent="center"
          alignItems="center"
          container
        >
          <Grid item md={10} lg={8} mx="auto">
            <SignUp />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Typography textAlign="center" variant="subtitle1">
          Copyright ©
          <Link href="" target="_blank" rel="noopener noreferrer">
            WisdomPool.com
          </Link>
        </Typography>
      </Container>
    </OverviewWrapper>
  );
}

export default Register;

Register.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
