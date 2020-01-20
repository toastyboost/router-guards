import * as React from 'react';
import { select } from '@storybook/addon-knobs';

import { GenericTemplate } from '../src/ui/templates';
import { ROUTES_ARRAY, ROUTES_OBJECT } from '../src/lib/routes';
import { Routing } from '../src/ui/molecules/routing';
import { compileRoutes } from '../src/middleware';

export default { title: 'Guards' };

export const withArrayConfig = () => {
  const role = select('Role', ['admin', 'client', null], 'admin');

  const currentRoutes = compileRoutes(ROUTES_ARRAY, { role });

  return (
    <GenericTemplate routes={currentRoutes}>
      <Routing routes={currentRoutes} />
    </GenericTemplate>
  );
};

export const withObjectConfig = () => {
  const role = select('Role', ['admin', 'client', null], 'admin');

  const currentRoutes = compileRoutes(ROUTES_OBJECT, { role });

  return (
    <GenericTemplate routes={currentRoutes}>
      <Routing routes={currentRoutes} />
    </GenericTemplate>
  );
};

export const withoutGuards = () => {
  return (
    <GenericTemplate routes={ROUTES_ARRAY}>
      <Routing routes={ROUTES_ARRAY} />
    </GenericTemplate>
  );
};
