(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[3025],{24018:function(L,c,e){"use strict";e.d(c,{Z:function(){return h}});var a=e(87462),s=e(67294),P={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"minus-circle",theme:"outlined"},v=P,p=e(13401),O=function(_,f){return s.createElement(p.Z,(0,a.Z)({},_,{ref:f,icon:v}))},h=s.forwardRef(O)},38308:function(L,c,e){"use strict";e.d(c,{Z:function(){return h}});var a=e(87462),s=e(67294),P={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},v=P,p=e(13401),O=function(_,f){return s.createElement(p.Z,(0,a.Z)({},_,{ref:f,icon:v}))},h=s.forwardRef(O)},73736:function(L,c,e){"use strict";e.r(c);var a=e(97857),s=e.n(a),P=e(13769),v=e.n(P),p=e(24018),O=e(38308),h=e(78957),l=e(14726),_=e(4390),f=e(21478),j=e(8464),R=e(61117),u=e(85893),F=["key","name"],m=function(){return(0,u.jsx)("div",{children:(0,u.jsxs)(_.Z,{onFinish:function(A){console.log("values",A)},submitter:{buttonAlign:"center"},children:[(0,u.jsx)(f.Z,{name:"input",label:"\u5176\u4ED6\u8F93\u5165\u7684\u5B57\u6BB5"}),(0,u.jsx)(j.Z,{name:"list",children:function(A,T,U){var B=T.add,M=T.remove,x=T.move,E=U.errors;return(0,u.jsxs)(u.Fragment,{children:[A.map(function(t){var i=t.key,n=t.name,o=v()(t,F);return(0,u.jsx)(R.Z,{label:"\u540D\u5B57",style:{marginBottom:0},children:(0,u.jsxs)(h.Z,{style:{display:"flex",width:"100%"},align:"baseline",children:[(0,u.jsx)(f.Z,s()(s()({},o),{},{placeholder:"\u8BF7\u8F93\u5165 First \u540D",required:!0,name:[n,"first"]})),(0,u.jsx)(f.Z,s()(s()({},o),{},{placeholder:"\u8BF7\u8F93\u5165 Last \u540D",required:!0,name:[n,"last"]})),(0,u.jsx)(p.Z,{onClick:function(){return M(n)}}),(0,u.jsx)(O.Z,{onClick:function(){return B()}})]},i)},i)}),(0,u.jsx)(R.Z,{children:(0,u.jsx)(l.ZP,{type:"dashed",onClick:function(){return B()},block:!0,icon:(0,u.jsx)(O.Z,{}),children:"\u589E\u52A0\u4E00\u9879"})})]})}})]})})};c.default=m},9200:function(L,c,e){"use strict";e.r(c);var a=e(97857),s=e.n(a),P=e(15009),v=e.n(P),p=e(99289),O=e.n(p),h=e(24018),l=e(38308),_=e(14726),f=e(4390),j=e(8464),R=e(61117),u=e(21478),F=e(67294),m=e(85893),C={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}},K={wrapperCol:{xs:{span:24,offset:0},sm:{span:20,offset:4}}},A=function(){var U=function(M){console.log("Received values of form:",M)};return(0,m.jsx)(f.Z,{name:"dynamic_form_item",submitter:{buttonAlign:"center"},onFinish:U,children:(0,m.jsx)(j.Z,{name:"names",rules:[{validator:function(){var B=O()(v()().mark(function x(E,t){return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!(!t||t.length<2)){n.next=2;break}return n.abrupt("return",Promise.reject(new Error("\u81F3\u5C11\u9700\u8981\u4E24\u9879!")));case 2:case"end":return n.stop()}},x)}));function M(x,E){return B.apply(this,arguments)}return M}()}],children:function(M,x,E){var t=x.add,i=x.remove,n=E.errors;return(0,m.jsxs)(m.Fragment,{children:[M.map(function(o){return(0,m.jsx)(R.Z,{label:"Label",children:(0,m.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,m.jsx)(u.Z,s()(s()({},o),{},{validateTrigger:["onChange","onBlur"],style:{width:"95%",marginBottom:0}})),M.length>1?(0,m.jsx)(h.Z,{className:"dynamic-delete-button",onClick:function(){return i(o.name)}}):null]})},o.key)}),(0,m.jsxs)(R.Z,{children:[(0,m.jsx)(_.ZP,{block:!0,type:"dashed",onClick:function(){return t()},icon:(0,m.jsx)(l.Z,{}),style:{marginBottom:20},children:"\u589E\u52A0\u4E00\u9879"}),(0,m.jsx)(_.ZP,{block:!0,type:"dashed",onClick:function(){return t("\u6DFB\u52A0\u5728\u5934\u90E8\u7684\u6570\u636E",0)},icon:(0,m.jsx)(l.Z,{}),children:"\u589E\u52A0\u4E00\u9879\u5728\u5934\u90E8\uFF0C\u5E76\u6709\u9ED8\u8BA4\u503C"}),(0,m.jsx)(f.Z.ErrorList,{errors:n})]})]})}})})};c.default=A},93356:function(L,c,e){"use strict";e.r(c);var a=e(97857),s=e.n(a),P=e(5574),v=e.n(P),p=e(24018),O=e(38308),h=e(99859),l=e(78957),_=e(14726),f=e(4390),j=e(46368),R=e(8464),u=e(61117),F=e(21478),m=e(67294),C=e(85893),K={Beijing:[{label:"\u5317\u4EAC1",value:"Beijing1"},{label:"\u5317\u4EAC2",value:"Beijing2"},{label:"\u5317\u4EAC3",value:"Beijing3"}],Shanghai:[{label:"\u4E0A\u6D771",value:"Shanghai1"},{label:"\u4E0A\u6D772",value:"Shanghai2"},{label:"\u4E0A\u6D773",value:"Shanghai3"}],Chongqing:[{label:"\u91CD\u5E861",value:"chongqing1"},{label:"\u91CD\u5E862",value:"chongqing2"},{label:"\u91CD\u5E863",value:"chongqing3"}]},A=function(){var U=h.Z.useForm(),B=v()(U,1),M=B[0],x=function(t){console.log("Received values of form:",t)};return(0,C.jsxs)(f.Z,{form:M,name:"dynamic_form_complex",onFinish:x,style:{maxWidth:600},autoComplete:"off",onValuesChange:function(t,i){console.log("changedValues",t),console.log("values",i)},children:[(0,C.jsx)(j.Z,{name:"area",label:"\u533A\u57DF",options:[{label:"\u5317\u4EAC",value:"Beijing"},{label:"\u4E0A\u6D77",value:"Shanghai"},{label:"\u91CD\u5E86",value:"Chongqing"}],selectProps:{onChange:function(t){console.log("val",t)}}}),(0,C.jsx)(R.Z,{name:"sights",children:function(t,i){var n=i.add,o=i.remove;return(0,C.jsxs)(C.Fragment,{children:[t.map(function(d){return(0,C.jsxs)(l.Z,{align:"baseline",children:[(0,C.jsx)(u.Z,{noStyle:!0,shouldUpdate:function(g,D){return g.area!==D.area||g.sights!==D.sights},children:function(){return(0,C.jsx)(j.Z,s()(s()({},d),{},{required:!0,label:"\u666F\u70B9",disabled:!M.getFieldValue("area"),name:[d.name,"sight"],options:K[M.getFieldValue("area")]||[]}))}}),(0,C.jsx)(F.Z,s()(s()({},d),{},{label:"\u4EF7\u683C",required:!0,name:[d.name,"price"]})),(0,C.jsx)(p.Z,{onClick:function(){return o(d.name)}})]},d.key)}),(0,C.jsx)(u.Z,{children:(0,C.jsx)(_.ZP,{type:"dashed",onClick:function(){return n()},block:!0,icon:(0,C.jsx)(O.Z,{}),children:"\u65B0\u589E\u666F\u70B9"})})]})}})]})};c.default=A},21478:function(L,c,e){"use strict";e.d(c,{Z:function(){return x}});var a=e(97857),s=e.n(a),P=e(13769),v=e.n(P),p=e(89889),O=e(84640),h=e(33168),l=e(40964),_=e(67294),f=e(5574),j=e.n(f),R=e(42170),u=e(22638),F=e(69677),m=e(85893),C=["value","onChange","type","disabledWhiteSpace"],K=function(t,i){var n=t;if((i==="phone"||i==="bankCard")&&window.isNaN(n)){var o;return console.warn("lighting-design: phone \u6216 bankCard \u7C7B\u578B\u7684 Input \u53EA\u80FD\u8F93\u5165\u6570\u5B57"),((o=n.match(l.zj))===null||o===void 0?void 0:o.join(""))||""}if(i==="idCard"){var d;if(window.isNaN(n==null?void 0:n.slice(0,17))){var r;return console.warn("lighting-design: idCard \u7C7B\u578B\u7684 Input \u53EA\u80FD\u8F93\u516518\u4F4D\u6570\u5B57 (\u6700\u540E\u4E00\u4F4D\u53EF\u4E3A\u6570\u5B57\u6216\u5B57\u7B26\u5927\u5C0F\u5199 X )"),((r=n.match(l.zj))===null||r===void 0?void 0:r.join(""))||""}if(n.length===18&&window.isNaN(n==null?void 0:n.at(-1))&&(n==null||(d=n.at(-1))===null||d===void 0?void 0:d.toLocaleLowerCase())!=="x")return console.warn("lighting-design: idCard \u7C7B\u578B\u7684 Input \u53EA\u80FD\u8F93\u516518\u4F4D\u6570\u5B57 (\u6700\u540E\u4E00\u4F4D\u53EF\u4E3A\u6570\u5B57\u6216\u5B57\u7B26\u5927\u5C0F\u5199 X )"),(n==null?void 0:n.slice(0,-1))||""}return n},A=function(t){var i=t.value,n=t.onChange,o=t.type,d=t.disabledWhiteSpace,r=v()(t,C),g=(0,_.useRef)(!1),D=(0,_.useState)(function(){return i}),H=j()(D,2),N=H[0],$=H[1];(0,R.Z)(function(){$(i)},[i]);var S=(0,_.useMemo)(function(){return o==="phone"||o==="idCard"||o==="bankCard"?"text":o},[o]),z=(0,_.useMemo)(function(){return o==="phone"?11:o==="idCard"?18:void 0},[o]),X=(0,u.Z)(function(y){var I=y.target.value;d&&(I=I.replace(l.wr,""));var W=K(I,o);$(W),!g.current&&(n==null||n(W))});return(0,m.jsx)(F.Z,s()(s()({allowClear:!0,autoComplete:"off",type:S,maxLength:z},r),{},{onCompositionStart:function(I){var W;g.current=!0,r==null||(W=r.onCompositionStart)===null||W===void 0||W.call(r,I)},onCompositionEnd:function(I){var W;if(g.current=!1,h.i7){var Y,J=K((Y=I.target)===null||Y===void 0?void 0:Y.value,o);n==null||n(J)}r==null||(W=r.onCompositionEnd)===null||W===void 0||W.call(r,I)},value:N,onChange:X}))},T=A;function U(E,t,i){var n=void 0;return E==="phone"&&(n=[{required:t,message:i||"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7\u683C\u5F0F!",pattern:l.Dd}]),E==="idCard"&&(n=[{required:t,message:i||"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u8EAB\u4EFD\u8BC1\u683C\u5F0F!",pattern:l.LE}]),E==="url"&&(n=[{required:t,message:i||"\u8BF7\u8F93\u5165\u6B63\u786E\u7684URL\u7F51\u5740\u683C\u5F0F!",pattern:l.Kp}]),E==="bankCard"&&(n=[{required:t,message:i||"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u94F6\u884C\u5361\u683C\u5F0F!",pattern:l.Wj}]),E==="email"&&(n=[{required:t,message:i||"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u683C\u5F0F!",pattern:l.sM}]),E==="chinese"&&(n=[{required:t,message:i||"\u8BF7\u8F93\u5165\u4E2D\u6587\u6C49\u5B57!",pattern:l.Zd}]),n}var B=["size","disabled","type","disabledWhiteSpace","required","placeholder","inputProps"],M=function(t){var i,n=t.size,o=t.disabled,d=t.type,r=t.disabledWhiteSpace,g=r===void 0?!1:r,D=t.required,H=t.placeholder,N=t.inputProps,$=N===void 0?l.FD:N,S=v()(t,B),z=(0,h.JY)({placeholder:H,restProps:S}),X=(0,_.useContext)(p.e),y=X.disabled,I=U(d,!!D,(S==null||(i=S.messageVariables)===null||i===void 0?void 0:i.label)||z);return(0,m.jsx)(O.Z,s()(s()({placeholder:z,required:D,rules:I},S),{},{children:(0,m.jsx)(T,s()({size:n,disabled:o!=null?o:y,placeholder:z,type:d,disabledWhiteSpace:g},$))}))},x=M},8464:function(L,c,e){"use strict";var a=e(4390);c.Z=a.Z.List},2477:function(L,c,e){"use strict";e.d(c,{Z:function(){return O}});var a=e(67294),s=e(18446),P=e.n(s),v=function(h,l){return h===void 0&&(h=[]),l===void 0&&(l=[]),P()(h,l)},p=function(h){return function(l,_){var f=(0,a.useRef)(),j=(0,a.useRef)(0);(_===void 0||!v(_,f.current))&&(f.current=_,j.current+=1),h(l,[j.current])}},O=p(a.useEffect)},34041:function(L,c,e){"use strict";var a=e(67294),s=e(13144),P=e.n(s),v=e(88905),p=e(10366),O=e(87263),h=e(33603),l=e(8745),_=e(9708),f=e(53124),j=e(88258),R=e(98866),u=e(35792),F=e(98675),m=e(65223),C=e(27833),K=e(4173),A=e(29691),T=e(30307),U=e(15030),B=e(43277),M=e(78642),x=function(o,d){var r={};for(var g in o)Object.prototype.hasOwnProperty.call(o,g)&&d.indexOf(g)<0&&(r[g]=o[g]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var D=0,g=Object.getOwnPropertySymbols(o);D<g.length;D++)d.indexOf(g[D])<0&&Object.prototype.propertyIsEnumerable.call(o,g[D])&&(r[g[D]]=o[g[D]]);return r};const E="SECRET_COMBOBOX_MODE_DO_NOT_USE",t=(o,d)=>{var r;const{prefixCls:g,bordered:D,className:H,rootClassName:N,getPopupContainer:$,popupClassName:S,dropdownClassName:z,listHeight:X=256,placement:y,listItemHeight:I,size:W,disabled:Y,notFoundContent:J,status:ce,builtinPlacements:ve,dropdownMatchSelectWidth:Ee,popupMatchSelectWidth:q,direction:ee,style:ge,allowClear:ae,variant:he,dropdownStyle:Q,transitionName:fe,tagRender:Ce,maxCount:Pe}=o,le=x(o,["prefixCls","bordered","className","rootClassName","getPopupContainer","popupClassName","dropdownClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","builtinPlacements","dropdownMatchSelectWidth","popupMatchSelectWidth","direction","style","allowClear","variant","dropdownStyle","transitionName","tagRender","maxCount"]),{getPopupContainer:Oe,getPrefixCls:re,renderEmpty:ne,direction:Me,virtual:De,popupMatchSelectWidth:pe,popupOverflow:Ie,select:Z}=a.useContext(f.E_),[,te]=(0,A.ZP)(),We=I!=null?I:te==null?void 0:te.controlHeight,b=re("select",g),je=re(),V=ee!=null?ee:Me,{compactSize:Be,compactItemClassnames:xe}=(0,K.ri)(b,V),[be,Re]=(0,C.Z)(he,D),oe=(0,u.Z)(b),[Ae,ue,de]=(0,U.Z)(b,oe),w=a.useMemo(()=>{const{mode:G}=o;if(G!=="combobox")return G===E?"combobox":G},[o.mode]),ie=w==="multiple"||w==="tags",Le=(0,M.Z)(o.suffixIcon,o.showArrow),Ke=(r=q!=null?q:Ee)!==null&&r!==void 0?r:pe,{status:Te,hasFeedback:_e,isFormItemInput:Ue,feedbackIcon:Se}=a.useContext(m.aM),ye=(0,_.F)(Te,ce);let k;J!==void 0?k=J:w==="combobox"?k=null:k=(ne==null?void 0:ne("Select"))||a.createElement(j.Z,{componentName:"Select"});const{suffixIcon:Ze,itemIcon:Fe,removeIcon:Ne,clearIcon:ze}=(0,B.Z)(Object.assign(Object.assign({},le),{multiple:ie,hasFeedback:_e,feedbackIcon:Se,showSuffixIcon:Le,prefixCls:b,componentName:"Select"})),Ye=ae===!0?{clearIcon:ze}:ae,Ve=(0,p.Z)(le,["suffixIcon","itemIcon"]),He=P()(S||z,{[`${b}-dropdown-${V}`]:V==="rtl"},N,de,oe,ue),me=(0,F.Z)(G=>{var se;return(se=W!=null?W:Be)!==null&&se!==void 0?se:G}),$e=a.useContext(R.Z),Xe=Y!=null?Y:$e,Ge=P()({[`${b}-lg`]:me==="large",[`${b}-sm`]:me==="small",[`${b}-rtl`]:V==="rtl",[`${b}-${be}`]:Re,[`${b}-in-form-item`]:Ue},(0,_.Z)(b,ye,_e),xe,Z==null?void 0:Z.className,H,N,de,oe,ue),Je=a.useMemo(()=>y!==void 0?y:V==="rtl"?"bottomRight":"bottomLeft",[y,V]),[Qe]=(0,O.Cn)("SelectLike",Q==null?void 0:Q.zIndex);return Ae(a.createElement(v.ZP,Object.assign({ref:d,virtual:De,showSearch:Z==null?void 0:Z.showSearch},Ve,{style:Object.assign(Object.assign({},Z==null?void 0:Z.style),ge),dropdownMatchSelectWidth:Ke,transitionName:(0,h.m)(je,"slide-up",fe),builtinPlacements:(0,T.Z)(ve,Ie),listHeight:X,listItemHeight:We,mode:w,prefixCls:b,placement:Je,direction:V,suffixIcon:Ze,menuItemSelectedIcon:Fe,removeIcon:Ne,allowClear:Ye,notFoundContent:k,className:Ge,getPopupContainer:$||Oe,dropdownClassName:He,disabled:Xe,dropdownStyle:Object.assign(Object.assign({},Q),{zIndex:Qe}),maxCount:ie?Pe:void 0,tagRender:ie?Ce:void 0})))},i=a.forwardRef(t),n=(0,l.Z)(i);i.SECRET_COMBOBOX_MODE_DO_NOT_USE=E,i.Option=v.Wx,i.OptGroup=v.Xo,i._InternalPanelDoNotUseOrYouWillBeFired=n,c.default=i},18446:function(L,c,e){var a=e(90939);function s(P,v){return a(P,v)}L.exports=s}}]);
