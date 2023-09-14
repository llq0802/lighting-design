"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[297],{98866:function(he,k,f){f.d(k,{n:function(){return Z}});var d=f(67294);const s=d.createContext(!1),Z=O=>{let{children:W,disabled:V}=O;const o=d.useContext(s);return d.createElement(s.Provider,{value:V!=null?V:o},W)};k.Z=s},38379:function(he,k,f){f.r(k),f.d(k,{CSSMotionList:function(){return Nn},Provider:function(){return oe},default:function(){return xn}});var d=f(4942),s=f(1413),Z=f(97685),O=f(71002),W=f(94184),V=f.n(W),o=f(67294),ye=f(73935);function ge(e){return e instanceof HTMLElement||e instanceof SVGElement}function Ae(e){return ge(e)?e:e instanceof o.Component?ye.findDOMNode(e):null}var J=f(59864);function Ve(e,n,t){var r=React.useRef({});return(!("value"in r.current)||t(r.current.condition,n))&&(r.current.value=e(),r.current.condition=n),r.current.value}function ae(e,n){typeof e=="function"?e(n):(0,O.Z)(e)==="object"&&e&&"current"in e&&(e.current=n)}function X(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=n.filter(function(a){return a});return r.length<=1?r[0]:function(a){n.forEach(function(u){ae(u,a)})}}function we(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return useMemo(function(){return X.apply(void 0,n)},n,function(r,a){return r.length===a.length&&r.every(function(u,i){return u===a[i]})})}function Re(e){var n,t,r=(0,J.isMemo)(e)?e.type.type:e.type;return!(typeof r=="function"&&!((n=r.prototype)!==null&&n!==void 0&&n.render)||typeof e=="function"&&!((t=e.prototype)!==null&&t!==void 0&&t.render))}var se=f(91),Ze=["children"],ce=o.createContext({});function oe(e){var n=e.children,t=(0,se.Z)(e,Ze);return o.createElement(ce.Provider,{value:t},n)}var fe=f(15671),Ce=f(43144),ve=f(32531),q=f(73568),p=function(e){(0,ve.Z)(t,e);var n=(0,q.Z)(t);function t(){return(0,fe.Z)(this,t),n.apply(this,arguments)}return(0,Ce.Z)(t,[{key:"render",value:function(){return this.props.children}}]),t}(o.Component),S=p;function w(e){var n=o.useRef(!1),t=o.useState(e),r=(0,Z.Z)(t,2),a=r[0],u=r[1];o.useEffect(function(){return n.current=!1,function(){n.current=!0}},[]);function i(E,y){y&&n.current||u(E)}return[a,i]}var g="none",j="appear",le="enter",de="leave",Fe="none",U="prepare",ee="start",ne="active",Me="end",We="prepared";function Te(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}function je(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit".concat(e)]="webkit".concat(n),t["Moz".concat(e)]="moz".concat(n),t["ms".concat(e)]="MS".concat(n),t["O".concat(e)]="o".concat(n.toLowerCase()),t}function En(e,n){var t={animationend:je("Animation","AnimationEnd"),transitionend:je("Transition","TransitionEnd")};return e&&("AnimationEvent"in n||delete t.animationend.animation,"TransitionEvent"in n||delete t.transitionend.transition),t}var pn=En(Te(),typeof window!="undefined"?window:{}),$e={};if(Te()){var Sn=document.createElement("div");$e=Sn.style}var me={};function Be(e){if(me[e])return me[e];var n=pn[e];if(n)for(var t=Object.keys(n),r=t.length,a=0;a<r;a+=1){var u=t[a];if(Object.prototype.hasOwnProperty.call(n,u)&&u in $e)return me[e]=n[u],me[e]}return""}var Qe=Be("animationend"),He=Be("transitionend"),ze=!!(Qe&&He),Ge=Qe||"animationend",Ye=He||"transitionend";function Je(e,n){if(!e)return null;if((0,O.Z)(e)==="object"){var t=n.replace(/-\w/g,function(r){return r[1].toUpperCase()});return e[t]}return"".concat(e,"-").concat(n)}var hn=function(e){var n=(0,o.useRef)(),t=(0,o.useRef)(e);t.current=e;var r=o.useCallback(function(i){t.current(i)},[]);function a(i){i&&(i.removeEventListener(Ye,r),i.removeEventListener(Ge,r))}function u(i){n.current&&n.current!==i&&a(n.current),i&&i!==n.current&&(i.addEventListener(Ye,r),i.addEventListener(Ge,r),n.current=i)}return o.useEffect(function(){return function(){a(n.current)}},[]),[u,a]},yn=Te()?o.useLayoutEffect:o.useEffect,Xe=yn,qe=function(n){return+setTimeout(n,16)},en=function(n){return clearTimeout(n)};typeof window!="undefined"&&"requestAnimationFrame"in window&&(qe=function(n){return window.requestAnimationFrame(n)},en=function(n){return window.cancelAnimationFrame(n)});var nn=0,Pe=new Map;function tn(e){Pe.delete(e)}var rn=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;nn+=1;var r=nn;function a(u){if(u===0)tn(r),n();else{var i=qe(function(){a(u-1)});Pe.set(r,i)}}return a(t),r};rn.cancel=function(e){var n=Pe.get(e);return tn(n),en(n)};var an=rn,gn=function(){var e=o.useRef(null);function n(){an.cancel(e.current)}function t(r){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;n();var u=an(function(){a<=1?r({isCanceled:function(){return u!==e.current}}):t(r,a-1)});e.current=u}return o.useEffect(function(){return function(){n()}},[]),[t,n]},An=[U,ee,ne,Me],Rn=[U,We],on=!1,Zn=!0;function un(e){return e===ne||e===Me}var Cn=function(e,n,t){var r=w(Fe),a=(0,Z.Z)(r,2),u=a[0],i=a[1],E=gn(),y=(0,Z.Z)(E,2),c=y[0],v=y[1];function l(){i(U,!0)}var m=n?Rn:An;return Xe(function(){if(u!==Fe&&u!==Me){var h=m.indexOf(u),R=m[h+1],_=t(u);_===on?i(R,!0):R&&c(function(x){function L(){x.isCanceled()||i(R,!0)}_===!0?L():Promise.resolve(_).then(L)})}},[e,u]),o.useEffect(function(){return function(){v()}},[]),[l,u]};function Mn(e,n,t,r){var a=r.motionEnter,u=a===void 0?!0:a,i=r.motionAppear,E=i===void 0?!0:i,y=r.motionLeave,c=y===void 0?!0:y,v=r.motionDeadline,l=r.motionLeaveImmediately,m=r.onAppearPrepare,h=r.onEnterPrepare,R=r.onLeavePrepare,_=r.onAppearStart,x=r.onEnterStart,L=r.onLeaveStart,B=r.onAppearActive,Q=r.onEnterActive,$=r.onLeaveActive,H=r.onAppearEnd,I=r.onEnterEnd,D=r.onLeaveEnd,F=r.onVisibleChanged,Ie=w(),te=(0,Z.Z)(Ie,2),N=te[0],z=te[1],T=w(g),G=(0,Z.Z)(T,2),A=G[0],b=G[1],Ee=w(null),pe=(0,Z.Z)(Ee,2),Ne=pe[0],re=pe[1],xe=(0,o.useRef)(!1),be=(0,o.useRef)(null);function Se(){return t()}var fn=(0,o.useRef)(!1);function vn(){b(g,!0),re(null,!0)}function ln(P){var C=Se();if(!(P&&!P.deadline&&P.target!==C)){var M=fn.current,K;A===j&&M?K=H==null?void 0:H(C,P):A===le&&M?K=I==null?void 0:I(C,P):A===de&&M&&(K=D==null?void 0:D(C,P)),A!==g&&M&&K!==!1&&vn()}}var bn=hn(ln),Kn=(0,Z.Z)(bn,1),kn=Kn[0],dn=function(C){var M,K,ue;switch(C){case j:return M={},(0,d.Z)(M,U,m),(0,d.Z)(M,ee,_),(0,d.Z)(M,ne,B),M;case le:return K={},(0,d.Z)(K,U,h),(0,d.Z)(K,ee,x),(0,d.Z)(K,ne,Q),K;case de:return ue={},(0,d.Z)(ue,U,R),(0,d.Z)(ue,ee,L),(0,d.Z)(ue,ne,$),ue;default:return{}}},ie=o.useMemo(function(){return dn(A)},[A]),Vn=Cn(A,!e,function(P){if(P===U){var C=ie[U];return C?C(Se()):on}if(Y in ie){var M;re(((M=ie[Y])===null||M===void 0?void 0:M.call(ie,Se(),null))||null)}return Y===ne&&(kn(Se()),v>0&&(clearTimeout(be.current),be.current=setTimeout(function(){ln({deadline:!0})},v))),Y===We&&vn(),Zn}),mn=(0,Z.Z)(Vn,2),wn=mn[0],Y=mn[1],Fn=un(Y);fn.current=Fn,Xe(function(){z(n);var P=xe.current;xe.current=!0;var C;!P&&n&&E&&(C=j),P&&n&&u&&(C=le),(P&&!n&&c||!P&&l&&!n&&c)&&(C=de);var M=dn(C);C&&(e||M[U])?(b(C),wn()):b(g)},[n]),(0,o.useEffect)(function(){(A===j&&!E||A===le&&!u||A===de&&!c)&&b(g)},[E,u,c]),(0,o.useEffect)(function(){return function(){xe.current=!1,clearTimeout(be.current)}},[]);var Ke=o.useRef(!1);(0,o.useEffect)(function(){N&&(Ke.current=!0),N!==void 0&&A===g&&((Ke.current||N)&&(F==null||F(N)),Ke.current=!0)},[N,A]);var ke=Ne;return ie[U]&&Y===ee&&(ke=(0,s.Z)({transition:"none"},ke)),[A,Y,ke,N!=null?N:n]}function Tn(e){var n=e;(0,O.Z)(e)==="object"&&(n=e.transitionSupport);function t(a,u){return!!(a.motionName&&n&&u!==!1)}var r=o.forwardRef(function(a,u){var i=a.visible,E=i===void 0?!0:i,y=a.removeOnLeave,c=y===void 0?!0:y,v=a.forceRender,l=a.children,m=a.motionName,h=a.leavedClassName,R=a.eventProps,_=o.useContext(ce),x=_.motion,L=t(a,x),B=(0,o.useRef)(),Q=(0,o.useRef)();function $(){try{return B.current instanceof HTMLElement?B.current:Ae(Q.current)}catch(re){return null}}var H=Mn(L,E,$,a),I=(0,Z.Z)(H,4),D=I[0],F=I[1],Ie=I[2],te=I[3],N=o.useRef(te);te&&(N.current=!0);var z=o.useCallback(function(re){B.current=re,ae(u,re)},[u]),T,G=(0,s.Z)((0,s.Z)({},R),{},{visible:E});if(!l)T=null;else if(D===g)te?T=l((0,s.Z)({},G),z):!c&&N.current&&h?T=l((0,s.Z)((0,s.Z)({},G),{},{className:h}),z):v||!c&&!h?T=l((0,s.Z)((0,s.Z)({},G),{},{style:{display:"none"}}),z):T=null;else{var A,b;F===U?b="prepare":un(F)?b="active":F===ee&&(b="start");var Ee=Je(m,"".concat(D,"-").concat(b));T=l((0,s.Z)((0,s.Z)({},G),{},{className:V()(Je(m,D),(A={},(0,d.Z)(A,Ee,Ee&&b),(0,d.Z)(A,m,typeof m=="string"),A)),style:Ie}),z)}if(o.isValidElement(T)&&Re(T)){var pe=T,Ne=pe.ref;Ne||(T=o.cloneElement(T,{ref:z}))}return o.createElement(S,{ref:Q},T)});return r.displayName="CSSMotion",r}var sn=Tn(ze),Pn=f(87462),cn=f(97326),Le="add",De="keep",Oe="remove",Ue="removed";function Ln(e){var n;return e&&(0,O.Z)(e)==="object"&&"key"in e?n=e:n={key:e},(0,s.Z)((0,s.Z)({},n),{},{key:String(n.key)})}function _e(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return e.map(Ln)}function Dn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=[],r=0,a=n.length,u=_e(e),i=_e(n);u.forEach(function(c){for(var v=!1,l=r;l<a;l+=1){var m=i[l];if(m.key===c.key){r<l&&(t=t.concat(i.slice(r,l).map(function(h){return(0,s.Z)((0,s.Z)({},h),{},{status:Le})})),r=l),t.push((0,s.Z)((0,s.Z)({},m),{},{status:De})),r+=1,v=!0;break}}v||t.push((0,s.Z)((0,s.Z)({},c),{},{status:Oe}))}),r<a&&(t=t.concat(i.slice(r).map(function(c){return(0,s.Z)((0,s.Z)({},c),{},{status:Le})})));var E={};t.forEach(function(c){var v=c.key;E[v]=(E[v]||0)+1});var y=Object.keys(E).filter(function(c){return E[c]>1});return y.forEach(function(c){t=t.filter(function(v){var l=v.key,m=v.status;return l!==c||m!==Oe}),t.forEach(function(v){v.key===c&&(v.status=De)})}),t}var On=["component","children","onVisibleChanged","onAllRemoved"],Un=["status"],_n=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearPrepare","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];function In(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:sn,t=function(r){(0,ve.Z)(u,r);var a=(0,q.Z)(u);function u(){var i;(0,fe.Z)(this,u);for(var E=arguments.length,y=new Array(E),c=0;c<E;c++)y[c]=arguments[c];return i=a.call.apply(a,[this].concat(y)),(0,d.Z)((0,cn.Z)(i),"state",{keyEntities:[]}),(0,d.Z)((0,cn.Z)(i),"removeKey",function(v){var l=i.state.keyEntities,m=l.map(function(h){return h.key!==v?h:(0,s.Z)((0,s.Z)({},h),{},{status:Ue})});return i.setState({keyEntities:m}),m.filter(function(h){var R=h.status;return R!==Ue}).length}),i}return(0,Ce.Z)(u,[{key:"render",value:function(){var E=this,y=this.state.keyEntities,c=this.props,v=c.component,l=c.children,m=c.onVisibleChanged,h=c.onAllRemoved,R=(0,se.Z)(c,On),_=v||o.Fragment,x={};return _n.forEach(function(L){x[L]=R[L],delete R[L]}),delete R.keys,o.createElement(_,R,y.map(function(L,B){var Q=L.status,$=(0,se.Z)(L,Un),H=Q===Le||Q===De;return o.createElement(n,(0,Pn.Z)({},x,{key:$.key,visible:H,eventProps:$,onVisibleChanged:function(D){if(m==null||m(D,{key:$.key}),!D){var F=E.removeKey($.key);F===0&&h&&h()}}}),function(I,D){return l((0,s.Z)((0,s.Z)({},I),{},{index:B}),D)})}))}}],[{key:"getDerivedStateFromProps",value:function(E,y){var c=E.keys,v=y.keyEntities,l=_e(c),m=Dn(v,l);return{keyEntities:m.filter(function(h){var R=v.find(function(_){var x=_.key;return h.key===x});return!(R&&R.status===Ue&&h.status===Oe)})}}}]),u}(o.Component);return(0,d.Z)(t,"defaultProps",{component:"div"}),t}var Nn=In(ze),xn=sn},2992:function(he,k,f){var d;f.d(k,{s:function(){return Ze},v:function(){return ve}});var s=f(74165),Z=f(15861),O=f(71002),W=f(1413),V=f(73935),o=(0,W.Z)({},d||(d=f.t(V,2))),ye=o.version,ge=o.render,Ae=o.unmountComponentAtNode,J;try{var Ve=Number((ye||"").split(".")[0]);Ve>=18&&(J=o.createRoot)}catch(p){}function ae(p){var S=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;S&&(0,O.Z)(S)==="object"&&(S.usingClientEntryPoint=p)}var X="__rc_react_root__";function we(p,S){ae(!0);var w=S[X]||J(S);ae(!1),w.render(p),S[X]=w}function Re(p,S){ge(p,S)}function se(p,S){}function Ze(p,S){if(J){we(p,S);return}Re(p,S)}function ce(p){return oe.apply(this,arguments)}function oe(){return oe=(0,Z.Z)((0,s.Z)().mark(function p(S){return(0,s.Z)().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",Promise.resolve().then(function(){var j;(j=S[X])===null||j===void 0||j.unmount(),delete S[X]}));case 1:case"end":return g.stop()}},p)})),oe.apply(this,arguments)}function fe(p){Ae(p)}function Ce(p){}function ve(p){return q.apply(this,arguments)}function q(){return q=(0,Z.Z)((0,s.Z)().mark(function p(S){return(0,s.Z)().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:if(J===void 0){g.next=2;break}return g.abrupt("return",ce(S));case 2:fe(S);case 3:case"end":return g.stop()}},p)})),q.apply(this,arguments)}},10366:function(he,k,f){f.d(k,{Z:function(){return s}});var d=f(1413);function s(Z,O){var W=(0,d.Z)({},Z);return Array.isArray(O)&&O.forEach(function(V){delete W[V]}),W}}}]);