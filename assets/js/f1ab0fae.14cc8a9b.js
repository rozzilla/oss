"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[41946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},45229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={},o="Plugin",l={unversionedId:"reference/db/plugin",id:"version-0.5.1/reference/db/plugin",title:"Plugin",description:"If you want to extend Platformatic DB features, it is possible to register a plugin, which will be in the form of a standard Fastify plugin.",source:"@site/versioned_docs/version-0.5.1/reference/db/plugin.md",sourceDirName:"reference/db",slug:"/reference/db/plugin",permalink:"/docs/0.5.1/reference/db/plugin",draft:!1,tags:[],version:"0.5.1",frontMatter:{},sidebar:"docs",previous:{title:"Programmatic Rules",permalink:"/docs/0.5.1/reference/db/authorization/programmatic-rules"},next:{title:"Logging",permalink:"/docs/0.5.1/reference/db/logging"}},p={},s=[{value:"Hot Reload",id:"hot-reload",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"plugin"},"Plugin"),(0,a.kt)("p",null,"If you want to extend Platformatic DB features, it is possible to register a plugin, which will be in the form of a standard ",(0,a.kt)("a",{parentName:"p",href:"https://fastify.io"},"Fastify")," plugin."),(0,a.kt)("p",null,"The config file will specify where the plugin file is located as the example below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "plugin": {\n    "path": "./plugin/index.js"\n  }\n}\n')),(0,a.kt)("p",null,"The path is relative to the config file path."),(0,a.kt)("p",null,"Since it uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mcollina/fastify-sanbdbox"},"fastify-sandbox")," under the hood, all other options of that package may be specified under the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin")," property."),(0,a.kt)("p",null,"Once the config file is set up, you can write your plugin to extend Platformatic DB API or write your custom business logic."),(0,a.kt)("p",null,"You should export an async ",(0,a.kt)("inlineCode",{parentName:"p"},"function")," which receives a parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"app")," (",(0,a.kt)("inlineCode",{parentName:"li"},"FastifyInstance"),") that is the main fastify ",(0,a.kt)("a",{parentName:"li",href:"https://www.fastify.io/docs/latest/Reference/Server/#instance"},"instance")," running Platformatic DB"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"opts")," all the options specified in the config file after ",(0,a.kt)("inlineCode",{parentName:"li"},"path")),(0,a.kt)("li",{parentName:"ul"},"You can always access Platformatic ",(0,a.kt)("a",{parentName:"li",href:"/docs/0.5.1/reference/sql-mapper/introduction"},"data mapper")," through ",(0,a.kt)("inlineCode",{parentName:"li"},"app.platformatic")," property.")),(0,a.kt)("p",null,"Check some ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.5.1/guides/add-custom-functionality/introduction"},"examples"),"."),(0,a.kt)("h2",{id:"hot-reload"},"Hot Reload"),(0,a.kt)("p",null,"Plugin file is being watched by ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/fs.html#fspromiseswatchfilename-options"},(0,a.kt)("inlineCode",{parentName:"a"},"fs.watch"))," function."),(0,a.kt)("p",null,"You don't need to reload Platformatic DB server while working on your plugin. Every time you save, the watcher will trigger a reload event and the server will auto-restart and load your updated code."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"At this time, on Linux, file watch in subdirectories is not supported due to a Node.js limitation (documented ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/fs.html#caveats"},"here"),").")))}u.isMDXComponent=!0}}]);