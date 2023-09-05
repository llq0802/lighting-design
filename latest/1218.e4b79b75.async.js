"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[1218],{21478:function(N,S,r){r.d(S,{Z:function(){return B}});var F=r(42122),C=r.n(F),O=r(70215),u=r.n(O),D=r(89889),d=r(84640),y=r(33168),h=r(67294),m=r(69677),$=r(85893),W=["value","onChange","type","disabledWhiteSpace"],P=function(s){var p=s.value,i=s.onChange,c=s.type,R=s.disabledWhiteSpace,e=R===void 0?!1:R,g=u()(s,W),o=(0,h.useMemo)(function(){return e},[e]),n=(0,h.useMemo)(function(){return c==="phone"||c==="idCard"||c==="bankCard"?"text":c},[c]),t=(0,h.useMemo)(function(){return c==="phone"?11:c==="idCard"?18:void 0},[c]),a=(0,h.useCallback)(function(f){var j=f.target,l=j.value;if((c==="phone"||c==="bankCard")&&window.isNaN(j.value)&&(l=l.replace(/.*/g,"")),c==="idCard"){var E,M,L;l.length===18&&window.isNaN((E=l)===null||E===void 0?void 0:E.at(-1))&&((M=l)===null||M===void 0||(L=M.at(-1))===null||L===void 0?void 0:L.toLocaleLowerCase())!=="x"?l=l.slice(0,-1):l.length<18&&window.isNaN(l)&&(l=l.replace(/.*/g,""))}o&&(l=l.replace(/\s+/g,"")),i==null||i(l)},[i,o,c]);return(0,$.jsx)(m.Z,C()(C()({allowClear:!0,autoComplete:"off",type:n,maxLength:t},g),{},{value:p,onChange:a}))},K=P,b=r(40964);function v(x,s,p){var i=void 0;return x==="phone"&&(i=[{required:s,message:p||"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7\u683C\u5F0F!",pattern:b.Dd}]),x==="idCard"&&(i=[{required:s,message:p||"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u8EAB\u4EFD\u8BC1\u683C\u5F0F!",pattern:b.LE}]),x==="url"&&(i=[{required:s,message:p||"\u8BF7\u8F93\u5165\u6B63\u786E\u7684URL\u7F51\u5740\u683C\u5F0F!",pattern:b.Kp}]),x==="bankCard"&&(i=[{required:s,message:p||"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u94F6\u884C\u5361\u683C\u5F0F!",pattern:b.Wj}]),x==="email"&&(i=[{required:s,message:p||"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u683C\u5F0F!",pattern:b.sM}]),x==="chinese"&&(i=[{required:s,message:p||"\u8BF7\u8F93\u5165\u4E2D\u6587\u6C49\u5B57!",pattern:b.Zd}]),i}var z=["type","disabledWhiteSpace","inputProps","required","disabled","placeholder"],I=function(s){var p,i=s.type,c=s.disabledWhiteSpace,R=c===void 0?!0:c,e=s.inputProps,g=e===void 0?{}:e,o=s.required,n=s.disabled,t=s.placeholder,a=u()(s,z),f=(0,y.JY)({placeholder:t,restProps:a}),j=(0,h.useContext)(D.e),l=j.disabled,E=v(i,!!o,(a==null||(p=a.messageVariables)===null||p===void 0?void 0:p.label)||f);return(0,$.jsx)(d.Z,C()(C()({placeholder:f,required:o,rules:E,validateTrigger:"onBlur"},a),{},{children:(0,$.jsx)(K,C()({disabled:n!=null?n:l,placeholder:f,type:i,disabledWhiteSpace:R},g))}))},B=I},61117:function(N,S,r){var F=r(84640);S.Z=F.Z},4390:function(N,S,r){var F=r(42122),C=r.n(F),O=r(70215),u=r.n(O),D=r(42075),d=r(638),y=r(61117),h=r(89889),m=r(85893),$=["submitter"],W=["render"],P=function(b){var v=b.submitter,z=u()(b,$),I=typeof v=="boolean"||!v?{}:v,B=I.render,x=u()(I,W),s=typeof v=="undefined"||v?C()({render:function(i){var c=Array.isArray(i)&&i.length>1?(0,m.jsx)(D.Z,{children:i}):i;return(0,m.jsx)(d.Z.Item,{colon:!1,className:"lightd-form-submitter",style:{marginBottom:0,paddingLeft:typeof(v==null?void 0:v.buttonAlign)=="number"?"".concat(v==null?void 0:v.buttonAlign,"px"):0},wrapperCol:I==null?void 0:I.wrapperCol,children:(0,m.jsx)("div",{style:{display:"flex",justifyContent:typeof(v==null?void 0:v.buttonAlign)=="string"?v==null?void 0:v.buttonAlign:"initial"},children:B?(0,m.jsx)(m.Fragment,{children:B(c,I)}):c})})}},x):!1;return(0,m.jsx)(h.Z,C()({submitter:s,contentRender:function(i,c){return(0,m.jsxs)(m.Fragment,{children:[i,c]})}},z))};P.Item=y.Z,P.List=d.Z.List,P.Provider=d.Z.Provider,P.ErrorList=d.Z.ErrorList,P.useForm=d.Z.useForm,P.useFormInstance=d.Z.useFormInstance,P.useWatch=d.Z.useWatch,S.Z=P},40964:function(N,S,r){r.d(S,{Ao:function(){return C},Dd:function(){return O},Kp:function(){return y},LE:function(){return h},Wj:function(){return u},Zd:function(){return D},nb:function(){return F},sM:function(){return d},v5:function(){return m}});var F=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],C=/^\S*(?=\S{8,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[+-.~!@#$%^&*? ])\S*$/,O=/^(?:(?:\+|00)86)?1\d{10}$/,u=/^[1-9]\d{9,29}$/,D=/^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/,d=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,y=/^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/,h=/^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/,m=".jpg, .jpeg, .png, .gif, .webp, .bmp"},69760:function(N,S,r){r.d(S,{Z:function(){return u}});var F=r(97937),C=r(67294);function O(D,d,y){return typeof D=="boolean"?D:d===void 0?!!y:d!==!1&&d!==null}function u(D,d,y){let h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:C.createElement(F.Z,null),m=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1;if(!O(D,d,m))return[!1,null];const W=typeof d=="boolean"||d===void 0||d===null?h:d;return[!0,y?y(W):W]}},51904:function(N,S,r){r.d(S,{Z:function(){return R}});var F=r(97937),C=r(94184),O=r.n(C),u=r(67294),D=r(98787),d=r(69760),y=r(45353),h=r(53124);function m(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}var $=r(14747),W=r(98719),P=r(67968),K=r(45503);const b=(e,g,o)=>{const n=m(o);return{[`${e.componentCls}-${g}`]:{color:e[`color${o}`],background:e[`color${n}Bg`],borderColor:e[`color${n}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}},v=e=>(0,W.Z)(e,(g,o)=>{let{textColor:n,lightBorderColor:t,lightColor:a,darkColor:f}=o;return{[`${e.componentCls}-${g}`]:{color:n,background:a,borderColor:t,"&-inverse":{color:e.colorTextLightSolid,background:f,borderColor:f},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}}),z=e=>{const{paddingXXS:g,lineWidth:o,tagPaddingHorizontal:n,componentCls:t}=e,a=n-o,f=g-o;return{[t]:Object.assign(Object.assign({},(0,$.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:a,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${t}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${t}-close-icon`]:{marginInlineStart:f,color:e.colorTextDescription,fontSize:e.tagIconSize,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${t}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${t}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:a}}),[`${t}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}};var I=(0,P.Z)("Tag",e=>{const{lineWidth:g,fontSizeIcon:o}=e,n=e.fontSizeSM,t=`${e.lineHeightSM*n}px`,a=(0,K.TS)(e,{tagFontSize:n,tagLineHeight:t,tagIconSize:o-2*g,tagPaddingHorizontal:8,tagBorderlessBg:e.colorFillTertiary});return[z(a),v(a),b(a,"success","Success"),b(a,"processing","Info"),b(a,"error","Error"),b(a,"warning","Warning")]},e=>({defaultBg:e.colorFillQuaternary,defaultColor:e.colorText})),B=function(e,g){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&g.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)g.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(o[n[t]]=e[n[t]]);return o},s=e=>{const{prefixCls:g,className:o,checked:n,onChange:t,onClick:a}=e,f=B(e,["prefixCls","className","checked","onChange","onClick"]),{getPrefixCls:j}=u.useContext(h.E_),l=T=>{t==null||t(!n),a==null||a(T)},E=j("tag",g),[M,L]=I(E),U=O()(E,`${E}-checkable`,{[`${E}-checkable-checked`]:n},o,L);return M(u.createElement("span",Object.assign({},f,{className:U,onClick:l})))},p=function(e,g){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&g.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)g.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(o[n[t]]=e[n[t]]);return o};const i=(e,g)=>{const{prefixCls:o,className:n,rootClassName:t,style:a,children:f,icon:j,color:l,onClose:E,closeIcon:M,closable:L,bordered:U=!0}=e,T=p(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:Q,direction:V,tag:Z}=u.useContext(h.E_),[w,G]=u.useState(!0);u.useEffect(()=>{"visible"in T&&G(T.visible)},[T.visible]);const H=(0,D.o2)(l)||(0,D.yT)(l),k=Object.assign(Object.assign({backgroundColor:l&&!H?l:void 0},Z==null?void 0:Z.style),a),A=Q("tag",o),[q,ee]=I(A),re=O()(A,Z==null?void 0:Z.className,{[`${A}-${l}`]:H,[`${A}-has-color`]:l&&!H,[`${A}-hidden`]:!w,[`${A}-rtl`]:V==="rtl",[`${A}-borderless`]:!U},n,t,ee),X=_=>{_.stopPropagation(),E==null||E(_),!_.defaultPrevented&&G(!1)},[,ne]=(0,d.Z)(L,M,_=>_===null?u.createElement(F.Z,{className:`${A}-close-icon`,onClick:X}):u.createElement("span",{className:`${A}-close-icon`,onClick:X},_),null,!1),te=typeof T.onClick=="function"||f&&f.type==="a",Y=j||null,oe=Y?u.createElement(u.Fragment,null,Y,f&&u.createElement("span",null,f)):f,J=u.createElement("span",Object.assign({},T,{ref:g,className:re,style:k}),oe,ne);return q(te?u.createElement(y.Z,null,J):J)},c=u.forwardRef(i);c.CheckableTag=s;var R=c}}]);