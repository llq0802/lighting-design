"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[2474],{13401:function(K,u,e){var a=e(87462),l=e(97685),g=e(4942),r=e(91),s=e(67294),d=e(93967),o=e.n(d),f=e(16397),m=e(63017),y=e(58784),v=e(59068),O=e(41755),P=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];(0,v.U)(f.iN.primary);var F=s.forwardRef(function(S,X){var te=S.className,k=S.icon,i=S.spin,p=S.rotate,E=S.tabIndex,N=S.onClick,J=S.twoToneColor,ee=(0,r.Z)(S,P),ae=s.useContext(m.Z),ie=ae.prefixCls,ce=ie===void 0?"anticon":ie,ve=ae.rootClassName,fe=o()(ve,ce,(0,g.Z)((0,g.Z)({},"".concat(ce,"-").concat(k.name),!!k.name),"".concat(ce,"-spin"),!!i||k.name==="loading"),te),se=E;se===void 0&&N&&(se=-1);var pe=p?{msTransform:"rotate(".concat(p,"deg)"),transform:"rotate(".concat(p,"deg)")}:void 0,ge=(0,O.H9)(J),de=(0,l.Z)(ge,2),Ce=de[0],me=de[1];return s.createElement("span",(0,a.Z)({role:"img","aria-label":k.name},ee,{ref:X,tabIndex:se,onClick:N,className:fe}),s.createElement(y.Z,{icon:k,primaryColor:Ce,secondaryColor:me,style:pe}))});F.displayName="AntdIcon",F.getTwoToneColor=v.m,F.setTwoToneColor=v.U,u.Z=F},63017:function(K,u,e){var a=e(67294),l=(0,a.createContext)({});u.Z=l},58784:function(K,u,e){var a=e(91),l=e(1413),g=e(67294),r=e(41755),s=["icon","className","onClick","style","primaryColor","secondaryColor"],d={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function o(y){var v=y.primaryColor,O=y.secondaryColor;d.primaryColor=v,d.secondaryColor=O||(0,r.pw)(v),d.calculated=!!O}function f(){return(0,l.Z)({},d)}var m=function(v){var O=v.icon,P=v.className,F=v.onClick,S=v.style,X=v.primaryColor,te=v.secondaryColor,k=(0,a.Z)(v,s),i=g.useRef(),p=d;if(X&&(p={primaryColor:X,secondaryColor:te||(0,r.pw)(X)}),(0,r.C3)(i),(0,r.Kp)((0,r.r)(O),"icon should be icon definiton, but got ".concat(O)),!(0,r.r)(O))return null;var E=O;return E&&typeof E.icon=="function"&&(E=(0,l.Z)((0,l.Z)({},E),{},{icon:E.icon(p.primaryColor,p.secondaryColor)})),(0,r.R_)(E.icon,"svg-".concat(E.name),(0,l.Z)((0,l.Z)({className:P,onClick:F,style:S,"data-icon":E.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},k),{},{ref:i}))};m.displayName="IconReact",m.getTwoToneColors=f,m.setTwoToneColors=o,u.Z=m},59068:function(K,u,e){e.d(u,{U:function(){return r},m:function(){return s}});var a=e(97685),l=e(58784),g=e(41755);function r(d){var o=(0,g.H9)(d),f=(0,a.Z)(o,2),m=f[0],y=f[1];return l.Z.setTwoToneColors({primaryColor:m,secondaryColor:y})}function s(){var d=l.Z.getTwoToneColors();return d.calculated?[d.primaryColor,d.secondaryColor]:d.primaryColor}},90814:function(K,u,e){e.d(u,{Z:function(){return f}});var a=e(87462),l=e(67294),g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},r=g,s=e(13401),d=function(y,v){return l.createElement(s.Z,(0,a.Z)({},y,{ref:v,icon:r}))},o=l.forwardRef(d),f=o},42952:function(K,u,e){e.d(u,{Z:function(){return f}});var a=e(87462),l=e(67294),g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z"}}]},name:"setting",theme:"outlined"},r=g,s=e(13401),d=function(y,v){return l.createElement(s.Z,(0,a.Z)({},y,{ref:v,icon:r}))},o=l.forwardRef(d),f=o},41755:function(K,u,e){e.d(u,{C3:function(){return k},H9:function(){return S},Kp:function(){return y},R_:function(){return P},pw:function(){return F},r:function(){return v},vD:function(){return X}});var a=e(1413),l=e(71002),g=e(16397),r=e(44958),s=e(27571),d=e(80334),o=e(67294),f=e(63017);function m(i){return i.replace(/-(.)/g,function(p,E){return E.toUpperCase()})}function y(i,p){(0,d.ZP)(i,"[@ant-design/icons] ".concat(p))}function v(i){return(0,l.Z)(i)==="object"&&typeof i.name=="string"&&typeof i.theme=="string"&&((0,l.Z)(i.icon)==="object"||typeof i.icon=="function")}function O(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(i).reduce(function(p,E){var N=i[E];switch(E){case"class":p.className=N,delete p.class;break;default:delete p[E],p[m(E)]=N}return p},{})}function P(i,p,E){return E?o.createElement(i.tag,(0,a.Z)((0,a.Z)({key:p},O(i.attrs)),E),(i.children||[]).map(function(N,J){return P(N,"".concat(p,"-").concat(i.tag,"-").concat(J))})):o.createElement(i.tag,(0,a.Z)({key:p},O(i.attrs)),(i.children||[]).map(function(N,J){return P(N,"".concat(p,"-").concat(i.tag,"-").concat(J))}))}function F(i){return(0,g.R_)(i)[0]}function S(i){return i?Array.isArray(i)?i:[i]:[]}var X={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},te=`
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,k=function(p){var E=(0,o.useContext)(f.Z),N=E.csp,J=E.prefixCls,ee=te;J&&(ee=ee.replace(/anticon/g,J)),(0,o.useEffect)(function(){var ae=p.current,ie=(0,s.A)(ae);(0,r.hq)(ee,"@ant-design-icons",{prepend:!0,csp:N,attachTo:ie})},[])}},90768:function(K,u,e){var a=e(97582),l=e(67294),g=e(92770),r=e(22638),s=e(90105);function d(o,f){o===void 0&&(o={}),f===void 0&&(f={});var m=f.defaultValue,y=f.defaultValuePropName,v=y===void 0?"defaultValue":y,O=f.valuePropName,P=O===void 0?"value":O,F=f.trigger,S=F===void 0?"onChange":F,X=o[P],te=o.hasOwnProperty(P),k=(0,l.useMemo)(function(){return te?X:o.hasOwnProperty(v)?o[v]:m},[]),i=(0,l.useRef)(k);te&&(i.current=X);var p=(0,s.Z)();function E(N){for(var J=[],ee=1;ee<arguments.length;ee++)J[ee-1]=arguments[ee];var ae=(0,g.mf)(N)?N(i.current):N;te||(i.current=ae,p()),o[S]&&o[S].apply(o,(0,a.ev)([ae],(0,a.CR)(J),!1))}return[i.current,(0,r.Z)(E)]}u.Z=d},22638:function(K,u,e){var a=e(67294),l=e(92770),g=e(31663);function r(s){g.Z&&((0,l.mf)(s)||console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof s)));var d=(0,a.useRef)(s);d.current=(0,a.useMemo)(function(){return s},[s]);var o=(0,a.useRef)();return o.current||(o.current=function(){for(var f=[],m=0;m<arguments.length;m++)f[m]=arguments[m];return d.current.apply(this,f)}),o.current}u.Z=r},90105:function(K,u,e){var a=e(97582),l=e(67294),g=function(){var r=(0,a.CR)((0,l.useState)({}),2),s=r[1];return(0,l.useCallback)(function(){return s({})},[])};u.Z=g},92770:function(K,u,e){e.d(u,{G7:function(){return d},hj:function(){return s},jn:function(){return r},mf:function(){return l}});var a=function(o){return o!==null&&typeof o=="object"},l=function(o){return typeof o=="function"},g=function(o){return typeof o=="string"},r=function(o){return typeof o=="boolean"},s=function(o){return typeof o=="number"},d=function(o){return typeof o=="undefined"}},31663:function(K,u){var e=!1;u.Z=e},33603:function(K,u,e){e.d(u,{m:function(){return o}});const a=()=>({height:0,opacity:0}),l=f=>{const{scrollHeight:m}=f;return{height:m,opacity:1}},g=f=>({height:f?f.offsetHeight:0}),r=(f,m)=>(m==null?void 0:m.deadline)===!0||m.propertyName==="height",s=function(){return{motionName:`${arguments.length>0&&arguments[0]!==void 0?arguments[0]:"ant"}-motion-collapse`,onAppearStart:a,onEnterStart:a,onAppearActive:l,onEnterActive:l,onLeaveStart:g,onLeaveActive:a,onAppearEnd:r,onEnterEnd:r,onLeaveEnd:r,motionDeadline:500}},d=null,o=(f,m,y)=>y!==void 0?y:`${f}-${m}`;u.Z=s},47221:function(K,u,e){e.d(u,{Z:function(){return Se}});var a=e(67294),l=e(90814),g=e(93967),r=e.n(g),s=e(87462),d=e(74902),o=e(97685),f=e(71002),m=e(21770),y=e(80334),v=e(91),O=e(50344),P=e(4942),F=e(82225),S=e(15105),X=a.forwardRef(function(t,n){var c=t.prefixCls,C=t.forceRender,h=t.className,A=t.style,Z=t.children,b=t.isActive,L=t.role,_=a.useState(b||C),B=(0,o.Z)(_,2),M=B[0],$=B[1];return a.useEffect(function(){(C||b)&&$(!0)},[C,b]),M?a.createElement("div",{ref:n,className:r()("".concat(c,"-content"),(0,P.Z)((0,P.Z)({},"".concat(c,"-content-active"),b),"".concat(c,"-content-inactive"),!b),h),style:A,role:L},a.createElement("div",{className:"".concat(c,"-content-box")},Z)):null});X.displayName="PanelContent";var te=X,k=["showArrow","headerClass","isActive","onItemClick","forceRender","className","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"],i=a.forwardRef(function(t,n){var c=t.showArrow,C=c===void 0?!0:c,h=t.headerClass,A=t.isActive,Z=t.onItemClick,b=t.forceRender,L=t.className,_=t.prefixCls,B=t.collapsible,M=t.accordion,$=t.panelKey,D=t.extra,Q=t.header,U=t.expandIcon,I=t.openMotion,j=t.destroyInactivePanel,w=t.children,z=(0,v.Z)(t,k),x=B==="disabled",H=B==="header",R=B==="icon",Y=D!=null&&typeof D!="boolean",W=function(){Z==null||Z($)},V=function(le){(le.key==="Enter"||le.keyCode===S.Z.ENTER||le.which===S.Z.ENTER)&&W()},q=typeof U=="function"?U(t):a.createElement("i",{className:"arrow"});q&&(q=a.createElement("div",{className:"".concat(_,"-expand-icon"),onClick:["header","icon"].includes(B)?W:void 0},q));var T=r()((0,P.Z)((0,P.Z)((0,P.Z)({},"".concat(_,"-item"),!0),"".concat(_,"-item-active"),A),"".concat(_,"-item-disabled"),x),L),G=r()(h,(0,P.Z)((0,P.Z)((0,P.Z)({},"".concat(_,"-header"),!0),"".concat(_,"-header-collapsible-only"),H),"".concat(_,"-icon-collapsible-only"),R)),ne={className:G,"aria-expanded":A,"aria-disabled":x,onKeyDown:V};return!H&&!R&&(ne.onClick=W,ne.role=M?"tab":"button",ne.tabIndex=x?-1:0),a.createElement("div",(0,s.Z)({},z,{ref:n,className:T}),a.createElement("div",ne,C&&q,a.createElement("span",{className:"".concat(_,"-header-text"),onClick:B==="header"?W:void 0},Q),Y&&a.createElement("div",{className:"".concat(_,"-extra")},D)),a.createElement(F.ZP,(0,s.Z)({visible:A,leavedClassName:"".concat(_,"-content-hidden")},I,{forceRender:b,removeOnLeave:j}),function(re,le){var he=re.className,ue=re.style;return a.createElement(te,{ref:le,prefixCls:_,className:he,style:ue,isActive:A,forceRender:b,role:M?"tabpanel":void 0},w)}))}),p=i,E=["children","label","key","collapsible","onItemClick","destroyInactivePanel"],N=function(n,c){var C=c.prefixCls,h=c.accordion,A=c.collapsible,Z=c.destroyInactivePanel,b=c.onItemClick,L=c.activeKey,_=c.openMotion,B=c.expandIcon;return n.map(function(M,$){var D=M.children,Q=M.label,U=M.key,I=M.collapsible,j=M.onItemClick,w=M.destroyInactivePanel,z=(0,v.Z)(M,E),x=String(U!=null?U:$),H=I!=null?I:A,R=w!=null?w:Z,Y=function(q){H!=="disabled"&&(b(q),j==null||j(q))},W=!1;return h?W=L[0]===x:W=L.indexOf(x)>-1,a.createElement(p,(0,s.Z)({},z,{prefixCls:C,key:x,panelKey:x,isActive:W,accordion:h,openMotion:_,expandIcon:B,header:Q,collapsible:H,onItemClick:Y,destroyInactivePanel:R}),D)})},J=function(n,c,C){if(!n)return null;var h=C.prefixCls,A=C.accordion,Z=C.collapsible,b=C.destroyInactivePanel,L=C.onItemClick,_=C.activeKey,B=C.openMotion,M=C.expandIcon,$=n.key||String(c),D=n.props,Q=D.header,U=D.headerClass,I=D.destroyInactivePanel,j=D.collapsible,w=D.onItemClick,z=!1;A?z=_[0]===$:z=_.indexOf($)>-1;var x=j!=null?j:Z,H=function(W){x!=="disabled"&&(L(W),w==null||w(W))},R={key:$,panelKey:$,header:Q,headerClass:U,isActive:z,prefixCls:h,destroyInactivePanel:I!=null?I:b,openMotion:B,accordion:A,children:n.props.children,onItemClick:H,expandIcon:M,collapsible:x};return typeof n.type=="string"?n:(Object.keys(R).forEach(function(Y){typeof R[Y]=="undefined"&&delete R[Y]}),a.cloneElement(n,R))};function ee(t,n,c){return Array.isArray(t)?N(t,c):(0,O.Z)(n).map(function(C,h){return J(C,h,c)})}var ae=ee,ie=e(64217);function ce(t){var n=t;if(!Array.isArray(n)){var c=(0,f.Z)(n);n=c==="number"||c==="string"?[n]:[]}return n.map(function(C){return String(C)})}var ve=a.forwardRef(function(t,n){var c=t.prefixCls,C=c===void 0?"rc-collapse":c,h=t.destroyInactivePanel,A=h===void 0?!1:h,Z=t.style,b=t.accordion,L=t.className,_=t.children,B=t.collapsible,M=t.openMotion,$=t.expandIcon,D=t.activeKey,Q=t.defaultActiveKey,U=t.onChange,I=t.items,j=r()(C,L),w=(0,m.Z)([],{value:D,onChange:function(V){return U==null?void 0:U(V)},defaultValue:Q,postState:ce}),z=(0,o.Z)(w,2),x=z[0],H=z[1],R=function(V){return H(function(){if(b)return x[0]===V?[]:[V];var q=x.indexOf(V),T=q>-1;return T?x.filter(function(G){return G!==V}):[].concat((0,d.Z)(x),[V])})};(0,y.ZP)(!_,"[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");var Y=ae(I,_,{prefixCls:C,accordion:b,openMotion:M,expandIcon:$,collapsible:B,destroyInactivePanel:A,onItemClick:R,activeKey:x});return a.createElement("div",(0,s.Z)({ref:n,className:j,style:Z,role:b?"tablist":void 0},(0,ie.Z)(t,{aria:!0,data:!0})),Y)}),fe=Object.assign(ve,{Panel:p}),se=fe,pe=fe.Panel,ge=e(37419),de=e(10366),Ce=e(33603),me=e(96159),ye=e(53124),Pe=e(98675),_e=a.forwardRef((t,n)=>{const{getPrefixCls:c}=a.useContext(ye.E_),{prefixCls:C,className:h,showArrow:A=!0}=t,Z=c("collapse",C),b=r()({[`${Z}-no-arrow`]:!A},h);return a.createElement(se.Panel,Object.assign({ref:n},t,{prefixCls:Z,className:b}))}),oe=e(861),Ee=e(14747),Ie=e(33507),be=e(27036),Me=e(45503);const xe=t=>{const{componentCls:n,contentBg:c,padding:C,headerBg:h,headerPadding:A,collapseHeaderPaddingSM:Z,collapseHeaderPaddingLG:b,collapsePanelBorderRadius:L,lineWidth:_,lineType:B,colorBorder:M,colorText:$,colorTextHeading:D,colorTextDisabled:Q,fontSizeLG:U,lineHeight:I,lineHeightLG:j,marginSM:w,paddingSM:z,paddingLG:x,paddingXS:H,motionDurationSlow:R,fontSizeIcon:Y,contentPadding:W,fontHeight:V,fontHeightLG:q}=t,T=`${(0,oe.bf)(_)} ${B} ${M}`;return{[n]:Object.assign(Object.assign({},(0,Ee.Wf)(t)),{backgroundColor:h,border:T,borderRadius:L,["&-rtl"]:{direction:"rtl"},[`& > ${n}-item`]:{borderBottom:T,["&:last-child"]:{[`
            &,
            & > ${n}-header`]:{borderRadius:`0 0 ${(0,oe.bf)(L)} ${(0,oe.bf)(L)}`}},[`> ${n}-header`]:{position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:A,color:D,lineHeight:I,cursor:"pointer",transition:`all ${R}, visibility 0s`,[`> ${n}-header-text`]:{flex:"auto"},"&:focus":{outline:"none"},[`${n}-expand-icon`]:{height:V,display:"flex",alignItems:"center",paddingInlineEnd:w},[`${n}-arrow`]:Object.assign(Object.assign({},(0,Ee.Ro)()),{fontSize:Y,transition:`transform ${R}`,svg:{transition:`transform ${R}`}}),[`${n}-header-text`]:{marginInlineEnd:"auto"}},[`${n}-icon-collapsible-only`]:{cursor:"unset",[`${n}-expand-icon`]:{cursor:"pointer"}}},[`${n}-content`]:{color:$,backgroundColor:c,borderTop:T,[`& > ${n}-content-box`]:{padding:W},["&-hidden"]:{display:"none"}},["&-small"]:{[`> ${n}-item`]:{[`> ${n}-header`]:{padding:Z,paddingInlineStart:H,[`> ${n}-expand-icon`]:{marginInlineStart:t.calc(z).sub(H).equal()}},[`> ${n}-content > ${n}-content-box`]:{padding:z}}},["&-large"]:{[`> ${n}-item`]:{fontSize:U,lineHeight:j,[`> ${n}-header`]:{padding:b,paddingInlineStart:C,[`> ${n}-expand-icon`]:{height:q,marginInlineStart:t.calc(x).sub(C).equal()}},[`> ${n}-content > ${n}-content-box`]:{padding:x}}},[`${n}-item:last-child`]:{borderBottom:0,[`> ${n}-content`]:{borderRadius:`0 0 ${(0,oe.bf)(L)} ${(0,oe.bf)(L)}`}},[`& ${n}-item-disabled > ${n}-header`]:{[`
          &,
          & > .arrow
        `]:{color:Q,cursor:"not-allowed"}},[`&${n}-icon-position-end`]:{[`& > ${n}-item`]:{[`> ${n}-header`]:{[`${n}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:w}}}}})}},Oe=t=>{const{componentCls:n}=t,c=`> ${n}-item > ${n}-header ${n}-arrow`;return{[`${n}-rtl`]:{[c]:{transform:"rotate(180deg)"}}}},De=t=>{const{componentCls:n,headerBg:c,paddingXXS:C,colorBorder:h}=t;return{[`${n}-borderless`]:{backgroundColor:c,border:0,[`> ${n}-item`]:{borderBottom:`1px solid ${h}`},[`
        > ${n}-item:last-child,
        > ${n}-item:last-child ${n}-header
      `]:{borderRadius:0},[`> ${n}-item:last-child`]:{borderBottom:0},[`> ${n}-item > ${n}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${n}-item > ${n}-content > ${n}-content-box`]:{paddingTop:C}}}},Te=t=>{const{componentCls:n,paddingSM:c}=t;return{[`${n}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${n}-item`]:{borderBottom:0,[`> ${n}-content`]:{backgroundColor:"transparent",border:0,[`> ${n}-content-box`]:{paddingBlock:c}}}}}},Ae=t=>({headerPadding:`${t.paddingSM}px ${t.padding}px`,headerBg:t.colorFillAlter,contentPadding:`${t.padding}px 16px`,contentBg:t.colorBgContainer});var $e=(0,be.I$)("Collapse",t=>{const n=(0,Me.TS)(t,{collapseHeaderPaddingSM:`${(0,oe.bf)(t.paddingXS)} ${(0,oe.bf)(t.paddingSM)}`,collapseHeaderPaddingLG:`${(0,oe.bf)(t.padding)} ${(0,oe.bf)(t.paddingLG)}`,collapsePanelBorderRadius:t.borderRadiusLG});return[xe(n),De(n),Te(n),Oe(n),(0,Ie.Z)(n)]},Ae),Re=Object.assign(a.forwardRef((t,n)=>{const{getPrefixCls:c,direction:C,collapse:h}=a.useContext(ye.E_),{prefixCls:A,className:Z,rootClassName:b,style:L,bordered:_=!0,ghost:B,size:M,expandIconPosition:$="start",children:D,expandIcon:Q}=t,U=(0,Pe.Z)(T=>{var G;return(G=M!=null?M:T)!==null&&G!==void 0?G:"middle"}),I=c("collapse",A),j=c(),[w,z,x]=$e(I),H=a.useMemo(()=>$==="left"?"start":$==="right"?"end":$,[$]),R=Q!=null?Q:h==null?void 0:h.expandIcon,Y=a.useCallback(function(){let T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const G=typeof R=="function"?R(T):a.createElement(l.Z,{rotate:T.isActive?90:void 0,"aria-label":T.isActive?"expanded":"collapsed"});return(0,me.Tm)(G,()=>{var ne;return{className:r()((ne=G==null?void 0:G.props)===null||ne===void 0?void 0:ne.className,`${I}-arrow`)}})},[R,I]),W=r()(`${I}-icon-position-${H}`,{[`${I}-borderless`]:!_,[`${I}-rtl`]:C==="rtl",[`${I}-ghost`]:!!B,[`${I}-${U}`]:U!=="middle"},h==null?void 0:h.className,Z,b,z,x),V=Object.assign(Object.assign({},(0,Ce.Z)(j)),{motionAppear:!1,leavedClassName:`${I}-content-hidden`}),q=a.useMemo(()=>D?(0,ge.Z)(D).map((T,G)=>{var ne,re;if(!((ne=T.props)===null||ne===void 0)&&ne.disabled){const le=(re=T.key)!==null&&re!==void 0?re:String(G),{disabled:he,collapsible:ue}=T.props,Ze=Object.assign(Object.assign({},(0,de.Z)(T.props,["disabled"])),{key:le,collapsible:ue!=null?ue:he?"disabled":void 0});return(0,me.Tm)(T,Ze)}return T}):null,[D]);return w(a.createElement(se,Object.assign({ref:n,openMotion:V},(0,de.Z)(t,["rootClassName"]),{expandIcon:Y,prefixCls:I,className:W,style:Object.assign(Object.assign({},h==null?void 0:h.style),L)}),q))}),{Panel:_e}),Se=Re},33507:function(K,u){const e=a=>({[a.componentCls]:{[`${a.antCls}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`height ${a.motionDurationMid} ${a.motionEaseInOut},
        opacity ${a.motionDurationMid} ${a.motionEaseInOut} !important`}},[`${a.antCls}-motion-collapse`]:{overflow:"hidden",transition:`height ${a.motionDurationMid} ${a.motionEaseInOut},
        opacity ${a.motionDurationMid} ${a.motionEaseInOut} !important`}}});u.Z=e},37419:function(K,u,e){e.d(u,{Z:function(){return g}});var a=e(67294),l=e(67830);function g(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=[];return a.Children.forEach(r,function(o){o==null&&!s.keepEmpty||(Array.isArray(o)?d=d.concat(g(o)):(0,l.isFragment)(o)&&o.props?d=d.concat(g(o.props.children,s)):d.push(o))}),d}},10366:function(K,u,e){e.d(u,{Z:function(){return a}});function a(l,g){var r=Object.assign({},l);return Array.isArray(g)&&g.forEach(function(s){delete r[s]}),r}},64217:function(K,u,e){e.d(u,{Z:function(){return f}});var a=e(1413),l=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,g=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,r="".concat(l," ").concat(g).split(/[\s\n]+/),s="aria-",d="data-";function o(m,y){return m.indexOf(y)===0}function f(m){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,v;y===!1?v={aria:!0,data:!0,attr:!0}:y===!0?v={aria:!0}:v=(0,a.Z)({},y);var O={};return Object.keys(m).forEach(function(P){(v.aria&&(P==="role"||o(P,s))||v.data&&o(P,d)||v.attr&&r.includes(P))&&(O[P]=m[P])}),O}}}]);