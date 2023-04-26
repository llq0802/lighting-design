"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[9638],{48115:function(tt,be,c){c.d(be,{Z:function(){return Ne}});var ue=c(1413),ce=c(67294),Se={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"},j=Se,ee=c(13401),N=function(ye,r){return ce.createElement(ee.Z,(0,ue.Z)((0,ue.Z)({},ye),{},{ref:r,icon:j}))};N.displayName="UpOutlined";var Ne=ce.forwardRef(N)},79638:function(tt,be,c){c.d(be,{Z:function(){return Rt}});var ue=c(80882),ce=c(48115),Se=c(94184),j=c.n(Se),ee=c(87462),N=c(4942),Ne=c(71002),K=c(97685),ye=c(91),r=c(67294),de=c(15105),fe=c(8410),nt=c(42550),Ve=c(15671),Ae=c(43144);function Ee(){return typeof BigInt=="function"}function z(e){var t=e.trim(),n=t.startsWith("-");n&&(t=t.slice(1)),t=t.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,""),t.startsWith(".")&&(t="0".concat(t));var a=t||"0",i=a.split("."),l=i[0]||"0",h=i[1]||"0";l==="0"&&h==="0"&&(n=!1);var f=n?"-":"";return{negative:n,negativeStr:f,trimStr:a,integerStr:l,decimalStr:h,fullStr:"".concat(f).concat(a)}}function Ie(e){var t=String(e);return!Number.isNaN(Number(t))&&t.includes("e")}function te(e){var t=String(e);if(Ie(e)){var n=Number(t.slice(t.indexOf("e-")+2)),a=t.match(/\.(\d+)/);return a!=null&&a[1]&&(n+=a[1].length),n}return t.includes(".")&&xe(t)?t.length-t.indexOf(".")-1:0}function me(e){var t=String(e);if(Ie(e)){if(e>Number.MAX_SAFE_INTEGER)return String(Ee()?BigInt(e).toString():Number.MAX_SAFE_INTEGER);if(e<Number.MIN_SAFE_INTEGER)return String(Ee()?BigInt(e).toString():Number.MIN_SAFE_INTEGER);t=e.toFixed(te(t))}return z(t).fullStr}function xe(e){return typeof e=="number"?!Number.isNaN(e):e?/^\s*-?\d+(\.\d+)?\s*$/.test(e)||/^\s*-?\d+\.\s*$/.test(e)||/^\s*-?\.\d+\s*$/.test(e):!1}function je(e){return!e&&e!==0&&!Number.isNaN(e)||!String(e).trim()}var rt=function(){function e(t){if((0,Ve.Z)(this,e),(0,N.Z)(this,"origin",""),(0,N.Z)(this,"number",void 0),(0,N.Z)(this,"empty",void 0),je(t)){this.empty=!0;return}this.origin=String(t),this.number=Number(t)}return(0,Ae.Z)(e,[{key:"negate",value:function(){return new e(-this.toNumber())}},{key:"add",value:function(n){if(this.isInvalidate())return new e(n);var a=Number(n);if(Number.isNaN(a))return this;var i=this.number+a;if(i>Number.MAX_SAFE_INTEGER)return new e(Number.MAX_SAFE_INTEGER);if(i<Number.MIN_SAFE_INTEGER)return new e(Number.MIN_SAFE_INTEGER);var l=Math.max(te(this.number),te(a));return new e(i.toFixed(l))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(n){return this.toNumber()===(n==null?void 0:n.toNumber())}},{key:"lessEquals",value:function(n){return this.add(n.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return n?this.isInvalidate()?"":me(this.number):this.origin}}]),e}(),at=function(){function e(t){if((0,Ve.Z)(this,e),(0,N.Z)(this,"origin",""),(0,N.Z)(this,"negative",void 0),(0,N.Z)(this,"integer",void 0),(0,N.Z)(this,"decimal",void 0),(0,N.Z)(this,"decimalLen",void 0),(0,N.Z)(this,"empty",void 0),(0,N.Z)(this,"nan",void 0),je(t)){this.empty=!0;return}if(this.origin=String(t),t==="-"||Number.isNaN(t)){this.nan=!0;return}var n=t;if(Ie(n)&&(n=Number(n)),n=typeof n=="string"?n:me(n),xe(n)){var a=z(n);this.negative=a.negative;var i=a.trimStr.split(".");this.integer=BigInt(i[0]);var l=i[1]||"0";this.decimal=BigInt(l),this.decimalLen=l.length}else this.nan=!0}return(0,Ae.Z)(e,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(n){var a="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(n,"0"));return BigInt(a)}},{key:"negate",value:function(){var n=new e(this.toString());return n.negative=!n.negative,n}},{key:"add",value:function(n){if(this.isInvalidate())return new e(n);var a=new e(n);if(a.isInvalidate())return this;var i=Math.max(this.getDecimalStr().length,a.getDecimalStr().length),l=this.alignDecimal(i),h=a.alignDecimal(i),f=(l+h).toString(),b=z(f),S=b.negativeStr,g=b.trimStr,y="".concat(S).concat(g.padStart(i+1,"0"));return new e("".concat(y.slice(0,-i),".").concat(y.slice(-i)))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(n){return this.toString()===(n==null?void 0:n.toString())}},{key:"lessEquals",value:function(n){return this.add(n.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return n?this.isInvalidate()?"":z("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),e}();function Be(e){return Ee()?new at(e):new rt(e)}function ve(e,t,n){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(e==="")return"";var i=z(e),l=i.negativeStr,h=i.integerStr,f=i.decimalStr,b="".concat(t).concat(f),S="".concat(l).concat(h);if(n>=0){var g=Number(f[n]);if(g>=5&&!a){var y=Be(e).add("".concat(l,"0.").concat("0".repeat(n)).concat(10-g));return ve(y.toString(),t,n,a)}return n===0?S:"".concat(S).concat(t).concat(f.padEnd(n,"0").slice(0,n))}return b===".0"?S:"".concat(S).concat(b)}var Z=Be,it=c(31131),ot=function(){var t=(0,r.useState)(!1),n=(0,K.Z)(t,2),a=n[0],i=n[1];return(0,fe.Z)(function(){i((0,it.Z)())},[]),a},st=ot,lt=200,ut=600;function ct(e){var t=e.prefixCls,n=e.upNode,a=e.downNode,i=e.upDisabled,l=e.downDisabled,h=e.onStep,f=r.useRef(),b=r.useRef();b.current=h;var S=function($,V){$.preventDefault(),b.current(V);function E(){b.current(V),f.current=setTimeout(E,lt)}f.current=setTimeout(E,ut)},g=function(){clearTimeout(f.current)};r.useEffect(function(){return g},[]);var y=st();if(y)return null;var m="".concat(t,"-handler"),I=j()(m,"".concat(m,"-up"),(0,N.Z)({},"".concat(m,"-up-disabled"),i)),R=j()(m,"".concat(m,"-down"),(0,N.Z)({},"".concat(m,"-down-disabled"),l)),O={unselectable:"on",role:"button",onMouseUp:g,onMouseLeave:g};return r.createElement("div",{className:"".concat(m,"-wrap")},r.createElement("span",(0,ee.Z)({},O,{onMouseDown:function($){S($,!0)},"aria-label":"Increase Value","aria-disabled":i,className:I}),n||r.createElement("span",{unselectable:"on",className:"".concat(t,"-handler-up-inner")})),r.createElement("span",(0,ee.Z)({},O,{onMouseDown:function($){S($,!1)},"aria-label":"Decrease Value","aria-disabled":l,className:R}),a||r.createElement("span",{unselectable:"on",className:"".concat(t,"-handler-down-inner")})))}function Pe(e){var t=typeof e=="number"?me(e):z(e).fullStr,n=t.includes(".");return n?z(t.replace(/(\d)\.(\d)/g,"$1$2.")).fullStr:e+"0"}var dt=c(80334);function ft(e,t){var n=(0,r.useRef)(null);function a(){try{var l=e.selectionStart,h=e.selectionEnd,f=e.value,b=f.substring(0,l),S=f.substring(h);n.current={start:l,end:h,value:f,beforeTxt:b,afterTxt:S}}catch(g){}}function i(){if(e&&n.current&&t)try{var l=e.value,h=n.current,f=h.beforeTxt,b=h.afterTxt,S=h.start,g=l.length;if(l.endsWith(b))g=l.length-n.current.afterTxt.length;else if(l.startsWith(f))g=f.length;else{var y=f[S-1],m=l.indexOf(y,S-1);m!==-1&&(g=m+1)}e.setSelectionRange(g,g)}catch(I){(0,dt.ZP)(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(I.message))}}return[a,i]}var Te=c(75164),mt=function(){var e=(0,r.useRef)(0),t=function(){Te.Z.cancel(e.current)};return(0,r.useEffect)(function(){return t},[]),function(n){t(),e.current=(0,Te.Z)(function(){n()})}},vt=["prefixCls","className","style","min","max","step","defaultValue","value","disabled","readOnly","upHandler","downHandler","keyboard","controls","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep"],Fe=function(t,n){return t||n.isEmpty()?n.toString():n.toNumber()},Ue=function(t){var n=Z(t);return n.isInvalidate()?null:n},ze=r.forwardRef(function(e,t){var n,a=e.prefixCls,i=a===void 0?"rc-input-number":a,l=e.className,h=e.style,f=e.min,b=e.max,S=e.step,g=S===void 0?1:S,y=e.defaultValue,m=e.value,I=e.disabled,R=e.readOnly,O=e.upHandler,M=e.downHandler,$=e.keyboard,V=e.controls,E=V===void 0?!0:V,k=e.stringMode,s=e.parser,W=e.formatter,D=e.precision,T=e.decimalSeparator,ne=e.onChange,H=e.onInput,L=e.onPressEnter,re=e.onStep,X=(0,ye.Z)(e,vt),pe="".concat(i,"-input"),Y=r.useRef(null),Re=r.useState(!1),Q=(0,K.Z)(Re,2),B=Q[0],ae=Q[1],x=r.useRef(!1),G=r.useRef(!1),F=r.useRef(!1),De=r.useState(function(){return Z(m!=null?m:y)}),U=(0,K.Z)(De,2),v=U[0],P=U[1];function w(u){m===void 0&&P(u)}var J=r.useCallback(function(u,o){if(!o)return D>=0?D:Math.max(te(u),te(g))},[D,g]),ie=r.useCallback(function(u){var o=String(u);if(s)return s(o);var p=o;return T&&(p=p.replace(T,".")),p.replace(/[^\w.-]+/g,"")},[s,T]),he=r.useRef(""),Ge=r.useCallback(function(u,o){if(W)return W(u,{userTyping:o,input:String(he.current)});var p=typeof u=="number"?me(u):u;if(!o){var d=J(p,o);if(xe(p)&&(T||d>=0)){var A=T||".";p=ve(p,A,d)}}return p},[W,J,T]),Dt=r.useState(function(){var u=y!=null?y:m;return v.isInvalidate()&&["string","number"].includes((0,Ne.Z)(u))?Number.isNaN(u)?"":u:Ge(v.toString(),!1)}),Ke=(0,K.Z)(Dt,2),oe=Ke[0],ke=Ke[1];he.current=oe;function se(u,o){ke(Ge(u.isInvalidate()?u.toString(!1):u.toString(!o),o))}var q=r.useMemo(function(){return Ue(b)},[b,D]),_=r.useMemo(function(){return Ue(f)},[f,D]),Xe=r.useMemo(function(){return!q||!v||v.isInvalidate()?!1:q.lessEquals(v)},[q,v]),Ye=r.useMemo(function(){return!_||!v||v.isInvalidate()?!1:v.lessEquals(_)},[_,v]),Zt=ft(Y.current,B),Qe=(0,K.Z)(Zt,2),Ot=Qe[0],Mt=Qe[1],Je=function(o){return q&&!o.lessEquals(q)?q:_&&!_.lessEquals(o)?_:null},Ze=function(o){return!Je(o)},Oe=function(o,p){var d=o,A=Ze(d)||d.isEmpty();if(!d.isEmpty()&&!p&&(d=Je(d)||d,A=!0),!R&&!I&&A){var le=d.toString(),Me=J(le,p);return Me>=0&&(d=Z(ve(le,".",Me)),Ze(d)||(d=Z(ve(le,".",Me,!0)))),d.equals(v)||(w(d),ne==null||ne(d.isEmpty()?null:Fe(k,d)),m===void 0&&se(d,p)),d}return v},Vt=mt(),qe=function u(o){if(Ot(),ke(o),!G.current){var p=ie(o),d=Z(p);d.isNaN()||Oe(d,!0)}H==null||H(o),Vt(function(){var A=o;s||(A=o.replace(/。/g,".")),A!==o&&u(A)})},At=function(){G.current=!0},jt=function(){G.current=!1,qe(Y.current.value)},Bt=function(o){qe(o.target.value)},_e=function(o){var p;if(!(o&&Xe||!o&&Ye)){x.current=!1;var d=Z(F.current?Pe(g):g);o||(d=d.negate());var A=(v||Z(0)).add(d.toString()),le=Oe(A,!1);re==null||re(Fe(k,le),{offset:F.current?Pe(g):g,type:o?"up":"down"}),(p=Y.current)===null||p===void 0||p.focus()}},et=function(o){var p=Z(ie(oe)),d=p;p.isNaN()?d=v:d=Oe(p,o),m!==void 0?se(v,!1):d.isNaN()||se(d,!1)},Pt=function(){x.current=!0},Tt=function(o){var p=o.which,d=o.shiftKey;x.current=!0,d?F.current=!0:F.current=!1,p===de.Z.ENTER&&(G.current||(x.current=!1),et(!1),L==null||L(o)),$!==!1&&!G.current&&[de.Z.UP,de.Z.DOWN].includes(p)&&(_e(de.Z.UP===p),o.preventDefault())},Ft=function(){x.current=!1,F.current=!1},Ut=function(){et(!1),ae(!1),x.current=!1};return(0,fe.o)(function(){v.isInvalidate()||se(v,!1)},[D]),(0,fe.o)(function(){var u=Z(m);P(u);var o=Z(ie(oe));(!u.equals(o)||!x.current||W)&&se(u,x.current)},[m]),(0,fe.o)(function(){W&&Mt()},[oe]),r.createElement("div",{className:j()(i,l,(n={},(0,N.Z)(n,"".concat(i,"-focused"),B),(0,N.Z)(n,"".concat(i,"-disabled"),I),(0,N.Z)(n,"".concat(i,"-readonly"),R),(0,N.Z)(n,"".concat(i,"-not-a-number"),v.isNaN()),(0,N.Z)(n,"".concat(i,"-out-of-range"),!v.isInvalidate()&&!Ze(v)),n)),style:h,onFocus:function(){ae(!0)},onBlur:Ut,onKeyDown:Tt,onKeyUp:Ft,onCompositionStart:At,onCompositionEnd:jt,onBeforeInput:Pt},E&&r.createElement(ct,{prefixCls:i,upNode:O,downNode:M,upDisabled:Xe,downDisabled:Ye,onStep:_e}),r.createElement("div",{className:"".concat(pe,"-wrap")},r.createElement("input",(0,ee.Z)({autoComplete:"off",role:"spinbutton","aria-valuemin":f,"aria-valuemax":b,"aria-valuenow":v.isInvalidate()?null:v.toString(),step:g},X,{ref:(0,nt.sQ)(Y,t),className:pe,value:oe,onChange:Bt,disabled:I,readOnly:R}))))});ze.displayName="InputNumber";var gt=ze,pt=gt,ht=c(53124),bt=c(63830),St=c(98866),Nt=c(97647),$e=c(65223),we=c(4173),We=c(96159),ge=c(9708),C=c(47673),yt=c(67968),Ce=c(14747),Et=c(80110);const It=e=>{const{componentCls:t,lineWidth:n,lineType:a,colorBorder:i,borderRadius:l,fontSizeLG:h,controlHeightLG:f,controlHeightSM:b,colorError:S,inputPaddingHorizontalSM:g,colorTextDescription:y,motionDurationMid:m,colorPrimary:I,controlHeight:R,inputPaddingHorizontal:O,colorBgContainer:M,colorTextDisabled:$,borderRadiusSM:V,borderRadiusLG:E,controlWidth:k,handleVisible:s}=e;return[{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,Ce.Wf)(e)),(0,C.ik)(e)),(0,C.bi)(e,t)),{display:"inline-block",width:k,margin:0,padding:0,border:`${n}px ${a} ${i}`,borderRadius:l,"&-rtl":{direction:"rtl",[`${t}-input`]:{direction:"rtl"}},"&-lg":{padding:0,fontSize:h,borderRadius:E,[`input${t}-input`]:{height:f-2*n}},"&-sm":{padding:0,borderRadius:V,[`input${t}-input`]:{height:b-2*n,padding:`0 ${g}px`}},"&:hover":Object.assign({},(0,C.pU)(e)),"&-focused":Object.assign({},(0,C.M1)(e)),"&-disabled":Object.assign(Object.assign({},(0,C.Xy)(e)),{[`${t}-input`]:{cursor:"not-allowed"}}),"&-out-of-range":{input:{color:S}},"&-group":Object.assign(Object.assign(Object.assign({},(0,Ce.Wf)(e)),(0,C.s7)(e)),{"&-wrapper":{display:"inline-block",textAlign:"start",verticalAlign:"top",[`${t}-affix-wrapper`]:{width:"100%"},"&-lg":{[`${t}-group-addon`]:{borderRadius:E}},"&-sm":{[`${t}-group-addon`]:{borderRadius:V}}}}),[t]:{"&-input":Object.assign(Object.assign({width:"100%",height:R-2*n,padding:`0 ${O}px`,textAlign:"start",backgroundColor:"transparent",border:0,borderRadius:l,outline:0,transition:`all ${m} linear`,appearance:"textfield",color:e.colorText,fontSize:"inherit",verticalAlign:"top"},(0,C.nz)(e.colorTextPlaceholder)),{'&[type="number"]::-webkit-inner-spin-button, &[type="number"]::-webkit-outer-spin-button':{margin:0,webkitAppearance:"none",appearance:"none"}})}})},{[t]:{[`&:hover ${t}-handler-wrap, &-focused ${t}-handler-wrap`]:{opacity:1},[`${t}-handler-wrap`]:{position:"absolute",insetBlockStart:0,insetInlineEnd:0,width:e.handleWidth,height:"100%",background:M,borderStartStartRadius:0,borderStartEndRadius:l,borderEndEndRadius:l,borderEndStartRadius:0,opacity:s===!0?1:0,display:"flex",flexDirection:"column",alignItems:"stretch",transition:`opacity ${m} linear ${m}`,[`${t}-handler`]:{display:"flex",alignItems:"center",justifyContent:"center",flex:"auto",height:"40%",[`
              ${t}-handler-up-inner,
              ${t}-handler-down-inner
            `]:{marginInlineEnd:0,fontSize:e.handleFontSize}}},[`${t}-handler`]:{height:"50%",overflow:"hidden",color:y,fontWeight:"bold",lineHeight:0,textAlign:"center",cursor:"pointer",borderInlineStart:`${n}px ${a} ${i}`,transition:`all ${m} linear`,"&:active":{background:e.colorFillAlter},"&:hover":{height:"60%",[`
              ${t}-handler-up-inner,
              ${t}-handler-down-inner
            `]:{color:I}},"&-up-inner, &-down-inner":Object.assign(Object.assign({},(0,Ce.Ro)()),{color:y,transition:`all ${m} linear`,userSelect:"none"})},[`${t}-handler-up`]:{borderStartEndRadius:l},[`${t}-handler-down`]:{borderBlockStart:`${n}px ${a} ${i}`,borderEndEndRadius:l},"&-disabled, &-readonly":{[`${t}-handler-wrap`]:{display:"none"},[`${t}-input`]:{color:"inherit"}},[`
          ${t}-handler-up-disabled,
          ${t}-handler-down-disabled
        `]:{cursor:"not-allowed"},[`
          ${t}-handler-up-disabled:hover &-handler-up-inner,
          ${t}-handler-down-disabled:hover &-handler-down-inner
        `]:{color:$}}},{[`${t}-borderless`]:{borderColor:"transparent",boxShadow:"none",[`${t}-handler-down`]:{borderBlockStartWidth:0}}}]},xt=e=>{const{componentCls:t,inputPaddingHorizontal:n,inputAffixPadding:a,controlWidth:i,borderRadiusLG:l,borderRadiusSM:h}=e;return{[`${t}-affix-wrapper`]:Object.assign(Object.assign(Object.assign({},(0,C.ik)(e)),(0,C.bi)(e,`${t}-affix-wrapper`)),{position:"relative",display:"inline-flex",width:i,padding:0,paddingInlineStart:n,"&-lg":{borderRadius:l},"&-sm":{borderRadius:h},[`&:not(${t}-affix-wrapper-disabled):hover`]:Object.assign(Object.assign({},(0,C.pU)(e)),{zIndex:1}),"&-focused, &:focus":{zIndex:1},"&-disabled":{[`${t}[disabled]`]:{background:"transparent"}},[`> div${t}`]:{width:"100%",border:"none",outline:"none",[`&${t}-focused`]:{boxShadow:"none !important"}},[`input${t}-input`]:{padding:0},"&::before":{width:0,visibility:"hidden",content:'"\\a0"'},[`${t}-handler-wrap`]:{zIndex:2},[t]:{"&-prefix, &-suffix":{display:"flex",flex:"none",alignItems:"center",pointerEvents:"none"},"&-prefix":{marginInlineEnd:a},"&-suffix":{position:"absolute",insetBlockStart:0,insetInlineEnd:0,zIndex:1,height:"100%",marginInlineEnd:n,marginInlineStart:a}}})}};var $t=(0,yt.Z)("InputNumber",e=>{const t=(0,C.e5)(e);return[It(t),xt(t),(0,Et.c)(t)]},e=>({controlWidth:90,handleWidth:e.controlHeightSM-e.lineWidth*2,handleFontSize:e.fontSize/2,handleVisible:"auto"})),wt=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]]);return n};const He=r.forwardRef((e,t)=>{const{getPrefixCls:n,direction:a}=r.useContext(ht.E_),i=r.useContext(Nt.Z),[l,h]=r.useState(!1),f=r.useRef(null);r.useImperativeHandle(t,()=>f.current);const{className:b,rootClassName:S,size:g,disabled:y,prefixCls:m,addonBefore:I,addonAfter:R,prefix:O,bordered:M=!0,readOnly:$,status:V,controls:E}=e,k=wt(e,["className","rootClassName","size","disabled","prefixCls","addonBefore","addonAfter","prefix","bordered","readOnly","status","controls"]),s=n("input-number",m),[W,D]=$t(s),{compactSize:T,compactItemClassnames:ne}=(0,we.ri)(s,a);let H=r.createElement(ce.Z,{className:`${s}-handler-up-inner`}),L=r.createElement(ue.Z,{className:`${s}-handler-down-inner`});const re=typeof E=="boolean"?E:void 0;typeof E=="object"&&(H=typeof E.upIcon=="undefined"?H:r.createElement("span",{className:`${s}-handler-up-inner`},E.upIcon),L=typeof E.downIcon=="undefined"?L:r.createElement("span",{className:`${s}-handler-down-inner`},E.downIcon));const{hasFeedback:X,status:pe,isFormItemInput:Y,feedbackIcon:Re}=r.useContext($e.aM),Q=(0,ge.F)(pe,V),B=T||g||i,ae=O!=null||X,x=!!(I||R),G=r.useContext(St.Z),F=y!=null?y:G,De=j()({[`${s}-lg`]:B==="large",[`${s}-sm`]:B==="small",[`${s}-rtl`]:a==="rtl",[`${s}-borderless`]:!M,[`${s}-in-form-item`]:Y},(0,ge.Z)(s,Q),ne,D,b,!ae&&!x&&S);let U=r.createElement(pt,Object.assign({ref:f,disabled:F,className:De,upHandler:H,downHandler:L,prefixCls:s,readOnly:$,controls:re},k));if(ae){const v=j()(`${s}-affix-wrapper`,(0,ge.Z)(`${s}-affix-wrapper`,Q,X),{[`${s}-affix-wrapper-focused`]:l,[`${s}-affix-wrapper-disabled`]:e.disabled,[`${s}-affix-wrapper-sm`]:B==="small",[`${s}-affix-wrapper-lg`]:B==="large",[`${s}-affix-wrapper-rtl`]:a==="rtl",[`${s}-affix-wrapper-readonly`]:$,[`${s}-affix-wrapper-borderless`]:!M},!x&&b,!x&&S,D);U=r.createElement("div",{className:v,style:e.style,onMouseUp:()=>f.current.focus()},O&&r.createElement("span",{className:`${s}-prefix`},O),(0,We.Tm)(U,{style:null,value:e.value,onFocus:P=>{var w;h(!0),(w=e.onFocus)===null||w===void 0||w.call(e,P)},onBlur:P=>{var w;h(!1),(w=e.onBlur)===null||w===void 0||w.call(e,P)}}),X&&r.createElement("span",{className:`${s}-suffix`},Re))}if(x){const v=`${s}-group`,P=`${v}-addon`,w=I?r.createElement("div",{className:P},I):null,J=R?r.createElement("div",{className:P},R):null,ie=j()(`${s}-wrapper`,v,D,{[`${v}-rtl`]:a==="rtl"}),he=j()(`${s}-group-wrapper`,{[`${s}-group-wrapper-sm`]:B==="small",[`${s}-group-wrapper-lg`]:B==="large",[`${s}-group-wrapper-rtl`]:a==="rtl"},(0,ge.Z)(`${s}-group-wrapper`,Q,X),D,b,S);U=r.createElement("div",{className:he,style:e.style},r.createElement("div",{className:ie},w&&r.createElement(we.BR,null,r.createElement($e.Ux,{status:!0,override:!0},w)),(0,We.Tm)(U,{style:null,disabled:F}),J&&r.createElement(we.BR,null,r.createElement($e.Ux,{status:!0,override:!0},J))))}return W(U)}),Le=He,Ct=e=>r.createElement(bt.ZP,{theme:{components:{InputNumber:{handleVisible:!0}}}},r.createElement(He,Object.assign({},e)));Le._InternalPanelDoNotUseOrYouWillBeFired=Ct;var Rt=Le}}]);
