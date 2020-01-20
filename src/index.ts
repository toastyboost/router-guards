import { RouteComponentProps } from 'react-router';

export type Route<Ctx> = SimpleRoute<Ctx> | NestedRoute<Ctx>;

type SimpleRoute<Ctx> = {
  name?: string;
  path?: string;
  exact?: boolean;
  component: React.ComponentType<RouteComponentProps>;
  guards?: Guard<Ctx>[];
};

type NestedRoute<Ctx> = {
  exact?: boolean;
  component: React.ComponentType<RouteComponentProps>;
  routes: Route<Ctx>[];
  guards?: Guard<Ctx>[];
};

export type Guard<Ctx> = (
  route: Route<Ctx> | null,
  context: Ctx,
) => Route<Ctx> | null | undefined;

export const compileGuard = <Ctx>(
  route: Route<Ctx>,
  context: Ctx,
): Route<Ctx> | null => {
  const { guards } = route;

  if (guards) {
    let currentRoute: Route<Ctx> | null | undefined = route;

    for (const guard of guards) {
      if (currentRoute === undefined) return null;
      currentRoute = guard(currentRoute, context);
    }

    return currentRoute || null;
  }

  return null;
};

type ObjectRoutes<Ctx> = {
  [key: string]: Route<Ctx>;
};

const toArray = <Ctx>(config: ObjectRoutes<Ctx>): Route<Ctx>[] => {
  return Object.keys(config).reduce<Route<Ctx>[]>((routesList, name) => {
    routesList.push({
      ...config[name],
      name,
    });
    return routesList;
  }, []);
};

export const compileRoutes = <Ctx>(
  config: Route<Ctx>[] | ObjectRoutes<Ctx>,
  context: Ctx,
): Route<Ctx>[] => {
  const routes = Array.isArray(config) ? config : toArray<Ctx>(config);
  console.log('object', routes);
  return routes
    .map((route) => compileGuard(route, context))
    .filter((item) => Boolean(item));
};
