(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[8331],{68795:function(ee,u,e){"use strict";e.d(u,{Z:function(){return A}});var t=e(87462),o=e(67294),I={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},g=I,K=e(13401),c=function(B,U){return o.createElement(K.Z,(0,t.Z)({},B,{ref:U,icon:g}))},A=o.forwardRef(c)},12118:function(ee,u,e){"use strict";e.r(u);var t=e(5574),o=e.n(t),I=e(69649),g=e.n(I),K=e(4390),c=e(77821),A=e(85893),T=g().mock({"list|5":[{label:"@cname",value:"@cname"}]}).list,B=function(){var P=K.Z.useForm(),i=o()(P,1),D=i[0];return(0,A.jsxs)(K.Z,{form:D,onFinish:function($){console.log("res",$)},children:[(0,A.jsx)(c.default,{required:!0,label:"\u6807\u7B7E1",name:"mentions-1",options:T}),(0,A.jsx)(c.default,{required:!0,label:"\u6807\u7B7E2",name:"mentions-2",options:T,variant:"filled",mentionsProps:{onChange:function($){console.log("onChange",$)}}})]})};u.default=B},32134:function(ee,u,e){"use strict";e.r(u);var t=e(15009),o=e.n(t),I=e(99289),g=e.n(I),K=e(5574),c=e.n(K),A=e(69649),T=e.n(A),B=e(4390),U=e(79465),P=e(77821),i=e(85893),D=T().mock({"list|6":[{label:"@cname",value:"@cname"}]}).list,O=function(){var j=B.Z.useForm(),b=c()(j,1),a=b[0],m=B.Z.useWatch("select-1",a);return(0,i.jsxs)(B.Z,{form:a,isAntdReset:!1,onFinish:function(p){console.log("res",p)},children:[(0,i.jsx)(U.default,{label:"select-1",name:"select-1",required:!0,options:D}),(0,i.jsx)(P.default,{required:!0,disabled:!m,mentionsProps:{readOnly:!m},label:"\u6807\u7B7E-1",name:"mentions-1",refreshDeps:[m],request:g()(o()().mark(function C(){return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(m){r.next=2;break}return r.abrupt("return",[]);case 2:return r.abrupt("return",new Promise(function(Y){setTimeout(function(){var N=T().mock({"list|6":[{label:"@cname",value:"@cname"}]}).list;Y(N)},1e3)}));case 3:case"end":return r.stop()}},C)}))})]})};u.default=O},89611:function(ee,u,e){"use strict";e.r(u);var t=e(15009),o=e.n(t),I=e(99289),g=e.n(I),K=e(5574),c=e.n(K),A=e(50888),T=e(69649),B=e.n(T),U=e(4390),P=e(77821),i=e(79500),D=e(85893),O=B().mock({"list|10":[{label:"@city",value:"@city"}]}).list,$=function(){var b=U.Z.useForm(),a=c()(b,1),m=a[0];return(0,D.jsxs)(U.Z,{name:"LFormItemSelect2",form:m,labelWidth:80,submitter:{buttonAlign:80},isAntdReset:!1,children:[(0,D.jsx)(P.default,{label:"select1",name:"select1",required:!0,request:g()(o()().mark(function C(){return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,i.N)();case 2:return r.abrupt("return",O);case 3:case"end":return r.stop()}},C)}))}),(0,D.jsx)(P.default,{label:"select2",name:"select2",required:!0,spin:{indicator:(0,D.jsx)(A.Z,{style:{fontSize:24},spin:!0})},request:g()(o()().mark(function C(){return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,i.N)();case 2:return r.abrupt("return",O);case 3:case"end":return r.stop()}},C)}))})]})};u.default=$},60689:function(ee,u,e){"use strict";var t=e(97857),o=e.n(t),I=e(13769),g=e.n(I),K=e(11330),c=e(75081),A=e(34462),T=e(33168),B=e(77616),U=e(22028),P=e(67294),i=e(85893),D=["dependencies","request","requestOptions","outOptions","spin","placeholder","refreshDeps","actionRef","autoRequest"],O=function(j){var b=j.dependencies,a=j.request,m=j.requestOptions,C=j.outOptions,p=j.spin,r=j.placeholder,Y=j.refreshDeps,N=j.actionRef,l=j.autoRequest,f=g()(j,D),R=(0,U.Z)(f,b),x=(0,B._)({options:C,request:a,requestOptions:m,refreshDeps:Y,autoRequest:l}),L=x.loading,S=x.data,w=(0,P.useMemo)(function(){var oe=(0,T.FW)(C,S);return oe},[C,S]);(0,P.useImperativeHandle)(N,function(){return x});var q=(0,i.jsx)(K.Z,o()(o()({autoComplete:"off",placeholder:r},f),{},{options:w,style:o()({width:"100%"},R==null?void 0:R.style)}));return C!=null&&C.length?q:(0,i.jsx)(c.Z,o()(o()({spinning:L,style:A.j},p),{},{children:q}))};u.Z=O},77821:function(ee,u,e){"use strict";var t=e(97857),o=e.n(t),I=e(13769),g=e.n(I),K=e(89889),c=e(84640),A=e(33168),T=e(40964),B=e(67294),U=e(60689),P=e(85893),i=e(38679),D=e.n(i);e.o(i,"customDisabledHours")&&e.d(u,{customDisabledHours:function(){return i.customDisabledHours}}),e.o(i,"excel2Json")&&e.d(u,{excel2Json:function(){return i.excel2Json}}),e.o(i,"getExcelData")&&e.d(u,{getExcelData:function(){return i.getExcelData}}),e.o(i,"json2Excel")&&e.d(u,{json2Excel:function(){return i.json2Excel}});var O=["size","disabled","placeholder","options","mentionsProps","spin","request","refreshDeps","variant","requestOptions","actionRef","autoRequest"],$=function(b){var a=b.size,m=b.disabled,C=m===void 0?!1:m,p=b.placeholder,r=b.options,Y=b.mentionsProps,N=Y===void 0?T.FD:Y,l=b.spin,f=l===void 0?T.FD:l,R=b.request,x=b.refreshDeps,L=b.variant,S=b.requestOptions,w=S===void 0?T.FD:S,q=b.actionRef,oe=b.autoRequest,_e=oe===void 0?!0:oe,ne=g()(b,O),re=(0,A.JY)({placeholder:p,restProps:ne}),ae=(0,B.useContext)(K.e),me=ae.disabled;return(0,P.jsx)(c.Z,o()(o()({placeholder:re},ne),{},{children:(0,P.jsx)(U.Z,o()({disabled:C||me,dependencies:ne==null?void 0:ne.dependencies,placeholder:re,outOptions:r,variant:L,request:R,autoRequest:_e,requestOptions:w,actionRef:q,spin:f,refreshDeps:x},N))}))};u.default=$},38679:function(){},34462:function(ee,u,e){"use strict";e.d(u,{j:function(){return j}});var t=e(19632),o=e.n(t),I=e(97857),g=e.n(I),K=e(13769),c=e.n(K),A=e(78045),T=e(75081),B=e(33168),U=e(40964),P=e(77616),i=e(22028),D=e(67294),O=e(85893),$=["actionRef","outLoading","dependencies","options","fieldNames","request","requestOptions","refreshDeps","autoRequest","all","allValue","allLabel"],j={marginLeft:40,width:"fit-content"},b=function(m){var C=m.actionRef,p=m.outLoading,r=m.dependencies,Y=r===void 0?U.ow:r,N=m.options,l=m.fieldNames,f=m.request,R=m.requestOptions,x=m.refreshDeps,L=m.autoRequest,S=L===void 0?!0:L,w=m.all,q=w===void 0?!1:w,oe=m.allValue,_e=oe===void 0?"all":oe,ne=m.allLabel,re=ne===void 0?"\u5168\u90E8":ne,ae=c()(m,$),me=(0,i.Z)(ae,Y),ve=(0,P._)({options:N,request:f,requestOptions:R,refreshDeps:x,autoRequest:S}),be=ve.loading,G=ve.data,Ce=(0,D.useMemo)(function(){var fe,le=(0,B.FW)(N,G);return l&&(le=le.map(function(ge){var z,k;return g()(g()({},ge),{},{label:ge[(z=l==null?void 0:l.label)!==null&&z!==void 0?z:"label"],value:ge[(k=l==null?void 0:l.value)!==null&&k!==void 0?k:"value"]})})),q&&((fe=le)===null||fe===void 0?void 0:fe.length)>0?[{label:re,value:_e}].concat(o()(le)):le},[q,N,G]);(0,D.useImperativeHandle)(C,function(){return ve});var ce=(0,O.jsx)(A.ZP.Group,g()({options:Ce},me));return N!=null&&N.length?ce:(0,O.jsx)(T.Z,g()(g()({spinning:be,style:j},p),{},{children:ce}))};u.Z=b},57811:function(ee,u,e){"use strict";var t=e(97857),o=e.n(t),I=e(9783),g=e.n(I),K=e(19632),c=e.n(K),A=e(13769),T=e.n(A),B=e(34041),U=e(75081),P=e(34462),i=e(33168),D=e(40964),O=e(77616),$=e(22028),j=e(67294),b=e(85893),a=["dependencies","options","all","allValue","allLabel","request","autoRequest","requestOptions","outLoading","actionRef","refreshDeps"],m=function(p){var r,Y,N=p.dependencies,l=N===void 0?D.ow:N,f=p.options,R=f===void 0?D.ow:f,x=p.all,L=x===void 0?!1:x,S=p.allValue,w=S===void 0?"all":S,q=p.allLabel,oe=q===void 0?"\u5168\u90E8":q,_e=p.request,ne=p.autoRequest,re=p.requestOptions,ae=re===void 0?D.FD:re,me=p.outLoading,ve=p.actionRef,be=p.refreshDeps,G=T()(p,a),Ce=(0,$.Z)(G,l),ce=(0,O._)({options:R,request:_e,requestOptions:ae,refreshDeps:be,autoRequest:ne}),fe=ce.loading,le=ce.data,ge=(0,j.useMemo)(function(){var k=(0,i.FW)(R,le),Re=G==null?void 0:G.mode,Ee=G==null?void 0:G.fieldNames;if(L&&k!==null&&k!==void 0&&k.length&&Re!=="tags"&&Re!=="multiple"){var je,Me;return[g()(g()({},(je=Ee==null?void 0:Ee.label)!==null&&je!==void 0?je:"label",oe),(Me=Ee==null?void 0:Ee.value)!==null&&Me!==void 0?Me:"value",w)].concat(c()(k))}return k},[R,le,L]);(0,j.useImperativeHandle)(ve,function(){return ce});var z=(0,b.jsx)(B.default,o()(o()({allowClear:!0,optionFilterProp:(r=G==null||(Y=G.fieldNames)===null||Y===void 0?void 0:Y.label)!==null&&r!==void 0?r:"label",options:ge},Ce),{},{style:o()({width:"100%"},G.style)}));return R!=null&&R.length?z:(0,b.jsx)(U.Z,o()(o()({spinning:fe,style:P.j},me),{},{children:z}))};u.Z=m},79465:function(ee,u,e){"use strict";var t=e(97857),o=e.n(t),I=e(13769),g=e.n(I),K=e(89889),c=e(84640),A=e(33168),T=e(40964),B=e(67294),U=e(57811),P=e(85893),i=e(16288),D=e.n(i);e.o(i,"customDisabledHours")&&e.d(u,{customDisabledHours:function(){return i.customDisabledHours}}),e.o(i,"excel2Json")&&e.d(u,{excel2Json:function(){return i.excel2Json}}),e.o(i,"getExcelData")&&e.d(u,{getExcelData:function(){return i.getExcelData}}),e.o(i,"json2Excel")&&e.d(u,{json2Excel:function(){return i.json2Excel}});var O=["disabled","size","placeholder","request","showSearch","mode","fieldNames","variant","all","allValue","allLabel","options","selectProps","requestOptions","autoRequest","refreshDeps","spin","required","actionRef"],$=function(a,m,C,p){return m==="multiple"||m==="tags"?a&&(a==null?void 0:a.length)>0:typeof a=="number"&&!Number.isNaN(a)||C&&p===a?!0:!!a},j=function(a){var m=a.disabled,C=m===void 0?!1:m,p=a.size,r=a.placeholder,Y=a.request,N=a.showSearch,l=a.mode,f=a.fieldNames,R=a.variant,x=a.all,L=x===void 0?!1:x,S=a.allValue,w=S===void 0?"all":S,q=a.allLabel,oe=q===void 0?"\u5168\u90E8":q,_e=a.options,ne=_e===void 0?T.ow:_e,re=a.selectProps,ae=re===void 0?T.FD:re,me=a.requestOptions,ve=me===void 0?T.FD:me,be=a.autoRequest,G=be===void 0?!0:be,Ce=a.refreshDeps,ce=a.spin,fe=a.required,le=fe===void 0?!1:fe,ge=a.actionRef,z=g()(a,O),k=(0,A.JY)({placeholder:r,restProps:z,isSelectType:!0}),Re=(0,B.useContext)(K.e),Ee=Re.disabled,je=[{validator:function($e,an){var Ye="";if(!$(an,l||(ae==null?void 0:ae.mode),L,w)){var Ve;Ye=le?"".concat((z==null||(Ve=z.messageVariables)===null||Ve===void 0?void 0:Ve.label)||k,"!"):""}return Ye?Promise.reject(Ye):Promise.resolve()}}];return(0,P.jsx)(c.Z,o()(o()({required:le,_isSelectType:!0,rules:je},z),{},{children:(0,P.jsx)(U.Z,o()({size:p,placeholder:k,disabled:C||Ee,dependencies:z==null?void 0:z.dependencies,refreshDeps:Ce,autoRequest:G,all:L,allValue:w,allLabel:oe,request:Y,requestOptions:ve,actionRef:ge,outLoading:ce,options:ne,mode:l,variant:R,showSearch:N,fieldNames:f},ae))}))};u.default=j},16288:function(){},61117:function(ee,u,e){"use strict";var t=e(84640),o=e(8e4),I=e.n(o);e.o(o,"customDisabledHours")&&e.d(u,{customDisabledHours:function(){return o.customDisabledHours}}),e.o(o,"excel2Json")&&e.d(u,{excel2Json:function(){return o.excel2Json}}),e.o(o,"getExcelData")&&e.d(u,{getExcelData:function(){return o.getExcelData}}),e.o(o,"json2Excel")&&e.d(u,{json2Excel:function(){return o.json2Excel}}),u.default=t.Z},8e4:function(){},4390:function(ee,u,e){"use strict";var t=e(97857),o=e.n(t),I=e(13769),g=e.n(I),K=e(42075),c=e(99859),A=e(40964),T=e(67294),B=e(61117),U=e(89889),P=e(85893),i=["submitter"],D=["render","buttonAlign","wrapperCol","style"],O=function(b){var a=b.submitter,m=g()(b,i),C=typeof a=="boolean"||!a?{}:a,p=C.render,r=C.buttonAlign,Y=C.wrapperCol,N=C.style,l=g()(C,D),f=a===void 0||a?o()({render:function(x){var L,S=Array.isArray(x)&&x.length>1?(0,P.jsx)(K.Z,{children:x}):x,w=typeof r=="number"?"".concat(r,"px"):typeof r=="string"&&!isNaN(parseFloat(r))?"".concat(r):void 0;return(0,P.jsx)(B.default,{colon:!1,className:"lightd-form-submitter",style:o()({marginBottom:0,paddingLeft:w},N),wrapperCol:Y,children:(0,P.jsx)("div",{className:"lightd-form-submitter-wrapper",style:{width:"100%",display:"flex",justifyContent:typeof r=="string"&&(L=A.iT[r])!==null&&L!==void 0?L:void 0},children:p?(0,P.jsx)(P.Fragment,{children:p(S,C)}):S})})}},l):!1;return(0,P.jsx)(U.Z,o()({submitter:f,contentRender:function(x,L){return(0,P.jsxs)(P.Fragment,{children:[x,L]})}},m))};O.Item=B.default,O.List=c.Z.List,O.Provider=c.Z.Provider,O.ErrorList=c.Z.ErrorList,O.useForm=c.Z.useForm,O.useFormInstance=c.Z.useFormInstance,O.useWatch=c.Z.useWatch;function $(){var j=useContext(LFormContext);return j}u.Z=O},79500:function(ee,u,e){"use strict";e.d(u,{N:function(){return t},x:function(){return o}});function t(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1e3;return new Promise(function(g){setTimeout(g,I)})}var o=function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,K=arguments.length>1&&arguments[1]!==void 0?arguments[1]:300;return Math.floor(Math.random()*(K-g+1))+g}},77616:function(ee,u,e){"use strict";e.d(u,{Y:function(){return B},_:function(){return P}});var t=e(97857),o=e.n(t),I=e(15009),g=e.n(I),K=e(99289),c=e.n(K),A=e(3917),T=e(67294),B=function(){var D=(0,T.useRef)(!0),O=D.current;return O&&(D.current=!1,!0)},U=function(D,O){return D!=null&&D.length?!0:!O},P=function(D){var O=D.options,$=D.request,j=D.requestOptions,b=D.refreshDeps,a=D.autoRequest,m=a===void 0?!0:a,C=(0,A.Z)(c()(g()().mark(function p(){var r,Y=arguments;return g()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(!$){l.next=5;break}return l.next=3,$.apply(void 0,Y);case 3:return r=l.sent,l.abrupt("return",r);case 5:return l.abrupt("return",[]);case 6:case"end":return l.stop()}},p)})),o()({manual:U(O,m),refreshDeps:b},j));return C}},11330:function(ee,u,e){"use strict";e.d(u,{Z:function(){return Hn}});var t=e(67294),o=e(93967),I=e.n(o),g=e(87462),K=e(1413),c=e(97685),A=e(91),T=e(67656),B=e(91304),U=e(50344),P=e(21770),i=e(15105),D=e(80334);function O(){var n=(0,t.useState)({id:0,callback:null}),s=(0,c.Z)(n,2),M=s[0],v=s[1],E=(0,t.useCallback)(function(W){v(function(_){var y=_.id;return{id:y+1,callback:W}})},[]);return(0,t.useEffect)(function(){var W;(W=M.callback)===null||W===void 0||W.call(M)},[M]),E}var $=e(40228),j=e(72512),b=t.createContext(null),a=b;function m(n){var s=t.useContext(a),M=s.notFoundContent,v=s.activeIndex,E=s.setActiveIndex,W=s.selectOption,_=s.onFocus,y=s.onBlur,V=n.prefixCls,F=n.options,te=F[v]||{};return t.createElement(j.ZP,{prefixCls:"".concat(V,"-menu"),activeKey:te.key,onSelect:function(ie){var se=ie.key,H=F.find(function(ue){var Q=ue.key;return Q===se});W(H)},onFocus:_,onBlur:y},F.map(function(J,ie){var se=J.key,H=J.disabled,ue=J.className,Q=J.style,de=J.label;return t.createElement(j.sN,{key:se,disabled:H,className:ue,style:Q,onMouseEnter:function(){E(ie)}},de)}),!F.length&&t.createElement(j.sN,{disabled:!0},M))}var C=m,p={bottomRight:{points:["tl","br"],offset:[0,4],overflow:{adjustX:1,adjustY:1}},bottomLeft:{points:["tr","bl"],offset:[0,4],overflow:{adjustX:1,adjustY:1}},topRight:{points:["bl","tr"],offset:[0,-4],overflow:{adjustX:1,adjustY:1}},topLeft:{points:["br","tl"],offset:[0,-4],overflow:{adjustX:1,adjustY:1}}},r=function(s){var M=s.prefixCls,v=s.options,E=s.children,W=s.visible,_=s.transitionName,y=s.getPopupContainer,V=s.dropdownClassName,F=s.direction,te=s.placement,J="".concat(M,"-dropdown"),ie=t.createElement(C,{prefixCls:J,options:v}),se=(0,t.useMemo)(function(){var H;return F==="rtl"?H=te==="top"?"topLeft":"bottomLeft":H=te==="top"?"topRight":"bottomRight",H},[F,te]);return t.createElement($.Z,{prefixCls:J,popupVisible:W,popup:ie,popupPlacement:se,popupTransitionName:_,builtinPlacements:p,getPopupContainer:y,popupClassName:V},E)},Y=r,N=function(){return null},l=N;function f(n){var s=n.selectionStart;return n.value.slice(0,s)}function R(n,s){return s.reduce(function(M,v){var E=n.lastIndexOf(v);return E>M.location?{location:E,prefix:v}:M},{location:-1,prefix:""})}function x(n){return(n||"").toLowerCase()}function L(n,s,M){var v=n[0];if(!v||v===M)return n;for(var E=n,W=s.length,_=0;_<W;_+=1)if(x(E[_])!==x(s[_])){E=E.slice(_);break}else _===W-1&&(E=E.slice(W));return E}function S(n,s){var M=s.measureLocation,v=s.prefix,E=s.targetText,W=s.selectionStart,_=s.split,y=n.slice(0,M);y[y.length-_.length]===_&&(y=y.slice(0,y.length-_.length)),y&&(y="".concat(y).concat(_));var V=L(n.slice(W),E.slice(W-M-v.length),_);V.slice(0,_.length)===_&&(V=V.slice(_.length));var F="".concat(y).concat(v).concat(E).concat(_);return{text:"".concat(F).concat(V),selectionLocation:F.length}}function w(n,s){n.setSelectionRange(s,s),n.blur(),n.focus()}function q(n,s){return!s||n.indexOf(s)===-1}function oe(n,s){var M=s.value,v=M===void 0?"":M,E=n.toLowerCase();return v.toLowerCase().indexOf(E)!==-1}var _e=["prefixCls","className","style","prefix","split","notFoundContent","value","defaultValue","children","options","open","allowClear","validateSearch","filterOption","onChange","onKeyDown","onKeyUp","onPressEnter","onSearch","onSelect","onFocus","onBlur","transitionName","placement","direction","getPopupContainer","dropdownClassName","rows"],ne=["suffix","prefixCls","defaultValue","value","allowClear","onChange","classNames","className","disabled"],re=(0,t.forwardRef)(function(n,s){var M=n.prefixCls,v=n.className,E=n.style,W=n.prefix,_=W===void 0?"@":W,y=n.split,V=y===void 0?" ":y,F=n.notFoundContent,te=F===void 0?"Not Found":F,J=n.value,ie=n.defaultValue,se=n.children,H=n.options,ue=n.open,Q=n.allowClear,de=n.validateSearch,pe=de===void 0?q:de,We=n.filterOption,he=We===void 0?oe:We,Le=n.onChange,De=n.onKeyDown,Ae=n.onKeyUp,Pe=n.onPressEnter,Qe=n.onSearch,He=n.onSelect,we=n.onFocus,Ge=n.onBlur,ln=n.transitionName,rn=n.placement,un=n.direction,dn=n.getPopupContainer,_n=n.dropdownClassName,qe=n.rows,Oe=qe===void 0?1:qe,mn=(0,A.Z)(n,_e),Ie=(0,t.useMemo)(function(){return Array.isArray(_)?_:[_]},[_]),Ke=(0,t.useRef)(null),xe=(0,t.useRef)(null),Be=function(){var d;return(d=Ke.current)===null||d===void 0||(d=d.resizableTextArea)===null||d===void 0?void 0:d.textArea};t.useImperativeHandle(s,function(){var Z;return{focus:function(){var h;return(h=Ke.current)===null||h===void 0?void 0:h.focus()},blur:function(){var h;return(h=Ke.current)===null||h===void 0?void 0:h.blur()},textarea:(Z=Ke.current)===null||Z===void 0||(Z=Z.resizableTextArea)===null||Z===void 0?void 0:Z.textArea}});var vn=(0,t.useState)(!1),ke=(0,c.Z)(vn,2),Se=ke[0],en=ke[1],cn=(0,t.useState)(""),Mn=(0,c.Z)(cn,2),pn=Mn[0],Pn=Mn[1],Gn=(0,t.useState)(""),bn=(0,c.Z)(Gn,2),Cn=bn[0],Jn=bn[1],Xn=(0,t.useState)(0),Rn=(0,c.Z)(Xn,2),Wn=Rn[0],In=Rn[1],Qn=(0,t.useState)(0),jn=(0,c.Z)(Qn,2),fn=jn[0],gn=jn[1],wn=(0,t.useState)(!1),Ln=(0,c.Z)(wn,2),qn=Ln[0],Kn=Ln[1],kn=(0,P.Z)("",{defaultValue:ie,value:J}),xn=(0,c.Z)(kn,2),Ue=xn[0],et=xn[1];(0,t.useEffect)(function(){Se&&xe.current&&(xe.current.scrollTop=Be().scrollTop)},[Se]);var nt=t.useMemo(function(){if(ue)for(var Z=0;Z<Ie.length;Z+=1){var d=Ie[Z],h=Ue.lastIndexOf(d);if(h>=0)return[!0,"",d,h]}return[Se,pn,Cn,Wn]},[ue,Se,Ie,Ue,pn,Cn,Wn]),nn=(0,c.Z)(nt,4),Fe=nn[0],En=nn[1],tn=nn[2],hn=nn[3],Dn=t.useCallback(function(Z){var d;return H&&H.length>0?d=H.map(function(h){var X;return(0,K.Z)((0,K.Z)({},h),{},{key:(X=h==null?void 0:h.key)!==null&&X!==void 0?X:h.value})}):d=(0,U.Z)(se).map(function(h){var X=h.props,ye=h.key;return(0,K.Z)((0,K.Z)({},X),{},{label:X.children,key:ye||X.value})}),d.filter(function(h){return he===!1?!0:he(Z,h)})},[se,H,he]),sn=t.useMemo(function(){return Dn(En)},[Dn,En]),tt=O(),st=function(d,h,X){en(!0),Pn(d),Jn(h),In(X),gn(0)},Ze=function(d){en(!1),In(0),Pn(""),tt(d)},yn=function(d){et(d),Le==null||Le(d)},ot=function(d){var h=d.target.value;yn(h)},Tn=function(d){var h,X=d.value,ye=X===void 0?"":X,Te=S(Ue,{measureLocation:hn,targetText:ye,prefix:tn,selectionStart:(h=Be())===null||h===void 0?void 0:h.selectionStart,split:V}),Ne=Te.text,Je=Te.selectionLocation;yn(Ne),Ze(function(){w(Be(),Je)}),He==null||He(d,tn)},at=function(d){var h=d.which;if(De==null||De(d),!!Fe){if(h===i.Z.UP||h===i.Z.DOWN){var X=sn.length,ye=h===i.Z.UP?-1:1,Te=(fn+ye+X)%X;gn(Te),d.preventDefault()}else if(h===i.Z.ESC)Ze();else if(h===i.Z.ENTER){if(d.preventDefault(),!sn.length){Ze();return}var Ne=sn[fn];Tn(Ne)}}},lt=function(d){var h=d.key,X=d.which,ye=d.target,Te=f(ye),Ne=R(Te,Ie),Je=Ne.location,on=Ne.prefix;if(Ae==null||Ae(d),[i.Z.ESC,i.Z.UP,i.Z.DOWN,i.Z.ENTER].indexOf(X)===-1)if(Je!==-1){var Xe=Te.slice(Je+on.length),Un=pe(Xe,V),dt=!!Dn(Xe).length;Un?(h===on||h==="Shift"||Fe||Xe!==En&&dt)&&st(Xe,on,Je):Fe&&Ze(),Qe&&Un&&Qe(Xe,on)}else Fe&&Ze()},it=function(d){!Fe&&Pe&&Pe(d)},An=(0,t.useRef)(),Bn=function(d){window.clearTimeout(An.current),!qn&&d&&we&&we(d),Kn(!0)},Sn=function(d){An.current=window.setTimeout(function(){Kn(!1),Ze(),Ge==null||Ge(d)},0)},rt=function(){Bn()},ut=function(){Sn()};return t.createElement("div",{className:I()(M,v),style:E},t.createElement(B.Z,(0,g.Z)({ref:Ke,value:Ue},mn,{rows:Oe,onChange:ot,onKeyDown:at,onKeyUp:lt,onPressEnter:it,onFocus:Bn,onBlur:Sn})),Fe&&t.createElement("div",{ref:xe,className:"".concat(M,"-measure")},Ue.slice(0,hn),t.createElement(a.Provider,{value:{notFoundContent:te,activeIndex:fn,setActiveIndex:gn,selectOption:Tn,onFocus:rt,onBlur:ut}},t.createElement(Y,{prefixCls:M,transitionName:ln,placement:rn,direction:un,options:sn,visible:!0,getPopupContainer:dn,dropdownClassName:_n},t.createElement("span",null,tn))),Ue.slice(hn+tn.length)))}),ae=(0,t.forwardRef)(function(n,s){var M=n.suffix,v=n.prefixCls,E=v===void 0?"rc-mentions":v,W=n.defaultValue,_=n.value,y=n.allowClear,V=n.onChange,F=n.classNames,te=n.className,J=n.disabled,ie=(0,A.Z)(n,ne),se=(0,P.Z)("",{defaultValue:W,value:_}),H=(0,c.Z)(se,2),ue=H[0],Q=H[1],de=function(he){Q(he),V==null||V(he)},pe=function(){de("")};return t.createElement(T.Q,{suffix:M,prefixCls:E,value:ue,allowClear:y,handleReset:pe,className:te,classNames:F,disabled:J},t.createElement(re,(0,g.Z)({className:F==null?void 0:F.mentions,prefixCls:E,ref:s,onChange:de},ie)))});ae.Option=l;var me=ae,ve=me,be=e(42550),G=e(8745),Ce=e(9708),ce=e(53124),fe=e(88258),le=e(65223),ge=e(75081),z=e(47673),k=e(20353),Re=e(14747),Ee=e(91945),je=e(45503),Me=e(54548),$e=e(93900);const an=n=>{const{componentCls:s,colorTextDisabled:M,controlItemBgHover:v,controlPaddingHorizontal:E,colorText:W,motionDurationSlow:_,lineHeight:y,controlHeight:V,paddingInline:F,paddingBlock:te,fontSize:J,fontSizeIcon:ie,colorTextTertiary:se,colorTextQuaternary:H,colorBgElevated:ue,paddingXXS:Q,paddingLG:de,borderRadius:pe,borderRadiusLG:We,boxShadowSecondary:he,itemPaddingVertical:Le,calc:De}=n;return{[s]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},(0,Re.Wf)(n)),(0,z.ik)(n)),{position:"relative",display:"inline-block",height:"auto",padding:0,overflow:"hidden",lineHeight:y,whiteSpace:"pre-wrap",verticalAlign:"bottom"}),(0,$e.qG)(n)),(0,$e.H8)(n)),(0,$e.Mu)(n)),{"&-affix-wrapper":Object.assign(Object.assign({},(0,z.ik)(n)),{display:"inline-flex",padding:0,"&::before":{display:"inline-block",width:0,visibility:"hidden",content:'"\\a0"'},[`${s}-suffix`]:{position:"absolute",top:0,insetInlineEnd:F,bottom:0,zIndex:1,display:"inline-flex",alignItems:"center",margin:"auto"},[`&:has(${s}-suffix) > ${s} > textarea`]:{paddingInlineEnd:de},[`${s}-clear-icon`]:{position:"absolute",insetInlineEnd:0,insetBlockStart:De(J).mul(y).mul(.5).add(te).equal(),transform:"translateY(-50%)",margin:0,color:H,fontSize:ie,verticalAlign:-1,cursor:"pointer",transition:`color ${_}`,"&:hover":{color:se},"&:active":{color:W},"&-hidden":{visibility:"hidden"}}}),"&-disabled":{"> textarea":Object.assign({},(0,$e.Xy)(n))},[`&, &-affix-wrapper > ${s}`]:{[`> textarea, ${s}-measure`]:{color:W,boxSizing:"border-box",minHeight:n.calc(V).sub(2),margin:0,padding:`${(0,Me.bf)(te)} ${(0,Me.bf)(F)}`,overflow:"inherit",overflowX:"hidden",overflowY:"auto",fontWeight:"inherit",fontSize:"inherit",fontFamily:"inherit",fontStyle:"inherit",fontVariant:"inherit",fontSizeAdjust:"inherit",fontStretch:"inherit",lineHeight:"inherit",direction:"inherit",letterSpacing:"inherit",whiteSpace:"inherit",textAlign:"inherit",verticalAlign:"top",wordWrap:"break-word",wordBreak:"inherit",tabSize:"inherit"},"> textarea":Object.assign({width:"100%",border:"none",outline:"none",resize:"none",backgroundColor:"transparent"},(0,z.nz)(n.colorTextPlaceholder)),[`${s}-measure`]:{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:-1,color:"transparent",pointerEvents:"none","> span":{display:"inline-block",minHeight:"1em"}}},"&-dropdown":Object.assign(Object.assign({},(0,Re.Wf)(n)),{position:"absolute",top:-9999,insetInlineStart:-9999,zIndex:n.zIndexPopup,boxSizing:"border-box",fontSize:J,fontVariant:"initial",padding:Q,backgroundColor:ue,borderRadius:We,outline:"none",boxShadow:he,"&-hidden":{display:"none"},[`${s}-dropdown-menu`]:{maxHeight:n.dropdownHeight,margin:0,paddingInlineStart:0,overflow:"auto",listStyle:"none",outline:"none","&-item":Object.assign(Object.assign({},Re.vS),{position:"relative",display:"block",minWidth:n.controlItemWidth,padding:`${(0,Me.bf)(Le)} ${(0,Me.bf)(E)}`,color:W,borderRadius:pe,fontWeight:"normal",lineHeight:y,cursor:"pointer",transition:`background ${_} ease`,"&:hover":{backgroundColor:v},"&-disabled":{color:M,cursor:"not-allowed","&:hover":{color:M,backgroundColor:v,cursor:"not-allowed"}},"&-selected":{color:W,fontWeight:n.fontWeightStrong,backgroundColor:v},"&-active":{backgroundColor:v}})}})})}},Ye=n=>Object.assign(Object.assign({},(0,k.T)(n)),{dropdownHeight:250,controlItemWidth:100,zIndexPopup:n.zIndexPopupBase+50,itemPaddingVertical:(n.controlHeight-n.fontHeight)/2});var Ve=(0,Ee.I$)("Mentions",n=>{const s=(0,je.TS)(n,(0,k.e)(n));return[an(s)]},Ye),Fn=e(35792),Zn=e(27833),Nn=e(78290),$n=function(n,s){var M={};for(var v in n)Object.prototype.hasOwnProperty.call(n,v)&&s.indexOf(v)<0&&(M[v]=n[v]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var E=0,v=Object.getOwnPropertySymbols(n);E<v.length;E++)s.indexOf(v[E])<0&&Object.prototype.propertyIsEnumerable.call(n,v[E])&&(M[v[E]]=n[v[E]]);return M};const{Option:On}=ve;function Yn(){return!0}const Vn=(n,s)=>{const{prefixCls:M,className:v,rootClassName:E,disabled:W,loading:_,filterOption:y,children:V,notFoundContent:F,options:te,status:J,allowClear:ie=!1,popupClassName:se,style:H,variant:ue}=n,Q=$n(n,["prefixCls","className","rootClassName","disabled","loading","filterOption","children","notFoundContent","options","status","allowClear","popupClassName","style","variant"]),[de,pe]=t.useState(!1),We=t.useRef(null),he=(0,be.sQ)(s,We),{getPrefixCls:Le,renderEmpty:De,direction:Ae,mentions:Pe}=t.useContext(ce.E_),{status:Qe,hasFeedback:He,feedbackIcon:we}=t.useContext(le.aM),Ge=(0,Ce.F)(Qe,J),ln=function(){Q.onFocus&&Q.onFocus.apply(Q,arguments),pe(!0)},rn=function(){Q.onBlur&&Q.onBlur.apply(Q,arguments),pe(!1)},un=t.useMemo(()=>F!==void 0?F:(De==null?void 0:De("Select"))||t.createElement(fe.Z,{componentName:"Select"}),[F,De]),dn=t.useMemo(()=>_?t.createElement(On,{value:"ANTD_SEARCHING",disabled:!0},t.createElement(ge.Z,{size:"small"})):V,[_,V]),_n=_?[{value:"ANTD_SEARCHING",disabled:!0,label:t.createElement(ge.Z,{size:"small"})}]:te,qe=_?Yn:y,Oe=Le("mentions",M),mn=(0,Nn.Z)(ie),Ie=(0,Fn.Z)(Oe),[Ke,xe,Be]=Ve(Oe,Ie),[vn,ke]=(0,Zn.Z)(ue),Se=He&&t.createElement(t.Fragment,null,we),en=I()(Pe==null?void 0:Pe.className,v,E,Be,Ie),cn=t.createElement(ve,Object.assign({prefixCls:Oe,notFoundContent:un,className:en,disabled:W,allowClear:mn,direction:Ae,style:Object.assign(Object.assign({},Pe==null?void 0:Pe.style),H)},Q,{filterOption:qe,onFocus:ln,onBlur:rn,dropdownClassName:I()(se,E,xe,Be,Ie),ref:he,options:_n,suffix:Se,classNames:{mentions:I()({[`${Oe}-disabled`]:W,[`${Oe}-focused`]:de,[`${Oe}-rtl`]:Ae==="rtl"},xe),variant:I()({[`${Oe}-${vn}`]:ke},(0,Ce.Z)(Oe,Ge)),affixWrapper:xe}}),dn);return Ke(cn)},ze=t.forwardRef(Vn);ze.Option=On;const zn=(0,G.Z)(ze,"mentions");ze._InternalPanelDoNotUseOrYouWillBeFired=zn,ze.getMentions=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{prefix:M="@",split:v=" "}=s,E=Array.isArray(M)?M:[M];return n.split(v).map(function(){let W=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",_=null;return E.some(y=>W.slice(0,y.length)===y?(_=y,!0):!1),_!==null?{prefix:_,value:W.slice(_.length)}:null}).filter(W=>!!W&&!!W.value)};var Hn=ze},22028:function(ee,u,e){"use strict";e.d(u,{Z:function(){return N}});var t=e(74073),o=e(45401),I=e(35586);function g(l){var f=l==null?0:l.length;return f?l[f-1]:void 0}var K=g,c=e(13317);function A(l,f,R){var x=-1,L=l.length;f<0&&(f=-f>L?0:L+f),R=R>L?L:R,R<0&&(R+=L),L=f>R?0:R-f>>>0,f>>>=0;for(var S=Array(L);++x<L;)S[x]=l[x+f];return S}var T=A;function B(l,f){return f.length<2?l:(0,c.Z)(l,T(f,0,-1))}var U=B,P=e(62281);function i(l,f){return f=(0,I.Z)(f,l),l=U(l,f),l==null||delete l[(0,P.Z)(K(f))]}var D=i,O=e(31899),$=e(37514);function j(l){return(0,$.Z)(l)?void 0:l}var b=j,a=e(94008),m=e(4403),C=1,p=2,r=4,Y=(0,a.Z)(function(l,f){var R={};if(l==null)return R;var x=!1;f=(0,t.Z)(f,function(S){return S=(0,I.Z)(S,l),x||(x=S.length>1),S}),(0,O.Z)(l,(0,m.Z)(l),R),x&&(R=(0,o.Z)(R,C|p|r,b));for(var L=f.length;L--;)D(R,f[L]);return R}),N=Y}}]);
