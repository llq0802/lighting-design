"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[2474],{13401:function(K,u,e){var a=e(87462),l=e(97685),C=e(4942),r=e(91),i=e(67294),s=e(93967),o=e.n(s),m=e(16397),f=e(63017),y=e(58784),v=e(59068),O=e(41755),P=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];(0,v.U)(m.iN.primary);var F=i.forwardRef(function($,X){var te=$.className,k=$.icon,c=$.spin,p=$.rotate,E=$.tabIndex,N=$.onClick,J=$.twoToneColor,ee=(0,r.Z)($,P),ae=i.useContext(f.Z),ie=ae.prefixCls,ce=ie===void 0?"anticon":ie,ve=ae.rootClassName,me=o()(ve,ce,(0,C.Z)((0,C.Z)({},"".concat(ce,"-").concat(k.name),!!k.name),"".concat(ce,"-spin"),!!c||k.name==="loading"),te),se=E;se===void 0&&N&&(se=-1);var pe=p?{msTransform:"rotate(".concat(p,"deg)"),transform:"rotate(".concat(p,"deg)")}:void 0,ge=(0,O.H9)(J),de=(0,l.Z)(ge,2),Ce=de[0],fe=de[1];return i.createElement("span",(0,a.Z)({role:"img","aria-label":k.name},ee,{ref:X,tabIndex:se,onClick:N,className:me}),i.createElement(y.Z,{icon:k,primaryColor:Ce,secondaryColor:fe,style:pe}))});F.displayName="AntdIcon",F.getTwoToneColor=v.m,F.setTwoToneColor=v.U,u.Z=F},63017:function(K,u,e){var a=e(67294),l=(0,a.createContext)({});u.Z=l},58784:function(K,u,e){var a=e(91),l=e(1413),C=e(67294),r=e(41755),i=["icon","className","onClick","style","primaryColor","secondaryColor"],s={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function o(y){var v=y.primaryColor,O=y.secondaryColor;s.primaryColor=v,s.secondaryColor=O||(0,r.pw)(v),s.calculated=!!O}function m(){return(0,l.Z)({},s)}var f=function(v){var O=v.icon,P=v.className,F=v.onClick,$=v.style,X=v.primaryColor,te=v.secondaryColor,k=(0,a.Z)(v,i),c=C.useRef(),p=s;if(X&&(p={primaryColor:X,secondaryColor:te||(0,r.pw)(X)}),(0,r.C3)(c),(0,r.Kp)((0,r.r)(O),"icon should be icon definiton, but got ".concat(O)),!(0,r.r)(O))return null;var E=O;return E&&typeof E.icon=="function"&&(E=(0,l.Z)((0,l.Z)({},E),{},{icon:E.icon(p.primaryColor,p.secondaryColor)})),(0,r.R_)(E.icon,"svg-".concat(E.name),(0,l.Z)((0,l.Z)({className:P,onClick:F,style:$,"data-icon":E.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},k),{},{ref:c}))};f.displayName="IconReact",f.getTwoToneColors=m,f.setTwoToneColors=o,u.Z=f},59068:function(K,u,e){e.d(u,{U:function(){return r},m:function(){return i}});var a=e(97685),l=e(58784),C=e(41755);function r(s){var o=(0,C.H9)(s),m=(0,a.Z)(o,2),f=m[0],y=m[1];return l.Z.setTwoToneColors({primaryColor:f,secondaryColor:y})}function i(){var s=l.Z.getTwoToneColors();return s.calculated?[s.primaryColor,s.secondaryColor]:s.primaryColor}},90814:function(K,u,e){e.d(u,{Z:function(){return m}});var a=e(87462),l=e(67294),C={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},r=C,i=e(13401),s=function(y,v){return l.createElement(i.Z,(0,a.Z)({},y,{ref:v,icon:r}))},o=l.forwardRef(s),m=o},42952:function(K,u,e){e.d(u,{Z:function(){return m}});var a=e(87462),l=e(67294),C={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z"}}]},name:"setting",theme:"outlined"},r=C,i=e(13401),s=function(y,v){return l.createElement(i.Z,(0,a.Z)({},y,{ref:v,icon:r}))},o=l.forwardRef(s),m=o},41755:function(K,u,e){e.d(u,{C3:function(){return k},H9:function(){return $},Kp:function(){return y},R_:function(){return P},pw:function(){return F},r:function(){return v},vD:function(){return X}});var a=e(1413),l=e(71002),C=e(16397),r=e(44958),i=e(27571),s=e(80334),o=e(67294),m=e(63017);function f(c){return c.replace(/-(.)/g,function(p,E){return E.toUpperCase()})}function y(c,p){(0,s.ZP)(c,"[@ant-design/icons] ".concat(p))}function v(c){return(0,l.Z)(c)==="object"&&typeof c.name=="string"&&typeof c.theme=="string"&&((0,l.Z)(c.icon)==="object"||typeof c.icon=="function")}function O(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(c).reduce(function(p,E){var N=c[E];switch(E){case"class":p.className=N,delete p.class;break;default:delete p[E],p[f(E)]=N}return p},{})}function P(c,p,E){return E?o.createElement(c.tag,(0,a.Z)((0,a.Z)({key:p},O(c.attrs)),E),(c.children||[]).map(function(N,J){return P(N,"".concat(p,"-").concat(c.tag,"-").concat(J))})):o.createElement(c.tag,(0,a.Z)({key:p},O(c.attrs)),(c.children||[]).map(function(N,J){return P(N,"".concat(p,"-").concat(c.tag,"-").concat(J))}))}function F(c){return(0,C.R_)(c)[0]}function $(c){return c?Array.isArray(c)?c:[c]:[]}var X={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},te=`
.anticon {
  display: inline-flex;
  alignItems: center;
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
`,k=function(p){var E=(0,o.useContext)(m.Z),N=E.csp,J=E.prefixCls,ee=te;J&&(ee=ee.replace(/anticon/g,J)),(0,o.useEffect)(function(){var ae=p.current,ie=(0,i.A)(ae);(0,r.hq)(ee,"@ant-design-icons",{prepend:!0,csp:N,attachTo:ie})},[])}},90768:function(K,u,e){var a=e(97582),l=e(67294),C=e(92770),r=e(22638),i=e(90105);function s(o,m){o===void 0&&(o={}),m===void 0&&(m={});var f=m.defaultValue,y=m.defaultValuePropName,v=y===void 0?"defaultValue":y,O=m.valuePropName,P=O===void 0?"value":O,F=m.trigger,$=F===void 0?"onChange":F,X=o[P],te=o.hasOwnProperty(P),k=(0,l.useMemo)(function(){return te?X:o.hasOwnProperty(v)?o[v]:f},[]),c=(0,l.useRef)(k);te&&(c.current=X);var p=(0,i.Z)();function E(N){for(var J=[],ee=1;ee<arguments.length;ee++)J[ee-1]=arguments[ee];var ae=(0,C.mf)(N)?N(c.current):N;te||(c.current=ae,p()),o[$]&&o[$].apply(o,(0,a.ev)([ae],(0,a.CR)(J),!1))}return[c.current,(0,r.Z)(E)]}u.Z=s},22638:function(K,u,e){var a=e(67294),l=e(92770),C=e(31663);function r(i){C.Z&&((0,l.mf)(i)||console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof i)));var s=(0,a.useRef)(i);s.current=(0,a.useMemo)(function(){return i},[i]);var o=(0,a.useRef)();return o.current||(o.current=function(){for(var m=[],f=0;f<arguments.length;f++)m[f]=arguments[f];return s.current.apply(this,m)}),o.current}u.Z=r},90105:function(K,u,e){var a=e(97582),l=e(67294),C=function(){var r=(0,a.CR)((0,l.useState)({}),2),i=r[1];return(0,l.useCallback)(function(){return i({})},[])};u.Z=C},92770:function(K,u,e){e.d(u,{G7:function(){return s},hj:function(){return i},jn:function(){return r},mf:function(){return l}});var a=function(o){return o!==null&&typeof o=="object"},l=function(o){return typeof o=="function"},C=function(o){return typeof o=="string"},r=function(o){return typeof o=="boolean"},i=function(o){return typeof o=="number"},s=function(o){return typeof o=="undefined"}},31663:function(K,u){var e=!1;u.Z=e},33603:function(K,u,e){e.d(u,{m:function(){return o}});const a=()=>({height:0,opacity:0}),l=m=>{const{scrollHeight:f}=m;return{height:f,opacity:1}},C=m=>({height:m?m.offsetHeight:0}),r=(m,f)=>(f==null?void 0:f.deadline)===!0||f.propertyName==="height",i=function(){return{motionName:`${arguments.length>0&&arguments[0]!==void 0?arguments[0]:"ant"}-motion-collapse`,onAppearStart:a,onEnterStart:a,onAppearActive:l,onEnterActive:l,onLeaveStart:C,onLeaveActive:a,onAppearEnd:r,onEnterEnd:r,onLeaveEnd:r,motionDeadline:500}},s=null,o=(m,f,y)=>y!==void 0?y:`${m}-${f}`;u.Z=i},47221:function(K,u,e){e.d(u,{Z:function(){return Se}});var a=e(67294),l=e(90814),C=e(93967),r=e.n(C),i=e(87462),s=e(74902),o=e(97685),m=e(71002),f=e(21770),y=e(80334),v=e(91),O=e(50344),P=e(4942),F=e(82225),$=e(15105),X=a.forwardRef(function(t,n){var d=t.prefixCls,g=t.forceRender,h=t.className,T=t.style,S=t.children,b=t.isActive,Z=t.role,_=a.useState(b||g),L=(0,o.Z)(_,2),M=L[0],A=L[1];return a.useEffect(function(){(g||b)&&A(!0)},[g,b]),M?a.createElement("div",{ref:n,className:r()("".concat(d,"-content"),(0,P.Z)((0,P.Z)({},"".concat(d,"-content-active"),b),"".concat(d,"-content-inactive"),!b),h),style:T,role:Z},a.createElement("div",{className:"".concat(d,"-content-box")},S)):null});X.displayName="PanelContent";var te=X,k=["showArrow","headerClass","isActive","onItemClick","forceRender","className","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"],c=a.forwardRef(function(t,n){var d=t.showArrow,g=d===void 0?!0:d,h=t.headerClass,T=t.isActive,S=t.onItemClick,b=t.forceRender,Z=t.className,_=t.prefixCls,L=t.collapsible,M=t.accordion,A=t.panelKey,D=t.extra,Q=t.header,U=t.expandIcon,I=t.openMotion,j=t.destroyInactivePanel,w=t.children,z=(0,v.Z)(t,k),x=L==="disabled",H=L==="header",B=L==="icon",Y=D!=null&&typeof D!="boolean",W=function(){S==null||S(A)},V=function(le){(le.key==="Enter"||le.keyCode===$.Z.ENTER||le.which===$.Z.ENTER)&&W()},q=typeof U=="function"?U(t):a.createElement("i",{className:"arrow"});q&&(q=a.createElement("div",{className:"".concat(_,"-expand-icon"),onClick:["header","icon"].includes(L)?W:void 0},q));var R=r()((0,P.Z)((0,P.Z)((0,P.Z)({},"".concat(_,"-item"),!0),"".concat(_,"-item-active"),T),"".concat(_,"-item-disabled"),x),Z),G=r()(h,(0,P.Z)((0,P.Z)((0,P.Z)({},"".concat(_,"-header"),!0),"".concat(_,"-header-collapsible-only"),H),"".concat(_,"-icon-collapsible-only"),B)),ne={className:G,"aria-expanded":T,"aria-disabled":x,onKeyDown:V};return!H&&!B&&(ne.onClick=W,ne.role=M?"tab":"button",ne.tabIndex=x?-1:0),a.createElement("div",(0,i.Z)({},z,{ref:n,className:R}),a.createElement("div",ne,g&&q,a.createElement("span",{className:"".concat(_,"-header-text"),onClick:L==="header"?W:void 0},Q),Y&&a.createElement("div",{className:"".concat(_,"-extra")},D)),a.createElement(F.ZP,(0,i.Z)({visible:T,leavedClassName:"".concat(_,"-content-hidden")},I,{forceRender:b,removeOnLeave:j}),function(re,le){var he=re.className,ue=re.style;return a.createElement(te,{ref:le,prefixCls:_,className:he,style:ue,isActive:T,forceRender:b,role:M?"tabpanel":void 0},w)}))}),p=c,E=["children","label","key","collapsible","onItemClick","destroyInactivePanel"],N=function(n,d){var g=d.prefixCls,h=d.accordion,T=d.collapsible,S=d.destroyInactivePanel,b=d.onItemClick,Z=d.activeKey,_=d.openMotion,L=d.expandIcon;return n.map(function(M,A){var D=M.children,Q=M.label,U=M.key,I=M.collapsible,j=M.onItemClick,w=M.destroyInactivePanel,z=(0,v.Z)(M,E),x=String(U!=null?U:A),H=I!=null?I:T,B=w!=null?w:S,Y=function(q){H!=="disabled"&&(b(q),j==null||j(q))},W=!1;return h?W=Z[0]===x:W=Z.indexOf(x)>-1,a.createElement(p,(0,i.Z)({},z,{prefixCls:g,key:x,panelKey:x,isActive:W,accordion:h,openMotion:_,expandIcon:L,header:Q,collapsible:H,onItemClick:Y,destroyInactivePanel:B}),D)})},J=function(n,d,g){if(!n)return null;var h=g.prefixCls,T=g.accordion,S=g.collapsible,b=g.destroyInactivePanel,Z=g.onItemClick,_=g.activeKey,L=g.openMotion,M=g.expandIcon,A=n.key||String(d),D=n.props,Q=D.header,U=D.headerClass,I=D.destroyInactivePanel,j=D.collapsible,w=D.onItemClick,z=!1;T?z=_[0]===A:z=_.indexOf(A)>-1;var x=j!=null?j:S,H=function(W){x!=="disabled"&&(Z(W),w==null||w(W))},B={key:A,panelKey:A,header:Q,headerClass:U,isActive:z,prefixCls:h,destroyInactivePanel:I!=null?I:b,openMotion:L,accordion:T,children:n.props.children,onItemClick:H,expandIcon:M,collapsible:x};return typeof n.type=="string"?n:(Object.keys(B).forEach(function(Y){typeof B[Y]=="undefined"&&delete B[Y]}),a.cloneElement(n,B))};function ee(t,n,d){return Array.isArray(t)?N(t,d):(0,O.Z)(n).map(function(g,h){return J(g,h,d)})}var ae=ee,ie=e(64217);function ce(t){var n=t;if(!Array.isArray(n)){var d=(0,m.Z)(n);n=d==="number"||d==="string"?[n]:[]}return n.map(function(g){return String(g)})}var ve=a.forwardRef(function(t,n){var d=t.prefixCls,g=d===void 0?"rc-collapse":d,h=t.destroyInactivePanel,T=h===void 0?!1:h,S=t.style,b=t.accordion,Z=t.className,_=t.children,L=t.collapsible,M=t.openMotion,A=t.expandIcon,D=t.activeKey,Q=t.defaultActiveKey,U=t.onChange,I=t.items,j=r()(g,Z),w=(0,f.Z)([],{value:D,onChange:function(V){return U==null?void 0:U(V)},defaultValue:Q,postState:ce}),z=(0,o.Z)(w,2),x=z[0],H=z[1],B=function(V){return H(function(){if(b)return x[0]===V?[]:[V];var q=x.indexOf(V),R=q>-1;return R?x.filter(function(G){return G!==V}):[].concat((0,s.Z)(x),[V])})};(0,y.ZP)(!_,"[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");var Y=ae(I,_,{prefixCls:g,accordion:b,openMotion:M,expandIcon:A,collapsible:L,destroyInactivePanel:T,onItemClick:B,activeKey:x});return a.createElement("div",(0,i.Z)({ref:n,className:j,style:S,role:b?"tablist":void 0},(0,ie.Z)(t,{aria:!0,data:!0})),Y)}),me=Object.assign(ve,{Panel:p}),se=me,pe=me.Panel,ge=e(37419),de=e(10366),Ce=e(33603),fe=e(96159),ye=e(53124),Pe=e(98675),_e=a.forwardRef((t,n)=>{const{getPrefixCls:d}=a.useContext(ye.E_),{prefixCls:g,className:h,showArrow:T=!0}=t,S=d("collapse",g),b=r()({[`${S}-no-arrow`]:!T},h);return a.createElement(se.Panel,Object.assign({ref:n},t,{prefixCls:S,className:b}))}),oe=e(54548),Ee=e(14747),Ie=e(33507),be=e(91945),Me=e(45503);const xe=t=>{const{componentCls:n,contentBg:d,padding:g,headerBg:h,headerPadding:T,collapseHeaderPaddingSM:S,collapseHeaderPaddingLG:b,collapsePanelBorderRadius:Z,lineWidth:_,lineType:L,colorBorder:M,colorText:A,colorTextHeading:D,colorTextDisabled:Q,fontSizeLG:U,lineHeight:I,lineHeightLG:j,marginSM:w,paddingSM:z,paddingLG:x,paddingXS:H,motionDurationSlow:B,fontSizeIcon:Y,contentPadding:W,fontHeight:V,fontHeightLG:q}=t,R=`${(0,oe.bf)(_)} ${L} ${M}`;return{[n]:Object.assign(Object.assign({},(0,Ee.Wf)(t)),{backgroundColor:h,border:R,borderBottom:0,borderRadius:Z,["&-rtl"]:{direction:"rtl"},[`& > ${n}-item`]:{borderBottom:R,["&:last-child"]:{[`
            &,
            & > ${n}-header`]:{borderRadius:`0 0 ${(0,oe.bf)(Z)} ${(0,oe.bf)(Z)}`}},[`> ${n}-header`]:{position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:T,color:D,lineHeight:I,cursor:"pointer",transition:`all ${B}, visibility 0s`,[`> ${n}-header-text`]:{flex:"auto"},"&:focus":{outline:"none"},[`${n}-expand-icon`]:{height:V,display:"flex",alignItems:"center",paddingInlineEnd:w},[`${n}-arrow`]:Object.assign(Object.assign({},(0,Ee.Ro)()),{fontSize:Y,svg:{transition:`transform ${B}`}}),[`${n}-header-text`]:{marginInlineEnd:"auto"}},[`${n}-icon-collapsible-only`]:{cursor:"unset",[`${n}-expand-icon`]:{cursor:"pointer"}}},[`${n}-content`]:{color:A,backgroundColor:d,borderTop:R,[`& > ${n}-content-box`]:{padding:W},["&-hidden"]:{display:"none"}},["&-small"]:{[`> ${n}-item`]:{[`> ${n}-header`]:{padding:S,paddingInlineStart:H,[`> ${n}-expand-icon`]:{marginInlineStart:t.calc(z).sub(H).equal()}},[`> ${n}-content > ${n}-content-box`]:{padding:z}}},["&-large"]:{[`> ${n}-item`]:{fontSize:U,lineHeight:j,[`> ${n}-header`]:{padding:b,paddingInlineStart:g,[`> ${n}-expand-icon`]:{height:q,marginInlineStart:t.calc(x).sub(g).equal()}},[`> ${n}-content > ${n}-content-box`]:{padding:x}}},[`${n}-item:last-child`]:{[`> ${n}-content`]:{borderRadius:`0 0 ${(0,oe.bf)(Z)} ${(0,oe.bf)(Z)}`}},[`& ${n}-item-disabled > ${n}-header`]:{[`
          &,
          & > .arrow
        `]:{color:Q,cursor:"not-allowed"}},[`&${n}-icon-position-end`]:{[`& > ${n}-item`]:{[`> ${n}-header`]:{[`${n}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:w}}}}})}},Oe=t=>{const{componentCls:n}=t,d=`> ${n}-item > ${n}-header ${n}-arrow svg`;return{[`${n}-rtl`]:{[d]:{transform:"rotate(180deg)"}}}},De=t=>{const{componentCls:n,headerBg:d,paddingXXS:g,colorBorder:h}=t;return{[`${n}-borderless`]:{backgroundColor:d,border:0,[`> ${n}-item`]:{borderBottom:`1px solid ${h}`},[`
        > ${n}-item:last-child,
        > ${n}-item:last-child ${n}-header
      `]:{borderRadius:0},[`> ${n}-item:last-child`]:{borderBottom:0},[`> ${n}-item > ${n}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${n}-item > ${n}-content > ${n}-content-box`]:{paddingTop:g}}}},Te=t=>{const{componentCls:n,paddingSM:d}=t;return{[`${n}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${n}-item`]:{borderBottom:0,[`> ${n}-content`]:{backgroundColor:"transparent",border:0,[`> ${n}-content-box`]:{paddingBlock:d}}}}}},Ae=t=>({headerPadding:`${t.paddingSM}px ${t.padding}px`,headerBg:t.colorFillAlter,contentPadding:`${t.padding}px 16px`,contentBg:t.colorBgContainer});var Re=(0,be.I$)("Collapse",t=>{const n=(0,Me.TS)(t,{collapseHeaderPaddingSM:`${(0,oe.bf)(t.paddingXS)} ${(0,oe.bf)(t.paddingSM)}`,collapseHeaderPaddingLG:`${(0,oe.bf)(t.padding)} ${(0,oe.bf)(t.paddingLG)}`,collapsePanelBorderRadius:t.borderRadiusLG});return[xe(n),De(n),Te(n),Oe(n),(0,Ie.Z)(n)]},Ae),$e=Object.assign(a.forwardRef((t,n)=>{const{getPrefixCls:d,direction:g,collapse:h}=a.useContext(ye.E_),{prefixCls:T,className:S,rootClassName:b,style:Z,bordered:_=!0,ghost:L,size:M,expandIconPosition:A="start",children:D,expandIcon:Q}=t,U=(0,Pe.Z)(R=>{var G;return(G=M!=null?M:R)!==null&&G!==void 0?G:"middle"}),I=d("collapse",T),j=d(),[w,z,x]=Re(I),H=a.useMemo(()=>A==="left"?"start":A==="right"?"end":A,[A]),B=Q!=null?Q:h==null?void 0:h.expandIcon,Y=a.useCallback(function(){let R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const G=typeof B=="function"?B(R):a.createElement(l.Z,{rotate:R.isActive?90:void 0});return(0,fe.Tm)(G,()=>{var ne;return{className:r()((ne=G==null?void 0:G.props)===null||ne===void 0?void 0:ne.className,`${I}-arrow`)}})},[B,I]),W=r()(`${I}-icon-position-${H}`,{[`${I}-borderless`]:!_,[`${I}-rtl`]:g==="rtl",[`${I}-ghost`]:!!L,[`${I}-${U}`]:U!=="middle"},h==null?void 0:h.className,S,b,z,x),V=Object.assign(Object.assign({},(0,Ce.Z)(j)),{motionAppear:!1,leavedClassName:`${I}-content-hidden`}),q=a.useMemo(()=>D?(0,ge.Z)(D).map((R,G)=>{var ne,re;if(!((ne=R.props)===null||ne===void 0)&&ne.disabled){const le=(re=R.key)!==null&&re!==void 0?re:String(G),{disabled:he,collapsible:ue}=R.props,Ze=Object.assign(Object.assign({},(0,de.Z)(R.props,["disabled"])),{key:le,collapsible:ue!=null?ue:he?"disabled":void 0});return(0,fe.Tm)(R,Ze)}return R}):null,[D]);return w(a.createElement(se,Object.assign({ref:n,openMotion:V},(0,de.Z)(t,["rootClassName"]),{expandIcon:Y,prefixCls:I,className:W,style:Object.assign(Object.assign({},h==null?void 0:h.style),Z)}),q))}),{Panel:_e}),Se=$e},33507:function(K,u){const e=a=>({[a.componentCls]:{[`${a.antCls}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`height ${a.motionDurationMid} ${a.motionEaseInOut},
        opacity ${a.motionDurationMid} ${a.motionEaseInOut} !important`}},[`${a.antCls}-motion-collapse`]:{overflow:"hidden",transition:`height ${a.motionDurationMid} ${a.motionEaseInOut},
        opacity ${a.motionDurationMid} ${a.motionEaseInOut} !important`}}});u.Z=e},37419:function(K,u,e){e.d(u,{Z:function(){return C}});var a=e(67294),l=e(67830);function C(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=[];return a.Children.forEach(r,function(o){o==null&&!i.keepEmpty||(Array.isArray(o)?s=s.concat(C(o)):(0,l.isFragment)(o)&&o.props?s=s.concat(C(o.props.children,i)):s.push(o))}),s}},10366:function(K,u,e){e.d(u,{Z:function(){return l}});var a=e(86318);function l(C,r){var i=(0,a.Z)({},C);return Array.isArray(r)&&r.forEach(function(s){delete i[s]}),i}},64217:function(K,u,e){e.d(u,{Z:function(){return m}});var a=e(1413),l=`accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`,C=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,r="".concat(l," ").concat(C).split(/[\s\n]+/),i="aria-",s="data-";function o(f,y){return f.indexOf(y)===0}function m(f){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,v;y===!1?v={aria:!0,data:!0,attr:!0}:y===!0?v={aria:!0}:v=(0,a.Z)({},y);var O={};return Object.keys(f).forEach(function(P){(v.aria&&(P==="role"||o(P,i))||v.data&&o(P,s)||v.attr&&r.includes(P))&&(O[P]=f[P])}),O}}}]);