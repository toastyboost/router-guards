import * as React from 'react';

import { Route, SimpleRoute } from './routes';

export function toPlain<C>(config: Route<C>[]): Route<C>[] {
  const plainConfig: SimpleRoute<C>[] = [];

  for (const route of config) {
    if ('routes' in route) {
      const subRoutes = toPlain(route.routes);

      for (const subRoute of subRoutes) {
        plainConfig.push({
          ...subRoute,
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
