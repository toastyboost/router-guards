(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1353:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(1355),__webpack_require__(137)),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(239),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(185),_storybook_addon_console__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(544),_storybook_theming__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(8),storybook_react_router__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(545),storybook_react_router__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(storybook_react_router__WEBPACK_IMPORTED_MODULE_7__),_src_ui_styles_default__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(546);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.addParameters)({options:{showPanel:!0,panelPosition:"right",theme:_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.themes.dark}});var _ref=react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_ui_styles_default__WEBPACK_IMPORTED_MODULE_8__.a,null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.addDecorator)((function(story){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,_ref,story())})),Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.configureActions)({depth:20,limit:5}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.addDecorator)(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.withKnobs),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.addDecorator)(storybook_react_router__WEBPACK_IMPORTED_MODULE_7___default()()),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.addDecorator)((function(story,context){return Object(_storybook_addon_console__WEBPACK_IMPORTED_MODULE_5__.withConsole)()(story)(context)})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.configure)(__webpack_require__(1403),module)}.call(this,__webpack_require__(1354)(module))},1403:function(module,exports,__webpack_require__){var map={"./guards.stories.tsx":1489};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1403},1489:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),dist=__webpack_require__(185),layout=__webpack_require__(1496),react_router=__webpack_require__(66),react_router_dom=__webpack_require__(359),menu=__webpack_require__(1497);const Nav=({routes:routes})=>react.createElement(menu.a,{mode:"horizontal"},routes.map(({path:path,name:name})=>path&&react.createElement(menu.a.Item,{key:path},react.createElement(react_router_dom.a,{to:path},name)))),Routing=({routes:routes})=>react.createElement(react_router.Switch,null,routes.map((route,key)=>react.createElement(react_router.Route,Object.assign({key:key},route))));var esm_history=__webpack_require__(53);const generic_history=Object(esm_history.a)(),GenericTemplate=({routes:routes,children:children})=>react.createElement(react_router.Router,{history:generic_history},react.createElement(layout.a,null,react.createElement(Nav,{routes:routes}),children));function onlyFor(roles){return(route,context)=>context&&context.role&&roles.includes(context.role)?route:null}const MainPage=()=>react.createElement(react.Fragment,null,"Main Page"),ClientPage=()=>react.createElement(react.Fragment,null,"Client Page"),LoginPage=()=>react.createElement(react.Fragment,null,"Login Page"),AdminPage=()=>react.createElement(react.Fragment,null,"Admin Page"),ROUTES_ARRAY=[{name:"Main",path:"/",exact:!0,component:MainPage,guards:[(route,context)=>context&&context.role?null:route]},{name:"Login",path:"/login",exact:!0,component:LoginPage,guards:[(route,context)=>context&&context.role?null:route]},{name:"Clients",path:"/clients",exact:!0,component:ClientPage,guards:[(route,context)=>context&&context.role?route:null,onlyFor(["client"])]},{name:"Admin",path:"/admin",exact:!0,component:AdminPage,guards:[(route,context)=>context&&context.role?route:null,onlyFor(["admin"])]}],ROUTES_OBJECT={main:{path:"/",exact:!0,component:MainPage,guards:[(route,context)=>context&&context.role?null:route]},login:{path:"/login",exact:!0,component:LoginPage,guards:[(route,context)=>context&&context.role?null:route]},client:{path:"/clients",exact:!0,component:ClientPage,guards:[(route,context)=>context&&context.role?route:null,onlyFor(["client"])]},admin:{path:"/admin",exact:!0,component:AdminPage,guards:[(route,context)=>context&&context.role?route:null,onlyFor(["admin"])]}},compileRoutes=(config,context)=>(Array.isArray(config)?config:(config=>Object.keys(config).reduce((routesList,name)=>(routesList.push(Object.assign(Object.assign({},config[name]),{name:name})),routesList),[]))(config)).map(route=>((route,context)=>{const{guards:guards}=route;if(guards){let currentRoute=route;for(const guard of guards){if(void 0===currentRoute)return null;currentRoute=guard(currentRoute,context)}return currentRoute||null}return null})(route,context)).filter(item=>Boolean(item));__webpack_require__.d(__webpack_exports__,"withArrayConfig",(function(){return withArrayConfig})),__webpack_require__.d(__webpack_exports__,"withObjectConfig",(function(){return withObjectConfig})),__webpack_require__.d(__webpack_exports__,"withoutGuards",(function(){return withoutGuards}));__webpack_require__(511).withSource;var addSourceDecorator=__webpack_require__(511).addSource,__SOURCE_PREFIX__="/home/runner/work/guards-middleware/guards-middleware/stories",__STORY__="import * as React from 'react';\nimport { select } from '@storybook/addon-knobs';\n\nimport { GenericTemplate } from '../src/ui/templates';\nimport { ROUTES_ARRAY, ROUTES_OBJECT } from '../src/lib/routes';\nimport { Routing } from '../src/ui/molecules/routing';\nimport { compileRoutes } from '../src/middleware';\n\nexport default { title: 'Guards' };\n\nexport const withArrayConfig = () => {\n  const role = select('Role', ['admin', 'client', null], 'admin');\n\n  const currentRoutes = compileRoutes(ROUTES_ARRAY, { role });\n\n  return (\n    <GenericTemplate routes={currentRoutes}>\n      <Routing routes={currentRoutes} />\n    </GenericTemplate>\n  );\n};\n\nexport const withObjectConfig = () => {\n  const role = select('Role', ['admin', 'client', null], 'admin');\n\n  const currentRoutes = compileRoutes(ROUTES_OBJECT, { role });\n\n  return (\n    <GenericTemplate routes={currentRoutes}>\n      <Routing routes={currentRoutes} />\n    </GenericTemplate>\n  );\n};\n\nexport const withoutGuards = () => {\n  return (\n    <GenericTemplate routes={ROUTES_ARRAY}>\n      <Routing routes={ROUTES_ARRAY} />\n    </GenericTemplate>\n  );\n};\n",__ADDS_MAP__={"guards--with-array-config":{startLoc:{col:31,line:11},endLoc:{col:1,line:21},startBody:{col:31,line:11},endBody:{col:1,line:21}},"guards--with-object-config":{startLoc:{col:32,line:23},endLoc:{col:1,line:33},startBody:{col:32,line:23},endBody:{col:1,line:33}},"guards--without-guards":{startLoc:{col:29,line:35},endLoc:{col:1,line:41},startBody:{col:29,line:35},endBody:{col:1,line:41}}},__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={};__webpack_exports__.default={parameters:{storySource:{source:"import * as React from 'react';\nimport { select } from '@storybook/addon-knobs';\n\nimport { GenericTemplate } from '../src/ui/templates';\nimport { ROUTES_ARRAY, ROUTES_OBJECT } from '../src/lib/routes';\nimport { Routing } from '../src/ui/molecules/routing';\nimport { compileRoutes } from '../src/middleware';\n\nexport default { title: 'Guards' };\n\nexport const withArrayConfig = () => {\n  const role = select('Role', ['admin', 'client', null], 'admin');\n\n  const currentRoutes = compileRoutes(ROUTES_ARRAY, { role });\n\n  return (\n    <GenericTemplate routes={currentRoutes}>\n      <Routing routes={currentRoutes} />\n    </GenericTemplate>\n  );\n};\n\nexport const withObjectConfig = () => {\n  const role = select('Role', ['admin', 'client', null], 'admin');\n\n  const currentRoutes = compileRoutes(ROUTES_OBJECT, { role });\n\n  return (\n    <GenericTemplate routes={currentRoutes}>\n      <Routing routes={currentRoutes} />\n    </GenericTemplate>\n  );\n};\n\nexport const withoutGuards = () => {\n  return (\n    <GenericTemplate routes={ROUTES_ARRAY}>\n      <Routing routes={ROUTES_ARRAY} />\n    </GenericTemplate>\n  );\n};\n",locationsMap:{"guards--with-array-config":{startLoc:{col:31,line:11},endLoc:{col:1,line:21},startBody:{col:31,line:11},endBody:{col:1,line:21}},"guards--with-object-config":{startLoc:{col:32,line:23},endLoc:{col:1,line:33},startBody:{col:32,line:23},endBody:{col:1,line:33}},"guards--without-guards":{startLoc:{col:29,line:35},endLoc:{col:1,line:41},startBody:{col:29,line:35},endBody:{col:1,line:41}}}}},title:"Guards"};const withArrayConfig=addSourceDecorator(()=>{const role=Object(dist.select)("Role",["admin","client",null],"admin"),currentRoutes=compileRoutes(ROUTES_ARRAY,{role:role});return react.createElement(GenericTemplate,{routes:currentRoutes},react.createElement(Routing,{routes:currentRoutes}))},{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/guards.stories.tsx",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),withObjectConfig=addSourceDecorator(()=>{const role=Object(dist.select)("Role",["admin","client",null],"admin"),currentRoutes=compileRoutes(ROUTES_OBJECT,{role:role});return react.createElement(GenericTemplate,{routes:currentRoutes},react.createElement(Routing,{routes:currentRoutes}))},{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/guards.stories.tsx",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),withoutGuards=addSourceDecorator(()=>react.createElement(GenericTemplate,{routes:ROUTES_ARRAY},react.createElement(Routing,{routes:ROUTES_ARRAY})),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/guards.stories.tsx",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__})},546:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return GlobalStyle}));var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(251),styled_normalize__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(547);const globals=styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
  :root {
    --text-color: rgba(0, 0, 0, 0.85);
    --white: #ffffff;
    --red: #ec0000;
    --dark-red: #c50f0f;
    --dark-gray: #34353a;
    --black: #000000;
    --light-silver: #f8f7f6;
    --silver: #ebeae9;
    --dark-silver: #dbdbdb;
    --light-brown: #cdc8be;
    --brown: #887f6f;
    --golden: #ffbe00;
    --dark-golden: #de9e11;
    --orange: #ff8200;
    --green: #8dc73f;
    --colbat: #006edc;
    --light-blue: #2582af;
    --blue: #126a97;
    --steel-blue: #11628d;
    --dark-blue: #215571;
  }

  body,
  html {
    -webkit-font-smoothing: antialiased;
    color: var(--text-color);
    font-family: 'Ikano';
    font-family: var(--main-font);
    font-size: 62.5%;
    font-weight: 400;
    height: 100%;
    line-height: 1.4;
    margin-left: auto;
    margin-right: auto;
    min-width: 320px;
    width: 100%;
  }

  div {
    &[data-disabled='true'] {
      opacity: 0.2;
    }
  }

  #root {
    min-height: 100vh;
    height: 100%;
  }

  section {
    font-size: 1.6rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--main-font);
    color: var(--text-color);
  }

  p {
    font-family: var(--main-font);
  }

  button {
    border: 0;
  }

  input {
    border: 0;
  }

  a {
    border: 0;
    color: var(--blue);
    text-decoration: none;
    transition: 0.2s;
  }

  a:visited,
  a:focus,
  a:active,
  a:hover {
    outline: 0 none;
  }

  img {
    border: 0;
  }

  menu,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  input {
    background-color: transparent;
    line-height: 54px;
    padding: 0 12px;
    width: 100%;
  }
`,GlobalStyle=styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`
  ${styled_normalize__WEBPACK_IMPORTED_MODULE_1__.normalize}
  ${globals}
`},560:function(module,exports,__webpack_require__){__webpack_require__(561),__webpack_require__(702),__webpack_require__(703),__webpack_require__(1352),module.exports=__webpack_require__(1353)},620:function(module,exports){}},[[560,1,2]]]);
//# sourceMappingURL=main.9376287c7a9a9a4ed21c.bundle.js.map