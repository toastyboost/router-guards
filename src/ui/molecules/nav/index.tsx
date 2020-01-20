import * as React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

import { RouteProps } from '../routing';

type NavProps = {
  routes: RouteProps[];
};

export const Nav = ({ routes }: NavProps) => {
  return (
    <Menu mode="horizontal">
      {routes.map(
        ({ path }) =>
          path && (
            <Menu.Item key={path}>
              <Link to={path}>{path}</Link>
            </Menu.Item>
          ),
      )}
    </Menu>
  );
};
