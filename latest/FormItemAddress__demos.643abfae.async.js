(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[2235],{6171:function(s,a,e){"use strict";e.d(a,{Z:function(){return o}});var l=e(87462),n=e(67294),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"},c=f,d=e(13401),i=function(t,u){return n.createElement(d.Z,(0,l.Z)({},t,{ref:u,icon:c}))},o=n.forwardRef(i)},18073:function(s,a,e){"use strict";e.d(a,{Z:function(){return o}});var l=e(87462),n=e(67294),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},c=f,d=e(13401),i=function(t,u){return n.createElement(d.Z,(0,l.Z)({},t,{ref:u,icon:c}))},o=n.forwardRef(i)},99466:function(s,a,e){"use strict";e.r(a),e.d(a,{default:function(){return E}});var l=e(861),n=e.n(l),f=e(27424),c=e.n(f),d=e(4390),i=e(56591),o=e(67294),r=e(85893),t=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],u=function(){var x=d.Z.useForm(),y=c()(x,1),_=y[0],O=(0,o.useState)(t),b=c()(O,2),p=b[0],C=b[1],A=(0,o.useState)([]),P=c()(A,2),v=P[0],h=P[1];return(0,o.useEffect)(function(){fetch("https://unpkg.com/province-city-china@8.5.6/dist/level.json").then(function(g){return g.json()}).then(function(g){h(g)})},[]),(0,r.jsxs)(d.Z,{form:_,submitter:{buttonAlign:"center",resetText:"\u66F4\u65B0",resetButtonProps:{preventDefault:!0,onClick:function(){C(function($){return n()($)})}}},onFinish:function($){console.log("values",$)},children:[(0,r.jsx)(i.Z,{cascaderProps:{fieldNames:{label:"name",value:"code",children:"children"}},label:"\u5730\u5740\u9009\u62E9",required:!0,names:["location","address"],options:v}),(0,r.jsx)(i.Z,{label:"\u8BBE\u7F6E\u5F39\u51FA\u5C42\u9AD8\u5EA6",cascaderProps:{popupClassName:"my-lform-item-address-popup",fieldNames:{label:"name",value:"code",children:"children"}},required:!0,names:["location9","address9"],options:v}),(0,r.jsx)(i.Z,{label:"\u5DE6\u53F3\u5404\u5360\u4E00\u534A",required:!0,names:["location2","address1"],options:v,cascaderProps:{fieldNames:{label:"name",value:"code",children:"children"}},cascaderColProps:{xs:24,md:12,lg:12,xxl:12},inputColProps:{xs:24,md:12,lg:12,xxl:12}}),(0,r.jsx)(i.Z,{label:"\u5F00\u6237\u94F6\u884C",required:!0,names:["location1","address2"],options:p,placeholder:["\u8BF7\u9009\u62E9\u7701\u5E02","\u8BF7\u8F93\u5165\u94F6\u884C\u652F\u884C"]})]})},E=u},56591:function(s,a,e){"use strict";var l=e(42122),n=e.n(l),f=e(70215),c=e.n(f),d=e(71230),i=e(15746),o=e(13689),r=e(60296),t=e(89889),u=e(61117),E=e(67294),m=e(85893),x=["names","label","required","disabled","options","placeholder","inputFormProps","cascaderFormProps","cascaderProps","inputProps","inputColProps","cascaderColProps","style"],y={xs:24,md:12,lg:6,xxl:8},_={xs:24,md:12,lg:18,xxl:16},O=function(p){var C=p.names,A=p.label,P=p.required,v=P===void 0?!1:P,h=p.disabled,g=p.options,$=g===void 0?[]:g,I=p.placeholder,j=I===void 0?["\u8BF7\u9009\u62E9\u7701/\u5E02/\u533A","\u8BF7\u8F93\u5165\u8BE6\u7EC6\u5730\u5740"]:I,R=p.inputFormProps,Z=R===void 0?{}:R,S=p.cascaderFormProps,U=S===void 0?{}:S,W=p.cascaderProps,K=W===void 0?{}:W,L=p.inputProps,z=L===void 0?{}:L,B=p.inputColProps,H=B===void 0?{}:B,T=p.cascaderColProps,N=T===void 0?{}:T,G=p.style,X=c()(p,x),V=(0,E.useContext)(t.e),F=V.disabled;return(0,m.jsx)(u.Z,n()(n()({required:v,label:A,style:n()({marginBottom:0},G)},X),{},{children:(0,m.jsxs)(d.Z,{gutter:8,children:[(0,m.jsx)(i.Z,n()(n()(n()({},y),H),{},{children:(0,m.jsx)(u.Z,n()(n()({name:C[0],rules:[{validator:function(w,M){var D="";return(!M||(M==null?void 0:M.length)<=0)&&(D=v?"".concat(j[0]):""),D?Promise.reject(D):Promise.resolve()}}]},U),{},{children:(0,m.jsx)(o.Z,n()({disabled:h!=null?h:F,options:$,placeholder:"".concat(j[0])},K))}))})),(0,m.jsx)(i.Z,n()(n()(n()({},_),N),{},{children:(0,m.jsx)(u.Z,n()(n()({name:C[1],rules:[{validator:function(w,M){var D="";return M||(D=v?"".concat(j[1]):""),D?Promise.reject(D):Promise.resolve()}}]},Z),{},{children:(0,m.jsx)(r.Z,n()({disabled:h!=null?h:F,placeholder:"".concat(j[1]),allowClear:!0,autoComplete:"off"},z))}))}))]})}))};a.Z=O},61117:function(s,a,e){"use strict";var l=e(84640);a.Z=l.Z},4390:function(s,a,e){"use strict";var l=e(42122),n=e.n(l),f=e(70215),c=e.n(f),d=e(26713),i=e(638),o=e(61117),r=e(89889),t=e(85893),u=["submitter"],E=["render"],m=function(y){var _=y.submitter,O=c()(y,u),b=typeof _=="boolean"||!_?{}:_,p=b.render,C=c()(b,E),A=typeof _=="undefined"||_?n()({render:function(v){var h=Array.isArray(v)&&v.length>1?(0,t.jsx)(d.Z,{children:v}):v;return(0,t.jsx)(i.Z.Item,{colon:!1,className:"lightd-form-submitter",style:{marginBottom:0,paddingLeft:typeof(_==null?void 0:_.buttonAlign)=="number"?"".concat(_==null?void 0:_.buttonAlign,"px"):0},wrapperCol:b==null?void 0:b.wrapperCol,children:(0,t.jsx)("div",{style:{display:"flex",justifyContent:typeof(_==null?void 0:_.buttonAlign)=="string"?_==null?void 0:_.buttonAlign:"initial"},children:p?(0,t.jsx)(t.Fragment,{children:p(h,b)}):h})})}},C):!1;return(0,t.jsx)(r.Z,n()({submitter:A,contentRender:function(v,h){return(0,t.jsxs)(t.Fragment,{children:[v,h]})}},O))};m.Item=o.Z,m.List=i.Z.List,m.Provider=i.Z.Provider,m.ErrorList=i.Z.ErrorList,m.useForm=i.Z.useForm,m.useFormInstance=i.Z.useFormInstance,m.useWatch=i.Z.useWatch,a.Z=m},22638:function(s,a,e){"use strict";var l=e(67294),n=e(92770),f=e(31663);function c(d){f.Z&&((0,n.mf)(d)||console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof d)));var i=(0,l.useRef)(d);i.current=(0,l.useMemo)(function(){return d},[d]);var o=(0,l.useRef)();return o.current||(o.current=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return i.current.apply(this,r)}),o.current}a.Z=c},92652:function(s,a,e){"use strict";e.d(a,{Z:function(){return i}});var l=e(70655),n=e(67294),f=function(){var o=(0,n.useRef)(!1);return(0,n.useEffect)(function(){return o.current=!1,function(){o.current=!0}},[]),o},c=f;function d(o){var r=c(),t=(0,l.CR)((0,n.useState)(o),2),u=t[0],E=t[1],m=(0,n.useCallback)(function(x){r.current||E(x)},[]);return[u,m]}var i=d},77598:function(s,a,e){"use strict";e.d(a,{Z:function(){return c}});var l=e(67294),n=function(d){return function(i,o){var r=(0,l.useRef)(!1);d(function(){return function(){r.current=!1}},[]),d(function(){if(!r.current)r.current=!0;else return i()},o)}},f=null,c=n(l.useEffect)},92770:function(s,a,e){"use strict";e.d(a,{G7:function(){return i},hj:function(){return d},jn:function(){return c},mf:function(){return n}});var l=function(o){return o!==null&&typeof o=="object"},n=function(o){return typeof o=="function"},f=function(o){return typeof o=="string"},c=function(o){return typeof o=="boolean"},d=function(o){return typeof o=="number"},i=function(o){return typeof o=="undefined"}},31663:function(s,a){"use strict";var e=!1;a.Z=e},63185:function(s,a,e){"use strict";e.d(a,{C2:function(){return o}});var l=e(27431),n=e(14747),f=e(45503),c=e(67968);const d=new l.Keyframes("antCheckboxEffect",{"0%":{transform:"scale(1)",opacity:.5},"100%":{transform:"scale(1.6)",opacity:0}}),i=r=>{const{checkboxCls:t}=r,u=`${t}-wrapper`;return[{[`${t}-group`]:Object.assign(Object.assign({},(0,n.Wf)(r)),{display:"inline-flex",flexWrap:"wrap",columnGap:r.marginXS,[`> ${r.antCls}-row`]:{flex:1}}),[u]:Object.assign(Object.assign({},(0,n.Wf)(r)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},[`& + ${u}`]:{marginInlineStart:0},[`&${u}-in-form-item`]:{'input[type="checkbox"]':{width:14,height:14}}}),[t]:Object.assign(Object.assign({},(0,n.Wf)(r)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",alignSelf:"center",[`${t}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,[`&:focus-visible + ${t}-inner`]:Object.assign({},(0,n.oN)(r))},[`${t}-inner`]:{boxSizing:"border-box",position:"relative",top:0,insetInlineStart:0,display:"block",width:r.checkboxSize,height:r.checkboxSize,direction:"ltr",backgroundColor:r.colorBgContainer,border:`${r.lineWidth}px ${r.lineType} ${r.colorBorder}`,borderRadius:r.borderRadiusSM,borderCollapse:"separate",transition:`all ${r.motionDurationSlow}`,"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"21.5%",display:"table",width:r.checkboxSize/14*5,height:r.checkboxSize/14*8,border:`${r.lineWidthBold}px solid ${r.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${r.motionDurationFast} ${r.motionEaseInBack}, opacity ${r.motionDurationFast}`}},"& + span":{paddingInlineStart:r.paddingXS,paddingInlineEnd:r.paddingXS}})},{[t]:{"&-indeterminate":{[`${t}-inner`]:{"&:after":{top:"50%",insetInlineStart:"50%",width:r.fontSizeLG/2,height:r.fontSizeLG/2,backgroundColor:r.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}}}}},{[`${u}:hover ${t}:after`]:{visibility:"visible"},[`
        ${u}:not(${u}-disabled),
        ${t}:not(${t}-disabled)
      `]:{[`&:hover ${t}-inner`]:{borderColor:r.colorPrimary}},[`${u}:not(${u}-disabled)`]:{[`&:hover ${t}-checked:not(${t}-disabled) ${t}-inner`]:{backgroundColor:r.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${t}-checked:not(${t}-disabled):after`]:{borderColor:r.colorPrimaryHover}}},{[`${t}-checked`]:{[`${t}-inner`]:{backgroundColor:r.colorPrimary,borderColor:r.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`all ${r.motionDurationMid} ${r.motionEaseOutBack} ${r.motionDurationFast}`}},"&:after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderRadius:r.borderRadiusSM,visibility:"hidden",border:`${r.lineWidthBold}px solid ${r.colorPrimary}`,animationName:d,animationDuration:r.motionDurationSlow,animationTimingFunction:"ease-in-out",animationFillMode:"backwards",content:'""',transition:`all ${r.motionDurationSlow}`}},[`
        ${u}-checked:not(${u}-disabled),
        ${t}-checked:not(${t}-disabled)
      `]:{[`&:hover ${t}-inner`]:{backgroundColor:r.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${t}:after`]:{borderColor:r.colorPrimaryHover}}},{[`${u}-disabled`]:{cursor:"not-allowed"},[`${t}-disabled`]:{[`&, ${t}-input`]:{cursor:"not-allowed",pointerEvents:"none"},[`${t}-inner`]:{background:r.colorBgContainerDisabled,borderColor:r.colorBorder,"&:after":{borderColor:r.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:r.colorTextDisabled},[`&${t}-indeterminate ${t}-inner::after`]:{background:r.colorTextDisabled}}}]};function o(r,t){const u=(0,f.TS)(t,{checkboxCls:`.${r}`,checkboxSize:t.controlInteractiveSize});return[i(u)]}a.ZP=(0,c.Z)("Checkbox",(r,t)=>{let{prefixCls:u}=t;return[o(u,r)]})},15746:function(s,a,e){"use strict";var l=e(21584);a.Z=l.Z},71230:function(s,a,e){"use strict";var l=e(92820);a.Z=l.Z},63405:function(s,a,e){var l=e(73897);function n(f){if(Array.isArray(f))return l(f)}s.exports=n,s.exports.__esModule=!0,s.exports.default=s.exports},79498:function(s){function a(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}s.exports=a,s.exports.__esModule=!0,s.exports.default=s.exports},42281:function(s){function a(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}s.exports=a,s.exports.__esModule=!0,s.exports.default=s.exports},861:function(s,a,e){var l=e(63405),n=e(79498),f=e(86116),c=e(42281);function d(i){return l(i)||n(i)||f(i)||c()}s.exports=d,s.exports.__esModule=!0,s.exports.default=s.exports}}]);
