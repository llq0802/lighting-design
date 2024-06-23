"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[8872],{78860:function(Ve,le,i){i.d(le,{Z:function(){return Q}});var ce=i(87462),o=i(67294),ue={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"},fe=ue,Oe=i(13401),Ie=function(de,ve){return o.createElement(Oe.Z,(0,ce.Z)({},de,{ref:ve,icon:fe}))},B=o.forwardRef(Ie),Q=B},68872:function(Ve,le,i){i.d(le,{ZP:function(){return Dt}});var ce=i(75177),o=i(67294),ue=i(77039);const fe=o.createContext({}),Oe=o.createContext({message:{},notification:{},modal:{}});var Ie=null,B=i(53124),Q=i(23859),be=i(89739),de=i(4340),ve=i(21640),Be=i(78860),Qe=i(50888),Xe=i(93967),D=i.n(Xe),X=i(74902),T=i(97685),Ze=i(91),Y=i(1413),Ye=i(73935),oe=i(87462),me=i(4942),Je=i(82225),Re=i(71002),qe=i(15105),_e=i(64217),et=o.forwardRef(function(e,t){var a=e.prefixCls,n=e.style,s=e.className,r=e.duration,f=r===void 0?4.5:r,m=e.showProgress,E=e.pauseOnHover,c=E===void 0?!0:E,g=e.eventKey,h=e.content,u=e.closable,C=e.closeIcon,S=C===void 0?"x":C,y=e.props,d=e.onClick,M=e.onNoticeClose,$=e.times,b=e.hovering,O=o.useState(!1),R=(0,T.Z)(O,2),p=R[0],I=R[1],v=o.useState(0),l=(0,T.Z)(v,2),P=l[0],x=l[1],j=o.useState(0),L=(0,T.Z)(j,2),F=L[0],_=L[1],Z=b||p,H=f>0&&m,W=function(){M(g)},ee=function(N){(N.key==="Enter"||N.code==="Enter"||N.keyCode===qe.Z.ENTER)&&W()};o.useEffect(function(){if(!Z&&f>0){var w=Date.now()-F,N=setTimeout(function(){W()},f*1e3-F);return function(){c&&clearTimeout(N),_(Date.now()-w)}}},[f,Z,$]),o.useEffect(function(){if(!Z&&H&&(c||F===0)){var w=performance.now(),N,A=function ye(){cancelAnimationFrame(N),N=requestAnimationFrame(function(pe){var V=pe+F-w,K=Math.min(V/(f*1e3),1);x(K*100),K<1&&ye()})};return A(),function(){c&&cancelAnimationFrame(N)}}},[f,F,Z,H,$]);var ae=o.useMemo(function(){return(0,Re.Z)(u)==="object"&&u!==null?u:u?{closeIcon:S}:{}},[u,S]),Ce=(0,_e.Z)(ae,!0),te=100-(!P||P<0?0:P>100?100:P),G="".concat(a,"-notice");return o.createElement("div",(0,oe.Z)({},y,{ref:t,className:D()(G,s,(0,me.Z)({},"".concat(G,"-closable"),u)),style:n,onMouseEnter:function(N){var A;I(!0),y==null||(A=y.onMouseEnter)===null||A===void 0||A.call(y,N)},onMouseLeave:function(N){var A;I(!1),y==null||(A=y.onMouseLeave)===null||A===void 0||A.call(y,N)},onClick:d}),o.createElement("div",{className:"".concat(G,"-content")},h),u&&o.createElement("a",(0,oe.Z)({tabIndex:0,className:"".concat(G,"-close"),onKeyDown:ee,"aria-label":"Close"},Ce,{onClick:function(N){N.preventDefault(),N.stopPropagation(),W()}}),ae.closeIcon),H&&o.createElement("progress",{className:"".concat(G,"-progress"),max:"100",value:te},te+"%"))}),$e=et,Me=o.createContext({}),tt=function(t){var a=t.children,n=t.classNames;return o.createElement(Me.Provider,{value:{classNames:n}},a)},nt=tt,Ae=8,Fe=3,je=16,ot=function(t){var a={offset:Ae,threshold:Fe,gap:je};if(t&&(0,Re.Z)(t)==="object"){var n,s,r;a.offset=(n=t.offset)!==null&&n!==void 0?n:Ae,a.threshold=(s=t.threshold)!==null&&s!==void 0?s:Fe,a.gap=(r=t.gap)!==null&&r!==void 0?r:je}return[!!t,a]},st=ot,at=["className","style","classNames","styles"],rt=function(t){var a=t.configList,n=t.placement,s=t.prefixCls,r=t.className,f=t.style,m=t.motion,E=t.onAllNoticeRemoved,c=t.onNoticeClose,g=t.stack,h=(0,o.useContext)(Me),u=h.classNames,C=(0,o.useRef)({}),S=(0,o.useState)(null),y=(0,T.Z)(S,2),d=y[0],M=y[1],$=(0,o.useState)([]),b=(0,T.Z)($,2),O=b[0],R=b[1],p=a.map(function(Z){return{config:Z,key:String(Z.key)}}),I=st(g),v=(0,T.Z)(I,2),l=v[0],P=v[1],x=P.offset,j=P.threshold,L=P.gap,F=l&&(O.length>0||p.length<=j),_=typeof m=="function"?m(n):m;return(0,o.useEffect)(function(){l&&O.length>1&&R(function(Z){return Z.filter(function(H){return p.some(function(W){var ee=W.key;return H===ee})})})},[O,p,l]),(0,o.useEffect)(function(){var Z;if(l&&C.current[(Z=p[p.length-1])===null||Z===void 0?void 0:Z.key]){var H;M(C.current[(H=p[p.length-1])===null||H===void 0?void 0:H.key])}},[p,l]),o.createElement(Je.V4,(0,oe.Z)({key:n,className:D()(s,"".concat(s,"-").concat(n),u==null?void 0:u.list,r,(0,me.Z)((0,me.Z)({},"".concat(s,"-stack"),!!l),"".concat(s,"-stack-expanded"),F)),style:f,keys:p,motionAppear:!0},_,{onAllRemoved:function(){E(n)}}),function(Z,H){var W=Z.config,ee=Z.className,ae=Z.style,Ce=Z.index,te=W,G=te.key,w=te.times,N=String(G),A=W,ye=A.className,pe=A.style,V=A.classNames,K=A.styles,Gt=(0,Ze.Z)(A,at),he=p.findIndex(function(ie){return ie.key===N}),re={};if(l){var ne=p.length-1-(he>-1?he:Ce-1),Ke=n==="top"||n==="bottom"?"-50%":"0";if(ne>0){var xe,Ne,Ee;re.height=F?(xe=C.current[N])===null||xe===void 0?void 0:xe.offsetHeight:d==null?void 0:d.offsetHeight;for(var Ue=0,Se=0;Se<ne;Se++){var Pe;Ue+=((Pe=C.current[p[p.length-1-Se].key])===null||Pe===void 0?void 0:Pe.offsetHeight)+L}var Wt=(F?Ue:ne*x)*(n.startsWith("top")?1:-1),zt=!F&&d!==null&&d!==void 0&&d.offsetWidth&&(Ne=C.current[N])!==null&&Ne!==void 0&&Ne.offsetWidth?((d==null?void 0:d.offsetWidth)-x*2*(ne<3?ne:3))/((Ee=C.current[N])===null||Ee===void 0?void 0:Ee.offsetWidth):1;re.transform="translate3d(".concat(Ke,", ").concat(Wt,"px, 0) scaleX(").concat(zt,")")}else re.transform="translate3d(".concat(Ke,", 0, 0)")}return o.createElement("div",{ref:H,className:D()("".concat(s,"-notice-wrapper"),ee,V==null?void 0:V.wrapper),style:(0,Y.Z)((0,Y.Z)((0,Y.Z)({},ae),re),K==null?void 0:K.wrapper),onMouseEnter:function(){return R(function(U){return U.includes(N)?U:[].concat((0,X.Z)(U),[N])})},onMouseLeave:function(){return R(function(U){return U.filter(function(Kt){return Kt!==N})})}},o.createElement($e,(0,oe.Z)({},Gt,{ref:function(U){he>-1?C.current[N]=U:delete C.current[N]},prefixCls:s,classNames:V,styles:K,className:D()(ye,u==null?void 0:u.notice),style:pe,times:w,key:G,eventKey:G,onNoticeClose:c,hovering:l&&O.length>0})))})},it=rt,lt=o.forwardRef(function(e,t){var a=e.prefixCls,n=a===void 0?"rc-notification":a,s=e.container,r=e.motion,f=e.maxCount,m=e.className,E=e.style,c=e.onAllRemoved,g=e.stack,h=e.renderNotifications,u=o.useState([]),C=(0,T.Z)(u,2),S=C[0],y=C[1],d=function(l){var P,x=S.find(function(j){return j.key===l});x==null||(P=x.onClose)===null||P===void 0||P.call(x),y(function(j){return j.filter(function(L){return L.key!==l})})};o.useImperativeHandle(t,function(){return{open:function(l){y(function(P){var x=(0,X.Z)(P),j=x.findIndex(function(_){return _.key===l.key}),L=(0,Y.Z)({},l);if(j>=0){var F;L.times=(((F=P[j])===null||F===void 0?void 0:F.times)||0)+1,x[j]=L}else L.times=0,x.push(L);return f>0&&x.length>f&&(x=x.slice(-f)),x})},close:function(l){d(l)},destroy:function(){y([])}}});var M=o.useState({}),$=(0,T.Z)(M,2),b=$[0],O=$[1];o.useEffect(function(){var v={};S.forEach(function(l){var P=l.placement,x=P===void 0?"topRight":P;x&&(v[x]=v[x]||[],v[x].push(l))}),Object.keys(b).forEach(function(l){v[l]=v[l]||[]}),O(v)},[S]);var R=function(l){O(function(P){var x=(0,Y.Z)({},P),j=x[l]||[];return j.length||delete x[l],x})},p=o.useRef(!1);if(o.useEffect(function(){Object.keys(b).length>0?p.current=!0:p.current&&(c==null||c(),p.current=!1)},[b]),!s)return null;var I=Object.keys(b);return(0,Ye.createPortal)(o.createElement(o.Fragment,null,I.map(function(v){var l=b[v],P=o.createElement(it,{key:v,configList:l,placement:v,prefixCls:n,className:m==null?void 0:m(v),style:E==null?void 0:E(v),motion:r,onNoticeClose:d,onAllNoticeRemoved:R,stack:g});return h?h(P,{prefixCls:n,key:v}):P})),s)}),ct=lt,ut=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved","stack","renderNotifications"],ft=function(){return document.body},ke=0;function dt(){for(var e={},t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return a.forEach(function(s){s&&Object.keys(s).forEach(function(r){var f=s[r];f!==void 0&&(e[r]=f)})}),e}function vt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.getContainer,a=t===void 0?ft:t,n=e.motion,s=e.prefixCls,r=e.maxCount,f=e.className,m=e.style,E=e.onAllRemoved,c=e.stack,g=e.renderNotifications,h=(0,Ze.Z)(e,ut),u=o.useState(),C=(0,T.Z)(u,2),S=C[0],y=C[1],d=o.useRef(),M=o.createElement(ct,{container:S,ref:d,prefixCls:s,motion:n,maxCount:r,className:f,style:m,onAllRemoved:E,stack:c,renderNotifications:g}),$=o.useState([]),b=(0,T.Z)($,2),O=b[0],R=b[1],p=o.useMemo(function(){return{open:function(v){var l=dt(h,v);(l.key===null||l.key===void 0)&&(l.key="rc-notification-".concat(ke),ke+=1),R(function(P){return[].concat((0,X.Z)(P),[{type:"open",config:l}])})},close:function(v){R(function(l){return[].concat((0,X.Z)(l),[{type:"close",key:v}])})},destroy:function(){R(function(v){return[].concat((0,X.Z)(v),[{type:"destroy"}])})}}},[]);return o.useEffect(function(){y(a())}),o.useEffect(function(){d.current&&O.length&&(O.forEach(function(I){switch(I.type){case"open":d.current.open(I.config);break;case"close":d.current.close(I.key);break;case"destroy":d.current.destroy();break}}),R(function(I){return I.filter(function(v){return!O.includes(v)})}))},[O]),[p,M]}var Le=i(35792),He=i(861),mt=i(87263),gt=i(14747),Ct=i(27036),yt=i(45503);const pt=e=>{const{componentCls:t,iconCls:a,boxShadow:n,colorText:s,colorSuccess:r,colorError:f,colorWarning:m,colorInfo:E,fontSizeLG:c,motionEaseInOutCirc:g,motionDurationSlow:h,marginXS:u,paddingXS:C,borderRadiusLG:S,zIndexPopup:y,contentPadding:d,contentBg:M}=e,$=`${t}-notice`,b=new He.E4("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:C,transform:"translateY(0)",opacity:1}}),O=new He.E4("MessageMoveOut",{"0%":{maxHeight:e.height,padding:C,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),R={padding:C,textAlign:"center",[`${t}-custom-content`]:{display:"flex",alignItems:"center"},[`${t}-custom-content > ${a}`]:{marginInlineEnd:u,fontSize:c},[`${$}-content`]:{display:"inline-block",padding:d,background:M,borderRadius:S,boxShadow:n,pointerEvents:"all"},[`${t}-success > ${a}`]:{color:r},[`${t}-error > ${a}`]:{color:f},[`${t}-warning > ${a}`]:{color:m},[`${t}-info > ${a},
      ${t}-loading > ${a}`]:{color:E}};return[{[t]:Object.assign(Object.assign({},(0,gt.Wf)(e)),{color:s,position:"fixed",top:u,width:"100%",pointerEvents:"none",zIndex:y,[`${t}-move-up`]:{animationFillMode:"forwards"},[`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]:{animationName:b,animationDuration:h,animationPlayState:"paused",animationTimingFunction:g},[`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]:{animationPlayState:"running"},[`${t}-move-up-leave`]:{animationName:O,animationDuration:h,animationPlayState:"paused",animationTimingFunction:g},[`${t}-move-up-leave${t}-move-up-leave-active`]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[t]:{[`${$}-wrapper`]:Object.assign({},R)}},{[`${t}-notice-pure-panel`]:Object.assign(Object.assign({},R),{padding:0,textAlign:"start"})}]},ht=e=>({zIndexPopup:e.zIndexPopupBase+mt.u6+10,contentBg:e.colorBgElevated,contentPadding:`${(e.controlHeightLG-e.fontSize*e.lineHeight)/2}px ${e.paddingSM}px`});var Te=(0,Ct.I$)("Message",e=>{const t=(0,yt.TS)(e,{height:150});return[pt(t)]},ht),xt=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(a[n[s]]=e[n[s]]);return a};const Nt={info:o.createElement(Be.Z,null),success:o.createElement(be.Z,null),error:o.createElement(de.Z,null),warning:o.createElement(ve.Z,null),loading:o.createElement(Qe.Z,null)},we=e=>{let{prefixCls:t,type:a,icon:n,children:s}=e;return o.createElement("div",{className:D()(`${t}-custom-content`,`${t}-${a}`)},n||Nt[a],o.createElement("span",null,s))};var Et=e=>{const{prefixCls:t,className:a,type:n,icon:s,content:r}=e,f=xt(e,["prefixCls","className","type","icon","content"]),{getPrefixCls:m}=o.useContext(B.E_),E=t||m("message"),c=(0,Le.Z)(E),[g,h,u]=Te(E,c);return g(o.createElement($e,Object.assign({},f,{prefixCls:E,className:D()(a,h,`${E}-notice-pure-panel`,u,c),eventKey:"pure",duration:null,content:o.createElement(we,{prefixCls:E,type:n,icon:s},r)})))},St=i(97937),Pt=i(27288);function Ot(e,t){return{motionName:t!=null?t:`${e}-move-up`}}function ge(e){let t;const a=new Promise(s=>{t=e(()=>{s(!0)})}),n=()=>{t==null||t()};return n.then=(s,r)=>a.then(s,r),n.promise=a,n}var It=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(a[n[s]]=e[n[s]]);return a};const bt=8,Zt=3,Rt=e=>{let{children:t,prefixCls:a}=e;const n=(0,Le.Z)(a),[s,r,f]=Te(a,n);return s(o.createElement(nt,{classNames:{list:D()(r,f,n)}},t))},$t=(e,t)=>{let{prefixCls:a,key:n}=t;return o.createElement(Rt,{prefixCls:a,key:n},e)},Mt=o.forwardRef((e,t)=>{const{top:a,prefixCls:n,getContainer:s,maxCount:r,duration:f=Zt,rtl:m,transitionName:E,onAllRemoved:c}=e,{getPrefixCls:g,getPopupContainer:h,message:u,direction:C}=o.useContext(B.E_),S=n||g("message"),y=()=>({left:"50%",transform:"translateX(-50%)",top:a!=null?a:bt}),d=()=>D()({[`${S}-rtl`]:m!=null?m:C==="rtl"}),M=()=>Ot(S,E),$=o.createElement("span",{className:`${S}-close-x`},o.createElement(St.Z,{className:`${S}-close-icon`})),[b,O]=vt({prefixCls:S,style:y,className:d,motion:M,closable:!1,closeIcon:$,duration:f,getContainer:()=>(s==null?void 0:s())||(h==null?void 0:h())||document.body,maxCount:r,onAllRemoved:c,renderNotifications:$t});return o.useImperativeHandle(t,()=>Object.assign(Object.assign({},b),{prefixCls:S,message:u})),O});let De=0;function Ge(e){const t=o.useRef(null),a=(0,Pt.ln)("Message");return[o.useMemo(()=>{const s=c=>{var g;(g=t.current)===null||g===void 0||g.close(c)},r=c=>{if(!t.current){const I=()=>{};return I.then=()=>{},I}const{open:g,prefixCls:h,message:u}=t.current,C=`${h}-notice`,{content:S,icon:y,type:d,key:M,className:$,style:b,onClose:O}=c,R=It(c,["content","icon","type","key","className","style","onClose"]);let p=M;return p==null&&(De+=1,p=`antd-message-${De}`),ge(I=>(g(Object.assign(Object.assign({},R),{key:p,content:o.createElement(we,{prefixCls:h,type:d,icon:y},S),placement:"top",className:D()(d&&`${C}-${d}`,$,u==null?void 0:u.className),style:Object.assign(Object.assign({},u==null?void 0:u.style),b),onClose:()=>{O==null||O(),I()}})),()=>{s(p)}))},m={open:r,destroy:c=>{var g;c!==void 0?s(c):(g=t.current)===null||g===void 0||g.destroy()}};return["info","success","warning","error","loading"].forEach(c=>{const g=(h,u,C)=>{let S;h&&typeof h=="object"&&"content"in h?S=h:S={content:h};let y,d;typeof u=="function"?d=u:(y=u,d=C);const M=Object.assign(Object.assign({onClose:d,duration:y},S),{type:c});return r(M)};m[c]=g}),m},[]),o.createElement(Mt,Object.assign({key:"message-holder"},e,{ref:t}))]}function At(e){return Ge(e)}let k=null,z=e=>e(),J=[],q={};function We(){const{getContainer:e,duration:t,rtl:a,maxCount:n,top:s}=q,r=(e==null?void 0:e())||document.body;return{getContainer:()=>r,duration:t,rtl:a,maxCount:n,top:s}}const Ft=o.forwardRef((e,t)=>{const{messageConfig:a,sync:n}=e,{getPrefixCls:s}=(0,o.useContext)(B.E_),r=q.prefixCls||s("message"),f=(0,o.useContext)(fe),[m,E]=Ge(Object.assign(Object.assign(Object.assign({},a),{prefixCls:r}),f.message));return o.useImperativeHandle(t,()=>{const c=Object.assign({},m);return Object.keys(c).forEach(g=>{c[g]=function(){return n(),m[g].apply(m,arguments)}}),{instance:c,sync:n}}),E}),jt=o.forwardRef((e,t)=>{const[a,n]=o.useState(We),s=()=>{n(We)};o.useEffect(s,[]);const r=(0,Q.w6)(),f=r.getRootPrefixCls(),m=r.getIconPrefixCls(),E=r.getTheme(),c=o.createElement(Ft,{ref:t,sync:s,messageConfig:a});return o.createElement(Q.ZP,{prefixCls:f,iconPrefixCls:m,theme:E},r.holderRender?r.holderRender(c):c)});function se(){if(!k){const e=document.createDocumentFragment(),t={fragment:e};k=t,z(()=>{(0,ue.s)(o.createElement(jt,{ref:a=>{const{instance:n,sync:s}=a||{};Promise.resolve().then(()=>{!t.instance&&n&&(t.instance=n,t.sync=s,se())})}}),e)});return}k.instance&&(J.forEach(e=>{const{type:t,skipped:a}=e;if(!a)switch(t){case"open":{z(()=>{const n=k.instance.open(Object.assign(Object.assign({},q),e.config));n==null||n.then(e.resolve),e.setCloseFn(n)});break}case"destroy":z(()=>{k==null||k.instance.destroy(e.key)});break;default:z(()=>{var n;const s=(n=k.instance)[t].apply(n,(0,ce.Z)(e.args));s==null||s.then(e.resolve),e.setCloseFn(s)})}}),J=[])}function kt(e){q=Object.assign(Object.assign({},q),e),z(()=>{var t;(t=k==null?void 0:k.sync)===null||t===void 0||t.call(k)})}function Lt(e){const t=ge(a=>{let n;const s={type:"open",config:e,resolve:a,setCloseFn:r=>{n=r}};return J.push(s),()=>{n?z(()=>{n()}):s.skipped=!0}});return se(),t}function Ht(e,t){const a=(0,Q.w6)(),n=ge(s=>{let r;const f={type:e,args:t,resolve:s,setCloseFn:m=>{r=m}};return J.push(f),()=>{r?z(()=>{r()}):f.skipped=!0}});return se(),n}const Tt=e=>{J.push({type:"destroy",key:e}),se()},wt=["success","info","warning","error","loading"],ze={open:Lt,destroy:Tt,config:kt,useMessage:At,_InternalPanelDoNotUseOrYouWillBeFired:Et};wt.forEach(e=>{ze[e]=function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return Ht(e,a)}});const Bt=()=>{};let Qt=null,Xt=null;var Dt=ze}}]);
