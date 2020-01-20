import * as React from 'react';

import { Switch, Route, RouteComponentProps } from 'react-router';

export type RouteProps = {
  name?: string;
  path?: string;
  exact?: boolean;
  component: React.ComponentType<RouteComponentProps>;
};

type RoutingProps = {
  routes: RouteProps[];
};

export const Routing: React.FC<RoutingProps> = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route, key) => (
        <Route key={key} {...route} />
      ))}
    </Switch>
  );
};
