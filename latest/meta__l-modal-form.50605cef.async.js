"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[945],{13773:function(C,i,n){n.r(i),n.d(i,{ModalDef:function(){return Y},ModalHolder:function(){return Q},NiceModalContext:function(){return m},Provider:function(){return J},antdDrawer:function(){return $},antdDrawerV5:function(){return oe},antdModal:function(){return W},antdModalV5:function(){return re},bootstrapDialog:function(){return _},create:function(){return z},hide:function(){return j},muiDialog:function(){return q},muiDialogV5:function(){return te},reducer:function(){return w},register:function(){return S},remove:function(){return K},show:function(){return Z},unregister:function(){return X},useModal:function(){return V}});var d=n(75271),p=function(){return p=Object.assign||function(e){for(var a,t=1,o=arguments.length;t<o;t++){a=arguments[t];for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(e[u]=a[u])}return e},p.apply(this,arguments)},f=function(e,a){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&a.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,o=Object.getOwnPropertySymbols(e);u<o.length;u++)a.indexOf(o[u])<0&&Object.prototype.propertyIsEnumerable.call(e,o[u])&&(t[o[u]]=e[o[u]]);return t},O=Symbol("NiceModalId"),b={},m=d.createContext(b),D=d.createContext(null),g={},I={},H=0,B=function(){throw new Error("No dispatch method detected, did you embed your app with NiceModal.Provider?")},U=function(){return"_nice_modal_"+H++},w=function(e,a){var t,o,u;switch(e===void 0&&(e=b),a.type){case"nice-modal/show":{var c=a.payload,l=c.modalId,s=c.args;return p(p({},e),(t={},t[l]=p(p({},e[l]),{id:l,args:s,visible:!!I[l],delayVisible:!I[l]}),t))}case"nice-modal/hide":{var l=a.payload.modalId;return e[l]?p(p({},e),(o={},o[l]=p(p({},e[l]),{visible:!1}),o)):e}case"nice-modal/remove":{var l=a.payload.modalId,E=p({},e);return delete E[l],E}case"nice-modal/set-flags":{var x=a.payload,l=x.modalId,N=x.flags;return p(p({},e),(u={},u[l]=p(p({},e[l]),N),u))}default:return e}};function F(e){var a;return(a=g[e])===null||a===void 0?void 0:a.comp}function M(e,a){return{type:"nice-modal/show",payload:{modalId:e,args:a}}}function y(e,a){return{type:"nice-modal/set-flags",payload:{modalId:e,flags:a}}}function v(e){return{type:"nice-modal/hide",payload:{modalId:e}}}function L(e){return{type:"nice-modal/remove",payload:{modalId:e}}}var h={},r={},A=function(e){return typeof e=="string"?e:(e[O]||(e[O]=U()),e[O])};function Z(e,a){var t=A(e);if(typeof e!="string"&&!g[t]&&S(t,e),B(M(t,a)),!h[t]){var o,u,c=new Promise(function(l,s){o=l,u=s});h[t]={resolve:o,reject:u,promise:c}}return h[t].promise}function j(e){var a=A(e);if(B(v(a)),delete h[a],!r[a]){var t,o,u=new Promise(function(c,l){t=c,o=l});r[a]={resolve:t,reject:o,promise:u}}return r[a].promise}var K=function(e){var a=A(e);B(L(a)),delete h[a],delete r[a]},ne=function(e,a){B(y(e,a))};function V(e,a){var t=(0,d.useContext)(m),o=(0,d.useContext)(D),u=null,c=e&&typeof e!="string";if(e?u=A(e):u=o,!u)throw new Error("No modal id found in NiceModal.useModal.");var l=u;(0,d.useEffect)(function(){c&&!g[l]&&S(l,e,a)},[c,l,e,a]);var s=t[l],E=(0,d.useCallback)(function(R){return Z(l,R)},[l]),x=(0,d.useCallback)(function(){return j(l)},[l]),N=(0,d.useCallback)(function(){return K(l)},[l]),k=(0,d.useCallback)(function(R){var P;(P=h[l])===null||P===void 0||P.resolve(R),delete h[l]},[l]),T=(0,d.useCallback)(function(R){var P;(P=h[l])===null||P===void 0||P.reject(R),delete h[l]},[l]),ee=(0,d.useCallback)(function(R){var P;(P=r[l])===null||P===void 0||P.resolve(R),delete r[l]},[l]);return(0,d.useMemo)(function(){return{id:l,args:s==null?void 0:s.args,visible:!!(s!=null&&s.visible),keepMounted:!!(s!=null&&s.keepMounted),show:E,hide:x,remove:N,resolve:k,reject:T,resolveHide:ee}},[l,s==null?void 0:s.args,s==null?void 0:s.visible,s==null?void 0:s.keepMounted,E,x,N,k,T,ee])}var z=function(e){return function(a){var t,o=a.defaultVisible,u=a.keepMounted,c=a.id,l=f(a,["defaultVisible","keepMounted","id"]),s=V(c),E=s.args,x=s.show,N=(0,d.useContext)(m),k=!!N[c];(0,d.useEffect)(function(){return o&&x(),I[c]=!0,function(){delete I[c]}},[c,x,o]),(0,d.useEffect)(function(){u&&ne(c,{keepMounted:!0})},[c,u]);var T=(t=N[c])===null||t===void 0?void 0:t.delayVisible;return(0,d.useEffect)(function(){T&&x(E)},[T,E,x]),k?d.createElement(D.Provider,{value:c},d.createElement(e,p({},l,E))):null}},S=function(e,a,t){g[e]?g[e].props=t:g[e]={comp:a,props:t}},X=function(e){delete g[e]},G=function(){var e=(0,d.useContext)(m),a=Object.keys(e).filter(function(o){return!!e[o]});a.forEach(function(o){if(!g[o]&&!I[o]){console.warn("No modal found for id: "+o+". Please check the id or if it is registered or declared via JSX.");return}});var t=a.filter(function(o){return g[o]}).map(function(o){return p({id:o},g[o])});return d.createElement(d.Fragment,null,t.map(function(o){return d.createElement(o.comp,p({key:o.id,id:o.id},o.props))}))},ae=function(e){var a=e.children,t=(0,d.useReducer)(w,b),o=t[0];return B=t[1],d.createElement(m.Provider,{value:o},a,d.createElement(G,null))},J=function(e){var a=e.children,t=e.dispatch,o=e.modals;return!t||!o?d.createElement(ae,null,a):(B=t,d.createElement(m.Provider,{value:o},a,d.createElement(G,null)))},Y=function(e){var a=e.id,t=e.component;return(0,d.useEffect)(function(){return S(a,t),function(){X(a)}},[a,t]),null},Q=function(e){var a,t=e.modal,o=e.handler,u=o===void 0?{}:o,c=f(e,["modal","handler"]),l=(0,d.useMemo)(function(){return U()},[]),s=typeof t=="string"?(a=g[t])===null||a===void 0?void 0:a.comp:t;if(!u)throw new Error("No handler found in NiceModal.ModalHolder.");if(!s)throw new Error("No modal found for id: "+t+" in NiceModal.ModalHolder.");return u.show=(0,d.useCallback)(function(E){return Z(l,E)},[l]),u.hide=(0,d.useCallback)(function(){return j(l)},[l]),d.createElement(s,p({id:l},c))},W=function(e){return{visible:e.visible,onOk:function(){return e.hide()},onCancel:function(){return e.hide()},afterClose:function(){e.resolveHide(),e.keepMounted||e.remove()}}},re=function(e){var a=W(e),t=a.onOk,o=a.onCancel,u=a.afterClose;return{open:e.visible,onOk:t,onCancel:o,afterClose:u}},$=function(e){return{visible:e.visible,onClose:function(){return e.hide()},afterVisibleChange:function(a){a||e.resolveHide(),!a&&!e.keepMounted&&e.remove()}}},oe=function(e){var a=$(e),t=a.onClose,o=a.afterVisibleChange;return{open:e.visible,onClose:t,afterOpenChange:o}},q=function(e){return{open:e.visible,onClose:function(){return e.hide()},onExited:function(){e.resolveHide(),!e.keepMounted&&e.remove()}}},te=function(e){return{open:e.visible,onClose:function(){return e.hide()},TransitionProps:{onExited:function(){e.resolveHide(),!e.keepMounted&&e.remove()}}}},_=function(e){return{show:e.visible,onHide:function(){return e.hide()},onExited:function(){e.resolveHide(),!e.keepMounted&&e.remove()}}},le={Provider:J,ModalDef:Y,ModalHolder:Q,NiceModalContext:m,create:z,register:S,getModal:F,show:Z,hide:j,remove:K,useModal:V,reducer:w,antdModal:W,antdDrawer:$,muiDialog:q,bootstrapDialog:_};i.default=le},50369:function(C,i,n){var d;n.r(i),n.d(i,{demos:function(){return w}});var p=n(90228),f=n.n(p),O=n(87999),b=n.n(O),m=n(75271),D=n(48402),g=n(69243),I=n(85768),H=n(78855),B=n(81231),U=n(13773),w={"l-modal-form-demo-demo1":{component:m.memo(m.lazy(function(){return n.e(2426).then(n.bind(n,44606))})),asset:{type:"BLOCK",id:"l-modal-form-demo-demo1",refAtomIds:["l-modal-form"],dependencies:{"index.tsx":{type:"FILE",value:n(53417).Z},antd:{type:"NPM",value:"5.27.3"},"lighting-design":{type:"NPM",value:"3.0.0"},"../../test.ts":{type:"FILE",value:n(78615).Z}},entry:"index.tsx"},context:{"../../test.ts":I,antd:D,"lighting-design":g,"/Users/lilanqing/Desktop/web/kaiyuan/lighting-design/src/test/index.ts":I},renderOpts:{compile:function(){var F=b()(f()().mark(function y(){var v,L=arguments;return f()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(8816).then(n.bind(n,28816));case 2:return r.abrupt("return",(v=r.sent).default.apply(v,L));case 3:case"end":return r.stop()}},y)}));function M(){return F.apply(this,arguments)}return M}()}},"l-modal-form-demo-demo2":{component:m.memo(m.lazy(function(){return n.e(2426).then(n.bind(n,26035))})),asset:{type:"BLOCK",id:"l-modal-form-demo-demo2",refAtomIds:["l-modal-form"],dependencies:{"index.tsx":{type:"FILE",value:n(37840).Z},antd:{type:"NPM",value:"5.27.3"},"lighting-design":{type:"NPM",value:"3.0.0"},"../../test.ts":{type:"FILE",value:n(78615).Z}},entry:"index.tsx"},context:{"../../test.ts":I,antd:D,"lighting-design":g,"/Users/lilanqing/Desktop/web/kaiyuan/lighting-design/src/test/index.ts":I},renderOpts:{compile:function(){var F=b()(f()().mark(function y(){var v,L=arguments;return f()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(8816).then(n.bind(n,28816));case 2:return r.abrupt("return",(v=r.sent).default.apply(v,L));case 3:case"end":return r.stop()}},y)}));function M(){return F.apply(this,arguments)}return M}()}},"l-modal-form-demo-demo3":{component:m.memo(m.lazy(function(){return n.e(2426).then(n.bind(n,19199))})),asset:{type:"BLOCK",id:"l-modal-form-demo-demo3",refAtomIds:["l-modal-form"],dependencies:{"index.tsx":{type:"FILE",value:n(64104).Z},antd:{type:"NPM",value:"5.27.3"},"lighting-design":{type:"NPM",value:"3.0.0"},react:{type:"NPM",value:"18.3.1"},"../../test.ts":{type:"FILE",value:n(78615).Z}},entry:"index.tsx"},context:{"../../test.ts":I,antd:D,"lighting-design":g,react:d||(d=n.t(m,2)),"/Users/lilanqing/Desktop/web/kaiyuan/lighting-design/src/test/index.ts":I},renderOpts:{compile:function(){var F=b()(f()().mark(function y(){var v,L=arguments;return f()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(8816).then(n.bind(n,28816));case 2:return r.abrupt("return",(v=r.sent).default.apply(v,L));case 3:case"end":return r.stop()}},y)}));function M(){return F.apply(this,arguments)}return M}()}},"l-modal-form-demo-demo4":{component:m.memo(m.lazy(function(){return n.e(2426).then(n.bind(n,81509))})),asset:{type:"BLOCK",id:"l-modal-form-demo-demo4",refAtomIds:["l-modal-form"],dependencies:{"index.tsx":{type:"FILE",value:n(71971).Z},antd:{type:"NPM",value:"5.27.3"},"lighting-design":{type:"NPM",value:"3.0.0"},"../../test.ts":{type:"FILE",value:n(78615).Z}},entry:"index.tsx"},context:{"../../test.ts":I,antd:D,"lighting-design":g,"/Users/lilanqing/Desktop/web/kaiyuan/lighting-design/src/test/index.ts":I},renderOpts:{compile:function(){var F=b()(f()().mark(function y(){var v,L=arguments;return f()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(8816).then(n.bind(n,28816));case 2:return r.abrupt("return",(v=r.sent).default.apply(v,L));case 3:case"end":return r.stop()}},y)}));function M(){return F.apply(this,arguments)}return M}()}},"l-modal-form-demo-demo5":{component:m.memo(m.lazy(function(){return n.e(2426).then(n.bind(n,29485))})),asset:{type:"BLOCK",id:"l-modal-form-demo-demo5",refAtomIds:["l-modal-form"],dependencies:{"index.tsx":{type:"FILE",value:n(52373).Z},antd:{type:"NPM",value:"5.27.3"},"lighting-design":{type:"NPM",value:"3.0.0"},"../../test.ts":{type:"FILE",value:n(78615).Z}},entry:"index.tsx"},context:{"../../test.ts":I,antd:D,"lighting-design":g,"/Users/lilanqing/Desktop/web/kaiyuan/lighting-design/src/test/index.ts":I},renderOpts:{compile:function(){var F=b()(f()().mark(function y(){var v,L=arguments;return f()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(8816).then(n.bind(n,28816));case 2:return r.abrupt("return",(v=r.sent).default.apply(v,L));case 3:case"end":return r.stop()}},y)}));function M(){return F.apply(this,arguments)}return M}()}},"l-modal-form-demo-demo7":{component:m.memo(m.lazy(function(){return n.e(2426).then(n.bind(n,61923))})),asset:{type:"BLOCK",id:"l-modal-form-demo-demo7",refAtomIds:["l-modal-form"],dependencies:{"index.tsx":{type:"FILE",value:n(88016).Z},ahooks:{type:"NPM",value:"3.9.0"},antd:{type:"NPM",value:"5.27.3"},"lighting-design":{type:"NPM",value:"3.0.0"},"rc-use-hooks":{type:"NPM",value:"2.0.10"},react:{type:"NPM",value:"18.3.1"},"../../test.ts":{type:"FILE",value:n(78615).Z}},entry:"index.tsx"},context:{"../../test.ts":I,ahooks:H,antd:D,"lighting-design":g,"rc-use-hooks":B,react:d||(d=n.t(m,2)),"/Users/lilanqing/Desktop/web/kaiyuan/lighting-design/src/test/index.ts":I},renderOpts:{compile:function(){var F=b()(f()().mark(function y(){var v,L=arguments;return f()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(8816).then(n.bind(n,28816));case 2:return r.abrupt("return",(v=r.sent).default.apply(v,L));case 3:case"end":return r.stop()}},y)}));function M(){return F.apply(this,arguments)}return M}()}},"l-modal-form-demo-demo6":{component:m.memo(m.lazy(function(){return n.e(2426).then(n.bind(n,22333))})),asset:{type:"BLOCK",id:"l-modal-form-demo-demo6",refAtomIds:["l-modal-form"],dependencies:{"index.tsx":{type:"FILE",value:n(16644).Z},"@ebay/nice-modal-react":{type:"NPM",value:"1.2.13"},antd:{type:"NPM",value:"5.27.3"},"lighting-design":{type:"NPM",value:"3.0.0"}},entry:"index.tsx"},context:{"@ebay/nice-modal-react":U,antd:D,"lighting-design":g,"lighting-design/test":I},renderOpts:{compile:function(){var F=b()(f()().mark(function y(){var v,L=arguments;return f()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(8816).then(n.bind(n,28816));case 2:return r.abrupt("return",(v=r.sent).default.apply(v,L));case 3:case"end":return r.stop()}},y)}));function M(){return F.apply(this,arguments)}return M}()}}}},85768:function(C,i,n){n.r(i),n.d(i,{getRandomNumber:function(){return p},sleep:function(){return d}});function d(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1e3;return new Promise(function(O){setTimeout(O,f)})}var p=function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:300;return Math.floor(Math.random()*(b-O+1))+O}},36923:function(C,i,n){n.r(i),n.d(i,{texts:function(){return d}});const d=[{value:"\u57FA\u4E8E ",paraId:0,tocIndex:0},{value:"LForm",paraId:0,tocIndex:0},{value:" \u6269\u5C55\u7684\u5F39\u7A97\u9AD8\u7EA7\u8868\u5355\u3002",paraId:0,tocIndex:0},{value:"antd",paraId:1,tocIndex:6},{value:" \u7684\u7248\u672C\u8981\u5927\u4E8E\u7B49\u4E8E ",paraId:1,tocIndex:6},{value:"5.7.0",paraId:1,tocIndex:6},{value:"LMoadlForm",paraId:2},{value:"\u7684",paraId:2},{value:"children",paraId:2},{value:"\u5C5E\u6027\u5FC5\u987B\u5305\u542B\u914D\u5408",paraId:2},{value:"LFormItem",paraId:2},{value:"\u6216",paraId:2},{value:"LFormItemXXX",paraId:2},{value:"\u6216",paraId:2},{value:"Form.Item",paraId:2},{value:"\uFF0C\u5982\u679C\u53EA\u662F\u5C55\u793A\u5185\u5BB9 (",paraId:2},{value:"\u4F8B\u5982\u8868\u683C \u5217\u8868 \u8BE6\u60C5",paraId:2},{value:") \u8BF7\u4F7F\u7528",paraId:2},{value:"antd",paraId:2},{value:"\u7684\u5F39\u7A97\u7EC4\u4EF6\u6216",paraId:2},{value:"Nice Modal",paraId:2},{value:"LMoadlForm",paraId:3},{value:" \u7684",paraId:3},{value:"\u5E95\u90E8\u64CD\u4F5C\u680F",paraId:3},{value:"\u901A\u8FC7 ",paraId:3},{value:"LForm",paraId:3},{value:" \u7684",paraId:3},{value:"submitter",paraId:3},{value:"\u5C5E\u6027\u914D\u7F6E",paraId:3},{value:"\u5927\u591A\u6570\u60C5\u51B5\u4F60\u53EA\u9700\u8981\u914D\u7F6E",paraId:4},{value:" trigger",paraId:4},{value:" ",paraId:4},{value:"(\u80FD\u63A5\u53D7 onClick \u4E8B\u4EF6\u7684\u7EC4\u4EF6) ",paraId:4},{value:"\uFF0C\u4E00\u65E6\u914D\u7F6E\u4E86",paraId:4},{value:"trigger",paraId:4},{value:"\u5C5E\u6027\u5C31\u4E0D\u5728\u9700\u8981\u53D7\u63A7\u63A7\u5236\u5F39\u7A97\u7684\u663E\u793A",paraId:4},{value:"\u67D0\u4E9B\u7279\u6B8A\u60C5\u51B5\u4F60\u9700\u8981\u5728\u5173\u95ED\u5F39\u7A97\u65F6\u8C03\u7528",paraId:5},{value:"form.resetFields()",paraId:5},{value:"\u624B\u52A8\u63A7\u5236\u6062\u590D\u5230\u9ED8\u8BA4\u503C , \u8BF7\u5C06",paraId:5},{value:"isResetFields={false}",paraId:5},{value:"\u5173\u95ED\u5F39\u7A97\u65F6\u9ED8\u8BA4\u4E0D\u4F1A\u9500\u6BC1\u8868\u5355\u9879\u5185\u5BB9 \u53EF\u901A\u8FC7",paraId:6},{value:"Modal",paraId:6},{value:"\u7684",paraId:6},{value:"destroyOnClose",paraId:6},{value:"\u5C5E\u6027\u6539\u53D8",paraId:6},{value:"\u8BBE\u7F6E ",paraId:7},{value:"destroyOnClose",paraId:7},{value:" \u4E5F\u4E0D\u4F1A\u5728 ",paraId:7},{value:"Modal",paraId:7},{value:" \u5173\u95ED\u65F6\u9500\u6BC1\u8868\u5355\u5B57\u6BB5\u6570\u636E\uFF0C\u9700\u8981\u8BBE\u7F6E ",paraId:7},{value:"<LModalForm preserve={false} />",paraId:7},{value:"\u3002",paraId:7},{value:`import { LModalForm } from 'lighting-design';
`,paraId:8},{value:"\u9664\u4E86\u4EE5\u4E0B\u53C2\u6570\uFF0C\u5176\u4F59\u548C ",paraId:9},{value:"LForm",paraId:10},{value:" \u4E00\u6837\u3002",paraId:9},{value:"\u53C2\u6570",paraId:11},{value:"\u8BF4\u660E",paraId:11},{value:"\u7C7B\u578B",paraId:11},{value:"\u9ED8\u8BA4\u503C",paraId:11},{value:"draggableProps",paraId:11},{value:"Modal",paraId:11},{value:"\u80FD\u5426\u62D6\u52A8",paraId:11},{value:"boolean|DraggableProps",paraId:11},{value:"false",paraId:11},{value:"centered",paraId:11},{value:"\u5782\u76F4\u5C45\u4E2D\u5C55\u793A Modal",paraId:11},{value:"boolean",paraId:11},{value:"false",paraId:11},{value:"isResetFields",paraId:11},{value:"\u662F\u5426\u5728\u5173\u95ED\u5F39\u7A97\u65F6\u91CD\u7F6E\u8868\u5355\u5230\u521D\u59CB\u503C",paraId:11},{value:"boolean",paraId:11},{value:"true",paraId:11},{value:"destroyOnHidden",paraId:11},{value:"\u5173\u95ED\u65F6\u662F\u5426\u9500\u6BC1 Modal \u7684\u5B50\u5143\u7D20",paraId:11},{value:"boolean",paraId:11},{value:"true",paraId:11},{value:"forceRender",paraId:11},{value:"\u662F\u5426\u9884\u6E32\u67D3",paraId:11},{value:"LMoadlForm",paraId:11},{value:"\u7684\u5185\u5BB9",paraId:11},{value:"boolean",paraId:11},{value:"false",paraId:11},{value:"title",paraId:11},{value:"Modal",paraId:11},{value:" \u6807\u9898",paraId:11},{value:"ReactNode",paraId:11},{value:"-",paraId:11},{value:"modalTop",paraId:11},{value:"Modal",paraId:11},{value:" \u8DDD\u79BB\u9876\u90E8\u7684\u8DDD\u79BB, \u4E0D\u8981\u4E0E centered \u540C\u65F6\u914D\u7F6E",paraId:11},{value:"number | string",paraId:11},{value:"20vh",paraId:11},{value:"width",paraId:11},{value:"Modal",paraId:11},{value:" \u5BBD\u5EA6",paraId:11},{value:"modalProps['width']",paraId:11},{value:"600",paraId:11},{value:"trigger",paraId:11},{value:"\u7528\u4E8E\u89E6\u53D1 ",paraId:11},{value:"Modal",paraId:11},{value:" \u6253\u5F00\u7684 dom\uFF0C\u4E00\u822C\u662F ",paraId:11},{value:"Button",paraId:11},{value:" \u7EC4\u4EF6",paraId:11},{value:"ReactElement",paraId:11},{value:"-",paraId:11},{value:"open",paraId:11},{value:"\u662F\u5426\u6253\u5F00\u3002",paraId:11},{value:"\u8BBE\u7F6E\u540E\u8868\u793A\u4E3A ",paraId:11},{value:"\u53D7\u63A7\u7EC4\u4EF6",paraId:11},{value:"\uFF0C\u53EF\u7ED3\u5408 ",paraId:11},{value:"onOpenChange",paraId:11},{value:" \u8FDB\u884C\u63A7\u5236\u3002",paraId:11},{value:"boolean",paraId:11},{value:"-",paraId:11},{value:"onOpenChange",paraId:11},{value:"open",paraId:11},{value:" \u6539\u53D8\u65F6\u89E6\u53D1",paraId:11},{value:"(open: boolean) => void",paraId:11},{value:"- ",paraId:11},{value:"modalProps",paraId:11},{value:"Modal",paraId:11},{value:" \u7684 ",paraId:11},{value:"props",paraId:11},{value:"\uFF0C\u4F7F\u7528\u65B9\u5F0F\u4E0E antd \u76F8\u540C\u3002",paraId:11},{value:"ModalProps",paraId:11},{value:"-",paraId:11},{value:"onFinish",paraId:11},{value:"\u63D0\u4EA4\u6570\u636E\u65F6\u89E6\u53D1\u3002",paraId:11},{value:"\u5982\u679C\u8FD4\u56DE ",paraId:11},{value:"true",paraId:11},{value:" \u6216 ",paraId:11},{value:"Promise.resolve(true)",paraId:11},{value:"\u4F1A\u5173\u95ED\u5F39\u6846\u5E76\u4E14\u4F1A\u81EA\u52A8\u7BA1\u7406",paraId:11},{value:"loading",paraId:11},{value:"async (values: any) => any",paraId:11},{value:"-",paraId:11},{value:"onCancel",paraId:11},{value:"\u70B9\u51FB\u5185\u7F6E\u7684\u53D6\u6D88\u6309\u94AE\u6216\u5173\u95ED\u6309\u94AE\u65F6\u89E6\u53D1",paraId:11},{value:" (e) => any",paraId:11},{value:"-",paraId:11},{value:"afterOpen",paraId:11},{value:"open \u4E3A true \u540E\u7684\u56DE\u8C03 , \u4E00\u822C\u5728\u6B64\u8BBE\u7F6E form \u8868\u5355\u7684\u56DE\u586B\u503C",paraId:11},{value:" () => void",paraId:11},{value:"-",paraId:11},{value:"afterClose",paraId:11},{value:"Modal \u5B8C\u5168\u5173\u95ED\u540E\u7684\u56DE\u8C03",paraId:11},{value:"modalProps['afterClose']",paraId:11},{value:"-",paraId:11}]},53417:function(C,i){i.Z=`import { Button, Flex, message } from 'antd';
import { LForm, LFormItemInput, LFormItemRadio, LModalForm } from 'lighting-design';
import { sleep } from '../../test';

const Demo1 = () => {
  const [form1] = LForm.useForm();
  const [form2] = LForm.useForm();
  const [form3] = LForm.useForm();

  return (
    <Flex gap={8}>
      <LModalForm
        form={form1}
        title="\u5F39\u7A97"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await sleep();
          message.success('\u63D0\u4EA4\u6210\u529F');
          return true;
        }}
        trigger={<Button type="primary">\u6253\u5F00\u5F39\u7A97</Button>}
      >
        <LFormItemInput name="name1" required label="\u59D3\u540D" />
        <LFormItemRadio
          label="\u5355\u90092"
          name="radio"
          required
          options={[
            { label: 'AA', value: 'a' },
            { label: 'BB', value: 'b' },
            { label: 'CC', value: 'c' },
          ]}
        />
      </LModalForm>
      <LModalForm
        centered
        form={form2}
        title="\u5F39\u7A97"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await sleep();
          message.success('\u63D0\u4EA4\u6210\u529F');
          return true;
        }}
        trigger={<Button type="primary">centered</Button>}
      >
        <LFormItemInput name="name2" required label="\u59D3\u540D" />
      </LModalForm>
      <LModalForm
        width="40%"
        form={form3}
        title="\u5F39\u7A973"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await sleep();
          message.success('\u63D0\u4EA4\u6210\u529F');
          return true;
        }}
        afterOpen={() => {
          form3.setFieldsValue({ name: '\u6CD5\u5916\u72C2\u5F92' });
        }}
        trigger={<Button type="primary"> \u4F7F\u7528 afterOpen \u7F16\u8F91\u56DE\u663E</Button>}
      >
        <LFormItemInput name="name" required label="\u59D3\u540D" />
      </LModalForm>
    </Flex>
  );
};

export default Demo1;
`},37840:function(C,i){i.Z=`import { Button, Flex, message, Space } from 'antd';
import { LForm, LFormItemInput, LModalForm } from 'lighting-design';
import { sleep } from '../../test';

const Demo1 = () => {
  const [form1] = LForm.useForm();
  const [form2] = LForm.useForm();
  const [form3] = LForm.useForm();
  const [form4] = LForm.useForm();

  return (
    <Space>
      <LModalForm
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
              <Flex justify="flex-end" gap={8}>
                <Button onClick={() => form1.setFieldsValue({ name: null })}>\u91CD\u7F6E</Button>
                {doms.resetDom}
                {doms.submitDom}
              </Flex>
            );
          },
        }}
        trigger={<Button type="primary">\u81EA\u5B9A\u4E49\u6309\u94AE1</Button>}
      >
        <LFormItemInput name="name" required label="\u59D3\u540D" />
      </LModalForm>

      <LModalForm
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
          isEnterSubmit: true,
          position: 'center',
          submitText: '\u63D0\u4EA4',
        }}
        trigger={<Button type="primary">\u81EA\u5B9A\u4E49\u6309\u94AE2</Button>}
      >
        <LFormItemInput name="name" required label="\u59D3\u540D" />
      </LModalForm>
      <LModalForm
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
      </LModalForm>
      <LModalForm
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
                <Button>\u5176\u4ED6</Button>
                {doms.submitDom}
              </Space>
            );
          },
        }}
        trigger={<Button type="primary">\u81EA\u5B9A\u4E49\u6309\u94AE4</Button>}
      >
        <LFormItemInput name="name" required label="\u59D3\u540D" />
      </LModalForm>
    </Space>
  );
};

export default Demo1;
`},64104:function(C,i){i.Z=`import { Button, message } from 'antd';
import { LForm, LFormItemInput, LModalForm } from 'lighting-design';
import { useState } from 'react';
import { sleep } from '../../test';

const Demo3 = () => {
  const [form] = LForm.useForm();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <Button type="primary" onClick={() => setOpen(true)}>
        \u7F16\u8F91
      </Button>
      <LModalForm
        open={open}
        onOpenChange={setOpen}
        form={form}
        title="\u65B0\u589E"
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
      </LModalForm>
    </div>
  );
};

export default Demo3;
`},71971:function(C,i){i.Z=`import { Button, message } from 'antd';
import { LForm, LFormItemInput, LModalForm } from 'lighting-design';
import { sleep } from '../../test';

const Demo3 = () => {
  const [form] = LForm.useForm();

  return (
    <div>
      <LModalForm
        draggableProps
        initialValues={{ name: '\u5F20\u4E09' }}
        form={form}
        title="\u65B0\u589E"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await sleep();
          message.success('\u63D0\u4EA4\u6210\u529F');
          return true;
        }}
        trigger={<Button type="primary">\u6253\u5F00\u5F39\u7A97</Button>}
      >
        <LFormItemInput name="name" required label="\u59D3\u540D" />
      </LModalForm>
    </div>
  );
};

export default Demo3;
`},52373:function(C,i){i.Z=`import { Button, ConfigProvider, message } from 'antd';
import {
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
  LModalForm,
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
            // \u5355\u72EC\u7ED9\u62BD\u5C49\u8BBE\u7F6E
            Modal: {
              colorBgElevated: '#1b3160',
            },
          },
        }}
      >
        <LModalForm
          modalTop="16vh"
          title="\u5F39\u7A97"
          form={form}
          onFinish={async (values) => {
            console.log('onFinish-values ', values);
            await sleep();
            message.success('\u63D0\u4EA4\u6210\u529F');
            return true;
          }}
          trigger={<Button type="primary">\u6253\u5F00\u5F39\u7A97</Button>}
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
            request={async () => {
              await sleep();
              return [
                { label: 'Unresolved', value: 'open' },
                { label: 'Resolved', value: 'closed' },
                { label: 'Resolving', value: 'processing' },
              ];
            }}
          />
          <LFormItemTime required placeholder="\u8BF7\u9009\u62E9\u65F6\u95F4" label="\u65F6\u95F4\u9009\u62E9" name="LFormItemTime" />
          <LFormItemDate required placeholder="\u8BF7\u9009\u62E9\u65E5\u671F" label="\u65E5\u671F\u9009\u62E9" name="LFormItemDate" />
          <LFormItemTextarea name="LFormItemTextarea" label="\u5907\u6CE8" />
          <LFormItemSwitch name="LFormItemSwitch" label="\u5F00\u5173" />
        </LModalForm>
      </ConfigProvider>
    </div>
  );
};

export default Demo1;
`},16644:function(C,i){i.Z=`import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { Button, message } from 'antd';
import { LForm, LFormItemInput, LModalForm } from 'lighting-design';
import { sleep } from 'lighting-design/test';

const MyAntdModal = NiceModal.create(({ title }: { title: string }) => {
  const modal = useModal();
  const [form] = LForm.useForm();

  return (
    <LModalForm
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
    </LModalForm>
  );
});

export default function App() {
  const showAntdModal = () => {
    NiceModal.show(MyAntdModal, { title: '\u4F60\u597D' })
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
`},88016:function(C,i){i.Z=`import { useUpdateEffect } from 'ahooks';
import { Button, Space, message } from 'antd';
import { LForm, LFormItemInput, LModalForm } from 'lighting-design';
import type { UseShowInstance, UseShowInstanceRef } from 'rc-use-hooks';
import { useShow } from 'rc-use-hooks';
import { useRef } from 'react';
import { sleep } from '../../test';

const MyModal = ({ modalRef }: { modalRef: UseShowInstanceRef }) => {
  const [form] = LForm.useForm();

  const { showRecord, open, updateOpen } = useShow<{
    title: string;
    name: string;
  }>(modalRef, {
    onShow(record) {
      console.log('==onShow====>', record);
    },
    onHide(record) {
      console.log('==onHide====>', record);
    },
  });
  useUpdateEffect(() => {
    if (open && form && showRecord?.name) {
      form.setFieldValue('name', showRecord?.name);
    }
  }, [open]);
  return (
    <div>
      <LModalForm
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
      </LModalForm>
    </div>
  );
};

export default () => {
  const modalRef = useRef<
    UseShowInstance<{
      title: string;
      name: string;
    }>
  >();
  return (
    <Space>
      <Button
        type="primary"
        onClick={() => {
          modalRef.current?.onShow({ title: '\u65B0\u589E-\u6807\u9898', name: '' });
        }}
      >
        \u65B0\u589E
      </Button>
      <Button
        onClick={() => {
          modalRef.current?.onShow({ title: '\u7F16\u8F91-\u6807\u9898', name: '\u5434\u5F66\u7956' });
        }}
      >
        \u7F16\u8F91
      </Button>
      <MyModal modalRef={modalRef} />
    </Space>
  );
};
`},78615:function(C,i){i.Z=`/** \u7761\u7720 */
export function sleep(time = 1000) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, time);
  });
}

export const getRandomNumber = (min: number = 1, max: number = 300) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
`}}]);
