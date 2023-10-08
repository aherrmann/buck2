"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7538],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>u,MDXProvider:()=>m,mdx:()=>y,useMDXComponents:()=>d,withMDXComponents:()=>c});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},i.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),c=function(e){return function(n){var t=d(n.components);return o.createElement(e,i({},n,{components:t}))}},d=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=d(e.components);return o.createElement(u.Provider,{value:n},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(t),m=r,p=c["".concat(a,".").concat(m)]||c[m]||h[m]||i;return t?o.createElement(p,l(l({ref:n},u),{},{components:t})):o.createElement(p,l({ref:n},u))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},13217:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=t(87462),r=(t(67294),t(3905));const i={id:"common_issues",title:"Common Issues"},a=void 0,l={unversionedId:"users/faq/common_issues",id:"users/faq/common_issues",title:"Common Issues",description:"Why is stdin being swallowed?",source:"@site/../docs/users/faq/common_issues.md",sourceDirName:"users/faq",slug:"/users/faq/common_issues",permalink:"/docs/users/faq/common_issues",draft:!1,tags:[],version:"current",frontMatter:{id:"common_issues",title:"Common Issues"},sidebar:"manualSidebar",previous:{title:"Commands",permalink:"/docs/users/commands"},next:{title:"Buck2 Interactive Console",permalink:"/docs/users/build_observability/interactive_console"}},s={},u=[{value:"Why is stdin being swallowed?",id:"why-is-stdin-being-swallowed",level:2},{value:"Where is my output file?",id:"where-is-my-output-file",level:2},{value:"Why is Buck2 hanging?",id:"why-is-buck2-hanging",level:2},{value:"How do I get the commands Buck2 executed so I can reproduce them in isolation?",id:"how-do-i-get-the-commands-buck2-executed-so-i-can-reproduce-them-in-isolation",level:2},{value:"Are multiple concurrent commands supported?",id:"are-multiple-concurrent-commands-supported",level:2},{value:"Why did my build OOM?",id:"why-did-my-build-oom",level:2}],c=(d="FbInternalOnly",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)});var d;const m={toc:u};function p(e){let{components:n,...t}=e;return(0,r.mdx)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h2",{id:"why-is-stdin-being-swallowed"},"Why is stdin being swallowed?"),(0,r.mdx)("p",null,"Buck2 offers an interactive console by default."),(0,r.mdx)("p",null,"To disable either use an env var: ",(0,r.mdx)("inlineCode",{parentName:"p"},"BUCK_NO_INTERACTIVE_CONSOLE")," or a flag: ",(0,r.mdx)("inlineCode",{parentName:"p"},"--no-interactive-console")),(0,r.mdx)("h2",{id:"where-is-my-output-file"},"Where is my output file?"),(0,r.mdx)("p",null,"To find the location of output for a target, use ",(0,r.mdx)("inlineCode",{parentName:"p"},"buck2 build //foo:bar --show-output"),". This will print the output corresponding to each built target, in this case ",(0,r.mdx)("inlineCode",{parentName:"p"},"//foo:bar output_path"),"."),(0,r.mdx)("p",null,"To only get the output path (without the target behorehand) you want to use ",(0,r.mdx)("inlineCode",{parentName:"p"},"buck2 build //foo:bar --show-simple-output"),"."),(0,r.mdx)("p",null,"The resultant path is relative to the root of the repo (such as ",(0,r.mdx)("inlineCode",{parentName:"p"},"~/repo_root/..."),"). For the full path use ",(0,r.mdx)("inlineCode",{parentName:"p"},"--show-full-output")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"--show-full-simple-output"),"."),(0,r.mdx)("p",null,"Note: in Buck1, the path is  relative to the enclosing cell (such as ",(0,r.mdx)("inlineCode",{parentName:"p"},"~/repo_root/cell/..."),")."),(0,r.mdx)(c,{mdxType:"FbInternalOnly"},"For Meta, repo_root = fbsource, cell = fbcode/fbobjc/..."),(0,r.mdx)("h2",{id:"why-is-buck2-hanging"},"Why is Buck2 hanging?"),(0,r.mdx)("p",null,"If Buck2 seems to be doing nothing, it could be caused be a cycle in your dependencies, which may cause Buck2 to hang (Buck2 does implement a form of cycle detection, but it unfortunately has false negatives). You can confirm this by running Buck1, which will report cycles properly."),(0,r.mdx)("h2",{id:"how-do-i-get-the-commands-buck2-executed-so-i-can-reproduce-them-in-isolation"},"How do I get the commands Buck2 executed so I can reproduce them in isolation?"),(0,r.mdx)("p",null,"For information, see ",(0,r.mdx)("a",{parentName:"p",href:"/docs/developers/what-ran"},"Finding Commands that Buck2 Ran"),"."),(0,r.mdx)("h2",{id:"are-multiple-concurrent-commands-supported"},"Are multiple concurrent commands supported?"),(0,r.mdx)("p",null,"Yes, they are supported. There are 2 types of concurrent commands: 1) parallel invocations, and 2) recursive invocations."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Parallel invocations:")),(0,r.mdx)("p",null,'If the state of all the commands are the same, then they will run at the same time. "State" is referring to the same configs and source files. If the state is different amongst the commands, then buck2 will block the commands properly such that the states do not interfere with each other. Different states are caused by source file changes or config changes (ex: using a different mode).'),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Recursive invocations:")),(0,r.mdx)("p",null,"A recursive invocation is when an outer buck2 command ends up calling another buck2 command as it's running. Recursive invocations are most commonly seen with genrules and tests. For example:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"If you have a ",(0,r.mdx)("inlineCode",{parentName:"li"},"genrule")," where the command contains a ",(0,r.mdx)("inlineCode",{parentName:"li"},"buck2 cquery"),", and you build the genrule with ",(0,r.mdx)("inlineCode",{parentName:"li"},"buck2 build"),", you have a recursive invocation where the outer command is ",(0,r.mdx)("inlineCode",{parentName:"li"},"buck2 build")," and the inner command is ",(0,r.mdx)("inlineCode",{parentName:"li"},"buck2 cquery")),(0,r.mdx)("li",{parentName:"ul"},"If you have a test which contains ",(0,r.mdx)("inlineCode",{parentName:"li"},"buck2 build"),", and you run your test with ",(0,r.mdx)("inlineCode",{parentName:"li"},"buck2 test"),", you have a recursive invocation where the outer command is ",(0,r.mdx)("inlineCode",{parentName:"li"},"buck2 test")," and the inner command is ",(0,r.mdx)("inlineCode",{parentName:"li"},"buck2 build"))),(0,r.mdx)("p",null,"Recursive invocations should specify an ",(0,r.mdx)("inlineCode",{parentName:"p"},"--isolation-dir"),", or else buck2 will return an error."),(0,r.mdx)("h2",{id:"why-did-my-build-oom"},"Why did my build OOM?"),(0,r.mdx)("p",null,"If your build OOMs, you can check the last actions running by using ",(0,r.mdx)("inlineCode",{parentName:"p"},"buck2 log whatup"),". This will print the superconsole state at the moment the event log ended, which will indicate what actions were being run (and consuming memory) when your machine ran out of memory."),(0,r.mdx)("p",null,"You can also use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"--after <millis>")," option to see all open spans at a certain point in time of the build."))}p.isMDXComponent=!0}}]);