"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5948],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>v});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),g=i,v=u["".concat(l,".").concat(g)]||u[g]||d[g]||r;return a?n.createElement(v,o(o({ref:t},p),{},{components:a})):n.createElement(v,o({ref:t},p))}));function v(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},3574:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const r={slug:"/navigate",sidebar_label:"Navigate",title:"Navigate",id:"navigate",keywords:["navigation","navigate","react-navigation"]},o=void 0,s={unversionedId:"Guides/navigate",id:"Guides/navigate",title:"Navigate",description:"All navigation within the app is accomplished using React Navigation.",source:"@site/docs/04-Guides/01-Navigate.md",sourceDirName:"04-Guides",slug:"/navigate",permalink:"/react-native-boilerplate/docs/navigate",draft:!1,editUrl:"https://github.com/thecodingmachine/react-native-boilerplate/edit/main/website-documentation/docs/docs/04-Guides/01-Navigate.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/navigate",sidebar_label:"Navigate",title:"Navigate",id:"navigate",keywords:["navigation","navigate","react-navigation"]},sidebar:"tutorialSidebar",previous:{title:"Project Structure",permalink:"/react-native-boilerplate/docs/project-structure"},next:{title:"Data Fetching",permalink:"/react-native-boilerplate/docs/data-fetching"}},l={},c=[{value:"Navigation structure",id:"navigation-structure",level:2},{value:"Root file (<code>Application.{js, tsx}</code>)",id:"root-file-applicationjs-tsx",level:3},{value:"Using typescript",id:"using-typescript",level:2},{value:"Advanced usage",id:"advanced-usage",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"All navigation within the app is accomplished using ",(0,i.kt)("a",{parentName:"p",href:"https://reactnavigation.org/"},"React Navigation"),".\nWe adhere to the default navigation options without any overrides, custom navigators, or special configurations.\nThis approach allows us to stay aligned with the latest releases of React Navigation, ensuring that we can swiftly adopt\nany new features and improvements."),(0,i.kt)("h2",{id:"navigation-structure"},"Navigation structure"),(0,i.kt)("p",null,"All navigation-related configurations and navigators are neatly organized within the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/navigators")," folder. Here's a brief overview:"),(0,i.kt)("h3",{id:"root-file-applicationjs-tsx"},"Root file (",(0,i.kt)("inlineCode",{parentName:"h3"},"Application.{js, tsx}"),")"),(0,i.kt)("p",null,"This serves as the root navigator, which is responsible for handling the initial navigation of the application.\nIt's a simple stack navigator that includes the ",(0,i.kt)("a",{parentName:"p",href:"/docs/data-fetching#fetching-data-at-startup"},(0,i.kt)("inlineCode",{parentName:"a"},"Startup"))," screen and an Example screen."),(0,i.kt)("p",null,"The workflow is designed so that when the application launches, the user is initially presented with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Startup")," screen.\nThis screen takes on the responsibility of loading essential application data, such as user profiles and settings.\nOnce this data is loaded, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Startup")," screen facilitates navigation to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Example")," screen."),(0,i.kt)("p",null,"As your application evolves, you have the flexibility to extend this file by adding more screens and navigators."),(0,i.kt)("admonition",{title:"Not a fan of the structure ?",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Please note that this navigation structure is intentionally kept simple, providing you with a foundational structure that you can build upon.\nYou can either add your own navigators or, if you prefer, replace the existing structure with your own custom navigation.")),(0,i.kt)("h2",{id:"using-typescript"},"Using typescript"),(0,i.kt)("p",null,"It's crucial not to overlook the creation of types for your navigation parameters. This practice helps prevent errors and enhances autocompletion.\nYou can define these types in the ",(0,i.kt)("inlineCode",{parentName:"p"},"@types/navigation.ts")," file."),(0,i.kt)("p",null,"For more in-depth information on this topic, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/typescript/"},"React Navigation documentation"),"."),(0,i.kt)("h2",{id:"advanced-usage"},"Advanced usage"),(0,i.kt)("p",null,"To gain a deeper understanding of the various navigators and their usage in React Navigation,\nWe recommend following the ",(0,i.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/getting-started"},'React Navigation documentation\'s "Getting Started" section'),".\nThis resource provides comprehensive information and examples that will help you become proficient in using different\nnavigation options in your React Native application."))}d.isMDXComponent=!0}}]);