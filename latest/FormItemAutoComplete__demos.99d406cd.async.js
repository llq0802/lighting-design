"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[3152],{96136:function(j,m,e){e.r(m);var v=e(27424),_=e.n(v),C=e(14104),c=e(4390),E=e(58897),r=e(67294),d=e(85893),P=function(o){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return{value:o.repeat(b),label:o.repeat(b)}},l=["@qq.com","@126.com","@163.com","@sina.com","@gmail.com","@hotmail.com","@yahoo.com","@outlook.com"],D=function(){var o=c.Z.useForm(),b=_()(o,1),n=b[0],t=(0,r.useState)([]),p=_()(t,2),s=p[0],h=p[1],M=function(i){h(i?[P(i,1),P(i,2),P(i,3)]:[])},A=(0,r.useState)([]),O=_()(A,2),a=O[0],g=O[1],L=function(i){var B=i.split("@"),I=_()(B,2),f=I[0],F=I[1],S=i?l.filter(function(y){return F?y.indexOf(F)>0:!0}).map(function(y){var R=f+y;return{label:R,value:R}}):[];g(S)};return(0,d.jsxs)(c.Z,{form:n,labelWrap:!0,labelCol:{flex:"110px"},submitter:{buttonAlign:110},children:[(0,d.jsx)(E.Z,{label:"\u81EA\u52A8\u8054\u60F3",required:!0,name:"LFormItemAutoComplete1",onSearch:M,options:s}),(0,d.jsx)(E.Z,{label:"\u90AE\u7BB1\u8054\u60F3",required:!0,name:"LFormItemAutoComplete2",validateTrigger:"onBlur",options:a,onSearch:L,onFocus:function(i){return L(i.target.value)}}),(0,d.jsx)(E.Z,{label:"\u81EA\u5B9A\u4E49\u8F93\u5165\u6846",required:!0,name:"LFormItemAutoComplete3",onSearch:M,options:a,inputRender:function(){return(0,d.jsx)(C.Z,{})}})]})};m.default=D},58897:function(j,m,e){var v=e(42122),_=e.n(v),C=e(70215),c=e.n(C),E=e(49288),r=e(89889),d=e(84640),P=e(33168),l=e(67294),D=e(85893),W=["onSearch","onSelect","onFocus","onBlur","options","inputRender","autoCompleteProps","required","placeholder","size","disabled"],o=function(n){var t=n.onSearch,p=n.onSelect,s=n.onFocus,h=n.onBlur,M=n.options,A=n.inputRender,O=n.autoCompleteProps,a=n.required,g=n.placeholder,L=n.size,u=n.disabled,i=c()(n,W),B=(0,P.JY)({placeholder:g,restProps:i,isSelectType:!1}),I=(0,l.useContext)(r.e),f=I.disabled;return(0,D.jsx)(d.Z,_()(_()({required:a,placeholder:B},i),{},{children:A?(0,D.jsx)(E.Z,_()(_()({size:L,disabled:u!=null?u:f,allowClear:!0,options:M,style:{width:"100%"},placeholder:B,onSelect:p,onSearch:t,onFocus:s,onBlur:h},O),{},{children:A()})):(0,D.jsx)(E.Z,_()({size:L,disabled:u!=null?u:f,allowClear:!0,options:M,style:{width:"100%"},placeholder:B,onSelect:p,onSearch:t,onFocus:s,onBlur:h},O))}))};m.Z=o},61117:function(j,m,e){var v=e(84640);m.Z=v.Z},4390:function(j,m,e){var v=e(42122),_=e.n(v),C=e(70215),c=e.n(C),E=e(93421),r=e(99859),d=e(61117),P=e(89889),l=e(85893),D=["submitter"],W=["render"],o=function(n){var t=n.submitter,p=c()(n,D),s=typeof t=="boolean"||!t?{}:t,h=s.render,M=c()(s,W),A=typeof t=="undefined"||t?_()({render:function(a){var g=Array.isArray(a)&&a.length>1?(0,l.jsx)(E.Z,{children:a}):a;return(0,l.jsx)(r.Z.Item,{colon:!1,className:"lightd-form-submitter",style:{marginBottom:0,paddingLeft:typeof(t==null?void 0:t.buttonAlign)=="number"?"".concat(t==null?void 0:t.buttonAlign,"px"):0},wrapperCol:s==null?void 0:s.wrapperCol,children:(0,l.jsx)("div",{style:{display:"flex",justifyContent:typeof(t==null?void 0:t.buttonAlign)=="string"?t==null?void 0:t.buttonAlign:"initial"},children:h?(0,l.jsx)(l.Fragment,{children:h(g,s)}):g})})}},M):!1;return(0,l.jsx)(P.Z,_()({submitter:A,contentRender:function(a,g){return(0,l.jsxs)(l.Fragment,{children:[a,g]})}},p))};o.Item=d.Z,o.List=r.Z.List,o.Provider=r.Z.Provider,o.ErrorList=r.Z.ErrorList,o.useForm=r.Z.useForm,o.useFormInstance=r.Z.useFormInstance,o.useWatch=r.Z.useWatch,m.Z=o}}]);
