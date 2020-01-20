import { select } from '@storybook/addon-knobs';

import { ROUTES_ARRAY, ROUTES_OBJECT } from '../src/lib/routes';

import { compileRoutes } from '../src';

export default { title: 'Guards' };

export const withArrayConfig = () => {
  const role = select('Role', ['admin', 'client', null], 'admin');
  const currentRoutes = compileRoutes(ROUTES_ARRAY, { role });
  console.log('object', currentRoutes);
  return currentRoutes;
};

export const withObjectConfig = () => {
  const role = select('Role', ['admin', 'client', null], 'admin');
  const currentRoutes = compileRoutes(ROUTES_OBJECT, { role });
  console.log('object', currentRoutes);
  return currentRoutes;
};
