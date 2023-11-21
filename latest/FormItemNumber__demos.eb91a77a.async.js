"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[125],{80882:function(G,C,e){e.d(C,{Z:function(){return i}});var P=e(87462),f=e(67294),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},g=s,Z=e(13401),t=function(m,p){return f.createElement(Z.Z,(0,P.Z)({},m,{ref:p,icon:g}))},i=f.forwardRef(t)},84163:function(G,C,e){e.r(C);var P=e(5574),f=e.n(P),s=e(4390),g=e(6579),Z=e(83780),t=e(85893),i=function(){var m=s.Z.useForm(),p=f()(m,1),N=p[0];return(0,t.jsxs)(s.Z,{form:N,submitter:{buttonAlign:"center"},children:[(0,t.jsx)(g.Z,{name:"number1",label:"\u91D1\u989D1",required:!0,contentAfter:(0,t.jsx)("div",{children:"$"})}),(0,t.jsx)(g.Z,{label:"\u91D1\u989D2",name:"number2",required:!0,numberProps:{prefix:"\uFFE5"}}),(0,t.jsx)(g.Z,{label:"\u5C0F\u6570\u70B9\u540E2\u4F4D\u6570\u5B57",name:"number3",required:!0,max:1e3,numberProps:{precision:2}}),(0,t.jsx)(g.Z,{name:"number66",label:"\u683C\u5F0F\u5316\u6570\u5B571",required:!0,initialValue:1e3,numberProps:{precision:void 0,formatter:function(F){return"$ ".concat(F).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(F){return F.replace(/\$\s?|(,*)/g,"")}}}),(0,t.jsx)(g.Z,{label:"\u683C\u5F0F\u5316\u6570\u5B572",required:!0,name:"number77",initialValue:99,numberProps:{precision:void 0,formatter:function(F){return"".concat(F,"%")},parser:function(F){return F.replace("%",",")}}}),(0,t.jsx)(g.Z,{label:"\u81EA\u5B9A\u4E49\u6E32\u67D3",name:"with-popover",tooltip:"\u8BE5\u65B9\u6848\u53EF\u7528\u4E8E\u6240\u6709\u8868\u5355\u9879",renderField:(0,Z.Z)({content:"\u8BE5\u65B9\u6848\u53EF\u7528\u4E8E\u6240\u6709\u8868\u5355\u9879"})})]})};C.default=i},83780:function(G,C,e){var P=e(97857),f=e.n(P),s=e(74627),g=e(67294),Z=e(85893),t=function(m){return(m==null?void 0:m.parentNode)||document.body};function i(c){return function(m){var p=function(E){return(0,Z.jsx)(s.Z,f()(f()({trigger:"focus",getPopupContainer:t},c),{},{children:g.cloneElement(m,E)}))};return(0,Z.jsx)(p,{})}}C.Z=i},6579:function(G,C,e){e.d(C,{Z:function(){return X}});var P=e(97857),f=e.n(P),s=e(13769),g=e.n(s),Z=e(89889),t=e(84640),i=e(33168),c=e(40964),m=e(67294),p=e(22638),N=e(4215),E=e(85893),F=["value","onChange","min","max"],J=function(l){var u=l.value,D=l.onChange,_=l.min,R=l.max,b=g()(l,F),L=(0,p.Z)(function(A){var n=A;D==null||D(n)});return(0,E.jsx)(N.Z,f()(f()({min:_,max:R,autoComplete:"off"},b),{},{style:f()({width:"100%"},b==null?void 0:b.style),value:u,onChange:L}))},x=J,Y=["disabled","size","required","precision","min","max","placeholder","numberProps"],K=function(l){var u=l.disabled,D=l.size,_=l.required,R=_===void 0?!1:_,b=l.precision,L=l.min,A=L===void 0?0:L,n=l.max,r=n===void 0?9999:n,a=l.placeholder,o=l.numberProps,d=o===void 0?c.FD:o,O=g()(l,Y),j=(0,i.JY)({placeholder:a,restProps:O}),B=(0,m.useContext)(Z.e),y=B.disabled;return(0,E.jsx)(t.Z,f()(f()({required:R,placeholder:j,validateTrigger:"onBlur"},O),{},{children:(0,E.jsx)(x,f()({size:D,disabled:u!=null?u:y,placeholder:j,min:A,max:r,precision:b},d))}))},X=K},61117:function(G,C,e){var P=e(84640);C.Z=P.Z},4390:function(G,C,e){var P=e(97857),f=e.n(P),s=e(13769),g=e.n(s),Z=e(78957),t=e(99859),i=e(61117),c=e(89889),m=e(85893),p=["submitter"],N=["render"],E=function(J){var x=J.submitter,Y=g()(J,p),K=typeof x=="boolean"||!x?{}:x,X=K.render,Q=g()(K,N),l=typeof x=="undefined"||x?f()({render:function(D){var _=Array.isArray(D)&&D.length>1?(0,m.jsx)(Z.Z,{children:D}):D;return(0,m.jsx)(t.Z.Item,{colon:!1,className:"lightd-form-submitter",style:{marginBottom:0,paddingLeft:typeof(x==null?void 0:x.buttonAlign)=="number"?"".concat(x==null?void 0:x.buttonAlign,"px"):0},wrapperCol:K==null?void 0:K.wrapperCol,children:(0,m.jsx)("div",{style:{display:"flex",justifyContent:typeof(x==null?void 0:x.buttonAlign)=="string"?x==null?void 0:x.buttonAlign:"initial"},children:X?(0,m.jsx)(m.Fragment,{children:X(_,K)}):_})})}},Q):!1;return(0,m.jsx)(c.Z,f()({submitter:l,contentRender:function(D,_){return(0,m.jsxs)(m.Fragment,{children:[D,_]})}},Y))};E.Item=i.Z,E.List=t.Z.List,E.Provider=t.Z.Provider,E.ErrorList=t.Z.ErrorList,E.useForm=t.Z.useForm,E.useFormInstance=t.Z.useFormInstance,E.useWatch=t.Z.useWatch,C.Z=E},74627:function(G,C,e){e.d(C,{Z:function(){return A}});var P=e(94184),f=e.n(P),s=e(67294);const g=n=>n?typeof n=="function"?n():n:null;var Z=e(33603),t=e(53124),i=e(83062),c=e(92419),m=e(14747),p=e(50438),N=e(97414),E=e(8796),F=e(67968),J=e(45503);const x=n=>{const{componentCls:r,popoverColor:a,minWidth:o,fontWeightStrong:d,popoverPadding:O,boxShadowSecondary:j,colorTextHeading:B,borderRadiusLG:y,zIndexPopup:z,marginXS:w,colorBgElevated:I,popoverBg:h}=n;return[{[r]:Object.assign(Object.assign({},(0,m.Wf)(n)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:z,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":I,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${r}-content`]:{position:"relative"},[`${r}-inner`]:{backgroundColor:h,backgroundClip:"padding-box",borderRadius:y,boxShadow:j,padding:O},[`${r}-title`]:{minWidth:o,marginBottom:w,color:B,fontWeight:d},[`${r}-inner-content`]:{color:a}})},(0,N.ZP)(n,{colorBg:"var(--antd-arrow-background-color)"}),{[`${r}-pure`]:{position:"relative",maxWidth:"none",margin:n.sizePopupArrow,display:"inline-block",[`${r}-content`]:{display:"inline-block"}}}]},Y=n=>{const{componentCls:r}=n;return{[r]:E.i.map(a=>{const o=n[`${a}6`];return{[`&${r}-${a}`]:{"--antd-arrow-background-color":o,[`${r}-inner`]:{backgroundColor:o},[`${r}-arrow`]:{background:"transparent"}}}})}},K=n=>{const{componentCls:r,lineWidth:a,lineType:o,colorSplit:d,paddingSM:O,controlHeight:j,fontSize:B,lineHeight:y,padding:z}=n,w=j-Math.round(B*y),I=w/2,h=w/2-a,M=z;return{[r]:{[`${r}-inner`]:{padding:0},[`${r}-title`]:{margin:0,padding:`${I}px ${M}px ${h}px`,borderBottom:`${a}px ${o} ${d}`},[`${r}-inner-content`]:{padding:`${O}px ${M}px`}}}};var X=(0,F.Z)("Popover",n=>{const{colorBgElevated:r,colorText:a,wireframe:o}=n,d=(0,J.TS)(n,{popoverPadding:12,popoverBg:r,popoverColor:a});return[x(d),Y(d),o&&K(d),(0,p._y)(d,"zoom-big")]},n=>({width:177,minWidth:177,zIndexPopup:n.zIndexPopupBase+30}),{resetStyle:!1,deprecatedTokens:[["width","minWidth"]]}),Q=function(n,r){var a={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&r.indexOf(o)<0&&(a[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,o=Object.getOwnPropertySymbols(n);d<o.length;d++)r.indexOf(o[d])<0&&Object.prototype.propertyIsEnumerable.call(n,o[d])&&(a[o[d]]=n[o[d]]);return a};const l=(n,r,a)=>{if(!(!r&&!a))return s.createElement(s.Fragment,null,r&&s.createElement("div",{className:`${n}-title`},g(r)),s.createElement("div",{className:`${n}-inner-content`},g(a)))},u=n=>{const{hashId:r,prefixCls:a,className:o,style:d,placement:O="top",title:j,content:B,children:y}=n;return s.createElement("div",{className:f()(r,a,`${a}-pure`,`${a}-placement-${O}`,o),style:d},s.createElement("div",{className:`${a}-arrow`}),s.createElement(c.G,Object.assign({},n,{className:r,prefixCls:a}),y||l(a,j,B)))};var _=n=>{const{prefixCls:r}=n,a=Q(n,["prefixCls"]),{getPrefixCls:o}=s.useContext(t.E_),d=o("popover",r),[O,j]=X(d);return O(s.createElement(u,Object.assign({},a,{prefixCls:d,hashId:j})))},R=function(n,r){var a={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&r.indexOf(o)<0&&(a[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,o=Object.getOwnPropertySymbols(n);d<o.length;d++)r.indexOf(o[d])<0&&Object.prototype.propertyIsEnumerable.call(n,o[d])&&(a[o[d]]=n[o[d]]);return a};const b=n=>{let{title:r,content:a,prefixCls:o}=n;return s.createElement(s.Fragment,null,r&&s.createElement("div",{className:`${o}-title`},g(r)),s.createElement("div",{className:`${o}-inner-content`},g(a)))},L=s.forwardRef((n,r)=>{const{prefixCls:a,title:o,content:d,overlayClassName:O,placement:j="top",trigger:B="hover",mouseEnterDelay:y=.1,mouseLeaveDelay:z=.1,overlayStyle:w={}}=n,I=R(n,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),{getPrefixCls:h}=s.useContext(t.E_),M=h("popover",a),[k,$]=X(M),W=h(),ee=f()(O,$);return k(s.createElement(i.Z,Object.assign({placement:j,trigger:B,mouseEnterDelay:y,mouseLeaveDelay:z,overlayStyle:w},I,{prefixCls:M,overlayClassName:ee,ref:r,overlay:o||d?s.createElement(b,{prefixCls:M,title:o,content:d}):null,transitionName:(0,Z.m)(W,"zoom-big",I.transitionName),"data-popover-inject":!0})))});L._InternalPanelDoNotUseOrYouWillBeFired=_;var A=L},67656:function(G,C,e){e.r(C),e.d(C,{BaseInput:function(){return p},default:function(){return Q}});var P=e(87462),f=e(1413),s=e(4942),g=e(71002),Z=e(94184),t=e.n(Z),i=e(67294),c=e(87887),m=function(u){var D,_,R=u.inputElement,b=u.prefixCls,L=u.prefix,A=u.suffix,n=u.addonBefore,r=u.addonAfter,a=u.className,o=u.style,d=u.disabled,O=u.readOnly,j=u.focused,B=u.triggerFocus,y=u.allowClear,z=u.value,w=u.handleReset,I=u.hidden,h=u.classes,M=u.classNames,k=u.dataAttrs,$=u.styles,W=u.components,ee=(W==null?void 0:W.affixWrapper)||"span",se=(W==null?void 0:W.groupWrapper)||"span",ae=(W==null?void 0:W.wrapper)||"span",le=(W==null?void 0:W.groupAddon)||"span",ne=(0,i.useRef)(null),T=function(U){var H;(H=ne.current)!==null&&H!==void 0&&H.contains(U.target)&&(B==null||B())},re=function(){var U;if(!y)return null;var H=!d&&!O&&z,me="".concat(b,"-clear-icon"),ve=(0,g.Z)(y)==="object"&&y!==null&&y!==void 0&&y.clearIcon?y.clearIcon:"\u2716";return i.createElement("span",{onClick:w,onMouseDown:function(fe){return fe.preventDefault()},className:t()(me,(U={},(0,s.Z)(U,"".concat(me,"-hidden"),!H),(0,s.Z)(U,"".concat(me,"-has-suffix"),!!A),U)),role:"button",tabIndex:-1},ve)},oe=(0,i.cloneElement)(R,{value:z,hidden:I,className:t()((D=R.props)===null||D===void 0?void 0:D.className,!(0,c.X3)(u)&&!(0,c.He)(u)&&a)||null,style:(0,f.Z)((0,f.Z)({},(_=R.props)===null||_===void 0?void 0:_.style),!(0,c.X3)(u)&&!(0,c.He)(u)?o:{})});if((0,c.X3)(u)){var V,q="".concat(b,"-affix-wrapper"),de=t()(q,(V={},(0,s.Z)(V,"".concat(q,"-disabled"),d),(0,s.Z)(V,"".concat(q,"-focused"),j),(0,s.Z)(V,"".concat(q,"-readonly"),O),(0,s.Z)(V,"".concat(q,"-input-with-clear-btn"),A&&y&&z),V),!(0,c.He)(u)&&a,h==null?void 0:h.affixWrapper,M==null?void 0:M.affixWrapper),ce=(A||y)&&i.createElement("span",{className:t()("".concat(b,"-suffix"),M==null?void 0:M.suffix),style:$==null?void 0:$.suffix},re(),A);oe=i.createElement(ee,(0,P.Z)({className:de,style:(0,f.Z)((0,f.Z)({},(0,c.He)(u)?void 0:o),$==null?void 0:$.affixWrapper),hidden:!(0,c.He)(u)&&I,onClick:T},k==null?void 0:k.affixWrapper,{ref:ne}),L&&i.createElement("span",{className:t()("".concat(b,"-prefix"),M==null?void 0:M.prefix),style:$==null?void 0:$.prefix},L),(0,i.cloneElement)(R,{value:z,hidden:null}),ce)}if((0,c.He)(u)){var ie="".concat(b,"-group"),ue="".concat(ie,"-addon"),S=t()("".concat(b,"-wrapper"),ie,h==null?void 0:h.wrapper),v=t()("".concat(b,"-group-wrapper"),a,h==null?void 0:h.group);return i.createElement(se,{className:v,style:o,hidden:I},i.createElement(ae,{className:S},n&&i.createElement(le,{className:ue},n),(0,i.cloneElement)(oe,{hidden:null}),r&&i.createElement(le,{className:ue},r)))}return oe},p=m,N=e(74902),E=e(97685),F=e(91),J=e(21770),x=e(98423),Y=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","type","classes","classNames","styles"],K=(0,i.forwardRef)(function(l,u){var D=l.autoComplete,_=l.onChange,R=l.onFocus,b=l.onBlur,L=l.onPressEnter,A=l.onKeyDown,n=l.prefixCls,r=n===void 0?"rc-input":n,a=l.disabled,o=l.htmlSize,d=l.className,O=l.maxLength,j=l.suffix,B=l.showCount,y=l.type,z=y===void 0?"text":y,w=l.classes,I=l.classNames,h=l.styles,M=(0,F.Z)(l,Y),k=(0,J.Z)(l.defaultValue,{value:l.value}),$=(0,E.Z)(k,2),W=$[0],ee=$[1],se=(0,i.useState)(!1),ae=(0,E.Z)(se,2),le=ae[0],ne=ae[1],T=(0,i.useRef)(null),re=function(v){T.current&&(0,c.nH)(T.current,v)};(0,i.useImperativeHandle)(u,function(){return{focus:re,blur:function(){var v;(v=T.current)===null||v===void 0||v.blur()},setSelectionRange:function(v,te,U){var H;(H=T.current)===null||H===void 0||H.setSelectionRange(v,te,U)},select:function(){var v;(v=T.current)===null||v===void 0||v.select()},input:T.current}}),(0,i.useEffect)(function(){ne(function(S){return S&&a?!1:S})},[a]);var oe=function(v){l.value===void 0&&ee(v.target.value),T.current&&(0,c.rJ)(T.current,v,_)},V=function(v){L&&v.key==="Enter"&&L(v),A==null||A(v)},q=function(v){ne(!0),R==null||R(v)},de=function(v){ne(!1),b==null||b(v)},ce=function(v){ee(""),re(),T.current&&(0,c.rJ)(T.current,v,_)},ie=function(){var v=(0,x.Z)(l,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","classes","htmlSize","styles","classNames"]);return i.createElement("input",(0,P.Z)({autoComplete:D},v,{onChange:oe,onFocus:q,onBlur:de,onKeyDown:V,className:t()(r,(0,s.Z)({},"".concat(r,"-disabled"),a),I==null?void 0:I.input),style:h==null?void 0:h.input,ref:T,size:o,type:z}))},ue=function(){var v=Number(O)>0;if(j||B){var te=(0,c.D7)(W),U=(0,N.Z)(te).length,H=(0,g.Z)(B)==="object"?B.formatter({value:te,count:U,maxLength:O}):"".concat(U).concat(v?" / ".concat(O):"");return i.createElement(i.Fragment,null,!!B&&i.createElement("span",{className:t()("".concat(r,"-show-count-suffix"),(0,s.Z)({},"".concat(r,"-show-count-has-suffix"),!!j),I==null?void 0:I.count),style:(0,f.Z)({},h==null?void 0:h.count)},H),j)}return null};return i.createElement(p,(0,P.Z)({},M,{prefixCls:r,className:d,inputElement:ie(),handleReset:ce,value:(0,c.D7)(W),focused:le,triggerFocus:re,suffix:ue(),disabled:a,classes:w,classNames:I,styles:h}))}),X=K,Q=X},87887:function(G,C,e){e.d(C,{D7:function(){return Z},He:function(){return P},X3:function(){return f},nH:function(){return g},rJ:function(){return s}});function P(t){return!!(t.addonBefore||t.addonAfter)}function f(t){return!!(t.prefix||t.suffix||t.allowClear)}function s(t,i,c,m){if(c){var p=i;if(i.type==="click"){var N=t.cloneNode(!0);p=Object.create(i,{target:{value:N},currentTarget:{value:N}}),N.value="",c(p);return}if(m!==void 0){p=Object.create(i,{target:{value:t},currentTarget:{value:t}}),t.value=m,c(p);return}c(p)}}function g(t,i){if(t){t.focus(i);var c=i||{},m=c.cursor;if(m){var p=t.value.length;switch(m){case"start":t.setSelectionRange(0,0);break;case"end":t.setSelectionRange(p,p);break;default:t.setSelectionRange(0,p)}}}}function Z(t){return typeof t=="undefined"||t===null?"":String(t)}}}]);
