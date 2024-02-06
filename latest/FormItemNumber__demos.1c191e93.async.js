"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[125],{42922:function($,g,e){e.d(g,{Z:function(){return C}});var i=e(87462),m=e(67294),_={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},d=_,E=e(13401),s=function(p,O){return m.createElement(E.Z,(0,i.Z)({},p,{ref:O,icon:d}))},C=m.forwardRef(s)},84163:function($,g,e){e.r(g);var i=e(5574),m=e.n(i),_=e(4390),d=e(6579),E=e(83780),s=e(85893),C=function(){var p=_.Z.useForm(),O=m()(p,1),v=O[0];return(0,s.jsxs)(_.Z,{form:v,submitter:{buttonAlign:"center"},children:[(0,s.jsx)(d.Z,{name:"number1",label:"\u91D1\u989D1",required:!0,contentAfter:(0,s.jsx)("div",{children:"$"})}),(0,s.jsx)(d.Z,{label:"\u91D1\u989D2",name:"number2",required:!0,numberProps:{prefix:"\uFFE5"}}),(0,s.jsx)(d.Z,{label:"\u5C0F\u6570\u70B9\u540E2\u4F4D\u6570\u5B57",name:"number3",required:!0,max:1e3,numberProps:{precision:2}}),(0,s.jsx)(d.Z,{name:"number66",label:"\u683C\u5F0F\u5316\u6570\u5B571",required:!0,initialValue:1e3,numberProps:{precision:void 0,formatter:function(P){return"$ ".concat(P).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(P){return P.replace(/\$\s?|(,*)/g,"")}}}),(0,s.jsx)(d.Z,{label:"\u683C\u5F0F\u5316\u6570\u5B572",required:!0,name:"number77",initialValue:99,numberProps:{precision:void 0,formatter:function(P){return"".concat(P,"%")},parser:function(P){return P.replace("%",",")}}}),(0,s.jsx)(d.Z,{label:"\u81EA\u5B9A\u4E49\u6E32\u67D3",name:"with-popover",tooltip:"\u8BE5\u65B9\u6848\u53EF\u7528\u4E8E\u6240\u6709\u8868\u5355\u9879",renderField:(0,E.Z)({content:"\u8BE5\u65B9\u6848\u53EF\u7528\u4E8E\u6240\u6709\u8868\u5355\u9879"})})]})};g.default=C},83780:function($,g,e){var i=e(97857),m=e.n(i),_=e(74627),d=e(67294),E=e(85893),s=function(p){return(p==null?void 0:p.parentNode)||document.body};function C(M){return function(p){var O=function(f){return(0,E.jsx)(_.Z,m()(m()({trigger:"focus",getPopupContainer:s},M),{},{children:d.cloneElement(p,f)}))};return(0,E.jsx)(O,{})}}g.Z=C},6579:function($,g,e){e.d(g,{Z:function(){return U}});var i=e(97857),m=e.n(i),_=e(13769),d=e.n(_),E=e(89889),s=e(84640),C=e(33168),M=e(40964),p=e(67294),O=e(22638),v=e(92797),f=e(85893),P=["value","onChange","min","max"],h=function(u){var W=u.value,B=u.onChange,A=u.min,x=u.max,b=d()(u,P),Z=(0,O.Z)(function(R){var S=R;B==null||B(S)});return(0,f.jsx)(v.Z,m()(m()({min:A,max:x,autoComplete:"off"},b),{},{style:m()({width:"100%"},b==null?void 0:b.style),value:W,onChange:Z}))},H=h,T=["disabled","size","required","precision","min","max","placeholder","numberProps"],a=function(u){var W=u.disabled,B=u.size,A=u.required,x=A===void 0?!1:A,b=u.precision,Z=u.min,R=Z===void 0?0:Z,S=u.max,n=S===void 0?9999:S,r=u.placeholder,o=u.numberProps,t=o===void 0?M.FD:o,l=d()(u,T),c=(0,C.JY)({placeholder:r,restProps:l}),y=(0,p.useContext)(E.e),j=y.disabled;return(0,f.jsx)(s.Z,m()(m()({required:x,placeholder:c},l),{},{children:(0,f.jsx)(H,m()({size:B,disabled:W!=null?W:j,placeholder:c,min:R,max:n,precision:b},t))}))},U=a},61117:function($,g,e){var i=e(84640);g.Z=i.Z},4390:function($,g,e){var i=e(97857),m=e.n(i),_=e(13769),d=e.n(_),E=e(78957),s=e(99859),C=e(33168),M=e(40964),p=e(61117),O=e(89889),v=e(85893),f=["submitter"],P=["render"],h=function(T){var a=T.submitter,U=d()(T,f),D=typeof a=="boolean"||!a?M.FD:a,u=D.render,W=d()(D,P),B=a===void 0||a?m()({render:function(x){var b=Array.isArray(x)&&x.length>1?(0,v.jsx)(E.Z,{children:x}):x;return(0,v.jsx)(s.Z.Item,{colon:!1,className:"lightd-form-submitter",style:{marginBottom:0,paddingLeft:typeof(a==null?void 0:a.buttonAlign)=="number"?"".concat(a==null?void 0:a.buttonAlign,"px"):typeof(a==null?void 0:a.buttonAlign)=="string"&&!isNaN(parseFloat(a==null?void 0:a.buttonAlign))?"".concat(a==null?void 0:a.buttonAlign):0},wrapperCol:D==null?void 0:D.wrapperCol,children:(0,v.jsx)("div",{style:{display:"flex",justifyContent:typeof(a==null?void 0:a.buttonAlign)=="string"?C.iT[a==null?void 0:a.buttonAlign]:"initial"},children:u?(0,v.jsx)(v.Fragment,{children:u(b,D)}):b})})}},W):!1;return(0,v.jsx)(O.Z,m()({submitter:B,contentRender:function(x,b){return(0,v.jsxs)(v.Fragment,{children:[x,b]})}},U))};h.Item=p.Z,h.List=s.Z.List,h.Provider=s.Z.Provider,h.ErrorList=s.Z.ErrorList,h.useForm=s.Z.useForm,h.useFormInstance=s.Z.useFormInstance,h.useWatch=s.Z.useWatch,g.Z=h},74627:function($,g,e){e.d(g,{Z:function(){return S}});var i=e(67294),m=e(13144),_=e.n(m);const d=n=>n?typeof n=="function"?n():n:null;var E=e(33603),s=e(53124),C=e(83062),M=e(73875),p=e(14747),O=e(50438),v=e(97414),f=e(8796),P=e(91945),h=e(45503),H=e(79511);const T=n=>{const{componentCls:r,popoverColor:o,titleMinWidth:t,fontWeightStrong:l,innerPadding:c,boxShadowSecondary:y,colorTextHeading:j,borderRadiusLG:I,zIndexPopup:z,titleMarginBottom:Y,colorBgElevated:K,popoverBg:F,titleBorderBottom:L,innerContentPadding:V,titlePadding:N}=n;return[{[r]:Object.assign(Object.assign({},(0,p.Wf)(n)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:z,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":K,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${r}-content`]:{position:"relative"},[`${r}-inner`]:{backgroundColor:F,backgroundClip:"padding-box",borderRadius:I,boxShadow:y,padding:c},[`${r}-title`]:{minWidth:t,marginBottom:Y,color:j,fontWeight:l,borderBottom:L,padding:N},[`${r}-inner-content`]:{color:o,padding:V}})},(0,v.ZP)(n,"var(--antd-arrow-background-color)"),{[`${r}-pure`]:{position:"relative",maxWidth:"none",margin:n.sizePopupArrow,display:"inline-block",[`${r}-content`]:{display:"inline-block"}}}]},a=n=>{const{componentCls:r}=n;return{[r]:f.i.map(o=>{const t=n[`${o}6`];return{[`&${r}-${o}`]:{"--antd-arrow-background-color":t,[`${r}-inner`]:{backgroundColor:t},[`${r}-arrow`]:{background:"transparent"}}}})}},U=n=>{const{lineWidth:r,controlHeight:o,fontHeight:t,padding:l,wireframe:c,zIndexPopupBase:y,borderRadiusLG:j,marginXS:I,lineType:z,colorSplit:Y,paddingSM:K}=n,F=o-t,L=F/2,V=F/2-r,N=l;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:y+30},(0,H.w)(n)),(0,v.wZ)({contentRadius:j,limitVerticalRadius:!0})),{innerPadding:c?0:12,titleMarginBottom:c?0:I,titlePadding:c?`${L}px ${N}px ${V}px`:0,titleBorderBottom:c?`${r}px ${z} ${Y}`:"none",innerContentPadding:c?`${K}px ${N}px`:0})};var D=(0,P.I$)("Popover",n=>{const{colorBgElevated:r,colorText:o}=n,t=(0,h.TS)(n,{popoverBg:r,popoverColor:o});return[T(t),a(t),(0,O._y)(t,"zoom-big")]},U,{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]}),u=function(n,r){var o={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&r.indexOf(t)<0&&(o[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(n);l<t.length;l++)r.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(n,t[l])&&(o[t[l]]=n[t[l]]);return o};const W=(n,r,o)=>!r&&!o?null:i.createElement(i.Fragment,null,r&&i.createElement("div",{className:`${n}-title`},d(r)),i.createElement("div",{className:`${n}-inner-content`},d(o))),B=n=>{const{hashId:r,prefixCls:o,className:t,style:l,placement:c="top",title:y,content:j,children:I}=n;return i.createElement("div",{className:_()(r,o,`${o}-pure`,`${o}-placement-${c}`,t),style:l},i.createElement("div",{className:`${o}-arrow`}),i.createElement(M.G,Object.assign({},n,{className:r,prefixCls:o}),I||W(o,y,j)))};var x=n=>{const{prefixCls:r,className:o}=n,t=u(n,["prefixCls","className"]),{getPrefixCls:l}=i.useContext(s.E_),c=l("popover",r),[y,j,I]=D(c);return y(i.createElement(B,Object.assign({},t,{prefixCls:c,hashId:j,className:_()(o,I)})))},b=function(n,r){var o={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&r.indexOf(t)<0&&(o[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(n);l<t.length;l++)r.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(n,t[l])&&(o[t[l]]=n[t[l]]);return o};const Z=n=>{let{title:r,content:o,prefixCls:t}=n;return i.createElement(i.Fragment,null,r&&i.createElement("div",{className:`${t}-title`},d(r)),i.createElement("div",{className:`${t}-inner-content`},d(o)))},R=i.forwardRef((n,r)=>{const{prefixCls:o,title:t,content:l,overlayClassName:c,placement:y="top",trigger:j="hover",mouseEnterDelay:I=.1,mouseLeaveDelay:z=.1,overlayStyle:Y={}}=n,K=b(n,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),{getPrefixCls:F}=i.useContext(s.E_),L=F("popover",o),[V,N,G]=D(L),w=F(),J=_()(c,N,G);return V(i.createElement(C.Z,Object.assign({placement:y,trigger:j,mouseEnterDelay:I,mouseLeaveDelay:z,overlayStyle:Y},K,{prefixCls:L,overlayClassName:J,ref:r,overlay:t||l?i.createElement(Z,{prefixCls:L,title:t,content:l}):null,transitionName:(0,E.m)(w,"zoom-big",K.transitionName),"data-popover-inject":!0})))});R._InternalPanelDoNotUseOrYouWillBeFired=x;var S=R}}]);
