"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[29176],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||a;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},53344:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(87462),i=(n(67294),n(3905));const a={credits:"https://github.com/fastify/fastify/blob/main/docs/Guides/Style-Guide.md"},r=void 0,s={unversionedId:"contributing/style-guide",id:"version-0.0.17/contributing/style-guide",title:"style-guide",description:"Welcome",source:"@site/versioned_docs/version-0.0.17/contributing/style-guide.md",sourceDirName:"contributing",slug:"/contributing/style-guide",permalink:"/docs/0.0.17/contributing/style-guide",draft:!1,tags:[],version:"0.0.17",frontMatter:{credits:"https://github.com/fastify/fastify/blob/main/docs/Guides/Style-Guide.md"},sidebar:"tutorialSidebar",previous:{title:"Contributing",permalink:"/docs/0.0.17/contributing/intro"}},l={},u=[{value:"Welcome",id:"welcome",level:2},{value:"Who is this guide for?",id:"who-is-this-guide-for",level:2},{value:"Before you write",id:"before-you-write",level:2},{value:"Consider your Audience",id:"consider-your-audience",level:3},{value:"Get straight to the point",id:"get-straight-to-the-point",level:3},{value:"Images and video should enhance the written documentation",id:"images-and-video-should-enhance-the-written-documentation",level:3},{value:"Avoid plagiarism",id:"avoid-plagiarism",level:3},{value:"Word Choice",id:"word-choice",level:2},{value:"When to use the second person &quot;you&quot; as the pronoun",id:"when-to-use-the-second-person-you-as-the-pronoun",level:3},{value:"When to avoid the second person &quot;you&quot; as the pronoun",id:"when-to-avoid-the-second-person-you-as-the-pronoun",level:2},{value:"Avoid using contractions",id:"avoid-using-contractions",level:3},{value:"Avoid using condescending terms",id:"avoid-using-condescending-terms",level:3},{value:"Starting with a verb",id:"starting-with-a-verb",level:3},{value:"Grammatical moods",id:"grammatical-moods",level:3},{value:"Use <strong>active</strong> voice instead of <strong>passive</strong>",id:"use-active-voice-instead-of-passive",level:3},{value:"Writing Style",id:"writing-style",level:2},{value:"Documentation titles",id:"documentation-titles",level:3},{value:"Hyperlinks",id:"hyperlinks",level:3}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"welcome"},"Welcome"),(0,i.kt)("p",null,"Welcome to ",(0,i.kt)("em",{parentName:"p"},"Platformatic Style Guide"),". This guide is here to provide you with a\nconventional writing style for users writing developer documentation on our Open\nSource framework. Each topic is precise and well explained to help you write\ndocumentation users can easily understand and implement."),(0,i.kt)("h2",{id:"who-is-this-guide-for"},"Who is this guide for?"),(0,i.kt)("p",null,"This guide is for anyone who loves to build with Platformatic or wants to contribute\nto our documentation. You do not need to be an expert in writing technical\ndocumentation. This guide is here to help you."),(0,i.kt)("p",null,"Visit ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/platformatic/platformatic/blob/main/CONTRIBUTING.md"},"CONTRIBUTING.md"),"\nfile on GitHub to join our Open Source folks."),(0,i.kt)("h2",{id:"before-you-write"},"Before you write"),(0,i.kt)("p",null,"You should have a basic understanding of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JavaScript"),(0,i.kt)("li",{parentName:"ul"},"Node.js"),(0,i.kt)("li",{parentName:"ul"},"Git"),(0,i.kt)("li",{parentName:"ul"},"GitHub"),(0,i.kt)("li",{parentName:"ul"},"Markdown"),(0,i.kt)("li",{parentName:"ul"},"HTTP"),(0,i.kt)("li",{parentName:"ul"},"NPM")),(0,i.kt)("h3",{id:"consider-your-audience"},"Consider your Audience"),(0,i.kt)("p",null,"Before you start writing, think about your audience. In this case, your audience\nshould already know HTTP, JavaScript, NPM, and Node.js. It is necessary to keep\nyour readers in mind because they are the ones consuming your content. You want\nto give as much useful information as possible. Consider the vital things they\nneed to know and how they can understand them. Use words and references that\nreaders can relate to easily. Ask for feedback from the community, it can help\nyou write better documentation that focuses on the user and what you want to\nachieve."),(0,i.kt)("h3",{id:"get-straight-to-the-point"},"Get straight to the point"),(0,i.kt)("p",null,"Give your readers a clear and precise action to take. Start with what is most\nimportant. This way, you can help them find what they need faster. Mostly,\nreaders tend to read the first content on a page, and many will not scroll\nfurther."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Less like this: Colons are very important to register a parametric path. It lets\nthe framework know there is a new parameter created. You can place the colon\nbefore the parameter name so the parametric path can be created."),(0,i.kt)("p",null,"More Like this: To register a parametric path, put a colon before the parameter\nname. Using a colon lets the framework know it is a parametric path and not a\nstatic path."),(0,i.kt)("h3",{id:"images-and-video-should-enhance-the-written-documentation"},"Images and video should enhance the written documentation"),(0,i.kt)("p",null,"Images and video should only be added if they complement the written\ndocumentation, for example to help the reader form a clearer mental model of a\nconcept or pattern."),(0,i.kt)("p",null,"Images can be directly embedded, but videos should be included by linking to an\nexternal site, such as YouTube. You can add links by using\n",(0,i.kt)("inlineCode",{parentName:"p"},"[Title](https://www.websitename.com)")," in the Markdown."),(0,i.kt)("h3",{id:"avoid-plagiarism"},"Avoid plagiarism"),(0,i.kt)("p",null,"Make sure you avoid copying other people's work. Keep it as original as\npossible. You can learn from what they have done and reference where it is from\nif you used a particular quote from their work."),(0,i.kt)("h2",{id:"word-choice"},"Word Choice"),(0,i.kt)("p",null,"There are a few things you need to use and avoid when writing your documentation\nto improve readability for readers and make documentation neat, direct, and\nclean."),(0,i.kt)("h3",{id:"when-to-use-the-second-person-you-as-the-pronoun"},'When to use the second person "you" as the pronoun'),(0,i.kt)("p",null,'When writing articles or guides, your content should communicate directly to\nreaders in the second person ("you") addressed form. It is easier to give them\ndirect instruction on what to do on a particular topic. To see an example, visit\nthe ',(0,i.kt)("a",{parentName:"p",href:"/docs/0.0.17/getting-started/quick-start-guide"},"Quick Start Guide"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Less like this: we can use the following plugins."),(0,i.kt)("p",null,"More like this: You can use the following plugins."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"According to ",(0,i.kt)("a",{parentName:"p",href:"#"},"Wikipedia"),", ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"You"))," is usually a second person pronoun.\nAlso, used to refer to an indeterminate person, as a more common alternative\nto a very formal indefinite pronoun.")),(0,i.kt)("h2",{id:"when-to-avoid-the-second-person-you-as-the-pronoun"},'When to avoid the second person "you" as the pronoun'),(0,i.kt)("p",null,'One of the main rules of formal writing such as reference documentation, or API\ndocumentation, is to avoid the second person ("you") or directly addressing the\nreader.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Less like this: You can use the following recommendation as an example."),(0,i.kt)("p",null,"More like this: As an example, the following recommendations should be\nreferenced."),(0,i.kt)("p",null,"To view a live example, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.0.17/reference/configuration"},"Decorators"),"\nreference document."),(0,i.kt)("h3",{id:"avoid-using-contractions"},"Avoid using contractions"),(0,i.kt)("p",null,'Contractions are the shortened version of written and spoken forms of a word,\ni.e. using "don\'t" instead of "do not". Avoid contractions to provide a more\nformal tone.'),(0,i.kt)("h3",{id:"avoid-using-condescending-terms"},"Avoid using condescending terms"),(0,i.kt)("p",null,"Condescending terms are words that include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Just"),(0,i.kt)("li",{parentName:"ul"},"Easy"),(0,i.kt)("li",{parentName:"ul"},"Simply"),(0,i.kt)("li",{parentName:"ul"},"Basically"),(0,i.kt)("li",{parentName:"ul"},"Obviously")),(0,i.kt)("p",null,"The reader may not find it easy to use Platformatic; avoid\nwords that make it sound simple, easy, offensive, or insensitive. Not everyone\nwho reads the documentation has the same level of understanding."),(0,i.kt)("h3",{id:"starting-with-a-verb"},"Starting with a verb"),(0,i.kt)("p",null,"Mostly start your description with a verb, which makes it simple and precise for\nthe reader to follow. Prefer using present tense because it is easier to read\nand understand than the past or future tense."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null," Less like this: There is a need for Node.js to be installed before you can be\nable to use Platformatic."),(0,i.kt)("p",null," More like this: Install Node.js to make use of Platformatic."),(0,i.kt)("h3",{id:"grammatical-moods"},"Grammatical moods"),(0,i.kt)("p",null,"Grammatical moods are a great way to express your writing. Avoid sounding too\nbossy while making a direct statement. Know when to switch between indicative,\nimperative, and subjunctive moods."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Indicative")," - Use when making a factual statement or question."),(0,i.kt)("p",null,'Example: Since there is no testing framework available, "Platformatic recommends ways\nto write tests".'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Imperative")," - Use when giving instructions, actions, commands, or when you\nwrite your headings."),(0,i.kt)("p",null,"Example: Install dependencies before starting development."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Subjunctive")," -  Use when making suggestions, hypotheses, or non-factual\nstatements."),(0,i.kt)("p",null,"Example: Reading the documentation on our website is recommended to get\ncomprehensive knowledge of the framework."),(0,i.kt)("h3",{id:"use-active-voice-instead-of-passive"},"Use ",(0,i.kt)("strong",{parentName:"h3"},"active")," voice instead of ",(0,i.kt)("strong",{parentName:"h3"},"passive")),(0,i.kt)("p",null,"Using active voice is a more compact and direct way of conveying your\ndocumentation."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Passive: The node dependencies and packages are installed by npm."),(0,i.kt)("p",null,"Active:  npm installs packages and node dependencies."),(0,i.kt)("h2",{id:"writing-style"},"Writing Style"),(0,i.kt)("h3",{id:"documentation-titles"},"Documentation titles"),(0,i.kt)("p",null,"When creating a new guide, API, or reference in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/docs/")," directory, use\nshort titles that best describe the topic of your documentation. Name your files\nin kebab-cases and avoid Raw or camelCase. To learn more about kebab-case you\ncan visit this medium article on ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/better-programming/string-case-styles-camel-pascal-snake-and-kebab-case-981407998841"},"Case\nStyles"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"hook-and-plugins.md"),",")),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"adding-test-plugins.md"),","),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"removing-requests.md"),"."),(0,i.kt)("h3",{id:"hyperlinks"},"Hyperlinks"),(0,i.kt)("p",null,"Hyperlinks should have a clear title of what it references. Here is how your\nhyperlink should look:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-MD"},'\x3c!-- More like this --\x3e\n\n// Add clear & brief description\n[Fastify Plugins] (https://www.fastify.io/docs/latest/Plugins/)\n\n\x3c!--Less like this --\x3e\n\n// incomplete description\n[Fastify] (https://www.fastify.io/docs/latest/Plugins/)\n\n// Adding title in link brackets\n[](https://www.fastify.io/docs/latest/Plugins/ "fastify plugin")\n\n// Empty title\n[](https://www.fastify.io/docs/latest/Plugins/)\n\n// Adding links localhost URLs instead of using code strings (``)\n[http://localhost:3000/](http://localhost:3000/)\n\n')),(0,i.kt)("p",null,"Include in your documentation as many essential references as possible, but\navoid having numerous links when writing for beginners to avoid distractions."))}c.isMDXComponent=!0}}]);