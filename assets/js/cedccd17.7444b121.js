"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8925],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,k=s["".concat(d,".").concat(u)]||s[u]||g[u]||i;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={slug:"/theming/api-reference",sidebar_label:"API Reference",title:"API Reference",id:"theming-api-reference",keywords:["theme","theming","configuration","config","api","reference","api reference"]},l=void 0,o={unversionedId:"Guides/Theming/theming-api-reference",id:"Guides/Theming/theming-api-reference",title:"API Reference",description:"Theme Configuration",source:"@site/docs/04-Guides/04-Theming/04-API.md",sourceDirName:"04-Guides/04-Theming",slug:"/theming/api-reference",permalink:"/react-native-boilerplate/docs/theming/api-reference",draft:!1,editUrl:"https://github.com/thecodingmachine/react-native-boilerplate/edit/main/website-documentation/docs/docs/04-Guides/04-Theming/04-API.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"/theming/api-reference",sidebar_label:"API Reference",title:"API Reference",id:"theming-api-reference",keywords:["theme","theming","configuration","config","api","reference","api reference"]},sidebar:"tutorialSidebar",previous:{title:"Layout",permalink:"/react-native-boilerplate/docs/theming/generated-styles/layout"},next:{title:"Environment variables",permalink:"/react-native-boilerplate/docs/environment"}},d={},p=[{value:"Theme Configuration",id:"theme-configuration",level:2},{value:"ColorConfig",id:"colorconfig",level:3},{value:"FontConfig",id:"fontconfig",level:3},{value:"GuttersConfig",id:"guttersconfig",level:3},{value:"BordersConfig",id:"bordersconfig",level:3},{value:"NavigationColorsConfig",id:"navigationcolorsconfig",level:3},{value:"VariantsConfig",id:"variantsconfig",level:3},{value:"Theme Types",id:"theme-types",level:2},{value:"Theme",id:"theme",level:3},{value:"Layout",id:"layout",level:3},{value:"Gutters",id:"gutters",level:3},{value:"Fonts",id:"fonts",level:3},{value:"Backgrounds",id:"backgrounds",level:3},{value:"Borders",id:"borders",level:3},{value:"NavigationTheme",id:"navigationtheme",level:3},{value:"Components",id:"components",level:3}],m={toc:p},s="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"theme-configuration"},"Theme Configuration"),(0,r.kt)("h3",{id:"colorconfig"},"ColorConfig"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"colors")),(0,r.kt)("td",{parentName:"tr",align:null},"Record<string, string>"),(0,r.kt)("td",{parentName:"tr",align:null},"Define global colors")))),(0,r.kt)("h3",{id:"fontconfig"},"FontConfig"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sizes")),(0,r.kt)("td",{parentName:"tr",align:null},"number[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Define font sizes to generate associated style")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"colors")),(0,r.kt)("td",{parentName:"tr",align:null},"Record<string, string>"),(0,r.kt)("td",{parentName:"tr",align:null},"Define font colors to generate associated style")))),(0,r.kt)("h3",{id:"guttersconfig"},"GuttersConfig"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sizes"),(0,r.kt)("td",{parentName:"tr",align:null},"number[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Define sizes to generate associated styles (padding and margin)")))),(0,r.kt)("h3",{id:"bordersconfig"},"BordersConfig"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"widths")),(0,r.kt)("td",{parentName:"tr",align:null},"number[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Define sizes to generate associated styles (borderWidth)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"radius")),(0,r.kt)("td",{parentName:"tr",align:null},"number[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Define radius to generate associated styles (borderRadius)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"colors")),(0,r.kt)("td",{parentName:"tr",align:null},"Record<string, string>"),(0,r.kt)("td",{parentName:"tr",align:null},"Define colors to generate associated styles (borderColor)")))),(0,r.kt)("h3",{id:"navigationcolorsconfig"},"NavigationColorsConfig"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"primary")),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"background")),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"card")),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"text")),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"border")),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"notification")),(0,r.kt)("td",{parentName:"tr",align:null},"string")))),(0,r.kt)("h3",{id:"variantsconfig"},"VariantsConfig"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fonts"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Pick<FontConfig, 'colors'>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"backgrounds"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Record<string, string>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"borders"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Pick<BordersConfig, 'colors'>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"navigationColors"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NavigationColorsConfig"))))),(0,r.kt)("h2",{id:"theme-types"},"Theme Types"),(0,r.kt)("h3",{id:"theme"},"Theme"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"colors"),(0,r.kt)("td",{parentName:"tr",align:null},"all possible colors used through the configuration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variant"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"default")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"layout"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/theming/api-reference#layout"},(0,r.kt)("inlineCode",{parentName:"a"},"Layout")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gutters"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/theming/api-reference#gutters"},(0,r.kt)("inlineCode",{parentName:"a"},"Gutters")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fonts"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/theming/api-reference#fonts"},(0,r.kt)("inlineCode",{parentName:"a"},"Fonts")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"backgrounds"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/theming/api-reference#backgrounds"},(0,r.kt)("inlineCode",{parentName:"a"},"Backgrounds")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"borders"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/theming/api-reference#borders"},(0,r.kt)("inlineCode",{parentName:"a"},"Borders")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"navigationTheme"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/theming/api-reference#navigationTheme"},(0,r.kt)("inlineCode",{parentName:"a"},"NavigationTheme")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"components"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/theming/api-reference#components"},(0,r.kt)("inlineCode",{parentName:"a"},"Components")))))),(0,r.kt)("h3",{id:"layout"},"Layout"),(0,r.kt)("p",null,"Static layout styles generated from the ",(0,r.kt)("inlineCode",{parentName:"p"},"static/layout.ts")," file.\nThe type of the generated styles is ",(0,r.kt)("inlineCode",{parentName:"p"},"Record<string, ViewStyle>")," but will be inferred by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Layout")," type."),(0,r.kt)("h3",{id:"gutters"},"Gutters"),(0,r.kt)("p",null,"Generated styles provided by the ",(0,r.kt)("inlineCode",{parentName:"p"},"gutters")," section of the theme configuration assist in applying padding and margin to your components.\nThe type of the generated styles is ",(0,r.kt)("inlineCode",{parentName:"p"},"Record<string, ViewStyle>")," but will be inferred by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Gutters")," type."),(0,r.kt)("h3",{id:"fonts"},"Fonts"),(0,r.kt)("p",null,"Combination of static and Generated styles provided by the ",(0,r.kt)("inlineCode",{parentName:"p"},"fonts")," section of the theme configuration assist in applying font size and color to your components.\nThe type of the generated styles is ",(0,r.kt)("inlineCode",{parentName:"p"},"Record<string, TextStyle>")," but will be inferred by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Fonts")," type."),(0,r.kt)("h3",{id:"backgrounds"},"Backgrounds"),(0,r.kt)("p",null,"Generated styles provided by the ",(0,r.kt)("inlineCode",{parentName:"p"},"backgrounds")," section of the theme configuration assist in applying background color to your components.\nThe type of the generated styles is ",(0,r.kt)("inlineCode",{parentName:"p"},"Record<"),"bg_${string}",(0,r.kt)("inlineCode",{parentName:"p"},", {backGroundColor: string}>")," but will be inferred by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Backgrounds")," type."),(0,r.kt)("h3",{id:"borders"},"Borders"),(0,r.kt)("p",null,"Generated styles provided by the ",(0,r.kt)("inlineCode",{parentName:"p"},"borders")," section of the theme configuration assist in applying border radius, width and color to your components.\nThe type of the generated styles is ",(0,r.kt)("inlineCode",{parentName:"p"},"Record<string, ViewStyle>")," but will be inferred by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Borders")," type."),(0,r.kt)("h3",{id:"navigationtheme"},"NavigationTheme"),(0,r.kt)("p",null,"Generated styles provided by the ",(0,r.kt)("inlineCode",{parentName:"p"},"navigationColors")," section of the theme configuration assist in overriding ReactNavigation theme colors."),(0,r.kt)("h3",{id:"components"},"Components"),(0,r.kt)("p",null,"Generated styles provided by the ",(0,r.kt)("inlineCode",{parentName:"p"},"components")," file of the theme configuration assist in applying styles to specific components."))}g.isMDXComponent=!0}}]);