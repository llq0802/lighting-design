"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[5905],{89739:function(b,x,o){o.d(x,{Z:function(){return u}});var a=o(87462),_=o(67294),h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"},E=h,v=o(13401),O=function(c,r){return _.createElement(v.Z,(0,a.Z)({},c,{ref:r,icon:E}))},d=_.forwardRef(O),u=d},21640:function(b,x,o){o.d(x,{Z:function(){return u}});var a=o(87462),_=o(67294),h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"},E=h,v=o(13401),O=function(c,r){return _.createElement(v.Z,(0,a.Z)({},c,{ref:r,icon:E}))},d=_.forwardRef(O),u=d},74443:function(b,x,o){o.d(x,{ZP:function(){return O},c4:function(){return h}});var a=o(67294),_=o(29691);const h=["xxl","xl","lg","md","sm","xs"],E=u=>({xs:`(max-width: ${u.screenXSMax}px)`,sm:`(min-width: ${u.screenSM}px)`,md:`(min-width: ${u.screenMD}px)`,lg:`(min-width: ${u.screenLG}px)`,xl:`(min-width: ${u.screenXL}px)`,xxl:`(min-width: ${u.screenXXL}px)`}),v=u=>{const l=u,c=[].concat(h).reverse();return c.forEach((r,$)=>{const t=r.toUpperCase(),e=`screen${t}Min`,s=`screen${t}`;if(!(l[e]<=l[s]))throw new Error(`${e}<=${s} fails : !(${l[e]}<=${l[s]})`);if($<c.length-1){const n=`screen${t}Max`;if(!(l[s]<=l[n]))throw new Error(`${s}<=${n} fails : !(${l[s]}<=${l[n]})`);const i=`screen${c[$+1].toUpperCase()}Min`;if(!(l[n]<=l[i]))throw new Error(`${n}<=${i} fails : !(${l[n]}<=${l[i]})`)}}),u};function O(){const[,u]=(0,_.ZP)(),l=E(v(u));return a.useMemo(()=>{const c=new Map;let r=-1,$={};return{matchHandlers:{},dispatch(t){return $=t,c.forEach(e=>e($)),c.size>=1},subscribe(t){return c.size||this.register(),r+=1,c.set(r,t),t($),r},unsubscribe(t){c.delete(t),c.size||this.unregister()},unregister(){Object.keys(l).forEach(t=>{const e=l[t],s=this.matchHandlers[e];s==null||s.mql.removeListener(s==null?void 0:s.listener)}),c.clear()},register(){Object.keys(l).forEach(t=>{const e=l[t],s=p=>{let{matches:i}=p;this.dispatch(Object.assign(Object.assign({},$),{[t]:i}))},n=window.matchMedia(e);n.addListener(s),this.matchHandlers[e]={mql:n,listener:s},s(n)})},responsiveMap:l}},[u])}const d=(u,l)=>{if(l&&typeof l=="object")for(let c=0;c<h.length;c++){const r=h[c];if(u[r]&&l[r]!==void 0)return l[r]}}},99134:function(b,x,o){var a=o(67294);const _=(0,a.createContext)({});x.Z=_},21584:function(b,x,o){var a=o(67294),_=o(93967),h=o.n(_),E=o(53124),v=o(99134),O=o(6999),d=function(r,$){var t={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&$.indexOf(e)<0&&(t[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,e=Object.getOwnPropertySymbols(r);s<e.length;s++)$.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(r,e[s])&&(t[e[s]]=r[e[s]]);return t};function u(r){return typeof r=="number"?`${r} ${r} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(r)?`0 0 ${r}`:r}const l=["xs","sm","md","lg","xl","xxl"],c=a.forwardRef((r,$)=>{const{getPrefixCls:t,direction:e}=a.useContext(E.E_),{gutter:s,wrap:n}=a.useContext(v.Z),{prefixCls:p,span:i,order:f,offset:P,push:D,pull:I,className:K,children:G,flex:S,style:Z}=r,L=d(r,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),g=t("col",p),[F,A,B]=(0,O.cG)(g),U={};let j={};l.forEach(y=>{let m={};const R=r[y];typeof R=="number"?m.span=R:typeof R=="object"&&(m=R||{}),delete L[y],j=Object.assign(Object.assign({},j),{[`${g}-${y}-${m.span}`]:m.span!==void 0,[`${g}-${y}-order-${m.order}`]:m.order||m.order===0,[`${g}-${y}-offset-${m.offset}`]:m.offset||m.offset===0,[`${g}-${y}-push-${m.push}`]:m.push||m.push===0,[`${g}-${y}-pull-${m.pull}`]:m.pull||m.pull===0,[`${g}-rtl`]:e==="rtl"}),m.flex&&(j[`${g}-${y}-flex`]=!0,U[`--${g}-${y}-flex`]=u(m.flex))});const V=h()(g,{[`${g}-${i}`]:i!==void 0,[`${g}-order-${f}`]:f,[`${g}-offset-${P}`]:P,[`${g}-push-${D}`]:D,[`${g}-pull-${I}`]:I},K,j,A,B),C={};if(s&&s[0]>0){const y=s[0]/2;C.paddingLeft=y,C.paddingRight=y}return S&&(C.flex=u(S),n===!1&&!C.minWidth&&(C.minWidth=0)),F(a.createElement("div",Object.assign({},L,{style:Object.assign(Object.assign(Object.assign({},C),Z),U),className:V,ref:$}),G))});x.Z=c},92820:function(b,x,o){var a=o(67294),_=o(93967),h=o.n(_),E=o(74443),v=o(53124),O=o(99134),d=o(6999),u=function(t,e){var s={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(s[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,n=Object.getOwnPropertySymbols(t);p<n.length;p++)e.indexOf(n[p])<0&&Object.prototype.propertyIsEnumerable.call(t,n[p])&&(s[n[p]]=t[n[p]]);return s};const l=null,c=null;function r(t,e){const[s,n]=a.useState(typeof t=="string"?t:""),p=()=>{if(typeof t=="string"&&n(t),typeof t=="object")for(let i=0;i<E.c4.length;i++){const f=E.c4[i];if(!e[f])continue;const P=t[f];if(P!==void 0){n(P);return}}};return a.useEffect(()=>{p()},[JSON.stringify(t),e]),s}const $=a.forwardRef((t,e)=>{const{prefixCls:s,justify:n,align:p,className:i,style:f,children:P,gutter:D=0,wrap:I}=t,K=u(t,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:G,direction:S}=a.useContext(v.E_),[Z,L]=a.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[g,F]=a.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),A=r(p,g),B=r(n,g),U=a.useRef(D),j=(0,E.ZP)();a.useEffect(()=>{const w=j.subscribe(H=>{F(H);const M=U.current||0;(!Array.isArray(M)&&typeof M=="object"||Array.isArray(M)&&(typeof M[0]=="object"||typeof M[1]=="object"))&&L(H)});return()=>j.unsubscribe(w)},[]);const V=()=>{const w=[void 0,void 0];return(Array.isArray(D)?D:[D,void 0]).forEach((M,Y)=>{if(typeof M=="object")for(let N=0;N<E.c4.length;N++){const J=E.c4[N];if(Z[J]&&M[J]!==void 0){w[Y]=M[J];break}}else w[Y]=M}),w},C=G("row",s),[y,m,R]=(0,d.VM)(C),W=V(),z=h()(C,{[`${C}-no-wrap`]:I===!1,[`${C}-${B}`]:B,[`${C}-${A}`]:A,[`${C}-rtl`]:S==="rtl"},i,m,R),T={},k=W[0]!=null&&W[0]>0?W[0]/-2:void 0;k&&(T.marginLeft=k,T.marginRight=k);const[Q,X]=W;T.rowGap=X;const q=a.useMemo(()=>({gutter:[Q,X],wrap:I}),[Q,X,I]);return y(a.createElement(O.Z.Provider,{value:q},a.createElement("div",Object.assign({},K,{className:z,style:Object.assign(Object.assign({},T),f),ref:e}),P)))});x.Z=$},6999:function(b,x,o){o.d(x,{VM:function(){return r},cG:function(){return $}});var a=o(861),_=o(27036),h=o(45503);const E=t=>{const{componentCls:e}=t;return{[e]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},v=t=>{const{componentCls:e}=t;return{[e]:{position:"relative",maxWidth:"100%",minHeight:1}}},O=(t,e)=>{const{prefixCls:s,componentCls:n,gridColumns:p}=t,i={};for(let f=p;f>=0;f--)f===0?(i[`${n}${e}-${f}`]={display:"none"},i[`${n}-push-${f}`]={insetInlineStart:"auto"},i[`${n}-pull-${f}`]={insetInlineEnd:"auto"},i[`${n}${e}-push-${f}`]={insetInlineStart:"auto"},i[`${n}${e}-pull-${f}`]={insetInlineEnd:"auto"},i[`${n}${e}-offset-${f}`]={marginInlineStart:0},i[`${n}${e}-order-${f}`]={order:0}):(i[`${n}${e}-${f}`]=[{["--ant-display"]:"block",display:"block"},{display:"var(--ant-display)",flex:`0 0 ${f/p*100}%`,maxWidth:`${f/p*100}%`}],i[`${n}${e}-push-${f}`]={insetInlineStart:`${f/p*100}%`},i[`${n}${e}-pull-${f}`]={insetInlineEnd:`${f/p*100}%`},i[`${n}${e}-offset-${f}`]={marginInlineStart:`${f/p*100}%`},i[`${n}${e}-order-${f}`]={order:f});return i[`${n}${e}-flex`]={flex:`var(--${s}${e}-flex)`},i},d=(t,e)=>O(t,e),u=(t,e,s)=>({[`@media (min-width: ${(0,a.bf)(e)})`]:Object.assign({},d(t,s))}),l=()=>({}),c=()=>({}),r=(0,_.I$)("Grid",E,l),$=(0,_.I$)("Grid",t=>{const e=(0,h.TS)(t,{gridColumns:24}),s={"-sm":e.screenSMMin,"-md":e.screenMDMin,"-lg":e.screenLGMin,"-xl":e.screenXLMin,"-xxl":e.screenXXLMin};return[v(e),d(e,""),d(e,"-xs"),Object.keys(s).map(n=>u(e,s[n],n)).reduce((n,p)=>Object.assign(Object.assign({},n),p),{})]},c)},10110:function(b,x,o){var a=o(67294),_=o(76745),h=o(24457);const E=(v,O)=>{const d=a.useContext(_.Z),u=a.useMemo(()=>{var c;const r=O||h.Z[v],$=(c=d==null?void 0:d[v])!==null&&c!==void 0?c:{};return Object.assign(Object.assign({},typeof r=="function"?r():r),$||{})},[v,O,d]),l=a.useMemo(()=>{const c=d==null?void 0:d.locale;return d!=null&&d.exist&&!c?h.Z.locale:c},[d]);return[u,l]};x.Z=E}}]);
