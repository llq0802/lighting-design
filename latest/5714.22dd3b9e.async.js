(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[5714],{98787:function(b,g,e){"use strict";e.d(g,{o2:function(){return c},yT:function(){return i}});var o=e(74902),m=e(8796);const s=m.i.map(r=>`${r}-inverse`),n=["success","processing","error","default","warning"];function c(r){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0)?[].concat((0,o.Z)(s),(0,o.Z)(m.i)).includes(r):m.i.includes(r)}function i(r){return n.includes(r)}},33603:function(b,g,e){"use strict";e.d(g,{m:function(){return r}});const o=()=>({height:0,opacity:0}),m=t=>{const{scrollHeight:f}=t;return{height:f,opacity:1}},s=t=>({height:t?t.offsetHeight:0}),n=(t,f)=>(f==null?void 0:f.deadline)===!0||f.propertyName==="height",c=function(){return{motionName:`${arguments.length>0&&arguments[0]!==void 0?arguments[0]:"ant"}-motion-collapse`,onAppearStart:o,onEnterStart:o,onAppearActive:m,onEnterActive:m,onLeaveStart:s,onLeaveActive:o,onAppearEnd:n,onEnterEnd:n,onLeaveEnd:n,motionDeadline:500}},i=null,r=(t,f,v)=>v!==void 0?v:`${t}-${f}`;g.Z=c},80636:function(b,g,e){"use strict";e.d(g,{Z:function(){return i}});var o=e(97414);function m(r,t,f,v){if(v===!1)return{adjustX:!1,adjustY:!1};const $=v&&typeof v=="object"?v:{},y={};switch(r){case"top":case"bottom":y.shiftX=t.dropdownArrowOffset*2+f,y.shiftY=!0,y.adjustY=!0;break;case"left":case"right":y.shiftY=t.dropdownArrowOffsetVertical*2+f,y.shiftX=!0,y.adjustX=!0;break}const O=Object.assign(Object.assign({},y),$);return O.shiftX||(O.adjustX=!0),O.shiftY||(O.adjustY=!0),O}const s={left:{points:["cr","cl"]},right:{points:["cl","cr"]},top:{points:["bc","tc"]},bottom:{points:["tc","bc"]},topLeft:{points:["bl","tl"]},leftTop:{points:["tr","tl"]},topRight:{points:["br","tr"]},rightTop:{points:["tl","tr"]},bottomRight:{points:["tr","br"]},rightBottom:{points:["bl","br"]},bottomLeft:{points:["tl","bl"]},leftBottom:{points:["br","bl"]}},n={topLeft:{points:["bl","tc"]},leftTop:{points:["tr","cl"]},topRight:{points:["br","tc"]},rightTop:{points:["tl","cr"]},bottomRight:{points:["tr","bc"]},rightBottom:{points:["bl","cr"]},bottomLeft:{points:["tl","bc"]},leftBottom:{points:["br","cl"]}},c=new Set(["topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]);function i(r){const{arrowWidth:t,autoAdjustOverflow:f,arrowPointAtCenter:v,offset:$,borderRadius:y,visibleFirst:O}=r,P=t/2,T={};return Object.keys(s).forEach(w=>{const C=v&&n[w]||s[w],u=Object.assign(Object.assign({},C),{offset:[0,0],dynamicInset:!0});switch(T[w]=u,c.has(w)&&(u.autoArrow=!1),w){case"top":case"topLeft":case"topRight":u.offset[1]=-P-$;break;case"bottom":case"bottomLeft":case"bottomRight":u.offset[1]=P+$;break;case"left":case"leftTop":case"leftBottom":u.offset[0]=-P-$;break;case"right":case"rightTop":case"rightBottom":u.offset[0]=P+$;break}const a=(0,o.fS)({contentRadius:y,limitVerticalRadius:!0});if(v)switch(w){case"topLeft":case"bottomLeft":u.offset[0]=-a.dropdownArrowOffset-P;break;case"topRight":case"bottomRight":u.offset[0]=a.dropdownArrowOffset+P;break;case"leftTop":case"rightTop":u.offset[1]=-a.dropdownArrowOffset-P;break;case"leftBottom":case"rightBottom":u.offset[1]=a.dropdownArrowOffset+P;break}u.overflow=m(w,a,t,f),O&&(u.htmlRegion="visibleFirst")}),T}},27288:function(b,g,e){"use strict";e.d(g,{ln:function(){return i}});var o=e(67294),m=e(80334);function s(){}let n=null;const c=o.createContext({}),i=()=>{const t=()=>{};return t.deprecated=s,t};var r=null},93590:function(b,g,e){"use strict";e.d(g,{R:function(){return s}});const o=n=>({animationDuration:n,animationFillMode:"both"}),m=n=>({animationDuration:n,animationFillMode:"both"}),s=function(n,c,i,r){const f=(arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1)?"&":"";return{[`
      ${f}${n}-enter,
      ${f}${n}-appear
    `]:Object.assign(Object.assign({},o(r)),{animationPlayState:"paused"}),[`${f}${n}-leave`]:Object.assign(Object.assign({},m(r)),{animationPlayState:"paused"}),[`
      ${f}${n}-enter${n}-enter-active,
      ${f}${n}-appear${n}-appear-active
    `]:{animationName:c,animationPlayState:"running"},[`${f}${n}-leave${n}-leave-active`]:{animationName:i,animationPlayState:"running",pointerEvents:"none"}}}},50438:function(b,g,e){"use strict";e.d(g,{_y:function(){return w},kr:function(){return s}});var o=e(77794),m=e(93590);const s=new o.Keyframes("antZoomIn",{"0%":{transform:"scale(0.2)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),n=new o.Keyframes("antZoomOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.2)",opacity:0}}),c=new o.Keyframes("antZoomBigIn",{"0%":{transform:"scale(0.8)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),i=new o.Keyframes("antZoomBigOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.8)",opacity:0}}),r=new o.Keyframes("antZoomUpIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 0%"}}),t=new o.Keyframes("antZoomUpOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 0%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0}}),f=new o.Keyframes("antZoomLeftIn",{"0%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"0% 50%"}}),v=new o.Keyframes("antZoomLeftOut",{"0%":{transform:"scale(1)",transformOrigin:"0% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0}}),$=new o.Keyframes("antZoomRightIn",{"0%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"100% 50%"}}),y=new o.Keyframes("antZoomRightOut",{"0%":{transform:"scale(1)",transformOrigin:"100% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0}}),O=new o.Keyframes("antZoomDownIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 100%"}}),P=new o.Keyframes("antZoomDownOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 100%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0}}),T={zoom:{inKeyframes:s,outKeyframes:n},"zoom-big":{inKeyframes:c,outKeyframes:i},"zoom-big-fast":{inKeyframes:c,outKeyframes:i},"zoom-left":{inKeyframes:f,outKeyframes:v},"zoom-right":{inKeyframes:$,outKeyframes:y},"zoom-up":{inKeyframes:r,outKeyframes:t},"zoom-down":{inKeyframes:O,outKeyframes:P}},w=(C,u)=>{const{antCls:a}=C,S=`${a}-${u}`,{inKeyframes:j,outKeyframes:B}=T[u];return[(0,m.R)(S,j,B,u==="zoom-big-fast"?C.motionDurationFast:C.motionDurationMid),{[`
        ${S}-enter,
        ${S}-appear
      `]:{transform:"scale(0)",opacity:0,animationTimingFunction:C.motionEaseOutCirc,"&-prepare":{transform:"none"}},[`${S}-leave`]:{animationTimingFunction:C.motionEaseInOutCirc}}]}},97414:function(b,g,e){"use strict";e.d(g,{ZP:function(){return c},fS:function(){return s},qN:function(){return m}});var o=e(79511);const m=8;function s(i){const r=m,{contentRadius:t,limitVerticalRadius:f}=i,v=t>12?t+2:12;return{dropdownArrowOffset:v,dropdownArrowOffsetVertical:f?r:v}}function n(i,r){return i?r:{}}function c(i,r){const{componentCls:t,sizePopupArrow:f,borderRadiusXS:v,borderRadiusOuter:$,boxShadowPopoverArrow:y}=i,{colorBg:O,contentRadius:P=i.borderRadiusLG,limitVerticalRadius:T,arrowDistance:w=0,arrowPlacement:C={left:!0,right:!0,top:!0,bottom:!0}}=r,{dropdownArrowOffsetVertical:u,dropdownArrowOffset:a}=s({contentRadius:P,limitVerticalRadius:T});return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({[`${t}-arrow`]:[Object.assign(Object.assign({position:"absolute",zIndex:1,display:"block"},(0,o.r)(f,v,$,O,y)),{"&:before":{background:O}})]},n(!!C.top,{[[`&-placement-top ${t}-arrow`,`&-placement-topLeft ${t}-arrow`,`&-placement-topRight ${t}-arrow`].join(",")]:{bottom:w,transform:"translateY(100%) rotate(180deg)"},[`&-placement-top ${t}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(100%) rotate(180deg)"},[`&-placement-topLeft ${t}-arrow`]:{left:{_skip_check_:!0,value:a}},[`&-placement-topRight ${t}-arrow`]:{right:{_skip_check_:!0,value:a}}})),n(!!C.bottom,{[[`&-placement-bottom ${t}-arrow`,`&-placement-bottomLeft ${t}-arrow`,`&-placement-bottomRight ${t}-arrow`].join(",")]:{top:w,transform:"translateY(-100%)"},[`&-placement-bottom ${t}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(-100%)"},[`&-placement-bottomLeft ${t}-arrow`]:{left:{_skip_check_:!0,value:a}},[`&-placement-bottomRight ${t}-arrow`]:{right:{_skip_check_:!0,value:a}}})),n(!!C.left,{[[`&-placement-left ${t}-arrow`,`&-placement-leftTop ${t}-arrow`,`&-placement-leftBottom ${t}-arrow`].join(",")]:{right:{_skip_check_:!0,value:w},transform:"translateX(100%) rotate(90deg)"},[`&-placement-left ${t}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(100%) rotate(90deg)"},[`&-placement-leftTop ${t}-arrow`]:{top:u},[`&-placement-leftBottom ${t}-arrow`]:{bottom:u}})),n(!!C.right,{[[`&-placement-right ${t}-arrow`,`&-placement-rightTop ${t}-arrow`,`&-placement-rightBottom ${t}-arrow`].join(",")]:{left:{_skip_check_:!0,value:w},transform:"translateX(-100%) rotate(-90deg)"},[`&-placement-right ${t}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(-100%) rotate(-90deg)"},[`&-placement-rightTop ${t}-arrow`]:{top:u},[`&-placement-rightBottom ${t}-arrow`]:{bottom:u}}))}}},79511:function(b,g,e){"use strict";e.d(g,{r:function(){return o}});const o=(m,s,n,c,i)=>{const r=m/2,t=0,f=r,v=n*1/Math.sqrt(2),$=r-n*(1-1/Math.sqrt(2)),y=r-s*(1/Math.sqrt(2)),O=n*(Math.sqrt(2)-1)+s*(1/Math.sqrt(2)),P=2*r-y,T=O,w=2*r-v,C=$,u=2*r-t,a=f,S=r*Math.sqrt(2)+n*(Math.sqrt(2)-2),j=n*(Math.sqrt(2)-1);return{pointerEvents:"none",width:m,height:m,overflow:"hidden","&::before":{position:"absolute",bottom:0,insetInlineStart:0,width:m,height:m/2,background:c,clipPath:{_multi_value_:!0,value:[`polygon(${j}px 100%, 50% ${j}px, ${2*r-j}px 100%, ${j}px 100%)`,`path('M ${t} ${f} A ${n} ${n} 0 0 0 ${v} ${$} L ${y} ${O} A ${s} ${s} 0 0 1 ${P} ${T} L ${w} ${C} A ${n} ${n} 0 0 0 ${u} ${a} Z')`]},content:'""'},"&::after":{content:'""',position:"absolute",width:S,height:S,bottom:0,insetInline:0,margin:"auto",borderRadius:{_skip_check_:!0,value:`0 0 ${s}px 0`},transform:"translateY(50%) rotate(-135deg)",boxShadow:i,zIndex:0,background:"transparent"}}}},8796:function(b,g,e){"use strict";e.d(g,{i:function(){return o}});const o=["blue","purple","cyan","green","magenta","pink","red","orange","yellow","volcano","geekblue","lime","gold"]},98719:function(b,g,e){"use strict";e.d(g,{Z:function(){return m}});var o=e(8796);function m(s,n){return o.i.reduce((c,i)=>{const r=s[`${i}1`],t=s[`${i}3`],f=s[`${i}6`],v=s[`${i}7`];return Object.assign(Object.assign({},c),n(i,{lightColor:r,lightBorderColor:t,darkColor:f,textColor:v}))},{})}},83062:function(b,g,e){"use strict";e.d(g,{Z:function(){return at}});var o=e(67294),m=e(94184),s=e.n(m),n=e(92419),c=e(21770),i=e(33603),r=e(80636),t=e(96159),f=e(27288),v=e(53124),$=e(4173),y=e(29691),O=e(14747),P=e(50438),T=e(97414),w=e(98719),C=e(45503),u=e(67968);const a=l=>{const{componentCls:d,tooltipMaxWidth:x,tooltipColor:p,tooltipBg:h,tooltipBorderRadius:A,zIndexPopup:_,controlHeight:L,boxShadowSecondary:E,paddingSM:N,paddingXS:D,tooltipRadiusOuter:R}=l;return[{[d]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,O.Wf)(l)),{position:"absolute",zIndex:_,display:"block",width:"max-content",maxWidth:x,visibility:"visible",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","&-hidden":{display:"none"},"--antd-arrow-background-color":h,[`${d}-inner`]:{minWidth:L,minHeight:L,padding:`${N/2}px ${D}px`,color:p,textAlign:"start",textDecoration:"none",wordWrap:"break-word",backgroundColor:h,borderRadius:A,boxShadow:E,boxSizing:"border-box"},[["&-placement-left","&-placement-leftTop","&-placement-leftBottom","&-placement-right","&-placement-rightTop","&-placement-rightBottom"].join(",")]:{[`${d}-inner`]:{borderRadius:Math.min(A,T.qN)}},[`${d}-content`]:{position:"relative"}}),(0,w.Z)(l,(Z,z)=>{let{darkColor:I}=z;return{[`&${d}-${Z}`]:{[`${d}-inner`]:{backgroundColor:I},[`${d}-arrow`]:{"--antd-arrow-background-color":I}}}})),{"&-rtl":{direction:"rtl"}})},(0,T.ZP)((0,C.TS)(l,{borderRadiusOuter:R}),{colorBg:"var(--antd-arrow-background-color)",contentRadius:A,limitVerticalRadius:!0}),{[`${d}-pure`]:{position:"relative",maxWidth:"none",margin:l.sizePopupArrow}}]};var S=(l,d)=>(0,u.Z)("Tooltip",p=>{if(d===!1)return[];const{borderRadius:h,colorTextLightSolid:A,colorBgDefault:_,borderRadiusOuter:L}=p,E=(0,C.TS)(p,{tooltipMaxWidth:250,tooltipColor:A,tooltipBorderRadius:h,tooltipBg:_,tooltipRadiusOuter:L>4?4:L});return[a(E),(0,P._y)(p,"zoom-big-fast")]},p=>{let{zIndexPopupBase:h,colorBgSpotlight:A}=p;return{zIndexPopup:h+70,colorBgDefault:A}},{resetStyle:!1})(l),j=e(98787);function B(l,d){const x=(0,j.o2)(d),p=s()({[`${l}-${d}`]:d&&x}),h={},A={};return d&&!x&&(h.background=d,A["--antd-arrow-background-color"]=d),{className:p,overlayStyle:h,arrowStyle:A}}var k=l=>{const{prefixCls:d,className:x,placement:p="top",title:h,color:A,overlayInnerStyle:_}=l,{getPrefixCls:L}=o.useContext(v.E_),E=L("tooltip",d),[N,D]=S(E,!0),R=B(E,A),Z=R.arrowStyle,z=Object.assign(Object.assign({},_),R.overlayStyle),I=s()(D,E,`${E}-pure`,`${E}-placement-${p}`,x,R.className);return N(o.createElement("div",{className:I,style:Z},o.createElement("div",{className:`${E}-arrow`}),o.createElement(n.G,Object.assign({},l,{className:D,prefixCls:E,overlayInnerStyle:z}),h)))},rt=function(l,d){var x={};for(var p in l)Object.prototype.hasOwnProperty.call(l,p)&&d.indexOf(p)<0&&(x[p]=l[p]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,p=Object.getOwnPropertySymbols(l);h<p.length;h++)d.indexOf(p[h])<0&&Object.prototype.propertyIsEnumerable.call(l,p[h])&&(x[p[h]]=l[p[h]]);return x};const U=o.forwardRef((l,d)=>{var x,p;const{prefixCls:h,openClassName:A,getTooltipContainer:_,overlayClassName:L,color:E,overlayInnerStyle:N,children:D,afterOpenChange:R,afterVisibleChange:Z,destroyTooltipOnHide:z,arrow:I=!0,title:K,overlay:Y,builtinPlacements:G,arrowPointAtCenter:J=!1,autoAdjustOverflow:st=!0}=l,Q=!!I,[,W]=(0,y.Z)(),{getPopupContainer:it,getPrefixCls:q,direction:tt}=o.useContext(v.E_),et=(0,f.ln)("Tooltip"),ot=o.useRef(null),lt=()=>{var M;(M=ot.current)===null||M===void 0||M.forceAlign()};o.useImperativeHandle(d,()=>({forceAlign:lt,forcePopupAlign:()=>{et.deprecated(!1,"forcePopupAlign","forceAlign"),lt()}}));const[gt,dt]=(0,c.Z)(!1,{value:(x=l.open)!==null&&x!==void 0?x:l.visible,defaultValue:(p=l.defaultOpen)!==null&&p!==void 0?p:l.defaultVisible}),ct=!K&&!Y&&K!==0,vt=M=>{var V,H;dt(ct?!1:M),ct||((V=l.onOpenChange)===null||V===void 0||V.call(l,M),(H=l.onVisibleChange)===null||H===void 0||H.call(l,M))},ht=o.useMemo(()=>{var M,V;let H=J;return typeof I=="object"&&(H=(V=(M=I.pointAtCenter)!==null&&M!==void 0?M:I.arrowPointAtCenter)!==null&&V!==void 0?V:J),G||(0,r.Z)({arrowPointAtCenter:H,autoAdjustOverflow:st,arrowWidth:Q?W.sizePopupArrow:0,borderRadius:W.borderRadius,offset:W.marginXXS,visibleFirst:!0})},[J,I,G,W]),ft=o.useMemo(()=>K===0?K:Y||K||"",[Y,K]),bt=o.createElement($.BR,null,typeof ft=="function"?ft():ft),{getPopupContainer:yt,placement:Ot="top",mouseEnterDelay:wt=.1,mouseLeaveDelay:Ct=.1,overlayStyle:$t,rootClassName:Pt}=l,xt=rt(l,["getPopupContainer","placement","mouseEnterDelay","mouseLeaveDelay","overlayStyle","rootClassName"]),X=q("tooltip",h),At=q(),St=l["data-popover-inject"];let mt=gt;!("open"in l)&&!("visible"in l)&&ct&&(mt=!1);const ut=(0,t.l$)(D)&&!(0,t.M2)(D)?D:o.createElement("span",null,D),nt=ut.props,Et=!nt.className||typeof nt.className=="string"?s()(nt.className,A||`${X}-open`):nt.className,[Tt,jt]=S(X,!St),pt=B(X,E),Rt=pt.arrowStyle,It=Object.assign(Object.assign({},N),pt.overlayStyle),Lt=s()(L,{[`${X}-rtl`]:tt==="rtl"},pt.className,Pt,jt);return Tt(o.createElement(n.Z,Object.assign({},xt,{showArrow:Q,placement:Ot,mouseEnterDelay:wt,mouseLeaveDelay:Ct,prefixCls:X,overlayClassName:Lt,overlayStyle:Object.assign(Object.assign({},Rt),$t),getTooltipContainer:yt||_||it,ref:ot,builtinPlacements:ht,overlay:bt,visible:mt,onVisibleChange:vt,afterVisibleChange:R!=null?R:Z,overlayInnerStyle:It,arrowContent:o.createElement("span",{className:`${X}-arrow-content`}),motion:{motionName:(0,i.m)(At,"zoom-big-fast",l.transitionName),motionDeadline:1e3},destroyTooltipOnHide:!!z}),mt?(0,t.Tm)(ut,{className:Et}):ut))});U._InternalPanelDoNotUseOrYouWillBeFired=k;var at=U},92419:function(b,g,e){"use strict";e.d(g,{G:function(){return O},Z:function(){return C}});var o=e(87462),m=e(1413),s=e(91),n=e(40228),c=e(67294),i={shiftX:64,adjustY:1},r={adjustX:1,shiftY:!0},t=[0,0],f={left:{points:["cr","cl"],overflow:r,offset:[-4,0],targetOffset:t},right:{points:["cl","cr"],overflow:r,offset:[4,0],targetOffset:t},top:{points:["bc","tc"],overflow:i,offset:[0,-4],targetOffset:t},bottom:{points:["tc","bc"],overflow:i,offset:[0,4],targetOffset:t},topLeft:{points:["bl","tl"],overflow:i,offset:[0,-4],targetOffset:t},leftTop:{points:["tr","tl"],overflow:r,offset:[-4,0],targetOffset:t},topRight:{points:["br","tr"],overflow:i,offset:[0,-4],targetOffset:t},rightTop:{points:["tl","tr"],overflow:r,offset:[4,0],targetOffset:t},bottomRight:{points:["tr","br"],overflow:i,offset:[0,4],targetOffset:t},rightBottom:{points:["bl","br"],overflow:r,offset:[4,0],targetOffset:t},bottomLeft:{points:["tl","bl"],overflow:i,offset:[0,4],targetOffset:t},leftBottom:{points:["br","bl"],overflow:r,offset:[-4,0],targetOffset:t}},v=null,$=e(94184),y=e.n($);function O(u){var a=u.children,S=u.prefixCls,j=u.id,B=u.overlayInnerStyle,F=u.className,k=u.style;return c.createElement("div",{className:y()("".concat(S,"-content"),F),style:k},c.createElement("div",{className:"".concat(S,"-inner"),id:j,role:"tooltip",style:B},typeof a=="function"?a():a))}var P=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow"],T=function(a,S){var j=a.overlayClassName,B=a.trigger,F=B===void 0?["hover"]:B,k=a.mouseEnterDelay,rt=k===void 0?0:k,U=a.mouseLeaveDelay,at=U===void 0?.1:U,l=a.overlayStyle,d=a.prefixCls,x=d===void 0?"rc-tooltip":d,p=a.children,h=a.onVisibleChange,A=a.afterVisibleChange,_=a.transitionName,L=a.animation,E=a.motion,N=a.placement,D=N===void 0?"right":N,R=a.align,Z=R===void 0?{}:R,z=a.destroyTooltipOnHide,I=z===void 0?!1:z,K=a.defaultVisible,Y=a.getTooltipContainer,G=a.overlayInnerStyle,J=a.arrowContent,st=a.overlay,Q=a.id,W=a.showArrow,it=W===void 0?!0:W,q=(0,s.Z)(a,P),tt=(0,c.useRef)(null);(0,c.useImperativeHandle)(S,function(){return tt.current});var et=(0,m.Z)({},q);"visible"in a&&(et.popupVisible=a.visible);var ot=function(){return c.createElement(O,{key:"content",prefixCls:x,id:Q,overlayInnerStyle:G},st)};return c.createElement(n.Z,(0,o.Z)({popupClassName:j,prefixCls:x,popup:ot,action:F,builtinPlacements:f,popupPlacement:D,ref:tt,popupAlign:Z,getPopupContainer:Y,onPopupVisibleChange:h,afterPopupVisibleChange:A,popupTransitionName:_,popupAnimation:L,popupMotion:E,defaultPopupVisible:K,autoDestroy:I,mouseLeaveDelay:at,popupStyle:l,mouseEnterDelay:rt,arrow:it},et),p)},w=(0,c.forwardRef)(T),C=w},13769:function(b,g,e){var o=e(48541);function m(s,n){if(s==null)return{};var c=o(s,n),i,r;if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(s);for(r=0;r<t.length;r++)i=t[r],!(n.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(s,i)&&(c[i]=s[i])}return c}b.exports=m,b.exports.__esModule=!0,b.exports.default=b.exports},48541:function(b){function g(e,o){if(e==null)return{};var m={},s=Object.keys(e),n,c;for(c=0;c<s.length;c++)n=s[c],!(o.indexOf(n)>=0)&&(m[n]=e[n]);return m}b.exports=g,b.exports.__esModule=!0,b.exports.default=b.exports}}]);
