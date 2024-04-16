"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[7574],{42477:function(yn,Fe,s){s.d(Fe,{Z:function(){return Cn}});var r=s(67294),Ge=s(93967),D=s.n(Ge);function te(e){"@babel/helpers - typeof";return te=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},te(e)}function Ye(e,n){if(te(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var o=t.call(e,n||"default");if(te(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Te(e){var n=Ye(e,"string");return te(n)=="symbol"?n:n+""}function $e(e,n,t){return n=Te(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Ze(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,o)}return t}function H(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Ze(Object(t),!0).forEach(function(o){$e(e,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ze(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})}return e}function Le(e){if(Array.isArray(e))return e}function Qe(e,n){var t=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var o,l,d,v,b=[],S=!0,I=!1;try{if(d=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;S=!1}else for(;!(S=(o=d.call(t)).done)&&(b.push(o.value),b.length!==n);S=!0);}catch(M){I=!0,l=M}finally{try{if(!S&&t.return!=null&&(v=t.return(),Object(v)!==v))return}finally{if(I)throw l}}return b}}function Oe(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}function Je(e,n){if(e){if(typeof e=="string")return Oe(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Oe(e,n)}}function qe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ie(e,n){return Le(e)||Qe(e,n)||Je(e,n)||qe()}var _e=s(2788),Ae=s(8410),en=r.createContext(null),X=r.createContext({}),We=en;function F(){return F=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},F.apply(this,arguments)}var Ke=s(82225),ke=s(15105),Ee=s(64217);function nn(e,n){if(e==null)return{};var t={},o=Object.keys(e),l,d;for(d=0;d<o.length;d++)l=o[d],!(n.indexOf(l)>=0)&&(t[l]=e[l]);return t}function tn(e,n){if(e==null)return{};var t=nn(e,n),o,l;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(l=0;l<d.length;l++)o=d[l],!(n.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var an=s(42550),on=["prefixCls","className","containerRef"],rn=function(n){var t=n.prefixCls,o=n.className,l=n.containerRef,d=tn(n,on),v=r.useContext(X),b=v.panel,S=(0,an.x1)(b,l);return r.createElement("div",F({className:D()("".concat(t,"-content"),o),role:"dialog",ref:S},(0,Ee.Z)(n,{aria:!0}),{"aria-modal":"true"},d))},ln=rn,sn=s(80334);function Pe(e){return typeof e=="string"&&String(Number(e))===e?((0,sn.ZP)(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(e)):e}function fn(e){warning(!("wrapperClassName"in e),"'wrapperClassName' is removed. Please use 'rootClassName' instead."),warning(canUseDom()||!e.open,"Drawer with 'open' in SSR is not work since no place to createPortal. Please move to 'useEffect' instead.")}var a={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function i(e,n){var t,o,l,d=e.prefixCls,v=e.open,b=e.placement,S=e.inline,I=e.push,M=e.forceRender,j=e.autoFocus,$=e.keyboard,p=e.classNames,h=e.rootClassName,V=e.rootStyle,T=e.zIndex,Y=e.className,Q=e.id,J=e.style,C=e.motion,N=e.width,ee=e.height,ce=e.children,Z=e.mask,L=e.maskClosable,U=e.maskMotion,Ne=e.maskClassName,pe=e.maskStyle,de=e.afterOpenChange,re=e.onClose,ue=e.onMouseEnter,De=e.onMouseOver,je=e.onMouseLeave,Ce=e.onClick,ze=e.onKeyDown,Re=e.onKeyUp,k=e.styles,ne=r.useRef(),K=r.useRef(),ie=r.useRef();r.useImperativeHandle(n,function(){return ne.current});var me=function(R){var we=R.keyCode,xe=R.shiftKey;switch(we){case ke.Z.TAB:{if(we===ke.Z.TAB){if(!xe&&document.activeElement===ie.current){var un;(un=K.current)===null||un===void 0||un.focus({preventScroll:!0})}else if(xe&&document.activeElement===K.current){var mn;(mn=ie.current)===null||mn===void 0||mn.focus({preventScroll:!0})}}break}case ke.Z.ESC:{re&&$&&(R.stopPropagation(),re(R));break}}};r.useEffect(function(){if(v&&j){var x;(x=ne.current)===null||x===void 0||x.focus({preventScroll:!0})}},[v]);var He=r.useState(!1),Ue=Ie(He,2),hn=Ue[0],Se=Ue[1],O=r.useContext(We),fe;typeof I=="boolean"?fe=I?{}:{distance:0}:fe=I||{};var ve=(t=(o=(l=fe)===null||l===void 0?void 0:l.distance)!==null&&o!==void 0?o:O==null?void 0:O.pushDistance)!==null&&t!==void 0?t:180,Sn=r.useMemo(function(){return{pushDistance:ve,push:function(){Se(!0)},pull:function(){Se(!1)}}},[ve]);r.useEffect(function(){if(v){var x;O==null||(x=O.push)===null||x===void 0||x.call(O)}else{var R;O==null||(R=O.pull)===null||R===void 0||R.call(O)}},[v]),r.useEffect(function(){return function(){var x;O==null||(x=O.pull)===null||x===void 0||x.call(O)}},[]);var wn=Z&&r.createElement(Ke.ZP,F({key:"mask"},U,{visible:v}),function(x,R){var we=x.className,xe=x.style;return r.createElement("div",{className:D()("".concat(d,"-mask"),we,p==null?void 0:p.mask,Ne),style:H(H(H({},xe),pe),k==null?void 0:k.mask),onClick:L&&v?re:void 0,ref:R})}),xn=typeof C=="function"?C(b):C,he={};if(hn&&ve)switch(b){case"top":he.transform="translateY(".concat(ve,"px)");break;case"bottom":he.transform="translateY(".concat(-ve,"px)");break;case"left":he.transform="translateX(".concat(ve,"px)");break;default:he.transform="translateX(".concat(-ve,"px)");break}b==="left"||b==="right"?he.width=Pe(N):he.height=Pe(ee);var $n={onMouseEnter:ue,onMouseOver:De,onMouseLeave:je,onClick:Ce,onKeyDown:ze,onKeyUp:Re},On=r.createElement(Ke.ZP,F({key:"panel"},xn,{visible:v,forceRender:M,onVisibleChanged:function(R){de==null||de(R)},removeOnLeave:!1,leavedClassName:"".concat(d,"-content-wrapper-hidden")}),function(x,R){var we=x.className,xe=x.style;return r.createElement("div",F({className:D()("".concat(d,"-content-wrapper"),p==null?void 0:p.wrapper,we),style:H(H(H({},he),xe),k==null?void 0:k.wrapper)},(0,Ee.Z)(e,{data:!0})),r.createElement(ln,F({id:Q,containerRef:R,prefixCls:d,className:D()(Y,p==null?void 0:p.content),style:H(H({},J),k==null?void 0:k.content)},(0,Ee.Z)(e,{aria:!0}),$n),ce))}),gn=H({},V);return T&&(gn.zIndex=T),r.createElement(We.Provider,{value:Sn},r.createElement("div",{className:D()(d,"".concat(d,"-").concat(b),h,$e($e({},"".concat(d,"-open"),v),"".concat(d,"-inline"),S)),style:gn,tabIndex:-1,ref:ne,onKeyDown:me},wn,r.createElement("div",{tabIndex:0,ref:K,style:a,"aria-hidden":"true","data-sentinel":"start"}),On,r.createElement("div",{tabIndex:0,ref:ie,style:a,"aria-hidden":"true","data-sentinel":"end"})))}var f=r.forwardRef(i),u=f,g=function(n){var t=n.open,o=t===void 0?!1:t,l=n.prefixCls,d=l===void 0?"rc-drawer":l,v=n.placement,b=v===void 0?"right":v,S=n.autoFocus,I=S===void 0?!0:S,M=n.keyboard,j=M===void 0?!0:M,$=n.width,p=$===void 0?378:$,h=n.mask,V=h===void 0?!0:h,T=n.maskClosable,Y=T===void 0?!0:T,Q=n.getContainer,J=n.forceRender,C=n.afterOpenChange,N=n.destroyOnClose,ee=n.onMouseEnter,ce=n.onMouseOver,Z=n.onMouseLeave,L=n.onClick,U=n.onKeyDown,Ne=n.onKeyUp,pe=n.panelRef,de=r.useState(!1),re=Ie(de,2),ue=re[0],De=re[1],je=r.useState(!1),Ce=Ie(je,2),ze=Ce[0],Re=Ce[1];(0,Ae.Z)(function(){Re(!0)},[]);var k=ze?o:!1,ne=r.useRef(),K=r.useRef();(0,Ae.Z)(function(){k&&(K.current=document.activeElement)},[k]);var ie=function(Se){var O;if(De(Se),C==null||C(Se),!Se&&K.current&&!((O=ne.current)!==null&&O!==void 0&&O.contains(K.current))){var fe;(fe=K.current)===null||fe===void 0||fe.focus({preventScroll:!0})}},me=r.useMemo(function(){return{panel:pe}},[pe]);if(!J&&!ue&&!k&&N)return null;var He={onMouseEnter:ee,onMouseOver:ce,onMouseLeave:Z,onClick:L,onKeyDown:U,onKeyUp:Ne},Ue=H(H({},n),{},{open:k,prefixCls:d,placement:b,autoFocus:I,keyboard:j,width:p,mask:V,maskClosable:Y,inline:Q===!1,afterOpenChange:ie,ref:ne},He);return r.createElement(X.Provider,{value:me},r.createElement(_e.Z,{open:k||J||ue,autoDestroy:!1,getContainer:Q,autoLock:V&&(k||ue)},r.createElement(u,Ue)))},w=g,E=w,m=s(87263),c=s(33603),y=s(43945),P=s(53124),A=s(65223),le=s(4173),q=s(16569),_=s(69760),ge=e=>{var n,t;const{prefixCls:o,title:l,footer:d,extra:v,onClose:b,headerStyle:S,bodyStyle:I,footerStyle:M,children:j,classNames:$,styles:p}=e,{drawer:h}=r.useContext(P.E_),V=r.useCallback(C=>r.createElement("button",{type:"button",onClick:b,"aria-label":"Close",className:`${o}-close`},C),[b]),[T,Y]=(0,_.Z)((0,_.w)(e),(0,_.w)(h),{closable:!0,closeIconRender:V}),Q=r.useMemo(()=>{var C,N;return!l&&!T?null:r.createElement("div",{style:Object.assign(Object.assign(Object.assign({},(C=h==null?void 0:h.styles)===null||C===void 0?void 0:C.header),S),p==null?void 0:p.header),className:D()(`${o}-header`,{[`${o}-header-close-only`]:T&&!l&&!v},(N=h==null?void 0:h.classNames)===null||N===void 0?void 0:N.header,$==null?void 0:$.header)},r.createElement("div",{className:`${o}-header-title`},Y,l&&r.createElement("div",{className:`${o}-title`},l)),v&&r.createElement("div",{className:`${o}-extra`},v))},[T,Y,v,S,o,l]),J=r.useMemo(()=>{var C,N;if(!d)return null;const ee=`${o}-footer`;return r.createElement("div",{className:D()(ee,(C=h==null?void 0:h.classNames)===null||C===void 0?void 0:C.footer,$==null?void 0:$.footer),style:Object.assign(Object.assign(Object.assign({},(N=h==null?void 0:h.styles)===null||N===void 0?void 0:N.footer),M),p==null?void 0:p.footer)},d)},[d,M,o]);return r.createElement(r.Fragment,null,Q,r.createElement("div",{className:D()(`${o}-body`,$==null?void 0:$.body,(n=h==null?void 0:h.classNames)===null||n===void 0?void 0:n.body),style:Object.assign(Object.assign(Object.assign({},(t=h==null?void 0:h.styles)===null||t===void 0?void 0:t.body),I),p==null?void 0:p.body)},j),J)},B=s(54548),ae=s(14747),G=s(91945),se=s(45503);const Me=e=>{const n="100%";return{left:`translateX(-${n})`,right:`translateX(${n})`,top:`translateY(-${n})`,bottom:`translateY(${n})`}[e]},W=(e,n)=>({"&-enter, &-appear":Object.assign(Object.assign({},e),{"&-active":n}),"&-leave":Object.assign(Object.assign({},n),{"&-active":e})}),ye=(e,n)=>Object.assign({"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:`all ${n}`}}},W({opacity:e},{opacity:1})),z=(e,n)=>[ye(.7,n),W({transform:Me(e)},{transform:"none"})];var oe=e=>{const{componentCls:n,motionDurationSlow:t}=e;return{[n]:{[`${n}-mask-motion`]:ye(0,t),[`${n}-panel-motion`]:["left","right","top","bottom"].reduce((o,l)=>Object.assign(Object.assign({},o),{[`&-${l}`]:z(l,t)}),{})}}};const cn=e=>{const{borderRadiusSM:n,componentCls:t,zIndexPopup:o,colorBgMask:l,colorBgElevated:d,motionDurationSlow:v,motionDurationMid:b,paddingXS:S,padding:I,paddingLG:M,fontSizeLG:j,lineHeightLG:$,lineWidth:p,lineType:h,colorSplit:V,marginXS:T,colorIcon:Y,colorIconHover:Q,colorBgTextHover:J,colorBgTextActive:C,colorText:N,fontWeightStrong:ee,footerPaddingBlock:ce,footerPaddingInline:Z,calc:L}=e,U=`${t}-content-wrapper`;return{[t]:{position:"fixed",inset:0,zIndex:o,pointerEvents:"none","&-pure":{position:"relative",background:d,display:"flex",flexDirection:"column",[`&${t}-left`]:{boxShadow:e.boxShadowDrawerLeft},[`&${t}-right`]:{boxShadow:e.boxShadowDrawerRight},[`&${t}-top`]:{boxShadow:e.boxShadowDrawerUp},[`&${t}-bottom`]:{boxShadow:e.boxShadowDrawerDown}},"&-inline":{position:"absolute"},[`${t}-mask`]:{position:"absolute",inset:0,zIndex:o,background:l,pointerEvents:"auto"},[U]:{position:"absolute",zIndex:o,maxWidth:"100vw",transition:`all ${v}`,"&-hidden":{display:"none"}},[`&-left > ${U}`]:{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowDrawerLeft},[`&-right > ${U}`]:{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:e.boxShadowDrawerRight},[`&-top > ${U}`]:{top:0,insetInline:0,boxShadow:e.boxShadowDrawerUp},[`&-bottom > ${U}`]:{bottom:0,insetInline:0,boxShadow:e.boxShadowDrawerDown},[`${t}-content`]:{display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"auto",background:d,pointerEvents:"auto"},[`${t}-header`]:{display:"flex",flex:0,alignItems:"center",padding:`${(0,B.bf)(I)} ${(0,B.bf)(M)}`,fontSize:j,lineHeight:$,borderBottom:`${(0,B.bf)(p)} ${h} ${V}`,"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}},[`${t}-extra`]:{flex:"none"},[`${t}-close`]:Object.assign({display:"inline-flex",width:L(j).add(S).equal(),height:L(j).add(S).equal(),borderRadius:n,justifyContent:"center",alignItems:"center",marginInlineEnd:T,color:Y,fontWeight:ee,fontSize:j,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,cursor:"pointer",transition:`all ${b}`,textRendering:"auto","&:hover":{color:Q,backgroundColor:J,textDecoration:"none"},"&:active":{backgroundColor:C}},(0,ae.Qy)(e)),[`${t}-title`]:{flex:1,margin:0,color:N,fontWeight:e.fontWeightStrong,fontSize:j,lineHeight:$},[`${t}-body`]:{flex:1,minWidth:0,minHeight:0,padding:M,overflow:"auto"},[`${t}-footer`]:{flexShrink:0,padding:`${(0,B.bf)(ce)} ${(0,B.bf)(Z)}`,borderTop:`${(0,B.bf)(p)} ${h} ${V}`},"&-rtl":{direction:"rtl"}}}},dn=e=>({zIndexPopup:e.zIndexPopupBase,footerPaddingBlock:e.paddingXS,footerPaddingInline:e.padding});var Be=(0,G.I$)("Drawer",e=>{const n=(0,se.TS)(e,{});return[cn(n),oe(n)]},dn),Ve=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(e);l<o.length;l++)n.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(t[o[l]]=e[o[l]]);return t};const In=null,bn={distance:180},vn=e=>{var n;const{rootClassName:t,width:o,height:l,size:d="default",mask:v=!0,push:b=bn,open:S,afterOpenChange:I,onClose:M,prefixCls:j,getContainer:$,style:p,className:h,visible:V,afterVisibleChange:T,maskStyle:Y,drawerStyle:Q,contentWrapperStyle:J}=e,C=Ve(e,["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","style","className","visible","afterVisibleChange","maskStyle","drawerStyle","contentWrapperStyle"]),{getPopupContainer:N,getPrefixCls:ee,direction:ce,drawer:Z}=r.useContext(P.E_),L=ee("drawer",j),[U,Ne,pe]=Be(L),de=$===void 0&&N?()=>N(document.body):$,re=D()({"no-mask":!v,[`${L}-rtl`]:ce==="rtl"},t,Ne,pe),ue=r.useMemo(()=>o!=null?o:d==="large"?736:378,[o,d]),De=r.useMemo(()=>l!=null?l:d==="large"?736:378,[l,d]),je={motionName:(0,c.m)(L,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},Ce=He=>({motionName:(0,c.m)(L,`panel-motion-${He}`),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}),ze=(0,q.H)(),[Re,k]=(0,m.Cn)("Drawer",C.zIndex),{classNames:ne={},styles:K={}}=C,{classNames:ie={},styles:me={}}=Z||{};return U(r.createElement(le.BR,null,r.createElement(A.Ux,{status:!0,override:!0},r.createElement(y.Z.Provider,{value:k},r.createElement(E,Object.assign({prefixCls:L,onClose:M,maskMotion:je,motion:Ce},C,{classNames:{mask:D()(ne.mask,ie.mask),content:D()(ne.content,ie.content)},styles:{mask:Object.assign(Object.assign(Object.assign({},K.mask),Y),me.mask),content:Object.assign(Object.assign(Object.assign({},K.content),Q),me.content),wrapper:Object.assign(Object.assign(Object.assign({},K.wrapper),J),me.wrapper)},open:S!=null?S:V,mask:v,push:b,width:ue,height:De,style:Object.assign(Object.assign({},Z==null?void 0:Z.style),p),className:D()(Z==null?void 0:Z.className,h),rootClassName:re,getContainer:de,afterOpenChange:I!=null?I:T,panelRef:ze,zIndex:Re}),r.createElement(ge,Object.assign({prefixCls:L},C,{onClose:M})))))))},pn=e=>{const{prefixCls:n,style:t,className:o,placement:l="right"}=e,d=Ve(e,["prefixCls","style","className","placement"]),{getPrefixCls:v}=r.useContext(P.E_),b=v("drawer",n),[S,I,M]=Be(b),j=D()(b,`${b}-pure`,`${b}-${l}`,I,M,o);return S(r.createElement("div",{className:j,style:t},r.createElement(ge,Object.assign({prefixCls:b},d))))};vn._InternalPanelDoNotUseOrYouWillBeFired=pn;var Cn=vn},72269:function(yn,Fe,s){s.d(Fe,{Z:function(){return fn}});var r=s(67294),Ge=s(50888),D=s(93967),te=s.n(D),Ye=s(87462),Te=s(4942),$e=s(97685),Ze=s(91),H=s(21770),Le=s(15105),Qe=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],Oe=r.forwardRef(function(a,i){var f,u=a.prefixCls,g=u===void 0?"rc-switch":u,w=a.className,E=a.checked,m=a.defaultChecked,c=a.disabled,y=a.loadingIcon,P=a.checkedChildren,A=a.unCheckedChildren,le=a.onClick,q=a.onChange,_=a.onKeyDown,Xe=(0,Ze.Z)(a,Qe),ge=(0,H.Z)(!1,{value:E,defaultValue:m}),B=(0,$e.Z)(ge,2),ae=B[0],G=B[1];function se(z,be){var oe=ae;return c||(oe=z,G(oe),q==null||q(oe,be)),oe}function Me(z){z.which===Le.Z.LEFT?se(!1,z):z.which===Le.Z.RIGHT&&se(!0,z),_==null||_(z)}function W(z){var be=se(!ae,z);le==null||le(be,z)}var ye=te()(g,w,(f={},(0,Te.Z)(f,"".concat(g,"-checked"),ae),(0,Te.Z)(f,"".concat(g,"-disabled"),c),f));return r.createElement("button",(0,Ye.Z)({},Xe,{type:"button",role:"switch","aria-checked":ae,disabled:c,className:ye,ref:i,onKeyDown:Me,onClick:W}),y,r.createElement("span",{className:"".concat(g,"-inner")},r.createElement("span",{className:"".concat(g,"-inner-checked")},P),r.createElement("span",{className:"".concat(g,"-inner-unchecked")},A)))});Oe.displayName="Switch";var Je=Oe,qe=s(5663),Ie=s(45353),_e=s(53124),Ae=s(98866),en=s(98675),X=s(54548),We=s(10274),F=s(14747),Ke=s(91945),ke=s(45503);const Ee=a=>{const{componentCls:i,trackHeightSM:f,trackPadding:u,trackMinWidthSM:g,innerMinMarginSM:w,innerMaxMarginSM:E,handleSizeSM:m,calc:c}=a,y=`${i}-inner`,P=(0,X.bf)(c(m).add(c(u).mul(2)).equal()),A=(0,X.bf)(c(E).mul(2).equal());return{[i]:{[`&${i}-small`]:{minWidth:g,height:f,lineHeight:(0,X.bf)(f),[`${i}-inner`]:{paddingInlineStart:E,paddingInlineEnd:w,[`${y}-checked`]:{marginInlineStart:`calc(-100% + ${P} - ${A})`,marginInlineEnd:`calc(100% - ${P} + ${A})`},[`${y}-unchecked`]:{marginTop:c(f).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`${i}-handle`]:{width:m,height:m},[`${i}-loading-icon`]:{top:c(c(m).sub(a.switchLoadingIconSize)).div(2).equal(),fontSize:a.switchLoadingIconSize},[`&${i}-checked`]:{[`${i}-inner`]:{paddingInlineStart:w,paddingInlineEnd:E,[`${y}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${y}-unchecked`]:{marginInlineStart:`calc(100% - ${P} + ${A})`,marginInlineEnd:`calc(-100% + ${P} - ${A})`}},[`${i}-handle`]:{insetInlineStart:`calc(100% - ${(0,X.bf)(c(m).add(u).equal())})`}},[`&:not(${i}-disabled):active`]:{[`&:not(${i}-checked) ${y}`]:{[`${y}-unchecked`]:{marginInlineStart:c(a.marginXXS).div(2).equal(),marginInlineEnd:c(a.marginXXS).mul(-1).div(2).equal()}},[`&${i}-checked ${y}`]:{[`${y}-checked`]:{marginInlineStart:c(a.marginXXS).mul(-1).div(2).equal(),marginInlineEnd:c(a.marginXXS).div(2).equal()}}}}}}},nn=a=>{const{componentCls:i,handleSize:f,calc:u}=a;return{[i]:{[`${i}-loading-icon${a.iconCls}`]:{position:"relative",top:u(u(f).sub(a.fontSize)).div(2).equal(),color:a.switchLoadingIconColor,verticalAlign:"top"},[`&${i}-checked ${i}-loading-icon`]:{color:a.switchColor}}}},tn=a=>{const{componentCls:i,trackPadding:f,handleBg:u,handleShadow:g,handleSize:w,calc:E}=a,m=`${i}-handle`;return{[i]:{[m]:{position:"absolute",top:f,insetInlineStart:f,width:w,height:w,transition:`all ${a.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:u,borderRadius:E(w).div(2).equal(),boxShadow:g,transition:`all ${a.switchDuration} ease-in-out`,content:'""'}},[`&${i}-checked ${m}`]:{insetInlineStart:`calc(100% - ${(0,X.bf)(E(w).add(f).equal())})`},[`&:not(${i}-disabled):active`]:{[`${m}::before`]:{insetInlineEnd:a.switchHandleActiveInset,insetInlineStart:0},[`&${i}-checked ${m}::before`]:{insetInlineEnd:0,insetInlineStart:a.switchHandleActiveInset}}}}},an=a=>{const{componentCls:i,trackHeight:f,trackPadding:u,innerMinMargin:g,innerMaxMargin:w,handleSize:E,calc:m}=a,c=`${i}-inner`,y=(0,X.bf)(m(E).add(m(u).mul(2)).equal()),P=(0,X.bf)(m(w).mul(2).equal());return{[i]:{[c]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:w,paddingInlineEnd:g,transition:`padding-inline-start ${a.switchDuration} ease-in-out, padding-inline-end ${a.switchDuration} ease-in-out`,[`${c}-checked, ${c}-unchecked`]:{display:"block",color:a.colorTextLightSolid,fontSize:a.fontSizeSM,transition:`margin-inline-start ${a.switchDuration} ease-in-out, margin-inline-end ${a.switchDuration} ease-in-out`,pointerEvents:"none"},[`${c}-checked`]:{marginInlineStart:`calc(-100% + ${y} - ${P})`,marginInlineEnd:`calc(100% - ${y} + ${P})`},[`${c}-unchecked`]:{marginTop:m(f).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`&${i}-checked ${c}`]:{paddingInlineStart:g,paddingInlineEnd:w,[`${c}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${c}-unchecked`]:{marginInlineStart:`calc(100% - ${y} + ${P})`,marginInlineEnd:`calc(-100% + ${y} - ${P})`}},[`&:not(${i}-disabled):active`]:{[`&:not(${i}-checked) ${c}`]:{[`${c}-unchecked`]:{marginInlineStart:m(u).mul(2).equal(),marginInlineEnd:m(u).mul(-1).mul(2).equal()}},[`&${i}-checked ${c}`]:{[`${c}-checked`]:{marginInlineStart:m(u).mul(-1).mul(2).equal(),marginInlineEnd:m(u).mul(2).equal()}}}}}},on=a=>{const{componentCls:i,trackHeight:f,trackMinWidth:u}=a;return{[i]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,F.Wf)(a)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:u,height:f,lineHeight:`${(0,X.bf)(f)}`,verticalAlign:"middle",background:a.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${a.motionDurationMid}`,userSelect:"none",[`&:hover:not(${i}-disabled)`]:{background:a.colorTextTertiary}}),(0,F.Qy)(a)),{[`&${i}-checked`]:{background:a.switchColor,[`&:hover:not(${i}-disabled)`]:{background:a.colorPrimaryHover}},[`&${i}-loading, &${i}-disabled`]:{cursor:"not-allowed",opacity:a.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${i}-rtl`]:{direction:"rtl"}})}},rn=a=>{const{fontSize:i,lineHeight:f,controlHeight:u,colorWhite:g}=a,w=i*f,E=u/2,m=2,c=w-m*2,y=E-m*2;return{trackHeight:w,trackHeightSM:E,trackMinWidth:c*2+m*4,trackMinWidthSM:y*2+m*2,trackPadding:m,handleBg:g,handleSize:c,handleSizeSM:y,handleShadow:`0 2px 4px 0 ${new We.C("#00230b").setAlpha(.2).toRgbString()}`,innerMinMargin:c/2,innerMaxMargin:c+m+m*2,innerMinMarginSM:y/2,innerMaxMarginSM:y+m+m*2}};var ln=(0,Ke.I$)("Switch",a=>{const i=(0,ke.TS)(a,{switchDuration:a.motionDurationMid,switchColor:a.colorPrimary,switchDisabledOpacity:a.opacityLoading,switchLoadingIconSize:a.calc(a.fontSizeIcon).mul(.75).equal(),switchLoadingIconColor:`rgba(0, 0, 0, ${a.opacityLoading})`,switchHandleActiveInset:"-30%"});return[on(i),an(i),tn(i),nn(i),Ee(i)]},rn),sn=function(a,i){var f={};for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&i.indexOf(u)<0&&(f[u]=a[u]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,u=Object.getOwnPropertySymbols(a);g<u.length;g++)i.indexOf(u[g])<0&&Object.prototype.propertyIsEnumerable.call(a,u[g])&&(f[u[g]]=a[u[g]]);return f};const Pe=r.forwardRef((a,i)=>{const{prefixCls:f,size:u,disabled:g,loading:w,className:E,rootClassName:m,style:c,checked:y,value:P,defaultChecked:A,defaultValue:le,onChange:q}=a,_=sn(a,["prefixCls","size","disabled","loading","className","rootClassName","style","checked","value","defaultChecked","defaultValue","onChange"]),[Xe,ge]=(0,qe.Z)(!1,{value:y!=null?y:P,defaultValue:A!=null?A:le}),{getPrefixCls:B,direction:ae,switch:G}=r.useContext(_e.E_),se=r.useContext(Ae.Z),Me=(g!=null?g:se)||w,W=B("switch",f),ye=r.createElement("div",{className:`${W}-handle`},w&&r.createElement(Ge.Z,{className:`${W}-loading-icon`})),[z,be,oe]=ln(W),cn=(0,en.Z)(u),dn=te()(G==null?void 0:G.className,{[`${W}-small`]:cn==="small",[`${W}-loading`]:w,[`${W}-rtl`]:ae==="rtl"},E,m,be,oe),Be=Object.assign(Object.assign({},G==null?void 0:G.style),c),Ve=function(){ge(arguments.length<=0?void 0:arguments[0]),q==null||q.apply(void 0,arguments)};return z(r.createElement(Ie.Z,{component:"Switch"},r.createElement(Je,Object.assign({},_,{checked:Xe,onChange:Ve,prefixCls:W,className:dn,style:Be,disabled:Me,ref:i,loadingIcon:ye}))))});Pe.__ANT_SWITCH=!0;var fn=Pe}}]);
