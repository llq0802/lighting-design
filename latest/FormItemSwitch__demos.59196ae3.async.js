(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[6979],{46349:function($,f,e){"use strict";e.r(f);var o=e(27424),s=e.n(o),S=e(4390),m=e(45418),v=e(85893),u=function(){var r=S.Z.useForm(),d=s()(r,1),M=d[0];return(0,v.jsxs)(S.Z,{name:"LFormItemSwitch",form:M,labelWidth:85,submitter:{buttonAlign:85},children:[(0,v.jsx)(m.Z,{required:!0,name:"state1",label:"\u5F00\u5173",tooltip:"\u7981\u6B62\u7A7A\u683C",switchProps:{className:"abvs"}}),(0,v.jsx)(m.Z,{unCheckedBg:"red",checkedBg:"blue",name:"state2",label:"\u5F00\u5173",tooltip:"\u7981\u6B62\u7A7A\u683C",contentInline:!0,contentAfter:(0,v.jsx)("div",{children:"\u540E\u9762"})})]})};f.default=u},45418:function($,f,e){"use strict";var o=e(42122),s=e.n(o),S=e(70215),m=e.n(S),v=e(72269),u=e(89889),h=e(84640),r=e(67294),d=e(85893),M=["checked","onChange","unCheckedBg","checkedBg","disabled","style"],C=["checkedBg","unCheckedBg","switchProps","required","disabled"],_=function(a){var x=a.checked,I=a.onChange,w=a.unCheckedBg,O=a.checkedBg,D=a.disabled,P=a.style,g=m()(a,M),B=(0,r.useMemo)(function(){return x?s()({backgroundColor:O},P):s()({backgroundColor:w},P)},[x,O,P,w]),K=(0,r.useCallback)(function(Z){g!=null&&g.onChange&&(g==null||g.onChange(Z)),I(Z)},[I,g]),U=(0,r.useContext)(u.e),H=U.disabled;return(0,d.jsx)(v.Z,s()(s()({disabled:D!=null?D:H},g),{},{style:B,checked:x,onChange:K}))},L=function(a){var x=a.checkedBg,I=a.unCheckedBg,w=a.switchProps,O=w===void 0?{}:w,D=a.required,P=a.disabled,g=m()(a,C);return(0,d.jsx)(h.Z,s()(s()({_isSelectType:!0,valuePropName:"checked",required:D},g),{},{children:(0,d.jsx)(_,s()({checkedBg:x,unCheckedBg:I,disabled:P},O))}))};f.Z=L},61117:function($,f,e){"use strict";var o=e(84640);f.Z=o.Z},4390:function($,f,e){"use strict";var o=e(42122),s=e.n(o),S=e(70215),m=e.n(S),v=e(26713),u=e(96108),h=e(61117),r=e(89889),d=e(85893),M=["submitter"],C=["render"],_=function(A){var a=A.submitter,x=m()(A,M),I=typeof a=="boolean"||!a?{}:a,w=I.render,O=m()(I,C),D=typeof a=="undefined"||a?s()({render:function(g){var B=Array.isArray(g)&&g.length>1?(0,d.jsx)(v.Z,{children:g}):g;return(0,d.jsx)(u.Z.Item,{colon:!1,className:"lightd-form-submitter",style:{marginBottom:0,paddingLeft:typeof(a==null?void 0:a.buttonAlign)=="number"?"".concat(a==null?void 0:a.buttonAlign,"px"):0},wrapperCol:I==null?void 0:I.wrapperCol,children:(0,d.jsx)("div",{style:{display:"flex",justifyContent:typeof(a==null?void 0:a.buttonAlign)=="string"?a==null?void 0:a.buttonAlign:"initial"},children:w?(0,d.jsx)(d.Fragment,{children:w(B,I)}):B})})}},O):!1;return(0,d.jsx)(r.Z,s()({submitter:D,contentRender:function(g,B){return(0,d.jsxs)(d.Fragment,{children:[g,B]})}},x))};_.Item=h.Z,_.List=u.Z.List,_.Provider=u.Z.Provider,_.ErrorList=u.Z.ErrorList,_.useForm=u.Z.useForm,_.useFormInstance=u.Z.useFormInstance,_.useWatch=u.Z.useWatch,f.Z=_},93812:function($,f,e){"use strict";e.d(f,{Z:function(){return u}});var o=e(67294),s=e(18446),S=e.n(s),m=function(h,r){return h===void 0&&(h=[]),r===void 0&&(r=[]),S()(h,r)},v=function(h){return function(r,d){var M=(0,o.useRef)(),C=(0,o.useRef)(0);(d===void 0||!m(d,M.current))&&(M.current=d,C.current+=1),h(r,[C.current])}},u=v(o.useEffect)},92652:function($,f,e){"use strict";e.d(f,{Z:function(){return u}});var o=e(70655),s=e(67294),S=function(){var h=(0,s.useRef)(!1);return(0,s.useEffect)(function(){return h.current=!1,function(){h.current=!0}},[]),h},m=S;function v(h){var r=m(),d=(0,o.CR)((0,s.useState)(h),2),M=d[0],C=d[1],_=(0,s.useCallback)(function(L){r.current||C(L)},[]);return[M,_]}var u=v},77598:function($,f,e){"use strict";e.d(f,{Z:function(){return m}});var o=e(67294),s=function(v){return function(u,h){var r=(0,o.useRef)(!1);v(function(){return function(){r.current=!1}},[]),v(function(){if(!r.current)r.current=!0;else return u()},h)}},S=null,m=s(o.useEffect)},72269:function($,f,e){"use strict";e.d(f,{Z:function(){return en}});var o=e(50888),s=e(94184),S=e.n(s),m=e(87462),v=e(4942),u=e(97685),h=e(91),r=e(67294),d=e(21770),M=e(15105),C=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],_=r.forwardRef(function(n,i){var t,c=n.prefixCls,l=c===void 0?"rc-switch":c,b=n.className,y=n.checked,N=n.defaultChecked,R=n.disabled,X=n.loadingIcon,Q=n.checkedChildren,G=n.unCheckedChildren,W=n.onClick,T=n.onChange,E=n.onKeyDown,V=(0,h.Z)(n,C),J=(0,d.Z)(!1,{value:y,defaultValue:N}),z=(0,u.Z)(J,2),j=z[0],tn=z[1];function Y(p,q){var F=j;return R||(F=p,tn(F),T==null||T(F,q)),F}function an(p){p.which===M.Z.LEFT?Y(!1,p):p.which===M.Z.RIGHT&&Y(!0,p),E==null||E(p)}function rn(p){var q=Y(!j,p);W==null||W(q,p)}var sn=S()(l,b,(t={},(0,v.Z)(t,"".concat(l,"-checked"),j),(0,v.Z)(t,"".concat(l,"-disabled"),R),t));return r.createElement("button",(0,m.Z)({},V,{type:"button",role:"switch","aria-checked":j,disabled:R,className:sn,ref:i,onKeyDown:an,onClick:rn}),X,r.createElement("span",{className:"".concat(l,"-inner")},r.createElement("span",{className:"".concat(l,"-inner-checked")},Q),r.createElement("span",{className:"".concat(l,"-inner-unchecked")},G)))});_.displayName="Switch";var L=_,A=e(53124),a=e(98866),x=e(97647),I=e(45353),w=e(10274),O=e(67968),D=e(45503),P=e(14747);const g=n=>{const{componentCls:i}=n,t=`${i}-inner`;return{[i]:{[`&${i}-small`]:{minWidth:n.switchMinWidthSM,height:n.switchHeightSM,lineHeight:`${n.switchHeightSM}px`,[`${i}-inner`]:{paddingInlineStart:n.switchInnerMarginMaxSM,paddingInlineEnd:n.switchInnerMarginMinSM,[`${t}-checked`]:{marginInlineStart:`calc(-100% + ${n.switchPinSizeSM+n.switchPadding*2}px - ${n.switchInnerMarginMaxSM*2}px)`,marginInlineEnd:`calc(100% - ${n.switchPinSizeSM+n.switchPadding*2}px + ${n.switchInnerMarginMaxSM*2}px)`},[`${t}-unchecked`]:{marginTop:-n.switchHeightSM,marginInlineStart:0,marginInlineEnd:0}},[`${i}-handle`]:{width:n.switchPinSizeSM,height:n.switchPinSizeSM},[`${i}-loading-icon`]:{top:(n.switchPinSizeSM-n.switchLoadingIconSize)/2,fontSize:n.switchLoadingIconSize},[`&${i}-checked`]:{[`${i}-inner`]:{paddingInlineStart:n.switchInnerMarginMinSM,paddingInlineEnd:n.switchInnerMarginMaxSM,[`${t}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${t}-unchecked`]:{marginInlineStart:`calc(100% - ${n.switchPinSizeSM+n.switchPadding*2}px + ${n.switchInnerMarginMaxSM*2}px)`,marginInlineEnd:`calc(-100% + ${n.switchPinSizeSM+n.switchPadding*2}px - ${n.switchInnerMarginMaxSM*2}px)`}},[`${i}-handle`]:{insetInlineStart:`calc(100% - ${n.switchPinSizeSM+n.switchPadding}px)`}},[`&:not(${i}-disabled):active`]:{[`&:not(${i}-checked) ${t}`]:{[`${t}-unchecked`]:{marginInlineStart:n.marginXXS/2,marginInlineEnd:-n.marginXXS/2}},[`&${i}-checked ${t}`]:{[`${t}-checked`]:{marginInlineStart:-n.marginXXS/2,marginInlineEnd:n.marginXXS/2}}}}}}},B=n=>{const{componentCls:i}=n;return{[i]:{[`${i}-loading-icon${n.iconCls}`]:{position:"relative",top:(n.switchPinSize-n.fontSize)/2,color:n.switchLoadingIconColor,verticalAlign:"top"},[`&${i}-checked ${i}-loading-icon`]:{color:n.switchColor}}}},K=n=>{const{componentCls:i}=n,t=`${i}-handle`;return{[i]:{[t]:{position:"absolute",top:n.switchPadding,insetInlineStart:n.switchPadding,width:n.switchPinSize,height:n.switchPinSize,transition:`all ${n.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:n.colorWhite,borderRadius:n.switchPinSize/2,boxShadow:n.switchHandleShadow,transition:`all ${n.switchDuration} ease-in-out`,content:'""'}},[`&${i}-checked ${t}`]:{insetInlineStart:`calc(100% - ${n.switchPinSize+n.switchPadding}px)`},[`&:not(${i}-disabled):active`]:{[`${t}::before`]:{insetInlineEnd:n.switchHandleActiveInset,insetInlineStart:0},[`&${i}-checked ${t}::before`]:{insetInlineEnd:0,insetInlineStart:n.switchHandleActiveInset}}}}},U=n=>{const{componentCls:i}=n,t=`${i}-inner`;return{[i]:{[t]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:n.switchInnerMarginMax,paddingInlineEnd:n.switchInnerMarginMin,transition:`padding-inline-start ${n.switchDuration} ease-in-out, padding-inline-end ${n.switchDuration} ease-in-out`,[`${t}-checked, ${t}-unchecked`]:{display:"block",color:n.colorTextLightSolid,fontSize:n.fontSizeSM,transition:`margin-inline-start ${n.switchDuration} ease-in-out, margin-inline-end ${n.switchDuration} ease-in-out`,pointerEvents:"none"},[`${t}-checked`]:{marginInlineStart:`calc(-100% + ${n.switchPinSize+n.switchPadding*2}px - ${n.switchInnerMarginMax*2}px)`,marginInlineEnd:`calc(100% - ${n.switchPinSize+n.switchPadding*2}px + ${n.switchInnerMarginMax*2}px)`},[`${t}-unchecked`]:{marginTop:-n.switchHeight,marginInlineStart:0,marginInlineEnd:0}},[`&${i}-checked ${t}`]:{paddingInlineStart:n.switchInnerMarginMin,paddingInlineEnd:n.switchInnerMarginMax,[`${t}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${t}-unchecked`]:{marginInlineStart:`calc(100% - ${n.switchPinSize+n.switchPadding*2}px + ${n.switchInnerMarginMax*2}px)`,marginInlineEnd:`calc(-100% + ${n.switchPinSize+n.switchPadding*2}px - ${n.switchInnerMarginMax*2}px)`}},[`&:not(${i}-disabled):active`]:{[`&:not(${i}-checked) ${t}`]:{[`${t}-unchecked`]:{marginInlineStart:n.switchPadding*2,marginInlineEnd:-n.switchPadding*2}},[`&${i}-checked ${t}`]:{[`${t}-checked`]:{marginInlineStart:-n.switchPadding*2,marginInlineEnd:n.switchPadding*2}}}}}},H=n=>{const{componentCls:i}=n;return{[i]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,P.Wf)(n)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:n.switchMinWidth,height:n.switchHeight,lineHeight:`${n.switchHeight}px`,verticalAlign:"middle",background:n.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${n.motionDurationMid}`,userSelect:"none",[`&:hover:not(${i}-disabled)`]:{background:n.colorTextTertiary}}),(0,P.Qy)(n)),{[`&${i}-checked`]:{background:n.switchColor,[`&:hover:not(${i}-disabled)`]:{background:n.colorPrimaryHover}},[`&${i}-loading, &${i}-disabled`]:{cursor:"not-allowed",opacity:n.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${i}-rtl`]:{direction:"rtl"}})}};var Z=(0,O.Z)("Switch",n=>{const i=n.fontSize*n.lineHeight,t=n.controlHeight/2,c=2,l=i-c*2,b=t-c*2,y=(0,D.TS)(n,{switchMinWidth:l*2+c*4,switchHeight:i,switchDuration:n.motionDurationMid,switchColor:n.colorPrimary,switchDisabledOpacity:n.opacityLoading,switchInnerMarginMin:l/2,switchInnerMarginMax:l+c+c*2,switchPadding:c,switchPinSize:l,switchBg:n.colorBgContainer,switchMinWidthSM:b*2+c*2,switchHeightSM:t,switchInnerMarginMinSM:b/2,switchInnerMarginMaxSM:b+c+c*2,switchPinSizeSM:b,switchHandleShadow:`0 2px 4px 0 ${new w.C("#00230b").setAlpha(.2).toRgbString()}`,switchLoadingIconSize:n.fontSizeIcon*.75,switchLoadingIconColor:`rgba(0, 0, 0, ${n.opacityLoading})`,switchHandleActiveInset:"-30%"});return[H(y),U(y),K(y),B(y),g(y)]}),nn=function(n,i){var t={};for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&i.indexOf(c)<0&&(t[c]=n[c]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,c=Object.getOwnPropertySymbols(n);l<c.length;l++)i.indexOf(c[l])<0&&Object.prototype.propertyIsEnumerable.call(n,c[l])&&(t[c[l]]=n[c[l]]);return t};const k=r.forwardRef((n,i)=>{var{prefixCls:t,size:c,disabled:l,loading:b,className:y,rootClassName:N}=n,R=nn(n,["prefixCls","size","disabled","loading","className","rootClassName"]);const{getPrefixCls:X,direction:Q}=r.useContext(A.E_),G=r.useContext(x.Z),W=r.useContext(a.Z),T=(l!=null?l:W)||b,E=X("switch",t),V=r.createElement("div",{className:`${E}-handle`},b&&r.createElement(o.Z,{className:`${E}-loading-icon`})),[J,z]=Z(E),j=S()({[`${E}-small`]:(c||G)==="small",[`${E}-loading`]:b,[`${E}-rtl`]:Q==="rtl"},y,N,z);return J(r.createElement(I.Z,null,r.createElement(L,Object.assign({},R,{prefixCls:E,className:j,disabled:T,ref:i,loadingIcon:V}))))});k.__ANT_SWITCH=!0;var en=k},18446:function($,f,e){var o=e(90939);function s(S,m){return o(S,m)}$.exports=s}}]);
