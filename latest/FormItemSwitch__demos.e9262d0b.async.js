"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[6979],{46496:function(N,M,i){i.r(M);var r=i(5574),m=i.n(r),y=i(4390),E=i(45418),p=i(85893),v=function(){var j=y.Z.useForm(),A=m()(j,1),g=A[0];return(0,p.jsxs)(y.Z,{form:g,labelWidth:85,submitter:{buttonAlign:85},children:[(0,p.jsx)(E.Z,{name:"state1",label:"\u5F00\u5173",tooltip:"\u7981\u6B62\u7A7A\u683C",switchProps:{className:"abvs"}}),(0,p.jsx)(E.Z,{unCheckedBg:"red",checkedBg:"blue",name:"state2",label:"\u5F00\u5173",tooltip:"\u7981\u6B62\u7A7A\u683C",contentInline:!0,contentAfter:(0,p.jsx)("div",{children:"\u540E\u9762"})})]})};M.default=v},45418:function(N,M,i){var r=i(97857),m=i.n(r),y=i(13769),E=i.n(y),p=i(22638),v=i(72269),T=i(40964),j=i(89889),A=i(84640),g=i(67294),L=i(85893),w=["checked","onChange","unCheckedBg","checkedBg","disabled","style","size"],C=["checkedBg","unCheckedBg","switchProps","required","size","disabled"],H=function(c){var b=c.checked,I=c.onChange,f=c.unCheckedBg,W=c.checkedBg,x=c.disabled,_=c.style,$=c.size,S=E()(c,w),Z=(0,g.useMemo)(function(){return b?m()({backgroundColor:W},_):m()({backgroundColor:f},_)},[b,W,_,f]),z=(0,p.Z)(function(X){S!=null&&S.onChange&&(S==null||S.onChange(X)),I==null||I(X)}),V=(0,g.useContext)(j.e),Y=V.disabled;return(0,L.jsx)(v.Z,m()(m()({size:$==="small"?"small":"default",disabled:x!=null?x:Y},S),{},{style:Z,checked:b,onChange:z}))},K=function(c){var b=c.checkedBg,I=c.unCheckedBg,f=c.switchProps,W=f===void 0?T.FD:f,x=c.required,_=c.size,$=c.disabled,S=E()(c,C),Z=(0,g.useContext)(j.e),z=Z.size;return(0,L.jsx)(A.Z,m()(m()({_isSelectType:!0,valuePropName:"checked",required:x},S),{},{children:(0,L.jsx)(H,m()({size:_!=null?_:z,checkedBg:b,unCheckedBg:I,disabled:$},W))}))};M.Z=K},61117:function(N,M,i){var r=i(84640);M.Z=r.Z},4390:function(N,M,i){var r=i(97857),m=i.n(r),y=i(13769),E=i.n(y),p=i(78957),v=i(99859),T=i(40964),j=i(61117),A=i(89889),g=i(85893),L=["submitter"],w=["render"],C=function(K){var d=K.submitter,c=E()(K,L),b=typeof d=="boolean"||!d?T.FD:d,I=b.render,f=E()(b,w),W=d===void 0||d?m()({render:function(_){var $=Array.isArray(_)&&_.length>1?(0,g.jsx)(p.Z,{children:_}):_;return(0,g.jsx)(v.Z.Item,{colon:!1,className:"lightd-form-submitter",style:{marginBottom:0,paddingLeft:typeof(d==null?void 0:d.buttonAlign)=="number"?"".concat(d==null?void 0:d.buttonAlign,"px"):0},wrapperCol:b==null?void 0:b.wrapperCol,children:(0,g.jsx)("div",{style:{display:"flex",justifyContent:typeof(d==null?void 0:d.buttonAlign)=="string"?d==null?void 0:d.buttonAlign:"initial"},children:I?(0,g.jsx)(g.Fragment,{children:I($,b)}):$})})}},f):!1;return(0,g.jsx)(A.Z,m()({submitter:W,contentRender:function(_,$){return(0,g.jsxs)(g.Fragment,{children:[_,$]})}},c))};C.Item=j.Z,C.List=v.Z.List,C.Provider=v.Z.Provider,C.ErrorList=v.Z.ErrorList,C.useForm=v.Z.useForm,C.useFormInstance=v.Z.useFormInstance,C.useWatch=v.Z.useWatch,M.Z=C},72269:function(N,M,i){i.d(M,{Z:function(){return X}});var r=i(67294),m=i(50888),y=i(94184),E=i.n(y),p=i(87462),v=i(4942),T=i(97685),j=i(91),A=i(21770),g=i(15105),L=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],w=r.forwardRef(function(e,n){var l,a=e.prefixCls,s=a===void 0?"rc-switch":a,h=e.className,o=e.checked,t=e.defaultChecked,u=e.disabled,B=e.loadingIcon,J=e.checkedChildren,q=e.unCheckedChildren,D=e.onClick,k=e.onChange,F=e.onKeyDown,O=(0,j.Z)(e,L),ee=(0,A.Z)(!1,{value:o,defaultValue:t}),Q=(0,T.Z)(ee,2),R=Q[0],ne=Q[1];function U(P,te){var G=R;return u||(G=P,ne(G),k==null||k(G,te)),G}function ie(P){P.which===g.Z.LEFT?U(!1,P):P.which===g.Z.RIGHT&&U(!0,P),F==null||F(P)}function ae(P){var te=U(!R,P);D==null||D(te,P)}var se=E()(s,h,(l={},(0,v.Z)(l,"".concat(s,"-checked"),R),(0,v.Z)(l,"".concat(s,"-disabled"),u),l));return r.createElement("button",(0,p.Z)({},O,{type:"button",role:"switch","aria-checked":R,disabled:u,className:se,ref:n,onKeyDown:ie,onClick:ae}),B,r.createElement("span",{className:"".concat(s,"-inner")},r.createElement("span",{className:"".concat(s,"-inner-checked")},J),r.createElement("span",{className:"".concat(s,"-inner-unchecked")},q)))});w.displayName="Switch";var C=w,H=i(45353),K=i(53124),d=i(98866),c=i(98675),b=i(10274),I=i(14747),f=i(67968),W=i(45503);const x=e=>{const{componentCls:n,trackHeightSM:l,trackPadding:a,trackMinWidthSM:s,innerMinMarginSM:h,innerMaxMarginSM:o,handleSizeSM:t}=e,u=`${n}-inner`;return{[n]:{[`&${n}-small`]:{minWidth:s,height:l,lineHeight:`${l}px`,[`${n}-inner`]:{paddingInlineStart:o,paddingInlineEnd:h,[`${u}-checked`]:{marginInlineStart:`calc(-100% + ${t+a*2}px - ${o*2}px)`,marginInlineEnd:`calc(100% - ${t+a*2}px + ${o*2}px)`},[`${u}-unchecked`]:{marginTop:-l,marginInlineStart:0,marginInlineEnd:0}},[`${n}-handle`]:{width:t,height:t},[`${n}-loading-icon`]:{top:(t-e.switchLoadingIconSize)/2,fontSize:e.switchLoadingIconSize},[`&${n}-checked`]:{[`${n}-inner`]:{paddingInlineStart:h,paddingInlineEnd:o,[`${u}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${u}-unchecked`]:{marginInlineStart:`calc(100% - ${t+a*2}px + ${o*2}px)`,marginInlineEnd:`calc(-100% + ${t+a*2}px - ${o*2}px)`}},[`${n}-handle`]:{insetInlineStart:`calc(100% - ${t+a}px)`}},[`&:not(${n}-disabled):active`]:{[`&:not(${n}-checked) ${u}`]:{[`${u}-unchecked`]:{marginInlineStart:e.marginXXS/2,marginInlineEnd:-e.marginXXS/2}},[`&${n}-checked ${u}`]:{[`${u}-checked`]:{marginInlineStart:-e.marginXXS/2,marginInlineEnd:e.marginXXS/2}}}}}}},_=e=>{const{componentCls:n,handleSize:l}=e;return{[n]:{[`${n}-loading-icon${e.iconCls}`]:{position:"relative",top:(l-e.fontSize)/2,color:e.switchLoadingIconColor,verticalAlign:"top"},[`&${n}-checked ${n}-loading-icon`]:{color:e.switchColor}}}},$=e=>{const{componentCls:n,motion:l,trackPadding:a,handleBg:s,handleShadow:h,handleSize:o}=e,t=`${n}-handle`;return{[n]:{[t]:{position:"absolute",top:a,insetInlineStart:a,width:o,height:o,transition:`all ${e.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:s,borderRadius:o/2,boxShadow:h,transition:`all ${e.switchDuration} ease-in-out`,content:'""'}},[`&${n}-checked ${t}`]:{insetInlineStart:`calc(100% - ${o+a}px)`},[`&:not(${n}-disabled):active`]:l?{[`${t}::before`]:{insetInlineEnd:e.switchHandleActiveInset,insetInlineStart:0},[`&${n}-checked ${t}::before`]:{insetInlineEnd:0,insetInlineStart:e.switchHandleActiveInset}}:{}}}},S=e=>{const{componentCls:n,trackHeight:l,trackPadding:a,innerMinMargin:s,innerMaxMargin:h,handleSize:o}=e,t=`${n}-inner`;return{[n]:{[t]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:h,paddingInlineEnd:s,transition:`padding-inline-start ${e.switchDuration} ease-in-out, padding-inline-end ${e.switchDuration} ease-in-out`,[`${t}-checked, ${t}-unchecked`]:{display:"block",color:e.colorTextLightSolid,fontSize:e.fontSizeSM,transition:`margin-inline-start ${e.switchDuration} ease-in-out, margin-inline-end ${e.switchDuration} ease-in-out`,pointerEvents:"none"},[`${t}-checked`]:{marginInlineStart:`calc(-100% + ${o+a*2}px - ${h*2}px)`,marginInlineEnd:`calc(100% - ${o+a*2}px + ${h*2}px)`},[`${t}-unchecked`]:{marginTop:-l,marginInlineStart:0,marginInlineEnd:0}},[`&${n}-checked ${t}`]:{paddingInlineStart:s,paddingInlineEnd:h,[`${t}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${t}-unchecked`]:{marginInlineStart:`calc(100% - ${o+a*2}px + ${h*2}px)`,marginInlineEnd:`calc(-100% + ${o+a*2}px - ${h*2}px)`}},[`&:not(${n}-disabled):active`]:{[`&:not(${n}-checked) ${t}`]:{[`${t}-unchecked`]:{marginInlineStart:a*2,marginInlineEnd:-a*2}},[`&${n}-checked ${t}`]:{[`${t}-checked`]:{marginInlineStart:-a*2,marginInlineEnd:a*2}}}}}},Z=e=>{const{componentCls:n,trackHeight:l,trackMinWidth:a}=e;return{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,I.Wf)(e)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:a,height:l,lineHeight:`${l}px`,verticalAlign:"middle",background:e.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${e.motionDurationMid}`,userSelect:"none",[`&:hover:not(${n}-disabled)`]:{background:e.colorTextTertiary}}),(0,I.Qy)(e)),{[`&${n}-checked`]:{background:e.switchColor,[`&:hover:not(${n}-disabled)`]:{background:e.colorPrimaryHover}},[`&${n}-loading, &${n}-disabled`]:{cursor:"not-allowed",opacity:e.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${n}-rtl`]:{direction:"rtl"}})}};var z=(0,f.Z)("Switch",e=>{const n=(0,W.TS)(e,{switchDuration:e.motionDurationMid,switchColor:e.colorPrimary,switchDisabledOpacity:e.opacityLoading,switchLoadingIconSize:e.fontSizeIcon*.75,switchLoadingIconColor:`rgba(0, 0, 0, ${e.opacityLoading})`,switchHandleActiveInset:"-30%"});return[Z(n),S(n),$(n),_(n),x(n)]},e=>{const{fontSize:n,lineHeight:l,controlHeight:a,colorWhite:s}=e,h=n*l,o=a/2,t=2,u=h-t*2,B=o-t*2;return{trackHeight:h,trackHeightSM:o,trackMinWidth:u*2+t*4,trackMinWidthSM:B*2+t*2,trackPadding:t,handleBg:s,handleSize:u,handleSizeSM:B,handleShadow:`0 2px 4px 0 ${new b.C("#00230b").setAlpha(.2).toRgbString()}`,innerMinMargin:u/2,innerMaxMargin:u+t+t*2,innerMinMarginSM:B/2,innerMaxMarginSM:B+t+t*2}}),V=function(e,n){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(l[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)n.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(l[a[s]]=e[a[s]]);return l};const Y=r.forwardRef((e,n)=>{const{prefixCls:l,size:a,disabled:s,loading:h,className:o,rootClassName:t,style:u}=e,B=V(e,["prefixCls","size","disabled","loading","className","rootClassName","style"]),{getPrefixCls:J,direction:q,switch:D}=r.useContext(K.E_),k=r.useContext(d.Z),F=(s!=null?s:k)||h,O=J("switch",l),ee=r.createElement("div",{className:`${O}-handle`},h&&r.createElement(m.Z,{className:`${O}-loading-icon`})),[Q,R]=z(O),ne=(0,c.Z)(a),U=E()(D==null?void 0:D.className,{[`${O}-small`]:ne==="small",[`${O}-loading`]:h,[`${O}-rtl`]:q==="rtl"},o,t,R),ie=Object.assign(Object.assign({},D==null?void 0:D.style),u);return Q(r.createElement(H.Z,{component:"Switch"},r.createElement(C,Object.assign({},B,{prefixCls:O,className:U,style:ie,disabled:F,ref:n,loadingIcon:ee}))))});Y.__ANT_SWITCH=!0;var X=Y}}]);
