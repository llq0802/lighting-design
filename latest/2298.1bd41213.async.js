(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[2298],{84567:function(p,_,n){"use strict";n.d(_,{Z:function(){return V}});var b=n(94184),x=n.n(b),P=n(50132),i=n(67294),U=n(53124),T=n(98866),w=n(65223),t=i.createContext(null),m=n(63185),o=function(s,g){var C={};for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&g.indexOf(l)<0&&(C[l]=s[l]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,l=Object.getOwnPropertySymbols(s);f<l.length;f++)g.indexOf(l[f])<0&&Object.prototype.propertyIsEnumerable.call(s,l[f])&&(C[l[f]]=s[l[f]]);return C};const r=(s,g)=>{var C;const{prefixCls:l,className:f,rootClassName:W,children:k,indeterminate:v=!1,style:j,onMouseEnter:R,onMouseLeave:y,skipGroup:B=!1,disabled:I}=s,a=o(s,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),{getPrefixCls:E,direction:A,checkbox:O}=i.useContext(U.E_),u=i.useContext(t),{isFormItemInput:z}=i.useContext(w.aM),H=i.useContext(T.Z),J=(C=(u==null?void 0:u.disabled)||I)!==null&&C!==void 0?C:H,Z=i.useRef(a.value);i.useEffect(()=>{u==null||u.registerValue(a.value)},[]),i.useEffect(()=>{if(!B)return a.value!==Z.current&&(u==null||u.cancelValue(Z.current),u==null||u.registerValue(a.value),Z.current=a.value),()=>u==null?void 0:u.cancelValue(a.value)},[a.value]);const D=E("checkbox",l),[q,Q]=(0,m.ZP)(D),K=Object.assign({},a);u&&!B&&(K.onChange=function(){a.onChange&&a.onChange.apply(a,arguments),u.toggleOption&&u.toggleOption({label:k,value:a.value})},K.name=u.name,K.checked=u.value.includes(a.value));const ee=x()(`${D}-wrapper`,{[`${D}-rtl`]:A==="rtl",[`${D}-wrapper-checked`]:K.checked,[`${D}-wrapper-disabled`]:J,[`${D}-wrapper-in-form-item`]:z},O==null?void 0:O.className,f,W,Q),te=x()({[`${D}-indeterminate`]:v},Q),re=v?"mixed":void 0;return q(i.createElement("label",{className:ee,style:Object.assign(Object.assign({},O==null?void 0:O.style),j),onMouseEnter:R,onMouseLeave:y},i.createElement(P.Z,Object.assign({"aria-checked":re},K,{prefixCls:D,className:te,disabled:J,ref:g})),k!==void 0&&i.createElement("span",null,k)))};var c=i.forwardRef(r),S=n(74902),$=n(10366),G=function(s,g){var C={};for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&g.indexOf(l)<0&&(C[l]=s[l]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,l=Object.getOwnPropertySymbols(s);f<l.length;f++)g.indexOf(l[f])<0&&Object.prototype.propertyIsEnumerable.call(s,l[f])&&(C[l[f]]=s[l[f]]);return C};const Y=(s,g)=>{const{defaultValue:C,children:l,options:f=[],prefixCls:W,className:k,rootClassName:v,style:j,onChange:R}=s,y=G(s,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),{getPrefixCls:B,direction:I}=i.useContext(U.E_),[a,E]=i.useState(y.value||C||[]),[A,O]=i.useState([]);i.useEffect(()=>{"value"in y&&E(y.value||[])},[y.value]);const u=i.useMemo(()=>f.map(h=>typeof h=="string"||typeof h=="number"?{label:h,value:h}:h),[f]),z=h=>{O(X=>X.filter(F=>F!==h))},H=h=>{O(X=>[].concat((0,S.Z)(X),[h]))},J=h=>{const X=a.indexOf(h.value),F=(0,S.Z)(a);X===-1?F.push(h.value):F.splice(X,1),"value"in y||E(F),R==null||R(F.filter(ne=>A.includes(ne)).sort((ne,oe)=>{const ie=u.findIndex(ae=>ae.value===ne),le=u.findIndex(ae=>ae.value===oe);return ie-le}))},Z=B("checkbox",W),D=`${Z}-group`,[q,Q]=(0,m.ZP)(Z),K=(0,$.Z)(y,["value","disabled"]),ee=f.length?u.map(h=>i.createElement(c,{prefixCls:Z,key:h.value.toString(),disabled:"disabled"in h?h.disabled:y.disabled,value:h.value,checked:a.includes(h.value),onChange:h.onChange,className:`${D}-item`,style:h.style,title:h.title},h.label)):l,te={toggleOption:J,value:a,disabled:y.disabled,name:y.name,registerValue:H,cancelValue:z},re=x()(D,{[`${D}-rtl`]:I==="rtl"},k,v,Q);return q(i.createElement("div",Object.assign({className:re,style:j},K,{ref:g}),i.createElement(t.Provider,{value:te},ee)))},N=i.forwardRef(Y);var L=i.memo(N);const M=c;M.Group=L,M.__ANT_CHECKBOX=!0;var V=M},63185:function(p,_,n){"use strict";n.d(_,{C2:function(){return w}});var b=n(96909),x=n(14747),P=n(45503),i=n(67968);const U=new b.Keyframes("antCheckboxEffect",{"0%":{transform:"scale(1)",opacity:.5},"100%":{transform:"scale(1.6)",opacity:0}}),T=e=>{const{checkboxCls:t}=e,m=`${t}-wrapper`;return[{[`${t}-group`]:Object.assign(Object.assign({},(0,x.Wf)(e)),{display:"inline-flex",flexWrap:"wrap",columnGap:e.marginXS,[`> ${e.antCls}-row`]:{flex:1}}),[m]:Object.assign(Object.assign({},(0,x.Wf)(e)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},[`& + ${m}`]:{marginInlineStart:0},[`&${m}-in-form-item`]:{'input[type="checkbox"]':{width:14,height:14}}}),[t]:Object.assign(Object.assign({},(0,x.Wf)(e)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",alignSelf:"center",[`${t}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,[`&:focus-visible + ${t}-inner`]:Object.assign({},(0,x.oN)(e))},[`${t}-inner`]:{boxSizing:"border-box",position:"relative",top:0,insetInlineStart:0,display:"block",width:e.checkboxSize,height:e.checkboxSize,direction:"ltr",backgroundColor:e.colorBgContainer,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,borderCollapse:"separate",transition:`all ${e.motionDurationSlow}`,"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"21.5%",display:"table",width:e.checkboxSize/14*5,height:e.checkboxSize/14*8,border:`${e.lineWidthBold}px solid ${e.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`}},"& + span":{paddingInlineStart:e.paddingXS,paddingInlineEnd:e.paddingXS}})},{[`${m}:hover ${t}:after`]:{visibility:"visible"},[`
        ${m}:not(${m}-disabled),
        ${t}:not(${t}-disabled)
      `]:{[`&:hover ${t}-inner`]:{borderColor:e.colorPrimary}},[`${m}:not(${m}-disabled)`]:{[`&:hover ${t}-checked:not(${t}-disabled) ${t}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${t}-checked:not(${t}-disabled):after`]:{borderColor:e.colorPrimaryHover}}},{[`${t}-checked`]:{[`${t}-inner`]:{backgroundColor:e.colorPrimary,borderColor:e.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`}},"&:after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderRadius:e.borderRadiusSM,visibility:"hidden",border:`${e.lineWidthBold}px solid ${e.colorPrimary}`,animationName:U,animationDuration:e.motionDurationSlow,animationTimingFunction:"ease-in-out",animationFillMode:"backwards",content:'""',transition:`all ${e.motionDurationSlow}`}},[`
        ${m}-checked:not(${m}-disabled),
        ${t}-checked:not(${t}-disabled)
      `]:{[`&:hover ${t}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${t}:after`]:{borderColor:e.colorPrimaryHover}}},{[t]:{"&-indeterminate":{[`${t}-inner`]:{backgroundColor:e.colorBgContainer,borderColor:e.colorBorder,"&:after":{top:"50%",insetInlineStart:"50%",width:e.fontSizeLG/2,height:e.fontSizeLG/2,backgroundColor:e.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}}}}},{[`${m}-disabled`]:{cursor:"not-allowed"},[`${t}-disabled`]:{[`&, ${t}-input`]:{cursor:"not-allowed",pointerEvents:"none"},[`${t}-inner`]:{background:e.colorBgContainerDisabled,borderColor:e.colorBorder,"&:after":{borderColor:e.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:e.colorTextDisabled},[`&${t}-indeterminate ${t}-inner::after`]:{background:e.colorTextDisabled}}}]};function w(e,t){const m=(0,P.TS)(t,{checkboxCls:`.${e}`,checkboxSize:t.controlInteractiveSize});return[T(m)]}_.ZP=(0,i.Z)("Checkbox",(e,t)=>{let{prefixCls:m}=t;return[w(m,e)]})},50132:function(p,_,n){"use strict";var b=n(87462),x=n(1413),P=n(4942),i=n(97685),U=n(91),T=n(94184),w=n.n(T),e=n(21770),t=n(67294),m=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],o=(0,t.forwardRef)(function(r,d){var c,S=r.prefixCls,$=S===void 0?"rc-checkbox":S,G=r.className,Y=r.style,N=r.checked,L=r.disabled,M=r.defaultChecked,V=M===void 0?!1:M,s=r.type,g=s===void 0?"checkbox":s,C=r.title,l=r.onChange,f=(0,U.Z)(r,m),W=(0,t.useRef)(null),k=(0,e.Z)(V,{value:N}),v=(0,i.Z)(k,2),j=v[0],R=v[1];(0,t.useImperativeHandle)(d,function(){return{focus:function(){var a;(a=W.current)===null||a===void 0||a.focus()},blur:function(){var a;(a=W.current)===null||a===void 0||a.blur()},input:W.current}});var y=w()($,G,(c={},(0,P.Z)(c,"".concat($,"-checked"),j),(0,P.Z)(c,"".concat($,"-disabled"),L),c)),B=function(a){L||("checked"in r||R(a.target.checked),l==null||l({target:(0,x.Z)((0,x.Z)({},r),{},{type:g,checked:a.target.checked}),stopPropagation:function(){a.stopPropagation()},preventDefault:function(){a.preventDefault()},nativeEvent:a.nativeEvent}))};return t.createElement("span",{className:y,title:C,style:Y},t.createElement("input",(0,b.Z)({},f,{className:"".concat($,"-input"),ref:W,onChange:B,disabled:L,checked:!!j,type:g})),t.createElement("span",{className:"".concat($,"-inner")}))});_.Z=o},63405:function(p,_,n){var b=n(73897);function x(P){if(Array.isArray(P))return b(P)}p.exports=x,p.exports.__esModule=!0,p.exports.default=p.exports},79498:function(p){function _(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}p.exports=_,p.exports.__esModule=!0,p.exports.default=p.exports},42281:function(p){function _(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}p.exports=_,p.exports.__esModule=!0,p.exports.default=p.exports},861:function(p,_,n){var b=n(63405),x=n(79498),P=n(86116),i=n(42281);function U(T){return b(T)||x(T)||P(T)||i()}p.exports=U,p.exports.__esModule=!0,p.exports.default=p.exports},4368:function(p,_,n){"use strict";n.d(_,{c:function(){return m}});var b=n(67294),x=Object.prototype.hasOwnProperty;function P(o,r){var d,c;if(o===r)return!0;if(o&&r&&(d=o.constructor)===r.constructor){if(d===Date)return o.getTime()===r.getTime();if(d===RegExp)return o.toString()===r.toString();if(d===Array){if((c=o.length)===r.length)for(;c--&&P(o[c],r[c]););return c===-1}if(!d||typeof o=="object"){c=0;for(d in o)if(x.call(o,d)&&++c&&!x.call(r,d)||!(d in r)||!P(o[d],r[d]))return!1;return Object.keys(r).length===c}}return o!==o&&r!==r}var i,U=function(o){return function(r){return Promise.resolve(o.fn.apply(o,r.data[0])).then(function(d){var c,S=o.transferable==="auto"&&(c=d,"ArrayBuffer"in self&&c instanceof ArrayBuffer||"MessagePort"in self&&c instanceof MessagePort||"ImageBitmap"in self&&c instanceof ImageBitmap||"OffscreenCanvas"in self&&c instanceof OffscreenCanvas)?[d]:[];postMessage(["SUCCESS",d],S)}).catch(function(d){postMessage(["ERROR",d])})}},T=function(o,r,d){var c=`
    `+function($){return $.length===0?"":"importScripts("+$.map(function(G){return"'"+G+"'"}).toString()+")"}(r)+`;
    onmessage=(`+U+`)({
      fn: (`+o+`),
      transferable: '`+d+`'
    })
  `,S=new Blob([c],{type:"text/javascript"});return URL.createObjectURL(S)};(function(o){o.PENDING="PENDING",o.SUCCESS="SUCCESS",o.RUNNING="RUNNING",o.ERROR="ERROR",o.TIMEOUT_EXPIRED="TIMEOUT_EXPIRED"})(i||(i={}));var w,e=i;(function(o){o.AUTO="auto",o.NONE="none"})(w||(w={}));var t={timeout:void 0,remoteDependencies:[],autoTerminate:!0,transferable:w.AUTO},m=function(o,r){r===void 0&&(r=t);var d,c,S,$=b.useState(e.PENDING),G=$[0],Y=$[1],N=b.useRef(),L=b.useRef(!1),M=b.useRef({}),V=b.useRef(),s=b.useCallback(function(v){L.current=v===e.RUNNING,Y(v)},[]),g=b.useCallback(function(){var v;(v=N.current)!==null&&v!==void 0&&v._url&&(N.current.terminate(),URL.revokeObjectURL(N.current._url),M.current={},N.current=void 0,window.clearTimeout(V.current))},[]),C=b.useCallback(function(v){(r.autoTerminate!=null?r.autoTerminate:t.autoTerminate)&&g(),s(v)},[r.autoTerminate,g,s]),l=(d=function(){var v=r.remoteDependencies,j=r.timeout,R=j===void 0?t.timeout:j,y=r.transferable,B=T(o,v===void 0?t.remoteDependencies:v,y===void 0?t.transferable:y),I=new Worker(B);return I._url=B,I.onmessage=function(a){var E,A,O,u,z=a.data,H=z[1];switch(z[0]){case e.SUCCESS:(E=(A=M.current).resolve)===null||E===void 0||E.call(A,H),C(e.SUCCESS);break;default:(O=(u=M.current).reject)===null||O===void 0||O.call(u,H),C(e.ERROR)}},I.onerror=function(a){var E,A;(E=(A=M.current).reject)===null||E===void 0||E.call(A,a),C(e.ERROR)},R&&(V.current=window.setTimeout(function(){g(),s(e.TIMEOUT_EXPIRED)},R)),I},S=b.useRef(c=[o,r,g]),P(S.current,c)||(S.current=c),b.useCallback(d,S.current)),f=b.useCallback(function(){var v=[].slice.call(arguments),j=r,R=j.transferable,y=R===void 0?t.transferable:R;return new Promise(function(B,I){var a,E;M.current=((a={}).resolve=B,a.reject=I,a);var A=y===w.AUTO?v.filter(function(O){return"ArrayBuffer"in window&&O instanceof ArrayBuffer||"MessagePort"in window&&O instanceof MessagePort||"ImageBitmap"in window&&O instanceof ImageBitmap||"OffscreenCanvas"in window&&O instanceof OffscreenCanvas}):[];(E=N.current)===null||E===void 0||E.postMessage([[].concat(v)],A),s(e.RUNNING)})},[s]),W=b.useCallback(function(){var v=r.autoTerminate!=null?r.autoTerminate:t.autoTerminate;return L.current?(console.error("[useWorker] You can only run one instance of the worker at a time, if you want to run more than one in parallel, create another instance with the hook useWorker(). Read more: https://github.com/alewin/useWorker"),Promise.reject()):(!v&&N.current||(N.current=l()),f.apply(void 0,[].slice.call(arguments)))},[r.autoTerminate,l,f]),k={status:G,kill:g};return b.useEffect(function(){return function(){g()}},[g]),[W,k]}}}]);
