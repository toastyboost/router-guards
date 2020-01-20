import { Guard, onlyAnon, onlyUsers, onlyFor } from './guards';
import { RouteComponentProps } from 'react-router';
import { MainPage, ClientPage, LoginPage, AdminPage } from './pages';

export type SimpleRoute<C> = {
  name?: string;
  path?: string;
  exact?: boolean;
  component: React.ComponentType<RouteComponentProps>;
  guards?: Guard<C>[];
};

type NestedRoute<C> = {
  name?: string;
  routes: RouteProps<C>[];
  component: React.ComponentType<RouteComponentProps>;
  guards?: Guard<C>[];
};

export type RouteProps<C> = SimpleRoute<C> | NestedRoute<C>;

export const ROUTES_ARRAY = [
  {
    path: '/',
    exact: true,
    component: MainPage,
    guards: [onlyAnon()],
  },
  {
    path: '/login',
    exact: true,
    component: LoginPage,
    guards: [onlyAnon()],
  },
  {
    path: '/clients',
    exact: true,
    component: ClientPage,
    guards: [onlyUsers()],
  },
  {
    path: '/admin',
    exact: true,
    component: AdminPage,
    guards: [onlyUsers(), onlyFor(['admin'])],
  },
];

export const ROUTES_OBJECT = {
  main: {
    path: '/',
    exact: true,
    component: MainPage,
    guards: [onlyAnon()],
  },
  login: {
    path: '/login',
    exact: true,
    component: LoginPage,
    guards: [onlyAnon()],
  },
  client: {
    path: '/clients',
    exact: true,
    component: ClientPage,
    guards: [onlyUsers()],
  },
  admin: {
    path: '/admin',
    exact: true,
    component: AdminPage,
    guards: [onlyUsers(), onlyFor(['admin'])],
  },
};
