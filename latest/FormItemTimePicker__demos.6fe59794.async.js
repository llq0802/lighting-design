"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[8045],{77086:function(A,g,e){e.r(g);var a=e(5574),t=e.n(a),y=e(4390),d=e(67571),u=e(85893),c=function(){var v=y.Z.useForm(),m=t()(v,1),o=m[0];return(0,u.jsxs)(y.Z,{form:o,labelCol:{flex:"90px"},submitter:{buttonAlign:"center"},initialValues:{time2:"09:46"},onFinish:function(i){console.log("values",i)},children:[(0,u.jsx)(d.Z,{placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F41",label:"\u65F6\u95F4\u9009\u62E91",name:"time1",required:!0,contentAfter:(0,u.jsx)("div",{children:"\u540E\u9762"}),contentInline:!0,timePickerProps:{onChange:function(i){console.log("va",i)}}}),(0,u.jsx)(d.Z,{label:"\u65F6\u95F4\u9009\u62E92",name:"time2",format:"HH:mm",required:!0,contentAfter:(0,u.jsx)("div",{children:"\u540E\u9762"})}),(0,u.jsx)(d.Z,{label:"\u65F6\u95F4\u9009\u62E93",name:"time3",format:"h:mm a",timePickerProps:{use12Hours:!0}}),(0,u.jsx)(d.Z,{label:"\u65F6\u95F4\u9009\u62E93",name:"time4",required:!0,rangePicker:!0,placeholder:["\u5F00\u59CB\u65F6\u95F41","\u5F00\u59CB\u65F6\u95F42"]}),(0,u.jsx)(d.Z,{label:"\u65F6\u95F4\u9009\u62E94",name:"time5",rangePicker:!0}),(0,u.jsx)(d.Z,{disabled:!0,label:"\u65F6\u95F4\u9009\u62E95",name:"time5",rangePicker:!0})]})};g.default=c},26822:function(A,g,e){e.r(g);var a=e(5574),t=e.n(a),y=e(4390),d=e(67571),u=e(85893),c=function(){var v=y.Z.useForm(),m=t()(v,1),o=m[0];return(0,u.jsxs)(y.Z,{form:o,labelWidth:200,submitter:{buttonAlign:"center"},onFinish:function(i){console.log("values",i)},children:[(0,u.jsx)(d.Z,{label:"\u7981\u7528\u5305\u62EC\u5F53\u524D\u5C0F\u65F6\u4EE5\u524D\u5C0F\u65F6",name:"time0",disabledHourBefore:0}),(0,u.jsx)(d.Z,{label:"\u7981\u7528\u5F53\u524D\u5C0F\u65F6\u7684\u524D2\u5C0F\u65F6\u4EE5\u524D",name:"time1",disabledHourBefore:2}),(0,u.jsx)(d.Z,{label:"\u7981\u7528\u5F53\u524D\u5C0F\u65F6\u7684\u540E2\u5C0F\u65F6\u4EE5\u540E",name:"time2",disabledHourAfter:2}),(0,u.jsx)(d.Z,{label:"\u53EA\u80FD\u9009\u62E913-23\u5C0F\u65F6",name:"time3",timePickerProps:{disabledTime:function(){return{disabledHours:function(){return[0,1,2,3,4,5,6,7,8,9,10,11,12]}}}}}),(0,u.jsx)(d.Z,{label:"\u81EA\u5B9A\u4E49\u5F53\u524D\u5C0F\u65F6\u7684\u7981\u7528",name:"time6",timePickerProps:{disabledTime:function(){return{disabledHours:function(){return(0,d.i)(12,0)}}}}}),(0,u.jsx)(d.Z,{label:"\u53EA\u80FD\u9009\u62E9\u5F53\u524D\u65F6\u95F4\u7684\u524D\u540E7\u5C0F\u65F6",name:"time4",rangePicker:!0,disabledHourBefore:7,disabledHourAfter:7})]})};g.default=c},67571:function(A,g,e){e.d(g,{i:function(){return j}});var a=e(97857),t=e.n(a),y=e(13769),d=e.n(y),u=e(22638),c=e(68351),P=e(72224),v=e(33852),m=e.n(v),o=e(40964),_=e(89889),i=e(84640),r=e(55928),E=e(67294),l=e(85893),b=["dateValueType","style","value","rangePicker","format","placeholder","onChange"],O=["rangePicker","required","dateValueType","format","timePickerProps","size","placeholder","disabledHourBefore","disabledHourAfter","disabledMinutes","disabledSeconds","disabled"];function j(L,s,D){var T=typeof s=="number",C=typeof D=="number";if(!T&&!C)return[];if(T&&C){var n=o.nb.slice(L-s+1,L+D);return o.nb.filter(function(h){return!n.includes(h)})}else if(T){var f=o.nb.slice(0,L-s+1);return f}else if(C){var p=o.nb.slice(L+D);return p}return[]}var x=function(s){var D=s.dateValueType,T=s.style,C=s.value,n=s.rangePicker,f=s.format,p=s.placeholder,h=s.onChange,F=d()(s,b),I=(0,u.Z)(function(M,W){D==="string"?h==null||h(W,M):D==="dayjs"&&(h==null||h(M,W))});return p?n?(0,l.jsx)(c.Z.RangePicker,t()(t()({format:f,placeholder:p,style:t()({width:"100%"},T),locale:P.Z},F),{},{value:(0,r.Ow)(C||void 0,f),onChange:I})):(0,l.jsx)(c.Z,t()(t()({format:f,placeholder:p,style:t()({width:"100%"},T),locale:P.Z},F),{},{value:(0,r.Ow)(C||void 0,f),onChange:I})):n?(0,l.jsx)(c.Z.RangePicker,t()(t()({format:f,style:t()({width:"100%"},T),locale:P.Z},F),{},{value:(0,r.Ow)(C||void 0,f),onChange:I})):(0,l.jsx)(c.Z,t()(t()({format:f,style:t()({width:"100%"},T),locale:P.Z},F),{},{value:(0,r.Ow)(C||void 0,f),onChange:I}))},K=function(s){var D=s.rangePicker,T=D===void 0?!1:D,C=s.required,n=C===void 0?!1:C,f=s.dateValueType,p=f===void 0?"string":f,h=s.format,F=h===void 0?"HH:mm:ss":h,I=s.timePickerProps,M=I===void 0?o.FD:I,W=s.size,B=s.placeholder,R=s.disabledHourBefore,U=s.disabledHourAfter,$=s.disabledMinutes,V=$===void 0?function(){return[]}:$,w=s.disabledSeconds,Q=w===void 0?function(){return[]}:w,Z=s.disabled,N=d()(s,O),X=(0,E.useContext)(_.e),G=X.disabled,J=(0,u.Z)(function(z,S){var Y;return t()({disabledHours:function(){return j(z.hour(),R,U)},disabledMinutes:function(H){return V(H,S)},disabledSeconds:function(H,ne){return Q(H,ne,S)}},M==null||(Y=M.disabledTime)===null||Y===void 0?void 0:Y.call(M,z,S))}),q=(0,E.useMemo)(function(){return!(typeof R=="number"||typeof U=="number")},[R,U]),ee=(0,l.jsx)(x,t()({size:W,dateValueType:p,rangePicker:T,placeholder:B,disabledTime:J,disabled:Z!=null?Z:G,format:F,showNow:q},M));return(0,l.jsx)(i.Z,t()(t()({required:n,_isSelectType:!0},N),{},{children:ee}))};g.Z=K},61117:function(A,g,e){var a=e(84640);g.Z=a.Z},4390:function(A,g,e){var a=e(97857),t=e.n(a),y=e(13769),d=e.n(y),u=e(78957),c=e(99859),P=e(61117),v=e(89889),m=e(85893),o=["submitter"],_=["render"],i=function(E){var l=E.submitter,b=d()(E,o),O=typeof l=="boolean"||!l?{}:l,j=O.render,x=d()(O,_),K=typeof l=="undefined"||l?t()({render:function(s){var D=Array.isArray(s)&&s.length>1?(0,m.jsx)(u.Z,{children:s}):s;return(0,m.jsx)(c.Z.Item,{colon:!1,className:"lightd-form-submitter",style:{marginBottom:0,paddingLeft:typeof(l==null?void 0:l.buttonAlign)=="number"?"".concat(l==null?void 0:l.buttonAlign,"px"):0},wrapperCol:O==null?void 0:O.wrapperCol,children:(0,m.jsx)("div",{style:{display:"flex",justifyContent:typeof(l==null?void 0:l.buttonAlign)=="string"?l==null?void 0:l.buttonAlign:"initial"},children:j?(0,m.jsx)(m.Fragment,{children:j(D,O)}):D})})}},x):!1;return(0,m.jsx)(v.Z,t()({submitter:K,contentRender:function(s,D){return(0,m.jsxs)(m.Fragment,{children:[s,D]})}},b))};i.Item=P.Z,i.List=c.Z.List,i.Provider=c.Z.Provider,i.ErrorList=c.Z.ErrorList,i.useForm=c.Z.useForm,i.useFormInstance=c.Z.useFormInstance,i.useWatch=c.Z.useWatch,g.Z=i},55928:function(A,g,e){e.d(g,{t6:function(){return K},hw:function(){return s},mh:function(){return L},Ow:function(){return C}});var a=e(27484),t=e.n(a),y=e(28734),d=e.n(y),u=e(10285),c=e.n(u),P=e(96036),v=e.n(P),m=e(96671),o=e.n(m),_=e(84110),i=e.n(_),r=e(72540),E=e.n(r),l=e(55183),b=e.n(l);t().extend(i()),t().extend(o()),t().extend(d()),t().extend(b()),t().extend(c()),t().extend(E()),t().extend(v());var O=t(),j=function(n){return n.time="hours",n.date="days",n.week="weeks",n.month="months",n.quarter="months",n.year="years",n}({}),x="YYYY-qQ",K=function(n){return n.time=" HH:mm:ss",n.year="YYYY",n.month="YYYY-MM",n.date="YYYY-MM-DD",n.week="YYYY-wo",n.quarter="YYYY-\\QQ",n}({});function L(n,f){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(n)return n;var h=f==="date"&&p?K.time:"",F=K[f]+h||K.date;return F}function s(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"date",f=arguments.length>1?arguments[1]:void 0,p=f.disabledDateBefore,h=f.disabledDateAfter,F=typeof p=="number",I=typeof h=="number";if(!F&&!I)return function(){return!1};var M=j[n];return M?function(W){if(!W)return!1;var B=p,R=h;return n==="quarter"&&(F&&(B=B*3-1),I&&(R=R*3-1)),F&&I?W<=O().subtract(B,M).endOf(M)||W>=O().add(R,M).startOf(M):F?W<=O().subtract(B,M).endOf(M):I?W>=O().add(R,M).startOf(M):!1}:function(){return!1}}function D(n){return dayjs(n).format(x).toUpperCase()}function T(n){if(dayjs.isDayjs(n))return n;var f=dayjs((n||"").replace("Q",""),"YYYY-Q");return f}function C(n,f,p){if(O.isDayjs(n))return n;if(Array.isArray(n))return n==null?void 0:n.map(function(I){return C(I,f,p)});if(typeof n=="string"){if(p==="quarter"){var h=f===K.quarter?+n.slice(-1):+n.slice(5,6);return O().quarter(h)}if(p==="week"){var F=parseInt(n.slice(5));return O().week(F)}return O(n,f)}return typeof n=="number"?O(n):n||void 0}},8745:function(A,g,e){e.d(g,{Z:function(){return c},i:function(){return u}});var a=e(21770),t=e(67294),y=e(94740),d=e(53124);function u(P){return function(m){return t.createElement(y.ZP,{theme:{token:{motion:!1,zIndexPopupBase:0}}},t.createElement(P,Object.assign({},m)))}}function c(P,v,m,o){function _(i){const{prefixCls:r,style:E}=i,l=t.useRef(null),[b,O]=t.useState(0),[j,x]=t.useState(0),[K,L]=(0,a.Z)(!1,{value:i.open}),{getPrefixCls:s}=t.useContext(d.E_),D=s(v||"select",r);t.useEffect(()=>{if(L(!0),typeof ResizeObserver!="undefined"){const C=new ResizeObserver(f=>{const p=f[0].target;O(p.offsetHeight+8),x(p.offsetWidth)}),n=setInterval(()=>{var f;const p=m?`.${m(D)}`:`.${D}-dropdown`,h=(f=l.current)===null||f===void 0?void 0:f.querySelector(p);h&&(clearInterval(n),C.observe(h))},10);return()=>{clearInterval(n),C.disconnect()}}},[]);let T=Object.assign(Object.assign({},i),{style:Object.assign(Object.assign({},E),{margin:0}),open:K,visible:K,getPopupContainer:()=>l.current});return o&&(T=o(T)),t.createElement("div",{ref:l,style:{paddingBottom:b,position:"relative",minWidth:j}},t.createElement(P,Object.assign({},T)))}return u(_)}},33297:function(A,g,e){e.d(g,{Fm:function(){return i}});var a=e(77794),t=e(93590);const y=new a.Keyframes("antMoveDownIn",{"0%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),d=new a.Keyframes("antMoveDownOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0}}),u=new a.Keyframes("antMoveLeftIn",{"0%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),c=new a.Keyframes("antMoveLeftOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),P=new a.Keyframes("antMoveRightIn",{"0%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),v=new a.Keyframes("antMoveRightOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),m=new a.Keyframes("antMoveUpIn",{"0%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),o=new a.Keyframes("antMoveUpOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0}}),_={"move-up":{inKeyframes:m,outKeyframes:o},"move-down":{inKeyframes:y,outKeyframes:d},"move-left":{inKeyframes:u,outKeyframes:c},"move-right":{inKeyframes:P,outKeyframes:v}},i=(r,E)=>{const{antCls:l}=r,b=`${l}-${E}`,{inKeyframes:O,outKeyframes:j}=_[E];return[(0,t.R)(b,O,j,r.motionDurationMid),{[`
        ${b}-enter,
        ${b}-appear
      `]:{opacity:0,animationTimingFunction:r.motionEaseOutCirc},[`${b}-leave`]:{animationTimingFunction:r.motionEaseInOutCirc}}]}},67771:function(A,g,e){e.d(g,{Qt:function(){return u},Uw:function(){return d},fJ:function(){return y},ly:function(){return c},oN:function(){return i}});var a=e(77794),t=e(93590);const y=new a.Keyframes("antSlideUpIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1}}),d=new a.Keyframes("antSlideUpOut",{"0%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0}}),u=new a.Keyframes("antSlideDownIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1}}),c=new a.Keyframes("antSlideDownOut",{"0%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0}}),P=new a.Keyframes("antSlideLeftIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1}}),v=new a.Keyframes("antSlideLeftOut",{"0%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0}}),m=new a.Keyframes("antSlideRightIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1}}),o=new a.Keyframes("antSlideRightOut",{"0%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0}}),_={"slide-up":{inKeyframes:y,outKeyframes:d},"slide-down":{inKeyframes:u,outKeyframes:c},"slide-left":{inKeyframes:P,outKeyframes:v},"slide-right":{inKeyframes:m,outKeyframes:o}},i=(r,E)=>{const{antCls:l}=r,b=`${l}-${E}`,{inKeyframes:O,outKeyframes:j}=_[E];return[(0,t.R)(b,O,j,r.motionDurationMid),{[`
      ${b}-enter,
      ${b}-appear
    `]:{transform:"scale(0)",transformOrigin:"0% 0%",opacity:0,animationTimingFunction:r.motionEaseOutQuint,["&-prepare"]:{transform:"scale(1)"}},[`${b}-leave`]:{animationTimingFunction:r.motionEaseInQuint}}]}},68351:function(A,g,e){var a=e(67294),t=e(8745),y=e(9234),d=function(o,_){var i={};for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&_.indexOf(r)<0&&(i[r]=o[r]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var E=0,r=Object.getOwnPropertySymbols(o);E<r.length;E++)_.indexOf(r[E])<0&&Object.prototype.propertyIsEnumerable.call(o,r[E])&&(i[r[E]]=o[r[E]]);return i};const{TimePicker:u,RangePicker:c}=y.default,P=a.forwardRef((o,_)=>a.createElement(c,Object.assign({},o,{picker:"time",mode:void 0,ref:_}))),v=a.forwardRef((o,_)=>{var{addon:i,renderExtraFooter:r}=o,E=d(o,["addon","renderExtraFooter"]);const l=a.useMemo(()=>{if(r)return r;if(i)return i},[i,r]);return a.createElement(u,Object.assign({},E,{mode:void 0,ref:_,renderExtraFooter:l}))}),m=(0,t.Z)(v,"picker");v._InternalPanelDoNotUseOrYouWillBeFired=m,v.RangePicker=P,v._InternalPanelDoNotUseOrYouWillBeFired=m,g.Z=v},64217:function(A,g,e){e.d(g,{Z:function(){return v}});var a=e(1413),t=`accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`,y=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,d="".concat(t," ").concat(y).split(/[\s\n]+/),u="aria-",c="data-";function P(m,o){return m.indexOf(o)===0}function v(m){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,_;o===!1?_={aria:!0,data:!0,attr:!0}:o===!0?_={aria:!0}:_=(0,a.Z)({},o);var i={};return Object.keys(m).forEach(function(r){(_.aria&&(r==="role"||P(r,u))||_.data&&P(r,c)||_.attr&&d.includes(r))&&(i[r]=m[r])}),i}}}]);
