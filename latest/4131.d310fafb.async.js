(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[4131],{27918:function(a,d,n){"use strict";n.d(d,{Z:function(){return c}});var p=n(67294);function l(e,s){if(e===s)return!0;for(var i=0;i<e.length;i++)if(!Object.is(e[i],s[i]))return!1;return!0}function c(e,s){var i=(0,p.useRef)({deps:s,obj:void 0,initialized:!1}).current;return(i.initialized===!1||!l(i.deps,s))&&(i.deps=s,i.obj=e(),i.initialized=!0),i.obj}},78234:function(a,d,n){"use strict";var p=n(67294),l=n(92770),c=n(31663),e=function(s){c.Z&&((0,l.mf)(s)||console.error('useMount: parameter `fn` expected to be a function, but got "'.concat(typeof s,'".'))),(0,p.useEffect)(function(){s==null||s()},[])};d.Z=e},90105:function(a,d,n){"use strict";var p=n(70655),l=n(67294),c=function(){var e=(0,p.CR)((0,l.useState)({}),2),s=e[1];return(0,l.useCallback)(function(){return s({})},[])};d.Z=c},57953:function(a,d,n){"use strict";n.d(d,{Z:function(){return T}});var p=n(94184),l=n.n(p),c=n(10366),e=n(67294),s=n(27856),i=n(96159),g=n(53124),v=n(70446),O=n(14747),D=n(67968),I=n(45503);const h=new v.Keyframes("antSpinMove",{to:{opacity:1}}),S=new v.Keyframes("antRotate",{to:{transform:"rotate(405deg)"}}),M=t=>({[`${t.componentCls}`]:Object.assign(Object.assign({},(0,O.Wf)(t)),{position:"absolute",display:"none",color:t.colorPrimary,fontSize:0,textAlign:"center",verticalAlign:"middle",opacity:0,transition:`transform ${t.motionDurationSlow} ${t.motionEaseInOutCirc}`,"&-spinning":{position:"static",display:"inline-block",opacity:1},"&-nested-loading":{position:"relative",[`> div > ${t.componentCls}`]:{position:"absolute",top:0,insetInlineStart:0,zIndex:4,display:"block",width:"100%",height:"100%",maxHeight:t.contentHeight,[`${t.componentCls}-dot`]:{position:"absolute",top:"50%",insetInlineStart:"50%",margin:-t.dotSize/2},[`${t.componentCls}-text`]:{position:"absolute",top:"50%",width:"100%",paddingTop:(t.dotSize-t.fontSize)/2+2,textShadow:`0 1px 2px ${t.colorBgContainer}`,fontSize:t.fontSize},[`&${t.componentCls}-show-text ${t.componentCls}-dot`]:{marginTop:-(t.dotSize/2)-10},"&-sm":{[`${t.componentCls}-dot`]:{margin:-t.dotSizeSM/2},[`${t.componentCls}-text`]:{paddingTop:(t.dotSizeSM-t.fontSize)/2+2},[`&${t.componentCls}-show-text ${t.componentCls}-dot`]:{marginTop:-(t.dotSizeSM/2)-10}},"&-lg":{[`${t.componentCls}-dot`]:{margin:-(t.dotSizeLG/2)},[`${t.componentCls}-text`]:{paddingTop:(t.dotSizeLG-t.fontSize)/2+2},[`&${t.componentCls}-show-text ${t.componentCls}-dot`]:{marginTop:-(t.dotSizeLG/2)-10}}},[`${t.componentCls}-container`]:{position:"relative",transition:`opacity ${t.motionDurationSlow}`,"&::after":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:10,width:"100%",height:"100%",background:t.colorBgContainer,opacity:0,transition:`all ${t.motionDurationSlow}`,content:'""',pointerEvents:"none"}},[`${t.componentCls}-blur`]:{clear:"both",opacity:.5,userSelect:"none",pointerEvents:"none",["&::after"]:{opacity:.4,pointerEvents:"auto"}}},["&-tip"]:{color:t.spinDotDefault},[`${t.componentCls}-dot`]:{position:"relative",display:"inline-block",fontSize:t.dotSize,width:"1em",height:"1em","&-item":{position:"absolute",display:"block",width:(t.dotSize-t.marginXXS/2)/2,height:(t.dotSize-t.marginXXS/2)/2,backgroundColor:t.colorPrimary,borderRadius:"100%",transform:"scale(0.75)",transformOrigin:"50% 50%",opacity:.3,animationName:h,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDirection:"alternate","&:nth-child(1)":{top:0,insetInlineStart:0},"&:nth-child(2)":{top:0,insetInlineEnd:0,animationDelay:"0.4s"},"&:nth-child(3)":{insetInlineEnd:0,bottom:0,animationDelay:"0.8s"},"&:nth-child(4)":{bottom:0,insetInlineStart:0,animationDelay:"1.2s"}},"&-spin":{transform:"rotate(45deg)",animationName:S,animationDuration:"1.2s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&-sm ${t.componentCls}-dot`]:{fontSize:t.dotSizeSM,i:{width:(t.dotSizeSM-t.marginXXS/2)/2,height:(t.dotSizeSM-t.marginXXS/2)/2}},[`&-lg ${t.componentCls}-dot`]:{fontSize:t.dotSizeLG,i:{width:(t.dotSizeLG-t.marginXXS)/2,height:(t.dotSizeLG-t.marginXXS)/2}},[`&${t.componentCls}-show-text ${t.componentCls}-text`]:{display:"block"}})});var E=(0,D.Z)("Spin",t=>{const o=(0,I.TS)(t,{spinDotDefault:t.colorTextDescription});return[M(o)]},t=>({contentHeight:400,dotSize:t.controlHeightLG/2,dotSizeSM:t.controlHeightLG*.35,dotSizeLG:t.controlHeight})),N=function(t,o){var u={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&o.indexOf(r)<0&&(u[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,r=Object.getOwnPropertySymbols(t);m<r.length;m++)o.indexOf(r[m])<0&&Object.prototype.propertyIsEnumerable.call(t,r[m])&&(u[r[m]]=t[r[m]]);return u};const R=null;let y=null;function b(t,o){const{indicator:u}=o,r=`${t}-dot`;return u===null?null:(0,i.l$)(u)?(0,i.Tm)(u,{className:l()(u.props.className,r)}):(0,i.l$)(y)?(0,i.Tm)(y,{className:l()(y.props.className,r)}):e.createElement("span",{className:l()(r,`${t}-dot-spin`)},e.createElement("i",{className:`${t}-dot-item`,key:1}),e.createElement("i",{className:`${t}-dot-item`,key:2}),e.createElement("i",{className:`${t}-dot-item`,key:3}),e.createElement("i",{className:`${t}-dot-item`,key:4}))}function C(t,o){return!!t&&!!o&&!isNaN(Number(o))}const f=t=>{const{spinPrefixCls:o,spinning:u=!0,delay:r=0,className:m,rootClassName:j,size:P="default",tip:L,wrapperClassName:K,style:Z,children:A,hashId:B}=t,U=N(t,["spinPrefixCls","spinning","delay","className","rootClassName","size","tip","wrapperClassName","style","children","hashId"]),[w,G]=e.useState(()=>u&&!C(u,r));e.useEffect(()=>{if(u){const z=(0,s.D)(r,()=>{G(!0)});return z(),()=>{var X;(X=z==null?void 0:z.cancel)===null||X===void 0||X.call(z)}}G(!1)},[r,u]);const H=e.useMemo(()=>typeof A!="undefined",[A]),{direction:F,spin:$}=e.useContext(g.E_),J=l()(o,$==null?void 0:$.className,{[`${o}-sm`]:P==="small",[`${o}-lg`]:P==="large",[`${o}-spinning`]:w,[`${o}-show-text`]:!!L,[`${o}-rtl`]:F==="rtl"},m,j,B),Q=l()(`${o}-container`,{[`${o}-blur`]:w}),W=(0,c.Z)(U,["indicator","prefixCls"]),V=Object.assign(Object.assign({},$==null?void 0:$.style),Z),_=e.createElement("div",Object.assign({},W,{style:V,className:J,"aria-live":"polite","aria-busy":w}),b(o,t),L&&H?e.createElement("div",{className:`${o}-text`},L):null);return H?e.createElement("div",Object.assign({},W,{className:l()(`${o}-nested-loading`,K,B)}),w&&e.createElement("div",{key:"loading"},_),e.createElement("div",{className:Q,key:"container"},A)):_},x=t=>{const{prefixCls:o}=t,{getPrefixCls:u}=e.useContext(g.E_),r=u("spin",o),[m,j]=E(r),P=Object.assign(Object.assign({},t),{spinPrefixCls:r,hashId:j});return m(e.createElement(f,Object.assign({},P)))};x.setDefaultIndicator=t=>{y=t};var T=x},63405:function(a,d,n){var p=n(73897);function l(c){if(Array.isArray(c))return p(c)}a.exports=l,a.exports.__esModule=!0,a.exports.default=a.exports},79498:function(a){function d(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}a.exports=d,a.exports.__esModule=!0,a.exports.default=a.exports},42281:function(a){function d(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}a.exports=d,a.exports.__esModule=!0,a.exports.default=a.exports},861:function(a,d,n){var p=n(63405),l=n(79498),c=n(86116),e=n(42281);function s(i){return p(i)||l(i)||c(i)||e()}a.exports=s,a.exports.__esModule=!0,a.exports.default=a.exports},27856:function(a,d,n){"use strict";n.d(d,{D:function(){return l},P:function(){return p}});function p(c,e,s){var i=s||{},g=i.noTrailing,v=g===void 0?!1:g,O=i.noLeading,D=O===void 0?!1:O,I=i.debounceMode,h=I===void 0?void 0:I,S,M=!1,E=0;function N(){S&&clearTimeout(S)}function R(b){var C=b||{},f=C.upcomingOnly,x=f===void 0?!1:f;N(),M=!x}function y(){for(var b=arguments.length,C=new Array(b),f=0;f<b;f++)C[f]=arguments[f];var x=this,T=Date.now()-E;if(M)return;function t(){E=Date.now(),e.apply(x,C)}function o(){S=void 0}!D&&h&&!S&&t(),N(),h===void 0&&T>c?D?(E=Date.now(),v||(S=setTimeout(h?o:t,c))):t():v!==!0&&(S=setTimeout(h?o:t,h===void 0?c-T:c))}return y.cancel=R,y}function l(c,e,s){var i=s||{},g=i.atBegin,v=g===void 0?!1:g;return p(c,e,{debounceMode:v!==!1})}}}]);