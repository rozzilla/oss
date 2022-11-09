"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[50960],{42045:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>p,metadata:()=>m,toc:()=>d});var n=a(87462),i=(a(67294),a(3905)),l=a(65488),o=a(85162),r=a(3901);const p={toc_max_heading_level:4},s="Platformatic CLI",m={unversionedId:"reference/cli",id:"reference/cli",title:"Platformatic CLI",description:"\x3c!--",source:"@site/docs/reference/cli.md",sourceDirName:"reference",slug:"/reference/cli",permalink:"/docs/next/reference/cli",draft:!1,tags:[],version:"current",frontMatter:{toc_max_heading_level:4},sidebar:"docs",previous:{title:"Reference",permalink:"/docs/next/category/reference"},next:{title:"Platformatic DB",permalink:"/docs/next/reference/db/introduction"}},c={},d=[{value:"Installation and usage",id:"installation-and-usage",level:2},{value:"Commands",id:"commands",level:2},{value:"help",id:"help",level:3},{value:"db",id:"db",level:3},{value:"compile",id:"compile",level:4},{value:"help",id:"help-1",level:4},{value:"init",id:"init",level:4},{value:"migrate",id:"migrate",level:4},{value:"schema",id:"schema",level:4},{value:"seed",id:"seed",level:4},{value:"start",id:"start",level:4},{value:"types",id:"types",level:4},{value:"service",id:"service",level:3},{value:"compile",id:"compile-1",level:4},{value:"help",id:"help-2",level:4},{value:"start",id:"start-1",level:4}],u={toc:d};function f(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"platformatic-cli"},"Platformatic CLI"),(0,i.kt)("h2",{id:"installation-and-usage"},"Installation and usage"),(0,i.kt)("p",null,"Install the Platformatic CLI as a dependency for your project:"),(0,i.kt)(l.Z,{groupId:"package-manager",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install platformatic\n"))),(0,i.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add platformatic\n"))),(0,i.kt)(o.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add platformatic\n")))),(0,i.kt)("p",null,"Once it's installed you can run it with:"),(0,i.kt)(l.Z,{groupId:"package-manager",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx platformatic\n"))),(0,i.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn platformatic\n"))),(0,i.kt)(o.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm platformatic\n")))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic")," package can be installed globally, but installing it as a\nproject dependency ensures that everyone working on the project is using the\nsame version of the Platformatic CLI.")),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("p",null,"The Platformatic CLI provides the following commands:"),(0,i.kt)(r.Z,{toc:d,minHeadingLevel:3,maxHeadingLevel:4,mdxType:"TOCInline"}),(0,i.kt)("h3",{id:"help"},"help"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Welcome to Platformatic. Available commands are:\n\n* help - Display this message\n* help <command> - shows more information about a command.\n* db - start Platformatic DB; type `platformatic db help` to know more.\n* service - start Platformatic Service; type `platformatic service help` to know more.\n")),(0,i.kt)("h3",{id:"db"},"db"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"platformatic db <command>\n")),(0,i.kt)("h4",{id:"compile"},"compile"),(0,i.kt)("p",null,"Compile typescript plugins."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  $ platformatic db compile\n")),(0,i.kt)("p",null,"As a result of executing this command, the Platformatic DB will compile typescript\nplugins in the ",(0,i.kt)("inlineCode",{parentName:"p"},"outDir")," directory. "),(0,i.kt)("p",null,"If not specified, the configuration specified will be loaded from\n",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic.db.json"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic.db.yml"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic.db.tml")," in the current directory.\nYou can find more details about the configuration format at:\n",(0,i.kt)("a",{parentName:"p",href:"https://oss.platformatic.dev/docs/reference/db/configuration"},"https://oss.platformatic.dev/docs/reference/db/configuration"),"."),(0,i.kt)("h4",{id:"help-1"},"help"),(0,i.kt)("p",null,"Available commands:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"help")," - show this help message."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"help <command>")," - shows more information about a command."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"init")," - initiate default application."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start")," - start the server."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"compile")," - compile typescript plugins."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"migrate")," - run migrations."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"seed")," - run a seed file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"types")," - generate typescript types for entities."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"schema")," - generate and print api schema.")),(0,i.kt)("h4",{id:"init"},"init"),(0,i.kt)("p",null,"Initiate default Platformatic DB application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  $ platformatic db init\n")),(0,i.kt)("p",null,"As a result of executing this command, the ",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic.db.json")," configuration\nfile and the ",(0,i.kt)("inlineCode",{parentName:"p"},"migrations")," folder with migration examples will be generated."),(0,i.kt)("p",null,"Options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-h, --hostname <hostname>"),": The hostname where Platformatic DB server will listen for connections."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-p, --port <port>"),": The port where Platformatic DB server will listen for connections."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-db, --database <database_name>"),": The name of the database to use. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"sqlite"),". "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-m, --migrations <path>"),": Relative path to the migrations folder. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"./migrations"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-t, --types <boolean>"),": Set true to enable type autogeneration. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-ts, --typescript <boolean>"),": Set true to enable TypeScript plugins. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,i.kt)("h4",{id:"migrate"},"migrate"),(0,i.kt)("p",null,"Apply all configured migrations to the database:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  $ platformatic db migrate\n")),(0,i.kt)("p",null,"The migrations will be applied in the order they are specified in the\nfolder defined in the configuration file. If you want to apply a specific migration,\nyou can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--to")," option:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  $ platformatic db migrate --to 001\n")),(0,i.kt)("p",null,"Here is an example migration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"  CREATE TABLE graphs (\n    id SERIAL PRIMARY KEY,\n    name TEXT\n  );\n")),(0,i.kt)("p",null,"You can always rollback to a specific migration with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  $ platformatic db migrate --to VERSION\n")),(0,i.kt)("p",null,"Use 000 to reset to the initial state."),(0,i.kt)("p",null,"Options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-c, --config <path>"),": Path to the configuration file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-t, --to <version>"),": Migrate to a specific version.")),(0,i.kt)("p",null,"If not specified, the configuration specified will be loaded from\n",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic.db.json"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic.db.yml"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic.db.tml")," in the current directory.\nYou can find more details about the configuration format at:\n",(0,i.kt)("a",{parentName:"p",href:"https://oss.platformatic.dev/docs/reference/db/configuration"},"https://oss.platformatic.dev/docs/reference/db/configuration"),"."),(0,i.kt)("h4",{id:"schema"},"schema"),(0,i.kt)("p",null,"Generate a schema from the database and prints it to standard output:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"schema graphql")," - generate the GraphQL schema"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"schema openapi")," - generate the OpenAPI schema")),(0,i.kt)("p",null,"Options:"),(0,i.kt)("p",null,"  -c, --config FILE  Specify a configuration file to use"),(0,i.kt)("p",null,"If not specified, the configuration specified will be loaded from\n",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic.db.json"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic.db.yml"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic.db.tml")," in the current directory.\nYou can find more details about the configuration format at:\n",(0,i.kt)("a",{parentName:"p",href:"https://oss.platformatic.dev/docs/reference/db/configuration"},"https://oss.platformatic.dev/docs/reference/db/configuration"),"."),(0,i.kt)("h4",{id:"seed"},"seed"),(0,i.kt)("p",null,"Load a seed into the database. This is a convenience method that loads\na JavaScript file and configure @platformatic/sql-mapper to connect to\nthe database specified in the configuration file."),(0,i.kt)("p",null,"Here is an example of a seed file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"  'use strict'\n\n  module.exports = async function ({ entities, db, sql }) {\n    await entities.graph.save({ input: { name: 'Hello' } })\n    await db.query(sql`\n      INSERT INTO graphs (name) VALUES ('Hello 2');\n    `)\n  }\n")),(0,i.kt)("p",null,"You can run this using the ",(0,i.kt)("inlineCode",{parentName:"p"},"seed")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  $ platformatic db seed seed.js\n")),(0,i.kt)("p",null,"Options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--config")," - Path to the configuration file.")),(0,i.kt)("p",null,"If not specified, the configuration specified will be loaded from\n",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic.db.json"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic.db.yml"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic.db.tml")," in the current directory.\nYou can find more details about the configuration format at:\n",(0,i.kt)("a",{parentName:"p",href:"https://oss.platformatic.dev/docs/reference/db/configuration"},"https://oss.platformatic.dev/docs/reference/db/configuration"),"."),(0,i.kt)("h4",{id:"start"},"start"),(0,i.kt)("p",null,"Start the Platformatic DB server with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," $ platformatic db start\n")),(0,i.kt)("p",null,"You will need a  configuration file. Here is an example to get you started,\nsave the following as ",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic.db.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "server": {\n      "hostname": "127.0.0.1",\n      "port": 0,\n      "logger": {\n        "level": "info"\n      }\n    },\n    "core": {\n      "connectionString": "sqlite://./db"\n    },\n    "migrations": {\n      "dir": "./migrations"\n    }\n  }\n')),(0,i.kt)("p",null,"Remember to create a migration, run the ",(0,i.kt)("inlineCode",{parentName:"p"},"db help migrate")," command to know more."),(0,i.kt)("p",null,"All outstanding migrations will be applied to the database unless the\n",(0,i.kt)("inlineCode",{parentName:"p"},"migrations.autoApply")," configuration option is set to false."),(0,i.kt)("p",null,"By sending the SIGUSR2 signal, the server can be reloaded."),(0,i.kt)("p",null,"Options:"),(0,i.kt)("p",null,"  -c, --config FILE      Specify a configuration file to use"),(0,i.kt)("p",null,"If not specified, the configuration specified will be loaded from ",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic.db.json"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic.db.yml"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic.db.tml")," in the current directory. You can find more details about\nthe configuration format at:\n",(0,i.kt)("a",{parentName:"p",href:"https://oss.platformatic.dev/docs/reference/db/configuration"},"https://oss.platformatic.dev/docs/reference/db/configuration"),"."),(0,i.kt)("h4",{id:"types"},"types"),(0,i.kt)("p",null,"Generate typescript types for your entities from the database."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  $ platformatic db types\n")),(0,i.kt)("p",null,"As a result of executing this command, the Platformatic DB will generate a ",(0,i.kt)("inlineCode",{parentName:"p"},"types"),"\nfolder with a typescript file for each database entity. It will also generate a\n",(0,i.kt)("inlineCode",{parentName:"p"},"global.d.ts")," file that injects the types into the Application instance."),(0,i.kt)("p",null,"In order to add type support to your plugins, you need to install some additional\ndependencies. To do this, copy and run an ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install"),' command with dependencies\nthat "platformatic db types" will ask you.'),(0,i.kt)("p",null,"Here is an example of a platformatic plugin.js with jsdoc support.\nYou can use it to add autocomplete to your code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"/// <reference path=\"./global.d.ts\" />\n'use strict'\n\n/** @param {import('fastify').FastifyInstance} app */\nmodule.exports = async function (app) {\n  app.get('/movie', async () => {\n    const movies = await app.platformatic.entities.movie.find({\n      where: { title: { eq: 'The Hitchhiker\\'s Guide to the Galaxy' } }\n    })\n    return movies[0].id\n  })\n}\n")),(0,i.kt)("p",null,"If not specified, the configuration specified will be loaded from\n",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic.db.json"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic.db.yml"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic.db.tml")," in the current directory.\nYou can find more details about the configuration format at:\n",(0,i.kt)("a",{parentName:"p",href:"https://oss.platformatic.dev/docs/reference/db/configuration"},"https://oss.platformatic.dev/docs/reference/db/configuration"),"."),(0,i.kt)("h3",{id:"service"},"service"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"platformatic service <command>\n")),(0,i.kt)("h4",{id:"compile-1"},"compile"),(0,i.kt)("p",null,"Compile typescript plugins."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  $ platformatic service compile\n")),(0,i.kt)("p",null,"As a result of executing this command, the Platformatic DB will compile typescript\nplugins in the ",(0,i.kt)("inlineCode",{parentName:"p"},"outDir")," directory. "),(0,i.kt)("p",null,"If not specified, the configuration specified will be loaded from\n",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic.service.json"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic.service.yml"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic.service.tml")," in the current directory.\nYou can find more details about the configuration format at:\n",(0,i.kt)("a",{parentName:"p",href:"https://oss.platformatic.dev/docs/reference/service/configuration"},"https://oss.platformatic.dev/docs/reference/service/configuration"),"."),(0,i.kt)("h4",{id:"help-2"},"help"),(0,i.kt)("p",null,"Available commands:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"help")," - show this help message."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"help <command>")," - shows more information about a command."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start")," - start the server.")),(0,i.kt)("h4",{id:"start-1"},"start"),(0,i.kt)("p",null,"Start the Platformatic Service with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," $ platformatic service start\n")),(0,i.kt)("p",null,"You will need a  configuration file. Here is an example to get you started,\nsave the following as ",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic.service.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "server": {\n    "hostname": "127.0.0.1",\n    "port": 0,\n    "logger": {\n      "level": "info"\n    }\n  },\n  "plugin": {\n    "path": "./plugin.js"\n  }\n}\n')))}f.isMDXComponent=!0}}]);