import { onlyAnon, onlyUsers, onlyFor } from './guards';
import { MainPage, ClientPage, LoginPage, AdminPage } from './pages';

export const ROUTES_ARRAY = [
  {
    name: 'Main',
    path: '/',
    exact: true,
    component: MainPage,
    guards: [onlyAnon()],
  },
  {
    name: 'Login',
    path: '/login',
    exact: true,
    component: LoginPage,
    guards: [onlyAnon()],
  },
  {
    name: 'Clients',
    path: '/clients',
    exact: true,
    component: ClientPage,
    guards: [onlyUsers(), onlyFor(['client'])],
  },
  {
    name: 'Admin',
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
    guards: [onlyUsers(), onlyFor(['client'])],
  },
  admin: {
    path: '/admin',
    exact: true,
    component: AdminPage,
    guards: [onlyUsers(), onlyFor(['admin'])],
  },
};
