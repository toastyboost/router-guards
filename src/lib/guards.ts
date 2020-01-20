import { RouteProps } from './routes';

export type Roles = 'admin' | 'editor' | 'user';

export type UserRole = {
  role: Roles | null;
};

export type Guard<C> = (
  route: RouteProps<C> | null,
  context: C,
) => RouteProps<C> | null | undefined;

export function onlyAnon(): Guard<UserRole> {
  return (route, context) => (context && context.role ? null : route);
}

export function onlyUsers(): Guard<UserRole> {
  return (route, context) => (context && context.role ? route : null);
}

export function onlyFor(roles: Roles[]): Guard<UserRole> {
  return (route, context) =>
    context && context.role && roles.includes(context.role) ? route : null;
}
