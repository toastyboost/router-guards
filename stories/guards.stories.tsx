import * as React from 'react';
import { GenericTemplate } from '../src/ui/templates';
import { ROUTES_ARRAY } from '../src/lib/routes';
import { Routing } from '../src/ui/molecules/routing';

export default { title: 'Guards' };

export const withGuards = () => {
  return <>text</>;
};

export const withoutGuards = () => {
  return (
    <GenericTemplate routes={ROUTES_ARRAY}>
      <Routing routes={ROUTES_ARRAY} />
    </GenericTemplate>
  );
};
