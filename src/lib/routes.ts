import { onlyAnon, onlyUsers, onlyFor } from './guards';
import { MainPage, ClientPage, LoginPage, AdminPage, NotFound } from './pages';

export const ROUTES_ARRAY = [
  {
    name: 'Main',
    path: '/',
    component: MainPage,
    guards: [onlyAnon()],
  },
  {
    name: 'Login',
    path: '/login',
    component: LoginPage,
    guards: [onlyAnon()],
  },
  {
    name: 'Clients',
    path: '/clients',
    component: ClientPage,
    guards: [onlyUsers(), onlyFor(['client'])],
  },
  {
    name: 'Admin',
    path: '/admin',
    component: AdminPage,
    guards: [onlyUsers(), onlyFor(['admin'])],
  },
  // {
  //   name: '404',
  //   path: '*',
  //   component: NotFound,
  // },
];

export const ROUTES_OBJECT = {
  main: {
    path: '/',
    component: MainPage,
    guards: [onlyAnon()],
  },
  login: {
    path: '/login',
    component: LoginPage,
    guards: [onlyAnon()],
  },
  client: {
    path: '/clients',
    component: ClientPage,
    guards: [onlyUsers(), onlyFor(['client'])],
  },
  admin: {
    path: '/admin',
    component: AdminPage,
    guards: [onlyUsers(), onlyFor(['admin'])],
  },
  // '404': {
  //   path: '*',
  //   component: NotFound,
  // },
};
