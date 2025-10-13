"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[1995],{13773:function(w,u,n){n.r(u),n.d(u,{ModalDef:function(){return Y},ModalHolder:function(){return Q},NiceModalContext:function(){return d},Provider:function(){return J},antdDrawer:function(){return W},antdDrawerV5:function(){return te},antdModal:function(){return k},antdModalV5:function(){return ae},bootstrapDialog:function(){return _},create:function(){return z},hide:function(){return K},muiDialog:function(){return q},muiDialogV5:function(){return oe},reducer:function(){return R},register:function(){return S},remove:function(){return H},show:function(){return Z},unregister:function(){return X},useModal:function(){return $}});var i=n(75271),c=function(){return c=Object.assign||function(e){for(var r,o=1,t=arguments.length;o<t;o++){r=arguments[o];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},c.apply(this,arguments)},v=function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)r.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(o[t[s]]=e[t[s]]);return o},O=Symbol("NiceModalId"),M={},d=i.createContext(M),b=i.createContext(null),g={},f={},j=0,x=function(){throw new Error("No dispatch method detected, did you embed your app with NiceModal.Provider?")},T=function(){return"_nice_modal_"+j++},R=function(e,r){var o,t,s;switch(e===void 0&&(e=M),r.type){case"nice-modal/show":{var I=r.payload,l=I.modalId,p=I.args;return c(c({},e),(o={},o[l]=c(c({},e[l]),{id:l,args:p,visible:!!f[l],delayVisible:!f[l]}),o))}case"nice-modal/hide":{var l=r.payload.modalId;return e[l]?c(c({},e),(t={},t[l]=c(c({},e[l]),{visible:!1}),t)):e}case"nice-modal/remove":{var l=r.payload.modalId,C=c({},e);return delete C[l],C}case"nice-modal/set-flags":{var P=r.payload,l=P.modalId,B=P.flags;return c(c({},e),(s={},s[l]=c(c({},e[l]),B),s))}default:return e}};function h(e){var r;return(r=g[e])===null||r===void 0?void 0:r.comp}function F(e,r){return{type:"nice-modal/show",payload:{modalId:e,args:r}}}function y(e,r){return{type:"nice-modal/set-flags",payload:{modalId:e,flags:r}}}function m(e){return{type:"nice-modal/hide",payload:{modalId:e}}}function L(e){return{type:"nice-modal/remove",payload:{modalId:e}}}var D={},a={},A=function(e){return typeof e=="string"?e:(e[O]||(e[O]=T()),e[O])};function Z(e,r){var o=A(e);if(typeof e!="string"&&!g[o]&&S(o,e),x(F(o,r)),!D[o]){var t,s,I=new Promise(function(l,p){t=l,s=p});D[o]={resolve:t,reject:s,promise:I}}return D[o].promise}function K(e){var r=A(e);if(x(m(r)),delete D[r],!a[r]){var o,t,s=new Promise(function(I,l){o=I,t=l});a[r]={resolve:o,reject:t,promise:s}}return a[r].promise}var H=function(e){var r=A(e);x(L(r)),delete D[r],delete a[r]},ne=function(e,r){x(y(e,r))};function $(e,r){var o=(0,i.useContext)(d),t=(0,i.useContext)(b),s=null,I=e&&typeof e!="string";if(e?s=A(e):s=t,!s)throw new Error("No modal id found in NiceModal.useModal.");var l=s;(0,i.useEffect)(function(){I&&!g[l]&&S(l,e,r)},[I,l,e,r]);var p=o[l],C=(0,i.useCallback)(function(N){return Z(l,N)},[l]),P=(0,i.useCallback)(function(){return K(l)},[l]),B=(0,i.useCallback)(function(){return H(l)},[l]),V=(0,i.useCallback)(function(N){var E;(E=D[l])===null||E===void 0||E.resolve(N),delete D[l]},[l]),U=(0,i.useCallback)(function(N){var E;(E=D[l])===null||E===void 0||E.reject(N),delete D[l]},[l]),ee=(0,i.useCallback)(function(N){var E;(E=a[l])===null||E===void 0||E.resolve(N),delete a[l]},[l]);return(0,i.useMemo)(function(){return{id:l,args:p==null?void 0:p.args,visible:!!(p!=null&&p.visible),keepMounted:!!(p!=null&&p.keepMounted),show:C,hide:P,remove:B,resolve:V,reject:U,resolveHide:ee}},[l,p==null?void 0:p.args,p==null?void 0:p.visible,p==null?void 0:p.keepMounted,C,P,B,V,U,ee])}var z=function(e){return function(r){var o,t=r.defaultVisible,s=r.keepMounted,I=r.id,l=v(r,["defaultVisible","keepMounted","id"]),p=$(I),C=p.args,P=p.show,B=(0,i.useContext)(d),V=!!B[I];(0,i.useEffect)(function(){return t&&P(),f[I]=!0,function(){delete f[I]}},[I,P,t]),(0,i.useEffect)(function(){s&&ne(I,{keepMounted:!0})},[I,s]);var U=(o=B[I])===null||o===void 0?void 0:o.delayVisible;return(0,i.useEffect)(function(){U&&P(C)},[U,C,P]),V?i.createElement(b.Provider,{value:I},i.createElement(e,c({},l,C))):null}},S=function(e,r,o){g[e]?g[e].props=o:g[e]={comp:r,props:o}},X=function(e){delete g[e]},G=function(){var e=(0,i.useContext)(d),r=Object.keys(e).filter(function(t){return!!e[t]});r.forEach(function(t){if(!g[t]&&!f[t]){console.warn("No modal found for id: "+t+". Please check the id or if it is registered or declared via JSX.");return}});var o=r.filter(function(t){return g[t]}).map(function(t){return c({id:t},g[t])});return i.createElement(i.Fragment,null,o.map(function(t){return i.createElement(t.comp,c({key:t.id,id:t.id},t.props))}))},re=function(e){var r=e.children,o=(0,i.useReducer)(R,M),t=o[0];return x=o[1],i.createElement(d.Provider,{value:t},r,i.createElement(G,null))},J=function(e){var r=e.children,o=e.dispatch,t=e.modals;return!o||!t?i.createElement(re,null,r):(x=o,i.createElement(d.Provider,{value:t},r,i.createElement(G,null)))},Y=function(e){var r=e.id,o=e.component;return(0,i.useEffect)(function(){return S(r,o),function(){X(r)}},[r,o]),null},Q=function(e){var r,o=e.modal,t=e.handler,s=t===void 0?{}:t,I=v(e,["modal","handler"]),l=(0,i.useMemo)(function(){return T()},[]),p=typeof o=="string"?(r=g[o])===null||r===void 0?void 0:r.comp:o;if(!s)throw new Error("No handler found in NiceModal.ModalHolder.");if(!p)throw new Error("No modal found for id: "+o+" in NiceModal.ModalHolder.");return s.show=(0,i.useCallback)(function(C){return Z(l,C)},[l]),s.hide=(0,i.useCallback)(function(){return K(l)},[l]),i.createElement(p,c({id:l},I))},k=function(e){return{visible:e.visible,onOk:function(){return e.hide()},onCancel:function(){return e.hide()},afterClose:function(){e.resolveHide(),e.keepMounted||e.remove()}}},ae=function(e){var r=k(e),o=r.onOk,t=r.onCancel,s=r.afterClose;return{open:e.visible,onOk:o,onCancel:t,afterClose:s}},W=function(e){return{visible:e.visible,onClose:function(){return e.hide()},afterVisibleChange:function(r){r||e.resolveHide(),!r&&!e.keepMounted&&e.remove()}}},te=function(e){var r=W(e),o=r.onClose,t=r.afterVisibleChange;return{open:e.visible,onClose:o,afterOpenChange:t}},q=function(e){return{open:e.visible,onClose:function(){return e.hide()},onExited:function(){e.resolveHide(),!e.keepMounted&&e.remove()}}},oe=function(e){return{open:e.visible,onClose:function(){return e.hide()},TransitionProps:{onExited:function(){e.resolveHide(),!e.keepMounted&&e.remove()}}}},_=function(e){return{show:e.visible,onHide:function(){return e.hide()},onExited:function(){e.resolveHide(),!e.keepMounted&&e.remove()}}},le={Provider:J,ModalDef:Y,ModalHolder:Q,NiceModalContext:d,create:z,register:S,getModal:h,show:Z,hide:K,remove:H,useModal:$,reducer:R,antdModal:k,antdDrawer:W,muiDialog:q,bootstrapDialog:_};u.default=le},98127:function(w,u,n){var i;n.r(u),n.d(u,{demos:function(){return R}});var c=n(90228),v=n.n(c),O=n(87999),M=n.n(O),d=n(75271),b=n(48402),g=n(69243),f=n(85768),j=n(78855),x=n(81231),T=n(13773),R={"l-drawer-form-demo-demo4":{component:d.memo(d.lazy(function(){return n.e(8789).then(n.bind(n,99564))})),asset:{type:"BLOCK",id:"l-drawer-form-demo-demo4",refAtomIds:["l-drawer-form"],dependencies:{"index.tsx":{type:"FILE",value:n(23171).Z},antd:{type:"NPM",value:"5.27.3"},"lighting-design":{type:"NPM",value:"3.0.0"},"../../test.ts":{type:"FILE",value:n(78615).Z}},entry:"index.tsx"},context:{"../../test.ts":f,antd:b,"lighting-design":g,"/Users/lilanqing/Desktop/web/kaiyuan/lighting-design/src/test/index.ts":f},renderOpts:{compile:function(){var h=M()(v()().mark(function y(){var m,L=arguments;return v()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(8816).then(n.bind(n,28816));case 2:return a.abrupt("return",(m=a.sent).default.apply(m,L));case 3:case"end":return a.stop()}},y)}));function F(){return h.apply(this,arguments)}return F}()}},"l-drawer-form-demo-demo6":{component:d.memo(d.lazy(function(){return n.e(8789).then(n.bind(n,2145))})),asset:{type:"BLOCK",id:"l-drawer-form-demo-demo6",refAtomIds:["l-drawer-form"],dependencies:{"index.tsx":{type:"FILE",value:n(72361).Z},antd:{type:"NPM",value:"5.27.3"},"lighting-design":{type:"NPM",value:"3.0.0"},"../../test.ts":{type:"FILE",value:n(78615).Z}},entry:"index.tsx"},context:{"../../test.ts":f,antd:b,"lighting-design":g,"/Users/lilanqing/Desktop/web/kaiyuan/lighting-design/src/test/index.ts":f},renderOpts:{compile:function(){var h=M()(v()().mark(function y(){var m,L=arguments;return v()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(8816).then(n.bind(n,28816));case 2:return a.abrupt("return",(m=a.sent).default.apply(m,L));case 3:case"end":return a.stop()}},y)}));function F(){return h.apply(this,arguments)}return F}()}},"l-drawer-form-demo-demo1":{component:d.memo(d.lazy(function(){return n.e(8789).then(n.bind(n,55262))})),asset:{type:"BLOCK",id:"l-drawer-form-demo-demo1",refAtomIds:["l-drawer-form"],dependencies:{"index.tsx":{type:"FILE",value:n(76765).Z},antd:{type:"NPM",value:"5.27.3"},"lighting-design":{type:"NPM",value:"3.0.0"},react:{type:"NPM",value:"18.3.1"},"../../test.ts":{type:"FILE",value:n(78615).Z}},entry:"index.tsx"},context:{"../../test.ts":f,antd:b,"lighting-design":g,react:i||(i=n.t(d,2)),"/Users/lilanqing/Desktop/web/kaiyuan/lighting-design/src/test/index.ts":f},renderOpts:{compile:function(){var h=M()(v()().mark(function y(){var m,L=arguments;return v()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(8816).then(n.bind(n,28816));case 2:return a.abrupt("return",(m=a.sent).default.apply(m,L));case 3:case"end":return a.stop()}},y)}));function F(){return h.apply(this,arguments)}return F}()}},"l-drawer-form-demo-demo3":{component:d.memo(d.lazy(function(){return n.e(8789).then(n.bind(n,48930))})),asset:{type:"BLOCK",id:"l-drawer-form-demo-demo3",refAtomIds:["l-drawer-form"],dependencies:{"index.tsx":{type:"FILE",value:n(52541).Z},antd:{type:"NPM",value:"5.27.3"},"lighting-design":{type:"NPM",value:"3.0.0"},react:{type:"NPM",value:"18.3.1"},"../../test.ts":{type:"FILE",value:n(78615).Z}},entry:"index.tsx"},context:{"../../test.ts":f,antd:b,"lighting-design":g,react:i||(i=n.t(d,2)),"/Users/lilanqing/Desktop/web/kaiyuan/lighting-design/src/test/index.ts":f},renderOpts:{compile:function(){var h=M()(v()().mark(function y(){var m,L=arguments;return v()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(8816).then(n.bind(n,28816));case 2:return a.abrupt("return",(m=a.sent).default.apply(m,L));case 3:case"end":return a.stop()}},y)}));function F(){return h.apply(this,arguments)}return F}()}},"l-drawer-form-demo-demo2":{component:d.memo(d.lazy(function(){return n.e(8789).then(n.bind(n,14981))})),asset:{type:"BLOCK",id:"l-drawer-form-demo-demo2",refAtomIds:["l-drawer-form"],dependencies:{"index.tsx":{type:"FILE",value:n(46168).Z},antd:{type:"NPM",value:"5.27.3"},"lighting-design":{type:"NPM",value:"3.0.0"},"../../test.ts":{type:"FILE",value:n(78615).Z}},entry:"index.tsx"},context:{"../../test.ts":f,antd:b,"lighting-design":g,"/Users/lilanqing/Desktop/web/kaiyuan/lighting-design/src/test/index.ts":f},renderOpts:{compile:function(){var h=M()(v()().mark(function y(){var m,L=arguments;return v()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(8816).then(n.bind(n,28816));case 2:return a.abrupt("return",(m=a.sent).default.apply(m,L));case 3:case"end":return a.stop()}},y)}));function F(){return h.apply(this,arguments)}return F}()}},"l-drawer-form-demo-demo5":{component:d.memo(d.lazy(function(){return n.e(8789).then(n.bind(n,6790))})),asset:{type:"BLOCK",id:"l-drawer-form-demo-demo5",refAtomIds:["l-drawer-form"],dependencies:{"index.tsx":{type:"FILE",value:n(70516).Z},antd:{type:"NPM",value:"5.27.3"},"lighting-design":{type:"NPM",value:"3.0.0"},react:{type:"NPM",value:"18.3.1"},"../../test.ts":{type:"FILE",value:n(78615).Z}},entry:"index.tsx"},context:{"../../test.ts":f,antd:b,"lighting-design":g,react:i||(i=n.t(d,2)),"/Users/lilanqing/Desktop/web/kaiyuan/lighting-design/src/test/index.ts":f},renderOpts:{compile:function(){var h=M()(v()().mark(function y(){var m,L=arguments;return v()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(8816).then(n.bind(n,28816));case 2:return a.abrupt("return",(m=a.sent).default.apply(m,L));case 3:case"end":return a.stop()}},y)}));function F(){return h.apply(this,arguments)}return F}()}},"l-drawer-form-demo-demo7":{component:d.memo(d.lazy(function(){return n.e(8789).then(n.bind(n,28061))})),asset:{type:"BLOCK",id:"l-drawer-form-demo-demo7",refAtomIds:["l-drawer-form"],dependencies:{"index.tsx":{type:"FILE",value:n(18102).Z},antd:{type:"NPM",value:"5.27.3"},"lighting-design":{type:"NPM",value:"3.0.0"},"../../test.ts":{type:"FILE",value:n(78615).Z}},entry:"index.tsx"},context:{"../../test.ts":f,antd:b,"lighting-design":g,"/Users/lilanqing/Desktop/web/kaiyuan/lighting-design/src/test/index.ts":f},renderOpts:{compile:function(){var h=M()(v()().mark(function y(){var m,L=arguments;return v()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(8816).then(n.bind(n,28816));case 2:return a.abrupt("return",(m=a.sent).default.apply(m,L));case 3:case"end":return a.stop()}},y)}));function F(){return h.apply(this,arguments)}return F}()}},"l-drawer-form-demo-demo9":{component:d.memo(d.lazy(function(){return n.e(8789).then(n.bind(n,53342))})),asset:{type:"BLOCK",id:"l-drawer-form-demo-demo9",refAtomIds:["l-drawer-form"],dependencies:{"index.tsx":{type:"FILE",value:n(18959).Z},ahooks:{type:"NPM",value:"3.9.0"},antd:{type:"NPM",value:"5.27.3"},"lighting-design":{type:"NPM",value:"3.0.0"},"rc-use-hooks":{type:"NPM",value:"2.0.10"},react:{type:"NPM",value:"18.3.1"},"../../test.ts":{type:"FILE",value:n(78615).Z}},entry:"index.tsx"},context:{"../../test.ts":f,ahooks:j,antd:b,"lighting-design":g,"rc-use-hooks":x,react:i||(i=n.t(d,2)),"/Users/lilanqing/Desktop/web/kaiyuan/lighting-design/src/test/index.ts":f},renderOpts:{compile:function(){var h=M()(v()().mark(function y(){var m,L=arguments;return v()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(8816).then(n.bind(n,28816));case 2:return a.abrupt("return",(m=a.sent).default.apply(m,L));case 3:case"end":return a.stop()}},y)}));function F(){return h.apply(this,arguments)}return F}()}},"l-drawer-form-demo-demo8":{component:d.memo(d.lazy(function(){return n.e(8789).then(n.bind(n,35839))})),asset:{type:"BLOCK",id:"l-drawer-form-demo-demo8",refAtomIds:["l-drawer-form"],dependencies:{"index.tsx":{type:"FILE",value:n(96172).Z},"@ebay/nice-modal-react":{type:"NPM",value:"1.2.13"},antd:{type:"NPM",value:"5.27.3"},"lighting-design":{type:"NPM",value:"3.0.0"}},entry:"index.tsx"},context:{"@ebay/nice-modal-react":T,antd:b,"lighting-design":g,"lighting-design/test":f},renderOpts:{compile:function(){var h=M()(v()().mark(function y(){var m,L=arguments;return v()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(8816).then(n.bind(n,28816));case 2:return a.abrupt("return",(m=a.sent).default.apply(m,L));case 3:case"end":return a.stop()}},y)}));function F(){return h.apply(this,arguments)}return F}()}}}},85768:function(w,u,n){n.r(u),n.d(u,{getRandomNumber:function(){return c},sleep:function(){return i}});function i(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1e3;return new Promise(function(O){setTimeout(O,v)})}var c=function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:300;return Math.floor(Math.random()*(M-O+1))+O}},42240:function(w,u,n){n.r(u),n.d(u,{texts:function(){return i}});const i=[{value:"\u57FA\u4E8E ",paraId:0,tocIndex:0},{value:"LForm",paraId:0,tocIndex:0},{value:" \u6269\u5C55\u7684\u9AD8\u7EA7\u62BD\u5C49\u8868\u5355\u3002",paraId:0,tocIndex:0},{value:"\u5982\u679C\u8981\u5728\u5F53\u524D Dom \u4E2D\u5F39\u51FA\uFF0CLDrawerForm \u7684\u7236\u5143\u7D20\u6837\u5F0F\u4E2D\u5FC5\u987B\u6709 position \u5C5E\u6027",paraId:1,tocIndex:7},{value:"antd",paraId:2,tocIndex:8},{value:" \u7684\u7248\u672C\u8981\u5927\u4E8E\u7B49\u4E8E ",paraId:2,tocIndex:8},{value:"5.7.0",paraId:2,tocIndex:8},{value:"LDrawerForm",paraId:3},{value:"\u7684",paraId:3},{value:"children",paraId:3},{value:"\u5C5E\u6027\u5FC5\u987B\u5305\u542B\u914D\u5408",paraId:3},{value:"LFormItem",paraId:3},{value:"\u6216",paraId:3},{value:"LFormItemXXX",paraId:3},{value:"\u6216",paraId:3},{value:"Form.Item",paraId:3},{value:"\uFF0C\u5982\u679C\u53EA\u662F\u5C55\u793A\u5185\u5BB9 (",paraId:3},{value:"\u4F8B\u5982\u8868\u683C \u5217\u8868 \u8BE6\u60C5",paraId:3},{value:") \u8BF7\u4F7F\u7528",paraId:3},{value:"antd",paraId:3},{value:"\u7684\u62BD\u5C49\u7EC4\u4EF6\u6216",paraId:3},{value:"Nice Modal",paraId:3},{value:"LDrawerForm",paraId:4},{value:" \u7684",paraId:4},{value:"\u5E95\u90E8\u64CD\u4F5C\u680F",paraId:4},{value:"\u901A\u8FC7 ",paraId:4},{value:"LForm",paraId:4},{value:" \u7684",paraId:4},{value:"submitter",paraId:4},{value:"\u5C5E\u6027\u914D\u7F6E",paraId:4},{value:"\u5927\u591A\u6570\u60C5\u51B5\u4F60\u53EA\u9700\u8981\u914D\u7F6E",paraId:5},{value:" trigger",paraId:5},{value:" ",paraId:5},{value:"(\u80FD\u63A5\u53D7 onClick \u4E8B\u4EF6\u7684\u7EC4\u4EF6) ",paraId:5},{value:"\uFF0C\u4E00\u65E6\u914D\u7F6E\u4E86",paraId:5},{value:"trigger",paraId:5},{value:"\u5C5E\u6027\u5C31\u4E0D\u5728\u9700\u8981\u53D7\u63A7\u63A7\u5236\u5F39\u7A97\u7684\u663E\u793A",paraId:5},{value:"\u67D0\u4E9B\u7279\u6B8A\u60C5\u51B5\u4F60\u9700\u8981\u5728\u5173\u95ED\u62BD\u5C49\u65F6\u8C03\u7528",paraId:6},{value:"form.resetFields()",paraId:6},{value:"\u624B\u52A8\u63A7\u5236\u6062\u590D\u5230\u9ED8\u8BA4\u503C , \u8BF7\u5C06",paraId:6},{value:"isResetFields={false}",paraId:6},{value:"\u5982\u679C\u8981\u5728\u5F53\u524D dom \u4E2D\u5F39\u51FA\uFF0C",paraId:7},{value:"LDrawerForm",paraId:7},{value:" \u7684\u7236\u5143\u7D20\u6837\u5F0F\u4E2D\u5FC5\u987B\u6709 ",paraId:7},{value:"position",paraId:7},{value:" \u5C5E\u6027",paraId:7},{value:"\u5173\u95ED\u62BD\u5C49\u65F6\u9ED8\u8BA4\u4E0D\u4F1A\u9500\u6BC1\u8868\u5355\u9879\u5185\u5BB9 \u53EF\u901A\u8FC7",paraId:8},{value:"Drawer",paraId:8},{value:"\u7684",paraId:8},{value:"destroyOnClose",paraId:8},{value:"\u5C5E\u6027\u6539\u53D8",paraId:8},{value:"\u8BBE\u7F6E ",paraId:9},{value:"destroyOnClose",paraId:9},{value:" \u4E5F\u4E0D\u4F1A\u5728 ",paraId:9},{value:"Drawer",paraId:9},{value:" \u5173\u95ED\u65F6\u9500\u6BC1\u8868\u5355\u5B57\u6BB5\u6570\u636E\uFF0C\u9700\u8981\u8BBE\u7F6E ",paraId:9},{value:"<LDrawerForm preserve={false} />",paraId:9},{value:"\u3002",paraId:9},{value:`import { LDrawerForm } from 'lighting-design';
`,paraId:10},{value:"\u9664\u4E86\u4EE5\u4E0B\u53C2\u6570\uFF0C\u5176\u4F59\u548C ",paraId:11},{value:"LForm",paraId:12},{value:" \u4E00\u6837\u3002",paraId:11},{value:"\u53C2\u6570",paraId:13},{value:"\u8BF4\u660E",paraId:13},{value:"\u7C7B\u578B",paraId:13},{value:"\u9ED8\u8BA4\u503C",paraId:13},{value:"title",paraId:13},{value:"Drawer",paraId:13},{value:" \u6807\u9898",paraId:13},{value:"ReactNode",paraId:13},{value:"-",paraId:13},{value:"placement",paraId:13},{value:"\u62BD\u5C49\u7684\u65B9\u5411",paraId:13},{value:" DrawerProps['placement']",paraId:13},{value:"'right'",paraId:13},{value:"isResetFields",paraId:13},{value:"\u662F\u5426\u5728\u5173\u95ED\u62BD\u5C49\u65F6\u91CD\u7F6E\u8868\u5355\u5230\u521D\u59CB\u503C",paraId:13},{value:"boolean",paraId:13},{value:"true",paraId:13},{value:"isFullscreen",paraId:13},{value:"\u662F\u5426\u5168\u5C4F\u62BD\u5C49",paraId:13},{value:"boolean",paraId:13},{value:"false",paraId:13},{value:"destroyOnHidden",paraId:13},{value:"\u5173\u95ED\u65F6\u662F\u5426\u9500\u6BC1 Drawer \u7684\u5B50\u5143\u7D20",paraId:13},{value:"boolean",paraId:13},{value:"true",paraId:13},{value:"forceRender",paraId:13},{value:"\u662F\u5426\u9884\u6E32\u67D3",paraId:13},{value:"LDrawerForm",paraId:13},{value:"\u7684\u5185\u5BB9",paraId:13},{value:"boolean",paraId:13},{value:"false",paraId:13},{value:"width",paraId:13},{value:"Drawer",paraId:13},{value:" \u5BBD\u5EA6",paraId:13},{value:"number | string",paraId:13},{value:"600",paraId:13},{value:"height",paraId:13},{value:"Drawer",paraId:13},{value:" \u9AD8\u5EA6",paraId:13},{value:"number | string",paraId:13},{value:"-",paraId:13},{value:"trigger",paraId:13},{value:"\u7528\u4E8E\u89E6\u53D1 ",paraId:13},{value:"Drawer",paraId:13},{value:" \u6253\u5F00\u7684 dom\uFF0C\u4E00\u822C\u662F Button \u7EC4\u4EF6",paraId:13},{value:"ReactElement",paraId:13},{value:"-",paraId:13},{value:"open",paraId:13},{value:"\u662F\u5426\u6253\u5F00\u3002",paraId:13},{value:"\u8BBE\u7F6E\u540E\u8868\u793A\u4E3A ",paraId:13},{value:"\u53D7\u63A7\u7EC4\u4EF6",paraId:13},{value:"\uFF0C\u53EF\u7ED3\u5408 ",paraId:13},{value:"onOpenChange",paraId:13},{value:" \u8FDB\u884C\u63A7\u5236\u3002",paraId:13},{value:"boolean",paraId:13},{value:"-",paraId:13},{value:"onOpenChange",paraId:13},{value:"open",paraId:13},{value:" \u6539\u53D8\u65F6\u89E6\u53D1",paraId:13},{value:"(open: boolean) => void",paraId:13},{value:"-",paraId:13},{value:"drawerProps",paraId:13},{value:"Drawer",paraId:13},{value:" \u7684 ",paraId:13},{value:"props",paraId:13},{value:"\uFF0C\u4F7F\u7528\u65B9\u5F0F\u4E0E antd \u76F8\u540C\u3002",paraId:13},{value:"DrawerProps",paraId:13},{value:"-",paraId:13},{value:"onFinish",paraId:13},{value:"\u63D0\u4EA4\u6570\u636E\u65F6\u89E6\u53D1\u3002",paraId:13},{value:"\u5982\u679C\u8FD4\u56DE ",paraId:13},{value:"true",paraId:13},{value:" \u6216 ",paraId:13},{value:"Promise.resolve(true)",paraId:13},{value:" \u4F1A\u5173\u95ED\u5F39\u6846\u5E76\u4E14\u4F1A\u81EA\u52A8\u7BA1\u7406 ",paraId:13},{value:"loading",paraId:13},{value:"async (values: any) => any",paraId:13},{value:"-",paraId:13},{value:"onCancel",paraId:13},{value:"\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u6216\u5173\u95ED\u6309\u94AE\u65F6\u89E6\u53D1",paraId:13},{value:" (e) => any",paraId:13},{value:"-",paraId:13},{value:"afterOpen",paraId:13},{value:"open \u4E3A true \u540E\u7684\u56DE\u8C03 , \u4E00\u822C\u5728\u6B64\u8BBE\u7F6E form \u8868\u5355\u7684\u56DE\u586B\u503C",paraId:13},{value:" () => void",paraId:13},{value:"-",paraId:13},{value:"afterClose",paraId:13},{value:"\u5B8C\u5168\u5173\u95ED\u540E\u7684\u56DE\u8C03",paraId:13},{value:" () => void",paraId:13},{value:"-",paraId:13}]},76765:function(w,u){u.Z=`import { Button, Form } from 'antd';
import { LDrawerForm, LFormItemColor, LFormItemInput } from 'lighting-design';
import { useState } from 'react';
import { sleep } from '../../test';

const Demo1 = () => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <LDrawerForm
        form={form}
        open={open}
        onOpenChange={(isOpen) => {
          console.log('isOpen ', isOpen);
          setOpen(false);
        }}
        placement="right"
        title="\u62BD\u5C49"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await sleep();
          return true;
        }}
        initialValues={{
          color: '#666',
          input: '\u5BF8\u91D1\u4E43\u4E70\u5BF8\u5149\u9634',
        }}
      >
        <LFormItemColor label="\u989C\u8272\u9009\u62E9" name="color" required />
        <LFormItemInput name="input" required label="\u8F93\u5165\u6846" />
      </LDrawerForm>
      <Button type="primary" onClick={() => setOpen(true)}>
        \u6253\u5F00\u62BD\u5C49
      </Button>
    </div>
  );
};

export default Demo1;
`},46168:function(w,u){u.Z=`import { Button, message, Space } from 'antd';
import { LDrawerForm, LForm, LFormItemInput } from 'lighting-design';
import { sleep } from '../../test';

const Demo1 = () => {
  const [form1] = LForm.useForm();
  const [form2] = LForm.useForm();
  const [form3] = LForm.useForm();
  const [form4] = LForm.useForm();
  const [form5] = LForm.useForm();

  return (
    <Space>
      <LDrawerForm
        name="LModalForm1"
        form={form1}
        title="\u65B0\u589E"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await sleep();
          message.success('\u63D0\u4EA4\u6210\u529F');
          return true;
        }}
        submitter={{
          renderSubmitter(doms) {
            return (
              <Space>
                <Button onClick={() => form1.setFieldsValue({ name: null })}>\u91CD\u7F6E</Button>
                {doms.resetDom}
                {doms.submitDom}
              </Space>
            );
          },
        }}
        trigger={<Button type="primary">\u81EA\u5B9A\u4E49\u6309\u94AE1</Button>}
      >
        <LFormItemInput name="name" required label="\u59D3\u540D" />
      </LDrawerForm>
      <LDrawerForm
        name="LModalForm2"
        form={form2}
        title="\u65B0\u589E"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await sleep();
          message.success('\u63D0\u4EA4\u6210\u529F');
          return true;
        }}
        submitter={{
          position: 'center',
          submitText: '\u63D0\u4EA4',
        }}
        trigger={<Button type="primary">\u81EA\u5B9A\u4E49\u6309\u94AE2</Button>}
      >
        <LFormItemInput name="name" required label="\u59D3\u540D" />
      </LDrawerForm>
      <LDrawerForm
        name="LModalForm3"
        form={form3}
        title="\u65B0\u589E"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await sleep();
          message.success('\u63D0\u4EA4\u6210\u529F');
          return true;
        }}
        submitter={{
          showReset: false,
          submitText: '\u63D0\u4EA4',
        }}
        trigger={<Button type="primary">\u81EA\u5B9A\u4E49\u6309\u94AE3</Button>}
      >
        <LFormItemInput name="name" required label="\u59D3\u540D" />
      </LDrawerForm>
      <LDrawerForm
        name="LModalForm4"
        form={form4}
        title="\u65B0\u589E"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await sleep();
          message.success('\u63D0\u4EA4\u6210\u529F');
          return true;
        }}
        submitter={{
          renderSubmitter(doms) {
            return (
              <Space>
                {doms.resetDom}
                {doms.submitDom}
                <Button>\u5176\u4ED6</Button>
              </Space>
            );
          },
        }}
        trigger={<Button type="primary">\u81EA\u5B9A\u4E49\u6309\u94AE4</Button>}
      >
        <LFormItemInput name="name" required label="\u59D3\u540D" />
      </LDrawerForm>
      <LDrawerForm
        name="LModalForm5"
        form={form5}
        title="\u65B0\u589E"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await sleep();
          message.success('\u63D0\u4EA4\u6210\u529F');
          return true;
        }}
        trigger={<Button type="primary">\u81EA\u5B9A\u4E49\u6309\u94AE5</Button>}
      >
        <LFormItemInput name="name" required label="\u59D3\u540D" />
      </LDrawerForm>
    </Space>
  );
};

export default Demo1;
`},52541:function(w,u){u.Z=`import { Button, message } from 'antd';
import { LDrawerForm, LForm, LFormItemInput } from 'lighting-design';
import { useState } from 'react';
import { sleep } from '../../test';

const Demo3 = () => {
  const [form] = LForm.useForm();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setOpen(true)}>
        \u7F16\u8F91
      </Button>

      <LDrawerForm
        open={open}
        onOpenChange={setOpen}
        form={form}
        title="\u7F16\u8F91"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await sleep();
          message.success('\u63D0\u4EA4\u6210\u529F');
          return true;
        }}
        afterOpen={() => {
          form.setFieldsValue({ name: '\u6CD5\u5916\u72C2\u5F92' });
        }}
        afterClose={() => {
          console.log('afterClose');
        }}
      >
        <LFormItemInput name="name" required label="\u59D3\u540D" />
      </LDrawerForm>
    </div>
  );
};

export default Demo3;
`},23171:function(w,u){u.Z=`import { Button, message } from 'antd';
import { LDrawerForm, LForm, LFormItemInput } from 'lighting-design';
import { sleep } from '../../test';

const Demo4 = () => {
  const [form] = LForm.useForm();

  return (
    <div>
      <LDrawerForm
        form={form}
        title="\u65B0\u589E"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await sleep();
          message.success('\u63D0\u4EA4\u6210\u529F');
          return true;
        }}
        trigger={<Button type="primary">\u6253\u5F00\u62BD\u5C49</Button>}
      >
        <LFormItemInput name="name1" required label="\u59D3\u540D1" />
        <LFormItemInput name="name2" required label="\u59D3\u540D2" />
      </LDrawerForm>
    </div>
  );
};

export default Demo4;
`},70516:function(w,u){u.Z=`import { Button, message } from 'antd';
import { LDrawerForm, LForm, LFormItemInput } from 'lighting-design';
import { useEffect, useState } from 'react';
import { sleep } from '../../test';

const Demo3 = () => {
  const [form] = LForm.useForm();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      form.setFieldsValue({ name: '\u6CD5\u5916\u72C2\u5F92' });
    }
  }, [form, open]);

  // \u5982\u679C\u8981\u5728\u5F53\u524DDom\u4E2D\u5F39\u51FA\uFF0CLDrawerForm\u7684\u7236\u5143\u7D20\u6837\u5F0F\u4E2D\u5FC5\u987B\u6709position\u5C5E\u6027
  return (
    <div
      style={{
        position: 'relative',
        height: '600px',
        padding: '24px',
        overflow: 'hidden',
        background: '#fafafa',
        border: '1px solid #ebedf0',
      }}
    >
      <Button type="primary" onClick={() => setOpen(true)}>
        \u6253\u5F00
      </Button>

      <LDrawerForm
        open={open}
        onOpenChange={setOpen}
        form={form}
        title="\u62BD\u5C49"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await sleep();
          message.success('\u63D0\u4EA4\u6210\u529F');
          return true;
        }}
        drawerProps={{
          getContainer: false,
        }}
      >
        <LFormItemInput name="name" required label="\u59D3\u540D" />
      </LDrawerForm>
    </div>
  );
};

export default Demo3;
`},72361:function(w,u){u.Z=`import { Button, message, Space } from 'antd';
import { LDrawerForm, LForm, LFormItemInput } from 'lighting-design';
import { sleep } from '../../test';

const Demo6 = () => {
  const [form1] = LForm.useForm();
  const [form2] = LForm.useForm();

  return (
    <Space>
      <LDrawerForm
        isFullscreen
        initialValues={{ name: '\u5F20\u4E09' }}
        form={form1}
        title="\u65B0\u589E"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await sleep();
          message.success('\u63D0\u4EA4\u6210\u529F');
          return true;
        }}
        trigger={<Button type="primary">\u6253\u5F00\u62BD\u5C491(\u4ECE\u53F3\u5230\u5DE6)</Button>}
      >
        <LFormItemInput name="name" required label="\u59D3\u540D" />
      </LDrawerForm>
      <LDrawerForm
        isFullscreen
        placement="bottom"
        initialValues={{ name: '\u5F20\u4E09' }}
        form={form2}
        title="\u65B0\u589E"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await sleep();
          message.success('\u63D0\u4EA4\u6210\u529F');
          return true;
        }}
        trigger={<Button type="primary">\u6253\u5F00\u62BD\u5C492(\u4ECE\u4E0B\u5230\u4E0A)</Button>}
      >
        <LFormItemInput name="name" required label="\u59D3\u540D" />
      </LDrawerForm>
    </Space>
  );
};

export default Demo6;
`},18102:function(w,u){u.Z=`import { Button, ConfigProvider, message } from 'antd';
import {
  LDrawerForm,
  LForm,
  LFormItemCascader,
  LFormItemCheckbox,
  LFormItemDate,
  LFormItemInput,
  LFormItemNumber,
  LFormItemRadio,
  LFormItemSelect,
  LFormItemSwitch,
  LFormItemTextarea,
  LFormItemTime,
  LFormItemTreeSelect,
} from 'lighting-design';
import { sleep } from '../../test';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <div>
      <ConfigProvider
        theme={{
          // \u7EDF\u4E00\u8BBE\u7F6E
          token: {
            colorBgTextActive: '#000',
            colorBgContainer: '#486295', // \u7EC4\u4EF6\u5BB9\u5668\u80CC\u666F\u989C\u8272
            colorBorder: '#486295', // \u8FB9\u6846\u989C\u8272
            colorText: '#fff', // \u7EC4\u4EF6\u5B57\u4F53\u989C\u8272
            colorIcon: '#fff', // \u7EC4\u4EF6\u5185\u7F6E\u56FE\u6807\u989C\u8272(\u5173\u95ED\u7B49)
            colorIconHover: '#888',
            colorTextPlaceholder: '#d1dce6', // \u63A7\u5236 Placeholder \u989C\u8272
            colorBgElevated: '#486295', // \u7EC4\u4EF6\u5185\u6D6E\u5C42(\u4E0B\u62C9)\u7684\u5BB9\u5668\u80CC\u666F
            controlItemBgActive: '#1a2a52', // \u63A7\u5236\u7EC4\u4EF6\u9879\u5728\u6FC0\u6D3B\u72B6\u6001\u4E0B\u7684\u80CC\u666F\u989C\u8272\u3002
            controlItemBgHover: '#1a2a52', // \u63A7\u5236\u7EC4\u4EF6\u9879\u5728\u9F20\u6807\u60AC\u6D6E\u65F6\u7684\u80CC\u666F\u989C\u8272
            colorTextHeading: '#fff', // \u7EC4\u4EF7\u6807\u9898\u6807\u9898
            controlOutlineWidth: 0, // \u8F93\u5165\u7EC4\u4EF6\u5916\u7EBF
            colorSplit: '#486295', // \u7EC4\u4EF6\u5185\u5206\u5272\u7EBF\u989C\u8272
          },

          components: {
            // \u5355\u72EC\u8BBE\u7F6E
            Drawer: {
              colorBgElevated: '#1b3160',
            },
          },
        }}
      >
        <LDrawerForm
          title="\u62BD\u5C49"
          form={form}
          onFinish={async (values) => {
            console.log('onFinish-values ', values);
            await sleep();
            message.success('\u63D0\u4EA4\u6210\u529F');
            return true;
          }}
          trigger={<Button type="primary">\u6253\u5F00\u62BD\u5C49</Button>}
        >
          <LFormItemInput name="input" required label="\u8F93\u5165\u6846" />
          <LFormItemNumber name="LFormItemNumber" label="\u91D1\u989D" required />
          <LFormItemSelect
            required
            name="select3"
            label="\u4E0B\u62C9\u6846"
            options={[
              { value: '1', label: '\u6709\u6548' },
              { value: '0', label: '\u65E0\u6548' },
            ]}
          />
          <LFormItemCascader label="\u7EA7\u8054\u9009\u62E9" name="LFormItemCascader" required options={options} />
          <LFormItemTreeSelect label="\u6811\u5F62\u9009\u62E9" name="LFormItemTreeSelect" required treeData={options} />
          <LFormItemCheckbox
            label="\u591A\u9009\u6846"
            required
            name="LFormItemCheckbox"
            options={[
              { label: '\u4E0A\u73ED', value: '1' },
              { label: '\u7761\u89C9', value: '2' },
              { label: '\u6253\u8C46\u8C46', value: '3' },
            ]}
          />

          <LFormItemRadio
            label="\u5355\u9009"
            name="LFormItemRadio2"
            required
            options={[
              { label: 'Unresolved', value: 'open' },
              { label: 'Resolved', value: 'closed' },
              { label: 'Resolving', value: 'processing' },
            ]}
          />
          <LFormItemTime required placeholder="\u8BF7\u9009\u62E9\u65F6\u95F4" label="\u65F6\u95F4\u9009\u62E9" name="LFormItemTime" />
          <LFormItemDate required placeholder="\u8BF7\u9009\u62E9\u65E5\u671F" label="\u65E5\u671F\u9009\u62E9" name="LFormItemDate" />
          <LFormItemDate
            rangePicker
            required
            placeholder={['\u5F00\u59CB\u65E5\u671F', '\u7ED3\u675F\u65E5\u671F']}
            label="\u65E5\u671F\u8303\u56F4"
            name="LFormItemDatePicker1"
          />
          <LFormItemTextarea name="LFormItemTextarea" label="\u5907\u6CE8" />
          <LFormItemSwitch name="LFormItemSwitch" label="\u5F00\u5173" />
        </LDrawerForm>
      </ConfigProvider>
    </div>
  );
};

export default Demo1;
`},96172:function(w,u){u.Z=`import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { Button, message } from 'antd';
import { LDrawerForm, LForm, LFormItemInput, LFormItemRadio } from 'lighting-design';
import { sleep } from 'lighting-design/test';

const MyAntdDrawer = NiceModal.create(({ title }: { title: string }) => {
  const modal = useModal();
  const [form] = LForm.useForm();

  return (
    <LDrawerForm
      open={modal.visible}
      form={form}
      title={title}
      onFinish={async (values) => {
        console.log('onFinish-values ', values);
        await sleep();
        message.success('\u63D0\u4EA4\u6210\u529F');
        modal.resolve('resolve');
        modal.hide();
        // \u4E0E nice moda l\u7ED3\u5408\u540E \u8FD4\u56DE true \u81EA\u52A8\u5173\u95ED\u5C06\u5931\u6548
      }}
      onCancel={() => {
        modal.reject('reject');
        modal.hide();
      }}
    >
      <LFormItemInput name="name" required label="\u8F93\u5165\u6846" />
      <LFormItemRadio
        label="\u5355\u90092"
        name="radio"
        initialValue="open"
        required
        request={async () => {
          await sleep();
          return [
            { label: 'Unresolved', value: 'open' },
            { label: 'Resolved', value: 'closed' },
            { label: 'Resolving', value: 'processing' },
          ];
        }}
      />
    </LDrawerForm>
  );
});

export default function App() {
  const modal = useModal(MyAntdDrawer);

  const showAntdModal = () => {
    modal
      .show({ title: '\u4F60\u597D' })
      .then((res) => {
        console.log('==res====>', res);
      })
      .catch((err) => {
        console.log('==err====>', err);
      });
  };

  return (
    <div>
      <NiceModal.Provider>
        <h1>Nice Modal Examples</h1>
        <Button type="primary" onClick={showAntdModal}>
          \u6253\u5F00
        </Button>
      </NiceModal.Provider>
    </div>
  );
}
`},18959:function(w,u){u.Z=`import { useUpdateEffect } from 'ahooks';
import { Button, Space, message } from 'antd';
import { LDrawerForm, LForm, LFormItemInput } from 'lighting-design';
import type { UseShowInstance, UseShowInstanceRef } from 'rc-use-hooks';
import { useShow } from 'rc-use-hooks';
import { useRef } from 'react';
import { sleep } from '../../test';

const MyDrawer = ({ deawerRef }: { deawerRef: UseShowInstanceRef }) => {
  const [form] = LForm.useForm();
  const { showRecord, open, updateOpen } = useShow(deawerRef, {
    onShow(record) {
      console.log('==onShow====>', record);
    },
    onHide(record) {
      console.log('==onHide====>');
    },
  });

  useUpdateEffect(() => {
    if (open && form && showRecord?.name) {
      form.setFieldsValue(showRecord);
    }
  }, [open]);

  return (
    <div>
      <LDrawerForm
        open={open}
        onOpenChange={updateOpen}
        form={form}
        title={showRecord?.title}
        onFinish={async (values) => {
          await sleep();
          message.success('\u63D0\u4EA4\u6210\u529F');
          return true;
        }}
      >
        <LFormItemInput name="name" required label="\u59D3\u540D" />
      </LDrawerForm>
    </div>
  );
};

export default () => {
  const deawerRef = useRef<UseShowInstance>();
  return (
    <Space>
      <Button
        type="primary"
        onClick={() => {
          deawerRef.current?.onShow({ title: '\u65B0\u589E-\u6807\u9898', name: '' });
        }}
      >
        \u65B0\u589E
      </Button>
      <Button
        onClick={() => {
          deawerRef.current?.onShow({ title: '\u65B0\u589E-\u6807\u9898', name: '\u5434\u5F66\u7956' });
        }}
      >
        \u7F16\u8F91
      </Button>
      <MyDrawer deawerRef={deawerRef} />
    </Space>
  );
};
`},78615:function(w,u){u.Z=`/** \u7761\u7720 */
export function sleep(time = 1000) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, time);
  });
}

export const getRandomNumber = (min: number = 1, max: number = 300) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
`}}]);
