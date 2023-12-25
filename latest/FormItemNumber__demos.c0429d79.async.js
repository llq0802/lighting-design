"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[125],{80882:function(G,P,e){e.d(P,{Z:function(){return i}});var D=e(87462),v=e(67294),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},f=s,W=e(13401),t=function(E,p){return v.createElement(W.Z,(0,D.Z)({},E,{ref:p,icon:f}))},i=v.forwardRef(t)},84163:function(G,P,e){e.r(P);var D=e(5574),v=e.n(D),s=e(4390),f=e(6579),W=e(83780),t=e(85893),i=function(){var E=s.Z.useForm(),p=v()(E,1),y=p[0];return(0,t.jsxs)(s.Z,{form:y,submitter:{buttonAlign:"center"},children:[(0,t.jsx)(f.Z,{name:"number1",label:"\u91D1\u989D1",required:!0,contentAfter:(0,t.jsx)("div",{children:"$"})}),(0,t.jsx)(f.Z,{label:"\u91D1\u989D2",name:"number2",required:!0,numberProps:{prefix:"\uFFE5"}}),(0,t.jsx)(f.Z,{label:"\u5C0F\u6570\u70B9\u540E2\u4F4D\u6570\u5B57",name:"number3",required:!0,max:1e3,numberProps:{precision:2}}),(0,t.jsx)(f.Z,{name:"number66",label:"\u683C\u5F0F\u5316\u6570\u5B571",required:!0,initialValue:1e3,numberProps:{precision:void 0,formatter:function(S){return"$ ".concat(S).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(S){return S.replace(/\$\s?|(,*)/g,"")}}}),(0,t.jsx)(f.Z,{label:"\u683C\u5F0F\u5316\u6570\u5B572",required:!0,name:"number77",initialValue:99,numberProps:{precision:void 0,formatter:function(S){return"".concat(S,"%")},parser:function(S){return S.replace("%",",")}}}),(0,t.jsx)(f.Z,{label:"\u81EA\u5B9A\u4E49\u6E32\u67D3",name:"with-popover",tooltip:"\u8BE5\u65B9\u6848\u53EF\u7528\u4E8E\u6240\u6709\u8868\u5355\u9879",renderField:(0,W.Z)({content:"\u8BE5\u65B9\u6848\u53EF\u7528\u4E8E\u6240\u6709\u8868\u5355\u9879"})})]})};P.default=i},83780:function(G,P,e){var D=e(97857),v=e.n(D),s=e(74627),f=e(67294),W=e(85893),t=function(E){return(E==null?void 0:E.parentNode)||document.body};function i(c){return function(E){var p=function(Z){return(0,W.jsx)(s.Z,v()(v()({trigger:"focus",getPopupContainer:t},c),{},{children:f.cloneElement(E,Z)}))};return(0,W.jsx)(p,{})}}P.Z=i},6579:function(G,P,e){e.d(P,{Z:function(){return V}});var D=e(97857),v=e.n(D),s=e(13769),f=e.n(s),W=e(89889),t=e(84640),i=e(33168),c=e(40964),E=e(67294),p=e(22638),y=e(4215),Z=e(85893),S=["value","onChange","min","max"],F=function(a){var u=a.value,A=a.onChange,N=a.min,b=a.max,g=f()(a,S),T=(0,p.Z)(function($){var n=$;A==null||A(n)});return(0,Z.jsx)(y.Z,v()(v()({min:N,max:b,autoComplete:"off"},g),{},{style:v()({width:"100%"},g==null?void 0:g.style),value:u,onChange:T}))},q=F,J=["disabled","size","required","precision","min","max","placeholder","numberProps"],x=function(a){var u=a.disabled,A=a.size,N=a.required,b=N===void 0?!1:N,g=a.precision,T=a.min,$=T===void 0?0:T,n=a.max,r=n===void 0?9999:n,l=a.placeholder,o=a.numberProps,d=o===void 0?c.FD:o,O=f()(a,J),_=(0,i.JY)({placeholder:l,restProps:O}),j=(0,E.useContext)(W.e),C=j.disabled;return(0,Z.jsx)(t.Z,v()(v()({required:b,placeholder:_,validateTrigger:"onBlur"},O),{},{children:(0,Z.jsx)(q,v()({size:A,disabled:u!=null?u:C,placeholder:_,min:$,max:r,precision:g},d))}))},V=x},61117:function(G,P,e){var D=e(84640);P.Z=D.Z},4390:function(G,P,e){var D=e(97857),v=e.n(D),s=e(13769),f=e.n(s),W=e(78957),t=e(99859),i=e(33168),c=e(40964),E=e(61117),p=e(89889),y=e(85893),Z=["submitter"],S=["render"],F=function(J){var x=J.submitter,V=f()(J,Z),U=typeof x=="boolean"||!x?c.FD:x,a=U.render,u=f()(U,S),A=x===void 0||x?v()({render:function(b){var g=Array.isArray(b)&&b.length>1?(0,y.jsx)(W.Z,{children:b}):b;return(0,y.jsx)(t.Z.Item,{colon:!1,className:"lightd-form-submitter",style:{marginBottom:0,paddingLeft:typeof(x==null?void 0:x.buttonAlign)=="number"?"".concat(x==null?void 0:x.buttonAlign,"px"):0},wrapperCol:U==null?void 0:U.wrapperCol,children:(0,y.jsx)("div",{style:{display:"flex",justifyContent:typeof(x==null?void 0:x.buttonAlign)=="string"?i.lN[x==null?void 0:x.buttonAlign]:"initial"},children:a?(0,y.jsx)(y.Fragment,{children:a(g,U)}):g})})}},u):!1;return(0,y.jsx)(p.Z,v()({submitter:A,contentRender:function(b,g){return(0,y.jsxs)(y.Fragment,{children:[b,g]})}},V))};F.Item=E.Z,F.List=t.Z.List,F.Provider=t.Z.Provider,F.ErrorList=t.Z.ErrorList,F.useForm=t.Z.useForm,F.useFormInstance=t.Z.useFormInstance,F.useWatch=t.Z.useWatch,P.Z=F},74627:function(G,P,e){e.d(P,{Z:function(){return $}});var D=e(94184),v=e.n(D),s=e(67294);const f=n=>n?typeof n=="function"?n():n:null;var W=e(33603),t=e(53124),i=e(83062),c=e(92419),E=e(14747),p=e(50438),y=e(97414),Z=e(8796),S=e(67968),F=e(45503);const q=n=>{const{componentCls:r,popoverColor:l,minWidth:o,fontWeightStrong:d,popoverPadding:O,boxShadowSecondary:_,colorTextHeading:j,borderRadiusLG:C,zIndexPopup:z,marginXS:X,colorBgElevated:B,popoverBg:h}=n;return[{[r]:Object.assign(Object.assign({},(0,E.Wf)(n)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:z,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":B,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${r}-content`]:{position:"relative"},[`${r}-inner`]:{backgroundColor:h,backgroundClip:"padding-box",borderRadius:C,boxShadow:_,padding:O},[`${r}-title`]:{minWidth:o,marginBottom:X,color:j,fontWeight:d},[`${r}-inner-content`]:{color:l}})},(0,y.ZP)(n,{colorBg:"var(--antd-arrow-background-color)"}),{[`${r}-pure`]:{position:"relative",maxWidth:"none",margin:n.sizePopupArrow,display:"inline-block",[`${r}-content`]:{display:"inline-block"}}}]},J=n=>{const{componentCls:r}=n;return{[r]:Z.i.map(l=>{const o=n[`${l}6`];return{[`&${r}-${l}`]:{"--antd-arrow-background-color":o,[`${r}-inner`]:{backgroundColor:o},[`${r}-arrow`]:{background:"transparent"}}}})}},x=n=>{const{componentCls:r,lineWidth:l,lineType:o,colorSplit:d,paddingSM:O,controlHeight:_,fontSize:j,lineHeight:C,padding:z}=n,X=_-Math.round(j*C),B=X/2,h=X/2-l,I=z;return{[r]:{[`${r}-inner`]:{padding:0},[`${r}-title`]:{margin:0,padding:`${B}px ${I}px ${h}px`,borderBottom:`${l}px ${o} ${d}`},[`${r}-inner-content`]:{padding:`${O}px ${I}px`}}}};var V=(0,S.Z)("Popover",n=>{const{colorBgElevated:r,colorText:l,wireframe:o}=n,d=(0,F.TS)(n,{popoverPadding:12,popoverBg:r,popoverColor:l});return[q(d),J(d),o&&x(d),(0,p._y)(d,"zoom-big")]},n=>({width:177,minWidth:177,zIndexPopup:n.zIndexPopupBase+30}),{resetStyle:!1,deprecatedTokens:[["width","minWidth"]]}),U=function(n,r){var l={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&r.indexOf(o)<0&&(l[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,o=Object.getOwnPropertySymbols(n);d<o.length;d++)r.indexOf(o[d])<0&&Object.prototype.propertyIsEnumerable.call(n,o[d])&&(l[o[d]]=n[o[d]]);return l};const a=(n,r,l)=>{if(!(!r&&!l))return s.createElement(s.Fragment,null,r&&s.createElement("div",{className:`${n}-title`},f(r)),s.createElement("div",{className:`${n}-inner-content`},f(l)))},u=n=>{const{hashId:r,prefixCls:l,className:o,style:d,placement:O="top",title:_,content:j,children:C}=n;return s.createElement("div",{className:v()(r,l,`${l}-pure`,`${l}-placement-${O}`,o),style:d},s.createElement("div",{className:`${l}-arrow`}),s.createElement(c.G,Object.assign({},n,{className:r,prefixCls:l}),C||a(l,_,j)))};var N=n=>{const{prefixCls:r}=n,l=U(n,["prefixCls"]),{getPrefixCls:o}=s.useContext(t.E_),d=o("popover",r),[O,_]=V(d);return O(s.createElement(u,Object.assign({},l,{prefixCls:d,hashId:_})))},b=function(n,r){var l={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&r.indexOf(o)<0&&(l[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,o=Object.getOwnPropertySymbols(n);d<o.length;d++)r.indexOf(o[d])<0&&Object.prototype.propertyIsEnumerable.call(n,o[d])&&(l[o[d]]=n[o[d]]);return l};const g=n=>{let{title:r,content:l,prefixCls:o}=n;return s.createElement(s.Fragment,null,r&&s.createElement("div",{className:`${o}-title`},f(r)),s.createElement("div",{className:`${o}-inner-content`},f(l)))},T=s.forwardRef((n,r)=>{const{prefixCls:l,title:o,content:d,overlayClassName:O,placement:_="top",trigger:j="hover",mouseEnterDelay:C=.1,mouseLeaveDelay:z=.1,overlayStyle:X={}}=n,B=b(n,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),{getPrefixCls:h}=s.useContext(t.E_),I=h("popover",l),[Q,L]=V(I),M=h(),ee=v()(O,L);return Q(s.createElement(i.Z,Object.assign({placement:_,trigger:j,mouseEnterDelay:C,mouseLeaveDelay:z,overlayStyle:X},B,{prefixCls:I,overlayClassName:ee,ref:r,overlay:o||d?s.createElement(g,{prefixCls:I,title:o,content:d}):null,transitionName:(0,W.m)(M,"zoom-big",B.transitionName),"data-popover-inject":!0})))});T._InternalPanelDoNotUseOrYouWillBeFired=N;var $=T},67656:function(G,P,e){e.r(P),e.d(P,{BaseInput:function(){return p},default:function(){return U}});var D=e(87462),v=e(1413),s=e(4942),f=e(71002),W=e(94184),t=e.n(W),i=e(67294),c=e(87887),E=function(u){var A,N,b=u.inputElement,g=u.prefixCls,T=u.prefix,$=u.suffix,n=u.addonBefore,r=u.addonAfter,l=u.className,o=u.style,d=u.disabled,O=u.readOnly,_=u.focused,j=u.triggerFocus,C=u.allowClear,z=u.value,X=u.handleReset,B=u.hidden,h=u.classes,I=u.classNames,Q=u.dataAttrs,L=u.styles,M=u.components,ee=(M==null?void 0:M.affixWrapper)||"span",se=(M==null?void 0:M.groupWrapper)||"span",ae=(M==null?void 0:M.wrapper)||"span",le=(M==null?void 0:M.groupAddon)||"span",ne=(0,i.useRef)(null),K=function(H){var w;(w=ne.current)!==null&&w!==void 0&&w.contains(H.target)&&(j==null||j())},re=function(){var H;if(!C)return null;var w=!d&&!O&&z,me="".concat(g,"-clear-icon"),ve=(0,f.Z)(C)==="object"&&C!==null&&C!==void 0&&C.clearIcon?C.clearIcon:"\u2716";return i.createElement("span",{onClick:X,onMouseDown:function(fe){return fe.preventDefault()},className:t()(me,(H={},(0,s.Z)(H,"".concat(me,"-hidden"),!w),(0,s.Z)(H,"".concat(me,"-has-suffix"),!!$),H)),role:"button",tabIndex:-1},ve)},oe=(0,i.cloneElement)(b,{value:z,hidden:B,className:t()((A=b.props)===null||A===void 0?void 0:A.className,!(0,c.X3)(u)&&!(0,c.He)(u)&&l)||null,style:(0,v.Z)((0,v.Z)({},(N=b.props)===null||N===void 0?void 0:N.style),!(0,c.X3)(u)&&!(0,c.He)(u)?o:{})});if((0,c.X3)(u)){var Y,k="".concat(g,"-affix-wrapper"),de=t()(k,(Y={},(0,s.Z)(Y,"".concat(k,"-disabled"),d),(0,s.Z)(Y,"".concat(k,"-focused"),_),(0,s.Z)(Y,"".concat(k,"-readonly"),O),(0,s.Z)(Y,"".concat(k,"-input-with-clear-btn"),$&&C&&z),Y),!(0,c.He)(u)&&l,h==null?void 0:h.affixWrapper,I==null?void 0:I.affixWrapper),ce=($||C)&&i.createElement("span",{className:t()("".concat(g,"-suffix"),I==null?void 0:I.suffix),style:L==null?void 0:L.suffix},re(),$);oe=i.createElement(ee,(0,D.Z)({className:de,style:(0,v.Z)((0,v.Z)({},(0,c.He)(u)?void 0:o),L==null?void 0:L.affixWrapper),hidden:!(0,c.He)(u)&&B,onClick:K},Q==null?void 0:Q.affixWrapper,{ref:ne}),T&&i.createElement("span",{className:t()("".concat(g,"-prefix"),I==null?void 0:I.prefix),style:L==null?void 0:L.prefix},T),(0,i.cloneElement)(b,{value:z,hidden:null}),ce)}if((0,c.He)(u)){var ie="".concat(g,"-group"),ue="".concat(ie,"-addon"),R=t()("".concat(g,"-wrapper"),ie,h==null?void 0:h.wrapper),m=t()("".concat(g,"-group-wrapper"),l,h==null?void 0:h.group);return i.createElement(se,{className:m,style:o,hidden:B},i.createElement(ae,{className:R},n&&i.createElement(le,{className:ue},n),(0,i.cloneElement)(oe,{hidden:null}),r&&i.createElement(le,{className:ue},r)))}return oe},p=E,y=e(74902),Z=e(97685),S=e(91),F=e(21770),q=e(98423),J=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","type","classes","classNames","styles"],x=(0,i.forwardRef)(function(a,u){var A=a.autoComplete,N=a.onChange,b=a.onFocus,g=a.onBlur,T=a.onPressEnter,$=a.onKeyDown,n=a.prefixCls,r=n===void 0?"rc-input":n,l=a.disabled,o=a.htmlSize,d=a.className,O=a.maxLength,_=a.suffix,j=a.showCount,C=a.type,z=C===void 0?"text":C,X=a.classes,B=a.classNames,h=a.styles,I=(0,S.Z)(a,J),Q=(0,F.Z)(a.defaultValue,{value:a.value}),L=(0,Z.Z)(Q,2),M=L[0],ee=L[1],se=(0,i.useState)(!1),ae=(0,Z.Z)(se,2),le=ae[0],ne=ae[1],K=(0,i.useRef)(null),re=function(m){K.current&&(0,c.nH)(K.current,m)};(0,i.useImperativeHandle)(u,function(){return{focus:re,blur:function(){var m;(m=K.current)===null||m===void 0||m.blur()},setSelectionRange:function(m,te,H){var w;(w=K.current)===null||w===void 0||w.setSelectionRange(m,te,H)},select:function(){var m;(m=K.current)===null||m===void 0||m.select()},input:K.current}}),(0,i.useEffect)(function(){ne(function(R){return R&&l?!1:R})},[l]);var oe=function(m){a.value===void 0&&ee(m.target.value),K.current&&(0,c.rJ)(K.current,m,N)},Y=function(m){T&&m.key==="Enter"&&T(m),$==null||$(m)},k=function(m){ne(!0),b==null||b(m)},de=function(m){ne(!1),g==null||g(m)},ce=function(m){ee(""),re(),K.current&&(0,c.rJ)(K.current,m,N)},ie=function(){var m=(0,q.Z)(a,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","classes","htmlSize","styles","classNames"]);return i.createElement("input",(0,D.Z)({autoComplete:A},m,{onChange:oe,onFocus:k,onBlur:de,onKeyDown:Y,className:t()(r,(0,s.Z)({},"".concat(r,"-disabled"),l),B==null?void 0:B.input),style:h==null?void 0:h.input,ref:K,size:o,type:z}))},ue=function(){var m=Number(O)>0;if(_||j){var te=(0,c.D7)(M),H=(0,y.Z)(te).length,w=(0,f.Z)(j)==="object"?j.formatter({value:te,count:H,maxLength:O}):"".concat(H).concat(m?" / ".concat(O):"");return i.createElement(i.Fragment,null,!!j&&i.createElement("span",{className:t()("".concat(r,"-show-count-suffix"),(0,s.Z)({},"".concat(r,"-show-count-has-suffix"),!!_),B==null?void 0:B.count),style:(0,v.Z)({},h==null?void 0:h.count)},w),_)}return null};return i.createElement(p,(0,D.Z)({},I,{prefixCls:r,className:d,inputElement:ie(),handleReset:ce,value:(0,c.D7)(M),focused:le,triggerFocus:re,suffix:ue(),disabled:l,classes:X,classNames:B,styles:h}))}),V=x,U=V},87887:function(G,P,e){e.d(P,{D7:function(){return W},He:function(){return D},X3:function(){return v},nH:function(){return f},rJ:function(){return s}});function D(t){return!!(t.addonBefore||t.addonAfter)}function v(t){return!!(t.prefix||t.suffix||t.allowClear)}function s(t,i,c,E){if(c){var p=i;if(i.type==="click"){var y=t.cloneNode(!0);p=Object.create(i,{target:{value:y},currentTarget:{value:y}}),y.value="",c(p);return}if(E!==void 0){p=Object.create(i,{target:{value:t},currentTarget:{value:t}}),t.value=E,c(p);return}c(p)}}function f(t,i){if(t){t.focus(i);var c=i||{},E=c.cursor;if(E){var p=t.value.length;switch(E){case"start":t.setSelectionRange(0,0);break;case"end":t.setSelectionRange(p,p);break;default:t.setSelectionRange(0,p)}}}}function W(t){return typeof t=="undefined"||t===null?"":String(t)}}}]);