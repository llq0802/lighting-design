(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[2235],{6171:function(r,a,e){"use strict";e.d(a,{Z:function(){return s}});var n=e(87462),t=e(67294),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"},l=d,v=e(13401),o=function(i,m){return t.createElement(v.Z,(0,n.Z)({},i,{ref:m,icon:l}))},s=t.forwardRef(o)},18073:function(r,a,e){"use strict";e.d(a,{Z:function(){return s}});var n=e(87462),t=e(67294),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},l=d,v=e(13401),o=function(i,m){return t.createElement(v.Z,(0,n.Z)({},i,{ref:m,icon:l}))},s=t.forwardRef(o)},99466:function(r,a,e){"use strict";e.r(a),e.d(a,{default:function(){return h}});var n=e(861),t=e.n(n),d=e(27424),l=e.n(d),v=e(4390),o=e(56591),s=e(67294),u=e(85893),i=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],m=function(){var O=v.Z.useForm(),M=l()(O,1),c=M[0],D=(0,s.useState)(i),P=l()(D,2),_=P[0],b=P[1],j=(0,s.useState)([]),x=l()(j,2),p=x[0],E=x[1];return(0,s.useEffect)(function(){fetch("https://unpkg.com/province-city-china@8.5.6/dist/level.json").then(function(g){return g.json()}).then(function(g){E(g)})},[]),(0,u.jsxs)(v.Z,{form:c,submitter:{buttonAlign:"center",resetText:"\u66F4\u65B0",resetButtonProps:{preventDefault:!0,onClick:function(){b(function(F){return t()(F)})}}},onFinish:function(F){console.log("values",F)},children:[(0,u.jsx)(o.Z,{cascaderProps:{fieldNames:{label:"name",value:"code",children:"children"}},label:"\u5730\u5740\u9009\u62E9",required:!0,names:["location","address"],options:p}),(0,u.jsx)(o.Z,{label:"\u8BBE\u7F6E\u5F39\u51FA\u5C42\u9AD8\u5EA6",cascaderProps:{popupClassName:"my-lform-item-address-popup",fieldNames:{label:"name",value:"code",children:"children"}},required:!0,names:["location9","address9"],options:p}),(0,u.jsx)(o.Z,{label:"\u5DE6\u53F3\u5404\u5360\u4E00\u534A",required:!0,names:["location2","address1"],options:p,cascaderProps:{fieldNames:{label:"name",value:"code",children:"children"}},cascaderColProps:{xs:24,md:12,lg:12,xxl:12},inputColProps:{xs:24,md:12,lg:12,xxl:12}}),(0,u.jsx)(o.Z,{label:"\u5F00\u6237\u94F6\u884C",required:!0,names:["location1","address2"],options:_,placeholder:["\u8BF7\u9009\u62E9\u7701\u5E02","\u8BF7\u8F93\u5165\u94F6\u884C\u652F\u884C"]})]})},h=m},56591:function(r,a,e){"use strict";var n=e(42122),t=e.n(n),d=e(70215),l=e.n(d),v=e(71230),o=e(15746),s=e(13689),u=e(60296),i=e(89889),m=e(61117),h=e(67294),f=e(85893),O=["names","label","required","disabled","options","placeholder","inputFormProps","cascaderFormProps","cascaderProps","inputProps","inputColProps","cascaderColProps","style"],M={xs:24,md:12,lg:6,xxl:8},c={xs:24,md:12,lg:18,xxl:16},D=function(_){var b=_.names,j=_.label,x=_.required,p=x===void 0?!1:x,E=_.disabled,g=_.options,F=g===void 0?[]:g,y=_.placeholder,R=y===void 0?["\u8BF7\u9009\u62E9\u7701/\u5E02/\u533A","\u8BF7\u8F93\u5165\u8BE6\u7EC6\u5730\u5740"]:y,L=_.inputFormProps,S=L===void 0?{}:L,Z=_.cascaderFormProps,K=Z===void 0?{}:Z,I=_.cascaderProps,$=I===void 0?{}:I,B=_.inputProps,z=B===void 0?{}:B,T=_.inputColProps,N=T===void 0?{}:T,W=_.cascaderColProps,H=W===void 0?{}:W,V=_.style,J=l()(_,O),G=(0,h.useContext)(i.e),U=G.disabled;return(0,f.jsx)(m.Z,t()(t()({required:p,label:j,style:t()({marginBottom:0},V)},J),{},{children:(0,f.jsxs)(v.Z,{gutter:8,children:[(0,f.jsx)(o.Z,t()(t()(t()({},M),N),{},{children:(0,f.jsx)(m.Z,t()(t()({name:b[0],rules:[{validator:function(X,C){var A="";return(!C||(C==null?void 0:C.length)<=0)&&(A=p?"".concat(R[0]):""),A?Promise.reject(A):Promise.resolve()}}]},K),{},{children:(0,f.jsx)(s.Z,t()({disabled:E!=null?E:U,options:F,placeholder:"".concat(R[0])},$))}))})),(0,f.jsx)(o.Z,t()(t()(t()({},c),H),{},{children:(0,f.jsx)(m.Z,t()(t()({name:b[1],rules:[{validator:function(X,C){var A="";return C||(A=p?"".concat(R[1]):""),A?Promise.reject(A):Promise.resolve()}}]},S),{},{children:(0,f.jsx)(u.Z,t()({disabled:E!=null?E:U,placeholder:"".concat(R[1]),allowClear:!0,autoComplete:"off"},z))}))}))]})}))};a.Z=D},61117:function(r,a,e){"use strict";var n=e(84640);a.Z=n.Z},4390:function(r,a,e){"use strict";var n=e(42122),t=e.n(n),d=e(70215),l=e.n(d),v=e(26713),o=e(638),s=e(61117),u=e(89889),i=e(85893),m=["submitter"],h=["render"],f=function(M){var c=M.submitter,D=l()(M,m),P=typeof c=="boolean"||!c?{}:c,_=P.render,b=l()(P,h),j=typeof c=="undefined"||c?t()({render:function(p){var E=Array.isArray(p)&&p.length>1?(0,i.jsx)(v.Z,{children:p}):p;return(0,i.jsx)(o.Z.Item,{colon:!1,className:"lightd-form-submitter",style:{marginBottom:0,paddingLeft:typeof(c==null?void 0:c.buttonAlign)=="number"?"".concat(c==null?void 0:c.buttonAlign,"px"):0},wrapperCol:P==null?void 0:P.wrapperCol,children:(0,i.jsx)("div",{style:{display:"flex",justifyContent:typeof(c==null?void 0:c.buttonAlign)=="string"?c==null?void 0:c.buttonAlign:"initial"},children:_?(0,i.jsx)(i.Fragment,{children:_(E,P)}):E})})}},b):!1;return(0,i.jsx)(u.Z,t()({submitter:j,contentRender:function(p,E){return(0,i.jsxs)(i.Fragment,{children:[p,E]})}},D))};f.Item=s.Z,f.List=o.Z.List,f.Provider=o.Z.Provider,f.ErrorList=o.Z.ErrorList,f.useForm=o.Z.useForm,f.useFormInstance=o.Z.useFormInstance,f.useWatch=o.Z.useWatch,a.Z=f},93812:function(r,a,e){"use strict";e.d(a,{Z:function(){return o}});var n=e(67294),t=e(18446),d=e.n(t),l=function(s,u){return s===void 0&&(s=[]),u===void 0&&(u=[]),d()(s,u)},v=function(s){return function(u,i){var m=(0,n.useRef)(),h=(0,n.useRef)(0);(i===void 0||!l(i,m.current))&&(m.current=i,h.current+=1),s(u,[h.current])}},o=v(n.useEffect)},92652:function(r,a,e){"use strict";e.d(a,{Z:function(){return o}});var n=e(70655),t=e(67294),d=function(){var s=(0,t.useRef)(!1);return(0,t.useEffect)(function(){return s.current=!1,function(){s.current=!0}},[]),s},l=d;function v(s){var u=l(),i=(0,n.CR)((0,t.useState)(s),2),m=i[0],h=i[1],f=(0,t.useCallback)(function(O){u.current||h(O)},[]);return[m,f]}var o=v},77598:function(r,a,e){"use strict";e.d(a,{Z:function(){return l}});var n=e(67294),t=function(v){return function(o,s){var u=(0,n.useRef)(!1);v(function(){return function(){u.current=!1}},[]),v(function(){if(!u.current)u.current=!0;else return o()},s)}},d=null,l=t(n.useEffect)},15746:function(r,a,e){"use strict";var n=e(21584);a.Z=n.Z},71230:function(r,a,e){"use strict";var n=e(92820);a.Z=n.Z},18446:function(r,a,e){var n=e(90939);function t(d,l){return n(d,l)}r.exports=t},63405:function(r,a,e){var n=e(73897);function t(d){if(Array.isArray(d))return n(d)}r.exports=t,r.exports.__esModule=!0,r.exports.default=r.exports},79498:function(r){function a(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}r.exports=a,r.exports.__esModule=!0,r.exports.default=r.exports},42281:function(r){function a(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}r.exports=a,r.exports.__esModule=!0,r.exports.default=r.exports},861:function(r,a,e){var n=e(63405),t=e(79498),d=e(86116),l=e(42281);function v(o){return n(o)||t(o)||d(o)||l()}r.exports=v,r.exports.__esModule=!0,r.exports.default=r.exports}}]);
