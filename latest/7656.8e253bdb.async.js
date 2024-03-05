"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[7656],{82234:function(Se,T,l){l.d(T,{Z:function(){return n}});var A=l(91),C=l(1413),m=l(71002),J=l(67294),u=["show"];function i(f,r){if(!r.max)return!0;var g=r.strategy(f);return g<=r.max}function n(f,r){return J.useMemo(function(){var g={};r&&(g.show=(0,m.Z)(r)==="object"&&r.formatter?r.formatter:!!r),g=(0,C.Z)((0,C.Z)({},g),f);var I=g,B=I.show,le=(0,A.Z)(I,u);return(0,C.Z)((0,C.Z)({},le),{},{show:!!B,showFormatter:typeof B=="function"?B:void 0,strategy:le.strategy||function(ie){return ie.length}})},[f,r])}},67656:function(Se,T,l){l.d(T,{Q:function(){return g},Z:function(){return we}});var A=l(1413),C=l(87462),m=l(4942),J=l(71002),u=l(93967),i=l.n(u),n=l(67294),f=l(87887),r=function(t){var G,W,X=t.inputElement,D=t.children,S=t.prefixCls,K=t.prefix,F=t.suffix,N=t.addonBefore,M=t.addonAfter,se=t.className,ce=t.style,L=t.disabled,j=t.readOnly,de=t.focused,Q=t.triggerFocus,E=t.allowClear,V=t.value,ve=t.handleReset,R=t.hidden,d=t.classes,o=t.classNames,O=t.dataAttrs,y=t.styles,h=t.components,$=D!=null?D:X,fe=(h==null?void 0:h.affixWrapper)||"span",Y=(h==null?void 0:h.groupWrapper)||"span",k=(h==null?void 0:h.wrapper)||"span",v=(h==null?void 0:h.groupAddon)||"span",z=(0,n.useRef)(null),me=function(te){var ae;(ae=z.current)!==null&&ae!==void 0&&ae.contains(te.target)&&(Q==null||Q())},q=(0,f.X3)(t),x=(0,n.cloneElement)($,{value:V,className:i()($.props.className,!q&&(o==null?void 0:o.variant))||null});if(q){var Z,H=null;if(E){var U,re=!L&&!j&&V,P="".concat(S,"-clear-icon"),he=(0,J.Z)(E)==="object"&&E!==null&&E!==void 0&&E.clearIcon?E.clearIcon:"\u2716";H=n.createElement("span",{onClick:ve,onMouseDown:function(te){return te.preventDefault()},className:i()(P,(U={},(0,m.Z)(U,"".concat(P,"-hidden"),!re),(0,m.Z)(U,"".concat(P,"-has-suffix"),!!F),U)),role:"button",tabIndex:-1},he)}var c="".concat(S,"-affix-wrapper"),p=i()(c,(Z={},(0,m.Z)(Z,"".concat(S,"-disabled"),L),(0,m.Z)(Z,"".concat(c,"-disabled"),L),(0,m.Z)(Z,"".concat(c,"-focused"),de),(0,m.Z)(Z,"".concat(c,"-readonly"),j),(0,m.Z)(Z,"".concat(c,"-input-with-clear-btn"),F&&E&&V),Z),d==null?void 0:d.affixWrapper,o==null?void 0:o.affixWrapper,o==null?void 0:o.variant),_=(F||E)&&n.createElement("span",{className:i()("".concat(S,"-suffix"),o==null?void 0:o.suffix),style:y==null?void 0:y.suffix},H,F);x=n.createElement(fe,(0,C.Z)({className:p,style:y==null?void 0:y.affixWrapper,onClick:me},O==null?void 0:O.affixWrapper,{ref:z}),K&&n.createElement("span",{className:i()("".concat(S,"-prefix"),o==null?void 0:o.prefix),style:y==null?void 0:y.prefix},K),x,_)}if((0,f.He)(t)){var ee="".concat(S,"-group"),ne="".concat(ee,"-addon"),ue="".concat(ee,"-wrapper"),ge=i()("".concat(S,"-wrapper"),ee,d==null?void 0:d.wrapper,o==null?void 0:o.wrapper),Ee=i()(ue,(0,m.Z)({},"".concat(ue,"-disabled"),L),d==null?void 0:d.group,o==null?void 0:o.groupWrapper);x=n.createElement(Y,{className:Ee},n.createElement(k,{className:ge},N&&n.createElement(v,{className:ne},N),x,M&&n.createElement(v,{className:ne},M)))}return n.cloneElement(x,{className:i()((G=x.props)===null||G===void 0?void 0:G.className,se)||null,style:(0,A.Z)((0,A.Z)({},(W=x.props)===null||W===void 0?void 0:W.style),ce),hidden:R})},g=r,I=l(74902),B=l(97685),le=l(91),ie=l(21770),Ze=l(98423),Ne=l(82234),Re=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","count","type","classes","classNames","styles","onCompositionStart","onCompositionEnd"],be=(0,n.forwardRef)(function(a,t){var G=a.autoComplete,W=a.onChange,X=a.onFocus,D=a.onBlur,S=a.onPressEnter,K=a.onKeyDown,F=a.prefixCls,N=F===void 0?"rc-input":F,M=a.disabled,se=a.htmlSize,ce=a.className,L=a.maxLength,j=a.suffix,de=a.showCount,Q=a.count,E=a.type,V=E===void 0?"text":E,ve=a.classes,R=a.classNames,d=a.styles,o=a.onCompositionStart,O=a.onCompositionEnd,y=(0,le.Z)(a,Re),h=(0,n.useState)(!1),$=(0,B.Z)(h,2),fe=$[0],Y=$[1],k=(0,n.useRef)(!1),v=(0,n.useRef)(null),z=function(e){v.current&&(0,f.nH)(v.current,e)},me=(0,ie.Z)(a.defaultValue,{value:a.value}),q=(0,B.Z)(me,2),x=q[0],Z=q[1],H=x==null?"":String(x),U=(0,n.useState)(null),re=(0,B.Z)(U,2),P=re[0],he=re[1],c=(0,Ne.Z)(Q,de),p=c.max||L,_=c.strategy(H),ee=!!p&&_>p;(0,n.useImperativeHandle)(t,function(){return{focus:z,blur:function(){var e;(e=v.current)===null||e===void 0||e.blur()},setSelectionRange:function(e,b,oe){var w;(w=v.current)===null||w===void 0||w.setSelectionRange(e,b,oe)},select:function(){var e;(e=v.current)===null||e===void 0||e.select()},input:v.current}}),(0,n.useEffect)(function(){Y(function(s){return s&&M?!1:s})},[M]);var ne=function(e,b,oe){var w=b;if(!k.current&&c.exceedFormatter&&c.max&&c.strategy(b)>c.max){if(w=c.exceedFormatter(b,{max:c.max}),b!==w){var xe,Ce;he([((xe=v.current)===null||xe===void 0?void 0:xe.selectionStart)||0,((Ce=v.current)===null||Ce===void 0?void 0:Ce.selectionEnd)||0])}}else if(oe.source==="compositionEnd")return;Z(w),v.current&&(0,f.rJ)(v.current,e,W,w)};(0,n.useEffect)(function(){if(P){var s;(s=v.current)===null||s===void 0||s.setSelectionRange.apply(s,(0,I.Z)(P))}},[P]);var ue=function(e){ne(e,e.target.value,{source:"change"})},ge=function(e){k.current=!1,ne(e,e.currentTarget.value,{source:"compositionEnd"}),O==null||O(e)},Ee=function(e){S&&e.key==="Enter"&&S(e),K==null||K(e)},ye=function(e){Y(!0),X==null||X(e)},te=function(e){Y(!1),D==null||D(e)},ae=function(e){Z(""),z(),v.current&&(0,f.rJ)(v.current,e,W)},Ae=ee&&"".concat(N,"-out-of-range"),Be=function(){var e=(0,Ze.Z)(a,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","count","classes","htmlSize","styles","classNames"]);return n.createElement("input",(0,C.Z)({autoComplete:G},e,{onChange:ue,onFocus:ye,onBlur:te,onKeyDown:Ee,className:i()(N,(0,m.Z)({},"".concat(N,"-disabled"),M),R==null?void 0:R.input),style:d==null?void 0:d.input,ref:v,size:se,type:V,onCompositionStart:function(oe){k.current=!0,o==null||o(oe)},onCompositionEnd:ge}))},De=function(){var e=Number(p)>0;if(j||c.show){var b=c.showFormatter?c.showFormatter({value:H,count:_,maxLength:p}):"".concat(_).concat(e?" / ".concat(p):"");return n.createElement(n.Fragment,null,c.show&&n.createElement("span",{className:i()("".concat(N,"-show-count-suffix"),(0,m.Z)({},"".concat(N,"-show-count-has-suffix"),!!j),R==null?void 0:R.count),style:(0,A.Z)({},d==null?void 0:d.count)},b),j)}return null};return n.createElement(g,(0,C.Z)({},y,{prefixCls:N,className:i()(ce,Ae),handleReset:ae,value:H,focused:fe,triggerFocus:z,suffix:De(),disabled:M,classes:ve,classNames:R,styles:d}),Be())}),Ie=be,we=Ie},87887:function(Se,T,l){l.d(T,{He:function(){return A},X3:function(){return C},nH:function(){return J},rJ:function(){return m}});function A(u){return!!(u.addonBefore||u.addonAfter)}function C(u){return!!(u.prefix||u.suffix||u.allowClear)}function m(u,i,n,f){if(n){var r=i;if(i.type==="click"){var g=u.cloneNode(!0);r=Object.create(i,{target:{value:g},currentTarget:{value:g}}),g.value="",n(r);return}if(u.type!=="file"&&f!==void 0){var I=u.cloneNode(!0);r=Object.create(i,{target:{value:I},currentTarget:{value:I}}),I.value=f,n(r);return}n(r)}}function J(u,i){if(u){u.focus(i);var n=i||{},f=n.cursor;if(f){var r=u.value.length;switch(f){case"start":u.setSelectionRange(0,0);break;case"end":u.setSelectionRange(r,r);break;default:u.setSelectionRange(0,r)}}}}}}]);
