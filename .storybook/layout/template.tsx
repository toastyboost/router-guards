import * as React from 'react';
import { Layout, Menu } from 'antd';

import {
  Router,
  Link,
  Switch,
  Route,
  RouteComponentProps,
} from 'react-router-dom';

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

type RouteProps = {
  name?: string;
  path?: string;
  exact?: boolean;
  component: React.ComponentType<RouteComponentProps>;
};

type NavProps = {
  children: RouteProps[];
};

const Nav = ({ children }: NavProps) => {
  return (
    <Menu mode="horizontal">
      {children.map(
        ({ path, name }) =>
          path && (
            <Menu.Item key={path}>
              <Link to={path}>{name}</Link>
            </Menu.Item>
          ),
      )}
    </Menu>
  );
};

type GenericTemplateProps = {
  children: RouteProps[];
};

export const GenericTemplate = ({ children }: GenericTemplateProps) => {
  return (
    <Router history={history}>
      <Nav children={children} />
      <Layout>
        <Switch>
          {children.map((route, key) => (
            <Route key={key} {...route} />
          ))}
        </Switch>
      </Layout>
    </Router>
  );
};
