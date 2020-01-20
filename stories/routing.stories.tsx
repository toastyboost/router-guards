import { ROUTES_ARRAY } from '../src/lib/routes';

export default { title: 'Routes' };

export const allRoutes = () => {
  const currentRoutes = ROUTES_ARRAY.map((route) => ({
    ...route,
    exact: true,
  }));

  return currentRoutes;
};
