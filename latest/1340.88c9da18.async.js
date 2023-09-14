(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[1340],{2143:function(L,w,y){"use strict";var I=y(57199),j=y(67294),p=y(96057);function A(i,e){return k(i)||S(i,e)||_(i,e)||E()}function E(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(i,e){if(i){if(typeof i=="string")return O(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return O(i,e)}}function O(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function S(i,e){var t=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n=[],o=!0,a=!1,u,d;try{for(t=t.call(i);!(o=(u=t.next()).done)&&(n.push(u.value),!(e&&n.length===e));o=!0);}catch(s){a=!0,d=s}finally{try{!o&&t.return!=null&&t.return()}finally{if(a)throw d}}return n}}function k(i){if(Array.isArray(i))return i}var C={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?e.const:"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var t=this,n=[];return Object.entries(e.properties||{}).forEach(function(o){var a,u=A(o,2),d=u[0],s=u[1];n.push("".concat(d).concat((a=e.required)!==null&&a!==void 0&&a.includes(d)?"":"?",": ").concat(s.type==="object"?"object":t.toString(s)))}),n.length?"{ ".concat(n.join("; ")," }"):"{}"},array:function(e){if(e.items){var t=this.getValidClassName(e.items);return t?"".concat(t,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var t=this,n=e.signature,o="oneOf"in n?n.oneOf:[n];return o.map(function(a){return"".concat(a.isAsync?"async ":"","(").concat(a.arguments.map(function(u){return"".concat(u.key,": ").concat(t.toString(u))}).join(", "),") => ").concat(t.toString(a.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(t){return JSON.stringify(t)}).join(" | ")},oneOf:function(e){var t=this;return e.oneOf.map(function(n){return t.getValidClassName(n)||t.toString(n)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},M=function(e){var t=useState(function(){return C.toString(e)}),n=A(t,2),o=n[0],a=n[1];return useEffect(function(){a(C.toString(e))},[e]),React.createElement("code",null,o)},W=function(e){var t,n=useRouteMeta(),o=n.frontmatter,a=useAtomAssets(),u=a.components,d=e.id||o.atomId,s=useIntl();if(!d)throw new Error("`id` properties if required for API component!");var r=u==null?void 0:u[d];return React.createElement("div",{className:"markdown"},React.createElement(Table,null,React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,s.formatMessage({id:"api.component.name"})),React.createElement("th",null,s.formatMessage({id:"api.component.description"})),React.createElement("th",null,s.formatMessage({id:"api.component.type"})),React.createElement("th",null,s.formatMessage({id:"api.component.default"})))),React.createElement("tbody",null,r&&(t=r.propsConfig)!==null&&t!==void 0&&t.properties?Object.entries(r.propsConfig.properties).map(function(c){var l,g=A(c,2),v=g[0],m=g[1];return React.createElement("tr",{key:v},React.createElement("td",null,v),React.createElement("td",null,m.description||"--"),React.createElement("td",null,React.createElement(M,m)),React.createElement("td",null,React.createElement("code",null,(l=r.propsConfig.required)!==null&&l!==void 0&&l.includes(v)?s.formatMessage({id:"api.component.required"}):JSON.stringify(m.default)||"--")))}):React.createElement("tr",null,React.createElement("td",{colSpan:4},s.formatMessage({id:"api.component.".concat(u?"not.found":"unavailable")},{id:d}))))))},B=null},93359:function(L,w,y){"use strict";var I=y(67294);function j(){return j=Object.assign?Object.assign.bind():function(E){for(var _=1;_<arguments.length;_++){var O=arguments[_];for(var S in O)Object.prototype.hasOwnProperty.call(O,S)&&(E[S]=O[S])}return E},j.apply(this,arguments)}var p=function(_){return React.createElement("span",j({className:"dumi-default-badge"},_))},A=null},96057:function(L,w,y){"use strict";y.d(w,{Z:function(){return i}});var I=y(93096),j=y.n(I),p=y(67294),A=["children"];function E(e,t){return C(e)||k(e,t)||O(e,t)||_()}function _(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(e,t){if(e){if(typeof e=="string")return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}}function S(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function k(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var o=[],a=!0,u=!1,d,s;try{for(n=n.call(e);!(a=(d=n.next()).done)&&(o.push(d.value),!(t&&o.length===t));a=!0);}catch(r){u=!0,s=r}finally{try{!a&&n.return!=null&&n.return()}finally{if(u)throw s}}return o}}function C(e){if(Array.isArray(e))return e}function M(e,t){if(e==null)return{};var n=W(e,t),o,a;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)o=u[a],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function W(e,t){if(e==null)return{};var n={},o=Object.keys(e),a,u;for(u=0;u<o.length;u++)a=o[u],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}var B=function(t){var n=t.children,o=M(t,A),a=(0,p.useRef)(null),u=(0,p.useState)(!1),d=E(u,2),s=d[0],r=d[1],c=(0,p.useState)(!1),l=E(c,2),g=l[0],v=l[1];return(0,p.useEffect)(function(){var m=a.current;if(m){var b=j()(function(){r(m.scrollLeft>0),v(m.scrollLeft<m.scrollWidth-m.offsetWidth)},100);return b(),m.addEventListener("scroll",b),window.addEventListener("resize",b),function(){m.removeEventListener("scroll",b),window.removeEventListener("resize",b)}}},[]),p.createElement("div",{className:"dumi-default-table"},p.createElement("div",{className:"dumi-default-table-content",ref:a,"data-left-folded":s||void 0,"data-right-folded":g||void 0},p.createElement("table",o,n)))},i=B},93096:function(L,w,y){var I="Expected a function",j=NaN,p="[object Symbol]",A=/^\s+|\s+$/g,E=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,O=/^0o[0-7]+$/i,S=parseInt,k=typeof y.g=="object"&&y.g&&y.g.Object===Object&&y.g,C=typeof self=="object"&&self&&self.Object===Object&&self,M=k||C||Function("return this")(),W=Object.prototype,B=W.toString,i=Math.max,e=Math.min,t=function(){return M.Date.now()};function n(r,c,l){var g,v,m,b,h,R,N=0,V=!1,P=!1,$=!0;if(typeof r!="function")throw new TypeError(I);c=s(c)||0,a(l)&&(V=!!l.leading,P="maxWait"in l,m=P?i(s(l.maxWait)||0,c):m,$="trailing"in l?!!l.trailing:$);function F(f){var T=g,x=v;return g=v=void 0,N=f,b=r.apply(x,T),b}function J(f){return N=f,h=setTimeout(D,c),V?F(f):b}function X(f){var T=f-R,x=f-N,z=c-T;return P?e(z,m-x):z}function H(f){var T=f-R,x=f-N;return R===void 0||T>=c||T<0||P&&x>=m}function D(){var f=t();if(H(f))return K(f);h=setTimeout(D,X(f))}function K(f){return h=void 0,$&&g?F(f):(g=v=void 0,b)}function G(){h!==void 0&&clearTimeout(h),N=0,g=R=v=h=void 0}function Z(){return h===void 0?b:K(t())}function U(){var f=t(),T=H(f);if(g=arguments,v=this,R=f,T){if(h===void 0)return J(R);if(P)return h=setTimeout(D,c),F(R)}return h===void 0&&(h=setTimeout(D,c)),b}return U.cancel=G,U.flush=Z,U}function o(r,c,l){var g=!0,v=!0;if(typeof r!="function")throw new TypeError(I);return a(l)&&(g="leading"in l?!!l.leading:g,v="trailing"in l?!!l.trailing:v),n(r,c,{leading:g,maxWait:c,trailing:v})}function a(r){var c=typeof r;return!!r&&(c=="object"||c=="function")}function u(r){return!!r&&typeof r=="object"}function d(r){return typeof r=="symbol"||u(r)&&B.call(r)==p}function s(r){if(typeof r=="number")return r;if(d(r))return j;if(a(r)){var c=typeof r.valueOf=="function"?r.valueOf():r;r=a(c)?c+"":c}if(typeof r!="string")return r===0?r:+r;r=r.replace(A,"");var l=_.test(r);return l||O.test(r)?S(r.slice(2),l?2:8):E.test(r)?j:+r}L.exports=o}}]);