import {
  Typography,
  Box,
  Card,
  Container,
  styled
} from '@mui/material';
import type { ReactElement } from 'react';
import BaseLayout from 'src/layouts/BaseLayout';

import Link from '@/component/Link';
import Head from 'next/head';

import Logo from '@/component/LogoSign';
import LoginForm from 'src/component/page-components/login/LoginForm';
import Snackbars from '@/component/Snackbar';

const HeaderWrapper = styled(Card)(
  ({ theme }) => `
    width: 100%;
    display: flex;
    align-items: center;
    height: ${theme.spacing(10)};
    // margin-bottom: ${theme.spacing(10)};
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

function Login() {
  return (
    <OverviewWrapper>
      <Head>
        <title>Wisdom Pool</title>
      </Head>
      <HeaderWrapper>
        <Container maxWidth="lg">
          {/* <Box display="flex" alignItems="center"> */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flex={1}
          >
            <Logo height={120} width={120} />
          </Box>
        </Container>
      </HeaderWrapper>
      <Snackbars />
      <LoginForm />
      <Container maxWidth="lg" sx={{ mt: 5 }}>
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

Login.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default Login;
