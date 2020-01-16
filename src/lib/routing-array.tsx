import { onlyAnon, onlyUsers, onlyFor } from './guards';
import { MainPage, ClientPage, LoginPage, AdminPage } from './pages';

export const ROUTES = [
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
