import { RouteProps } from './routes';

function applyGuards<C>(
  route: RouteProps<C>,
  context: C,
): RouteProps<C> | null {
  const { guards } = route;

  if (guards) {
    let currentRoute: RouteProps<C> | null | undefined = route;

    for (const guard of guards) {
      if (currentRoute === undefined) return null;

      currentRoute = guard(currentRoute, context);
    }

    return currentRoute || null;
  }
  return null;
}

function notNull<C>(t: RouteProps<C> | null): t is RouteProps<C> {
  return Boolean(t);
}

export function compileRoutes<C>(
  config: RouteProps<C>[],
  context: C,
): RouteProps<C>[] {
  return config.map((route) => applyGuards(route, context)).filter(notNull);
}
