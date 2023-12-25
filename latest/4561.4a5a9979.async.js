"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[4561],{25035:function(ve,X,i){i.d(X,{Z:function(){return b}});var d=i(87462),Y=i(67294),T={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"},J=T,o=i(13401),ee=function($,p){return Y.createElement(o.Z,(0,d.Z)({},$,{ref:p,icon:J}))},b=Y.forwardRef(ee)},42170:function(ve,X,i){var d=i(67294),Y=i(44370);X.Z=(0,Y.a)(d.useEffect)},74443:function(ve,X,i){i.d(X,{ZP:function(){return ee},c4:function(){return T}});var d=i(67294),Y=i(29691);const T=["xxl","xl","lg","md","sm","xs"],J=j=>({xs:`(max-width: ${j.screenXSMax}px)`,sm:`(min-width: ${j.screenSM}px)`,md:`(min-width: ${j.screenMD}px)`,lg:`(min-width: ${j.screenLG}px)`,xl:`(min-width: ${j.screenXL}px)`,xxl:`(min-width: ${j.screenXXL}px)`}),o=j=>{const $=j,p=[].concat(T).reverse();return p.forEach((a,y)=>{const u=a.toUpperCase(),m=`screen${u}Min`,c=`screen${u}`;if(!($[m]<=$[c]))throw new Error(`${m}<=${c} fails : !(${$[m]}<=${$[c]})`);if(y<p.length-1){const I=`screen${u}Max`;if(!($[c]<=$[I]))throw new Error(`${c}<=${I} fails : !(${$[c]}<=${$[I]})`);const ne=`screen${p[y+1].toUpperCase()}Min`;if(!($[I]<=$[ne]))throw new Error(`${I}<=${ne} fails : !(${$[I]}<=${$[ne]})`)}}),j};function ee(){const[,j]=(0,Y.Z)(),$=J(o(j));return d.useMemo(()=>{const p=new Map;let a=-1,y={};return{matchHandlers:{},dispatch(u){return y=u,p.forEach(m=>m(y)),p.size>=1},subscribe(u){return p.size||this.register(),a+=1,p.set(a,u),u(y),a},unsubscribe(u){p.delete(u),p.size||this.unregister()},unregister(){Object.keys($).forEach(u=>{const m=$[u],c=this.matchHandlers[m];c==null||c.mql.removeListener(c==null?void 0:c.listener)}),p.clear()},register(){Object.keys($).forEach(u=>{const m=$[u],c=q=>{let{matches:ne}=q;this.dispatch(Object.assign(Object.assign({},y),{[u]:ne}))},I=window.matchMedia(m);I.addListener(c),this.matchHandlers[m]={mql:I,listener:c},c(I)})},responsiveMap:$}},[j])}const b=(j,$)=>{if($&&typeof $=="object")for(let p=0;p<T.length;p++){const a=T[p];if(j[a]&&$[a]!==void 0)return $[a]}}},99859:function(ve,X,i){i.d(X,{Z:function(){return kt}});var d=i(74902),Y=i(94184),T=i.n(Y),J=i(82225),o=i(67294),ee=i(33603),b=i(65223);function j(e){const[t,n]=o.useState(e);return o.useEffect(()=>{const r=setTimeout(()=>{n(e)},e.length?0:10);return()=>{clearTimeout(r)}},[e]),t}var $=i(14747),p=i(50438),a=i(33507),y=i(45503),u=i(67968),c=e=>{const{componentCls:t}=e,n=`${t}-show-help`,r=`${t}-show-help-item`;return{[n]:{transition:`opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&-appear, &-enter":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}},[r]:{overflow:"hidden",transition:`height ${e.motionDurationSlow} ${e.motionEaseInOut},
                     opacity ${e.motionDurationSlow} ${e.motionEaseInOut},
                     transform ${e.motionDurationSlow} ${e.motionEaseInOut} !important`,[`&${r}-appear, &${r}-enter`]:{transform:"translateY(-5px)",opacity:0,["&-active"]:{transform:"translateY(0)",opacity:1}},[`&${r}-leave-active`]:{transform:"translateY(-5px)"}}}}};const I=e=>({legend:{display:"block",width:"100%",marginBottom:e.marginLG,padding:0,color:e.colorTextDescription,fontSize:e.fontSizeLG,lineHeight:"inherit",border:0,borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},label:{fontSize:e.fontSize},'input[type="search"]':{boxSizing:"border-box"},'input[type="radio"], input[type="checkbox"]':{lineHeight:"normal"},'input[type="file"]':{display:"block"},'input[type="range"]':{display:"block",width:"100%"},"select[multiple], select[size]":{height:"auto"},[`input[type='file']:focus,
  input[type='radio']:focus,
  input[type='checkbox']:focus`]:{outline:0,boxShadow:`0 0 0 ${e.controlOutlineWidth}px ${e.controlOutline}`},output:{display:"block",paddingTop:15,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight}}),q=(e,t)=>{const{formItemCls:n}=e;return{[n]:{[`${n}-label > label`]:{height:t},[`${n}-control-input`]:{minHeight:t}}}},ne=e=>{const{componentCls:t}=e;return{[e.componentCls]:Object.assign(Object.assign(Object.assign({},(0,$.Wf)(e)),I(e)),{[`${t}-text`]:{display:"inline-block",paddingInlineEnd:e.paddingSM},"&-small":Object.assign({},q(e,e.controlHeightSM)),"&-large":Object.assign({},q(e,e.controlHeightLG))})}},be=e=>{const{formItemCls:t,iconCls:n,componentCls:r,rootPrefixCls:l,labelRequiredMarkColor:s,labelColor:f,labelFontSize:g,labelHeight:v,labelColonMarginInlineStart:x,labelColonMarginInlineEnd:w,itemMarginBottom:C}=e;return{[t]:Object.assign(Object.assign({},(0,$.Wf)(e)),{marginBottom:C,verticalAlign:"top","&-with-help":{transition:"none"},[`&-hidden,
        &-hidden.${l}-row`]:{display:"none"},"&-has-warning":{[`${t}-split`]:{color:e.colorError}},"&-has-error":{[`${t}-split`]:{color:e.colorWarning}},[`${t}-label`]:{flexGrow:0,overflow:"hidden",whiteSpace:"nowrap",textAlign:"end",verticalAlign:"middle","&-left":{textAlign:"start"},"&-wrap":{overflow:"unset",lineHeight:`${e.lineHeight} - 0.25em`,whiteSpace:"unset"},"> label":{position:"relative",display:"inline-flex",alignItems:"center",maxWidth:"100%",height:v,color:f,fontSize:g,[`> ${n}`]:{fontSize:e.fontSize,verticalAlign:"top"},[`&${t}-required:not(${t}-required-mark-optional)::before`]:{display:"inline-block",marginInlineEnd:e.marginXXS,color:s,fontSize:e.fontSize,fontFamily:"SimSun, sans-serif",lineHeight:1,content:'"*"',[`${r}-hide-required-mark &`]:{display:"none"}},[`${t}-optional`]:{display:"inline-block",marginInlineStart:e.marginXXS,color:e.colorTextDescription,[`${r}-hide-required-mark &`]:{display:"none"}},[`${t}-tooltip`]:{color:e.colorTextDescription,cursor:"help",writingMode:"horizontal-tb",marginInlineStart:e.marginXXS},"&::after":{content:'":"',position:"relative",marginBlock:0,marginInlineStart:x,marginInlineEnd:w},[`&${t}-no-colon::after`]:{content:'"\\a0"'}}},[`${t}-control`]:{["--ant-display"]:"flex",flexDirection:"column",flexGrow:1,[`&:first-child:not([class^="'${l}-col-'"]):not([class*="' ${l}-col-'"])`]:{width:"100%"},"&-input":{position:"relative",display:"flex",alignItems:"center",minHeight:e.controlHeight,"&-content":{flex:"auto",maxWidth:"100%"}}},[t]:{"&-explain, &-extra":{clear:"both",color:e.colorTextDescription,fontSize:e.fontSize,lineHeight:e.lineHeight},"&-explain-connected":{width:"100%"},"&-extra":{minHeight:e.controlHeightSM,transition:`color ${e.motionDurationMid} ${e.motionEaseOut}`},"&-explain":{"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning}}},[`&-with-help ${t}-explain`]:{height:"auto",opacity:1},[`${t}-feedback-icon`]:{fontSize:e.fontSize,textAlign:"center",visibility:"visible",animationName:p.kr,animationDuration:e.motionDurationMid,animationTimingFunction:e.motionEaseOutBack,pointerEvents:"none","&-success":{color:e.colorSuccess},"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning},"&-validating":{color:e.colorPrimary}}})}},ye=e=>{const{componentCls:t,formItemCls:n}=e;return{[`${t}-horizontal`]:{[`${n}-label`]:{flexGrow:0},[`${n}-control`]:{flex:"1 1 0",minWidth:0},[`${n}-label[class$='-24'], ${n}-label[class*='-24 ']`]:{[`& + ${n}-control`]:{minWidth:"unset"}}}}},$e=e=>{const{componentCls:t,formItemCls:n}=e;return{[`${t}-inline`]:{display:"flex",flexWrap:"wrap",[n]:{flex:"none",marginInlineEnd:e.margin,marginBottom:0,"&-row":{flexWrap:"nowrap"},[`> ${n}-label,
        > ${n}-control`]:{display:"inline-block",verticalAlign:"top"},[`> ${n}-label`]:{flex:"none"},[`${t}-text`]:{display:"inline-block"},[`${n}-has-feedback`]:{display:"inline-block"}}}}},ae=e=>({padding:e.verticalLabelPadding,margin:e.verticalLabelMargin,whiteSpace:"initial",textAlign:"start","> label":{margin:0,"&::after":{visibility:"hidden"}}}),ze=e=>{const{componentCls:t,formItemCls:n,rootPrefixCls:r}=e;return{[`${n} ${n}-label`]:ae(e),[t]:{[n]:{flexWrap:"wrap",[`${n}-label, ${n}-control`]:{[`&:not([class*=" ${r}-col-xs"])`]:{flex:"0 0 100%",maxWidth:"100%"}}}}}},Ue=e=>{const{componentCls:t,formItemCls:n,rootPrefixCls:r}=e;return{[`${t}-vertical`]:{[n]:{"&-row":{flexDirection:"column"},"&-label > label":{height:"auto"},[`${t}-item-control`]:{width:"100%"}}},[`${t}-vertical ${n}-label,
      .${r}-col-24${n}-label,
      .${r}-col-xl-24${n}-label`]:ae(e),[`@media (max-width: ${e.screenXSMax}px)`]:[ze(e),{[t]:{[`.${r}-col-xs-24${n}-label`]:ae(e)}}],[`@media (max-width: ${e.screenSMMax}px)`]:{[t]:{[`.${r}-col-sm-24${n}-label`]:ae(e)}},[`@media (max-width: ${e.screenMDMax}px)`]:{[t]:{[`.${r}-col-md-24${n}-label`]:ae(e)}},[`@media (max-width: ${e.screenLGMax}px)`]:{[t]:{[`.${r}-col-lg-24${n}-label`]:ae(e)}}}},Fe=(e,t)=>(0,y.TS)(e,{formItemCls:`${e.componentCls}-item`,rootPrefixCls:t});var je=(0,u.Z)("Form",(e,t)=>{let{rootPrefixCls:n}=t;const r=Fe(e,n);return[ne(r),be(r),c(r),ye(r),$e(r),Ue(r),(0,a.Z)(r),p.kr]},e=>({labelRequiredMarkColor:e.colorError,labelColor:e.colorTextHeading,labelFontSize:e.fontSize,labelHeight:e.controlHeight,labelColonMarginInlineStart:e.marginXXS/2,labelColonMarginInlineEnd:e.marginXS,itemMarginBottom:e.marginLG,verticalLabelPadding:`0 0 ${e.paddingXS}px`,verticalLabelMargin:0}),{order:-1e3});const Re=[];function V(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return{key:typeof e=="string"?e:`${t}-${r}`,error:e,errorStatus:n}}var Le=e=>{let{help:t,helpStatus:n,errors:r=Re,warnings:l=Re,className:s,fieldId:f,onVisibleChanged:g}=e;const{prefixCls:v}=o.useContext(b.Rk),x=`${v}-item-explain`,[,w]=je(v),C=(0,o.useMemo)(()=>(0,ee.Z)(v),[v]),z=j(r),N=j(l),E=o.useMemo(()=>t!=null?[V(t,"help",n)]:[].concat((0,d.Z)(z.map((A,P)=>V(A,"error","error",P))),(0,d.Z)(N.map((A,P)=>V(A,"warning","warning",P)))),[t,n,z,N]),W={};return f&&(W.id=`${f}_help`),o.createElement(J.default,{motionDeadline:C.motionDeadline,motionName:`${v}-show-help`,visible:!!E.length,onVisibleChanged:g},A=>{const{className:P,style:h}=A;return o.createElement("div",Object.assign({},W,{className:T()(x,P,s,w),style:h,role:"alert"}),o.createElement(J.CSSMotionList,Object.assign({keys:E},(0,ee.Z)(v),{motionName:`${v}-show-help-item`,component:!1}),M=>{const{key:F,error:O,errorStatus:L,className:Q,style:K}=M;return o.createElement("div",{key:F,className:T()(Q,{[`${x}-${L}`]:L}),style:K},O)}))})},se=i(43589),De=i(53124),ue=i(98866),re=i(97647),R=i(98675);const xe=e=>typeof e=="object"&&e!=null&&e.nodeType===1,Ge=(e,t)=>(!t||e!=="hidden")&&e!=="visible"&&e!=="clip",Ce=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const n=getComputedStyle(e,null);return Ge(n.overflowY,t)||Ge(n.overflowX,t)||(r=>{const l=(s=>{if(!s.ownerDocument||!s.ownerDocument.defaultView)return null;try{return s.ownerDocument.defaultView.frameElement}catch(f){return null}})(r);return!!l&&(l.clientHeight<r.scrollHeight||l.clientWidth<r.scrollWidth)})(e)}return!1},Ae=(e,t,n,r,l,s,f,g)=>s<e&&f>t||s>e&&f<t?0:s<=e&&g<=n||f>=t&&g>=n?s-e-r:f>t&&g<n||s<e&&g>n?f-t+l:0,Ze=e=>{const t=e.parentElement;return t==null?e.getRootNode().host||null:t},Be=(e,t)=>{var n,r,l,s;if(typeof document=="undefined")return[];const{scrollMode:f,block:g,inline:v,boundary:x,skipOverflowHiddenElements:w}=t,C=typeof x=="function"?x:te=>te!==x;if(!xe(e))throw new TypeError("Invalid target");const z=document.scrollingElement||document.documentElement,N=[];let E=e;for(;xe(E)&&C(E);){if(E=Ze(E),E===z){N.push(E);break}E!=null&&E===document.body&&Ce(E)&&!Ce(document.documentElement)||E!=null&&Ce(E,w)&&N.push(E)}const W=(r=(n=window.visualViewport)==null?void 0:n.width)!=null?r:innerWidth,A=(s=(l=window.visualViewport)==null?void 0:l.height)!=null?s:innerHeight,{scrollX:P,scrollY:h}=window,{height:M,width:F,top:O,right:L,bottom:Q,left:K}=e.getBoundingClientRect();let U=g==="start"||g==="nearest"?O:g==="end"?Q:O+M/2,Z=v==="center"?K+F/2:v==="end"?L:K;const me=[];for(let te=0;te<N.length;te++){const D=N[te],{height:B,width:pe,top:_,right:Se,bottom:ie,left:Ie}=D.getBoundingClientRect();if(f==="if-needed"&&O>=0&&K>=0&&Q<=A&&L<=W&&O>=_&&Q<=ie&&K>=Ie&&L<=Se)return me;const fe=getComputedStyle(D),ge=parseInt(fe.borderLeftWidth,10),Me=parseInt(fe.borderTopWidth,10),oe=parseInt(fe.borderRightWidth,10),le=parseInt(fe.borderBottomWidth,10);let S=0,H=0;const G="offsetWidth"in D?D.offsetWidth-D.clientWidth-ge-oe:0,de="offsetHeight"in D?D.offsetHeight-D.clientHeight-Me-le:0,he="offsetWidth"in D?D.offsetWidth===0?0:pe/D.offsetWidth:0,we="offsetHeight"in D?D.offsetHeight===0?0:B/D.offsetHeight:0;if(z===D)S=g==="start"?U:g==="end"?U-A:g==="nearest"?Ae(h,h+A,A,Me,le,h+U,h+U+M,M):U-A/2,H=v==="start"?Z:v==="center"?Z-W/2:v==="end"?Z-W:Ae(P,P+W,W,ge,oe,P+Z,P+Z+F,F),S=Math.max(0,S+h),H=Math.max(0,H+P);else{S=g==="start"?U-_-Me:g==="end"?U-ie+le+de:g==="nearest"?Ae(_,ie,B,Me,le+de,U,U+M,M):U-(_+B/2)+de/2,H=v==="start"?Z-Ie-ge:v==="center"?Z-(Ie+pe/2)+G/2:v==="end"?Z-Se+oe+G:Ae(Ie,Se,pe,ge,oe+G,Z,Z+F,F);const{scrollLeft:Te,scrollTop:Pe}=D;S=Math.max(0,Math.min(Pe+S/we,D.scrollHeight-B/we+de)),H=Math.max(0,Math.min(Te+H/he,D.scrollWidth-pe/he+G)),U+=Pe-S,Z+=Te-H}me.push({el:D,top:S,left:H})}return me},Xe=e=>e===!1?{block:"end",inline:"nearest"}:(t=>t===Object(t)&&Object.keys(t).length!==0)(e)?e:{block:"start",inline:"nearest"};function Qe(e,t){if(!e.isConnected||!(l=>{let s=l;for(;s&&s.parentNode;){if(s.parentNode===document)return!0;s=s.parentNode instanceof ShadowRoot?s.parentNode.host:s.parentNode}return!1})(e))return;const n=(l=>{const s=window.getComputedStyle(l);return{top:parseFloat(s.scrollMarginTop)||0,right:parseFloat(s.scrollMarginRight)||0,bottom:parseFloat(s.scrollMarginBottom)||0,left:parseFloat(s.scrollMarginLeft)||0}})(e);if((l=>typeof l=="object"&&typeof l.behavior=="function")(t))return t.behavior(Be(e,t));const r=typeof t=="boolean"||t==null?void 0:t.behavior;for(const{el:l,top:s,left:f}of Be(e,Xe(t))){const g=s-n.top+n.bottom,v=f-n.left+n.right;l.scroll({top:g,left:v,behavior:r})}}const qe=["parentNode"],Ne="form_item";function Ee(e){return e===void 0||e===!1?[]:Array.isArray(e)?e:[e]}function ce(e,t){if(!e.length)return;const n=e.join("_");return t?`${t}_${n}`:qe.includes(n)?`${Ne}_${n}`:n}function Ke(e,t,n,r,l,s){let f=r;return s!==void 0?f=s:n.validating?f="validating":e.length?f="error":t.length?f="warning":(n.touched||l&&n.validated)&&(f="success"),f}function He(e){return Ee(e).join("_")}function Ve(e){const[t]=(0,se.useForm)(),n=o.useRef({}),r=o.useMemo(()=>e!=null?e:Object.assign(Object.assign({},t),{__INTERNAL__:{itemRef:l=>s=>{const f=He(l);s?n.current[f]=s:delete n.current[f]}},scrollToField:function(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const f=Ee(l),g=ce(f,r.__INTERNAL__.name),v=g?document.getElementById(g):null;v&&Qe(v,Object.assign({scrollMode:"if-needed",block:"nearest"},s))},getFieldInstance:l=>{const s=He(l);return n.current[s]}}),[e,t]);return[r]}var gt=i(37920),pt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]]);return n};const ht=(e,t)=>{const n=o.useContext(ue.Z),{getPrefixCls:r,direction:l,form:s}=o.useContext(De.E_),{prefixCls:f,className:g,rootClassName:v,size:x,disabled:w=n,form:C,colon:z,labelAlign:N,labelWrap:E,labelCol:W,wrapperCol:A,hideRequiredMark:P,layout:h="horizontal",scrollToFirstError:M,requiredMark:F,onFinishFailed:O,name:L,style:Q,feedbackIcons:K}=e,U=pt(e,["prefixCls","className","rootClassName","size","disabled","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name","style","feedbackIcons"]),Z=(0,R.Z)(x),me=o.useContext(gt.Z),te=(0,o.useMemo)(()=>F!==void 0?F:s&&s.requiredMark!==void 0?s.requiredMark:!P,[P,F,s]),D=z!=null?z:s==null?void 0:s.colon,B=r("form",f),[pe,_]=je(B),Se=T()(B,`${B}-${h}`,{[`${B}-hide-required-mark`]:te===!1,[`${B}-rtl`]:l==="rtl",[`${B}-${Z}`]:Z},_,s==null?void 0:s.className,g,v),[ie]=Ve(C),{__INTERNAL__:Ie}=ie;Ie.name=L;const fe=(0,o.useMemo)(()=>({name:L,labelAlign:N,labelCol:W,labelWrap:E,wrapperCol:A,vertical:h==="vertical",colon:D,requiredMark:te,itemRef:Ie.itemRef,form:ie,feedbackIcons:K}),[L,N,W,A,h,D,te,ie,K]);o.useImperativeHandle(t,()=>ie);const ge=(oe,le)=>{if(oe){let S={block:"nearest"};typeof oe=="object"&&(S=oe),ie.scrollToField(le,S)}},Me=oe=>{if(O==null||O(oe),oe.errorFields.length){const le=oe.errorFields[0].name;if(M!==void 0){ge(M,le);return}s&&s.scrollToFirstError!==void 0&&ge(s.scrollToFirstError,le)}};return pe(o.createElement(ue.n,{disabled:w},o.createElement(re.q,{size:Z},o.createElement(b.RV,{validateMessages:me},o.createElement(b.q3.Provider,{value:fe},o.createElement(se.default,Object.assign({id:L},U,{name:L,onFinishFailed:Me,form:ie,style:Object.assign(Object.assign({},s==null?void 0:s.style),Q),className:Se})))))))};var vt=o.forwardRef(ht),bt=i(30470),nt=i(42550),rt=i(96159),yt=i(27288),$t=i(50344);function xt(e){if(typeof e=="function")return e;const t=(0,$t.Z)(e);return t.length<=1?t[0]:t}const ot=()=>{const{status:e,errors:t=[],warnings:n=[]}=(0,o.useContext)(b.aM);return{status:e,errors:t,warnings:n}};ot.Context=b.aM;var Ct=ot,lt=i(75164);function Et(e){const[t,n]=o.useState(e),r=(0,o.useRef)(null),l=(0,o.useRef)([]),s=(0,o.useRef)(!1);o.useEffect(()=>(s.current=!1,()=>{s.current=!0,lt.Z.cancel(r.current),r.current=null}),[]);function f(g){s.current||(r.current===null&&(l.current=[],r.current=(0,lt.Z)(()=>{r.current=null,n(v=>{let x=v;return l.current.forEach(w=>{x=w(x)}),x})})),l.current.push(g))}return[t,f]}function Ot(){const{itemRef:e}=o.useContext(b.q3),t=o.useRef({});function n(r,l){const s=l&&typeof l=="object"&&l.ref,f=r.join("_");return(t.current.name!==f||t.current.originRef!==s)&&(t.current.name=f,t.current.originRef=s,t.current.ref=(0,nt.sQ)(e(r),s)),t.current.ref}return n}var St=i(5110),It=i(8410),Mt=i(98423),wt=i(92820),st=i(21584);const Pt=e=>{const{formItemCls:t}=e;return{"@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)":{[`${t}-control`]:{display:"flex"}}}};var Ft=(0,u.b)(["Form","item-item"],(e,t)=>{let{rootPrefixCls:n}=t;const r=Fe(e,n);return[Pt(r)]}),jt=e=>{const{prefixCls:t,status:n,wrapperCol:r,children:l,errors:s,warnings:f,_internalItemRender:g,extra:v,help:x,fieldId:w,marginBottom:C,onErrorVisibleChanged:z}=e,N=`${t}-item`,E=o.useContext(b.q3),W=r||E.wrapperCol||{},A=T()(`${N}-control`,W.className),P=o.useMemo(()=>Object.assign({},E),[E]);delete P.labelCol,delete P.wrapperCol;const h=o.createElement("div",{className:`${N}-control-input`},o.createElement("div",{className:`${N}-control-input-content`},l)),M=o.useMemo(()=>({prefixCls:t,status:n}),[t,n]),F=C!==null||s.length||f.length?o.createElement("div",{style:{display:"flex",flexWrap:"nowrap"}},o.createElement(b.Rk.Provider,{value:M},o.createElement(Le,{fieldId:w,errors:s,warnings:f,help:x,helpStatus:n,className:`${N}-explain-connected`,onVisibleChanged:z})),!!C&&o.createElement("div",{style:{width:0,height:C}})):null,O={};w&&(O.id=`${w}_extra`);const L=v?o.createElement("div",Object.assign({},O,{className:`${N}-extra`}),v):null,Q=g&&g.mark==="pro_table_render"&&g.render?g.render(e,{input:h,errorList:F,extra:L}):o.createElement(o.Fragment,null,h,F,L);return o.createElement(b.q3.Provider,{value:P},o.createElement(st.Z,Object.assign({},W,{className:A}),Q),o.createElement(Ft,{prefixCls:t}))},Rt=i(25035),Lt=i(24457),Dt=i(10110),Nt=i(83062),Tt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]]);return n};function Wt(e){return e?typeof e=="object"&&!o.isValidElement(e)?e:{title:e}:null}var At=e=>{let{prefixCls:t,label:n,htmlFor:r,labelCol:l,labelAlign:s,colon:f,required:g,requiredMark:v,tooltip:x}=e;var w;const[C]=(0,Dt.Z)("Form"),{vertical:z,labelAlign:N,labelCol:E,labelWrap:W,colon:A}=o.useContext(b.q3);if(!n)return null;const P=l||E||{},h=s||N,M=`${t}-item-label`,F=T()(M,h==="left"&&`${M}-left`,P.className,{[`${M}-wrap`]:!!W});let O=n;const L=f===!0||A!==!1&&f!==!1;L&&!z&&typeof n=="string"&&n.trim()!==""&&(O=n.replace(/[:|：]\s*$/,""));const K=Wt(x);if(K){const{icon:te=o.createElement(Rt.Z,null)}=K,D=Tt(K,["icon"]),B=o.createElement(Nt.Z,Object.assign({},D),o.cloneElement(te,{className:`${t}-item-tooltip`,title:""}));O=o.createElement(o.Fragment,null,O,B)}const U=v==="optional",Z=typeof v=="function";Z?O=v(O,{required:!!g}):U&&!g&&(O=o.createElement(o.Fragment,null,O,o.createElement("span",{className:`${t}-item-optional`,title:""},(C==null?void 0:C.optional)||((w=Lt.Z.Form)===null||w===void 0?void 0:w.optional))));const me=T()({[`${t}-item-required`]:g,[`${t}-item-required-mark-optional`]:U||Z,[`${t}-item-no-colon`]:!L});return o.createElement(st.Z,Object.assign({},P,{className:F}),o.createElement("label",{htmlFor:r,className:me,title:typeof n=="string"?n:""},O))},Zt=i(89739),Bt=i(4340),Ht=i(21640),Vt=i(50888);const zt={success:Zt.Z,warning:Ht.Z,error:Bt.Z,validating:Vt.Z};function it(e){let{children:t,errors:n,warnings:r,hasFeedback:l,validateStatus:s,prefixCls:f,meta:g,noStyle:v}=e;const x=`${f}-item`,{feedbackIcons:w}=o.useContext(b.q3),C=Ke(n,r,g,null,!!l,s),{isFormItemInput:z,status:N,hasFeedback:E,feedbackIcon:W}=o.useContext(b.aM),A=o.useMemo(()=>{var P;let h;if(l){const F=l!==!0&&l.icons||w,O=C&&((P=F==null?void 0:F({status:C,errors:n,warnings:r}))===null||P===void 0?void 0:P[C]),L=C&&zt[C];h=O!==!1&&L?o.createElement("span",{className:T()(`${x}-feedback-icon`,`${x}-feedback-icon-${C}`)},O||o.createElement(L,null)):null}const M={status:C||"",errors:n,warnings:r,hasFeedback:!!l,feedbackIcon:h,isFormItemInput:!0};return v&&(M.status=(C!=null?C:N)||"",M.isFormItemInput=z,M.hasFeedback=!!(l!=null?l:E),M.feedbackIcon=l!==void 0?M.feedbackIcon:W),M},[C,l,v,z,N]);return o.createElement(b.aM.Provider,{value:A},t)}var Ut=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]]);return n};function Kt(e){const{prefixCls:t,className:n,rootClassName:r,style:l,help:s,errors:f,warnings:g,validateStatus:v,meta:x,hasFeedback:w,hidden:C,children:z,fieldId:N,required:E,isRequired:W,onSubItemMetaChange:A}=e,P=Ut(e,["prefixCls","className","rootClassName","style","help","errors","warnings","validateStatus","meta","hasFeedback","hidden","children","fieldId","required","isRequired","onSubItemMetaChange"]),h=`${t}-item`,{requiredMark:M}=o.useContext(b.q3),F=o.useRef(null),O=j(f),L=j(g),Q=s!=null,K=!!(Q||f.length||g.length),U=!!F.current&&(0,St.Z)(F.current),[Z,me]=o.useState(null);(0,It.Z)(()=>{if(K&&F.current){const _=getComputedStyle(F.current);me(parseInt(_.marginBottom,10))}},[K,U]);const te=_=>{_||me(null)},B=function(){let _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const Se=_?O:x.errors,ie=_?L:x.warnings;return Ke(Se,ie,x,"",!!w,v)}(),pe=T()(h,n,r,{[`${h}-with-help`]:Q||O.length||L.length,[`${h}-has-feedback`]:B&&w,[`${h}-has-success`]:B==="success",[`${h}-has-warning`]:B==="warning",[`${h}-has-error`]:B==="error",[`${h}-is-validating`]:B==="validating",[`${h}-hidden`]:C});return o.createElement("div",{className:pe,style:l,ref:F},o.createElement(wt.Z,Object.assign({className:`${h}-row`},(0,Mt.Z)(P,["_internalItemRender","colon","dependencies","extra","fieldKey","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","label","labelAlign","labelCol","labelWrap","messageVariables","name","normalize","noStyle","preserve","requiredMark","rules","shouldUpdate","trigger","tooltip","validateFirst","validateTrigger","valuePropName","wrapperCol","validateDebounce"])),o.createElement(At,Object.assign({htmlFor:N},e,{requiredMark:M,required:E!=null?E:W,prefixCls:t})),o.createElement(jt,Object.assign({},e,x,{errors:O,warnings:L,prefixCls:t,status:B,help:s,marginBottom:Z,onErrorVisibleChanged:te}),o.createElement(b.qI.Provider,{value:A},o.createElement(it,{prefixCls:t,meta:x,errors:x.errors,warnings:x.warnings,hasFeedback:w,validateStatus:B},z)))),!!Z&&o.createElement("div",{className:`${h}-margin-offset`,style:{marginBottom:-Z}}))}const _t="__SPLIT__",on=null,Gt=o.memo(e=>{let{children:t}=e;return t},(e,t)=>e.value===t.value&&e.update===t.update&&e.childProps.length===t.childProps.length&&e.childProps.every((n,r)=>n===t.childProps[r]));function at(){return{errors:[],warnings:[],touched:!1,validating:!1,name:[],validated:!1}}function Xt(e){const{name:t,noStyle:n,className:r,dependencies:l,prefixCls:s,shouldUpdate:f,rules:g,children:v,required:x,label:w,messageVariables:C,trigger:z="onChange",validateTrigger:N,hidden:E,help:W}=e,{getPrefixCls:A}=o.useContext(De.E_),{name:P}=o.useContext(b.q3),h=xt(v),M=typeof h=="function",F=o.useContext(b.qI),{validateTrigger:O}=o.useContext(se.FieldContext),L=N!==void 0?N:O,Q=t!=null,K=A("form",s),[U,Z]=je(K),me=(0,yt.ln)("Form.Item"),te=o.useContext(se.ListContext),D=o.useRef(),[B,pe]=Et({}),[_,Se]=(0,bt.Z)(()=>at()),ie=S=>{const H=te==null?void 0:te.getKey(S.name);if(Se(S.destroy?at():S,!0),n&&W!==!1&&F){let G=S.name;if(S.destroy)G=D.current||G;else if(H!==void 0){const[de,he]=H;G=[de].concat((0,d.Z)(he)),D.current=G}F(S,G)}},Ie=(S,H)=>{pe(G=>{const de=Object.assign({},G),we=[].concat((0,d.Z)(S.name.slice(0,-1)),(0,d.Z)(H)).join(_t);return S.destroy?delete de[we]:de[we]=S,de})},[fe,ge]=o.useMemo(()=>{const S=(0,d.Z)(_.errors),H=(0,d.Z)(_.warnings);return Object.values(B).forEach(G=>{S.push.apply(S,(0,d.Z)(G.errors||[])),H.push.apply(H,(0,d.Z)(G.warnings||[]))}),[S,H]},[B,_.errors,_.warnings]),Me=Ot();function oe(S,H,G){return n&&!E?o.createElement(it,{prefixCls:K,hasFeedback:e.hasFeedback,validateStatus:e.validateStatus,meta:_,errors:fe,warnings:ge,noStyle:!0},S):o.createElement(Kt,Object.assign({key:"row"},e,{className:T()(r,Z),prefixCls:K,fieldId:H,isRequired:G,errors:fe,warnings:ge,meta:_,onSubItemMetaChange:Ie}),S)}if(!Q&&!M&&!l)return U(oe(h));let le={};return typeof w=="string"?le.label=w:t&&(le.label=String(t)),C&&(le=Object.assign(Object.assign({},le),C)),U(o.createElement(se.Field,Object.assign({},e,{messageVariables:le,trigger:z,validateTrigger:L,onMetaChange:ie}),(S,H,G)=>{const de=Ee(t).length&&H?H.name:[],he=ce(de,P),we=x!==void 0?x:!!(g&&g.some(k=>{if(k&&typeof k=="object"&&k.required&&!k.warningOnly)return!0;if(typeof k=="function"){const Ye=k(G);return Ye&&Ye.required&&!Ye.warningOnly}return!1})),Te=Object.assign({},S);let Pe=null;if(Array.isArray(h)&&Q)Pe=h;else if(!(M&&(!(f||l)||Q))){if(!(l&&!M&&!Q))if((0,rt.l$)(h)){const k=Object.assign(Object.assign({},h.props),Te);if(k.id||(k.id=he),W||fe.length>0||ge.length>0||e.extra){const We=[];(W||fe.length>0)&&We.push(`${he}_help`),e.extra&&We.push(`${he}_extra`),k["aria-describedby"]=We.join(" ")}fe.length>0&&(k["aria-invalid"]="true"),we&&(k["aria-required"]="true"),(0,nt.Yr)(h)&&(k.ref=Me(de,h)),new Set([].concat((0,d.Z)(Ee(z)),(0,d.Z)(Ee(L)))).forEach(We=>{k[We]=function(){for(var dt,ut,ke,ft,et,mt=arguments.length,tt=new Array(mt),Je=0;Je<mt;Je++)tt[Je]=arguments[Je];(ke=Te[We])===null||ke===void 0||(dt=ke).call.apply(dt,[Te].concat(tt)),(et=(ft=h.props)[We])===null||et===void 0||(ut=et).call.apply(ut,[ft].concat(tt))}});const en=[k["aria-required"],k["aria-invalid"],k["aria-describedby"]];Pe=o.createElement(Gt,{value:Te[e.valuePropName||"value"],update:h,childProps:en},(0,rt.Tm)(h,k))}else M&&(f||l)&&!Q?Pe=h(G):Pe=h}return oe(Pe,he,we)}))}const ct=Xt;ct.useStatus=Ct;var Qt=ct,Yt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]]);return n},Jt=e=>{var{prefixCls:t,children:n}=e,r=Yt(e,["prefixCls","children"]);const{getPrefixCls:l}=o.useContext(De.E_),s=l("form",t),f=o.useMemo(()=>({prefixCls:s,status:"error"}),[s]);return o.createElement(se.List,Object.assign({},r),(g,v,x)=>o.createElement(b.Rk.Provider,{value:f},n(g.map(w=>Object.assign(Object.assign({},w),{fieldKey:w.key})),v,{errors:x.errors,warnings:x.warnings})))};function qt(){const{form:e}=(0,o.useContext)(b.q3);return e}const Oe=vt;Oe.Item=Qt,Oe.List=Jt,Oe.ErrorList=Le,Oe.useForm=Ve,Oe.useFormInstance=qt,Oe.useWatch=se.useWatch,Oe.Provider=b.RV,Oe.create=()=>{};var kt=Oe},99134:function(ve,X,i){var d=i(67294);const Y=(0,d.createContext)({});X.Z=Y},21584:function(ve,X,i){var d=i(67294),Y=i(94184),T=i.n(Y),J=i(53124),o=i(99134),ee=i(6999),b=function(a,y){var u={};for(var m in a)Object.prototype.hasOwnProperty.call(a,m)&&y.indexOf(m)<0&&(u[m]=a[m]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,m=Object.getOwnPropertySymbols(a);c<m.length;c++)y.indexOf(m[c])<0&&Object.prototype.propertyIsEnumerable.call(a,m[c])&&(u[m[c]]=a[m[c]]);return u};function j(a){return typeof a=="number"?`${a} ${a} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(a)?`0 0 ${a}`:a}const $=["xs","sm","md","lg","xl","xxl"],p=d.forwardRef((a,y)=>{const{getPrefixCls:u,direction:m}=d.useContext(J.E_),{gutter:c,wrap:I}=d.useContext(o.Z),{prefixCls:q,span:ne,order:be,offset:ye,push:$e,pull:ae,className:ze,children:Ue,flex:Fe,style:je}=a,Re=b(a,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),V=u("col",q),[_e,Le]=(0,ee.c)(V);let se={};$.forEach(re=>{let R={};const xe=a[re];typeof xe=="number"?R.span=xe:typeof xe=="object"&&(R=xe||{}),delete Re[re],se=Object.assign(Object.assign({},se),{[`${V}-${re}-${R.span}`]:R.span!==void 0,[`${V}-${re}-order-${R.order}`]:R.order||R.order===0,[`${V}-${re}-offset-${R.offset}`]:R.offset||R.offset===0,[`${V}-${re}-push-${R.push}`]:R.push||R.push===0,[`${V}-${re}-pull-${R.pull}`]:R.pull||R.pull===0,[`${V}-${re}-flex-${R.flex}`]:R.flex||R.flex==="auto",[`${V}-rtl`]:m==="rtl"})});const De=T()(V,{[`${V}-${ne}`]:ne!==void 0,[`${V}-order-${be}`]:be,[`${V}-offset-${ye}`]:ye,[`${V}-push-${$e}`]:$e,[`${V}-pull-${ae}`]:ae},ze,se,Le),ue={};if(c&&c[0]>0){const re=c[0]/2;ue.paddingLeft=re,ue.paddingRight=re}return Fe&&(ue.flex=j(Fe),I===!1&&!ue.minWidth&&(ue.minWidth=0)),_e(d.createElement("div",Object.assign({},Re,{style:Object.assign(Object.assign({},ue),je),className:De,ref:y}),Ue))});X.Z=p},92820:function(ve,X,i){var d=i(67294),Y=i(94184),T=i.n(Y),J=i(74443),o=i(53124),ee=i(99134),b=i(6999),j=function(u,m){var c={};for(var I in u)Object.prototype.hasOwnProperty.call(u,I)&&m.indexOf(I)<0&&(c[I]=u[I]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var q=0,I=Object.getOwnPropertySymbols(u);q<I.length;q++)m.indexOf(I[q])<0&&Object.prototype.propertyIsEnumerable.call(u,I[q])&&(c[I[q]]=u[I[q]]);return c};const $=null,p=null;function a(u,m){const[c,I]=d.useState(typeof u=="string"?u:""),q=()=>{if(typeof u=="string"&&I(u),typeof u=="object")for(let ne=0;ne<J.c4.length;ne++){const be=J.c4[ne];if(!m[be])continue;const ye=u[be];if(ye!==void 0){I(ye);return}}};return d.useEffect(()=>{q()},[JSON.stringify(u),m]),c}const y=d.forwardRef((u,m)=>{const{prefixCls:c,justify:I,align:q,className:ne,style:be,children:ye,gutter:$e=0,wrap:ae}=u,ze=j(u,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:Ue,direction:Fe}=d.useContext(o.E_),[je,Re]=d.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[V,_e]=d.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),Le=a(q,V),se=a(I,V),De=d.useRef($e),ue=(0,J.ZP)();d.useEffect(()=>{const Ne=ue.subscribe(Ee=>{_e(Ee);const ce=De.current||0;(!Array.isArray(ce)&&typeof ce=="object"||Array.isArray(ce)&&(typeof ce[0]=="object"||typeof ce[1]=="object"))&&Re(Ee)});return()=>ue.unsubscribe(Ne)},[]);const re=()=>{const Ne=[void 0,void 0];return(Array.isArray($e)?$e:[$e,void 0]).forEach((ce,Ke)=>{if(typeof ce=="object")for(let He=0;He<J.c4.length;He++){const Ve=J.c4[He];if(je[Ve]&&ce[Ve]!==void 0){Ne[Ke]=ce[Ve];break}}else Ne[Ke]=ce}),Ne},R=Ue("row",c),[xe,Ge]=(0,b.V)(R),Ce=re(),Ae=T()(R,{[`${R}-no-wrap`]:ae===!1,[`${R}-${se}`]:se,[`${R}-${Le}`]:Le,[`${R}-rtl`]:Fe==="rtl"},ne,Ge),Ze={},Be=Ce[0]!=null&&Ce[0]>0?Ce[0]/-2:void 0;Be&&(Ze.marginLeft=Be,Ze.marginRight=Be),[,Ze.rowGap]=Ce;const[Xe,Qe]=Ce,qe=d.useMemo(()=>({gutter:[Xe,Qe],wrap:ae}),[Xe,Qe,ae]);return xe(d.createElement(ee.Z.Provider,{value:qe},d.createElement("div",Object.assign({},ze,{className:Ae,style:Object.assign(Object.assign({},Ze),be),ref:m}),ye)))});X.Z=y},6999:function(ve,X,i){i.d(X,{V:function(){return j},c:function(){return $}});var d=i(67968),Y=i(45503);const T=p=>{const{componentCls:a}=p;return{[a]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},J=p=>{const{componentCls:a}=p;return{[a]:{position:"relative",maxWidth:"100%",minHeight:1}}},o=(p,a)=>{const{componentCls:y,gridColumns:u}=p,m={};for(let c=u;c>=0;c--)c===0?(m[`${y}${a}-${c}`]={display:"none"},m[`${y}-push-${c}`]={insetInlineStart:"auto"},m[`${y}-pull-${c}`]={insetInlineEnd:"auto"},m[`${y}${a}-push-${c}`]={insetInlineStart:"auto"},m[`${y}${a}-pull-${c}`]={insetInlineEnd:"auto"},m[`${y}${a}-offset-${c}`]={marginInlineStart:0},m[`${y}${a}-order-${c}`]={order:0}):(m[`${y}${a}-${c}`]=[{["--ant-display"]:"block",display:"block"},{display:"var(--ant-display)",flex:`0 0 ${c/u*100}%`,maxWidth:`${c/u*100}%`}],m[`${y}${a}-push-${c}`]={insetInlineStart:`${c/u*100}%`},m[`${y}${a}-pull-${c}`]={insetInlineEnd:`${c/u*100}%`},m[`${y}${a}-offset-${c}`]={marginInlineStart:`${c/u*100}%`},m[`${y}${a}-order-${c}`]={order:c});return m},ee=(p,a)=>o(p,a),b=(p,a,y)=>({[`@media (min-width: ${a}px)`]:Object.assign({},ee(p,y))}),j=(0,d.Z)("Grid",p=>[T(p)]),$=(0,d.Z)("Grid",p=>{const a=(0,Y.TS)(p,{gridColumns:24}),y={"-sm":a.screenSMMin,"-md":a.screenMDMin,"-lg":a.screenLGMin,"-xl":a.screenXLMin,"-xxl":a.screenXXLMin};return[J(a),ee(a,""),ee(a,"-xs"),Object.keys(y).map(u=>b(a,y[u],u)).reduce((u,m)=>Object.assign(Object.assign({},u),m),{})]})},10110:function(ve,X,i){var d=i(67294),Y=i(76745),T=i(24457);const J=(o,ee)=>{const b=d.useContext(Y.Z),j=d.useMemo(()=>{var p;const a=ee||T.Z[o],y=(p=b==null?void 0:b[o])!==null&&p!==void 0?p:{};return Object.assign(Object.assign({},typeof a=="function"?a():a),y||{})},[o,ee,b]),$=d.useMemo(()=>{const p=b==null?void 0:b.locale;return b!=null&&b.exist&&!p?T.Z.locale:p},[b]);return[j,$]};X.Z=J},33507:function(ve,X){const i=d=>({[d.componentCls]:{[`${d.antCls}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`height ${d.motionDurationMid} ${d.motionEaseInOut},
        opacity ${d.motionDurationMid} ${d.motionEaseInOut} !important`}},[`${d.antCls}-motion-collapse`]:{overflow:"hidden",transition:`height ${d.motionDurationMid} ${d.motionEaseInOut},
        opacity ${d.motionDurationMid} ${d.motionEaseInOut} !important`}}});X.Z=i}}]);