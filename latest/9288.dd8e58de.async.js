(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[9288],{2143:function($,K,h){"use strict";var x=h(73847),P=h(67294),E=h(96057);function C(u,e){return M(u)||R(u,e)||j(u,e)||_()}function _(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(u,e){if(u){if(typeof u=="string")return T(u,e);var r=Object.prototype.toString.call(u).slice(8,-1);if(r==="Object"&&u.constructor&&(r=u.constructor.name),r==="Map"||r==="Set")return Array.from(u);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return T(u,e)}}function T(u,e){(e==null||e>u.length)&&(e=u.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=u[r];return a}function R(u,e){var r=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(r!=null){var a,f,c,s,p=[],y=!0,o=!1;try{if(c=(r=r.call(u)).next,e===0){if(Object(r)!==r)return;y=!1}else for(;!(y=(a=c.call(r)).done)&&(p.push(a.value),p.length!==e);y=!0);}catch(d){o=!0,f=d}finally{try{if(!y&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(o)throw f}}return p}}function M(u){if(Array.isArray(u))return u}var L={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var r=this,a=[];return Object.entries(e.properties||{}).forEach(function(f){var c,s=C(f,2),p=s[0],y=s[1];a.push("".concat(p).concat((c=e.required)!==null&&c!==void 0&&c.includes(p)?"":"?",": ").concat(y.type==="object"?"object":r.toString(y)))}),a.length?"{ ".concat(a.join("; ")," }"):"{}"},array:function(e){if(e.items){var r=this.getValidClassName(e.items);return r?"".concat(r,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var r=this,a=e.signature;if(!a)return"Function";var f="oneOf"in a?a.oneOf:[a];return f.map(function(c){return"".concat(c.isAsync?"async ":"","(").concat(c.arguments.map(function(s){return"".concat(s.key,": ").concat(r.toString(s))}).join(", "),") => ").concat(r.toString(c.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(r){return JSON.stringify(r)}).join(" | ")},oneOf:function(e){var r=this;return e.oneOf.map(function(a){return r.getValidClassName(a)||r.toString(a)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},W=function(e){var r=useState(function(){return L.toString(e)}),a=C(r,2),f=a[0],c=a[1];return useEffect(function(){c(L.toString(e))},[e]),React.createElement("code",null,f)},H=function(e){var r,a=useRouteMeta(),f=a.frontmatter,c=useAtomAssets(),s=c.components,p=e.id||f.atomId,y=useIntl();if(!p)throw new Error("`id` properties if required for API component!");var o=s==null?void 0:s[p];return React.createElement("div",{className:"markdown"},React.createElement(Table,null,React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,y.formatMessage({id:"api.component.name"})),React.createElement("th",null,y.formatMessage({id:"api.component.description"})),React.createElement("th",null,y.formatMessage({id:"api.component.type"})),React.createElement("th",null,y.formatMessage({id:"api.component.default"})))),React.createElement("tbody",null,o&&(r=o.propsConfig)!==null&&r!==void 0&&r.properties?Object.entries(o.propsConfig.properties).map(function(d){var m,g=C(d,2),O=g[0],S=g[1];return React.createElement("tr",{key:O},React.createElement("td",null,O),React.createElement("td",null,S.description||"--"),React.createElement("td",null,React.createElement(W,S)),React.createElement("td",null,React.createElement("code",null,(m=o.propsConfig.required)!==null&&m!==void 0&&m.includes(O)?y.formatMessage({id:"api.component.required"}):JSON.stringify(S.default)||"--")))}):React.createElement("tr",null,React.createElement("td",{colSpan:4},y.formatMessage({id:"api.component.".concat(s?"not.found":"unavailable")},{id:p}))))))},F=null},93359:function($,K,h){"use strict";var x=h(67294);function P(){return P=Object.assign?Object.assign.bind():function(_){for(var j=1;j<arguments.length;j++){var T=arguments[j];for(var R in T)Object.prototype.hasOwnProperty.call(T,R)&&(_[R]=T[R])}return _},P.apply(this,arguments)}var E=function(j){return React.createElement("span",P({className:"dumi-default-badge"},j))},C=null},96057:function($,K,h){"use strict";h.d(K,{Z:function(){return u}});var x=h(93096),P=h.n(x),E=h(67294),C=["children"];function _(e,r){return L(e)||M(e,r)||T(e,r)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(e,r){if(e){if(typeof e=="string")return R(e,r);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return R(e,r)}}function R(e,r){(r==null||r>e.length)&&(r=e.length);for(var a=0,f=new Array(r);a<r;a++)f[a]=e[a];return f}function M(e,r){var a=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var f,c,s,p,y=[],o=!0,d=!1;try{if(s=(a=a.call(e)).next,r===0){if(Object(a)!==a)return;o=!1}else for(;!(o=(f=s.call(a)).done)&&(y.push(f.value),y.length!==r);o=!0);}catch(m){d=!0,c=m}finally{try{if(!o&&a.return!=null&&(p=a.return(),Object(p)!==p))return}finally{if(d)throw c}}return y}}function L(e){if(Array.isArray(e))return e}function W(e,r){if(e==null)return{};var a=H(e,r),f,c;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(c=0;c<s.length;c++)f=s[c],!(r.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(e,f)&&(a[f]=e[f])}return a}function H(e,r){if(e==null)return{};var a={},f=Object.keys(e),c,s;for(s=0;s<f.length;s++)c=f[s],!(r.indexOf(c)>=0)&&(a[c]=e[c]);return a}var F=function(r){var a=r.children,f=W(r,C),c=(0,E.useRef)(null),s=(0,E.useState)(!1),p=_(s,2),y=p[0],o=p[1],d=(0,E.useState)(!1),m=_(d,2),g=m[0],O=m[1];return(0,E.useEffect)(function(){var S=c.current;if(S){var t=P()(function(){o(S.scrollLeft>0),O(S.scrollLeft<S.scrollWidth-S.offsetWidth)},100);return t(),S.addEventListener("scroll",t),window.addEventListener("resize",t),function(){S.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}},[]),E.createElement("div",{className:"dumi-default-table"},E.createElement("div",{className:"dumi-default-table-content",ref:c,"data-left-folded":y||void 0,"data-right-folded":g||void 0},E.createElement("table",f,a)))},u=F},85939:function($,K,h){"use strict";var x=h(25530),P=h(67294);function E(t){"@babel/helpers - typeof";return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},E(t)}function C(t,n){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter(function(I){return Object.getOwnPropertyDescriptor(t,I).enumerable})),i.push.apply(i,l)}return i}function _(t){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?C(Object(i),!0).forEach(function(l){j(t,l,i[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):C(Object(i)).forEach(function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(i,l))})}return t}function j(t,n,i){return n=T(n),n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}function T(t){var n=R(t,"string");return E(n)==="symbol"?n:String(n)}function R(t,n){if(E(t)!=="object"||t===null)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var l=i.call(t,n||"default");if(E(l)!=="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function M(t,n){return H(t)||W(t,n)||e(t,n)||L()}function L(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W(t,n){var i=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(i!=null){var l,I,v,A,w=[],N=!0,D=!1;try{if(v=(i=i.call(t)).next,n===0){if(Object(i)!==i)return;N=!1}else for(;!(N=(l=v.call(i)).done)&&(w.push(l.value),w.length!==n);N=!0);}catch(B){D=!0,I=B}finally{try{if(!N&&i.return!=null&&(A=i.return(),Object(A)!==A))return}finally{if(D)throw I}}return w}}function H(t){if(Array.isArray(t))return t}function F(t){return a(t)||r(t)||e(t)||u()}function u(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e(t,n){if(t){if(typeof t=="string")return f(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(t);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return f(t,n)}}function r(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function a(t){if(Array.isArray(t))return f(t)}function f(t,n){(n==null||n>t.length)&&(n=t.length);for(var i=0,l=new Array(n);i<n;i++)l[i]=t[i];return l}function c(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=[];return[].concat(t).forEach(function(l,I){var v="".concat(n?"".concat(n,"-"):"").concat(I);switch(l==null?void 0:l.type){case"ul":{var A,w=((A=i[i.length-1])===null||A===void 0?void 0:A.children)||i,N=c(l.props.children||[],v);w.push.apply(w,F(N));break}case"li":{var D=c(l.props.children,v);i.push({title:[].concat(l.props.children).filter(function(B){return B.type!=="ul"}),key:v,children:D,isLeaf:!D.length});break}default:}}),i}var s=function(n){var i=useState(c(n)),l=M(i,2),I=l[0],v=l[1];return useEffect(function(){v(c(n))},[n]),I},p=function(n){var i=n.isLeaf,l=n.expanded;return i?React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FileOutlined,{fill:"currentColor"})):l?React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FolderOpenOutlined,{fill:"currentColor"})):React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FolderOutlined,{fill:"currentColor"}))},y=function(n){var i=n.isLeaf,l=n.expanded;return i?React.createElement("span",{className:"tree-switcher-leaf-line"}):l?React.createElement("span",{className:"tree-switcher-line-icon"},React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(MinusSquareOutlined,{fill:"currentColor"}))):React.createElement("span",{className:"tree-switcher-line-icon"},React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(PlusSquareOutlined,{fill:"currentColor"})))},o=function(){return{height:0,opacity:0}},d=function(n){var i=n.scrollHeight;return{height:i,opacity:1}},m=function(n){return{height:n?n.offsetHeight:0}},g=function(n,i){return(i==null?void 0:i.deadline)===!0||i.propertyName==="height"},O={motionName:"ant-motion-collapse",onAppearStart:o,onEnterStart:o,onAppearActive:d,onEnterActive:d,onLeaveStart:m,onLeaveActive:o,onAppearEnd:g,onEnterEnd:g,onLeaveEnd:g,motionDeadline:500},S=function(t){var n=s(t.children),i=createRef(),l=function(v,A){var w=A.isLeaf;w||v.shiftKey||v.metaKey||v.ctrlKey||i.current.onNodeExpand(v,A)};return React.createElement(Tree,{className:"dumi-default-tree",icon:p,ref:i,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:_(_({},O),{},{motionAppear:!1}),onClick:l,treeData:[{key:"0",title:t.title||"<root>",children:n}],defaultExpandAll:!0,switcherIcon:y})}},93096:function($,K,h){var x="Expected a function",P=NaN,E="[object Symbol]",C=/^\s+|\s+$/g,_=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,T=/^0o[0-7]+$/i,R=parseInt,M=typeof h.g=="object"&&h.g&&h.g.Object===Object&&h.g,L=typeof self=="object"&&self&&self.Object===Object&&self,W=M||L||Function("return this")(),H=Object.prototype,F=H.toString,u=Math.max,e=Math.min,r=function(){return W.Date.now()};function a(o,d,m){var g,O,S,t,n,i,l=0,I=!1,v=!1,A=!0;if(typeof o!="function")throw new TypeError(x);d=y(d)||0,c(m)&&(I=!!m.leading,v="maxWait"in m,S=v?u(y(m.maxWait)||0,d):S,A="trailing"in m?!!m.trailing:A);function w(b){var k=g,U=O;return g=O=void 0,l=b,t=o.apply(U,k),t}function N(b){return l=b,n=setTimeout(V,d),I?w(b):t}function D(b){var k=b-i,U=b-l,X=d-k;return v?e(X,S-U):X}function B(b){var k=b-i,U=b-l;return i===void 0||k>=d||k<0||v&&U>=S}function V(){var b=r();if(B(b))return J(b);n=setTimeout(V,D(b))}function J(b){return n=void 0,A&&g?w(b):(g=O=void 0,t)}function G(){n!==void 0&&clearTimeout(n),l=0,g=i=O=n=void 0}function Z(){return n===void 0?t:J(r())}function z(){var b=r(),k=B(b);if(g=arguments,O=this,i=b,k){if(n===void 0)return N(i);if(v)return n=setTimeout(V,d),w(i)}return n===void 0&&(n=setTimeout(V,d)),t}return z.cancel=G,z.flush=Z,z}function f(o,d,m){var g=!0,O=!0;if(typeof o!="function")throw new TypeError(x);return c(m)&&(g="leading"in m?!!m.leading:g,O="trailing"in m?!!m.trailing:O),a(o,d,{leading:g,maxWait:d,trailing:O})}function c(o){var d=typeof o;return!!o&&(d=="object"||d=="function")}function s(o){return!!o&&typeof o=="object"}function p(o){return typeof o=="symbol"||s(o)&&F.call(o)==E}function y(o){if(typeof o=="number")return o;if(p(o))return P;if(c(o)){var d=typeof o.valueOf=="function"?o.valueOf():o;o=c(d)?d+"":d}if(typeof o!="string")return o===0?o:+o;o=o.replace(C,"");var m=j.test(o);return m||T.test(o)?R(o.slice(2),m?2:8):_.test(o)?P:+o}$.exports=f}}]);
