(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[125],{80882:function(y,v,e){"use strict";e.d(v,{Z:function(){return c}});var m=e(87462),u=e(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},s=a,E=e(13401),l=function(d,h){return u.createElement(E.Z,(0,m.Z)({},d,{ref:h,icon:s}))},c=u.forwardRef(l)},96640:function(y,v,e){"use strict";e.r(v);var m=e(27424),u=e.n(m),a=e(4390),s=e(6579),E=e(83780),l=e(85893),c=function(){var d=a.Z.useForm(),h=u()(d,1),x=h[0];return(0,l.jsxs)(a.Z,{name:"LFormItemNumber",form:x,submitter:{buttonAlign:"center"},children:[(0,l.jsx)(s.Z,{name:"number1",label:"\u91D1\u989D1",required:!0,contentAfter:(0,l.jsx)("div",{children:"$"})}),(0,l.jsx)(s.Z,{label:"\u91D1\u989D2",name:"number2",required:!0,numberProps:{prefix:"\uFFE5"}}),(0,l.jsx)(s.Z,{label:"\u6570\u5B57",name:"number3",required:!0,max:1e3,numberProps:{precision:void 0}}),(0,l.jsx)(s.Z,{name:"number66",label:"\u683C\u5F0F\u5316\u6570\u5B571",required:!0,initialValue:1e3,numberProps:{precision:void 0,formatter:function(b){return"$ ".concat(b).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(b){return b.replace(/\$\s?|(,*)/g,"")}}}),(0,l.jsx)(s.Z,{label:"\u683C\u5F0F\u5316\u6570\u5B572",required:!0,name:"number77",initialValue:99,numberProps:{precision:void 0,formatter:function(b){return"".concat(b,"%")},parser:function(b){return b.replace("%",",")}}}),(0,l.jsx)(s.Z,{label:"\u81EA\u5B9A\u4E49\u6E32\u67D3",name:"with-popover",tooltip:"\u8BE5\u65B9\u6848\u53EF\u7528\u4E8E\u6240\u6709\u8868\u5355\u9879",renderField:(0,E.Z)({content:"\u8BE5\u65B9\u6848\u53EF\u7528\u4E8E\u6240\u6709\u8868\u5355\u9879"})})]})};v.default=c},83780:function(y,v,e){"use strict";var m=e(42122),u=e.n(m),a=e(74627),s=e(67294),E=e(85893),l=function(d){return(d==null?void 0:d.parentNode)||document.body};function c(f){return function(d){var h=function(g){return(0,E.jsx)(a.Z,u()(u()({trigger:"focus",getPopupContainer:l},f),{},{children:s.cloneElement(d,g)}))};return(0,E.jsx)(h,{})}}v.Z=c},6579:function(y,v,e){"use strict";e.d(v,{Z:function(){return N}});var m=e(42122),u=e.n(m),a=e(70215),s=e.n(a),E=e(89889),l=e(84640),c=e(33168),f=e(67294),d=e(79638),h=e(85893),x=["value","onChange","min","max"],g=function(P){var B=P.value,D=P.onChange,M=P.min,_=P.max,j=s()(P,x),S=(0,f.useCallback)(function($){var A=$;D==null||D(A)},[D]);return(0,h.jsx)(d.Z,u()(u()({min:M,max:_,autoComplete:"off",precision:2,style:{width:"100%"}},j),{},{value:B,onChange:S}))},b=g,L=["required","disabled","min","max","numberProps","placeholder"],p=function(P){var B=P.required,D=B===void 0?!1:B,M=P.disabled,_=P.min,j=_===void 0?0:_,S=P.max,$=S===void 0?100:S,A=P.numberProps,t=A===void 0?{}:A,n=P.placeholder,o=s()(P,L),r=(0,c.JY)({placeholder:n,restProps:o}),i=(0,f.useContext)(E.e),C=i.disabled;return(0,h.jsx)(l.Z,u()(u()({required:D,placeholder:r,validateTrigger:"onBlur"},o),{},{children:(0,h.jsx)(b,u()({disabled:M!=null?M:C,placeholder:r,min:j,max:$},t))}))},N=p},61117:function(y,v,e){"use strict";var m=e(84640);v.Z=m.Z},4390:function(y,v,e){"use strict";var m=e(42122),u=e.n(m),a=e(70215),s=e.n(a),E=e(26713),l=e(638),c=e(61117),f=e(89889),d=e(85893),h=["submitter"],x=["render"],g=function(L){var p=L.submitter,N=s()(L,h),O=typeof p=="boolean"||!p?{}:p,P=O.render,B=s()(O,x),D=typeof p=="undefined"||p?u()({render:function(_){var j=Array.isArray(_)&&_.length>1?(0,d.jsx)(E.Z,{children:_}):_;return(0,d.jsx)(l.Z.Item,{colon:!1,className:"lightd-form-submitter",style:{marginBottom:0,paddingLeft:typeof(p==null?void 0:p.buttonAlign)=="number"?"".concat(p==null?void 0:p.buttonAlign,"px"):0},wrapperCol:O==null?void 0:O.wrapperCol,children:(0,d.jsx)("div",{style:{display:"flex",justifyContent:typeof(p==null?void 0:p.buttonAlign)=="string"?p==null?void 0:p.buttonAlign:"initial"},children:P?(0,d.jsx)(d.Fragment,{children:P(j,O)}):j})})}},B):!1;return(0,d.jsx)(f.Z,u()({submitter:D,contentRender:function(_,j){return(0,d.jsxs)(d.Fragment,{children:[_,j]})}},N))};g.Item=c.Z,g.List=l.Z.List,g.Provider=l.Z.Provider,g.ErrorList=l.Z.ErrorList,g.useForm=l.Z.useForm,g.useFormInstance=l.Z.useFormInstance,g.useWatch=l.Z.useWatch,v.Z=g},93812:function(y,v,e){"use strict";e.d(v,{Z:function(){return l}});var m=e(67294),u=e(18446),a=e.n(u),s=function(c,f){return c===void 0&&(c=[]),f===void 0&&(f=[]),a()(c,f)},E=function(c){return function(f,d){var h=(0,m.useRef)(),x=(0,m.useRef)(0);(d===void 0||!s(d,h.current))&&(h.current=d,x.current+=1),c(f,[x.current])}},l=E(m.useEffect)},92652:function(y,v,e){"use strict";e.d(v,{Z:function(){return l}});var m=e(70655),u=e(67294),a=function(){var c=(0,u.useRef)(!1);return(0,u.useEffect)(function(){return c.current=!1,function(){c.current=!0}},[]),c},s=a;function E(c){var f=s(),d=(0,m.CR)((0,u.useState)(c),2),h=d[0],x=d[1],g=(0,u.useCallback)(function(b){f.current||x(b)},[]);return[h,g]}var l=E},77598:function(y,v,e){"use strict";e.d(v,{Z:function(){return s}});var m=e(67294),u=function(E){return function(l,c){var f=(0,m.useRef)(!1);E(function(){return function(){f.current=!1}},[]),E(function(){if(!f.current)f.current=!0;else return l()},c)}},a=null,s=u(m.useEffect)},74627:function(y,v,e){"use strict";e.d(v,{Z:function(){return A}});var m=e(94184),u=e.n(m),a=e(67294);const s=t=>t?typeof t=="function"?t():t:null;var E=e(33603),l=e(53124),c=e(83062),f=e(92419),d=e(14747),h=e(50438),x=e(97414),g=e(8796),b=e(67968),L=e(45503);const p=t=>{const{componentCls:n,popoverBg:o,popoverColor:r,width:i,fontWeightStrong:C,popoverPadding:W,boxShadowSecondary:I,colorTextHeading:R,borderRadiusLG:K,zIndexPopup:Z,marginXS:F,colorBgElevated:T}=t;return[{[n]:Object.assign(Object.assign({},(0,d.Wf)(t)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:Z,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":T,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${n}-content`]:{position:"relative"},[`${n}-inner`]:{backgroundColor:o,backgroundClip:"padding-box",borderRadius:K,boxShadow:I,padding:W},[`${n}-title`]:{minWidth:i,marginBottom:F,color:R,fontWeight:C},[`${n}-inner-content`]:{color:r}})},(0,x.ZP)(t,{colorBg:"var(--antd-arrow-background-color)"}),{[`${n}-pure`]:{position:"relative",maxWidth:"none",margin:t.sizePopupArrow,display:"inline-block",[`${n}-content`]:{display:"inline-block"}}}]},N=t=>{const{componentCls:n}=t;return{[n]:g.i.map(o=>{const r=t[`${o}6`];return{[`&${n}-${o}`]:{"--antd-arrow-background-color":r,[`${n}-inner`]:{backgroundColor:r},[`${n}-arrow`]:{background:"transparent"}}}})}},O=t=>{const{componentCls:n,lineWidth:o,lineType:r,colorSplit:i,paddingSM:C,controlHeight:W,fontSize:I,lineHeight:R,padding:K}=t,Z=W-Math.round(I*R),F=Z/2,T=Z/2-o,U=K;return{[n]:{[`${n}-inner`]:{padding:0},[`${n}-title`]:{margin:0,padding:`${F}px ${U}px ${T}px`,borderBottom:`${o}px ${r} ${i}`},[`${n}-inner-content`]:{padding:`${C}px ${U}px`}}}};var P=(0,b.Z)("Popover",t=>{const{colorBgElevated:n,colorText:o,wireframe:r}=t,i=(0,L.TS)(t,{popoverBg:n,popoverColor:o,popoverPadding:12});return[p(i),N(i),r&&O(i),(0,h._y)(i,"zoom-big")]},t=>{let{zIndexPopupBase:n}=t;return{zIndexPopup:n+30,width:177}}),B=function(t,n){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(o[r[i]]=t[r[i]]);return o};const D=(t,n,o)=>{if(!(!n&&!o))return a.createElement(a.Fragment,null,n&&a.createElement("div",{className:`${t}-title`},s(n)),a.createElement("div",{className:`${t}-inner-content`},s(o)))};function M(t){const{hashId:n,prefixCls:o,className:r,style:i,placement:C="top",title:W,content:I,children:R}=t;return a.createElement("div",{className:u()(n,o,`${o}-pure`,`${o}-placement-${C}`,r),style:i},a.createElement("div",{className:`${o}-arrow`}),a.createElement(f.G,Object.assign({},t,{className:n,prefixCls:o}),R||D(o,W,I)))}function _(t){const{prefixCls:n}=t,o=B(t,["prefixCls"]),{getPrefixCls:r}=a.useContext(l.E_),i=r("popover",n),[C,W]=P(i);return C(a.createElement(M,Object.assign({},o,{prefixCls:i,hashId:W})))}var j=function(t,n){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(o[r[i]]=t[r[i]]);return o};const S=t=>{let{title:n,content:o,prefixCls:r}=t;return a.createElement(a.Fragment,null,n&&a.createElement("div",{className:`${r}-title`},s(n)),a.createElement("div",{className:`${r}-inner-content`},s(o)))},$=a.forwardRef((t,n)=>{const{prefixCls:o,title:r,content:i,overlayClassName:C,placement:W="top",trigger:I="hover",mouseEnterDelay:R=.1,mouseLeaveDelay:K=.1,overlayStyle:Z={}}=t,F=j(t,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),{getPrefixCls:T}=a.useContext(l.E_),U=T("popover",o),[z,H]=P(U),w=T(),G=u()(C,H);return z(a.createElement(c.Z,Object.assign({placement:W,trigger:I,mouseEnterDelay:R,mouseLeaveDelay:K,overlayStyle:Z},F,{prefixCls:U,overlayClassName:G,ref:n,overlay:r||i?a.createElement(S,{prefixCls:U,title:r,content:i}):null,transitionName:(0,E.mL)(w,"zoom-big",F.transitionName),"data-popover-inject":!0})))});$._InternalPanelDoNotUseOrYouWillBeFired=_;var A=$},18446:function(y,v,e){var m=e(90939);function u(a,s){return m(a,s)}y.exports=u}}]);
