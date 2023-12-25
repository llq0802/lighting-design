"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[8842],{63606:function(H,D,e){e.d(D,{Z:function(){return m}});var _=e(87462),a=e(67294),B={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},f=B,L=e(13401),E=function(c,h){return a.createElement(L.Z,(0,_.Z)({},c,{ref:h,icon:f}))},m=a.forwardRef(E)},96842:function(H,D,e){e.d(D,{Z:function(){return m}});var _=e(87462),a=e(67294),B={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"}}]},name:"double-right",theme:"outlined"},f=B,L=e(13401),E=function(c,h){return a.createElement(L.Z,(0,_.Z)({},c,{ref:h,icon:f}))},m=a.forwardRef(E)},48020:function(H,D,e){e.r(D);var _=e(15867),a=e(59042),B=e(67294),f=e(85893),L=function(){var m=(0,B.useRef)();return(0,f.jsxs)("div",{children:[(0,f.jsx)(a.Z,{actionRef:m,onProcess:function(c){console.log("onProcess-diff",c)},onMouseUp:function(c){console.log("onMouseUp-diff",c)}}),(0,f.jsx)("br",{}),(0,f.jsx)(_.ZP,{onClick:function(){var c;return(c=m.current)===null||c===void 0?void 0:c.reset()},children:"\u91CD\u7F6E"})]})};D.default=L},80146:function(H,D,e){e.r(D);var _=e(15009),a=e.n(_),B=e(99289),f=e.n(B),L=e(4390),E=e(21478),m=e(77222),v=e(61117),c=e(59042),h=e(85893),C=function(){return(0,h.jsxs)(L.Z,{name:"LSliderVerify",labelWidth:90,submitter:{buttonAlign:90},onFinish:function(){var V=f()(a()().mark(function g(x){return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:console.log("values",x);case 1:case"end":return l.stop()}},g)}));return function(g){return V.apply(this,arguments)}}(),children:[(0,h.jsx)(E.Z,{required:!0,name:"username",label:"\u7528\u6237\u540D"}),(0,h.jsx)(m.Z,{required:!0,name:"password",label:"\u5BC6\u7801"}),(0,h.jsx)(v.Z,{name:"isVerify1",label:"\u6ED1\u5757\u9A8C\u8BC11",rules:[{required:!0,message:"\u8BF7\u6309\u4F4F\u6ED1\u5757\uFF0C\u62D6\u52A8\u5230\u6700\u53F3\u8FB9"}],children:(0,h.jsx)(c.Z,{width:500,style:{borderRadius:6},barStyle:{borderRadius:6},tipsStyle:{}})}),(0,h.jsx)(v.Z,{name:"isVerify2",label:"\u6ED1\u5757\u9A8C\u8BC12",rules:[{required:!0,message:"\u8BF7\u6309\u4F4F\u6ED1\u5757\uFF0C\u62D6\u52A8\u5230\u6700\u53F3\u8FB9"}],children:(0,h.jsx)(c.Z,{style:{borderRadius:16},barStyle:{borderRadius:16}})})]})};D.default=C},21478:function(H,D,e){e.d(D,{Z:function(){return y}});var _=e(97857),a=e.n(_),B=e(13769),f=e.n(B),L=e(89889),E=e(84640),m=e(33168),v=e(40964),c=e(67294),h=e(5574),C=e.n(h),S=e(42170),V=e(22638),g=e(69677),x=e(85893),N=["value","onChange","type","disabledWhiteSpace"],l=function(o,u){var r=o;if((u==="phone"||u==="bankCard")&&window.isNaN(r)){var i;return console.warn("lighting-design: phone \u6216 bankCard \u7C7B\u578B\u7684 Input \u53EA\u80FD\u8F93\u5165\u6570\u5B57"),((i=r.match(v.zj))===null||i===void 0?void 0:i.join(""))||""}if(u==="idCard"){var M;if(window.isNaN(r==null?void 0:r.slice(0,17))){var n;return console.warn("lighting-design: idCard \u7C7B\u578B\u7684 Input \u53EA\u80FD\u8F93\u516518\u4F4D\u6570\u5B57 (\u6700\u540E\u4E00\u4F4D\u53EF\u4E3A\u6570\u5B57\u6216\u5B57\u7B26\u5927\u5C0F\u5199 X )"),((n=r.match(v.zj))===null||n===void 0?void 0:n.join(""))||""}if(r.length===18&&window.isNaN(r==null?void 0:r.at(-1))&&(r==null||(M=r.at(-1))===null||M===void 0?void 0:M.toLocaleLowerCase())!=="x")return console.warn("lighting-design: idCard \u7C7B\u578B\u7684 Input \u53EA\u80FD\u8F93\u516518\u4F4D\u6570\u5B57 (\u6700\u540E\u4E00\u4F4D\u53EF\u4E3A\u6570\u5B57\u6216\u5B57\u7B26\u5927\u5C0F\u5199 X )"),(r==null?void 0:r.slice(0,-1))||""}return r},G=function(o){var u=o.value,r=o.onChange,i=o.type,M=o.disabledWhiteSpace,n=f()(o,N),I=(0,c.useRef)(!1),K=(0,c.useState)(function(){return u}),T=C()(K,2),W=T[0],p=T[1];(0,S.Z)(function(){p(u)},[u]);var R=(0,c.useMemo)(function(){return i==="phone"||i==="idCard"||i==="bankCard"?"text":i},[i]),Z=(0,c.useMemo)(function(){return i==="phone"?11:i==="idCard"?18:void 0},[i]),z=(0,V.Z)(function(A){var O=A.target.value;M&&(O=O.replace(v.wr,""));var P=l(O,i);p(P),!I.current&&(r==null||r(P))});return(0,x.jsx)(g.Z,a()(a()({allowClear:!0,autoComplete:"off",type:R,maxLength:Z},n),{},{onCompositionStart:function(O){var P;I.current=!0,n==null||(P=n.onCompositionStart)===null||P===void 0||P.call(n,O)},onCompositionEnd:function(O){var P;if(I.current=!1,m.i7){var X,U=l((X=O.target)===null||X===void 0?void 0:X.value,i);r==null||r(U)}n==null||(P=n.onCompositionEnd)===null||P===void 0||P.call(n,O)},value:W,onChange:z}))},t=G;function s(d,o,u){var r=void 0;return d==="phone"&&(r=[{required:o,message:u||"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7\u683C\u5F0F!",pattern:v.Dd}]),d==="idCard"&&(r=[{required:o,message:u||"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u8EAB\u4EFD\u8BC1\u683C\u5F0F!",pattern:v.LE}]),d==="url"&&(r=[{required:o,message:u||"\u8BF7\u8F93\u5165\u6B63\u786E\u7684URL\u7F51\u5740\u683C\u5F0F!",pattern:v.Kp}]),d==="bankCard"&&(r=[{required:o,message:u||"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u94F6\u884C\u5361\u683C\u5F0F!",pattern:v.Wj}]),d==="email"&&(r=[{required:o,message:u||"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u683C\u5F0F!",pattern:v.sM}]),d==="chinese"&&(r=[{required:o,message:u||"\u8BF7\u8F93\u5165\u4E2D\u6587\u6C49\u5B57!",pattern:v.Zd}]),r}var j=["size","disabled","type","disabledWhiteSpace","required","placeholder","inputProps"],b=function(o){var u,r=o.size,i=o.disabled,M=o.type,n=o.disabledWhiteSpace,I=n===void 0?!1:n,K=o.required,T=o.placeholder,W=o.inputProps,p=W===void 0?v.FD:W,R=f()(o,j),Z=(0,m.JY)({placeholder:T,restProps:R}),z=(0,c.useContext)(L.e),A=z.disabled,O=s(M,!!K,(R==null||(u=R.messageVariables)===null||u===void 0?void 0:u.label)||Z);return(0,x.jsx)(E.Z,a()(a()({placeholder:Z,required:K,rules:O,validateTrigger:"onBlur"},R),{},{children:(0,x.jsx)(t,a()({size:r,disabled:i!=null?i:A,placeholder:Z,type:M,disabledWhiteSpace:I},p))}))},y=b},77222:function(H,D,e){e.d(D,{Z:function(){return G}});var _=e(97857),a=e.n(_),B=e(13769),f=e.n(B),L=e(33168),E=e(40964),m=e(89889),v=e(84640),c=e(67294),h=e(22638),C=e(69677),S=e(85893),V=["value","onChange","disabledWhiteSpace","disabledPaste","disabledCopy","placeholder"],g=function(s){var j=s.value,b=s.onChange,y=s.disabledWhiteSpace,d=s.disabledPaste,o=d===void 0?!0:d,u=s.disabledCopy,r=u===void 0?!0:u,i=s.placeholder,M=i===void 0?"\u8BF7\u8F93\u5165\u5BC6\u7801":i,n=f()(s,V),I=(0,h.Z)(function(W){var p=W.target,R=p.value;y&&(R=R.replace(E.wr,"")),b==null||b(R)}),K=(0,h.Z)(function(W){var p;o&&W.preventDefault(),n==null||(p=n.onPaste)===null||p===void 0||p.call(n,W)}),T=(0,h.Z)(function(W){var p;r&&W.preventDefault(),n==null||(p=n.onCopy)===null||p===void 0||p.call(n,W)});return(0,S.jsx)(C.Z.Password,a()(a()({value:j,autoComplete:"new-password",placeholder:M},n),{},{onPaste:K,onCopy:T,onChange:I}))},x=g,N=["min","max","highPassWord","disabledWhiteSpace","disabledPaste","disabledCopy","passwordProps","required","size","disabled","placeholder","highPassWordErrorMsg"],l=function(s){var j=s.min,b=j===void 0?8:j,y=s.max,d=y===void 0?16:y,o=s.highPassWord,u=o===void 0?!1:o,r=s.disabledWhiteSpace,i=r===void 0?!1:r,M=s.disabledPaste,n=M===void 0?!0:M,I=s.disabledCopy,K=I===void 0?!0:I,T=s.passwordProps,W=T===void 0?E.FD:T,p=s.required,R=s.size,Z=s.disabled,z=s.placeholder,A=s.highPassWordErrorMsg,O=A===void 0?"\u5FC5\u987B\u540C\u65F6\u5305\u542B\u5927\u5C0F\u5199\u5B57\u6BCD , \u6570\u5B57  , \u7279\u6B8A\u5B57\u7B26\u4E14\u4F4D\u6570\u81F3\u5C118\u4F4D!":A,P=f()(s,N),X=(0,L.JY)({placeholder:z,restProps:P}),U=(0,c.useContext)(m.e),$=U.disabled,F=[{validator:function(te,w){var k,J="";if(!u){if(w)(w.length<b||w.length>d)&&(J="\u5BC6\u7801\u4E3A".concat(b,"\uFF5E").concat(d,"\u4F4D"));else{var q;J=p?"".concat((P==null||(q=P.messageVariables)===null||q===void 0?void 0:q.label)||X,"!"):""}return J?Promise.reject(J):Promise.resolve()}return E.Ao.test(w)?Promise.resolve():(J=(P==null||(k=P.messageVariables)===null||k===void 0?void 0:k.label)||O||X,Promise.reject(J))}}];return(0,S.jsx)(v.Z,a()(a()({placeholder:X,required:p,validateTrigger:"onBlur",rules:F},P),{},{children:(0,S.jsx)(x,a()({size:R,disabled:Z!=null?Z:$,disabledWhiteSpace:i,disabledPaste:n,disabledCopy:K,placeholder:X},W))}))},G=l},61117:function(H,D,e){var _=e(84640);D.Z=_.Z},4390:function(H,D,e){var _=e(97857),a=e.n(_),B=e(13769),f=e.n(B),L=e(78957),E=e(99859),m=e(33168),v=e(40964),c=e(61117),h=e(89889),C=e(85893),S=["submitter"],V=["render"],g=function(N){var l=N.submitter,G=f()(N,S),t=typeof l=="boolean"||!l?v.FD:l,s=t.render,j=f()(t,V),b=l===void 0||l?a()({render:function(d){var o=Array.isArray(d)&&d.length>1?(0,C.jsx)(L.Z,{children:d}):d;return(0,C.jsx)(E.Z.Item,{colon:!1,className:"lightd-form-submitter",style:{marginBottom:0,paddingLeft:typeof(l==null?void 0:l.buttonAlign)=="number"?"".concat(l==null?void 0:l.buttonAlign,"px"):0},wrapperCol:t==null?void 0:t.wrapperCol,children:(0,C.jsx)("div",{style:{display:"flex",justifyContent:typeof(l==null?void 0:l.buttonAlign)=="string"?m.lN[l==null?void 0:l.buttonAlign]:"initial"},children:s?(0,C.jsx)(C.Fragment,{children:s(o,t)}):o})})}},j):!1;return(0,C.jsx)(h.Z,a()({submitter:b,contentRender:function(d,o){return(0,C.jsxs)(C.Fragment,{children:[d,o]})}},G))};g.Item=c.Z,g.List=E.Z.List,g.Provider=E.Z.Provider,g.ErrorList=E.Z.ErrorList,g.useForm=E.Z.useForm,g.useFormInstance=E.Z.useFormInstance,g.useWatch=E.Z.useWatch,D.Z=g},59042:function(H,D,e){e.d(D,{Z:function(){return G}});var _=e(97857),a=e.n(_),B=e(5574),f=e.n(B),L=e(96842),E=e(63606),m=e(90768),v=e(94184),c=e.n(v),h=e(40964),C=e(67294),S=e(22638);function V(t){var s=t.onProcess,j=t.onMouseUp,b=t.value,y=t.onChange,d=t.onSuccess,o=t.innerRef,u=t.width,r=t.barWidth,i=t.difference,M=(0,C.useRef)(),n=(0,C.useRef)({max:u-r,offX:0,diff:0,isMove:!1}),I=(0,C.useState)(0),K=f()(I,2),T=K[0],W=K[1],p=(0,C.useState)(0),R=f()(p,2),Z=R[0],z=R[1],A=(0,S.Z)(function(U){n.current.offX=U.pageX,document.addEventListener("mousemove",O)}),O=(0,S.Z)(function(U){n.current.isMove=!0;var $=U.pageX-n.current.offX,F=$,Q=$;n.current.diff=$,F+i>=n.current.max&&(F=n.current.max,Q=u,n.current.isMove=!1,y==null||y(!0),d==null||d(),setTimeout(function(){j==null||j(F)}),document.removeEventListener("mousemove",O),M.current.removeEventListener("mousedown",A)),$<=0&&(n.current.diff=0,F=0,Q=0),W(F),z(Q),s==null||s(F)}),P=(0,S.Z)(function(){document.removeEventListener("mousemove",O),n.current.diff+i<n.current.max&&(n.current.isMove=!1,W(0),z(0)),j==null||j(n.current.diff)});(0,C.useEffect)(function(){var U=M.current.getBoundingClientRect().left;return n.current.offX=b?U+u:U,n.current.diff=b?u:0,W(b?u-r:0),z(b?u:0),b||(M.current.addEventListener("mousedown",A),document.addEventListener("mouseup",P)),function(){var $,F;document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",P),($=M.current)===null||$===void 0||(F=$.removeEventListener)===null||F===void 0||F.call($,"mousedown",A)}},[b]);var X=function(){W(0),z(0),y==null||y(!1),document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",P)};return(0,C.useImperativeHandle)(o,function(){return{reset:X,value:b}}),{isMove:n.current.isMove,barLeft:T,modalWidth:Z,refBar:M}}var g=e(85893),x="lightd-slider-verify";function N(t){var s,j=t.outRef,b=t.onProcess,y=t.onMouseUp,d=t.className,o=t.onSuccess,u=t.actionRef,r=t.width,i=r===void 0?400:r,M=t.barWidth,n=M===void 0?60:M,I=t.height,K=I===void 0?32:I,T=t.bgColor,W=T===void 0?"#F2F3F5":T,p=t.tips,R=p===void 0?"\u8BF7\u6309\u4F4F\u6ED1\u5757\uFF0C\u62D6\u52A8\u5230\u6700\u53F3\u8FB9":p,Z=t.bar,z=Z===void 0?(0,g.jsx)(L.Z,{}):Z,A=t.barStyle,O=A===void 0?h.FD:A,P=t.tipsStyle,X=P===void 0?h.FD:P,U=t.style,$=U===void 0?h.FD:U,F=t.successBgColor,Q=F===void 0?"#52c41a":F,te=t.successTips,w=te===void 0?"\u9A8C\u8BC1\u5DF2\u901A\u8FC7":te,k=t.successTipsStyle,J=k===void 0?h.FD:k,q=t.successBar,de=q===void 0?(0,g.jsx)(E.Z,{}):q,ne=t.successShowBar,re=ne===void 0?!0:ne,ae=t.difference,le=ae===void 0?0:ae,ue=(0,m.Z)(t,{defaultValue:(s=t==null?void 0:t.defaultValue)!==null&&s!==void 0?s:!1}),oe=f()(ue,2),se=oe[0],ve=oe[1],Y=se,ee=V({onProcess:b,onMouseUp:y,value:se,onChange:ve,onSuccess:o,innerRef:u,width:i,barWidth:n,difference:le}),ie=ee.isMove,ce=ee.barLeft,fe=ee.modalWidth,me=ee.refBar,he=a()(a()({},$),{},{backgroundColor:W,width:"".concat(i,"px"),height:"".concat(K,"px")}),ge=a()(a()({},O),{},{width:"".concat(n,"px"),transitionDuration:ie?"0s":".3s",transform:"translateX(".concat(Y&&!re?i+2:ce,"px)")}),Pe=a()(a()(a()({},X),Y?J:{}),{},{transform:"translateX(".concat(Y?0:n,"px)"),width:"".concat(Y&&!re?i:i-n,"px")}),Ce={backgroundColor:Q,width:"".concat(i,"px"),left:"-".concat(i,"px"),transitionDuration:ie?"0s":".3s",transform:"translateX(".concat(fe,"px)")};return(0,g.jsxs)("div",{ref:j,className:c()(x,d,Y?"".concat(x,"-success"):""),style:he,children:[(0,g.jsx)("span",{className:"".concat(x,"-tips"),style:Pe,children:Y?w:R}),(0,g.jsx)("div",{className:"".concat(x,"-bar"),ref:me,style:ge,children:Y?de:z}),(0,g.jsx)("div",{className:"".concat(x,"-modal"),style:Ce})]})}var l=(0,C.forwardRef)(function(t,s){return(0,g.jsx)(N,a()(a()({},t),{},{outRef:s}))}),G=l},90768:function(H,D,e){var _=e(97582),a=e(67294),B=e(92770),f=e(22638),L=e(90105);function E(m,v){m===void 0&&(m={}),v===void 0&&(v={});var c=v.defaultValue,h=v.defaultValuePropName,C=h===void 0?"defaultValue":h,S=v.valuePropName,V=S===void 0?"value":S,g=v.trigger,x=g===void 0?"onChange":g,N=m[V],l=m.hasOwnProperty(V),G=(0,a.useMemo)(function(){return l?N:m.hasOwnProperty(C)?m[C]:c},[]),t=(0,a.useRef)(G);l&&(t.current=N);var s=(0,L.Z)();function j(b){for(var y=[],d=1;d<arguments.length;d++)y[d-1]=arguments[d];var o=(0,B.mf)(b)?b(t.current):b;l||(t.current=o,s()),m[x]&&m[x].apply(m,(0,_.ev)([o],(0,_.CR)(y),!1))}return[t.current,(0,f.Z)(j)]}D.Z=E},90105:function(H,D,e){var _=e(97582),a=e(67294),B=function(){var f=(0,_.CR)((0,a.useState)({}),2),L=f[1];return(0,a.useCallback)(function(){return L({})},[])};D.Z=B}}]);