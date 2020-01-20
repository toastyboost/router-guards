// import * as React from 'react';

// import { RouteProps, SimpleRoute } from './routes';

// export function toPlain<C>(config: RouteProps<C>[]): RouteProps<C>[] {
//   const plainConfig: SimpleRoute<C>[] = [];

//   for (const route of config) {
//     if ('routes' in route) {
//       const subRoutes = toPlain(route.routes);

//       for (const subRoute of subRoutes) {
//         plainConfig.push({
//           ...subRoute,
//           component: (properties) => (
//             <route.component {...properties}>
//               <subRoute.component {...properties} />
//             </route.component>
//           ),
//         });
//       }
//     } else {
//       plainConfig.push(route);
//     }
//   }

//   return plainConfig;
// }

export {};
