import { Guard } from './guards';
import { RouteComponentProps } from 'react-router';

export type SimpleRoute<C> = {
  name?: string;
  path?: string;
  exact?: boolean;
  component: React.ComponentType<RouteComponentProps>;
  guards?: Guard<C>[];
};

type NestedRoute<C> = {
  name?: string;
  routes: Route<C>[];
  component: React.ComponentType<RouteComponentProps>;
  guards?: Guard<C>[];
};

export type Route<C> = SimpleRoute<C> | NestedRoute<C>;
