"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[6140],{89705:function(Ve,ge,v){v.d(ge,{Z:function(){return Q}});var a=v(87462),le=v(67294),he={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},pe=he,$e=v(13401),_=function(j,T){return le.createElement($e.Z,(0,a.Z)({},j,{ref:T,icon:pe}))},Q=le.forwardRef(_)},24969:function(Ve,ge,v){v.d(ge,{Z:function(){return Q}});var a=v(87462),le=v(67294),he={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},pe=he,$e=v(13401),_=function(j,T){return le.createElement($e.Z,(0,a.Z)({},j,{ref:T,icon:pe}))},Q=le.forwardRef(_)},56140:function(Ve,ge,v){v.d(ge,{Z:function(){return za}});var a=v(67294),le=v(97937),he=v(89705),pe=v(24969),$e=v(93967),_=v.n($e),Q=v(87462),G=v(4942),j=v(1413),T=v(97685),Me=v(71002),Te=v(91),Fe=v(21770),It=v(31131),Ee=(0,a.createContext)(null),Ue=v(74902),Oe=v(9220),Zt=v(66680),wt=v(42550),Ye=v(75164),Lt=function(t){var n=t.activeTabOffset,r=t.horizontal,i=t.rtl,l=t.indicator,c=l===void 0?{}:l,o=c.size,s=c.align,u=s===void 0?"center":s,b=(0,a.useState)(),S=(0,T.Z)(b,2),$=S[0],w=S[1],N=(0,a.useRef)(),E=a.useCallback(function(g){return typeof o=="function"?o(g):typeof o=="number"?o:g},[o]);function L(){Ye.Z.cancel(N.current)}return(0,a.useEffect)(function(){var g={};if(n)if(r){g.width=E(n.width);var f=i?"right":"left";u==="start"&&(g[f]=n[f]),u==="center"&&(g[f]=n[f]+n.width/2,g.transform=i?"translateX(50%)":"translateX(-50%)"),u==="end"&&(g[f]=n[f]+n.width,g.transform="translateX(-100%)")}else g.height=E(n.height),u==="start"&&(g.top=n.top),u==="center"&&(g.top=n.top+n.height/2,g.transform="translateY(-50%)"),u==="end"&&(g.top=n.top+n.height,g.transform="translateY(-100%)");return L(),N.current=(0,Ye.Z)(function(){w(g)}),L},[n,r,i,u,E]),{style:$}},Nt=Lt,Qe={width:0,height:0,left:0,top:0};function zt(e,t,n){return(0,a.useMemo)(function(){for(var r,i=new Map,l=t.get((r=e[0])===null||r===void 0?void 0:r.key)||Qe,c=l.left+l.width,o=0;o<e.length;o+=1){var s=e[o].key,u=t.get(s);if(!u){var b;u=t.get((b=e[o-1])===null||b===void 0?void 0:b.key)||Qe}var S=i.get(s)||(0,j.Z)({},u);S.right=c-S.left-S.width,i.set(s,S)}return i},[e.map(function(r){return r.key}).join("_"),t,n])}function Je(e,t){var n=a.useRef(e),r=a.useState({}),i=(0,T.Z)(r,2),l=i[1];function c(o){var s=typeof o=="function"?o(n.current):o;s!==n.current&&t(s,n.current),n.current=s,l({})}return[n.current,c]}var Mt=.1,qe=.01,Pe=20,et=Math.pow(.995,Pe);function Ot(e,t){var n=(0,a.useState)(),r=(0,T.Z)(n,2),i=r[0],l=r[1],c=(0,a.useState)(0),o=(0,T.Z)(c,2),s=o[0],u=o[1],b=(0,a.useState)(0),S=(0,T.Z)(b,2),$=S[0],w=S[1],N=(0,a.useState)(),E=(0,T.Z)(N,2),L=E[0],g=E[1],f=(0,a.useRef)();function z(m){var Z=m.touches[0],d=Z.screenX,R=Z.screenY;l({x:d,y:R}),window.clearInterval(f.current)}function W(m){if(i){m.preventDefault();var Z=m.touches[0],d=Z.screenX,R=Z.screenY;l({x:d,y:R});var y=d-i.x,h=R-i.y;t(y,h);var k=Date.now();u(k),w(k-s),g({x:y,y:h})}}function H(){if(i&&(l(null),g(null),L)){var m=L.x/$,Z=L.y/$,d=Math.abs(m),R=Math.abs(Z);if(Math.max(d,R)<Mt)return;var y=m,h=Z;f.current=window.setInterval(function(){if(Math.abs(y)<qe&&Math.abs(h)<qe){window.clearInterval(f.current);return}y*=et,h*=et,t(y*Pe,h*Pe)},Pe)}}var B=(0,a.useRef)();function I(m){var Z=m.deltaX,d=m.deltaY,R=0,y=Math.abs(Z),h=Math.abs(d);y===h?R=B.current==="x"?Z:d:y>h?(R=Z,B.current="x"):(R=d,B.current="y"),t(-R,-R)&&m.preventDefault()}var P=(0,a.useRef)(null);P.current={onTouchStart:z,onTouchMove:W,onTouchEnd:H,onWheel:I},a.useEffect(function(){function m(y){P.current.onTouchStart(y)}function Z(y){P.current.onTouchMove(y)}function d(y){P.current.onTouchEnd(y)}function R(y){P.current.onWheel(y)}return document.addEventListener("touchmove",Z,{passive:!1}),document.addEventListener("touchend",d,{passive:!1}),e.current.addEventListener("touchstart",m,{passive:!1}),e.current.addEventListener("wheel",R),function(){document.removeEventListener("touchmove",Z),document.removeEventListener("touchend",d)}},[])}var Bt=v(8410);function tt(e){var t=(0,a.useState)(0),n=(0,T.Z)(t,2),r=n[0],i=n[1],l=(0,a.useRef)(0),c=(0,a.useRef)();return c.current=e,(0,Bt.o)(function(){var o;(o=c.current)===null||o===void 0||o.call(c)},[r]),function(){l.current===r&&(l.current+=1,i(l.current))}}function At(e){var t=(0,a.useRef)([]),n=(0,a.useState)({}),r=(0,T.Z)(n,2),i=r[1],l=(0,a.useRef)(typeof e=="function"?e():e),c=tt(function(){var s=l.current;t.current.forEach(function(u){s=u(s)}),t.current=[],l.current=s,i({})});function o(s){t.current.push(s),c()}return[l.current,o]}var at={width:0,height:0,left:0,top:0,right:0};function Dt(e,t,n,r,i,l,c){var o=c.tabs,s=c.tabPosition,u=c.rtl,b,S,$;return["top","bottom"].includes(s)?(b="width",S=u?"right":"left",$=Math.abs(n)):(b="height",S="top",$=-n),(0,a.useMemo)(function(){if(!o.length)return[0,0];for(var w=o.length,N=w,E=0;E<w;E+=1){var L=e.get(o[E].key)||at;if(L[S]+L[b]>$+t){N=E-1;break}}for(var g=0,f=w-1;f>=0;f-=1){var z=e.get(o[f].key)||at;if(z[S]<$){g=f+1;break}}return g>=N?[0,0]:[g,N]},[e,t,r,i,l,$,s,o.map(function(w){return w.key}).join("_"),u])}function nt(e){var t;return e instanceof Map?(t={},e.forEach(function(n,r){t[r]=n})):t=e,JSON.stringify(t)}var _t="TABS_DQ";function rt(e){return String(e).replace(/"/g,_t)}function it(e,t,n,r){return!(!n||r||e===!1||e===void 0&&(t===!1||t===null))}var Wt=a.forwardRef(function(e,t){var n=e.prefixCls,r=e.editable,i=e.locale,l=e.style;return!r||r.showAdd===!1?null:a.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:l,"aria-label":(i==null?void 0:i.addAriaLabel)||"Add tab",onClick:function(o){r.onEdit("add",{event:o})}},r.addIcon||"+")}),ot=Wt,Ht=a.forwardRef(function(e,t){var n=e.position,r=e.prefixCls,i=e.extra;if(!i)return null;var l,c={};return(0,Me.Z)(i)==="object"&&!a.isValidElement(i)?c=i:c.right=i,n==="right"&&(l=c.right),n==="left"&&(l=c.left),l?a.createElement("div",{className:"".concat(r,"-extra-content"),ref:t},l):null}),lt=Ht,Gt=v(29171),ct=v(72512),ee=v(15105),jt=a.forwardRef(function(e,t){var n=e.prefixCls,r=e.id,i=e.tabs,l=e.locale,c=e.mobile,o=e.moreIcon,s=o===void 0?"More":o,u=e.moreTransitionName,b=e.style,S=e.className,$=e.editable,w=e.tabBarGutter,N=e.rtl,E=e.removeAriaLabel,L=e.onTabClick,g=e.getPopupContainer,f=e.popupClassName,z=(0,a.useState)(!1),W=(0,T.Z)(z,2),H=W[0],B=W[1],I=(0,a.useState)(null),P=(0,T.Z)(I,2),m=P[0],Z=P[1],d="".concat(r,"-more-popup"),R="".concat(n,"-dropdown"),y=m!==null?"".concat(d,"-").concat(m):null,h=l==null?void 0:l.dropdownAriaLabel;function k(C,A){C.preventDefault(),C.stopPropagation(),$.onEdit("remove",{key:A,event:C})}var ce=a.createElement(ct.ZP,{onClick:function(A){var F=A.key,X=A.domEvent;L(F,X),B(!1)},prefixCls:"".concat(R,"-menu"),id:d,tabIndex:-1,role:"listbox","aria-activedescendant":y,selectedKeys:[m],"aria-label":h!==void 0?h:"expanded dropdown"},i.map(function(C){var A=C.closable,F=C.disabled,X=C.closeIcon,K=C.key,ae=C.label,q=it(A,X,$,F);return a.createElement(ct.sN,{key:K,id:"".concat(d,"-").concat(K),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(K),disabled:F},a.createElement("span",null,ae),q&&a.createElement("button",{type:"button","aria-label":E||"remove",tabIndex:0,className:"".concat(R,"-menu-item-remove"),onClick:function(be){be.stopPropagation(),k(be,K)}},X||$.removeIcon||"\xD7"))}));function J(C){for(var A=i.filter(function(q){return!q.disabled}),F=A.findIndex(function(q){return q.key===m})||0,X=A.length,K=0;K<X;K+=1){F=(F+C+X)%X;var ae=A[F];if(!ae.disabled){Z(ae.key);return}}}function V(C){var A=C.which;if(!H){[ee.Z.DOWN,ee.Z.SPACE,ee.Z.ENTER].includes(A)&&(B(!0),C.preventDefault());return}switch(A){case ee.Z.UP:J(-1),C.preventDefault();break;case ee.Z.DOWN:J(1),C.preventDefault();break;case ee.Z.ESC:B(!1);break;case ee.Z.SPACE:case ee.Z.ENTER:m!==null&&L(m,C);break}}(0,a.useEffect)(function(){var C=document.getElementById(y);C&&C.scrollIntoView&&C.scrollIntoView(!1)},[m]),(0,a.useEffect)(function(){H||Z(null)},[H]);var Y=(0,G.Z)({},N?"marginRight":"marginLeft",w);i.length||(Y.visibility="hidden",Y.order=1);var se=_()((0,G.Z)({},"".concat(R,"-rtl"),N)),te=c?null:a.createElement(Gt.Z,{prefixCls:R,overlay:ce,trigger:["hover"],visible:i.length?H:!1,transitionName:u,onVisibleChange:B,overlayClassName:_()(se,f),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:g},a.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:Y,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":d,id:"".concat(r,"-more"),"aria-expanded":H,onKeyDown:V},s));return a.createElement("div",{className:_()("".concat(n,"-nav-operations"),S),style:b,ref:t},te,a.createElement(ot,{prefixCls:n,locale:l,editable:$}))}),Xt=a.memo(jt,function(e,t){return t.tabMoving}),Kt=function(t){var n=t.prefixCls,r=t.id,i=t.active,l=t.tab,c=l.key,o=l.label,s=l.disabled,u=l.closeIcon,b=l.icon,S=t.closable,$=t.renderWrapper,w=t.removeAriaLabel,N=t.editable,E=t.onClick,L=t.onFocus,g=t.style,f="".concat(n,"-tab"),z=it(S,u,N,s);function W(P){s||E(P)}function H(P){P.preventDefault(),P.stopPropagation(),N.onEdit("remove",{key:c,event:P})}var B=a.useMemo(function(){return b&&typeof o=="string"?a.createElement("span",null,o):o},[o,b]),I=a.createElement("div",{key:c,"data-node-key":rt(c),className:_()(f,(0,G.Z)((0,G.Z)((0,G.Z)({},"".concat(f,"-with-remove"),z),"".concat(f,"-active"),i),"".concat(f,"-disabled"),s)),style:g,onClick:W},a.createElement("div",{role:"tab","aria-selected":i,id:r&&"".concat(r,"-tab-").concat(c),className:"".concat(f,"-btn"),"aria-controls":r&&"".concat(r,"-panel-").concat(c),"aria-disabled":s,tabIndex:s?null:0,onClick:function(m){m.stopPropagation(),W(m)},onKeyDown:function(m){[ee.Z.SPACE,ee.Z.ENTER].includes(m.which)&&(m.preventDefault(),W(m))},onFocus:L},b&&a.createElement("span",{className:"".concat(f,"-icon")},b),o&&B),z&&a.createElement("button",{type:"button","aria-label":w||"remove",tabIndex:0,className:"".concat(f,"-remove"),onClick:function(m){m.stopPropagation(),H(m)}},u||N.removeIcon||"\xD7"));return $?$(I):I},kt=Kt,Vt=function(t,n){var r=t.offsetWidth,i=t.offsetHeight,l=t.offsetTop,c=t.offsetLeft,o=t.getBoundingClientRect(),s=o.width,u=o.height,b=o.x,S=o.y;return Math.abs(s-r)<1?[s,u,b-n.x,S-n.y]:[r,i,c,l]},fe=function(t){var n=t.current||{},r=n.offsetWidth,i=r===void 0?0:r,l=n.offsetHeight,c=l===void 0?0:l;if(t.current){var o=t.current.getBoundingClientRect(),s=o.width,u=o.height;if(Math.abs(s-i)<1)return[s,u]}return[i,c]},Re=function(t,n){return t[n?0:1]},Ft=a.forwardRef(function(e,t){var n=e.className,r=e.style,i=e.id,l=e.animated,c=e.activeKey,o=e.rtl,s=e.extra,u=e.editable,b=e.locale,S=e.tabPosition,$=e.tabBarGutter,w=e.children,N=e.onTabClick,E=e.onTabScroll,L=e.indicator,g=a.useContext(Ee),f=g.prefixCls,z=g.tabs,W=(0,a.useRef)(null),H=(0,a.useRef)(null),B=(0,a.useRef)(null),I=(0,a.useRef)(null),P=(0,a.useRef)(null),m=(0,a.useRef)(null),Z=(0,a.useRef)(null),d=S==="top"||S==="bottom",R=Je(0,function(O,x){d&&E&&E({direction:O>x?"left":"right"})}),y=(0,T.Z)(R,2),h=y[0],k=y[1],ce=Je(0,function(O,x){!d&&E&&E({direction:O>x?"top":"bottom"})}),J=(0,T.Z)(ce,2),V=J[0],Y=J[1],se=(0,a.useState)([0,0]),te=(0,T.Z)(se,2),C=te[0],A=te[1],F=(0,a.useState)([0,0]),X=(0,T.Z)(F,2),K=X[0],ae=X[1],q=(0,a.useState)([0,0]),re=(0,T.Z)(q,2),be=re[0],Be=re[1],Ae=(0,a.useState)([0,0]),ye=(0,T.Z)(Ae,2),De=ye[0],M=ye[1],de=At(new Map),me=(0,T.Z)(de,2),Ma=me[0],Oa=me[1],Ie=zt(z,Ma,K[0]),_e=Re(C,d),xe=Re(K,d),We=Re(be,d),bt=Re(De,d),mt=_e<xe+We,ne=mt?_e-bt:_e-We,Ba="".concat(f,"-nav-operations-hidden"),ie=0,ue=0;d&&o?(ie=0,ue=Math.max(0,xe-ne)):(ie=Math.min(0,ne-xe),ue=0);function He(O){return O<ie?ie:O>ue?ue:O}var Ge=(0,a.useRef)(null),Aa=(0,a.useState)(),gt=(0,T.Z)(Aa,2),Ze=gt[0],ht=gt[1];function je(){ht(Date.now())}function Xe(){Ge.current&&clearTimeout(Ge.current)}Ot(I,function(O,x){function D(U,ve){U(function(oe){var Ne=He(oe+ve);return Ne})}return mt?(d?D(k,O):D(Y,x),Xe(),je(),!0):!1}),(0,a.useEffect)(function(){return Xe(),Ze&&(Ge.current=setTimeout(function(){ht(0)},100)),Xe},[Ze]);var Da=Dt(Ie,ne,d?h:V,xe,We,bt,(0,j.Z)((0,j.Z)({},e),{},{tabs:z})),pt=(0,T.Z)(Da,2),_a=pt[0],Wa=pt[1],$t=(0,Zt.Z)(function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:c,x=Ie.get(O)||{width:0,height:0,left:0,right:0,top:0};if(d){var D=h;o?x.right<h?D=x.right:x.right+x.width>h+ne&&(D=x.right+x.width-ne):x.left<-h?D=-x.left:x.left+x.width>-h+ne&&(D=-(x.left+x.width-ne)),Y(0),k(He(D))}else{var U=V;x.top<-V?U=-x.top:x.top+x.height>-V+ne&&(U=-(x.top+x.height-ne)),k(0),Y(He(U))}}),we={};S==="top"||S==="bottom"?we[o?"marginRight":"marginLeft"]=$:we.marginTop=$;var St=z.map(function(O,x){var D=O.key;return a.createElement(kt,{id:i,prefixCls:f,key:D,tab:O,style:x===0?void 0:we,closable:O.closable,editable:u,active:D===c,renderWrapper:w,removeAriaLabel:b==null?void 0:b.removeAriaLabel,onClick:function(ve){N(D,ve)},onFocus:function(){$t(D),je(),I.current&&(o||(I.current.scrollLeft=0),I.current.scrollTop=0)}})}),yt=function(){return Oa(function(){var x,D=new Map,U=(x=P.current)===null||x===void 0?void 0:x.getBoundingClientRect();return z.forEach(function(ve){var oe,Ne=ve.key,Rt=(oe=P.current)===null||oe===void 0?void 0:oe.querySelector('[data-node-key="'.concat(rt(Ne),'"]'));if(Rt){var Ka=Vt(Rt,U),ze=(0,T.Z)(Ka,4),ka=ze[0],Va=ze[1],Fa=ze[2],Ua=ze[3];D.set(Ne,{width:ka,height:Va,left:Fa,top:Ua})}}),D})};(0,a.useEffect)(function(){yt()},[z.map(function(O){return O.key}).join("_")]);var Le=tt(function(){var O=fe(W),x=fe(H),D=fe(B);A([O[0]-x[0]-D[0],O[1]-x[1]-D[1]]);var U=fe(Z);Be(U);var ve=fe(m);M(ve);var oe=fe(P);ae([oe[0]-U[0],oe[1]-U[1]]),yt()}),Ha=z.slice(0,_a),Ga=z.slice(Wa+1),xt=[].concat((0,Ue.Z)(Ha),(0,Ue.Z)(Ga)),Ct=Ie.get(c),ja=Nt({activeTabOffset:Ct,horizontal:d,indicator:L,rtl:o}),Xa=ja.style;(0,a.useEffect)(function(){$t()},[c,ie,ue,nt(Ct),nt(Ie),d]),(0,a.useEffect)(function(){Le()},[o]);var Tt=!!xt.length,Ce="".concat(f,"-nav-wrap"),Ke,ke,Et,Pt;return d?o?(ke=h>0,Ke=h!==ue):(Ke=h<0,ke=h!==ie):(Et=V<0,Pt=V!==ie),a.createElement(Oe.Z,{onResize:Le},a.createElement("div",{ref:(0,wt.x1)(t,W),role:"tablist",className:_()("".concat(f,"-nav"),n),style:r,onKeyDown:function(){je()}},a.createElement(lt,{ref:H,position:"left",extra:s,prefixCls:f}),a.createElement(Oe.Z,{onResize:Le},a.createElement("div",{className:_()(Ce,(0,G.Z)((0,G.Z)((0,G.Z)((0,G.Z)({},"".concat(Ce,"-ping-left"),Ke),"".concat(Ce,"-ping-right"),ke),"".concat(Ce,"-ping-top"),Et),"".concat(Ce,"-ping-bottom"),Pt)),ref:I},a.createElement(Oe.Z,{onResize:Le},a.createElement("div",{ref:P,className:"".concat(f,"-nav-list"),style:{transform:"translate(".concat(h,"px, ").concat(V,"px)"),transition:Ze?"none":void 0}},St,a.createElement(ot,{ref:Z,prefixCls:f,locale:b,editable:u,style:(0,j.Z)((0,j.Z)({},St.length===0?void 0:we),{},{visibility:Tt?"hidden":null})}),a.createElement("div",{className:_()("".concat(f,"-ink-bar"),(0,G.Z)({},"".concat(f,"-ink-bar-animated"),l.inkBar)),style:Xa}))))),a.createElement(Xt,(0,Q.Z)({},e,{removeAriaLabel:b==null?void 0:b.removeAriaLabel,ref:m,prefixCls:f,tabs:xt,className:!Tt&&Ba,tabMoving:!!Ze})),a.createElement(lt,{ref:B,position:"right",extra:s,prefixCls:f})))}),st=Ft,Ut=a.forwardRef(function(e,t){var n=e.prefixCls,r=e.className,i=e.style,l=e.id,c=e.active,o=e.tabKey,s=e.children;return a.createElement("div",{id:l&&"".concat(l,"-panel-").concat(o),role:"tabpanel",tabIndex:c?0:-1,"aria-labelledby":l&&"".concat(l,"-tab-").concat(o),"aria-hidden":!c,style:i,className:_()(n,c&&"".concat(n,"-active"),r),ref:t},s)}),dt=Ut,Yt=["renderTabBar"],Qt=["label","key"],Jt=function(t){var n=t.renderTabBar,r=(0,Te.Z)(t,Yt),i=a.useContext(Ee),l=i.tabs;if(n){var c=(0,j.Z)((0,j.Z)({},r),{},{panes:l.map(function(o){var s=o.label,u=o.key,b=(0,Te.Z)(o,Qt);return a.createElement(dt,(0,Q.Z)({tab:s,key:u,tabKey:u},b))})});return n(c,st)}return a.createElement(st,r)},qt=Jt,ea=v(82225),ta=["key","forceRender","style","className","destroyInactiveTabPane"],aa=function(t){var n=t.id,r=t.activeKey,i=t.animated,l=t.tabPosition,c=t.destroyInactiveTabPane,o=a.useContext(Ee),s=o.prefixCls,u=o.tabs,b=i.tabPane,S="".concat(s,"-tabpane");return a.createElement("div",{className:_()("".concat(s,"-content-holder"))},a.createElement("div",{className:_()("".concat(s,"-content"),"".concat(s,"-content-").concat(l),(0,G.Z)({},"".concat(s,"-content-animated"),b))},u.map(function($){var w=$.key,N=$.forceRender,E=$.style,L=$.className,g=$.destroyInactiveTabPane,f=(0,Te.Z)($,ta),z=w===r;return a.createElement(ea.ZP,(0,Q.Z)({key:w,visible:z,forceRender:N,removeOnLeave:!!(c||g),leavedClassName:"".concat(S,"-hidden")},i.tabPaneMotion),function(W,H){var B=W.style,I=W.className;return a.createElement(dt,(0,Q.Z)({},f,{prefixCls:S,id:n,tabKey:w,animated:b,active:z,style:(0,j.Z)((0,j.Z)({},E),B),className:_()(L,I),ref:H}))})})))},na=aa,Ya=v(80334);function ra(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},t;return e===!1?t={inkBar:!1,tabPane:!1}:e===!0?t={inkBar:!0,tabPane:!1}:t=(0,j.Z)({inkBar:!0},(0,Me.Z)(e)==="object"?e:{}),t.tabPaneMotion&&t.tabPane===void 0&&(t.tabPane=!0),!t.tabPaneMotion&&t.tabPane&&(t.tabPane=!1),t}var ia=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName","indicator"],ut=0,oa=a.forwardRef(function(e,t){var n=e.id,r=e.prefixCls,i=r===void 0?"rc-tabs":r,l=e.className,c=e.items,o=e.direction,s=e.activeKey,u=e.defaultActiveKey,b=e.editable,S=e.animated,$=e.tabPosition,w=$===void 0?"top":$,N=e.tabBarGutter,E=e.tabBarStyle,L=e.tabBarExtraContent,g=e.locale,f=e.moreIcon,z=e.moreTransitionName,W=e.destroyInactiveTabPane,H=e.renderTabBar,B=e.onChange,I=e.onTabClick,P=e.onTabScroll,m=e.getPopupContainer,Z=e.popupClassName,d=e.indicator,R=(0,Te.Z)(e,ia),y=a.useMemo(function(){return(c||[]).filter(function(M){return M&&(0,Me.Z)(M)==="object"&&"key"in M})},[c]),h=o==="rtl",k=ra(S),ce=(0,a.useState)(!1),J=(0,T.Z)(ce,2),V=J[0],Y=J[1];(0,a.useEffect)(function(){Y((0,It.Z)())},[]);var se=(0,Fe.Z)(function(){var M;return(M=y[0])===null||M===void 0?void 0:M.key},{value:s,defaultValue:u}),te=(0,T.Z)(se,2),C=te[0],A=te[1],F=(0,a.useState)(function(){return y.findIndex(function(M){return M.key===C})}),X=(0,T.Z)(F,2),K=X[0],ae=X[1];(0,a.useEffect)(function(){var M=y.findIndex(function(me){return me.key===C});if(M===-1){var de;M=Math.max(0,Math.min(K,y.length-1)),A((de=y[M])===null||de===void 0?void 0:de.key)}ae(M)},[y.map(function(M){return M.key}).join("_"),C,K]);var q=(0,Fe.Z)(null,{value:n}),re=(0,T.Z)(q,2),be=re[0],Be=re[1];(0,a.useEffect)(function(){n||(Be("rc-tabs-".concat(ut)),ut+=1)},[]);function Ae(M,de){I==null||I(M,de);var me=M!==C;A(M),me&&(B==null||B(M))}var ye={id:be,activeKey:C,animated:k,tabPosition:w,rtl:h,mobile:V},De=(0,j.Z)((0,j.Z)({},ye),{},{editable:b,locale:g,moreIcon:f,moreTransitionName:z,tabBarGutter:N,onTabClick:Ae,onTabScroll:P,extra:L,style:E,panes:null,getPopupContainer:m,popupClassName:Z,indicator:d});return a.createElement(Ee.Provider,{value:{tabs:y,prefixCls:i}},a.createElement("div",(0,Q.Z)({ref:t,id:n,className:_()(i,"".concat(i,"-").concat(w),(0,G.Z)((0,G.Z)((0,G.Z)({},"".concat(i,"-mobile"),V),"".concat(i,"-editable"),b),"".concat(i,"-rtl"),h),l)},R),a.createElement(qt,(0,Q.Z)({},De,{renderTabBar:H})),a.createElement(na,(0,Q.Z)({destroyInactiveTabPane:W},ye,{animated:k}))))}),la=oa,ca=la,sa=v(53124),da=v(35792),ua=v(98675),va=v(33603);const fa={motionAppear:!1,motionEnter:!0,motionLeave:!0};function ba(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{inkBar:!0,tabPane:!1},n;return t===!1?n={inkBar:!1,tabPane:!1}:t===!0?n={inkBar:!0,tabPane:!0}:n=Object.assign({inkBar:!0},typeof t=="object"?t:{}),n.tabPane&&(n.tabPaneMotion=Object.assign(Object.assign({},fa),{motionName:(0,va.m)(e,"switch")})),n}var ma=v(50344),ga=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function ha(e){return e.filter(t=>t)}function pa(e,t){if(e)return e;const n=(0,ma.Z)(t).map(r=>{if(a.isValidElement(r)){const{key:i,props:l}=r,c=l||{},{tab:o}=c,s=ga(c,["tab"]);return Object.assign(Object.assign({key:String(i)},s),{label:o})}return null});return ha(n)}var p=v(54548),Se=v(14747),$a=v(91945),Sa=v(45503),vt=v(67771),ya=e=>{const{componentCls:t,motionDurationSlow:n}=e;return[{[t]:{[`${t}-switch`]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:`opacity ${n}`}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:`opacity ${n}`}}}}},[(0,vt.oN)(e,"slide-up"),(0,vt.oN)(e,"slide-down")]]};const xa=e=>{const{componentCls:t,tabsCardPadding:n,cardBg:r,cardGutter:i,colorBorderSecondary:l,itemSelectedColor:c}=e;return{[`${t}-card`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{margin:0,padding:n,background:r,border:`${(0,p.bf)(e.lineWidth)} ${e.lineType} ${l}`,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`},[`${t}-tab-active`]:{color:c,background:e.colorBgContainer},[`${t}-ink-bar`]:{visibility:"hidden"}},[`&${t}-top, &${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginLeft:{_skip_check_:!0,value:(0,p.bf)(i)}}}},[`&${t}-top`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`${(0,p.bf)(e.borderRadiusLG)} ${(0,p.bf)(e.borderRadiusLG)} 0 0`},[`${t}-tab-active`]:{borderBottomColor:e.colorBgContainer}}},[`&${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`0 0 ${(0,p.bf)(e.borderRadiusLG)} ${(0,p.bf)(e.borderRadiusLG)}`},[`${t}-tab-active`]:{borderTopColor:e.colorBgContainer}}},[`&${t}-left, &${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginTop:(0,p.bf)(i)}}},[`&${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${(0,p.bf)(e.borderRadiusLG)} 0 0 ${(0,p.bf)(e.borderRadiusLG)}`}},[`${t}-tab-active`]:{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}}},[`&${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${(0,p.bf)(e.borderRadiusLG)} ${(0,p.bf)(e.borderRadiusLG)} 0`}},[`${t}-tab-active`]:{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}}}}}},Ca=e=>{const{componentCls:t,itemHoverColor:n,dropdownEdgeChildVerticalPadding:r}=e;return{[`${t}-dropdown`]:Object.assign(Object.assign({},(0,Se.Wf)(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"},[`${t}-dropdown-menu`]:{maxHeight:e.tabsDropdownHeight,margin:0,padding:`${(0,p.bf)(r)} 0`,overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary,"&-item":Object.assign(Object.assign({},Se.vS),{display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:`${(0,p.bf)(e.paddingXXS)} ${(0,p.bf)(e.paddingSM)}`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:n}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})}})}},Ta=e=>{const{componentCls:t,margin:n,colorBorderSecondary:r,horizontalMargin:i,verticalItemPadding:l,verticalItemMargin:c,calc:o}=e;return{[`${t}-top, ${t}-bottom`]:{flexDirection:"column",[`> ${t}-nav, > div > ${t}-nav`]:{margin:i,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:`${(0,p.bf)(e.lineWidth)} ${e.lineType} ${r}`,content:"''"},[`${t}-ink-bar`]:{height:e.lineWidthBold,"&-animated":{transition:`width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`}},[`${t}-nav-wrap`]:{"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight},[`&${t}-nav-wrap-ping-left::before`]:{opacity:1},[`&${t}-nav-wrap-ping-right::after`]:{opacity:1}}}},[`${t}-top`]:{[`> ${t}-nav,
        > div > ${t}-nav`]:{"&::before":{bottom:0},[`${t}-ink-bar`]:{bottom:0}}},[`${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,marginTop:n,marginBottom:0,"&::before":{top:0},[`${t}-ink-bar`]:{top:0}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0}},[`${t}-left, ${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{flexDirection:"column",minWidth:o(e.controlHeight).mul(1.25).equal(),[`${t}-tab`]:{padding:l,textAlign:"center"},[`${t}-tab + ${t}-tab`]:{margin:c},[`${t}-nav-wrap`]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom},[`&${t}-nav-wrap-ping-top::before`]:{opacity:1},[`&${t}-nav-wrap-ping-bottom::after`]:{opacity:1}},[`${t}-ink-bar`]:{width:e.lineWidthBold,"&-animated":{transition:`height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`}},[`${t}-nav-list, ${t}-nav-operations`]:{flex:"1 0 auto",flexDirection:"column"}}},[`${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-ink-bar`]:{right:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{marginLeft:{_skip_check_:!0,value:(0,p.bf)(o(e.lineWidth).mul(-1).equal())},borderLeft:{_skip_check_:!0,value:`${(0,p.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingLeft:{_skip_check_:!0,value:e.paddingLG}}}},[`${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,[`${t}-ink-bar`]:{left:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0,marginRight:{_skip_check_:!0,value:o(e.lineWidth).mul(-1).equal()},borderRight:{_skip_check_:!0,value:`${(0,p.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingRight:{_skip_check_:!0,value:e.paddingLG}}}}}},Ea=e=>{const{componentCls:t,cardPaddingSM:n,cardPaddingLG:r,horizontalItemPaddingSM:i,horizontalItemPaddingLG:l}=e;return{[t]:{"&-small":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:i,fontSize:e.titleFontSizeSM}}},"&-large":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:l,fontSize:e.titleFontSizeLG}}}},[`${t}-card`]:{[`&${t}-small`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:n}},[`&${t}-bottom`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`0 0 ${(0,p.bf)(e.borderRadius)} ${(0,p.bf)(e.borderRadius)}`}},[`&${t}-top`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`${(0,p.bf)(e.borderRadius)} ${(0,p.bf)(e.borderRadius)} 0 0`}},[`&${t}-right`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${(0,p.bf)(e.borderRadius)} ${(0,p.bf)(e.borderRadius)} 0`}}},[`&${t}-left`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${(0,p.bf)(e.borderRadius)} 0 0 ${(0,p.bf)(e.borderRadius)}`}}}},[`&${t}-large`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:r}}}}}},Pa=e=>{const{componentCls:t,itemActiveColor:n,itemHoverColor:r,iconCls:i,tabsHorizontalItemMargin:l,horizontalItemPadding:c,itemSelectedColor:o,itemColor:s}=e,u=`${t}-tab`;return{[u]:{position:"relative",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",display:"inline-flex",alignItems:"center",padding:c,fontSize:e.titleFontSize,background:"transparent",border:0,outline:"none",cursor:"pointer",color:s,"&-btn, &-remove":Object.assign({"&:focus:not(:focus-visible), &:active":{color:n}},(0,Se.Qy)(e)),"&-btn":{outline:"none",transition:"all 0.3s",[`${u}-icon:not(:last-child)`]:{marginInlineEnd:e.marginSM}},"&-remove":{flex:"none",marginRight:{_skip_check_:!0,value:e.calc(e.marginXXS).mul(-1).equal()},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextHeading}},"&:hover":{color:r},[`&${u}-active ${u}-btn`]:{color:o,textShadow:e.tabsActiveTextShadow},[`&${u}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${u}-disabled ${u}-btn, &${u}-disabled ${t}-remove`]:{"&:focus, &:active":{color:e.colorTextDisabled}},[`& ${u}-remove ${i}`]:{margin:0},[`${i}:not(:last-child)`]:{marginRight:{_skip_check_:!0,value:e.marginSM}}},[`${u} + ${u}`]:{margin:{_skip_check_:!0,value:l}}}},Ra=e=>{const{componentCls:t,tabsHorizontalItemMarginRTL:n,iconCls:r,cardGutter:i,calc:l}=e;return{[`${t}-rtl`]:{direction:"rtl",[`${t}-nav`]:{[`${t}-tab`]:{margin:{_skip_check_:!0,value:n},[`${t}-tab:last-of-type`]:{marginLeft:{_skip_check_:!0,value:0}},[r]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:(0,p.bf)(e.marginSM)}},[`${t}-tab-remove`]:{marginRight:{_skip_check_:!0,value:(0,p.bf)(e.marginXS)},marginLeft:{_skip_check_:!0,value:(0,p.bf)(l(e.marginXXS).mul(-1).equal())},[r]:{margin:0}}}},[`&${t}-left`]:{[`> ${t}-nav`]:{order:1},[`> ${t}-content-holder`]:{order:0}},[`&${t}-right`]:{[`> ${t}-nav`]:{order:0},[`> ${t}-content-holder`]:{order:1}},[`&${t}-card${t}-top, &${t}-card${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginRight:{_skip_check_:!0,value:i},marginLeft:{_skip_check_:!0,value:0}}}}},[`${t}-dropdown-rtl`]:{direction:"rtl"},[`${t}-menu-item`]:{[`${t}-dropdown-rtl`]:{textAlign:{_skip_check_:!0,value:"right"}}}}},Ia=e=>{const{componentCls:t,tabsCardPadding:n,cardHeight:r,cardGutter:i,itemHoverColor:l,itemActiveColor:c,colorBorderSecondary:o}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,Se.Wf)(e)),{display:"flex",[`> ${t}-nav, > div > ${t}-nav`]:{position:"relative",display:"flex",flex:"none",alignItems:"center",[`${t}-nav-wrap`]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:`opacity ${e.motionDurationSlow}`,content:"''",pointerEvents:"none"}},[`${t}-nav-list`]:{position:"relative",display:"flex",transition:`opacity ${e.motionDurationSlow}`},[`${t}-nav-operations`]:{display:"flex",alignSelf:"stretch"},[`${t}-nav-operations-hidden`]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},[`${t}-nav-more`]:{position:"relative",padding:n,background:"transparent",border:0,color:e.colorText,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.calc(e.controlHeightLG).div(8).equal(),transform:"translateY(100%)",content:"''"}},[`${t}-nav-add`]:Object.assign({minWidth:r,minHeight:r,marginLeft:{_skip_check_:!0,value:i},padding:`0 ${(0,p.bf)(e.paddingXS)}`,background:"transparent",border:`${(0,p.bf)(e.lineWidth)} ${e.lineType} ${o}`,borderRadius:`${(0,p.bf)(e.borderRadiusLG)} ${(0,p.bf)(e.borderRadiusLG)} 0 0`,outline:"none",cursor:"pointer",color:e.colorText,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&:hover":{color:l},"&:active, &:focus:not(:focus-visible)":{color:c}},(0,Se.Qy)(e))},[`${t}-extra-content`]:{flex:"none"},[`${t}-ink-bar`]:{position:"absolute",background:e.inkBarColor,pointerEvents:"none"}}),Pa(e)),{[`${t}-content`]:{position:"relative",width:"100%"},[`${t}-content-holder`]:{flex:"auto",minWidth:0,minHeight:0},[`${t}-tabpane`]:{outline:"none","&-hidden":{display:"none"}}}),[`${t}-centered`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-nav-wrap`]:{[`&:not([class*='${t}-nav-wrap-ping'])`]:{justifyContent:"center"}}}}}},Za=e=>{const t=e.controlHeightLG;return{zIndexPopup:e.zIndexPopupBase+50,cardBg:e.colorFillAlter,cardHeight:t,cardPadding:`${(t-Math.round(e.fontSize*e.lineHeight))/2-e.lineWidth}px ${e.padding}px`,cardPaddingSM:`${e.paddingXXS*1.5}px ${e.padding}px`,cardPaddingLG:`${e.paddingXS}px ${e.padding}px ${e.paddingXXS*1.5}px`,titleFontSize:e.fontSize,titleFontSizeLG:e.fontSizeLG,titleFontSizeSM:e.fontSize,inkBarColor:e.colorPrimary,horizontalMargin:`0 0 ${e.margin}px 0`,horizontalItemGutter:32,horizontalItemMargin:"",horizontalItemMarginRTL:"",horizontalItemPadding:`${e.paddingSM}px 0`,horizontalItemPaddingSM:`${e.paddingXS}px 0`,horizontalItemPaddingLG:`${e.padding}px 0`,verticalItemPadding:`${e.paddingXS}px ${e.paddingLG}px`,verticalItemMargin:`${e.margin}px 0 0 0`,itemColor:e.colorText,itemSelectedColor:e.colorPrimary,itemHoverColor:e.colorPrimaryHover,itemActiveColor:e.colorPrimaryActive,cardGutter:e.marginXXS/2}};var wa=(0,$a.I$)("Tabs",e=>{const t=(0,Sa.TS)(e,{tabsCardPadding:e.cardPadding,dropdownEdgeChildVerticalPadding:e.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120,tabsHorizontalItemMargin:`0 0 0 ${(0,p.bf)(e.horizontalItemGutter)}`,tabsHorizontalItemMarginRTL:`0 0 0 ${(0,p.bf)(e.horizontalItemGutter)}`});return[Ea(t),Ra(t),Ta(t),Ca(t),xa(t),Ia(t),ya(t)]},Za),La=()=>null,Na=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};const ft=e=>{var t,n,r,i,l,c,o;const{type:s,className:u,rootClassName:b,size:S,onEdit:$,hideAdd:w,centered:N,addIcon:E,moreIcon:L,popupClassName:g,children:f,items:z,animated:W,style:H,indicatorSize:B,indicator:I}=e,P=Na(e,["type","className","rootClassName","size","onEdit","hideAdd","centered","addIcon","moreIcon","popupClassName","children","items","animated","style","indicatorSize","indicator"]),{prefixCls:m}=P,{direction:Z,tabs:d,getPrefixCls:R,getPopupContainer:y}=a.useContext(sa.E_),h=R("tabs",m),k=(0,da.Z)(h),[ce,J,V]=wa(h,k);let Y;s==="editable-card"&&(Y={onEdit:(K,ae)=>{let{key:q,event:re}=ae;$==null||$(K==="add"?re:q,K)},removeIcon:a.createElement(le.Z,null),addIcon:(E!=null?E:d==null?void 0:d.addIcon)||a.createElement(pe.Z,null),showAdd:w!==!0});const se=R(),te=(0,ua.Z)(S),C=pa(z,f),A=ba(h,W),F=Object.assign(Object.assign({},d==null?void 0:d.style),H),X={align:(t=I==null?void 0:I.align)!==null&&t!==void 0?t:(n=d==null?void 0:d.indicator)===null||n===void 0?void 0:n.align,size:(c=(i=(r=I==null?void 0:I.size)!==null&&r!==void 0?r:B)!==null&&i!==void 0?i:(l=d==null?void 0:d.indicator)===null||l===void 0?void 0:l.size)!==null&&c!==void 0?c:d==null?void 0:d.indicatorSize};return ce(a.createElement(ca,Object.assign({direction:Z,getPopupContainer:y,moreTransitionName:`${se}-slide-up`},P,{items:C,className:_()({[`${h}-${te}`]:te,[`${h}-card`]:["card","editable-card"].includes(s),[`${h}-editable-card`]:s==="editable-card",[`${h}-centered`]:N},d==null?void 0:d.className,u,b,J,V,k),popupClassName:_()(g,J,V,k),style:F,editable:Y,moreIcon:(o=L!=null?L:d==null?void 0:d.moreIcon)!==null&&o!==void 0?o:a.createElement(he.Z,null),prefixCls:h,animated:A,indicator:X})))};ft.TabPane=La;var za=ft}}]);
