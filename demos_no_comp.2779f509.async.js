(self["webpackChunklignting_design"]=self["webpackChunklignting_design"]||[]).push([[6050],{74940:function(e,n,t){"use strict";t.r(n);var r=t(2824),u=t(67294),c=t(85486),a=t(63260),l=function(){var e=c.a0.useForm(),n=(0,r.Z)(e,1),t=n[0];return u.createElement(c.a0,{name:"LFormItemNumber",form:t,submitter:{buttonAlign:"center"}},u.createElement(c.pe,{name:"number1",label:"\u91d1\u989d1",required:!0,contentAfter:u.createElement("div",null,"$")}),u.createElement(c.pe,{label:"\u91d1\u989d2",name:"number2",numberProps:{prefix:"\uffe5"}}),u.createElement(c.pe,{label:"\u6570\u5b57",name:"number3",max:1e3,numberProps:{precision:void 0}}),u.createElement(c.pe,{name:"number66",label:"\u683c\u5f0f\u5316\u6570\u5b571",numberProps:{precision:void 0,defaultValue:1e3,formatter:function(e){return"$ ".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")}}}),u.createElement(c.pe,{label:"\u683c\u5f0f\u5316\u6570\u5b572",name:"number77",numberProps:{precision:void 0,defaultValue:99,formatter:function(e){return"".concat(e,"%")},parser:function(e){return e.replace("%",",")}}}),u.createElement(c.pe,{label:"\u81ea\u5b9a\u4e49\u6e32\u67d3",name:"with-popover",tooltip:"\u8be5\u65b9\u6848\u53ef\u7528\u4e8e\u6240\u6709\u8868\u5355\u9879",renderField:(0,a.Z)({content:"\u8be5\u65b9\u6848\u53ef\u7528\u4e8e\u6240\u6709\u8868\u5355\u9879"})}))};n["default"]=l},78664:function(e,n,t){"use strict";t.r(n);var r=t(2824),u=t(67294),c=t(85486),a=t(63260),l=function(){var e=c.a0.useForm(),n=(0,r.Z)(e,1),t=n[0];return u.createElement(c.a0,{name:"LFormItemPassword",form:t,submitter:{buttonAlign:"center"}},u.createElement(c.kt,{className:"myLFormItemInput",name:"password1",label:"\u5bc6\u78011",required:!0}),u.createElement(c.kt,{name:"password2",label:"\u5bc6\u78012",required:!0,min:6}),u.createElement(c.kt,{label:"\u81ea\u5b9a\u4e49\u6e32\u67d3",name:"with-popover",tooltip:"\u8be5\u65b9\u6848\u53ef\u7528\u4e8e\u6240\u6709\u8868\u5355\u9879",renderField:(0,a.Z)({content:"\u8be5\u65b9\u6848\u53ef\u7528\u4e8e\u6240\u6709\u8868\u5355\u9879"})}))};n["default"]=l},24226:function(e,n,t){"use strict";t.r(n);var r=t(2824),u=t(67294),c=t(85486),a=t(63260),l=function(){var e=c.a0.useForm(),n=(0,r.Z)(e,1),t=n[0];return u.createElement(c.a0,{name:"LFormItemTextArea",isEnterSubmit:!1,form:t,submitter:{buttonAlign:"center"}},u.createElement(c.vh,{className:"myLFormItemInput",name:"TextArea1",label:"\u5907\u6ce81",required:!0}),u.createElement(c.vh,{name:"TextArea12",label:"\u5907\u6ce82",required:!0,textAreaProps:{showCount:!0,autoSize:{minRows:2,maxRows:6}}}),u.createElement(c.vh,{label:"\u81ea\u5b9a\u4e49\u6e32\u67d3",name:"with-popover",tooltip:"\u8be5\u65b9\u6848\u53ef\u7528\u4e8e\u6240\u6709\u8868\u5355\u9879",renderField:(0,a.Z)({content:"\u8be5\u65b9\u6848\u53ef\u7528\u4e8e\u6240\u6709\u8868\u5355\u9879"})}))};n["default"]=l},63260:function(e,n,t){"use strict";t(20136);var r=t(19181),u=t(91896),c=t(67294),a=function(e){return(null===e||void 0===e?void 0:e.parentNode)||document.body};function l(e){return function(n){var t=function(t){return c.createElement(r.Z,(0,u.Z)({trigger:"focus",getPopupContainer:a},e),c.cloneElement(n,t))};return c.createElement(t,null)}}n["Z"]=l},96296:function(e,n,t){"use strict";t.d(n,{Od:function(){return l},Hd:function(){return i},FK:function(){return m},RO:function(){return v},DI:function(){return h},NW:function(){return b},tm:function(){return y},Sd:function(){return w},dU:function(){return p},hA:function(){return F},s4:function(){return P},tG:function(){return A},D9:function(){return I},Yw:function(){return N},FH:function(){return O},vA:function(){return q},x3:function(){return j},Jh:function(){return $},EX:function(){return Z},mA:function(){return G}});var r=t(2824),u=t(67294);function c(e){return"function"===typeof e}function a(e,n){if(e===n)return!0;for(var t=0;t<e.length;t++)if(!Object.is(e[t],n[t]))return!1;return!0}function l(e){var n=(0,u.useRef)(),t=(0,u.useState)(e),a=(0,r.Z)(t,2),l=a[0],o=a[1];(0,u.useEffect)((function(){var e;null===n||void 0===n||null===(e=n.current)||void 0===e||e.call(n,l)}),[l]);var i=(0,u.useCallback)((function(e,t){c(t)&&(n.current=t),o((function(n){var t=c(e)?null===e||void 0===e?void 0:e(n):e;return t}))}),[]);return[l,i]}function o(){var e=(0,u.useRef)(null),n=(0,u.useState)(),t=(0,r.Z)(n,2),c=t[0],a=t[1];return(0,u.useEffect)((function(){var n;e.current&&a(null===(n=e.current)||void 0===n?void 0:n.getBoundingClientRect())}),[e]),[c,e]}var i=o,f=t(90636),s=t(3182);function m(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,t=(0,u.useState)(!1),c=(0,r.Z)(t,2),a=c[0],l=c[1],o=(0,u.useCallback)((function(){return new Promise((function(t,r){if(0!==e.length)for(var u=[],c=0,a=0,o=Math.min(n,e.length),i=0;i<o;i++)m();else t([]);function m(){return v.apply(this,arguments)}function v(){return v=(0,s.Z)((0,f.Z)().mark((function n(){var o,i,s;return(0,f.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(c!==e.length){n.next=2;break}return n.abrupt("return");case 2:return o=c,i=e[c],c++,n.prev=4,l(!0),n.next=8,i();case 8:s=n.sent,u[o]=s,n.next=16;break;case 12:n.prev=12,n.t0=n["catch"](4),u[o]=n.t0,r(n.t0);case 16:return n.prev=16,a++,a===e.length&&(l(!1),t(u)),m(),n.finish(16);case 21:case"end":return n.stop()}}),n,null,[[4,12,16,21]])}))),v.apply(this,arguments)}}))}),[]);return{run:o,loading:a}}function v(e,n){var t=(0,u.useRef)({deps:n,data:void 0,isFirstRender:!0}),r=t.current;return!r.isFirstRender&&a(r.deps,n)||(r.deps=n,r.data=e(),r.isFirstRender=!1),r.data}var d=t(23279),E=t.n(d);function p(e){var n=(0,u.useRef)(e);return n.current=e,n}function Z(e){var n=p(e);(0,u.useEffect)((function(){return function(){var e;null===(e=n.current)||void 0===e||e.call(n)}}),[])}function g(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=(0,u.useRef)(e);r.current=e;var c=(0,u.useRef)(E()((function(){return r.current.apply(r,arguments)}),n,t));return Z((function(){c.current.cancel()})),{run:c.current,cancel:c.current.cancel,flush:c.current.flush}}var h=g,C=function(){var e=(0,u.useState)({}),n=(0,r.Z)(e,2),t=n[1];return(0,u.useCallback)((function(){return t({})}),[])},b=C,k=function(){var e=(0,u.useRef)(!1);return(0,u.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e},y=k,S=function(){var e=(0,u.useRef)(!1);return(0,u.useEffect)((function(){return e.current=!1,function(){e.current=!0}}),[]),e},w=S;function F(e){var n=(0,u.useState)(!1),t=(0,r.Z)(n,2),c=t[0],a=t[1],l=(0,u.useRef)(!1),o=(0,u.useCallback)((0,s.Z)((0,f.Z)().mark((function n(){var t,r=arguments;return(0,f.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!l.current){n.next=2;break}return n.abrupt("return");case 2:return l.current=!0,n.prev=3,a(!0),n.next=7,e.apply(void 0,r);case 7:return t=n.sent,a(!1),l.current=!1,n.abrupt("return",t);case 13:throw n.prev=13,n.t0=n["catch"](3),a(!1),l.current=!1,n.t0;case 18:case"end":return n.stop()}}),n,null,[[3,13]])}))),[e]);return{loading:c,run:o}}var R=function(e){(0,u.useEffect)((function(){null===e||void 0===e||e()}),[])},P=R;function x(e){var n=(0,u.useRef)(e);n.current=e;var t=(0,u.useCallback)((function(){for(var e=n.current,t=arguments.length,r=new Array(t),u=0;u<t;u++)r[u]=arguments[u];return null===e||void 0===e?void 0:e.apply(void 0,r)}),[n]);return t}var A=x;function I(e){var n=(0,u.useRef)(),t=(0,u.useRef)(e);return Object.is(t.current,e)||(n.current=t.current,t.current=e),n.current}var D=function(e){var n=(0,u.useState)(e),t=(0,r.Z)(n,2),c=t[0],a=t[1],l=A((function(){a(e)}));return[c,a,l]},N=D;function T(e){var n=w(),t=u.useState(e),c=(0,r.Z)(t,2),a=c[0],l=c[1],o=u.useCallback((function(e){n||l(e)}),[]);return[a,o]}var O=T,H=t(11849),J=function(e){var n=(0,u.useState)(e),t=(0,r.Z)(n,2),a=t[0],l=t[1],o=(0,u.useCallback)((function(e){l((function(n){var t=c(e)?e(n):e;return t instanceof Object?(0,H.Z)((0,H.Z)({},n),t):n}))}),[]);return[a,o]},q=J,L=t(50361),V=t.n(L);function j(e,n){var t=(0,u.useRef)(null),r=(0,u.useRef)(null),c=n.onShow,a=n.onFormart,l=n.onHide,o=(0,u.useCallback)((function(e){r.current=e}),[]);return(0,u.useImperativeHandle)(e,(function(){return{onShow:function(e){t.current=V()(e),c&&c(t.current)},onHide:function(e){l&&l(V()(e))},getChildData:function(){return r.current}}})),{parentData:a?a(t.current):t.current,setParentData:o}}var M=t(23493),U=t.n(M);function X(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=(0,u.useRef)(e);r.current=e;var c=(0,u.useRef)(U()((function(){return r.current.apply(r,arguments)}),n,t));return Z((function(){c.current.cancel()})),{run:c.current,cancel:c.current.cancel,flush:c.current.flush}}var $=X,z=function(){var e=(0,u.useRef)(!0),n=e.current;return n?(e.current=!1,!0):n},B=function(e,n){n=Array.isArray(n)&&n.length>0?n:void 0;var t=z();(0,u.useEffect)((function(){if(!t)return e()}),n)},G=B},38641:function(e,n,t){"use strict";t.r(n);t(57663);var r=t(71577),u=(t(34792),t(48086)),c=t(2824),a=t(67294),l=t(96296),o=function(){var e=(0,l.Od)(0),n=(0,c.Z)(e,2),t=n[0],o=n[1],i=function(){o(t+1,(function(e){console.log("newCount",e),u.ZP.info("\u83b7\u53d6\u5230\u6700\u65b0count\u503c\u662f:".concat(e))}))};return a.createElement(a.Fragment,null,a.createElement("div",null,"\u5f53\u524dcount: ",t),a.createElement(r.Z,{onClick:i},"\u70b9\u51fb\u589e\u52a0count\u540e\u505a\u64cd\u4f5c"))};n["default"]=o},21410:function(e,n,t){"use strict";t.r(n);t(57663);var r=t(71577),u=t(90636),c=(t(34792),t(48086)),a=t(3182),l=t(67294),o=t(96296),i=[];function f(){return new Promise((function(e){setTimeout((function(){e("\u6210\u529f")}),1e3)}))}for(var s=0;s<7;s++)i.push(f);n["default"]=function(){var e=(0,o.FK)(i),n=e.run,t=e.loading;return l.createElement(l.Fragment,null,l.createElement("p",null,"\u5f53\u524d\u8bf7\u6c42\u72b6\u6001: ",t?"\u8bf7\u6c42\u4e2d...":"\u8bf7\u6c42\u5b8c\u6210"),l.createElement(r.Z,{disabled:t,onClick:(0,a.Z)((0,u.Z)().mark((function e(){var t;return(0,u.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:t=e.sent,c.ZP.info("".concat(JSON.stringify(t,null,2))),console.log(" retArr",t);case 5:case"end":return e.stop()}}),e)})))},"Submit"))}},24844:function(e,n,t){"use strict";t.r(n);t(57663);var r=t(71577),u=t(2824),c=t(67294),a=t(96296),l=function(){var e=(0,a.RO)((function(){return 99}),[]),n=(0,c.useState)(0),t=(0,u.Z)(n,2),l=t[0],o=t[1];return c.createElement("div",null,c.createElement("p",null," \u66f4\u65b0\u7ec4\u4ef6\u4e0d\u53d8\u7684data: ",e),c.createElement(r.Z,{onClick:function(){return o(l+1)}},"\u70b9\u51fb\u66f4\u65b0\u7ec4\u4ef6"),c.createElement("p",null,"count- ",l))};n["default"]=l},85920:function(e,n,t){"use strict";t.r(n);t(57663);var r=t(71577),u=t(2824),c=t(67294),a=t(96296),l=function(){var e=(0,c.useState)(1),n=(0,u.Z)(e,2),t=n[0],l=n[1],o=(0,c.useState)(25),i=(0,u.Z)(o,2),f=i[0],s=i[1],m=(0,a.RO)((function(){return 2*t}),[t]);return c.createElement("div",null,c.createElement("p",null,"countX2\u5728\u53ea\u6709count\u53d8\u5316\u65f6\u624d\u4f1a\u53d8\u5316: ",m),c.createElement(r.Z,{onClick:function(){return l(t+1)}},"\u70b9\u51fb\u66f4\u65b0count"),c.createElement("p",null,"count- ",t),c.createElement(r.Z,{onClick:function(){return s(f+1)}},"\u70b9\u51fb\u66f4\u65b0age"),c.createElement("p",null,"age- ",f))};n["default"]=l},40227:function(e,n,t){"use strict";t.r(n);t(57663);var r=t(71577),u=t(2824),c=t(67294),a=t(96296);function l(){var e=(0,c.useState)(0),n=(0,u.Z)(e,2),t=n[0],l=n[1],o=(0,a.DI)(l,500),i=o.run;return c.createElement("div",null,c.createElement("p",{style:{marginTop:16}}," Clicked count: ",t," "),c.createElement(r.Z,{onClick:function(){return i(t+1)}},"Click fast!"))}n["default"]=l},91023:function(e,n,t){"use strict";t.r(n);t(57663);var r=t(71577),u=(t(47673),t(74485)),c=t(2824),a=t(67294),l=t(96296);function o(){var e=(0,a.useState)(""),n=(0,c.Z)(e,2),t=n[0],o=n[1],i=(0,a.useState)(),f=(0,c.Z)(i,2),s=f[0],m=f[1],v=(0,l.DI)(m,1e3),d=v.run,E=v.cancel,p=v.flush;return a.createElement("div",null,a.createElement(u.Z,{value:t,onChange:function(e){o(e.target.value),d(e.target.value)},placeholder:"Typed value",style:{width:280}}),a.createElement("p",{style:{margin:"16px 0"}},a.createElement(r.Z,{onClick:E},"Cancel Debounce")),a.createElement("p",{style:{margin:"16px 0"}},a.createElement(r.Z,{onClick:p},"flush Debounce")),a.createElement("p",null,"value: ",t),a.createElement("p",null,"DebouncedValue: ",s))}n["default"]=o},11359:function(e,n,t){"use strict";t.r(n);t(57663);var r=t(71577),u=t(67294),c=t(96296),a=function(){var e=(0,c.NW)();return u.createElement(u.Fragment,null,u.createElement("p",{style:{color:"gray"}},"\u65f6\u95f4\u6233\uff08\u76d1\u6d4b\u662f\u5426\u89e6\u53d1\u66f4\u65b0\u6e32\u67d3\uff09\uff1a",Date.now()),u.createElement(r.Z,{onClick:e},"\u5f3a\u5236\u66f4\u65b0"))};n["default"]=a},84945:function(e,n,t){"use strict";t.r(n);t(57663);var r=t(71577),u=t(2824),c=t(96296),a=t(67294),l=function(){var e=a.useState(0),n=(0,u.Z)(e,2),t=n[0],r=n[1],l=(0,c.tm)();return a.useEffect((function(){var e=setInterval((function(){if(!l.current)return function(){clearInterval(e)};r((function(e){return e+1}))}),400)}),[]),a.createElement("div",null,"\u8ba1\u6570\uff1a",t)};function o(){var e=a.useState(!0),n=(0,u.Z)(e,2),t=n[0],c=n[1];return a.createElement(a.Fragment,null,a.createElement(r.Z,{onClick:function(){return c((function(e){return!e}))}},"\u70b9\u51fb\u5207\u6362\u663e\u793a/\u9690\u85cf"),t&&a.createElement(l,null))}n["default"]=o},87522:function(e,n,t){"use strict";t.r(n);t(57663);var r=t(71577),u=t(2824),c=t(96296),a=t(67294),l=function(){var e=a.useState(0),n=(0,u.Z)(e,2),t=n[0],r=n[1],l=(0,c.Sd)();return a.useEffect((function(){var e=setInterval((function(){l.current||r((function(e){return e+1}))}),400);return function(){clearInterval(e)}}),[]),a.createElement("div",null,"\u8ba1\u6570\uff1a",t)};function o(){var e=a.useState(!0),n=(0,u.Z)(e,2),t=n[0],c=n[1];return a.createElement(a.Fragment,null,a.createElement(r.Z,{onClick:function(){return c((function(e){return!e}))}},"\u70b9\u51fb\u5207\u6362\u663e\u793a/\u9690\u85cf"),t&&a.createElement(l,null))}n["default"]=o},98760:function(e,n,t){"use strict";t.r(n);t(49111);var r=t(19650),u=(t(57663),t(71577)),c=t(2824),a=t(96296),l=t(67294);function o(){var e=l.useState(0),n=(0,c.Z)(e,2),t=n[0],o=n[1],i=(0,a.dU)(t),f=l.useRef(null),s=function(){clearTimeout(f.current),f.current=setTimeout((function(){alert("\u6700\u65b0\u7684 count \u503c\u4e3a\uff1a".concat(i.current))}),3e3)};return l.createElement("div",null,l.createElement("p",null,"\u70b9\u51fb ",i.current," \u6b21"),l.createElement(r.Z,null,l.createElement(u.Z,{type:"primary",onClick:function(){return o(t+1)}},"\u70b9\u6211"),l.createElement(u.Z,{onClick:s},"\u70b9\u51fb3\u79d2\u540e\u5f39\u7a97\u663e\u793a\u70b9\u51fb\u6b21\u6570")))}n["default"]=o},58217:function(e,n,t){"use strict";t.r(n);t(57663);var r=t(71577),u=t(90636),c=(t(34792),t(48086)),a=t(3182),l=t(2824),o=t(67294),i=t(96296);function f(){return new Promise((function(e){setTimeout((function(){e()}),2e3)}))}n["default"]=function(){var e=(0,o.useState)(0),n=(0,l.Z)(e,2),t=n[0],s=n[1],m=(0,i.hA)(function(){var e=(0,a.Z)((0,u.Z)().mark((function e(n){return(0,u.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c.ZP.info("\u5f00\u59cb\u8bf7\u6c42".concat(n)),e.next=3,f();case 3:s((function(e){return e+1})),c.ZP.success("\u8bf7\u6c42\u6210\u529f");case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),v=m.run;m.loading;return o.createElement(o.Fragment,null,o.createElement("p",null,"\u8bf7\u6c42\u6b21\u6570: ",t),o.createElement(r.Z,{onClick:function(){return v("99")}},"Submit"))}},39046:function(e,n,t){"use strict";t.r(n);t(57663);var r=t(71577),u=(t(34792),t(48086)),c=t(2824),a=t(67294),l=t(96296),o=function(){var e=(0,a.useState)(0),n=(0,c.Z)(e,2),t=n[0],o=n[1];return(0,l.s4)((function(){u.ZP.info("\u7ec4\u4ef7\u6302\u5728\u5b8c\u6210\u89e6\u53d1")})),a.createElement(a.Fragment,null,a.createElement("div",null,"\u7ec4\u4ef7\u6302\u5728\u5b8c\u6210\u89e6\u53d1,\u66f4\u65b0\u7ec4\u4ef6\u4e0d\u89e6\u53d1"),a.createElement("div",null,"count: ",t),a.createElement(r.Z,{onClick:function(){return o(t+1)}},"add count "))};n["default"]=o},43104:function(e,n,t){"use strict";t.r(n);t(34792);var r=t(48086),u=t(2824),c=(t(57663),t(71577)),a=t(96296),l=t(67294),o=l.memo((function(e){var n=e.showCount,t=(0,l.useRef)(0);return t.current+=1,l.createElement("div",null,l.createElement("p",null,"\u5b50\u7ec4\u4ef6\u6e32\u67d3\u4e86 : ",t.current,"\u6b21"),l.createElement(c.Z,{type:"primary",onClick:n},"showParentCount"))}));function i(){var e=(0,l.useState)(0),n=(0,u.Z)(e,2),t=n[0],i=n[1],f=(0,a.tG)((function(){r.ZP.info("Current count is ".concat(t))})),s=(0,l.useCallback)((function(){r.ZP.info("Current count is ".concat(t))}),[t]);return l.createElement(l.Fragment,null,l.createElement(c.Z,{onClick:function(){i((function(e){return e+1}))}},"Add Count"),l.createElement("p",null,"\u60a8\u53ef\u4ee5\u5355\u51fb\u8be5\u6309\u94ae\u67e5\u770b\u5b50\u7ec4\u4ef6\u6e32\u67d3\u7684\u6b21\u6570"),l.createElement("div",{style:{marginTop:32}},l.createElement("h4",null,"\u7528\u4e86usePersistFn:"),l.createElement(o,{showCount:f})),l.createElement("div",{style:{marginTop:32}},l.createElement("h4",null,"\u7528\u4e86useCallback:"),l.createElement(o,{showCount:s})))}o.displayName="Child",n["default"]=i},90251:function(e,n,t){"use strict";t.r(n);t(47673);var r=t(74485),u=t(2824),c=t(67294),a=t(96296);function l(){var e=(0,c.useState)(""),n=(0,u.Z)(e,2),t=n[0],l=n[1],o=(0,a.D9)(t);return c.createElement(c.Fragment,null,c.createElement("p",null,"Now: ",t),c.createElement("p",null,"before: ",o),c.createElement(r.Z,{type:"text",onChange:function(e){return l(e.target.value)},value:t}))}n["default"]=l},23772:function(e,n,t){"use strict";t.r(n);t(57663);var r=t(71577),u=(t(47673),t(74485)),c=t(2824),a=t(67294),l=t(96296);function o(){var e=(0,a.useState)(0),n=(0,c.Z)(e,2),t=n[0],o=n[1],i=(0,a.useState)(""),f=(0,c.Z)(i,2),s=f[0],m=f[1],v=(0,l.D9)(s);return a.createElement(a.Fragment,null,a.createElement("p",null,"Now: ",s),a.createElement("p",null,"before: ",v),a.createElement(u.Z,{type:"text",onChange:function(e){return m(e.target.value)},value:s}),a.createElement("p",null,"count: ",t),a.createElement(r.Z,{onClick:function(){return o((function(e){return e+1}))}},"add count"))}n["default"]=o},33391:function(e,n,t){"use strict";t.r(n);t(57663);var r=t(71577),u=t(2824),c=t(67294),a=t(96296);n["default"]=function(){var e=(0,a.Yw)({hello:"",count:0}),n=(0,u.Z)(e,3),t=n[0],l=n[1],o=n[2];return c.createElement("div",null,c.createElement("pre",null,JSON.stringify(t,null,2)),c.createElement("p",null,c.createElement(r.Z,{style:{marginRight:"8px"},onClick:function(){return l({hello:"world",count:1})}},"set hello and count"),c.createElement(r.Z,{onClick:o},"resetState")))}},63229:function(e,n,t){"use strict";t.r(n);t(57663);var r=t(71577),u=t(2824),c=t(67294),a=t(96296),l=function(){var e=(0,a.FH)(),n=(0,u.Z)(e,2),t=n[0],r=n[1];(0,c.useEffect)((function(){setTimeout((function(){r("data loaded from server")}),5e3)}),[]);var l=t||"\u7ec4\u4ef6Loading 5s...";return c.createElement("div",null,l)};n["default"]=function(){var e=(0,c.useState)(!0),n=(0,u.Z)(e,2),t=n[0],a=n[1];return c.createElement("div",null,t&&c.createElement(l,null),c.createElement(r.Z,{onClick:function(){return a(!1)}},"Unmount"),c.createElement(r.Z,{onClick:function(){return a(!0)}},"mount"))}},98605:function(e,n,t){"use strict";t.r(n);t(49111);var r=t(19650),u=(t(57663),t(71577)),c=t(2824),a=t(67294),l=t(96296);function o(){var e=(0,l.vA)({foo:0,count:0}),n=(0,c.Z)(e,2),t=n[0],o=n[1];return a.createElement("div",null,a.createElement("p",null,"* \u8bbe\u7f6e\u76f8\u540c\u7684 foo/bar \u503c\u65f6\u8fd8\u662f\u4f1a\u89e6\u53d1\u6e32\u67d3"),a.createElement("p",{style:{color:"gray"}},"\u65f6\u95f4\u6233\uff08\u76d1\u6d4b\u662f\u5426\u89e6\u53d1\u6e32\u67d3\uff09\uff1a",Date.now()),a.createElement(r.Z,null,a.createElement(u.Z,{type:"primary",onClick:function(){return o({foo:42})}},"\u8bbe\u7f6e foo"),a.createElement(u.Z,{type:"primary",onClick:function(){return o({bar:"biz"})}},"\u8bbe\u7f6e bar"),a.createElement(u.Z,{type:"primary",onClick:function(){return o((function(e){return{count:e.count+1}}))}},"count + 1"),a.createElement(u.Z,{type:"dashed",onClick:function(){o(1324)}},"\u975e\u5bf9\u8c61\u6570\u636e\u4e0d\u5904\u7406")),a.createElement("br",null),a.createElement("br",null),a.createElement("pre",null,JSON.stringify(t,null,2)))}n["default"]=o},79147:function(e,n,t){"use strict";t.r(n);t(71194);var r=t(48889),u=(t(63185),t(9676)),c=(t(9715),t(16579)),a=(t(47673),t(74485)),l=t(2824),o=(t(49111),t(19650)),i=(t(57663),t(71577)),f=(t(34792),t(48086)),s=t(67294),m=t(96296),v=function(){var e=(0,s.useRef)(null),n=function(){var n;null===(n=e.current)||void 0===n||n.onShow({name:"\u674e\u5c9a\u6e05",age:25,remember:!0})},t=function(){var n;null===(n=e.current)||void 0===n||n.onHide({name:"\u5434\u5f66\u7956",age:18,remember:!1})},r=function(){var n,t=null===(n=e.current)||void 0===n?void 0:n.getChildData();f.ZP.info("\u83b7\u5f97\u5230\u5b50\u7ec4\u4ef6\u6570\u636e\u4e3a:   ".concat(JSON.stringify(t,null,2))),console.log(" childData",t)};return s.createElement("div",{style:{border:"1px solid #888",padding:20}},s.createElement("h2",null,"\u8fd9\u662f\u7236\u7ec4\u4ef6"),s.createElement(o.Z,null,s.createElement(i.Z,{onClick:n}," \u7236\u7ec4\u4ef6\u8c03\u7528onShow\u4e8b\u4ef6\u5e76\u4f20\u53c2\u6570\u7ed9\u5b50\u7ec4\u4ef6"),s.createElement(i.Z,{onClick:t}," \u7236\u7ec4\u4ef6\u8c03\u7528onHide\u4e8b\u4ef6\u5e76\u4f20\u53c2\u6570\u7ed9\u5b50\u7ec4\u4ef6"),s.createElement(i.Z,{onClick:r}," \u7236\u7ec4\u4ef6\u83b7\u53d6\u5b50\u7ec4\u4ef6\u6570\u636e")),s.createElement(d,{funcRef:e}))};function d(e){var n=e.funcRef,t=(0,s.useState)(!1),o=(0,l.Z)(t,2),i=o[0],v=o[1],d=(0,m.x3)(n,{onShow:function(e){f.ZP.info("\u7236\u7ec4\u4ef6\u8c03\u7528\u4e86onShow\u5e76\u4f20\u53c2\u6570".concat(JSON.stringify(e,null,2))),console.log("\u7236\u7ec4\u4ef6\u8c03\u7528\u4e86onShow\u5e76\u4f20\u53c2\u6570 ",e),v(!0)},onHide:function(e){f.ZP.info("\u7236\u7ec4\u4ef6\u8c03\u7528\u4e86onHide\u5e76\u4f20\u53c2\u6570".concat(JSON.stringify(e,null,2))),console.log("\u7236\u7ec4\u4ef6\u8c03\u7528\u4e86onHide\u5e76\u4f20\u53c2\u6570 ",e),v(!1)}}),E=d.parentData,p=d.setParentData,Z=function(){p({title:"\u6211\u662f\u5b50\u7ec4\u4ef6\u6570\u636e",value:99}),v(!1)},g=function(){p(null),v(!1)};return s.createElement(s.Fragment,null,s.createElement(r.Z,{open:i,title:"\u8fd9\u662f\u5b50\u7ec4\u4ef6\u5f39\u7a97",onOk:Z,onCancel:g,okText:"\u70b9\u6211\u5411\u7236\u7ec4\u4ef6\u4f20\u6570\u636e"},s.createElement(c.Z,{name:"basic",labelCol:{span:5},wrapperCol:{span:19},initialValues:E},s.createElement(c.Z.Item,{label:"name",name:"name",rules:[{required:!0,message:"Please input your name!"}]},s.createElement(a.Z,null)),s.createElement(c.Z.Item,{label:"age",name:"age",rules:[{required:!0,message:"Please input your age!"}]},s.createElement(a.Z,null)),s.createElement(c.Z.Item,{name:"remember",valuePropName:"checked",wrapperCol:{offset:5,span:19}},s.createElement(u.Z,null,"Remember me")),s.createElement(c.Z.Item,{wrapperCol:{offset:5,span:19}},s.createElement("span",null,"\u7236\u7ec4\u4ef6\u4f20\u8fc7\u6765\u7684\u503c: "),s.createElement("pre",null,JSON.stringify(E,null,4))))))}n["default"]=v},51094:function(e,n,t){"use strict";t.r(n);t(57663);var r=t(71577),u=t(2824),c=t(67294),a=t(96296);function l(){var e=(0,c.useState)(0),n=(0,u.Z)(e,2),t=n[0],l=n[1],o=(0,a.Jh)(l,500),i=o.run;return c.createElement("div",null,c.createElement("p",{style:{marginTop:16}}," Clicked count: ",t," "),c.createElement(r.Z,{onClick:function(){i(t+1)}},"Click fast!"))}n["default"]=l},26715:function(e,n,t){"use strict";t.r(n);t(57663);var r=t(71577),u=(t(47673),t(74485)),c=t(2824),a=t(67294),l=t(96296);function o(){var e=(0,a.useState)(""),n=(0,c.Z)(e,2),t=n[0],o=n[1],i=(0,a.useState)(),f=(0,c.Z)(i,2),s=f[0],m=f[1],v=(0,l.Jh)(m,1e3),d=v.run,E=v.cancel,p=v.flush;return a.createElement("div",null,a.createElement(u.Z,{value:t,onChange:function(e){o(e.target.value),d(e.target.value)},placeholder:"Typed value",style:{width:280}}),a.createElement("p",{style:{margin:"16px 0"}},a.createElement(r.Z,{onClick:E},"Cancel Throttle")),a.createElement("p",{style:{margin:"16px 0"}},a.createElement(r.Z,{onClick:p},"flush Throttle")),a.createElement("p",null,"value: ",t),a.createElement("p",null,"throttleValue: ",s))}n["default"]=o},85382:function(e,n,t){"use strict";t.r(n);t(57663);var r=t(71577),u=t(2824),c=(t(34792),t(48086)),a=t(67294),l=t(96296),o=function(){return(0,l.EX)((function(){c.ZP.info("MyComponent\u7ec4\u4ef6\u5378\u8f7d")})),a.createElement("div",null,"\u6211\u662fMyComponent\u7ec4\u4ef6")};function i(){var e=(0,a.useState)(!0),n=(0,u.Z)(e,2),t=n[0],c=n[1];return a.createElement(a.Fragment,null,a.createElement(r.Z,{onClick:function(){return c((function(e){return!e}))}},t?"unmount":"mount"),t&&a.createElement(o,null))}n["default"]=i},69281:function(e,n,t){"use strict";t.r(n);t(57663);var r=t(71577),u=(t(34792),t(48086)),c=t(2824),a=t(67294),l=t(96296),o=function(){var e=(0,a.useState)(0),n=(0,c.Z)(e,2),t=n[0],o=n[1],i=(0,a.useState)(99),f=(0,c.Z)(i,2),s=f[0],m=f[1];return(0,l.mA)((function(){u.ZP.info("\u53ea\u6709\u5728age\u53d8\u5316\u65f6\u624d\u89e6\u53d1")}),[s]),a.createElement(a.Fragment,null,a.createElement("div",null,"\u53ea\u6709\u5728age\u53d8\u5316\u65f6\u624d\u89e6\u53d1"),a.createElement("div",null,"count: ",t),a.createElement("div",null,"age: ",s),a.createElement(r.Z,{onClick:function(){return o(t+1)}},"add count "),a.createElement(r.Z,{onClick:function(){return m(s+1)}},"add age "))};n["default"]=o},45913:function(e,n,t){"use strict";t.r(n);t(57663);var r=t(71577),u=(t(34792),t(48086)),c=t(2824),a=t(67294),l=t(96296),o=function(){var e=(0,a.useState)(0),n=(0,c.Z)(e,2),t=n[0],o=n[1];return(0,l.mA)((function(){u.ZP.info("\u7ec4\u4ef6\u66f4\u65b0\u89e6\u53d1")})),a.createElement(a.Fragment,null,a.createElement("div",null,"\u66f4\u65b0\u7ec4\u4ef6\u89e6\u53d1"),a.createElement("div",null,"count: ",t),a.createElement(r.Z,{onClick:function(){return o(t+1)}},"add count "))};n["default"]=o}}]);