import * as React from 'react';
import { Layout } from 'antd';
import { Router } from 'react-router-dom';
import { Nav } from '../../molecules';
import { RouteProps } from '../../molecules/routing';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

// import { useAuth } from 'features/user';
// import { Header, Main } from 'ui/organisms';

type GenericTemplateProps = {
  routes: RouteProps[];
};

export const GenericTemplate: React.FC<GenericTemplateProps> = ({
  routes,
  children,
}) => {
  // const isLogged = useAuth();

  return (
    <Router history={history}>
      <Layout>
        <Nav routes={routes} />
        {children}
      </Layout>
    </Router>
  );
};
