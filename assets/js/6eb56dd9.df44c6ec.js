"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[2850],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:1},o="Introduction",l={unversionedId:"reference/sql-mapper/intro",id:"version-0.0.17/reference/sql-mapper/intro",title:"Introduction",description:"The Platformatic DB Mapper will inspect a database schema and return an object containing:",source:"@site/versioned_docs/version-0.0.17/reference/sql-mapper/intro.md",sourceDirName:"reference/sql-mapper",slug:"/reference/sql-mapper/intro",permalink:"/docs/0.0.17/reference/sql-mapper/intro",draft:!1,tags:[],version:"0.0.17",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Mutations",permalink:"/docs/0.0.17/reference/sql-graphql/mutations"},next:{title:"Fastify Plugin",permalink:"/docs/0.0.17/reference/sql-mapper/fastify-plugin"}},s={},p=[{value:"Code samples",id:"code-samples",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The Platformatic DB Mapper will inspect a database schema and return an object containing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"db"),": a Database abstraction layer from ",(0,r.kt)("a",{parentName:"li",href:"https://www.atdatabases.org/"},"@Databases")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sql"),": The SQL builder from ",(0,r.kt)("a",{parentName:"li",href:"https://www.atdatabases.org/"},"@Databases")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"entities")," and object containing a key for each table found in the schema, with basic CRUD operations. See ",(0,r.kt)("a",{parentName:"li",href:"/docs/0.0.17/reference/sql-mapper/entity/intro"},"Entity Reference")," for details.")),(0,r.kt)("p",null,"It exports a function that accepts following parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"connectionString"),": The Database connection string"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"log"),": A logger object (like ",(0,r.kt)("a",{parentName:"li",href:"https://getpino.io"},"Pino"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onDatabaseLoad"),": An async function that is called after the connection is established. It will receive ",(0,r.kt)("inlineCode",{parentName:"li"},"db")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"sql")," as parameter.  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ignore"),": Object used to ignore some tables from building entities. (i.e. ",(0,r.kt)("inlineCode",{parentName:"li"},"{ 'versions': true }")," will ignore ",(0,r.kt)("inlineCode",{parentName:"li"},"versions")," table)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"autoTimestamp"),": Generate timestamp automatically when inserting/updating records."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hooks"),": For each entity name (like ",(0,r.kt)("inlineCode",{parentName:"li"},"Page"),") you can customize any of the entity API function. Your custom function will receive the original function as first parameter, and then all the other parameters passed to it.")),(0,r.kt)("h2",{id:"code-samples"},"Code samples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { pino } = require('pino')\n\nconst logger = pino()\n\nasync function onDatabaseLoad (db, sql) {\n  await db.query(sql`CREATE TABLE pages (\n    id SERIAL PRIMARY KEY,\n    title VARCHAR(255) NOT NULL\n  );`)\n}\nconst connectionString =\n  'postgres://postgres:postgres@localhost:5432/postgres'\nconst mapper = await connect({\n  connectionString,\n  log: logger,\n  onDatabaseLoad,\n  ignore: {},\n  hooks: {\n    Page: {\n      find: async function(_find, opts) {\n        console.log('hook called');\n        return await _find(opts)\n      }\n    }\n  }\n})\nconst pageEntity = mapper.entities.page\n\nawait mapper.db.query(mapper.sql`SELECT * FROM pages`)\nawait mapper.db.find('option1', 'option2')\n...\n\n")))}m.isMDXComponent=!0}}]);