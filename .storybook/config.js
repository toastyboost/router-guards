import * as React from 'react';
import 'antd/dist/antd.css';

import { configure, addDecorator, addParameters } from '@storybook/react';

import { configureActions } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withConsole } from '@storybook/addon-console';

import { themes } from '@storybook/theming';

import StoryRouter from 'storybook-react-router';

import { GlobalStyle } from '../src/ui/styles/default';

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
    <GlobalStyle />
    {story()}
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
