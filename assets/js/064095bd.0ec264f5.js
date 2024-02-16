"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3718],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,f=d["".concat(s,".").concat(p)]||d[p]||y[p]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={col:{flexDirection:"column"},colReverse:{flexDirection:"column-reverse"},wrap:{flexWrap:"wrap"},row:{flexDirection:"row"},rowReverse:{flexDirection:"row-reverse"},itemsCenter:{alignItems:"center"},itemsStart:{alignItems:"flex-start"},itemsStretch:{alignItems:"stretch"},itemsEnd:{alignItems:"flex-end"},justifyCenter:{justifyContent:"center"},justifyAround:{justifyContent:"space-around"},justifyBetween:{justifyContent:"space-between"},justifyEnd:{justifyContent:"flex-end"},justifyStart:{justifyContent:"flex-start"},flex_1:{flex:1},fullWidth:{width:"100%"},fullHeight:{height:"100%"},relative:{position:"relative"},absolute:{position:"absolute"},top0:{top:0},bottom0:{bottom:0},left0:{left:0},right0:{right:0},z1:{zIndex:1},z10:{zIndex:10}},l={slug:"/theming/generated-styles/layout",sidebar_label:"Layout",title:"Layout",id:"theming-generated-styles_layout",keywords:["layout","flex","row","col","column","center","align","justify"]},i=void 0,s={unversionedId:"Guides/Theming/Generated styles/theming-generated-styles_layout",id:"Guides/Theming/Generated styles/theming-generated-styles_layout",title:"Layout",description:"How to use ?",source:"@site/docs/04-Guides/04-Theming/03-Generated styles/05-Layout.mdx",sourceDirName:"04-Guides/04-Theming/03-Generated styles",slug:"/theming/generated-styles/layout",permalink:"/react-native-boilerplate/docs/theming/generated-styles/layout",draft:!1,editUrl:"https://github.com/thecodingmachine/react-native-boilerplate/edit/main/website-documentation/docs/docs/04-Guides/04-Theming/03-Generated styles/05-Layout.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"/theming/generated-styles/layout",sidebar_label:"Layout",title:"Layout",id:"theming-generated-styles_layout",keywords:["layout","flex","row","col","column","center","align","justify"]},sidebar:"tutorialSidebar",previous:{title:"Borders",permalink:"/react-native-boilerplate/docs/theming/generated-styles/borders"},next:{title:"API Reference",permalink:"/react-native-boilerplate/docs/theming/api-reference"}},u={},c=[{value:"How to use ?",id:"how-to-use-",level:2},{value:"Default generated layout",id:"default-generated-layout",level:2}],d={toc:c},y="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-to-use-"},"How to use ?"),(0,o.kt)("p",null,"Static styles provided by the ",(0,o.kt)("inlineCode",{parentName:"p"},"static/layout.ts")," file assist in applying layout styles to your components.\nYou can access these styles using the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { layout } = useTheme()\n")),(0,o.kt)("h2",{id:"default-generated-layout"},"Default generated layout"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Key"),(0,o.kt)("th",null,"Value"))),(0,o.kt)("tbody",null,Object.entries(a).map((e=>{let[t,n]=e;return(0,o.kt)("tr",{key:t},(0,o.kt)("td",null,t),(0,o.kt)("td",null,JSON.stringify(n)))})))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"These styles are generated using the ",(0,o.kt)("inlineCode",{parentName:"p"},"static/layout.ts")," file. You can modify the file to change the default styles.")))}p.isMDXComponent=!0}}]);