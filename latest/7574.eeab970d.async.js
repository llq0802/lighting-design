"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[7574],{42477:function(pn,Fe,s){s.d(Fe,{Z:function(){return wn}});var r=s(67294),Ge=s(93967),P=s.n(Ge);function oe(e){"@babel/helpers - typeof";return oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},oe(e)}function Ye(e,n){if(oe(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var a=t.call(e,n||"default");if(oe(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Te(e){var n=Ye(e,"string");return oe(n)=="symbol"?n:n+""}function xe(e,n,t){return n=Te(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Ze(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,a)}return t}function T(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Ze(Object(t),!0).forEach(function(a){xe(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ze(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function Le(e){if(Array.isArray(e))return e}function Qe(e,n){var t=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var a,l,d,v,p=[],C=!0,$=!1;try{if(d=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;C=!1}else for(;!(C=(a=d.call(t)).done)&&(p.push(a.value),p.length!==n);C=!0);}catch(N){$=!0,l=N}finally{try{if(!C&&t.return!=null&&(v=t.return(),Object(v)!==v))return}finally{if($)throw l}}return p}}function Oe(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function Je(e,n){if(e){if(typeof e=="string")return Oe(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Oe(e,n)}}function qe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ie(e,n){return Le(e)||Qe(e,n)||Je(e,n)||qe()}var _e=s(2788),Ae=s(8410),en=r.createContext(null),B=r.createContext({}),We=en;function J(){return J=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},J.apply(this,arguments)}var Ke=s(82225),ke=s(15105),Ee=s(64217);function nn(e,n){if(e==null)return{};var t={},a=Object.keys(e),l,d;for(d=0;d<a.length;d++)l=a[d],!(n.indexOf(l)>=0)&&(t[l]=e[l]);return t}function tn(e,n){if(e==null)return{};var t=nn(e,n),a,l;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(l=0;l<d.length;l++)a=d[l],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var an=s(42550),on=["prefixCls","className","containerRef"],rn=function(n){var t=n.prefixCls,a=n.className,l=n.containerRef,d=tn(n,on),v=r.useContext(B),p=v.panel,C=(0,an.x1)(p,l);return r.createElement("div",J({className:P()("".concat(t,"-content"),a),role:"dialog",ref:C},(0,Ee.Z)(n,{aria:!0}),{"aria-modal":"true"},d))},ln=rn,sn=s(80334);function cn(e){return typeof e=="string"&&String(Number(e))===e?((0,sn.ZP)(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(e)):e}function dn(e){warning(!("wrapperClassName"in e),"'wrapperClassName' is removed. Please use 'rootClassName' instead."),warning(canUseDom()||!e.open,"Drawer with 'open' in SSR is not work since no place to createPortal. Please move to 'useEffect' instead.")}var Xe={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function o(e,n){var t,a,l,d=e.prefixCls,v=e.open,p=e.placement,C=e.inline,$=e.push,N=e.forceRender,M=e.autoFocus,K=e.keyboard,b=e.classNames,x=e.rootClassName,g=e.rootStyle,F=e.zIndex,G=e.className,Y=e.id,_=e.style,j=e.motion,I=e.width,R=e.height,ee=e.children,Z=e.mask,L=e.maskClosable,Q=e.maskMotion,Ne=e.maskClassName,be=e.maskStyle,ue=e.afterOpenChange,le=e.onClose,me=e.onMouseEnter,Me=e.onMouseOver,je=e.onMouseLeave,pe=e.onClick,De=e.onKeyDown,Re=e.onKeyUp,k=e.styles,ne=e.drawerRender,X=r.useRef(),te=r.useRef(),ae=r.useRef();r.useImperativeHandle(n,function(){return X.current});var ze=function(H){var Se=H.keyCode,we=H.shiftKey;switch(Se){case ke.Z.TAB:{if(Se===ke.Z.TAB){if(!we&&document.activeElement===ae.current){var $e;($e=te.current)===null||$e===void 0||$e.focus({preventScroll:!0})}else if(we&&document.activeElement===te.current){var gn;(gn=ae.current)===null||gn===void 0||gn.focus({preventScroll:!0})}}break}case ke.Z.ESC:{le&&K&&(H.stopPropagation(),le(H));break}}};r.useEffect(function(){if(v&&M){var w;(w=X.current)===null||w===void 0||w.focus({preventScroll:!0})}},[v]);var fn=r.useState(!1),hn=Ie(fn,2),He=hn[0],Ce=hn[1],O=r.useContext(We),vn;typeof $=="boolean"?vn=$?{}:{distance:0}:vn=$||{};var fe=(t=(a=(l=vn)===null||l===void 0?void 0:l.distance)!==null&&a!==void 0?a:O==null?void 0:O.pushDistance)!==null&&t!==void 0?t:180,$n=r.useMemo(function(){return{pushDistance:fe,push:function(){Ce(!0)},pull:function(){Ce(!1)}}},[fe]);r.useEffect(function(){if(v){var w;O==null||(w=O.push)===null||w===void 0||w.call(O)}else{var H;O==null||(H=O.pull)===null||H===void 0||H.call(O)}},[v]),r.useEffect(function(){return function(){var w;O==null||(w=O.pull)===null||w===void 0||w.call(O)}},[]);var xn=Z&&r.createElement(Ke.ZP,J({key:"mask"},Q,{visible:v}),function(w,H){var Se=w.className,we=w.style;return r.createElement("div",{className:P()("".concat(d,"-mask"),Se,b==null?void 0:b.mask,Ne),style:T(T(T({},we),be),k==null?void 0:k.mask),onClick:L&&v?le:void 0,ref:H})}),On=typeof j=="function"?j(p):j,he={};if(He&&fe)switch(p){case"top":he.transform="translateY(".concat(fe,"px)");break;case"bottom":he.transform="translateY(".concat(-fe,"px)");break;case"left":he.transform="translateX(".concat(fe,"px)");break;default:he.transform="translateX(".concat(-fe,"px)");break}p==="left"||p==="right"?he.width=cn(I):he.height=cn(R);var In={onMouseEnter:me,onMouseOver:Me,onMouseLeave:je,onClick:pe,onKeyDown:De,onKeyUp:Re},kn=r.createElement(Ke.ZP,J({key:"panel"},On,{visible:v,forceRender:N,onVisibleChanged:function(H){ue==null||ue(H)},removeOnLeave:!1,leavedClassName:"".concat(d,"-content-wrapper-hidden")}),function(w,H){var Se=w.className,we=w.style,$e=r.createElement(ln,J({id:Y,containerRef:H,prefixCls:d,className:P()(G,b==null?void 0:b.content),style:T(T({},_),k==null?void 0:k.content)},(0,Ee.Z)(e,{aria:!0}),In),ee);return r.createElement("div",J({className:P()("".concat(d,"-content-wrapper"),b==null?void 0:b.wrapper,Se),style:T(T(T({},he),we),k==null?void 0:k.wrapper)},(0,Ee.Z)(e,{data:!0})),ne?ne($e):$e)}),bn=T({},g);return F&&(bn.zIndex=F),r.createElement(We.Provider,{value:$n},r.createElement("div",{className:P()(d,"".concat(d,"-").concat(p),x,xe(xe({},"".concat(d,"-open"),v),"".concat(d,"-inline"),C)),style:bn,tabIndex:-1,ref:X,onKeyDown:ze},xn,r.createElement("div",{tabIndex:0,ref:te,style:Xe,"aria-hidden":"true","data-sentinel":"start"}),kn,r.createElement("div",{tabIndex:0,ref:ae,style:Xe,"aria-hidden":"true","data-sentinel":"end"})))}var i=r.forwardRef(o),f=i,m=function(n){var t=n.open,a=t===void 0?!1:t,l=n.prefixCls,d=l===void 0?"rc-drawer":l,v=n.placement,p=v===void 0?"right":v,C=n.autoFocus,$=C===void 0?!0:C,N=n.keyboard,M=N===void 0?!0:N,K=n.width,b=K===void 0?378:K,x=n.mask,g=x===void 0?!0:x,F=n.maskClosable,G=F===void 0?!0:F,Y=n.getContainer,_=n.forceRender,j=n.afterOpenChange,I=n.destroyOnClose,R=n.onMouseEnter,ee=n.onMouseOver,Z=n.onMouseLeave,L=n.onClick,Q=n.onKeyDown,Ne=n.onKeyUp,be=n.panelRef,ue=r.useState(!1),le=Ie(ue,2),me=le[0],Me=le[1],je=r.useState(!1),pe=Ie(je,2),De=pe[0],Re=pe[1];(0,Ae.Z)(function(){Re(!0)},[]);var k=De?a:!1,ne=r.useRef(),X=r.useRef();(0,Ae.Z)(function(){k&&(X.current=document.activeElement)},[k]);var te=function(He){var Ce;if(Me(He),j==null||j(He),!He&&X.current&&!((Ce=ne.current)!==null&&Ce!==void 0&&Ce.contains(X.current))){var O;(O=X.current)===null||O===void 0||O.focus({preventScroll:!0})}},ae=r.useMemo(function(){return{panel:be}},[be]);if(!_&&!me&&!k&&I)return null;var ze={onMouseEnter:R,onMouseOver:ee,onMouseLeave:Z,onClick:L,onKeyDown:Q,onKeyUp:Ne},fn=T(T({},n),{},{open:k,prefixCls:d,placement:p,autoFocus:$,keyboard:M,width:b,mask:g,maskClosable:G,inline:Y===!1,afterOpenChange:te,ref:ne},ze);return r.createElement(B.Provider,{value:ae},r.createElement(_e.Z,{open:k||_||me,autoDestroy:!1,getContainer:Y,autoLock:g&&(k||me)},r.createElement(f,fn)))},y=m,S=y,E=s(87263),u=s(33603),c=s(43945),h=s(53124),D=s(65223),A=s(4173),se=s(16569),V=s(69760),ce=s(48054),ve=e=>{var n,t;const{prefixCls:a,title:l,footer:d,extra:v,loading:p,onClose:C,headerStyle:$,bodyStyle:N,footerStyle:M,children:K,classNames:b,styles:x}=e,{drawer:g}=r.useContext(h.E_),F=r.useCallback(I=>r.createElement("button",{type:"button",onClick:C,"aria-label":"Close",className:`${a}-close`},I),[C]),[G,Y]=(0,V.Z)((0,V.w)(e),(0,V.w)(g),{closable:!0,closeIconRender:F}),_=r.useMemo(()=>{var I,R;return!l&&!G?null:r.createElement("div",{style:Object.assign(Object.assign(Object.assign({},(I=g==null?void 0:g.styles)===null||I===void 0?void 0:I.header),$),x==null?void 0:x.header),className:P()(`${a}-header`,{[`${a}-header-close-only`]:G&&!l&&!v},(R=g==null?void 0:g.classNames)===null||R===void 0?void 0:R.header,b==null?void 0:b.header)},r.createElement("div",{className:`${a}-header-title`},Y,l&&r.createElement("div",{className:`${a}-title`},l)),v&&r.createElement("div",{className:`${a}-extra`},v))},[G,Y,v,$,a,l]),j=r.useMemo(()=>{var I,R;if(!d)return null;const ee=`${a}-footer`;return r.createElement("div",{className:P()(ee,(I=g==null?void 0:g.classNames)===null||I===void 0?void 0:I.footer,b==null?void 0:b.footer),style:Object.assign(Object.assign(Object.assign({},(R=g==null?void 0:g.styles)===null||R===void 0?void 0:R.footer),M),x==null?void 0:x.footer)},d)},[d,M,a]);return r.createElement(r.Fragment,null,_,r.createElement("div",{className:P()(`${a}-body`,b==null?void 0:b.body,(n=g==null?void 0:g.classNames)===null||n===void 0?void 0:n.body),style:Object.assign(Object.assign(Object.assign({},(t=g==null?void 0:g.styles)===null||t===void 0?void 0:t.body),N),x==null?void 0:x.body)},p?r.createElement(ce.Z,{active:!0,title:!1,paragraph:{rows:5},className:`${a}-body-skeleton`}):K),j)},U=s(861),re=s(14747),q=s(27036),de=s(45503);const Pe=e=>{const n="100%";return{left:`translateX(-${n})`,right:`translateX(${n})`,top:`translateY(-${n})`,bottom:`translateY(${n})`}[e]},W=(e,n)=>({"&-enter, &-appear":Object.assign(Object.assign({},e),{"&-active":n}),"&-leave":Object.assign(Object.assign({},n),{"&-active":e})}),ge=(e,n)=>Object.assign({"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:`all ${n}`}}},W({opacity:e},{opacity:1})),z=(e,n)=>[ge(.7,n),W({transform:Pe(e)},{transform:"none"})];var ie=e=>{const{componentCls:n,motionDurationSlow:t}=e;return{[n]:{[`${n}-mask-motion`]:ge(0,t),[`${n}-panel-motion`]:["left","right","top","bottom"].reduce((a,l)=>Object.assign(Object.assign({},a),{[`&-${l}`]:z(l,t)}),{})}}};const un=e=>{const{borderRadiusSM:n,componentCls:t,zIndexPopup:a,colorBgMask:l,colorBgElevated:d,motionDurationSlow:v,motionDurationMid:p,paddingXS:C,padding:$,paddingLG:N,fontSizeLG:M,lineHeightLG:K,lineWidth:b,lineType:x,colorSplit:g,marginXS:F,colorIcon:G,colorIconHover:Y,colorBgTextHover:_,colorBgTextActive:j,colorText:I,fontWeightStrong:R,footerPaddingBlock:ee,footerPaddingInline:Z,calc:L}=e,Q=`${t}-content-wrapper`;return{[t]:{position:"fixed",inset:0,zIndex:a,pointerEvents:"none",color:I,"&-pure":{position:"relative",background:d,display:"flex",flexDirection:"column",[`&${t}-left`]:{boxShadow:e.boxShadowDrawerLeft},[`&${t}-right`]:{boxShadow:e.boxShadowDrawerRight},[`&${t}-top`]:{boxShadow:e.boxShadowDrawerUp},[`&${t}-bottom`]:{boxShadow:e.boxShadowDrawerDown}},"&-inline":{position:"absolute"},[`${t}-mask`]:{position:"absolute",inset:0,zIndex:a,background:l,pointerEvents:"auto"},[Q]:{position:"absolute",zIndex:a,maxWidth:"100vw",transition:`all ${v}`,"&-hidden":{display:"none"}},[`&-left > ${Q}`]:{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowDrawerLeft},[`&-right > ${Q}`]:{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:e.boxShadowDrawerRight},[`&-top > ${Q}`]:{top:0,insetInline:0,boxShadow:e.boxShadowDrawerUp},[`&-bottom > ${Q}`]:{bottom:0,insetInline:0,boxShadow:e.boxShadowDrawerDown},[`${t}-content`]:{display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"auto",background:d,pointerEvents:"auto"},[`${t}-header`]:{display:"flex",flex:0,alignItems:"center",padding:`${(0,U.bf)($)} ${(0,U.bf)(N)}`,fontSize:M,lineHeight:K,borderBottom:`${(0,U.bf)(b)} ${x} ${g}`,"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}},[`${t}-extra`]:{flex:"none"},[`${t}-close`]:Object.assign({display:"inline-flex",width:L(M).add(C).equal(),height:L(M).add(C).equal(),borderRadius:n,justifyContent:"center",alignItems:"center",marginInlineEnd:F,color:G,fontWeight:R,fontSize:M,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,cursor:"pointer",transition:`all ${p}`,textRendering:"auto","&:hover":{color:Y,backgroundColor:_,textDecoration:"none"},"&:active":{backgroundColor:j}},(0,re.Qy)(e)),[`${t}-title`]:{flex:1,margin:0,fontWeight:e.fontWeightStrong,fontSize:M,lineHeight:K},[`${t}-body`]:{flex:1,minWidth:0,minHeight:0,padding:N,overflow:"auto",[`${t}-body-skeleton`]:{width:"100%",height:"100%",display:"flex",justifyContent:"center"}},[`${t}-footer`]:{flexShrink:0,padding:`${(0,U.bf)(ee)} ${(0,U.bf)(Z)}`,borderTop:`${(0,U.bf)(b)} ${x} ${g}`},"&-rtl":{direction:"rtl"}}}},mn=e=>({zIndexPopup:e.zIndexPopupBase,footerPaddingBlock:e.paddingXS,footerPaddingInline:e.padding});var Ve=(0,q.I$)("Drawer",e=>{const n=(0,de.TS)(e,{});return[un(n),ie(n)]},mn),Ue=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)n.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]]);return t};const En=null,Cn={distance:180},yn=e=>{var n;const{rootClassName:t,width:a,height:l,size:d="default",mask:v=!0,push:p=Cn,open:C,afterOpenChange:$,onClose:N,prefixCls:M,getContainer:K,style:b,className:x,visible:g,afterVisibleChange:F,maskStyle:G,drawerStyle:Y,contentWrapperStyle:_}=e,j=Ue(e,["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","style","className","visible","afterVisibleChange","maskStyle","drawerStyle","contentWrapperStyle"]),{getPopupContainer:I,getPrefixCls:R,direction:ee,drawer:Z}=r.useContext(h.E_),L=R("drawer",M),[Q,Ne,be]=Ve(L),ue=K===void 0&&I?()=>I(document.body):K,le=P()({"no-mask":!v,[`${L}-rtl`]:ee==="rtl"},t,Ne,be),me=r.useMemo(()=>a!=null?a:d==="large"?736:378,[a,d]),Me=r.useMemo(()=>l!=null?l:d==="large"?736:378,[l,d]),je={motionName:(0,u.m)(L,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},pe=ze=>({motionName:(0,u.m)(L,`panel-motion-${ze}`),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}),De=(0,se.H)(),[Re,k]=(0,E.Cn)("Drawer",j.zIndex),{classNames:ne={},styles:X={}}=j,{classNames:te={},styles:ae={}}=Z||{};return Q(r.createElement(A.BR,null,r.createElement(D.Ux,{status:!0,override:!0},r.createElement(c.Z.Provider,{value:k},r.createElement(S,Object.assign({prefixCls:L,onClose:N,maskMotion:je,motion:pe},j,{classNames:{mask:P()(ne.mask,te.mask),content:P()(ne.content,te.content),wrapper:P()(ne.wrapper,te.wrapper)},styles:{mask:Object.assign(Object.assign(Object.assign({},X.mask),G),ae.mask),content:Object.assign(Object.assign(Object.assign({},X.content),Y),ae.content),wrapper:Object.assign(Object.assign(Object.assign({},X.wrapper),_),ae.wrapper)},open:C!=null?C:g,mask:v,push:p,width:me,height:Me,style:Object.assign(Object.assign({},Z==null?void 0:Z.style),b),className:P()(Z==null?void 0:Z.className,x),rootClassName:le,getContainer:ue,afterOpenChange:$!=null?$:F,panelRef:De,zIndex:Re}),r.createElement(ve,Object.assign({prefixCls:L},j,{onClose:N})))))))},Sn=e=>{const{prefixCls:n,style:t,className:a,placement:l="right"}=e,d=Ue(e,["prefixCls","style","className","placement"]),{getPrefixCls:v}=r.useContext(h.E_),p=v("drawer",n),[C,$,N]=Ve(p),M=P()(p,`${p}-pure`,`${p}-${l}`,$,N,a);return C(r.createElement("div",{className:M,style:t},r.createElement(ve,Object.assign({prefixCls:p},d))))};yn._InternalPanelDoNotUseOrYouWillBeFired=Sn;var wn=yn},72269:function(pn,Fe,s){s.d(Fe,{Z:function(){return Xe}});var r=s(67294),Ge=s(50888),P=s(93967),oe=s.n(P),Ye=s(87462),Te=s(4942),xe=s(97685),Ze=s(91),T=s(21770),Le=s(15105),Qe=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],Oe=r.forwardRef(function(o,i){var f,m=o.prefixCls,y=m===void 0?"rc-switch":m,S=o.className,E=o.checked,u=o.defaultChecked,c=o.disabled,h=o.loadingIcon,D=o.checkedChildren,A=o.unCheckedChildren,se=o.onClick,V=o.onChange,ce=o.onKeyDown,Be=(0,Ze.Z)(o,Qe),ve=(0,T.Z)(!1,{value:E,defaultValue:u}),U=(0,xe.Z)(ve,2),re=U[0],q=U[1];function de(z,ye){var ie=re;return c||(ie=z,q(ie),V==null||V(ie,ye)),ie}function Pe(z){z.which===Le.Z.LEFT?de(!1,z):z.which===Le.Z.RIGHT&&de(!0,z),ce==null||ce(z)}function W(z){var ye=de(!re,z);se==null||se(ye,z)}var ge=oe()(y,S,(f={},(0,Te.Z)(f,"".concat(y,"-checked"),re),(0,Te.Z)(f,"".concat(y,"-disabled"),c),f));return r.createElement("button",(0,Ye.Z)({},Be,{type:"button",role:"switch","aria-checked":re,disabled:c,className:ge,ref:i,onKeyDown:Pe,onClick:W}),h,r.createElement("span",{className:"".concat(y,"-inner")},r.createElement("span",{className:"".concat(y,"-inner-checked")},D),r.createElement("span",{className:"".concat(y,"-inner-unchecked")},A)))});Oe.displayName="Switch";var Je=Oe,qe=s(5663),Ie=s(45353),_e=s(53124),Ae=s(98866),en=s(98675),B=s(861),We=s(10274),J=s(14747),Ke=s(27036),ke=s(45503);const Ee=o=>{const{componentCls:i,trackHeightSM:f,trackPadding:m,trackMinWidthSM:y,innerMinMarginSM:S,innerMaxMarginSM:E,handleSizeSM:u,calc:c}=o,h=`${i}-inner`,D=(0,B.bf)(c(u).add(c(m).mul(2)).equal()),A=(0,B.bf)(c(E).mul(2).equal());return{[i]:{[`&${i}-small`]:{minWidth:y,height:f,lineHeight:(0,B.bf)(f),[`${i}-inner`]:{paddingInlineStart:E,paddingInlineEnd:S,[`${h}-checked, ${h}-unchecked`]:{minHeight:f},[`${h}-checked`]:{marginInlineStart:`calc(-100% + ${D} - ${A})`,marginInlineEnd:`calc(100% - ${D} + ${A})`},[`${h}-unchecked`]:{marginTop:c(f).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`${i}-handle`]:{width:u,height:u},[`${i}-loading-icon`]:{top:c(c(u).sub(o.switchLoadingIconSize)).div(2).equal(),fontSize:o.switchLoadingIconSize},[`&${i}-checked`]:{[`${i}-inner`]:{paddingInlineStart:S,paddingInlineEnd:E,[`${h}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${h}-unchecked`]:{marginInlineStart:`calc(100% - ${D} + ${A})`,marginInlineEnd:`calc(-100% + ${D} - ${A})`}},[`${i}-handle`]:{insetInlineStart:`calc(100% - ${(0,B.bf)(c(u).add(m).equal())})`}},[`&:not(${i}-disabled):active`]:{[`&:not(${i}-checked) ${h}`]:{[`${h}-unchecked`]:{marginInlineStart:c(o.marginXXS).div(2).equal(),marginInlineEnd:c(o.marginXXS).mul(-1).div(2).equal()}},[`&${i}-checked ${h}`]:{[`${h}-checked`]:{marginInlineStart:c(o.marginXXS).mul(-1).div(2).equal(),marginInlineEnd:c(o.marginXXS).div(2).equal()}}}}}}},nn=o=>{const{componentCls:i,handleSize:f,calc:m}=o;return{[i]:{[`${i}-loading-icon${o.iconCls}`]:{position:"relative",top:m(m(f).sub(o.fontSize)).div(2).equal(),color:o.switchLoadingIconColor,verticalAlign:"top"},[`&${i}-checked ${i}-loading-icon`]:{color:o.switchColor}}}},tn=o=>{const{componentCls:i,trackPadding:f,handleBg:m,handleShadow:y,handleSize:S,calc:E}=o,u=`${i}-handle`;return{[i]:{[u]:{position:"absolute",top:f,insetInlineStart:f,width:S,height:S,transition:`all ${o.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:m,borderRadius:E(S).div(2).equal(),boxShadow:y,transition:`all ${o.switchDuration} ease-in-out`,content:'""'}},[`&${i}-checked ${u}`]:{insetInlineStart:`calc(100% - ${(0,B.bf)(E(S).add(f).equal())})`},[`&:not(${i}-disabled):active`]:{[`${u}::before`]:{insetInlineEnd:o.switchHandleActiveInset,insetInlineStart:0},[`&${i}-checked ${u}::before`]:{insetInlineEnd:0,insetInlineStart:o.switchHandleActiveInset}}}}},an=o=>{const{componentCls:i,trackHeight:f,trackPadding:m,innerMinMargin:y,innerMaxMargin:S,handleSize:E,calc:u}=o,c=`${i}-inner`,h=(0,B.bf)(u(E).add(u(m).mul(2)).equal()),D=(0,B.bf)(u(S).mul(2).equal());return{[i]:{[c]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:S,paddingInlineEnd:y,transition:`padding-inline-start ${o.switchDuration} ease-in-out, padding-inline-end ${o.switchDuration} ease-in-out`,[`${c}-checked, ${c}-unchecked`]:{display:"block",color:o.colorTextLightSolid,fontSize:o.fontSizeSM,transition:`margin-inline-start ${o.switchDuration} ease-in-out, margin-inline-end ${o.switchDuration} ease-in-out`,pointerEvents:"none",minHeight:f},[`${c}-checked`]:{marginInlineStart:`calc(-100% + ${h} - ${D})`,marginInlineEnd:`calc(100% - ${h} + ${D})`},[`${c}-unchecked`]:{marginTop:u(f).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`&${i}-checked ${c}`]:{paddingInlineStart:y,paddingInlineEnd:S,[`${c}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${c}-unchecked`]:{marginInlineStart:`calc(100% - ${h} + ${D})`,marginInlineEnd:`calc(-100% + ${h} - ${D})`}},[`&:not(${i}-disabled):active`]:{[`&:not(${i}-checked) ${c}`]:{[`${c}-unchecked`]:{marginInlineStart:u(m).mul(2).equal(),marginInlineEnd:u(m).mul(-1).mul(2).equal()}},[`&${i}-checked ${c}`]:{[`${c}-checked`]:{marginInlineStart:u(m).mul(-1).mul(2).equal(),marginInlineEnd:u(m).mul(2).equal()}}}}}},on=o=>{const{componentCls:i,trackHeight:f,trackMinWidth:m}=o;return{[i]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,J.Wf)(o)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:m,height:f,lineHeight:`${(0,B.bf)(f)}`,verticalAlign:"middle",background:o.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${o.motionDurationMid}`,userSelect:"none",[`&:hover:not(${i}-disabled)`]:{background:o.colorTextTertiary}}),(0,J.Qy)(o)),{[`&${i}-checked`]:{background:o.switchColor,[`&:hover:not(${i}-disabled)`]:{background:o.colorPrimaryHover}},[`&${i}-loading, &${i}-disabled`]:{cursor:"not-allowed",opacity:o.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${i}-rtl`]:{direction:"rtl"}})}},rn=o=>{const{fontSize:i,lineHeight:f,controlHeight:m,colorWhite:y}=o,S=i*f,E=m/2,u=2,c=S-u*2,h=E-u*2;return{trackHeight:S,trackHeightSM:E,trackMinWidth:c*2+u*4,trackMinWidthSM:h*2+u*2,trackPadding:u,handleBg:y,handleSize:c,handleSizeSM:h,handleShadow:`0 2px 4px 0 ${new We.C("#00230b").setAlpha(.2).toRgbString()}`,innerMinMargin:c/2,innerMaxMargin:c+u+u*2,innerMinMarginSM:h/2,innerMaxMarginSM:h+u+u*2}};var ln=(0,Ke.I$)("Switch",o=>{const i=(0,ke.TS)(o,{switchDuration:o.motionDurationMid,switchColor:o.colorPrimary,switchDisabledOpacity:o.opacityLoading,switchLoadingIconSize:o.calc(o.fontSizeIcon).mul(.75).equal(),switchLoadingIconColor:`rgba(0, 0, 0, ${o.opacityLoading})`,switchHandleActiveInset:"-30%"});return[on(i),an(i),tn(i),nn(i),Ee(i)]},rn),sn=function(o,i){var f={};for(var m in o)Object.prototype.hasOwnProperty.call(o,m)&&i.indexOf(m)<0&&(f[m]=o[m]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,m=Object.getOwnPropertySymbols(o);y<m.length;y++)i.indexOf(m[y])<0&&Object.prototype.propertyIsEnumerable.call(o,m[y])&&(f[m[y]]=o[m[y]]);return f};const dn=r.forwardRef((o,i)=>{const{prefixCls:f,size:m,disabled:y,loading:S,className:E,rootClassName:u,style:c,checked:h,value:D,defaultChecked:A,defaultValue:se,onChange:V}=o,ce=sn(o,["prefixCls","size","disabled","loading","className","rootClassName","style","checked","value","defaultChecked","defaultValue","onChange"]),[Be,ve]=(0,qe.Z)(!1,{value:h!=null?h:D,defaultValue:A!=null?A:se}),{getPrefixCls:U,direction:re,switch:q}=r.useContext(_e.E_),de=r.useContext(Ae.Z),Pe=(y!=null?y:de)||S,W=U("switch",f),ge=r.createElement("div",{className:`${W}-handle`},S&&r.createElement(Ge.Z,{className:`${W}-loading-icon`})),[z,ye,ie]=ln(W),un=(0,en.Z)(m),mn=oe()(q==null?void 0:q.className,{[`${W}-small`]:un==="small",[`${W}-loading`]:S,[`${W}-rtl`]:re==="rtl"},E,u,ye,ie),Ve=Object.assign(Object.assign({},q==null?void 0:q.style),c),Ue=function(){ve(arguments.length<=0?void 0:arguments[0]),V==null||V.apply(void 0,arguments)};return z(r.createElement(Ie.Z,{component:"Switch"},r.createElement(Je,Object.assign({},ce,{checked:Be,onChange:Ue,prefixCls:W,className:mn,style:Ve,disabled:Pe,ref:i,loadingIcon:ge}))))});dn.__ANT_SWITCH=!0;var Xe=dn}}]);