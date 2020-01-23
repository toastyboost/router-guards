import { select } from '@storybook/addon-knobs';

import {
  ROUTES_ARRAY,
  ROUTES_OBJECT,
  ROUTES_OBJECT_NESTED,
} from '../lib/routes';

import { renderRoutes } from '../src';

export default { title: 'Guards' };

export const withArrayConfig = () => {
  const role = select('Role', ['admin', 'client', null], 'admin');
  const currentRoutes = renderRoutes(ROUTES_ARRAY, { role });

  return currentRoutes;
};

export const withObjectConfig = () => {
  const role = select('Role', ['admin', 'client', null], 'admin');
  const currentRoutes = renderRoutes(ROUTES_OBJECT, { role });

  return currentRoutes;
};

export const withObjectNesterConfig = () => {
  const role = select('Role', ['admin', 'client', null], 'admin');
  const currentRoutes = renderRoutes(ROUTES_OBJECT_NESTED, { role });

  return currentRoutes;
};
