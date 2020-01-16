import { Route } from './routes';

function applyGuards<C>(route: Route<C>, context: C): Route<C> | null {
  const { guards } = route;

  if (guards) {
    let currentRoute: Route<C> | null | undefined = route;

    for (const guard of guards) {
      if (currentRoute === undefined) return null;

      currentRoute = guard(currentRoute, context);
    }

    return currentRoute || null;
  }
  return null;
}

function notNull<C>(t: Route<C> | null): t is Route<C> {
  return Boolean(t);
}

export function compileRoutes<C>(config: Route<C>[], context: C): Route<C>[] {
  return config.map((route) => applyGuards(route, context)).filter(notNull);
}
