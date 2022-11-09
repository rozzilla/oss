"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[13759],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},50670:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const s={},o="Seed a Database",i={unversionedId:"guides/seed-a-database",id:"version-0.6.0/guides/seed-a-database",title:"Seed a Database",description:"A database is as useful as the data that it contains: a fresh, empty database",source:"@site/versioned_docs/version-0.6.0/guides/seed-a-database.md",sourceDirName:"guides",slug:"/guides/seed-a-database",permalink:"/docs/0.6.0/guides/seed-a-database",draft:!1,tags:[],version:"0.6.0",frontMatter:{},sidebar:"docs",previous:{title:"Advanced Fly.io Deployment",permalink:"/docs/0.6.0/guides/deployment/advanced-fly-io-deployment"},next:{title:"Add Custom Functionality",permalink:"/docs/0.6.0/guides/add-custom-functionality/introduction"}},l={},c=[{value:"Example",id:"example",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"seed-a-database"},"Seed a Database"),(0,r.kt)("p",null,"A database is as useful as the data that it contains: a fresh, empty database\nisn't always the best starting point. We can add a few rows from our migrations\nusing SQL, but we might need to use JavaScript from time to time."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.6.0/reference/cli#seed"},"platformatic db seed"),' command allows us to run a\nscript that will populate \u2014 or "seed" \u2014 our database.'),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Our seed script should export a ",(0,r.kt)("inlineCode",{parentName:"p"},"Function")," that accepts an argument:\nan instance of ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.6.0/reference/sql-mapper/introduction"},(0,r.kt)("inlineCode",{parentName:"a"},"@platformatic/sql-mapper")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="seed.js"',title:'"seed.js"'},"'use strict'\n\nmodule.exports = async function ({ entities, db, sql }) {\n  await entities.graph.save({ input: { name: 'Hello' } })\n  await db.query(sql`\n    INSERT INTO graphs (name) VALUES ('Hello 2');\n  `)\n}\n")),(0,r.kt)("p",null,"We can then run the seed script with the Platformatic CLI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx platformatic db seed seed.js\n")))}d.isMDXComponent=!0}}]);