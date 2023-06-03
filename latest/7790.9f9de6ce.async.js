"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[7790],{78860:function(ie,L,i){i.d(L,{Z:function(){return W}});var M=i(87462),H=i(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"},D=a,k=i(13401),B=function(U,j){return H.createElement(k.Z,(0,M.Z)({},U,{ref:j,icon:D}))},W=H.forwardRef(B)},27790:function(ie,L,i){i.d(L,{ZP:function(){return Le}});var M=i(74902),H=i(2992),a=i(67294),D=i(91231),k=i(50888),B=i(21640),W=i(4340),V=i(89739),U=i(78860),j=i(97685),ce=i(91),Q=i(87462),K=i(1413),le=i(73935),ue=i(62874),fe=i(94184),A=i.n(fe),de=i(4942),me=i(15105),ve=a.forwardRef(function(e,n){var s=e.prefixCls,t=e.style,o=e.className,c=e.duration,d=c===void 0?4.5:c,h=e.eventKey,u=e.content,f=e.closable,g=e.closeIcon,v=g===void 0?"x":g,m=e.props,p=e.onClick,x=e.onNoticeClose,E=e.times,b=a.useState(!1),P=(0,j.Z)(b,2),$=P[0],I=P[1],N=function(){x(h)},O=function(C){(C.key==="Enter"||C.code==="Enter"||C.keyCode===me.Z.ENTER)&&N()};a.useEffect(function(){if(!$&&d>0){var r=setTimeout(function(){N()},d*1e3);return function(){clearTimeout(r)}}},[d,$,E]);var l="".concat(s,"-notice");return a.createElement("div",(0,Q.Z)({},m,{ref:n,className:A()(l,o,(0,de.Z)({},"".concat(l,"-closable"),f)),style:t,onMouseEnter:function(){I(!0)},onMouseLeave:function(){I(!1)},onClick:p}),a.createElement("div",{className:"".concat(l,"-content")},u),f&&a.createElement("a",{tabIndex:0,className:"".concat(l,"-close"),onKeyDown:O,onClick:function(C){C.preventDefault(),C.stopPropagation(),N()}},v))}),J=ve,ge=a.forwardRef(function(e,n){var s=e.prefixCls,t=s===void 0?"rc-notification":s,o=e.container,c=e.motion,d=e.maxCount,h=e.className,u=e.style,f=e.onAllRemoved,g=a.useState([]),v=(0,j.Z)(g,2),m=v[0],p=v[1],x=function(r){var C,y=m.find(function(S){return S.key===r});y==null||(C=y.onClose)===null||C===void 0||C.call(y),p(function(S){return S.filter(function(F){return F.key!==r})})};a.useImperativeHandle(n,function(){return{open:function(r){p(function(C){var y=(0,M.Z)(C),S=y.findIndex(function(Y){return Y.key===r.key}),F=(0,K.Z)({},r);if(S>=0){var Z;F.times=(((Z=C[S])===null||Z===void 0?void 0:Z.times)||0)+1,y[S]=F}else F.times=0,y.push(F);return d>0&&y.length>d&&(y=y.slice(-d)),y})},close:function(r){x(r)},destroy:function(){p([])}}});var E=a.useState({}),b=(0,j.Z)(E,2),P=b[0],$=b[1];a.useEffect(function(){var l={};m.forEach(function(r){var C=r.placement,y=C===void 0?"topRight":C;y&&(l[y]=l[y]||[],l[y].push(r))}),Object.keys(P).forEach(function(r){l[r]=l[r]||[]}),$(l)},[m]);var I=function(r){$(function(C){var y=(0,K.Z)({},C),S=y[r]||[];return S.length||delete y[r],y})},N=a.useRef(!1);if(a.useEffect(function(){Object.keys(P).length>0?N.current=!0:N.current&&(f==null||f(),N.current=!1)},[P]),!o)return null;var O=Object.keys(P);return(0,le.createPortal)(a.createElement(a.Fragment,null,O.map(function(l){var r=P[l],C=r.map(function(S){return{config:S,key:S.key}}),y=typeof c=="function"?c(l):c;return a.createElement(ue.V,(0,Q.Z)({key:l,className:A()(t,"".concat(t,"-").concat(l),h==null?void 0:h(l)),style:u==null?void 0:u(l),keys:C,motionAppear:!0},y,{onAllRemoved:function(){I(l)}}),function(S,F){var Z=S.config,Y=S.className,ke=S.style,re=Z.key,Be=Z.times,We=Z.className,Ue=Z.style;return a.createElement(J,(0,Q.Z)({},Z,{ref:F,prefixCls:t,className:A()(Y,We),style:(0,K.Z)((0,K.Z)({},ke),Ue),times:Be,key:re,eventKey:re,onNoticeClose:x}))})})),o)}),ye=ge,pe=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved"],Ce=function(){return document.body},q=0;function xe(){for(var e={},n=arguments.length,s=new Array(n),t=0;t<n;t++)s[t]=arguments[t];return s.forEach(function(o){o&&Object.keys(o).forEach(function(c){var d=o[c];d!==void 0&&(e[c]=d)})}),e}function he(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.getContainer,s=n===void 0?Ce:n,t=e.motion,o=e.prefixCls,c=e.maxCount,d=e.className,h=e.style,u=e.onAllRemoved,f=(0,ce.Z)(e,pe),g=a.useState(),v=(0,j.Z)(g,2),m=v[0],p=v[1],x=a.useRef(),E=a.createElement(ye,{container:m,ref:x,prefixCls:o,motion:t,maxCount:c,className:d,style:h,onAllRemoved:u}),b=a.useState([]),P=(0,j.Z)(b,2),$=P[0],I=P[1],N=a.useMemo(function(){return{open:function(l){var r=xe(f,l);(r.key===null||r.key===void 0)&&(r.key="rc-notification-".concat(q),q+=1),I(function(C){return[].concat((0,M.Z)(C),[{type:"open",config:r}])})},close:function(l){I(function(r){return[].concat((0,M.Z)(r),[{type:"close",key:l}])})},destroy:function(){I(function(l){return[].concat((0,M.Z)(l),[{type:"destroy"}])})}}},[]);return a.useEffect(function(){p(s())}),a.useEffect(function(){x.current&&$.length&&($.forEach(function(O){switch(O.type){case"open":x.current.open(O.config);break;case"close":x.current.close(O.key);break;case"destroy":x.current.destroy();break}}),I([]))},[$]),[N,E]}var _=i(27431),Ee=i(14747),$e=i(67968),Oe=i(45503);const Pe=e=>{const{componentCls:n,iconCls:s,boxShadow:t,colorText:o,colorSuccess:c,colorError:d,colorWarning:h,colorInfo:u,fontSizeLG:f,motionEaseInOutCirc:g,motionDurationSlow:v,marginXS:m,paddingXS:p,borderRadiusLG:x,zIndexPopup:E,contentPadding:b,contentBg:P}=e,$=`${n}-notice`,I=new _.Keyframes("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:p,transform:"translateY(0)",opacity:1}}),N=new _.Keyframes("MessageMoveOut",{"0%":{maxHeight:e.height,padding:p,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),O={padding:p,textAlign:"center",[`${n}-custom-content > ${s}`]:{verticalAlign:"text-bottom",marginInlineEnd:m,fontSize:f},[`${$}-content`]:{display:"inline-block",padding:b,background:P,borderRadius:x,boxShadow:t,pointerEvents:"all"},[`${n}-success > ${s}`]:{color:c},[`${n}-error > ${s}`]:{color:d},[`${n}-warning > ${s}`]:{color:h},[`${n}-info > ${s},
      ${n}-loading > ${s}`]:{color:u}};return[{[n]:Object.assign(Object.assign({},(0,Ee.Wf)(e)),{color:o,position:"fixed",top:m,width:"100%",pointerEvents:"none",zIndex:E,[`${n}-move-up`]:{animationFillMode:"forwards"},[`
        ${n}-move-up-appear,
        ${n}-move-up-enter
      `]:{animationName:I,animationDuration:v,animationPlayState:"paused",animationTimingFunction:g},[`
        ${n}-move-up-appear${n}-move-up-appear-active,
        ${n}-move-up-enter${n}-move-up-enter-active
      `]:{animationPlayState:"running"},[`${n}-move-up-leave`]:{animationName:N,animationDuration:v,animationPlayState:"paused",animationTimingFunction:g},[`${n}-move-up-leave${n}-move-up-leave-active`]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[n]:{[$]:Object.assign({},O)}},{[`${n}-notice-pure-panel`]:Object.assign(Object.assign({},O),{padding:0,textAlign:"start"})}]};var ee=(0,$e.Z)("Message",e=>{const n=(0,Oe.TS)(e,{height:150});return[Pe(n)]},e=>({zIndexPopup:e.zIndexPopupBase+10,contentBg:e.colorBgElevated,contentPadding:`${(e.controlHeightLG-e.fontSize*e.lineHeight)/2}px ${e.paddingSM}px`})),ne=i(53124),Ne=function(e,n){var s={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(s[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(s[t[o]]=e[t[o]]);return s};const Se={info:a.createElement(U.Z,null),success:a.createElement(V.Z,null),error:a.createElement(W.Z,null),warning:a.createElement(B.Z,null),loading:a.createElement(k.Z,null)};function te(e){let{prefixCls:n,type:s,icon:t,children:o}=e;return a.createElement("div",{className:A()(`${n}-custom-content`,`${n}-${s}`)},t||Se[s],a.createElement("span",null,o))}function be(e){const{prefixCls:n,className:s,type:t,icon:o,content:c}=e,d=Ne(e,["prefixCls","className","type","icon","content"]),{getPrefixCls:h}=a.useContext(ne.E_),u=n||h("message"),[,f]=ee(u);return a.createElement(J,Object.assign({},d,{prefixCls:u,className:A()(s,f,`${u}-notice-pure-panel`),eventKey:"pure",duration:null,content:a.createElement(te,{prefixCls:u,type:t,icon:o},c)}))}var Ie=i(97937);function Re(e,n){return{motionName:n!=null?n:`${e}-move-up`}}function X(e){let n;const s=new Promise(o=>{n=e(()=>{o(!0)})}),t=()=>{n==null||n()};return t.then=(o,c)=>s.then(o,c),t.promise=s,t}var Ze=function(e,n){var s={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(s[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(s[t[o]]=e[t[o]]);return s};const Fe=8,Me=3,je=a.forwardRef((e,n)=>{const{top:s,prefixCls:t,getContainer:o,maxCount:c,duration:d=Me,rtl:h,transitionName:u,onAllRemoved:f}=e,{getPrefixCls:g,getPopupContainer:v}=a.useContext(ne.E_),m=t||g("message"),[,p]=ee(m),x=()=>({left:"50%",transform:"translateX(-50%)",top:s!=null?s:Fe}),E=()=>A()(p,h?`${m}-rtl`:""),b=()=>Re(m,u),P=a.createElement("span",{className:`${m}-close-x`},a.createElement(Ie.Z,{className:`${m}-close-icon`})),[$,I]=he({prefixCls:m,style:x,className:E,motion:b,closable:!1,closeIcon:P,duration:d,getContainer:()=>(o==null?void 0:o())||(v==null?void 0:v())||document.body,maxCount:c,onAllRemoved:f});return a.useImperativeHandle(n,()=>Object.assign(Object.assign({},$),{prefixCls:m,hashId:p})),I});let oe=0;function se(e){const n=a.useRef(null);return[a.useMemo(()=>{const t=u=>{var f;(f=n.current)===null||f===void 0||f.close(u)},o=u=>{if(!n.current){const O=()=>{};return O.then=()=>{},O}const{open:f,prefixCls:g,hashId:v}=n.current,m=`${g}-notice`,{content:p,icon:x,type:E,key:b,className:P,onClose:$}=u,I=Ze(u,["content","icon","type","key","className","onClose"]);let N=b;return N==null&&(oe+=1,N=`antd-message-${oe}`),X(O=>(f(Object.assign(Object.assign({},I),{key:N,content:a.createElement(te,{prefixCls:g,type:E,icon:x},p),placement:"top",className:A()(E&&`${m}-${E}`,v,P),onClose:()=>{$==null||$(),O()}})),()=>{t(N)}))},d={open:o,destroy:u=>{var f;u!==void 0?t(u):(f=n.current)===null||f===void 0||f.destroy()}};return["info","success","warning","error","loading"].forEach(u=>{const f=(g,v,m)=>{let p;g&&typeof g=="object"&&"content"in g?p=g:p={content:g};let x,E;typeof v=="function"?E=v:(x=v,E=m);const b=Object.assign(Object.assign({onClose:E,duration:x},p),{type:u});return o(b)};d[u]=f}),d},[]),a.createElement(je,Object.assign({key:"message-holder"},e,{ref:n}))]}function Ae(e){return se(e)}let R=null,T=e=>e(),w=[],z={};function Te(){const{prefixCls:e,getContainer:n,duration:s,rtl:t,maxCount:o,top:c}=z,d=e!=null?e:(0,D.w6)().getPrefixCls("message"),h=(n==null?void 0:n())||document.body;return{prefixCls:d,container:h,duration:s,rtl:t,maxCount:o,top:c}}const De=a.forwardRef((e,n)=>{const s=()=>{const{prefixCls:v,container:m,maxCount:p,duration:x,rtl:E,top:b}=Te();return{prefixCls:v,getContainer:()=>m,maxCount:p,duration:x,rtl:E,top:b}},[t,o]=a.useState(s),[c,d]=se(t),h=(0,D.w6)(),u=h.getRootPrefixCls(),f=h.getIconPrefixCls(),g=()=>{o(s)};return a.useEffect(g,[]),a.useImperativeHandle(n,()=>{const v=Object.assign({},c);return Object.keys(v).forEach(m=>{v[m]=function(){return g(),c[m].apply(c,arguments)}}),{instance:v,sync:g}}),a.createElement(D.ZP,{prefixCls:u,iconPrefixCls:f},d)});function G(){if(!R){const e=document.createDocumentFragment(),n={fragment:e};R=n,T(()=>{(0,H.s)(a.createElement(De,{ref:s=>{const{instance:t,sync:o}=s||{};Promise.resolve().then(()=>{!n.instance&&t&&(n.instance=t,n.sync=o,G())})}}),e)});return}R.instance&&(w.forEach(e=>{const{type:n,skipped:s}=e;if(!s)switch(n){case"open":{T(()=>{const t=R.instance.open(Object.assign(Object.assign({},z),e.config));t==null||t.then(e.resolve),e.setCloseFn(t)});break}case"destroy":T(()=>{R==null||R.instance.destroy(e.key)});break;default:T(()=>{var t;const o=(t=R.instance)[n].apply(t,(0,M.Z)(e.args));o==null||o.then(e.resolve),e.setCloseFn(o)})}}),w=[])}function we(e){z=Object.assign(Object.assign({},z),e),T(()=>{var n;(n=R==null?void 0:R.sync)===null||n===void 0||n.call(R)})}function He(e){const n=X(s=>{let t;const o={type:"open",config:e,resolve:s,setCloseFn:c=>{t=c}};return w.push(o),()=>{t?T(()=>{t()}):o.skipped=!0}});return G(),n}function Ke(e,n){const s=X(t=>{let o;const c={type:e,args:n,resolve:t,setCloseFn:d=>{o=d}};return w.push(c),()=>{o?T(()=>{o()}):c.skipped=!0}});return G(),s}function ze(e){w.push({type:"destroy",key:e}),G()}const Ge=["success","info","warning","error","loading"],ae={open:He,destroy:ze,config:we,useMessage:Ae,_InternalPanelDoNotUseOrYouWillBeFired:be};Ge.forEach(e=>{ae[e]=function(){for(var n=arguments.length,s=new Array(n),t=0;t<n;t++)s[t]=arguments[t];return Ke(e,s)}});const Xe=()=>{};let Ye=null,Ve=null;var Le=ae}}]);
