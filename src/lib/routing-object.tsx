import { onlyAnon, onlyUsers, onlyFor } from './guards';
import { MainPage, ClientPage, LoginPage, AdminPage } from './pages';

export const ROUTES = {
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
