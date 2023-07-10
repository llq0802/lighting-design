"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[1218],{21478:function(_,x,n){n.d(x,{Z:function(){return N}});var O=n(42122),b=n.n(O),$=n(70215),d=n.n($),A=n(89889),h=n(84640),j=n(33168),y=n(67294),C=n(60296),M=n(85893),Z=["value","onChange","type","disabledWhiteSpace"],D=function(s){var f=s.value,a=s.onChange,u=s.type,e=s.disabledWhiteSpace,i=e===void 0?!1:e,l=d()(s,Z),r=(0,y.useMemo)(function(){return i},[i]),t=(0,y.useMemo)(function(){return u==="phone"||u==="idCard"||u==="bankCard"?"text":u},[u]),p=(0,y.useMemo)(function(){return u==="phone"?11:u==="idCard"?18:void 0},[u]),g=(0,y.useCallback)(function(F){var m=F.target,o=m.value;if((u==="phone"||u==="bankCard")&&window.isNaN(m.value)&&(o=o.replace(/.*/g,"")),u==="idCard"){var v,W,T;o.length===18&&window.isNaN((v=o)===null||v===void 0?void 0:v.at(-1))&&((W=o)===null||W===void 0||(T=W.at(-1))===null||T===void 0?void 0:T.toLocaleLowerCase())!=="x"?o=o.slice(0,-1):o.length<18&&window.isNaN(o)&&(o=o.replace(/.*/g,""))}r&&(o=o.replace(/\s+/g,"")),a==null||a(o)},[a,r,u]);return(0,M.jsx)(C.Z,b()(b()({allowClear:!0,autoComplete:"off",type:t,maxLength:p},l),{},{value:f,onChange:g}))},L=D,S=n(40964);function c(E,s,f){var a=void 0;return E==="phone"&&(a=[{required:s,message:f||"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7\u683C\u5F0F!",pattern:S.Dd}]),E==="idCard"&&(a=[{required:s,message:f||"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u8EAB\u4EFD\u8BC1\u683C\u5F0F!",pattern:S.LE}]),E==="url"&&(a=[{required:s,message:f||"\u8BF7\u8F93\u5165\u6B63\u786E\u7684URL\u7F51\u5740\u683C\u5F0F!",pattern:S.Kp}]),E==="bankCard"&&(a=[{required:s,message:f||"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u94F6\u884C\u5361\u683C\u5F0F!",pattern:S.Wj}]),E==="email"&&(a=[{required:s,message:f||"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u683C\u5F0F!",pattern:S.sM}]),E==="chinese"&&(a=[{required:s,message:f||"\u8BF7\u8F93\u5165\u4E2D\u6587\u6C49\u5B57!",pattern:S.Zd}]),a}var R=["type","disabledWhiteSpace","inputProps","required","disabled","placeholder"],P=function(s){var f,a=s.type,u=s.disabledWhiteSpace,e=u===void 0?!0:u,i=s.inputProps,l=i===void 0?{}:i,r=s.required,t=s.disabled,p=s.placeholder,g=d()(s,R),F=(0,j.JY)({placeholder:p,restProps:g}),m=(0,y.useContext)(A.e),o=m.disabled,v=c(a,!!r,(g==null||(f=g.messageVariables)===null||f===void 0?void 0:f.label)||F);return(0,M.jsx)(h.Z,b()(b()({placeholder:F,required:r,rules:v,validateTrigger:"onBlur"},g),{},{children:(0,M.jsx)(L,b()({disabled:t!=null?t:o,placeholder:F,type:a,disabledWhiteSpace:e},l))}))},N=P},61117:function(_,x,n){var O=n(84640);x.Z=O.Z},4390:function(_,x,n){var O=n(42122),b=n.n(O),$=n(70215),d=n.n($),A=n(26713),h=n(638),j=n(61117),y=n(89889),C=n(85893),M=["submitter"],Z=["render"],D=function(S){var c=S.submitter,R=d()(S,M),P=typeof c=="boolean"||!c?{}:c,N=P.render,E=d()(P,Z),s=typeof c=="undefined"||c?b()({render:function(a){var u=Array.isArray(a)&&a.length>1?(0,C.jsx)(A.Z,{children:a}):a;return(0,C.jsx)(h.Z.Item,{colon:!1,className:"lightd-form-submitter",style:{marginBottom:0,paddingLeft:typeof(c==null?void 0:c.buttonAlign)=="number"?"".concat(c==null?void 0:c.buttonAlign,"px"):0},wrapperCol:P==null?void 0:P.wrapperCol,children:(0,C.jsx)("div",{style:{display:"flex",justifyContent:typeof(c==null?void 0:c.buttonAlign)=="string"?c==null?void 0:c.buttonAlign:"initial"},children:N?(0,C.jsx)(C.Fragment,{children:N(u,P)}):u})})}},E):!1;return(0,C.jsx)(y.Z,b()({submitter:s,contentRender:function(a,u){return(0,C.jsxs)(C.Fragment,{children:[a,u]})}},R))};D.Item=j.Z,D.List=h.Z.List,D.Provider=h.Z.Provider,D.ErrorList=h.Z.ErrorList,D.useForm=h.Z.useForm,D.useFormInstance=h.Z.useFormInstance,D.useWatch=h.Z.useWatch,x.Z=D},40964:function(_,x,n){n.d(x,{Ao:function(){return b},Dd:function(){return $},Kp:function(){return j},LE:function(){return y},Wj:function(){return d},Zd:function(){return A},nb:function(){return O},sM:function(){return h},v5:function(){return C}});var O=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],b=/^\S*(?=\S{8,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[+-.~!@#$%^&*? ])\S*$/,$=/^(?:(?:\+|00)86)?1\d{10}$/,d=/^[1-9]\d{9,29}$/,A=/^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/,h=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,j=/^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/,y=/^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/,C=".jpg, .jpeg, .png, .gif, .webp, .bmp"},51904:function(_,x,n){n.d(x,{Z:function(){return u}});var O=n(97937),b=n(94184),$=n.n(b),d=n(67294),A=n(98787),h=n(45353),j=n(53124);function y(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}var C=n(14747),M=n(98719),Z=n(67968),D=n(45503);const L=(e,i,l)=>{const r=y(l);return{[`${e.componentCls}-${i}`]:{color:e[`color${l}`],background:e[`color${r}Bg`],borderColor:e[`color${r}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}},S=e=>(0,M.Z)(e,(i,l)=>{let{textColor:r,lightBorderColor:t,lightColor:p,darkColor:g}=l;return{[`${e.componentCls}-${i}`]:{color:r,background:p,borderColor:t,"&-inverse":{color:e.colorTextLightSolid,background:g,borderColor:g},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}}),c=e=>{const{paddingXXS:i,lineWidth:l,tagPaddingHorizontal:r,componentCls:t}=e,p=r-l,g=i-l;return{[t]:Object.assign(Object.assign({},(0,C.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:p,fontSize:e.tagFontSize,lineHeight:`${e.tagLineHeight}px`,whiteSpace:"nowrap",background:e.tagDefaultBg,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",[`&${t}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.tagDefaultColor},[`${t}-close-icon`]:{marginInlineStart:g,color:e.colorTextDescription,fontSize:e.tagIconSize,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${t}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${t}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:p}}),[`${t}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}};var R=(0,Z.Z)("Tag",e=>{const{fontSize:i,lineHeight:l,lineWidth:r,fontSizeIcon:t}=e,p=Math.round(i*l),g=e.fontSizeSM,F=p-r*2,m=e.colorFillQuaternary,o=e.colorText,v=(0,D.TS)(e,{tagFontSize:g,tagLineHeight:F,tagDefaultBg:m,tagDefaultColor:o,tagIconSize:t-2*r,tagPaddingHorizontal:8,tagBorderlessBg:e.colorFillTertiary});return[c(v),S(v),L(v,"success","Success"),L(v,"processing","Info"),L(v,"error","Error"),L(v,"warning","Warning")]}),P=function(e,i){var l={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(l[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)i.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(l[r[t]]=e[r[t]]);return l},E=e=>{const{prefixCls:i,className:l,checked:r,onChange:t,onClick:p}=e,g=P(e,["prefixCls","className","checked","onChange","onClick"]),{getPrefixCls:F}=d.useContext(j.E_),m=B=>{t==null||t(!r),p==null||p(B)},o=F("tag",i),[v,W]=R(o),T=$()(o,{[`${o}-checkable`]:!0,[`${o}-checkable-checked`]:r},l,W);return v(d.createElement("span",Object.assign({},g,{className:T,onClick:m})))},s=function(e,i){var l={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(l[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)i.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(l[r[t]]=e[r[t]]);return l};const f=(e,i)=>{const{prefixCls:l,className:r,rootClassName:t,style:p,children:g,icon:F,color:m,onClose:o,closeIcon:v,closable:W=!1,bordered:T=!0}=e,B=s(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:Y,direction:J}=d.useContext(j.E_),[Q,H]=d.useState(!0);d.useEffect(()=>{"visible"in B&&H(B.visible)},[B.visible]);const z=(0,A.o2)(m)||(0,A.yT)(m),V=Object.assign({backgroundColor:m&&!z?m:void 0},p),I=Y("tag",l),[w,k]=R(I),q=$()(I,{[`${I}-${m}`]:z,[`${I}-has-color`]:m&&!z,[`${I}-hidden`]:!Q,[`${I}-rtl`]:J==="rtl",[`${I}-borderless`]:!T},r,t,k),K=U=>{U.stopPropagation(),o==null||o(U),!U.defaultPrevented&&H(!1)},ee=d.useMemo(()=>W?v?d.createElement("span",{className:`${I}-close-icon`,onClick:K},v):d.createElement(O.Z,{className:`${I}-close-icon`,onClick:K}):null,[W,v,I,K]),re=typeof B.onClick=="function"||g&&g.type==="a",G=F||null,ne=G?d.createElement(d.Fragment,null,G,d.createElement("span",null,g)):g,X=d.createElement("span",Object.assign({},B,{ref:i,className:q,style:V}),ne,ee);return w(re?d.createElement(h.Z,null,X):X)},a=d.forwardRef(f);a.CheckableTag=E;var u=a}}]);
