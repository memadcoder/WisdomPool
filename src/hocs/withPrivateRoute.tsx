import { checkAuthentication } from '@/utility/checkAuthentication';
import { NextPage } from 'next/types';

interface Props {
  isAuthenticated: boolean;
}

export const withPrivateRoute = (WrappedComponent: React.FC<Props>) => {
  const PrivateRoute: NextPage<Props> = (props) => {
    if (!props.isAuthenticated) {
      if (typeof window !== 'undefined') window.location.href = '/';
    }
    return <WrappedComponent {...props} />;
  };

  PrivateRoute.getInitialProps = async () => {
    const isAuthenticated = checkAuthentication();
    return { isAuthenticated };
  };

  return PrivateRoute;
};
