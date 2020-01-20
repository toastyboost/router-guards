(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1355:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(137),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(241),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(185),_storybook_addon_console__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(544),_storybook_theming__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8),storybook_react_router__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(545),storybook_react_router__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(storybook_react_router__WEBPACK_IMPORTED_MODULE_6__),_template_styles__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(546),_template__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(548);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addParameters)({options:{showPanel:!0,panelPosition:"right",theme:_storybook_theming__WEBPACK_IMPORTED_MODULE_5__.themes.dark}});var _ref=react__WEBPACK_IMPORTED_MODULE_0__.createElement(_template_styles__WEBPACK_IMPORTED_MODULE_7__.a,null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)((function(story){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,_ref,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_template__WEBPACK_IMPORTED_MODULE_8__.a,{children:story()}))})),Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.configureActions)({depth:20,limit:5}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(storybook_react_router__WEBPACK_IMPORTED_MODULE_6___default()()),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)((function(story,context){return Object(_storybook_addon_console__WEBPACK_IMPORTED_MODULE_4__.withConsole)()(story)(context)})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.configure)(__webpack_require__(1487),module)}.call(this,__webpack_require__(1356)(module))},1487:function(module,exports,__webpack_require__){var map={"./guards.stories.tsx":1494,"./routing.stories.tsx":1490};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1487},1490:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"allRoutes",(function(){return allRoutes}));var _src_lib_routes__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(188),addSourceDecorator=(__webpack_require__(236).withSource,__webpack_require__(236).addSource);__webpack_exports__.default={parameters:{storySource:{source:"import { ROUTES_ARRAY } from '../src/lib/routes';\n\nexport default { title: 'Routing' };\n\nexport const allRoutes = () => {\n  return ROUTES_ARRAY;\n};\n",locationsMap:{"routing--all-routes":{startLoc:{col:25,line:5},endLoc:{col:1,line:7},startBody:{col:25,line:5},endBody:{col:1,line:7}}}}},title:"Routing"};const allRoutes=addSourceDecorator(()=>_src_lib_routes__WEBPACK_IMPORTED_MODULE_0__.a,{__STORY__:"import { ROUTES_ARRAY } from '../src/lib/routes';\n\nexport default { title: 'Routing' };\n\nexport const allRoutes = () => {\n  return ROUTES_ARRAY;\n};\n",__ADDS_MAP__:{"routing--all-routes":{startLoc:{col:25,line:5},endLoc:{col:1,line:7},startBody:{col:25,line:5},endBody:{col:1,line:7}}},__MAIN_FILE_LOCATION__:"/routing.stories.tsx",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"/home/runner/work/guards-middleware/guards-middleware/stories",__IDS_TO_FRAMEWORKS__:{}})},1494:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var dist=__webpack_require__(185),routes=__webpack_require__(188);const compileRoutes=(config,context)=>(Array.isArray(config)?config:(config=>Object.keys(config).reduce((routesList,name)=>(routesList.push(Object.assign(Object.assign({},config[name]),{name:name})),routesList),[]))(config)).map(route=>((route,context)=>{const{guards:guards}=route;if(guards){let currentRoute=route;for(const guard of guards){if(void 0===currentRoute)return null;currentRoute=guard(currentRoute,context)}return currentRoute||null}return null})(route,context)).filter(item=>Boolean(item));__webpack_require__.d(__webpack_exports__,"withArrayConfig",(function(){return withArrayConfig})),__webpack_require__.d(__webpack_exports__,"withObjectConfig",(function(){return withObjectConfig}));__webpack_require__(236).withSource;var addSourceDecorator=__webpack_require__(236).addSource,__SOURCE_PREFIX__="/home/runner/work/guards-middleware/guards-middleware/stories",__STORY__="import { select } from '@storybook/addon-knobs';\n\nimport { ROUTES_ARRAY, ROUTES_OBJECT } from '../src/lib/routes';\n\nimport { compileRoutes } from '../src';\n\nexport default { title: 'Guards' };\n\nexport const withArrayConfig = () => {\n  const role = select('Role', ['admin', 'client', null], 'admin');\n  const currentRoutes = compileRoutes(ROUTES_ARRAY, { role });\n\n  return currentRoutes;\n};\n\nexport const withObjectConfig = () => {\n  const role = select('Role', ['admin', 'client', null], 'admin');\n  const currentRoutes = compileRoutes(ROUTES_OBJECT, { role });\n\n  return currentRoutes;\n};\n",__ADDS_MAP__={"guards--with-array-config":{startLoc:{col:31,line:9},endLoc:{col:1,line:14},startBody:{col:31,line:9},endBody:{col:1,line:14}},"guards--with-object-config":{startLoc:{col:32,line:16},endLoc:{col:1,line:21},startBody:{col:32,line:16},endBody:{col:1,line:21}}},__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={};__webpack_exports__.default={parameters:{storySource:{source:"import { select } from '@storybook/addon-knobs';\n\nimport { ROUTES_ARRAY, ROUTES_OBJECT } from '../src/lib/routes';\n\nimport { compileRoutes } from '../src';\n\nexport default { title: 'Guards' };\n\nexport const withArrayConfig = () => {\n  const role = select('Role', ['admin', 'client', null], 'admin');\n  const currentRoutes = compileRoutes(ROUTES_ARRAY, { role });\n\n  return currentRoutes;\n};\n\nexport const withObjectConfig = () => {\n  const role = select('Role', ['admin', 'client', null], 'admin');\n  const currentRoutes = compileRoutes(ROUTES_OBJECT, { role });\n\n  return currentRoutes;\n};\n",locationsMap:{"guards--with-array-config":{startLoc:{col:31,line:9},endLoc:{col:1,line:14},startBody:{col:31,line:9},endBody:{col:1,line:14}},"guards--with-object-config":{startLoc:{col:32,line:16},endLoc:{col:1,line:21},startBody:{col:32,line:16},endBody:{col:1,line:21}}}}},title:"Guards"};const withArrayConfig=addSourceDecorator(()=>{const role=Object(dist.select)("Role",["admin","client",null],"admin");return compileRoutes(routes.a,{role:role})},{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/guards.stories.tsx",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),withObjectConfig=addSourceDecorator(()=>{const role=Object(dist.select)("Role",["admin","client",null],"admin");return compileRoutes(routes.b,{role:role})},{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/guards.stories.tsx",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__})},188:function(module,__webpack_exports__,__webpack_require__){"use strict";function onlyFor(roles){return(route,context)=>context&&context.role&&roles.includes(context.role)?route:null}var react=__webpack_require__(0);const MainPage=()=>react.createElement(react.Fragment,null,"Main Page"),ClientPage=()=>react.createElement(react.Fragment,null,"Client Page"),LoginPage=()=>react.createElement(react.Fragment,null,"Login Page"),AdminPage=()=>react.createElement(react.Fragment,null,"Admin Page");__webpack_require__.d(__webpack_exports__,"a",(function(){return ROUTES_ARRAY})),__webpack_require__.d(__webpack_exports__,"b",(function(){return ROUTES_OBJECT}));const ROUTES_ARRAY=[{name:"Main",path:"/",exact:!0,component:MainPage,guards:[(route,context)=>context&&context.role?null:route]},{name:"Login",path:"/login",exact:!0,component:LoginPage,guards:[(route,context)=>context&&context.role?null:route]},{name:"Clients",path:"/clients",exact:!0,component:ClientPage,guards:[(route,context)=>context&&context.role?route:null,onlyFor(["client"])]},{name:"Admin",path:"/admin",exact:!0,component:AdminPage,guards:[(route,context)=>context&&context.role?route:null,onlyFor(["admin"])]}],ROUTES_OBJECT={main:{path:"/",exact:!0,component:MainPage,guards:[(route,context)=>context&&context.role?null:route]},login:{path:"/login",exact:!0,component:LoginPage,guards:[(route,context)=>context&&context.role?null:route]},client:{path:"/clients",exact:!0,component:ClientPage,guards:[(route,context)=>context&&context.role?route:null,onlyFor(["client"])]},admin:{path:"/admin",exact:!0,component:AdminPage,guards:[(route,context)=>context&&context.role?route:null,onlyFor(["admin"])]}}},546:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Styles}));var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(253),styled_normalize__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(547);__webpack_require__(1401);const globals=styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
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
`,Styles=styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`
  ${styled_normalize__WEBPACK_IMPORTED_MODULE_1__.normalize}
  ${globals}
`},548:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return GenericTemplate}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),antd__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(560),antd__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1497),react_router_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(558),react_router_dom__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(66),history__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(53);const history=Object(history__WEBPACK_IMPORTED_MODULE_5__.a)(),Nav=({children:children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.a,{mode:"horizontal"},children.map(({path:path,name:name})=>path&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.a.Item,{key:path},react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.a,{to:path},name)))),GenericTemplate=({children:children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Router,{history:history},react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_2__.a,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Nav,{children:children}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Switch,null,children.map((route,key)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route,Object.assign({key:key},route))))))},562:function(module,exports,__webpack_require__){__webpack_require__(563),__webpack_require__(704),__webpack_require__(705),__webpack_require__(1354),module.exports=__webpack_require__(1355)},622:function(module,exports){}},[[562,1,2]]]);
//# sourceMappingURL=main.f7f505bf418b98e64173.bundle.js.map