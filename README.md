# 🚥 Guards RBAC for React Router

Package provides methods that allowing you to perform complex logic (Role Based Access Control) between the call for navigation and the final render of a routes.

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://toastyboost.github.io/router-guards/)

## Install

`npm i router-guards`  
`yarn add router-guards`

## Usage

~ app.js
```
import { renderRoutes } from 'router-guards';
import { ROUTES } from './routes';

const Routing = () => {
  const session = { name: 'Alex', role: 'admin' };
  const currentRoutes = renderRoutes(ROUTES, session);

  return currentRoutes;
}

```

 ~ routes.js
```
import { onlyAnon, onlyFor } from './guards';

export const ROUTES = [
  {
    path: '/',
    component: LoginPage,
    guards: [onlyAnon()],
  },
  {
    path: '/',
    component: AdminPage,
    guards: [onlyUsers(), onlyFor(['admin'])],
  },
];
```

~ guards.js
```
import { Guard } from 'router-guards';

type SessionProps = {
  role: 'admin' | null;
};

export function onlyAnon(): Guard<SessionProps> {
  return (route, context) => (context && context.role ? null : route);
}

export function onlyUsers(): Guard<SessionProps> {
  return (route, context) => (context && context.role ? route : null);
}
```

## Features

- [x] Guards (RBAC)
- [x] Render configs (Array, Object)
- [x] Nested configs
- [x] Replace react-router-config

## Attantion

В роутинге важен порядок роуетов. Если вы используете цифры в виде названия ключей, цифровые роуты всплывут в верх объекта.

## TODO

- [ ] Check no guards case
- [ ] If name exist then key in object routes
- [ ] Add tests
- [ ] Add publishing features
- [ ] Add gif example
- [ ] Default path
- [ ] Add app design
- [ ] Inherit parent guards
