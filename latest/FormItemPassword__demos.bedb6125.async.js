(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[8450],{89242:function(S,P,e){"use strict";e.r(P);var p=e(27424),l=e.n(p),s=e(4390),c=e(77222),E=e(83780),d=e(85893),m=function(){var i=s.Z.useForm(),_=l()(i,1),O=_[0];return(0,d.jsxs)(s.Z,{name:"LFormItemPassword",form:O,submitter:{buttonAlign:"center"},onFinish:function(B){console.log("values",B)},children:[(0,d.jsx)(c.Z,{className:"myLFormItemInput",name:"password1",label:"\u5BC6\u78011",required:!0}),(0,d.jsx)(c.Z,{name:"password2",label:"\u5BC6\u78012",required:!0,min:6}),(0,d.jsx)(c.Z,{required:!0,validateTrigger:"onChange",label:"\u81EA\u5B9A\u4E49\u6E32\u67D3",name:"with-popover6",tooltip:"\u8BE5\u65B9\u6848\u53EF\u7528\u4E8E\u6240\u6709\u8868\u5355\u9879",renderField:(0,E.Z)({content:"\u8BE5\u65B9\u6848\u53EF\u7528\u4E8E\u6240\u6709\u81EA\u5B9A\u4E49\u8868\u5355\u9879"})})]})};P.default=m},83780:function(S,P,e){"use strict";var p=e(42122),l=e.n(p),s=e(74627),c=e(67294),E=e(85893),d=function(i){return(i==null?void 0:i.parentNode)||document.body};function m(u){return function(i){var _=function(h){return(0,E.jsx)(s.Z,l()(l()({trigger:"focus",getPopupContainer:d},u),{},{children:c.cloneElement(i,h)}))};return(0,E.jsx)(_,{})}}P.Z=m},77222:function(S,P,e){"use strict";e.d(P,{Z:function(){return z}});var p=e(42122),l=e.n(p),s=e(70215),c=e.n(s),E=e(89889),d=e(84640),m=e(33168),u=e(67294),i=e(60296),_=e(85893),O=["value","onChange","disabledWhiteSpace","disabledPaste","disabledCopy","placeholder"],h=function(v){var F=v.value,W=v.onChange,M=v.disabledWhiteSpace,b=M===void 0?!0:M,j=v.disabledPaste,U=j===void 0?!0:j,$=v.disabledCopy,K=$===void 0?!0:$,t=v.placeholder,r=t===void 0?"\u8BF7\u8F93\u5165\u5BC6\u7801":t,n=c()(v,O),o=(0,u.useMemo)(function(){return b},[b]),a=(0,u.useCallback)(function(C){var g=C.target,D=g.value;o&&(D=D.replace(/\s+/g,"")),W==null||W(D)},[W,o]),y=(0,u.useCallback)(function(C){var g;U&&C.preventDefault(),n==null||(g=n.onPaste)===null||g===void 0||g.call(n,C)},[U,n]),x=(0,u.useCallback)(function(C){var g;K&&C.preventDefault(),n==null||(g=n.onCopy)===null||g===void 0||g.call(n,C)},[K,n]);return(0,_.jsx)(i.Z.Password,l()(l()({value:F,autoComplete:"new-password",placeholder:r},n),{},{onPaste:y,onCopy:x,onChange:a}))},B=h,Z=["min","max","disabledWhiteSpace","disabledPaste","disabledCopy","passwordProps","required","disabled","placeholder"],f=function(v){var F=v.min,W=F===void 0?8:F,M=v.max,b=M===void 0?16:M,j=v.disabledWhiteSpace,U=j===void 0?!0:j,$=v.disabledPaste,K=$===void 0?!0:$,t=v.disabledCopy,r=t===void 0?!0:t,n=v.passwordProps,o=n===void 0?{}:n,a=v.required,y=v.disabled,x=v.placeholder,C=x===void 0?"\u8BF7\u8F93\u5165\u5BC6\u7801":x,g=c()(v,Z),D=(0,m.JY)({placeholder:C,restProps:g}),R=(0,u.useContext)(E.e),L=R.disabled;return(0,_.jsx)(d.Z,l()(l()({placeholder:D,required:a,validateTrigger:"onBlur",rules:[{validator:function(T,w){var N="";return w?(w.length<W||w.length>b)&&(N="\u5BC6\u7801".concat("\u4E3A",W,"\uFF5E").concat(b,"\u4F4D")):N=a?"".concat(D,"!"):"",N?Promise.reject(N):Promise.resolve()}}]},g),{},{children:(0,_.jsx)(B,l()({disabled:y!=null?y:L,disabledWhiteSpace:U,disabledPaste:K,disabledCopy:r,placeholder:D},o))}))},z=f},61117:function(S,P,e){"use strict";var p=e(84640);P.Z=p.Z},4390:function(S,P,e){"use strict";var p=e(42122),l=e.n(p),s=e(70215),c=e.n(s),E=e(26713),d=e(638),m=e(61117),u=e(89889),i=e(85893),_=["submitter"],O=["render"],h=function(Z){var f=Z.submitter,z=c()(Z,_),I=typeof f=="boolean"||!f?{}:f,v=I.render,F=c()(I,O),W=typeof f=="undefined"||f?l()({render:function(b){var j=Array.isArray(b)&&b.length>1?(0,i.jsx)(E.Z,{children:b}):b;return(0,i.jsx)(d.Z.Item,{colon:!1,className:"lightd-form-submitter",style:{marginBottom:0,paddingLeft:typeof(f==null?void 0:f.buttonAlign)=="number"?"".concat(f==null?void 0:f.buttonAlign,"px"):0},wrapperCol:I==null?void 0:I.wrapperCol,children:(0,i.jsx)("div",{style:{display:"flex",justifyContent:typeof(f==null?void 0:f.buttonAlign)=="string"?f==null?void 0:f.buttonAlign:"initial"},children:v?(0,i.jsx)(i.Fragment,{children:v(j,I)}):j})})}},F):!1;return(0,i.jsx)(u.Z,l()({submitter:W,contentRender:function(b,j){return(0,i.jsxs)(i.Fragment,{children:[b,j]})}},z))};h.Item=m.Z,h.List=d.Z.List,h.Provider=d.Z.Provider,h.ErrorList=d.Z.ErrorList,h.useForm=d.Z.useForm,h.useFormInstance=d.Z.useFormInstance,h.useWatch=d.Z.useWatch,P.Z=h},93812:function(S,P,e){"use strict";e.d(P,{Z:function(){return d}});var p=e(67294),l=e(18446),s=e.n(l),c=function(m,u){return m===void 0&&(m=[]),u===void 0&&(u=[]),s()(m,u)},E=function(m){return function(u,i){var _=(0,p.useRef)(),O=(0,p.useRef)(0);(i===void 0||!c(i,_.current))&&(_.current=i,O.current+=1),m(u,[O.current])}},d=E(p.useEffect)},92652:function(S,P,e){"use strict";e.d(P,{Z:function(){return d}});var p=e(70655),l=e(67294),s=function(){var m=(0,l.useRef)(!1);return(0,l.useEffect)(function(){return m.current=!1,function(){m.current=!0}},[]),m},c=s;function E(m){var u=c(),i=(0,p.CR)((0,l.useState)(m),2),_=i[0],O=i[1],h=(0,l.useCallback)(function(B){u.current||O(B)},[]);return[_,h]}var d=E},77598:function(S,P,e){"use strict";e.d(P,{Z:function(){return c}});var p=e(67294),l=function(E){return function(d,m){var u=(0,p.useRef)(!1);E(function(){return function(){u.current=!1}},[]),E(function(){if(!u.current)u.current=!0;else return d()},m)}},s=null,c=l(p.useEffect)},74627:function(S,P,e){"use strict";e.d(P,{Z:function(){return K}});var p=e(94184),l=e.n(p),s=e(67294);const c=t=>t?typeof t=="function"?t():t:null;var E=e(33603),d=e(53124),m=e(83062),u=e(92419),i=e(14747),_=e(50438),O=e(97414),h=e(8796),B=e(67968),Z=e(45503);const f=t=>{const{componentCls:r,popoverBg:n,popoverColor:o,width:a,fontWeightStrong:y,popoverPadding:x,boxShadowSecondary:C,colorTextHeading:g,borderRadiusLG:D,zIndexPopup:R,marginXS:L,colorBgElevated:A}=t;return[{[r]:Object.assign(Object.assign({},(0,i.Wf)(t)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:R,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":A,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${r}-content`]:{position:"relative"},[`${r}-inner`]:{backgroundColor:n,backgroundClip:"padding-box",borderRadius:D,boxShadow:C,padding:x},[`${r}-title`]:{minWidth:a,marginBottom:L,color:g,fontWeight:y},[`${r}-inner-content`]:{color:o}})},(0,O.ZP)(t,{colorBg:"var(--antd-arrow-background-color)"}),{[`${r}-pure`]:{position:"relative",maxWidth:"none",margin:t.sizePopupArrow,display:"inline-block",[`${r}-content`]:{display:"inline-block"}}}]},z=t=>{const{componentCls:r}=t;return{[r]:h.i.map(n=>{const o=t[`${n}6`];return{[`&${r}-${n}`]:{"--antd-arrow-background-color":o,[`${r}-inner`]:{backgroundColor:o},[`${r}-arrow`]:{background:"transparent"}}}})}},I=t=>{const{componentCls:r,lineWidth:n,lineType:o,colorSplit:a,paddingSM:y,controlHeight:x,fontSize:C,lineHeight:g,padding:D}=t,R=x-Math.round(C*g),L=R/2,A=R/2-n,T=D;return{[r]:{[`${r}-inner`]:{padding:0},[`${r}-title`]:{margin:0,padding:`${L}px ${T}px ${A}px`,borderBottom:`${n}px ${o} ${a}`},[`${r}-inner-content`]:{padding:`${y}px ${T}px`}}}};var v=(0,B.Z)("Popover",t=>{const{colorBgElevated:r,colorText:n,wireframe:o}=t,a=(0,Z.TS)(t,{popoverBg:r,popoverColor:n,popoverPadding:12});return[f(a),z(a),o&&I(a),(0,_._y)(a,"zoom-big")]},t=>{let{zIndexPopupBase:r}=t;return{zIndexPopup:r+30,width:177}}),F=function(t,r){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&r.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(t);a<o.length;a++)r.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(t,o[a])&&(n[o[a]]=t[o[a]]);return n};const W=(t,r,n)=>{if(!(!r&&!n))return s.createElement(s.Fragment,null,r&&s.createElement("div",{className:`${t}-title`},c(r)),s.createElement("div",{className:`${t}-inner-content`},c(n)))};function M(t){const{hashId:r,prefixCls:n,className:o,style:a,placement:y="top",title:x,content:C,children:g}=t;return s.createElement("div",{className:l()(r,n,`${n}-pure`,`${n}-placement-${y}`,o),style:a},s.createElement("div",{className:`${n}-arrow`}),s.createElement(u.G,Object.assign({},t,{className:r,prefixCls:n}),g||W(n,x,C)))}function b(t){const{prefixCls:r}=t,n=F(t,["prefixCls"]),{getPrefixCls:o}=s.useContext(d.E_),a=o("popover",r),[y,x]=v(a);return y(s.createElement(M,Object.assign({},n,{prefixCls:a,hashId:x})))}var j=function(t,r){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&r.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(t);a<o.length;a++)r.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(t,o[a])&&(n[o[a]]=t[o[a]]);return n};const U=t=>{let{title:r,content:n,prefixCls:o}=t;return s.createElement(s.Fragment,null,r&&s.createElement("div",{className:`${o}-title`},c(r)),s.createElement("div",{className:`${o}-inner-content`},c(n)))},$=s.forwardRef((t,r)=>{const{prefixCls:n,title:o,content:a,overlayClassName:y,placement:x="top",trigger:C="hover",mouseEnterDelay:g=.1,mouseLeaveDelay:D=.1,overlayStyle:R={}}=t,L=j(t,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),{getPrefixCls:A}=s.useContext(d.E_),T=A("popover",n),[w,N]=v(T),H=A(),G=l()(y,N);return w(s.createElement(m.Z,Object.assign({placement:x,trigger:C,mouseEnterDelay:g,mouseLeaveDelay:D,overlayStyle:R},L,{prefixCls:T,overlayClassName:G,ref:r,overlay:o||a?s.createElement(U,{prefixCls:T,title:o,content:a}):null,transitionName:(0,E.mL)(H,"zoom-big",L.transitionName),"data-popover-inject":!0})))});$._InternalPanelDoNotUseOrYouWillBeFired=b;var K=$},18446:function(S,P,e){var p=e(90939);function l(s,c){return p(s,c)}S.exports=l}}]);
