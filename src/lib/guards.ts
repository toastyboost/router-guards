import { Guard } from '../middleware';

type Roles = 'admin' | 'client' | 'user';

type SessionProps = {
  role: Roles | null;
};

export function onlyAnon(): Guard<SessionProps> {
  return (route, context) => (context && context.role ? null : route);
}

export function onlyUsers(): Guard<SessionProps> {
  return (route, context) => (context && context.role ? route : null);
}

export function onlyFor(roles: Roles[]): Guard<SessionProps> {
  return (route, context) =>
    context && context.role && roles.includes(context.role) ? route : null;
}
