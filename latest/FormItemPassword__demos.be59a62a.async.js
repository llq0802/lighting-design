"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[8450],{89242:function(N,C,e){e.r(C);var x=e(27424),g=e.n(x),l=e(4390),c=e(77222),O=e(83780),u=e(85893),B=function(){var i=l.Z.useForm(),W=g()(i,1),I=W[0];return(0,u.jsxs)(l.Z,{name:"LFormItemPassword",form:I,submitter:{buttonAlign:"center"},onFinish:function(Z){console.log("values",Z)},children:[(0,u.jsx)(c.Z,{className:"myLFormItemInput",name:"password1",label:"\u5BC6\u78011",required:!0,disabledWhiteSpace:!1}),(0,u.jsx)(c.Z,{name:"password2",label:"\u5BC6\u78012",required:!0,min:6,validateTrigger:"onChange"}),(0,u.jsx)(c.Z,{name:"password3",label:"\u9AD8\u5F3A\u5EA6\u5BC6\u7801",required:!0,highPassWord:!0}),(0,u.jsx)(c.Z,{required:!0,validateTrigger:"onChange",label:"\u81EA\u5B9A\u4E49\u6E32\u67D3",name:"with-popover6",tooltip:"\u8BE5\u65B9\u6848\u53EF\u7528\u4E8E\u6240\u6709\u8868\u5355\u9879",renderField:(0,O.Z)({content:"\u8BE5\u65B9\u6848\u53EF\u7528\u4E8E\u6240\u6709\u81EA\u5B9A\u4E49\u8868\u5355\u9879"})})]})};C.default=B},83780:function(N,C,e){var x=e(42122),g=e.n(x),l=e(74627),c=e(67294),O=e(85893),u=function(i){return(i==null?void 0:i.parentNode)||document.body};function B(j){return function(i){var W=function(m){return(0,O.jsx)(l.Z,g()(g()({trigger:"focus",getPopupContainer:u},j),{},{children:c.cloneElement(i,m)}))};return(0,O.jsx)(W,{})}}C.Z=B},77222:function(N,C,e){e.d(C,{Z:function(){return $}});var x=e(42122),g=e.n(x),l=e(70215),c=e.n(l),O=e(40964),u=e(89889),B=e(84640),j=e(33168),i=e(67294),W=e(22638),I=e(69677),m=e(85893),Z=["value","onChange","disabledWhiteSpace","disabledPaste","disabledCopy","placeholder"],R=function(s){var F=s.value,h=s.onChange,b=s.disabledWhiteSpace,A=b===void 0?!0:b,L=s.disabledPaste,K=L===void 0?!0:L,T=s.disabledCopy,t=T===void 0?!0:T,o=s.placeholder,n=o===void 0?"\u8BF7\u8F93\u5165\u5BC6\u7801":o,r=c()(s,Z),a=(0,i.useMemo)(function(){return A},[A]),f=(0,W.Z)(function(v){var p=v.target,_=p.value;a&&(_=_.replace(/\s+/g,"")),h==null||h(_)}),E=(0,W.Z)(function(v){var p;K&&v.preventDefault(),r==null||(p=r.onPaste)===null||p===void 0||p.call(r,v)}),y=(0,W.Z)(function(v){var p;t&&v.preventDefault(),r==null||(p=r.onCopy)===null||p===void 0||p.call(r,v)});return(0,m.jsx)(I.Z.Password,g()(g()({value:F,autoComplete:"new-password",placeholder:n},r),{},{onPaste:E,onCopy:y,onChange:f}))},d=R,z=["min","max","highPassWord","disabledWhiteSpace","disabledPaste","disabledCopy","passwordProps","required","disabled","placeholder","highPassWordErrorMsg"],M=function(s){var F=s.min,h=F===void 0?8:F,b=s.max,A=b===void 0?16:b,L=s.highPassWord,K=L===void 0?!1:L,T=s.disabledWhiteSpace,t=T===void 0?!0:T,o=s.disabledPaste,n=o===void 0?!0:o,r=s.disabledCopy,a=r===void 0?!0:r,f=s.passwordProps,E=f===void 0?{}:f,y=s.required,v=s.disabled,p=s.placeholder,_=s.highPassWordErrorMsg,S=_===void 0?"\u5FC5\u987B\u540C\u65F6\u5305\u542B\u5927\u5C0F\u5199\u5B57\u6BCD , \u6570\u5B57  , \u7279\u6B8A\u5B57\u7B26\u4E14\u4F4D\u6570\u81F3\u5C118\u4F4D!":_,P=c()(s,z),D=(0,j.JY)({placeholder:p,restProps:P}),H=(0,i.useContext)(u.e),G=H.disabled;return(0,m.jsx)(B.Z,g()(g()({placeholder:D,required:y,validateTrigger:"onBlur",rules:[{validator:function(V,Y){var J,U="";if(!K){if(Y)(Y.length<h||Y.length>A)&&(U="\u5BC6\u7801\u4E3A".concat(h,"\uFF5E").concat(A,"\u4F4D"));else{var X;U=y?"".concat((P==null||(X=P.messageVariables)===null||X===void 0?void 0:X.label)||D,"!"):""}return U?Promise.reject(U):Promise.resolve()}return O.Ao.test(Y)?Promise.resolve():(U=(P==null||(J=P.messageVariables)===null||J===void 0?void 0:J.label)||S||D,Promise.reject(U))}}]},P),{},{children:(0,m.jsx)(d,g()({disabled:v!=null?v:G,disabledWhiteSpace:t,disabledPaste:n,disabledCopy:a,placeholder:D},E))}))},$=M},61117:function(N,C,e){var x=e(84640);C.Z=x.Z},4390:function(N,C,e){var x=e(42122),g=e.n(x),l=e(70215),c=e.n(l),O=e(93421),u=e(99859),B=e(61117),j=e(89889),i=e(85893),W=["submitter"],I=["render"],m=function(R){var d=R.submitter,z=c()(R,W),M=typeof d=="boolean"||!d?{}:d,$=M.render,w=c()(M,I),s=typeof d=="undefined"||d?g()({render:function(h){var b=Array.isArray(h)&&h.length>1?(0,i.jsx)(O.Z,{children:h}):h;return(0,i.jsx)(u.Z.Item,{colon:!1,className:"lightd-form-submitter",style:{marginBottom:0,paddingLeft:typeof(d==null?void 0:d.buttonAlign)=="number"?"".concat(d==null?void 0:d.buttonAlign,"px"):0},wrapperCol:M==null?void 0:M.wrapperCol,children:(0,i.jsx)("div",{style:{display:"flex",justifyContent:typeof(d==null?void 0:d.buttonAlign)=="string"?d==null?void 0:d.buttonAlign:"initial"},children:$?(0,i.jsx)(i.Fragment,{children:$(b,M)}):b})})}},w):!1;return(0,i.jsx)(j.Z,g()({submitter:s,contentRender:function(h,b){return(0,i.jsxs)(i.Fragment,{children:[h,b]})}},z))};m.Item=B.Z,m.List=u.Z.List,m.Provider=u.Z.Provider,m.ErrorList=u.Z.ErrorList,m.useForm=u.Z.useForm,m.useFormInstance=u.Z.useFormInstance,m.useWatch=u.Z.useWatch,C.Z=m},74627:function(N,C,e){e.d(C,{Z:function(){return T}});var x=e(94184),g=e.n(x),l=e(67294);const c=t=>t?typeof t=="function"?t():t:null;var O=e(33603),u=e(53124),B=e(83062),j=e(92419),i=e(14747),W=e(50438),I=e(97414),m=e(8796),Z=e(67968),R=e(45503);const d=t=>{const{componentCls:o,popoverColor:n,minWidth:r,fontWeightStrong:a,popoverPadding:f,boxShadowSecondary:E,colorTextHeading:y,borderRadiusLG:v,zIndexPopup:p,marginXS:_,colorBgElevated:S,popoverBg:P}=t;return[{[o]:Object.assign(Object.assign({},(0,i.Wf)(t)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:p,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":S,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${o}-content`]:{position:"relative"},[`${o}-inner`]:{backgroundColor:P,backgroundClip:"padding-box",borderRadius:v,boxShadow:E,padding:f},[`${o}-title`]:{minWidth:r,marginBottom:_,color:y,fontWeight:a},[`${o}-inner-content`]:{color:n}})},(0,I.ZP)(t,{colorBg:"var(--antd-arrow-background-color)"}),{[`${o}-pure`]:{position:"relative",maxWidth:"none",margin:t.sizePopupArrow,display:"inline-block",[`${o}-content`]:{display:"inline-block"}}}]},z=t=>{const{componentCls:o}=t;return{[o]:m.i.map(n=>{const r=t[`${n}6`];return{[`&${o}-${n}`]:{"--antd-arrow-background-color":r,[`${o}-inner`]:{backgroundColor:r},[`${o}-arrow`]:{background:"transparent"}}}})}},M=t=>{const{componentCls:o,lineWidth:n,lineType:r,colorSplit:a,paddingSM:f,controlHeight:E,fontSize:y,lineHeight:v,padding:p}=t,_=E-Math.round(y*v),S=_/2,P=_/2-n,D=p;return{[o]:{[`${o}-inner`]:{padding:0},[`${o}-title`]:{margin:0,padding:`${S}px ${D}px ${P}px`,borderBottom:`${n}px ${r} ${a}`},[`${o}-inner-content`]:{padding:`${f}px ${D}px`}}}};var $=(0,Z.Z)("Popover",t=>{const{colorBgElevated:o,colorText:n,wireframe:r}=t,a=(0,R.TS)(t,{popoverPadding:12,popoverBg:o,popoverColor:n});return[d(a),z(a),r&&M(a),(0,W._y)(a,"zoom-big")]},t=>({width:177,minWidth:177,zIndexPopup:t.zIndexPopupBase+30}),{resetStyle:!1,deprecatedTokens:[["width","minWidth"]]}),w=function(t,o){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&o.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(t);a<r.length;a++)o.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]]);return n};const s=(t,o,n)=>{if(!(!o&&!n))return l.createElement(l.Fragment,null,o&&l.createElement("div",{className:`${t}-title`},c(o)),l.createElement("div",{className:`${t}-inner-content`},c(n)))},F=t=>{const{hashId:o,prefixCls:n,className:r,style:a,placement:f="top",title:E,content:y,children:v}=t;return l.createElement("div",{className:g()(o,n,`${n}-pure`,`${n}-placement-${f}`,r),style:a},l.createElement("div",{className:`${n}-arrow`}),l.createElement(j.G,Object.assign({},t,{className:o,prefixCls:n}),v||s(n,E,y)))};var b=t=>{const{prefixCls:o}=t,n=w(t,["prefixCls"]),{getPrefixCls:r}=l.useContext(u.E_),a=r("popover",o),[f,E]=$(a);return f(l.createElement(F,Object.assign({},n,{prefixCls:a,hashId:E})))},A=function(t,o){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&o.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(t);a<r.length;a++)o.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]]);return n};const L=t=>{let{title:o,content:n,prefixCls:r}=t;return l.createElement(l.Fragment,null,o&&l.createElement("div",{className:`${r}-title`},c(o)),l.createElement("div",{className:`${r}-inner-content`},c(n)))},K=l.forwardRef((t,o)=>{const{prefixCls:n,title:r,content:a,overlayClassName:f,placement:E="top",trigger:y="hover",mouseEnterDelay:v=.1,mouseLeaveDelay:p=.1,overlayStyle:_={}}=t,S=A(t,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),{getPrefixCls:P}=l.useContext(u.E_),D=P("popover",n),[H,G]=$(D),Q=P(),V=g()(f,G);return H(l.createElement(B.Z,Object.assign({placement:E,trigger:y,mouseEnterDelay:v,mouseLeaveDelay:p,overlayStyle:_},S,{prefixCls:D,overlayClassName:V,ref:o,overlay:r||a?l.createElement(L,{prefixCls:D,title:r,content:a}):null,transitionName:(0,O.m)(Q,"zoom-big",S.transitionName),"data-popover-inject":!0})))});K._InternalPanelDoNotUseOrYouWillBeFired=b;var T=K}}]);
