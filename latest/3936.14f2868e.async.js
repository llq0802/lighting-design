(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[3936],{27918:function(a,u,n){"use strict";n.d(u,{Z:function(){return s}});var e=n(67294);function p(c,l){if(c===l)return!0;for(var i=0;i<c.length;i++)if(!Object.is(c[i],l[i]))return!1;return!0}function s(c,l){var i=(0,e.useRef)({deps:l,obj:void 0,initialized:!1}).current;return(i.initialized===!1||!p(i.deps,l))&&(i.deps=l,i.obj=c(),i.initialized=!0),i.obj}},78234:function(a,u,n){"use strict";var e=n(67294),p=n(92770),s=n(31663),c=function(l){s.Z&&((0,p.mf)(l)||console.error('useMount: parameter `fn` expected to be a function, but got "'.concat(typeof l,'".'))),(0,e.useEffect)(function(){l==null||l()},[])};u.Z=c},57953:function(a,u,n){"use strict";n.d(u,{Z:function(){return M}});var e=n(67294),p=n(94184),s=n.n(p),c=n(98423),l=n(27856),i=n(96159),g=n(53124),v=n(77794),N=n(14747),O=n(67968),I=n(45503);const h=new v.Keyframes("antSpinMove",{to:{opacity:1}}),S=new v.Keyframes("antRotate",{to:{transform:"rotate(405deg)"}}),T=t=>({[`${t.componentCls}`]:Object.assign(Object.assign({},(0,N.Wf)(t)),{position:"absolute",display:"none",color:t.colorPrimary,fontSize:0,textAlign:"center",verticalAlign:"middle",opacity:0,transition:`transform ${t.motionDurationSlow} ${t.motionEaseInOutCirc}`,"&-spinning":{position:"static",display:"inline-block",opacity:1},"&-nested-loading":{position:"relative",[`> div > ${t.componentCls}`]:{position:"absolute",top:0,insetInlineStart:0,zIndex:4,display:"block",width:"100%",height:"100%",maxHeight:t.contentHeight,[`${t.componentCls}-dot`]:{position:"absolute",top:"50%",insetInlineStart:"50%",margin:-t.dotSize/2},[`${t.componentCls}-text`]:{position:"absolute",top:"50%",width:"100%",paddingTop:(t.dotSize-t.fontSize)/2+2,textShadow:`0 1px 2px ${t.colorBgContainer}`,fontSize:t.fontSize},[`&${t.componentCls}-show-text ${t.componentCls}-dot`]:{marginTop:-(t.dotSize/2)-10},"&-sm":{[`${t.componentCls}-dot`]:{margin:-t.dotSizeSM/2},[`${t.componentCls}-text`]:{paddingTop:(t.dotSizeSM-t.fontSize)/2+2},[`&${t.componentCls}-show-text ${t.componentCls}-dot`]:{marginTop:-(t.dotSizeSM/2)-10}},"&-lg":{[`${t.componentCls}-dot`]:{margin:-(t.dotSizeLG/2)},[`${t.componentCls}-text`]:{paddingTop:(t.dotSizeLG-t.fontSize)/2+2},[`&${t.componentCls}-show-text ${t.componentCls}-dot`]:{marginTop:-(t.dotSizeLG/2)-10}}},[`${t.componentCls}-container`]:{position:"relative",transition:`opacity ${t.motionDurationSlow}`,"&::after":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:10,width:"100%",height:"100%",background:t.colorBgContainer,opacity:0,transition:`all ${t.motionDurationSlow}`,content:'""',pointerEvents:"none"}},[`${t.componentCls}-blur`]:{clear:"both",opacity:.5,userSelect:"none",pointerEvents:"none",["&::after"]:{opacity:.4,pointerEvents:"auto"}}},["&-tip"]:{color:t.spinDotDefault},[`${t.componentCls}-dot`]:{position:"relative",display:"inline-block",fontSize:t.dotSize,width:"1em",height:"1em","&-item":{position:"absolute",display:"block",width:(t.dotSize-t.marginXXS/2)/2,height:(t.dotSize-t.marginXXS/2)/2,backgroundColor:t.colorPrimary,borderRadius:"100%",transform:"scale(0.75)",transformOrigin:"50% 50%",opacity:.3,animationName:h,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDirection:"alternate","&:nth-child(1)":{top:0,insetInlineStart:0},"&:nth-child(2)":{top:0,insetInlineEnd:0,animationDelay:"0.4s"},"&:nth-child(3)":{insetInlineEnd:0,bottom:0,animationDelay:"0.8s"},"&:nth-child(4)":{bottom:0,insetInlineStart:0,animationDelay:"1.2s"}},"&-spin":{transform:"rotate(45deg)",animationName:S,animationDuration:"1.2s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&-sm ${t.componentCls}-dot`]:{fontSize:t.dotSizeSM,i:{width:(t.dotSizeSM-t.marginXXS/2)/2,height:(t.dotSizeSM-t.marginXXS/2)/2}},[`&-lg ${t.componentCls}-dot`]:{fontSize:t.dotSizeLG,i:{width:(t.dotSizeLG-t.marginXXS)/2,height:(t.dotSizeLG-t.marginXXS)/2}},[`&${t.componentCls}-show-text ${t.componentCls}-text`]:{display:"block"}})});var z=(0,O.Z)("Spin",t=>{const o=(0,I.TS)(t,{spinDotDefault:t.colorTextDescription});return[T(o)]},t=>({contentHeight:400,dotSize:t.controlHeightLG/2,dotSizeSM:t.controlHeightLG*.35,dotSizeLG:t.controlHeight})),D=function(t,o){var d={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&o.indexOf(r)<0&&(d[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,r=Object.getOwnPropertySymbols(t);m<r.length;m++)o.indexOf(r[m])<0&&Object.prototype.propertyIsEnumerable.call(t,r[m])&&(d[r[m]]=t[r[m]]);return d};const G=null;let y=null;function b(t,o){const{indicator:d}=o,r=`${t}-dot`;return d===null?null:(0,i.l$)(d)?(0,i.Tm)(d,{className:s()(d.props.className,r)}):(0,i.l$)(y)?(0,i.Tm)(y,{className:s()(y.props.className,r)}):e.createElement("span",{className:s()(r,`${t}-dot-spin`)},e.createElement("i",{className:`${t}-dot-item`,key:1}),e.createElement("i",{className:`${t}-dot-item`,key:2}),e.createElement("i",{className:`${t}-dot-item`,key:3}),e.createElement("i",{className:`${t}-dot-item`,key:4}))}function C(t,o){return!!t&&!!o&&!isNaN(Number(o))}const f=t=>{const{spinPrefixCls:o,spinning:d=!0,delay:r=0,className:m,rootClassName:j,size:w="default",tip:L,wrapperClassName:K,style:F,children:A,hashId:H}=t,U=D(t,["spinPrefixCls","spinning","delay","className","rootClassName","size","tip","wrapperClassName","style","children","hashId"]),[P,B]=e.useState(()=>d&&!C(d,r));e.useEffect(()=>{if(d){const E=(0,l.D)(r,()=>{B(!0)});return E(),()=>{var X;(X=E==null?void 0:E.cancel)===null||X===void 0||X.call(E)}}B(!1)},[r,d]);const R=e.useMemo(()=>typeof A!="undefined",[A]),{direction:J,spin:$}=e.useContext(g.E_),Q=s()(o,$==null?void 0:$.className,{[`${o}-sm`]:w==="small",[`${o}-lg`]:w==="large",[`${o}-spinning`]:P,[`${o}-show-text`]:!!L,[`${o}-rtl`]:J==="rtl"},m,j,H),V=s()(`${o}-container`,{[`${o}-blur`]:P}),W=(0,c.Z)(U,["indicator","prefixCls"]),Y=Object.assign(Object.assign({},$==null?void 0:$.style),F),Z=e.createElement("div",Object.assign({},W,{style:Y,className:Q,"aria-live":"polite","aria-busy":P}),b(o,t),L&&R?e.createElement("div",{className:`${o}-text`},L):null);return R?e.createElement("div",Object.assign({},W,{className:s()(`${o}-nested-loading`,K,H)}),P&&e.createElement("div",{key:"loading"},Z),e.createElement("div",{className:V,key:"container"},A)):Z},x=t=>{const{prefixCls:o}=t,{getPrefixCls:d}=e.useContext(g.E_),r=d("spin",o),[m,j]=z(r),w=Object.assign(Object.assign({},t),{spinPrefixCls:r,hashId:j});return m(e.createElement(f,Object.assign({},w)))};x.setDefaultIndicator=t=>{y=t};var M=x},96446:function(a,u,n){var e=n(37923);function p(s){if(Array.isArray(s))return e(s)}a.exports=p,a.exports.__esModule=!0,a.exports.default=a.exports},96936:function(a){function u(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}a.exports=u,a.exports.__esModule=!0,a.exports.default=a.exports},88619:function(a){function u(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}a.exports=u,a.exports.__esModule=!0,a.exports.default=a.exports},19632:function(a,u,n){var e=n(96446),p=n(96936),s=n(96263),c=n(88619);function l(i){return e(i)||p(i)||s(i)||c()}a.exports=l,a.exports.__esModule=!0,a.exports.default=a.exports},27856:function(a,u,n){"use strict";n.d(u,{D:function(){return p},P:function(){return e}});function e(s,c,l){var i=l||{},g=i.noTrailing,v=g===void 0?!1:g,N=i.noLeading,O=N===void 0?!1:N,I=i.debounceMode,h=I===void 0?void 0:I,S,T=!1,z=0;function D(){S&&clearTimeout(S)}function G(b){var C=b||{},f=C.upcomingOnly,x=f===void 0?!1:f;D(),T=!x}function y(){for(var b=arguments.length,C=new Array(b),f=0;f<b;f++)C[f]=arguments[f];var x=this,M=Date.now()-z;if(T)return;function t(){z=Date.now(),c.apply(x,C)}function o(){S=void 0}!O&&h&&!S&&t(),D(),h===void 0&&M>s?O?(z=Date.now(),v||(S=setTimeout(h?o:t,s))):t():v!==!0&&(S=setTimeout(h?o:t,h===void 0?s-M:s))}return y.cancel=G,y}function p(s,c,l){var i=l||{},g=i.atBegin,v=g===void 0?!1:g;return e(s,c,{debounceMode:v!==!1})}}}]);
