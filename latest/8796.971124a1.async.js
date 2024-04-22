(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[8796],{85292:function(o,d,t){"use strict";t.d(d,{Z:function(){return p}});var n=t(67294),u=t(8224);function p(m,g){var x=(0,n.useRef)({deps:g,obj:void 0,initialized:!1}).current;return(x.initialized===!1||!(0,u.Z)(x.deps,g))&&(x.deps=g,x.obj=m(),x.initialized=!0),x.obj}},78234:function(o,d,t){"use strict";var n=t(67294),u=t(92770),p=t(31663),m=function(g){p.Z&&((0,u.mf)(g)||console.error('useMount: parameter `fn` expected to be a function, but got "'.concat(typeof g,'".'))),(0,n.useEffect)(function(){g==null||g()},[])};d.Z=m},3917:function(o,d,t){"use strict";t.d(d,{Z:function(){return Ze}});var n=t(97582),u=t(67294),p=t(42170),m=function(e,r){var i=r.manual,s=r.ready,c=s===void 0?!0:s,f=r.defaultParams,l=f===void 0?[]:f,h=r.refreshDeps,v=h===void 0?[]:h,a=r.refreshDepsAction,P=(0,u.useRef)(!1);return P.current=!1,(0,p.Z)(function(){!i&&c&&(P.current=!0,e.run.apply(e,(0,n.ev)([],(0,n.CR)(l),!1)))},[c]),(0,p.Z)(function(){P.current||i||(P.current=!0,a?a():e.refresh())},(0,n.ev)([],(0,n.CR)(v),!1)),{onBefore:function(){if(!c)return{stopNow:!0}}}};m.onInit=function(e){var r=e.ready,i=r===void 0?!0:r,s=e.manual;return{loading:!s&&i}};var g=m,x=t(85292),O=t(45210),C=new Map,A=function(e,r,i){var s=C.get(e);s!=null&&s.timer&&clearTimeout(s.timer);var c=void 0;r>-1&&(c=setTimeout(function(){C.delete(e)},r)),C.set(e,(0,n.pi)((0,n.pi)({},i),{timer:c}))},R=function(e){return C.get(e)},D=function(e){if(e){var r=Array.isArray(e)?e:[e];r.forEach(function(i){return C.delete(i)})}else C.clear()},M=new Map,G=function(e){return M.get(e)},B=function(e,r){M.set(e,r),r.then(function(i){return M.delete(e),i}).catch(function(){M.delete(e)})},S={},W=function(e,r){S[e]&&S[e].forEach(function(i){return i(r)})},L=function(e,r){return S[e]||(S[e]=[]),S[e].push(r),function(){var s=S[e].indexOf(r);S[e].splice(s,1)}},k=function(e,r){var i=r.cacheKey,s=r.cacheTime,c=s===void 0?5*60*1e3:s,f=r.staleTime,l=f===void 0?0:f,h=r.setCache,v=r.getCache,a=(0,u.useRef)(),P=(0,u.useRef)(),T=function(b,y){h?h(y):A(b,c,y),W(b,y.data)},j=function(b,y){return y===void 0&&(y=[]),v?v(y):R(b)};return(0,x.Z)(function(){if(i){var b=j(i);b&&Object.hasOwnProperty.call(b,"data")&&(e.state.data=b.data,e.state.params=b.params,(l===-1||new Date().getTime()-b.time<=l)&&(e.state.loading=!1)),a.current=L(i,function(y){e.setState({data:y})})}},[]),(0,O.Z)(function(){var b;(b=a.current)===null||b===void 0||b.call(a)}),i?{onBefore:function(b){var y=j(i,b);return!y||!Object.hasOwnProperty.call(y,"data")?{}:l===-1||new Date().getTime()-y.time<=l?{loading:!1,data:y==null?void 0:y.data,error:void 0,returnNow:!0}:{data:y==null?void 0:y.data,error:void 0}},onRequest:function(b,y){var w=G(i);return w&&w!==P.current?{servicePromise:w}:(w=b.apply(void 0,(0,n.ev)([],(0,n.CR)(y),!1)),P.current=w,B(i,w),{servicePromise:w})},onSuccess:function(b,y){var w;i&&((w=a.current)===null||w===void 0||w.call(a),T(i,{data:b,params:y,time:new Date().getTime()}),a.current=L(i,function(ne){e.setState({data:ne})}))},onMutate:function(b){var y;i&&((y=a.current)===null||y===void 0||y.call(a),T(i,{data:b,params:e.state.params,time:new Date().getTime()}),a.current=L(i,function(w){e.setState({data:w})}))}}:{}},F=k,$=t(23279),X=t.n($),re=function(e,r){var i=r.debounceWait,s=r.debounceLeading,c=r.debounceTrailing,f=r.debounceMaxWait,l=(0,u.useRef)(),h=(0,u.useMemo)(function(){var v={};return s!==void 0&&(v.leading=s),c!==void 0&&(v.trailing=c),f!==void 0&&(v.maxWait=f),v},[s,c,f]);return(0,u.useEffect)(function(){if(i){var v=e.runAsync.bind(e);return l.current=X()(function(a){a()},i,h),e.runAsync=function(){for(var a=[],P=0;P<arguments.length;P++)a[P]=arguments[P];return new Promise(function(T,j){var b;(b=l.current)===null||b===void 0||b.call(l,function(){v.apply(void 0,(0,n.ev)([],(0,n.CR)(a),!1)).then(T).catch(j)})})},function(){var a;(a=l.current)===null||a===void 0||a.cancel(),e.runAsync=v}}},[i,h]),i?{onCancel:function(){var v;(v=l.current)===null||v===void 0||v.cancel()}}:{}},ie=re,q=function(e,r){var i=r.loadingDelay,s=r.ready,c=(0,u.useRef)();if(!i)return{};var f=function(){c.current&&clearTimeout(c.current)};return{onBefore:function(){return f(),s!==!1&&(c.current=setTimeout(function(){e.setState({loading:!0})},i)),{loading:!1}},onFinally:function(){f()},onCancel:function(){f()}}},z=q,I=t(52982);function J(){return I.Z?document.visibilityState!=="hidden":!0}var N=[];function Q(e){return N.push(e),function(){var i=N.indexOf(e);N.splice(i,1)}}if(I.Z){var E=function(){if(J())for(var e=0;e<N.length;e++){var r=N[e];r()}};window.addEventListener("visibilitychange",E,!1)}var Z=Q,H=function(e,r){var i=r.pollingInterval,s=r.pollingWhenHidden,c=s===void 0?!0:s,f=r.pollingErrorRetryCount,l=f===void 0?-1:f,h=(0,u.useRef)(),v=(0,u.useRef)(),a=(0,u.useRef)(0),P=function(){var T;h.current&&clearTimeout(h.current),(T=v.current)===null||T===void 0||T.call(v)};return(0,p.Z)(function(){i||P()},[i]),i?{onBefore:function(){P()},onError:function(){a.current+=1},onSuccess:function(){a.current=0},onFinally:function(){l===-1||l!==-1&&a.current<=l?h.current=setTimeout(function(){!c&&!J()?v.current=Z(function(){e.refresh()}):e.refresh()},i):a.current=0},onCancel:function(){P()}}:{}},ee=H;function fe(e,r){var i=!1;return function(){for(var s=[],c=0;c<arguments.length;c++)s[c]=arguments[c];i||(i=!0,e.apply(void 0,(0,n.ev)([],(0,n.CR)(s),!1)),setTimeout(function(){i=!1},r))}}function le(){return I.Z&&typeof navigator.onLine!="undefined"?navigator.onLine:!0}var Y=[];function de(e){return Y.push(e),function(){var i=Y.indexOf(e);i>-1&&Y.splice(i,1)}}if(I.Z){var oe=function(){if(!(!J()||!le()))for(var e=0;e<Y.length;e++){var r=Y[e];r()}};window.addEventListener("visibilitychange",oe,!1),window.addEventListener("focus",oe,!1)}var ve=de,pe=function(e,r){var i=r.refreshOnWindowFocus,s=r.focusTimespan,c=s===void 0?5e3:s,f=(0,u.useRef)(),l=function(){var h;(h=f.current)===null||h===void 0||h.call(f)};return(0,u.useEffect)(function(){if(i){var h=fe(e.refresh.bind(e),c);f.current=ve(function(){h()})}return function(){l()}},[i,c]),(0,O.Z)(function(){l()}),{}},ge=pe,me=function(e,r){var i=r.retryInterval,s=r.retryCount,c=(0,u.useRef)(),f=(0,u.useRef)(0),l=(0,u.useRef)(!1);return s?{onBefore:function(){l.current||(f.current=0),l.current=!1,c.current&&clearTimeout(c.current)},onSuccess:function(){f.current=0},onError:function(){if(f.current+=1,s===-1||f.current<=s){var h=i!=null?i:Math.min(1e3*Math.pow(2,f.current),3e4);c.current=setTimeout(function(){l.current=!0,e.refresh()},h)}else f.current=0},onCancel:function(){f.current=0,c.current&&clearTimeout(c.current)}}:{}},he=me,be=t(23493),ye=t.n(be),Re=function(e,r){var i=r.throttleWait,s=r.throttleLeading,c=r.throttleTrailing,f=(0,u.useRef)(),l={};return s!==void 0&&(l.leading=s),c!==void 0&&(l.trailing=c),(0,u.useEffect)(function(){if(i){var h=e.runAsync.bind(e);return f.current=ye()(function(v){v()},i,l),e.runAsync=function(){for(var v=[],a=0;a<arguments.length;a++)v[a]=arguments[a];return new Promise(function(P,T){var j;(j=f.current)===null||j===void 0||j.call(f,function(){h.apply(void 0,(0,n.ev)([],(0,n.CR)(v),!1)).then(P).catch(T)})})},function(){var v;e.runAsync=h,(v=f.current)===null||v===void 0||v.cancel()}}},[i,s,c]),i?{onCancel:function(){var h;(h=f.current)===null||h===void 0||h.cancel()}}:{}},Te=Re,Pe=t(3930),V=t(22638),xe=t(78234),Ce=t(90105),Oe=t(31663),Ee=t(92770),Se=function(){function e(r,i,s,c){c===void 0&&(c={}),this.serviceRef=r,this.options=i,this.subscribe=s,this.initState=c,this.count=0,this.state={loading:!1,params:void 0,data:void 0,error:void 0},this.state=(0,n.pi)((0,n.pi)((0,n.pi)({},this.state),{loading:!i.manual}),c)}return e.prototype.setState=function(r){r===void 0&&(r={}),this.state=(0,n.pi)((0,n.pi)({},this.state),r),this.subscribe()},e.prototype.runPluginHandler=function(r){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];var c=this.pluginImpls.map(function(f){var l;return(l=f[r])===null||l===void 0?void 0:l.call.apply(l,(0,n.ev)([f],(0,n.CR)(i),!1))}).filter(Boolean);return Object.assign.apply(Object,(0,n.ev)([{}],(0,n.CR)(c),!1))},e.prototype.runAsync=function(){for(var r,i,s,c,f,l,h,v,a,P,T=[],j=0;j<arguments.length;j++)T[j]=arguments[j];return(0,n.mG)(this,void 0,void 0,function(){var b,y,w,ne,ue,se,ae,te,U,K,ce;return(0,n.Jh)(this,function(_){switch(_.label){case 0:if(this.count+=1,b=this.count,y=this.runPluginHandler("onBefore",T),w=y.stopNow,ne=w===void 0?!1:w,ue=y.returnNow,se=ue===void 0?!1:ue,ae=(0,n._T)(y,["stopNow","returnNow"]),ne)return[2,new Promise(function(){})];if(this.setState((0,n.pi)({loading:!0,params:T},ae)),se)return[2,Promise.resolve(ae.data)];(i=(r=this.options).onBefore)===null||i===void 0||i.call(r,T),_.label=1;case 1:return _.trys.push([1,3,,4]),te=this.runPluginHandler("onRequest",this.serviceRef.current,T).servicePromise,te||(te=(ce=this.serviceRef).current.apply(ce,(0,n.ev)([],(0,n.CR)(T),!1))),[4,te];case 2:return U=_.sent(),b!==this.count?[2,new Promise(function(){})]:(this.setState({data:U,error:void 0,loading:!1}),(c=(s=this.options).onSuccess)===null||c===void 0||c.call(s,U,T),this.runPluginHandler("onSuccess",U,T),(l=(f=this.options).onFinally)===null||l===void 0||l.call(f,T,U,void 0),b===this.count&&this.runPluginHandler("onFinally",T,U,void 0),[2,U]);case 3:if(K=_.sent(),b!==this.count)return[2,new Promise(function(){})];throw this.setState({error:K,loading:!1}),(v=(h=this.options).onError)===null||v===void 0||v.call(h,K,T),this.runPluginHandler("onError",K,T),(P=(a=this.options).onFinally)===null||P===void 0||P.call(a,T,void 0,K),b===this.count&&this.runPluginHandler("onFinally",T,void 0,K),K;case 4:return[2]}})})},e.prototype.run=function(){for(var r=this,i=[],s=0;s<arguments.length;s++)i[s]=arguments[s];this.runAsync.apply(this,(0,n.ev)([],(0,n.CR)(i),!1)).catch(function(c){r.options.onError||console.error(c)})},e.prototype.cancel=function(){this.count+=1,this.setState({loading:!1}),this.runPluginHandler("onCancel")},e.prototype.refresh=function(){this.run.apply(this,(0,n.ev)([],(0,n.CR)(this.state.params||[]),!1))},e.prototype.refreshAsync=function(){return this.runAsync.apply(this,(0,n.ev)([],(0,n.CR)(this.state.params||[]),!1))},e.prototype.mutate=function(r){var i=(0,Ee.mf)(r)?r(this.state.data):r;this.runPluginHandler("onMutate",i),this.setState({data:i})},e}(),Ae=Se;function je(e,r,i){r===void 0&&(r={}),i===void 0&&(i=[]);var s=r.manual,c=s===void 0?!1:s,f=(0,n._T)(r,["manual"]);Oe.Z&&r.defaultParams&&!Array.isArray(r.defaultParams)&&console.warn("expected defaultParams is array, got ".concat(typeof r.defaultParams));var l=(0,n.pi)({manual:c},f),h=(0,Pe.Z)(e),v=(0,Ce.Z)(),a=(0,x.Z)(function(){var P=i.map(function(T){var j;return(j=T==null?void 0:T.onInit)===null||j===void 0?void 0:j.call(T,l)}).filter(Boolean);return new Ae(h,l,v,Object.assign.apply(Object,(0,n.ev)([{}],(0,n.CR)(P),!1)))},[]);return a.options=l,a.pluginImpls=i.map(function(P){return P(a,l)}),(0,xe.Z)(function(){if(!c){var P=a.state.params||r.defaultParams||[];a.run.apply(a,(0,n.ev)([],(0,n.CR)(P),!1))}}),(0,O.Z)(function(){a.cancel()}),{loading:a.state.loading,data:a.state.data,error:a.state.error,params:a.state.params||[],cancel:(0,V.Z)(a.cancel.bind(a)),refresh:(0,V.Z)(a.refresh.bind(a)),refreshAsync:(0,V.Z)(a.refreshAsync.bind(a)),run:(0,V.Z)(a.run.bind(a)),runAsync:(0,V.Z)(a.runAsync.bind(a)),mutate:(0,V.Z)(a.mutate.bind(a))}}var we=je;function Me(e,r,i){return we(e,r,(0,n.ev)((0,n.ev)([],(0,n.CR)(i||[]),!1),[ie,z,ee,ge,Te,g,F,he],!1))}var De=Me,Ze=De},90105:function(o,d,t){"use strict";var n=t(97582),u=t(67294),p=function(){var m=(0,n.CR)((0,u.useState)({}),2),g=m[1];return(0,u.useCallback)(function(){return g({})},[])};d.Z=p},8224:function(o,d,t){"use strict";t.d(d,{Z:function(){return n}});function n(u,p){if(u===p)return!0;for(var m=0;m<u.length;m++)if(!Object.is(u[m],p[m]))return!1;return!0}},52982:function(o,d){"use strict";var t=!!(typeof window!="undefined"&&window.document&&window.document.createElement);d.Z=t},62705:function(o,d,t){var n=t(55639),u=n.Symbol;o.exports=u},44239:function(o,d,t){var n=t(62705),u=t(89607),p=t(2333),m="[object Null]",g="[object Undefined]",x=n?n.toStringTag:void 0;function O(C){return C==null?C===void 0?g:m:x&&x in Object(C)?u(C):p(C)}o.exports=O},27561:function(o,d,t){var n=t(67990),u=/^\s+/;function p(m){return m&&m.slice(0,n(m)+1).replace(u,"")}o.exports=p},31957:function(o,d,t){var n=typeof t.g=="object"&&t.g&&t.g.Object===Object&&t.g;o.exports=n},89607:function(o,d,t){var n=t(62705),u=Object.prototype,p=u.hasOwnProperty,m=u.toString,g=n?n.toStringTag:void 0;function x(O){var C=p.call(O,g),A=O[g];try{O[g]=void 0;var R=!0}catch(M){}var D=m.call(O);return R&&(C?O[g]=A:delete O[g]),D}o.exports=x},2333:function(o){var d=Object.prototype,t=d.toString;function n(u){return t.call(u)}o.exports=n},55639:function(o,d,t){var n=t(31957),u=typeof self=="object"&&self&&self.Object===Object&&self,p=n||u||Function("return this")();o.exports=p},67990:function(o){var d=/\s/;function t(n){for(var u=n.length;u--&&d.test(n.charAt(u)););return u}o.exports=t},23279:function(o,d,t){var n=t(13218),u=t(7771),p=t(14841),m="Expected a function",g=Math.max,x=Math.min;function O(C,A,R){var D,M,G,B,S,W,L=0,k=!1,F=!1,$=!0;if(typeof C!="function")throw new TypeError(m);A=p(A)||0,n(R)&&(k=!!R.leading,F="maxWait"in R,G=F?g(p(R.maxWait)||0,A):G,$="trailing"in R?!!R.trailing:$);function X(E){var Z=D,H=M;return D=M=void 0,L=E,B=C.apply(H,Z),B}function re(E){return L=E,S=setTimeout(z,A),k?X(E):B}function ie(E){var Z=E-W,H=E-L,ee=A-Z;return F?x(ee,G-H):ee}function q(E){var Z=E-W,H=E-L;return W===void 0||Z>=A||Z<0||F&&H>=G}function z(){var E=u();if(q(E))return I(E);S=setTimeout(z,ie(E))}function I(E){return S=void 0,$&&D?X(E):(D=M=void 0,B)}function J(){S!==void 0&&clearTimeout(S),L=0,D=W=M=S=void 0}function N(){return S===void 0?B:I(u())}function Q(){var E=u(),Z=q(E);if(D=arguments,M=this,W=E,Z){if(S===void 0)return re(W);if(F)return clearTimeout(S),S=setTimeout(z,A),X(W)}return S===void 0&&(S=setTimeout(z,A)),B}return Q.cancel=J,Q.flush=N,Q}o.exports=O},13218:function(o){function d(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}o.exports=d},37005:function(o){function d(t){return t!=null&&typeof t=="object"}o.exports=d},33448:function(o,d,t){var n=t(44239),u=t(37005),p="[object Symbol]";function m(g){return typeof g=="symbol"||u(g)&&n(g)==p}o.exports=m},7771:function(o,d,t){var n=t(55639),u=function(){return n.Date.now()};o.exports=u},23493:function(o,d,t){var n=t(23279),u=t(13218),p="Expected a function";function m(g,x,O){var C=!0,A=!0;if(typeof g!="function")throw new TypeError(p);return u(O)&&(C="leading"in O?!!O.leading:C,A="trailing"in O?!!O.trailing:A),n(g,x,{leading:C,maxWait:x,trailing:A})}o.exports=m},14841:function(o,d,t){var n=t(27561),u=t(13218),p=t(33448),m=0/0,g=/^[-+]0x[0-9a-f]+$/i,x=/^0b[01]+$/i,O=/^0o[0-7]+$/i,C=parseInt;function A(R){if(typeof R=="number")return R;if(p(R))return m;if(u(R)){var D=typeof R.valueOf=="function"?R.valueOf():R;R=u(D)?D+"":D}if(typeof R!="string")return R===0?R:+R;R=n(R);var M=x.test(R);return M||O.test(R)?C(R.slice(2),M?2:8):g.test(R)?m:+R}o.exports=A},96446:function(o,d,t){var n=t(37923);function u(p){if(Array.isArray(p))return n(p)}o.exports=u,o.exports.__esModule=!0,o.exports.default=o.exports},96936:function(o){function d(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}o.exports=d,o.exports.__esModule=!0,o.exports.default=o.exports},88619:function(o){function d(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}o.exports=d,o.exports.__esModule=!0,o.exports.default=o.exports},19632:function(o,d,t){var n=t(96446),u=t(96936),p=t(96263),m=t(88619);function g(x){return n(x)||u(x)||p(x)||m()}o.exports=g,o.exports.__esModule=!0,o.exports.default=o.exports}}]);