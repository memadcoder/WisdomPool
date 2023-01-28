import * as React from 'react';

import { checkAuthentication } from '@/utility/checkAuthentication';
import SidebarLayout from '@/layouts/SidebarLayout';

const AuthLayout = (page) => {
  const [isLoggedIn, setIsloggedIn] = React.useState(checkAuthentication()); // use later
  return <SidebarLayout isAuthenticated>{page}</SidebarLayout>;
};

export default AuthLayout;