"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[9198],{68795:function(pe,K,a){a.d(K,{Z:function(){return A}});var G=a(87462),$=a(67294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},W=i,s=a(13401),Z=function(L,H){return $.createElement(s.Z,(0,G.Z)({},L,{ref:H,icon:W}))},A=$.forwardRef(Z)},98293:function(pe,K,a){a.d(K,{C:function(){return n}});var G=a(94184),$=a.n(G),i=a(48555),W=a(17799),s=a(67294),Z=a(74443),A=a(53124),X=a(25378);const L=s.createContext("default"),H=e=>{let{children:r,size:t}=e;const o=s.useContext(L);return s.createElement(L.Provider,{value:t||o},r)};var q=L,ee=a(14747),te=a(67968),ne=a(45503);const oe=e=>{const{antCls:r,componentCls:t,iconCls:o,avatarBg:l,avatarColor:p,containerSize:c,containerSizeLG:g,containerSizeSM:f,textFontSize:u,textFontSizeLG:d,textFontSizeSM:S,borderRadius:x,borderRadiusLG:C,borderRadiusSM:j,lineWidth:z,lineType:R}=e,b=(O,P,T)=>({width:O,height:O,lineHeight:`${O-z*2}px`,borderRadius:"50%",[`&${t}-square`]:{borderRadius:T},[`${t}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${t}-icon`]:{fontSize:P,[`> ${o}`]:{margin:0}}});return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,ee.Wf)(e)),{position:"relative",display:"inline-block",overflow:"hidden",color:p,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:l,border:`${z}px ${R} transparent`,["&-image"]:{background:"transparent"},[`${r}-image-img`]:{display:"block"}}),b(c,u,x)),{["&-lg"]:Object.assign({},b(g,d,C)),["&-sm"]:Object.assign({},b(f,S,j)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},re=e=>{const{componentCls:r,groupBorderColor:t,groupOverlapping:o,groupSpace:l}=e;return{[`${r}-group`]:{display:"inline-flex",[`${r}`]:{borderColor:t},["> *:not(:first-child)"]:{marginInlineStart:o}},[`${r}-group-popover`]:{[`${r} + ${r}`]:{marginInlineStart:l}}}};var Q=(0,te.Z)("Avatar",e=>{const{colorTextLightSolid:r,colorTextPlaceholder:t}=e,o=(0,ne.TS)(e,{avatarBg:t,avatarColor:r});return[oe(o),re(o)]},e=>{const{controlHeight:r,controlHeightLG:t,controlHeightSM:o,fontSize:l,fontSizeLG:p,fontSizeXL:c,fontSizeHeading3:g,marginXS:f,marginXXS:u,colorBorderBg:d}=e;return{containerSize:r,containerSizeLG:t,containerSizeSM:o,textFontSize:Math.round((p+c)/2),textFontSizeLG:g,textFontSizeSM:l,groupSpace:u,groupOverlapping:-f,groupBorderColor:d}}),J=function(e,r){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(e);l<o.length;l++)r.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(t[o[l]]=e[o[l]]);return t};const ae=(e,r)=>{const t=s.useContext(q),[o,l]=s.useState(1),[p,c]=s.useState(!1),[g,f]=s.useState(!0),u=s.useRef(null),d=s.useRef(null),S=(0,W.sQ)(r,u),{getPrefixCls:x,avatar:C}=s.useContext(A.E_),j=()=>{if(!d.current||!u.current)return;const h=d.current.offsetWidth,E=u.current.offsetWidth;if(h!==0&&E!==0){const{gap:N=4}=e;N*2<E&&l(E-N*2<h?(E-N*2)/h:1)}};s.useEffect(()=>{c(!0)},[]),s.useEffect(()=>{f(!0),l(1)},[e.src]),s.useEffect(j,[e.gap]);const z=()=>{const{onError:h}=e;(h==null?void 0:h())!==!1&&f(!1)},{prefixCls:R,shape:b="circle",size:O="default",src:P,srcSet:T,icon:U,className:fe,rootClassName:ge,alt:ve,draggable:he,children:D,crossOrigin:M}=e,_=J(e,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),m=O==="default"?t:O,Oe=Object.keys(typeof m=="object"?m||{}:{}).some(h=>["xs","sm","md","lg","xl","xxl"].includes(h)),de=(0,X.Z)(Oe),Se=s.useMemo(()=>{if(typeof m!="object")return{};const h=Z.c.find(N=>de[N]),E=m[h];return E?{width:E,height:E,lineHeight:`${E}px`,fontSize:U?E/2:18}:{}},[de,m]),B=x("avatar",R),[k,Ce]=Q(B),me=$()({[`${B}-lg`]:m==="large",[`${B}-sm`]:m==="small"}),ue=s.isValidElement(P),Ee=$()(B,me,C==null?void 0:C.className,{[`${B}-${b}`]:!!b,[`${B}-image`]:ue||P&&g,[`${B}-icon`]:!!U},fe,ge,Ce),ie=typeof m=="number"?{width:m,height:m,lineHeight:`${m}px`,fontSize:U?m/2:18}:{};let F;if(typeof P=="string"&&g)F=s.createElement("img",{src:P,draggable:he,srcSet:T,onError:z,alt:ve,crossOrigin:M});else if(ue)F=P;else if(U)F=U;else if(p||o!==1){const h=`scale(${o}) translateX(-50%)`,E={msTransform:h,WebkitTransform:h,transform:h},N=typeof m=="number"?{lineHeight:`${m}px`}:{};F=s.createElement(i.Z,{onResize:j},s.createElement("span",{className:`${B}-string`,ref:d,style:Object.assign(Object.assign({},N),E)},D))}else F=s.createElement("span",{className:`${B}-string`,style:{opacity:0},ref:d},D);return delete _.onError,delete _.gap,k(s.createElement("span",Object.assign({},_,{style:Object.assign(Object.assign(Object.assign(Object.assign({},ie),Se),C==null?void 0:C.style),_.style),className:Ee,ref:S}),F))};var V=s.forwardRef(ae),w=a(37419),le=a(74627),y=a(96159),I=e=>{const{getPrefixCls:r,direction:t}=s.useContext(A.E_),{prefixCls:o,className:l,rootClassName:p,maxCount:c,maxStyle:g,size:f}=e,u=r("avatar",o),d=`${u}-group`,[S,x]=Q(u),C=$()(d,{[`${d}-rtl`]:t==="rtl"},l,p,x),{children:j,maxPopoverPlacement:z="top",maxPopoverTrigger:R="hover"}=e,b=(0,w.Z)(j).map((P,T)=>(0,y.Tm)(P,{key:`avatar-key-${T}`})),O=b.length;if(c&&c<O){const P=b.slice(0,c),T=b.slice(c,O);return P.push(s.createElement(le.Z,{key:"avatar-popover-key",content:T,trigger:R,placement:z,overlayClassName:`${d}-popover`},s.createElement(V,{style:g},`+${O-c}`))),S(s.createElement(H,{size:f},s.createElement("div",{className:C,style:e.style},P)))}return S(s.createElement(H,{size:f},s.createElement("div",{className:C,style:e.style},b)))};const v=V;v.Group=I;var n=v},74627:function(pe,K,a){a.d(K,{Z:function(){return v}});var G=a(94184),$=a.n(G),i=a(67294);const W=n=>n?typeof n=="function"?n():n:null;var s=a(33603),Z=a(53124),A=a(83062),X=a(92419),L=a(14747),H=a(50438),q=a(97414),ee=a(8796),te=a(67968),ne=a(45503);const oe=n=>{const{componentCls:e,popoverColor:r,minWidth:t,fontWeightStrong:o,popoverPadding:l,boxShadowSecondary:p,colorTextHeading:c,borderRadiusLG:g,zIndexPopup:f,marginXS:u,colorBgElevated:d,popoverBg:S}=n;return[{[e]:Object.assign(Object.assign({},(0,L.Wf)(n)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:f,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":d,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${e}-content`]:{position:"relative"},[`${e}-inner`]:{backgroundColor:S,backgroundClip:"padding-box",borderRadius:g,boxShadow:p,padding:l},[`${e}-title`]:{minWidth:t,marginBottom:u,color:c,fontWeight:o},[`${e}-inner-content`]:{color:r}})},(0,q.ZP)(n,{colorBg:"var(--antd-arrow-background-color)"}),{[`${e}-pure`]:{position:"relative",maxWidth:"none",margin:n.sizePopupArrow,display:"inline-block",[`${e}-content`]:{display:"inline-block"}}}]},re=n=>{const{componentCls:e}=n;return{[e]:ee.i.map(r=>{const t=n[`${r}6`];return{[`&${e}-${r}`]:{"--antd-arrow-background-color":t,[`${e}-inner`]:{backgroundColor:t},[`${e}-arrow`]:{background:"transparent"}}}})}},Q=n=>{const{componentCls:e,lineWidth:r,lineType:t,colorSplit:o,paddingSM:l,controlHeight:p,fontSize:c,lineHeight:g,padding:f}=n,u=p-Math.round(c*g),d=u/2,S=u/2-r,x=f;return{[e]:{[`${e}-inner`]:{padding:0},[`${e}-title`]:{margin:0,padding:`${d}px ${x}px ${S}px`,borderBottom:`${r}px ${t} ${o}`},[`${e}-inner-content`]:{padding:`${l}px ${x}px`}}}};var J=(0,te.Z)("Popover",n=>{const{colorBgElevated:e,colorText:r,wireframe:t}=n,o=(0,ne.TS)(n,{popoverPadding:12,popoverBg:e,popoverColor:r});return[oe(o),re(o),t&&Q(o),(0,H._y)(o,"zoom-big")]},n=>({width:177,minWidth:177,zIndexPopup:n.zIndexPopupBase+30}),{deprecatedTokens:[["width","minWidth"]]}),ae=function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(n);o<t.length;o++)e.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(n,t[o])&&(r[t[o]]=n[t[o]]);return r};const se=(n,e,r)=>{if(!(!e&&!r))return i.createElement(i.Fragment,null,e&&i.createElement("div",{className:`${n}-title`},W(e)),i.createElement("div",{className:`${n}-inner-content`},W(r)))},V=n=>{const{hashId:e,prefixCls:r,className:t,style:o,placement:l="top",title:p,content:c,children:g}=n;return i.createElement("div",{className:$()(e,r,`${r}-pure`,`${r}-placement-${l}`,t),style:o},i.createElement("div",{className:`${r}-arrow`}),i.createElement(X.G,Object.assign({},n,{className:e,prefixCls:r}),g||se(r,p,c)))};var le=n=>{const{prefixCls:e}=n,r=ae(n,["prefixCls"]),{getPrefixCls:t}=i.useContext(Z.E_),o=t("popover",e),[l,p]=J(o);return l(i.createElement(V,Object.assign({},r,{prefixCls:o,hashId:p})))},y=function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(n);o<t.length;o++)e.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(n,t[o])&&(r[t[o]]=n[t[o]]);return r};const Y=n=>{let{title:e,content:r,prefixCls:t}=n;return i.createElement(i.Fragment,null,e&&i.createElement("div",{className:`${t}-title`},W(e)),i.createElement("div",{className:`${t}-inner-content`},W(r)))},I=i.forwardRef((n,e)=>{const{prefixCls:r,title:t,content:o,overlayClassName:l,placement:p="top",trigger:c="hover",mouseEnterDelay:g=.1,mouseLeaveDelay:f=.1,overlayStyle:u={}}=n,d=y(n,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),{getPrefixCls:S}=i.useContext(Z.E_),x=S("popover",r),[C,j]=J(x),z=S(),R=$()(l,j);return C(i.createElement(A.Z,Object.assign({placement:p,trigger:c,mouseEnterDelay:g,mouseLeaveDelay:f,overlayStyle:u},d,{prefixCls:x,overlayClassName:R,ref:e,overlay:t||o?i.createElement(Y,{prefixCls:x,title:t,content:o}):null,transitionName:(0,s.mL)(z,"zoom-big",d.transitionName),"data-popover-inject":!0})))});I._InternalPanelDoNotUseOrYouWillBeFired=le;var v=I},34041:function(pe,K,a){var G=a(94184),$=a.n(G),i=a(7752),W=a(10366),s=a(67294),Z=a(8745),A=a(33603),X=a(9708),L=a(53124),H=a(98866),q=a(88258),ee=a(98675),te=a(65223),ne=a(4173),oe=a(87244),re=a(13458),Q=a(78642),J=a(46163),ae=function(y,Y){var I={};for(var v in y)Object.prototype.hasOwnProperty.call(y,v)&&Y.indexOf(v)<0&&(I[v]=y[v]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,v=Object.getOwnPropertySymbols(y);n<v.length;n++)Y.indexOf(v[n])<0&&Object.prototype.propertyIsEnumerable.call(y,v[n])&&(I[v[n]]=y[v[n]]);return I};const se="SECRET_COMBOBOX_MODE_DO_NOT_USE",V=(y,Y)=>{var I,{prefixCls:v,bordered:n=!0,className:e,rootClassName:r,getPopupContainer:t,popupClassName:o,dropdownClassName:l,listHeight:p=256,placement:c,listItemHeight:g=24,size:f,disabled:u,notFoundContent:d,status:S,showArrow:x,builtinPlacements:C,dropdownMatchSelectWidth:j,popupMatchSelectWidth:z,direction:R,style:b}=y,O=ae(y,["prefixCls","bordered","className","rootClassName","getPopupContainer","popupClassName","dropdownClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","showArrow","builtinPlacements","dropdownMatchSelectWidth","popupMatchSelectWidth","direction","style"]);const{getPopupContainer:P,getPrefixCls:T,renderEmpty:U,direction:fe,virtual:ge,popupMatchSelectWidth:ve,popupOverflow:he,select:D}=s.useContext(L.E_),M=T("select",v),_=T(),m=R!=null?R:fe,{compactSize:Oe,compactItemClassnames:de}=(0,ne.ri)(M,m),[Se,B]=(0,oe.Z)(M),k=s.useMemo(()=>{const{mode:ce}=O;if(ce!=="combobox")return ce===se?"combobox":ce},[O.mode]),Ce=k==="multiple"||k==="tags",me=(0,Q.Z)(x),ue=(I=z!=null?z:j)!==null&&I!==void 0?I:ve,{status:Ee,hasFeedback:ie,isFormItemInput:F,feedbackIcon:h}=s.useContext(te.aM),E=(0,X.F)(Ee,S);let N;d!==void 0?N=d:k==="combobox"?N=null:N=(U==null?void 0:U("Select"))||s.createElement(q.Z,{componentName:"Select"});const{suffixIcon:Pe,itemIcon:be,removeIcon:Me,clearIcon:$e}=(0,J.Z)(Object.assign(Object.assign({},O),{multiple:Ce,hasFeedback:ie,feedbackIcon:h,showArrow:me,prefixCls:M})),Ie=(0,W.Z)(O,["suffixIcon","itemIcon"]),ze=$()(o||l,{[`${M}-dropdown-${m}`]:m==="rtl"},r,B),xe=(0,ee.Z)(ce=>{var ye;return(ye=f!=null?f:Oe)!==null&&ye!==void 0?ye:ce}),De=s.useContext(H.Z),Be=u!=null?u:De,Ne=$()({[`${M}-lg`]:xe==="large",[`${M}-sm`]:xe==="small",[`${M}-rtl`]:m==="rtl",[`${M}-borderless`]:!n,[`${M}-in-form-item`]:F},(0,X.Z)(M,E,ie),de,D==null?void 0:D.className,e,r,B),Re=s.useMemo(()=>c!==void 0?c:m==="rtl"?"bottomRight":"bottomLeft",[c,m]),We=(0,re.Z)(C,he);return Se(s.createElement(i.ZP,Object.assign({ref:Y,virtual:ge,showSearch:D==null?void 0:D.showSearch},Ie,{style:Object.assign(Object.assign({},D==null?void 0:D.style),b),dropdownMatchSelectWidth:ue,builtinPlacements:We,transitionName:(0,A.mL)(_,(0,A.q0)(c),O.transitionName),listHeight:p,listItemHeight:g,mode:k,prefixCls:M,placement:Re,direction:m,inputIcon:Pe,menuItemSelectedIcon:be,removeIcon:Me,clearIcon:$e,notFoundContent:N,className:Ne,getPopupContainer:t||P,dropdownClassName:ze,showArrow:ie||me,disabled:Be})))},w=s.forwardRef(V),le=(0,Z.Z)(w);w.SECRET_COMBOBOX_MODE_DO_NOT_USE=se,w.Option=i.Wx,w.OptGroup=i.Xo,w._InternalPanelDoNotUseOrYouWillBeFired=le,K.Z=w}}]);
