import { onlyAnon, onlyUsers, onlyFor } from './guards';

import {
  MainPage,
  ClientPage,
  LoginPage,
  AdminPage,
  UsersPage,
  SettingsPage,
  NotFound,
} from './pages';

export const ROUTES_ARRAY = [
  {
    name: 'Main',
    path: '/',
    component: MainPage,
    guards: [onlyAnon()],
  },
  {
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
  {
    name: 'NotFound',
    path: '*',
    component: NotFound,
  },
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
  notFound: {
    path: '*',
    component: NotFound,
  },
};

export const ROUTES_OBJECT_NESTED = {
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
    component: AdminPage,
    guards: [onlyUsers(), onlyFor(['admin'])],
    routes: [
      {
        path: '/users',
        component: UsersPage,
        guards: [onlyUsers(), onlyFor(['admin'])],
      },
      {
        path: '/setting',
        component: SettingsPage,
        guards: [onlyUsers(), onlyFor(['admin'])],
      },
    ],
  },
  notFound: {
    path: '*',
    component: NotFound,
  },
};
