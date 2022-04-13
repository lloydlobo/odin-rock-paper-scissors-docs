"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[268],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return m}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(n),m=o,d=g["".concat(l,".").concat(m)]||g[m]||u[m]||i;return n?t.createElement(d,a(a({ref:r},p),{},{components:n})):t.createElement(d,a({ref:r},p))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6253:function(e,r,n){n.r(r),n.d(r,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var t=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"programming-logic",title:"Logic behind the game",description:"Learn the rules of the game",sidebar_label:"Programming Logic"},l=void 0,c={unversionedId:"programming-logic",id:"programming-logic",title:"Logic behind the game",description:"Learn the rules of the game",source:"@site/docs/programming-logic.md",sourceDirName:".",slug:"/programming-logic",permalink:"/odin-rock-paper-scissors-docs/docs/programming-logic",editUrl:"https://github.com/lloydlobo/odin-rock-paper-scissors-docs/tree/main/docs/docs/docs/programming-logic.md",tags:[],version:"current",frontMatter:{id:"programming-logic",title:"Logic behind the game",description:"Learn the rules of the game",sidebar_label:"Programming Logic"},sidebar:"docs",previous:{title:"Getting started",permalink:"/odin-rock-paper-scissors-docs/docs/category/getting-started"},next:{title:"Tutorial",permalink:"/odin-rock-paper-scissors-docs/docs/tutorial"}},p={},u=[{value:"Intial Setup",id:"intial-setup",level:2},{value:"Randomization",id:"randomization",level:3},{value:"Prompting the user",id:"prompting-the-user",level:3},{value:"Fetching selection of user and computer",id:"fetching-selection-of-user-and-computer",level:3},{value:"Setting rules of a single round",id:"setting-rules-of-a-single-round",level:3},{value:"Playing a 5 round game",id:"playing-a-5-round-game",level:2},{value:"Using <code>for</code> loops iterates 5 times",id:"using-for-loops-iterates-5-times",level:3},{value:"Setting win-lose criteria per round",id:"setting-win-lose-criteria-per-round",level:3},{value:"Declaring final winner",id:"declaring-final-winner",level:3},{value:"Restarting the game",id:"restarting-the-game",level:3}],g={toc:u};function m(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},g,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"intial-setup"},"Intial Setup"),(0,i.kt)("h3",{id:"randomization"},"Randomization"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/lloydlobo/odin-rock-paper-scissors/blob/main/src/js/main.js#L1-L7\n")),(0,i.kt)("h3",{id:"prompting-the-user"},"Prompting the user"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/lloydlobo/odin-rock-paper-scissors/blob/main/src/js/main.js#L9-L19\n")),(0,i.kt)("h3",{id:"fetching-selection-of-user-and-computer"},"Fetching selection of user and computer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/lloydlobo/odin-rock-paper-scissors/blob/main/src/js/main.js#L21-L29\n")),(0,i.kt)("h3",{id:"setting-rules-of-a-single-round"},"Setting rules of a single round"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/lloydlobo/odin-rock-paper-scissors/blob/main/src/js/main.js#L31-L49\n")),(0,i.kt)("h2",{id:"playing-a-5-round-game"},"Playing a 5 round game"),(0,i.kt)("h3",{id:"using-for-loops-iterates-5-times"},"Using ",(0,i.kt)("inlineCode",{parentName:"h3"},"for")," loops iterates 5 times"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/lloydlobo/odin-rock-paper-scissors/blob/main/src/js/main.js#L62-L72\n")),(0,i.kt)("h3",{id:"setting-win-lose-criteria-per-round"},"Setting win-lose criteria per round"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/lloydlobo/odin-rock-paper-scissors/blob/main/src/js/main.js#L73-L82\n")),(0,i.kt)("h3",{id:"declaring-final-winner"},"Declaring final winner"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/lloydlobo/odin-rock-paper-scissors/blob/main/src/js/main.js#L84-L98\n")),(0,i.kt)("h3",{id:"restarting-the-game"},"Restarting the game"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/lloydlobo/odin-rock-paper-scissors/blob/main/src/js/main.js#L100-L111\n")))}m.isMDXComponent=!0}}]);