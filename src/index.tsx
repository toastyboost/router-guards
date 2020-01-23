import * as React from 'react';
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
  name?: string;
  path?: string;
  exact?: boolean;
  component: React.ComponentType<RouteComponentProps>;
  routes: Route<Ctx>[];
  guards?: Guard<Ctx>[];
};

export type Guard<Ctx> = (
  route: Route<Ctx> | null,
  context: Ctx,
) => Route<Ctx> | null | undefined;

export function compileGuard<Ctx>(
  route: Route<Ctx>,
  context: Ctx,
): Route<Ctx> | null {
  const { guards } = route;

  if (guards) {
    let currentRoute: Route<Ctx> | null | undefined = route;

    for (const guard of guards) {
      if (currentRoute === undefined) return null;
      currentRoute = guard(currentRoute, context);
    }

    return currentRoute || null;
  }

  return route;
}

type ObjectRoutes<Ctx> = {
  [key: string]: Route<Ctx>;
};

function toArray<Ctx>(config: ObjectRoutes<Ctx>): Route<Ctx>[] {
  return Object.keys(config).reduce<Route<Ctx>[]>((routesList, name) => {
    routesList.push({
      ...config[name],
      name: name,
    });
    return routesList;
  }, []);
}

function compileSubroute<C>(config: Route<C>[]): Route<C>[] {
  const plainConfig: SimpleRoute<C>[] = [];

  for (const route of config) {
    if ('routes' in route) {
      const subRoutes = compileSubroute(route.routes);

      for (const subRoute of subRoutes) {
        console.log('subRoute', subRoute);
        plainConfig.push({
          ...subRoute,
          name: subRoute.name || subRoute.component.name,
          component: (properties) => (
            <route.component {...properties}>
              <subRoute.component {...properties} />
            </route.component>
          ),
        });
      }
    } else {
      plainConfig.push(route);
    }
  }

  return plainConfig;
}

export function renderRoutes<Ctx>(
  config: Route<Ctx>[] | ObjectRoutes<Ctx>,
  context: Ctx,
): Route<Ctx>[] {
  const plainRoutes = Array.isArray(config) ? config : toArray<Ctx>(config);
  const routes = compileSubroute(plainRoutes);

  return routes
    .map((route) => compileGuard(route, context))
    .filter((item) => Boolean(item))
    .map((route) => ({
      name: route.name || route.component.name,
      path: route.path,
      component: route.component,
      exact: true,
    }));
}
