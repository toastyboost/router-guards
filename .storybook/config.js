import * as React from 'react';

import { configure, addDecorator, addParameters } from '@storybook/react';

import { configureActions } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withConsole } from '@storybook/addon-console';

import { themes } from '@storybook/theming';

import StoryRouter from 'storybook-react-router';

import { Styles } from './template/styles';
import { GenericTemplate } from './template';

addParameters({
  options: {
    showPanel: true,
    panelPosition: 'right',
    theme: themes.dark,
  },
});

// Plugins

addDecorator((story) => (
  <>
    <Styles />
    <GenericTemplate children={story()} />
  </>
));

configureActions({
  depth: 20,
  limit: 5,
});

addDecorator(withKnobs);
addDecorator(StoryRouter());

addDecorator((story, context) => withConsole()(story)(context));

configure(require.context('../stories', true, /\.stories\.tsx$/), module);
