(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[1765],{48689:function(N,i,e){"use strict";e.d(i,{Z:function(){return C}});var r=e(87462),t=e(67294),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},l=m,f=e(13401),d=function(v,A){return t.createElement(f.Z,(0,r.Z)({},v,{ref:A,icon:l}))},C=t.forwardRef(d)},83029:function(N,i,e){"use strict";e.r(i);var r=e(69649),t=e.n(r),m=e(4390),l=e(34501),f=e(85893),d=t().mock({"list|10":[{key:"@id",title:"@city"}]}).list;i.default=function(){return(0,f.jsx)(m.Z,{labelCol:{flex:"120px"},submitter:{buttonAlign:"center"},onFinish:function(h){console.log("values",h)},children:(0,f.jsx)(l.Z,{options:d,label:"\u7A7F\u68AD\u6846",name:"transfer"})})}},85609:function(N,i,e){"use strict";e.r(i),e.d(i,{default:function(){return Ee}});var r=e(15009),t=e.n(r),m=e(99289),l=e.n(m),f=e(66309),d=e(94117),C=e(69649),h=e.n(C),v=e(4390),A=e(34501),E=e(79500),q=e(63001);function D(o,a,g,x){for(var M=o.length,P=g+(x?1:-1);x?P--:++P<M;)if(a(o[P],P,o))return P;return-1}var c=D;function I(o){return o!==o}var U=I;function s(o,a,g){for(var x=g-1,M=o.length;++x<M;)if(o[x]===a)return x;return-1}var ee=s;function z(o,a,g){return a===a?ee(o,a,g):c(o,U,g)}var L=z;function y(o,a){var g=o==null?0:o.length;return!!g&&L(o,a,0)>-1}var p=y;function T(o,a,g){for(var x=-1,M=o==null?0:o.length;++x<M;)if(g(a,o[x]))return!0;return!1}var R=T,W=e(74073),se=e(21162),ne=e(59548),H=200;function n(o,a,g,x){var M=-1,P=p,K=!0,F=o.length,me=[],Ce=a.length;if(!F)return me;g&&(a=(0,W.Z)(a,(0,se.Z)(g))),x?(P=R,K=!1):a.length>=H&&(P=ne.Z,K=!1,a=new q.Z(a));e:for(;++M<F;){var re=o[M],S=g==null?re:g(re);if(re=x||re!==0?re:0,K&&S===S){for(var J=Ce;J--;)if(a[J]===S)continue e;me.push(re)}else P(a,S,x)||me.push(re)}return me}var b=n,j=e(58694),u=e(17685),_=e(29169),w=e(27771),G=u.Z?u.Z.isConcatSpreadable:void 0;function ge(o){return(0,w.Z)(o)||(0,_.Z)(o)||!!(G&&o&&o[G])}var te=ge;function X(o,a,g,x,M){var P=-1,K=o.length;for(g||(g=te),M||(M=[]);++P<K;){var F=o[P];a>0&&g(F)?a>1?X(F,a-1,g,x,M):(0,j.Z)(M,F):x||(M[M.length]=F)}return M}var O=X,ie=e(51685),ue=e(836),de=(0,ie.Z)(function(o,a){return(0,ue.Z)(o)?b(o,O(a,1,ue.Z,!0)):[]}),_e=de,V=e(85893),B=["\u4F11\u95F2","\u7F51\u7EA2","\u65F6\u5C1A"],he=h().mock({"list|50":[{key:"@id",title:"@city","tag|1":B,desc:"@ctitle"}]}).list,Y=[{dataIndex:"title",title:"Name",align:"center"},{dataIndex:"desc",title:"Desc",align:"center"},{dataIndex:"tag",title:"Tag",align:"center",render:function(a){return(0,V.jsx)(f.Z,{children:a})}}],fe=[{dataIndex:"title",title:"Name",align:"center"}],be=function(a,g){return g.title.indexOf(a)!==-1||g.tag.indexOf(a)!==-1},Ee=function(){return(0,V.jsx)(v.Z,{labelCol:{flex:"120px"},submitter:{buttonAlign:"center"},onFinish:function(a){console.log("values",a)},children:(0,V.jsx)(A.Z,{request:function(){var o=l()(t()().mark(function a(g){var x,M;return t()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return x=g.current,M=g.pageSize,K.next=3,(0,E.N)();case 3:return K.abrupt("return",{data:he,total:he.length});case 4:case"end":return K.stop()}},a)}));return function(a){return o.apply(this,arguments)}}(),label:"\u7A7F\u68AD\u6846",name:"transfer",transferProps:{showSearch:!0,filterOption:be,listStyle:{padding:8},children:function(a){var g=a.direction,x=a.filteredItems,M=a.onItemSelectAll,P=a.onItemSelect,K=a.selectedKeys,F=a.disabled,me=g==="left"?Y:fe,Ce={getCheckboxProps:function(S){return{disabled:F||S.disabled}},onSelectAll:function(S,J){var ce=J.filter(function(De){return!De.disabled}).map(function(De){var Pe=De.key;return Pe}),pe=S?_e(ce,K):_e(K,ce);M(pe,S)},onSelect:function(S,J){var ce=S.key;P(ce,J)},selectedRowKeys:K};return(0,V.jsx)(d.Z,{size:"small",rowSelection:Ce,columns:me,dataSource:x,style:{pointerEvents:F?"none":void 0},onRow:function(S){var J=S.key,ce=S.disabled;return{onClick:function(){ce||F||P(J,!K.includes(J))}}}})}}})})}},41502:function(N,i,e){"use strict";e.r(i);var r=e(15009),t=e.n(r),m=e(99289),l=e.n(m),f=e(69649),d=e.n(f),C=e(4390),h=e(34501),v=e(79500),A=e(67294),E=e(85893),q=d().mock({"list|10":[{key:"@id",title:"@city"}]}).list,D=q.filter(function(c){return Number(c.key)<=1}).map(function(c){return c.key});i.default=function(){var c=(0,A.useRef)();return(0,E.jsx)(C.Z,{labelCol:{flex:"120px"},submitter:{buttonAlign:"center"},initialValues:{transfer:D},onFinish:function(U){console.log("values",U)},children:(0,E.jsx)(h.Z,{contentAfter:!1,contentInline:!1,transferProps:{listStyle:{flex:"auto"}},required:!0,pagination:!0,label:"\u7A7F\u68AD\u6846",name:"transfer",actionRef:c,request:function(){var I=l()(t()().mark(function U(s){var ee,z;return t()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return ee=s.current,z=s.pageSize,console.log(" page-pageSize ",ee,z),y.next=4,(0,v.N)();case 4:return y.abrupt("return",{data:q,total:q.length});case 5:case"end":return y.stop()}},U)}));return function(U){return I.apply(this,arguments)}}()})})}},84957:function(N,i,e){"use strict";e.r(i);var r=e(15009),t=e.n(r),m=e(99289),l=e.n(m),f=e(4390),d=e(34501),C=e(79500),h=e(67294),v=e(85893),A=Array.from({length:20}).map(function(D,c){return{key:c.toString(),title:"\u674E\u5C9A\u6E05-\u5434\u5F66\u7956-\u9648\u51A0\u5E0C-\u5F6D\u4E8E\u664F-".concat(c)}}),E=A.filter(function(D){return Number(D.value)<=1}).map(function(D){return D.value}),q=function(c,I){return I.title.indexOf(c)>-1};i.default=function(){var D=(0,h.useRef)();return(0,v.jsx)(f.Z,{labelCol:{flex:"120px"},submitter:{buttonAlign:"center"},onFinish:function(I){console.log("values",I)},children:(0,v.jsx)(d.Z,{pagination:{simple:!1},label:"\u7A7F\u68AD\u6846",name:"transfer",required:!0,actionRef:D,request:function(){var c=l()(t()().mark(function I(U){var s,ee;return t()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return s=U.current,ee=U.pageSize,L.next=3,(0,C.N)();case 3:return L.abrupt("return",{data:A,total:A.length});case 4:case"end":return L.stop()}},I)}));return function(I){return c.apply(this,arguments)}}(),transferProps:{titles:["\u6570\u636E\u9879","\u9009\u62E9\u9879"],showSelectAll:!1,filterOption:q,showSearch:!0,listStyle:{width:300,height:470}}})})}},51800:function(N,i,e){"use strict";e.r(i);var r=e(15009),t=e.n(r),m=e(99289),l=e.n(m),f=e(4390),d=e(34501),C=e(79500),h=e(67294),v=e(85893),A=Array.from({length:10}).map(function(D,c){return{key:c.toString(),title:"\u674E\u5C9A\u6E05-\u5434\u5F66\u7956-\u9648\u51A0\u5E0C-\u5F6D\u4E8E\u664F-".concat(c)}}),E=A.filter(function(D){return Number(D.value)<=1}).map(function(D){return D.value}),q=function(c,I){return I.title.indexOf(c)>-1};i.default=function(){var D=(0,h.useRef)();return(0,v.jsx)(f.Z,{labelCol:{flex:"120px"},submitter:{buttonAlign:"center"},onFinish:function(I){console.log("values",I)},children:(0,v.jsx)(d.Z,{limitMaxCount:3,label:"\u7A7F\u68AD\u6846",name:"transfer",required:!0,actionRef:D,request:function(){var c=l()(t()().mark(function I(U){var s,ee;return t()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return s=U.current,ee=U.pageSize,L.next=3,(0,C.N)();case 3:return L.abrupt("return",{data:A,total:A.length});case 4:case"end":return L.stop()}},I)}));return function(I){return c.apply(this,arguments)}}(),transferProps:{listStyle:{width:300}}})})}},17222:function(N,i,e){"use strict";e.r(i);var r=e(19632),t=e.n(r),m=e(15009),l=e.n(m),f=e(99289),d=e.n(f),C=e(5574),h=e.n(C),v=e(97857),A=e.n(v),E=e(13769),q=e.n(E),D=e(20863),c=e(4390),I=e(34501),U=e(79500),s=e(85893),ee=["children"],z=[{key:"0-0",title:"0-0"},{key:"0-1",title:"0-1",children:[{key:"0-1-0",title:"0-1-0"},{key:"0-1-1",title:"0-1-1"}]},{key:"0-2",title:"0-2"},{key:"0-3",title:"0-3"},{key:"0-4",title:"0-4"}],L=function(T,R){return T.includes(R)},y=function p(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return T.map(function(W){var se=W.children,ne=q()(W,ee);return A()(A()({},ne),{},{disabled:R.includes(ne.key),children:p(se,R)})})};i.default=function(){var p=c.Z.useForm(),T=h()(p,1),R=T[0],W=[];function se(){var ne=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];ne.forEach(function(H){W.push(H),se(H.children)})}return se(z),(0,s.jsx)(c.Z,{form:R,labelCol:{flex:"120px"},submitter:{buttonAlign:"center"},onFinish:function(H){console.log("values",H)},children:(0,s.jsx)(I.Z,{request:function(){var ne=d()(l()().mark(function H(n){var b,j;return l()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return b=n.current,j=n.pageSize,_.next=3,(0,U.N)();case 3:return _.abrupt("return",{data:W,total:W.length});case 4:case"end":return _.stop()}},H)}));return function(H){return ne.apply(this,arguments)}}(),label:"\u7A7F\u68AD\u6846",name:"transfer",transferProps:{showSelectAll:!1,children:function(H){var n=H.direction,b=H.onItemSelect,j=H.selectedKeys;if(n==="left"){var u,_=(u=R.getFieldValue("transfer"))!==null&&u!==void 0?u:[],w=[].concat(t()(j),t()(_));return(0,s.jsx)("div",{style:{padding:8},children:(0,s.jsx)(D.Z,{blockNode:!0,checkable:!0,checkStrictly:!0,defaultExpandAll:!0,checkedKeys:w,treeData:y(z,_),onCheck:function(ge,te){var X=te.node.key;b(X,!L(w,X))},onSelect:function(ge,te){var X=te.node.key;b(X,!L(w,X))}})})}}}})})}},34501:function(N,i,e){"use strict";e.d(i,{Z:function(){return te}});var r=e(97857),t=e.n(r),m=e(13769),l=e.n(m),f=e(89889),d=e(84640),C=e(33168),h=e(40964),v=e(67294),A=e(19632),E=e.n(A),q=e(15009),D=e.n(q),c=e(99289),I=e.n(c),U=e(5574),s=e.n(U),ee=e(27347),z=e(3930),L=e(15479),y=e(22638),p=e(2477),T=e(94740),R=e(75081),W=e(40784),se=e(82925),ne=e(94184),H=e.n(ne),n=e(85893),b=["fieldNames","limitMaxCount","transferProps","options","request","requestOptions","actionRef","outLoading","disabled","pagination","isCustomTransfer"],j=["loading","pagination","mutate","data"],u="lightd-transfer",_=function(O){var ie,ue=O.fieldNames,de=ue===void 0?{label:"title",value:"key"}:ue,_e=O.limitMaxCount,V=_e===void 0?0:_e,B=O.transferProps,he=O.options,Y=he===void 0?h.ow:he,fe=O.request,be=O.requestOptions,Ee=O.actionRef,o=O.outLoading,a=O.disabled,g=O.pagination,x=O.isCustomTransfer,M=l()(O,b),P=(ie=M.targetKeys)!==null&&ie!==void 0?ie:[],K=de.label,F=de.value,me=(0,ee.Z)(function(){return Y}),Ce=s()(me,2),re=Ce[0],S=Ce[1],J=(0,z.Z)(re),ce=(0,L.Z)(I()(D()().mark(function Q(){var Z,$,k,oe,le,ae=arguments;return D()().wrap(function(ve){for(;;)switch(ve.prev=ve.next){case 0:if(!(Y!=null&&Y.length)){ve.next=2;break}return ve.abrupt("return",{total:Y.length,list:Y});case 2:for($=ae.length,k=new Array($),oe=0;oe<$;oe++)k[oe]=ae[oe];return ve.next=5,fe==null?void 0:fe.apply(void 0,k);case 5:return le=ve.sent,ve.abrupt("return",{total:(le==null?void 0:le.total)||(le==null||(Z=le.data)===null||Z===void 0?void 0:Z.length),list:le==null?void 0:le.data});case 7:case"end":return ve.stop()}},Q)})),t()(t()({},be),{},{onSuccess:function(Z){var $;S(E()(($=Z==null?void 0:Z.list)!==null&&$!==void 0?$:[]))}})),pe=ce.loading,De=ce.pagination,Pe=ce.mutate,Ie=ce.data,Ae=l()(ce,j);(0,v.useImperativeHandle)(Ee,function(){return t()(t()({},Ae),{},{data:J.current,mutate:S,loading:pe,pagination:g})});var Oe=(0,y.Z)(function(Q,Z,$){$>0&&Q.length>=$?Q.forEach(function(k){k.disabled=!1}):Q.forEach(function(k){k.disabled=!0}),S([].concat(E()(Q),E()(Z)))});(0,p.Z)(function(){if(P!=null&&P.length&&V){var Q=J.current.filter(function(k){return!P.includes(k[F])}),Z=J.current.filter(function(k){return P.includes(k[F])}).map(function(k){return t()(t()({},k),{},{disabled:!1})}),$=V-P.length;Oe(Q,Z,$)}else V&&Oe(J.current,[],V)},[P]),(0,p.Z)(function(){S(Y!=null?Y:[])},[Y]);var Te=(0,y.Z)(function(Q,Z,$){var k,oe;if(V)if(Z==="left"){var le=J.current.map(function(ye){return t()(t()({},ye),{},{disabled:!1})});S(E()(le))}else{var ae=J.current.filter(function(ye){return!Q.includes(ye[F])}),Me=J.current.filter(function(ye){return Q.includes(ye[F])}).map(function(ye){return t()(t()({},ye),{},{disabled:!1})}),ve=V-Q.length;Oe(ae,Me,ve)}B==null||(k=B.onChange)===null||k===void 0||k.call(B,Q,Z,$),M==null||(oe=M.onChange)===null||oe===void 0||oe.call(M,Q,Z,$)}),je=(0,y.Z)(function(Q,Z){var $;if(B==null||($=B.onSelectChange)===null||$===void 0||$.call(B,Q,Z),!(!V||Z!=null&&Z.length)){var k=V-P.length-Q.length,oe=J.current.filter(function(ae){return!E()(P).includes(ae[F])}),le=J.current.filter(function(ae){return E()(P).includes(ae[F])}).map(function(ae){return t()(t()({},ae),{},{disabled:!1})});k>0&&oe.length>=k?oe.forEach(function(ae){ae.disabled=!1}):oe.forEach(function(ae){Q.includes(ae[F])?ae.disabled=!1:ae.disabled=!0}),S([].concat(E()(oe),E()(le)))}});return(0,n.jsx)(T.ZP,{locale:se.Z,children:(0,n.jsx)(R.Z,t()(t()({spinning:!(Y!=null&&Y.length)&&pe},o!=null?o:{}),{},{children:(0,n.jsx)(W.Z,t()(t()(t()({pagination:g,disabled:a,showSelectAll:!V,titles:["\u6570\u636E\u6E90","\u5DF2\u9009\u62E9"],rowKey:function(Z){return Z[F]},dataSource:J.current,render:function(Z){var $;return($=Z[K])!==null&&$!==void 0?$:Z[F]}},B),M),{},{listStyle:t()({height:x?"auto":410,width:x?"auto":200},B==null?void 0:B.listStyle),className:H()(u,B==null?void 0:B.className),onChange:Te,onSelectChange:je}))}))})},w=_,G=["required","disabled","size","pagination","limitMaxCount","fieldNames","actionRef","request","requestOptions","options","spin","transferProps"],ge=function(O){var ie=O.required,ue=O.disabled,de=O.size,_e=O.pagination,V=O.limitMaxCount,B=O.fieldNames,he=O.actionRef,Y=O.request,fe=O.requestOptions,be=fe===void 0?h.FD:fe,Ee=O.options,o=O.spin,a=O.transferProps,g=a===void 0?h.FD:a,x=l()(O,G),M=(0,v.useContext)(f.e),P=M.disabled,K=(0,C.mf)(g==null?void 0:g.children);return(0,n.jsx)(d.Z,t()(t()({contentAfter:K?void 0:" ",contentInline:!K,_isSelectType:!0,required:ie},x),{},{valuePropName:"targetKeys",children:(0,n.jsx)(w,{isCustomTransfer:K,disabled:ue!=null?ue:P,pagination:_e,outLoading:o,actionRef:he,options:Ee,limitMaxCount:V,request:Y,requestOptions:be,fieldNames:B,transferProps:g})}))},te=ge},61117:function(N,i,e){"use strict";var r=e(84640);i.Z=r.Z},4390:function(N,i,e){"use strict";var r=e(97857),t=e.n(r),m=e(13769),l=e.n(m),f=e(78957),d=e(99859),C=e(33168),h=e(40964),v=e(61117),A=e(89889),E=e(85893),q=["submitter"],D=["render"],c=function(U){var s=U.submitter,ee=l()(U,q),z=typeof s=="boolean"||!s?h.FD:s,L=z.render,y=l()(z,D),p=s===void 0||s?t()({render:function(R){var W=Array.isArray(R)&&R.length>1?(0,E.jsx)(f.Z,{children:R}):R;return(0,E.jsx)(d.Z.Item,{colon:!1,className:"lightd-form-submitter",style:{marginBottom:0,paddingLeft:typeof(s==null?void 0:s.buttonAlign)=="number"?"".concat(s==null?void 0:s.buttonAlign,"px"):typeof(s==null?void 0:s.buttonAlign)=="string"&&!isNaN(parseFloat(s==null?void 0:s.buttonAlign))?"".concat(s==null?void 0:s.buttonAlign):0},wrapperCol:z==null?void 0:z.wrapperCol,children:(0,E.jsx)("div",{style:{display:"flex",justifyContent:typeof(s==null?void 0:s.buttonAlign)=="string"?C.iT[s==null?void 0:s.buttonAlign]:"initial"},children:L?(0,E.jsx)(E.Fragment,{children:L(W,z)}):W})})}},y):!1;return(0,E.jsx)(A.Z,t()({submitter:p,contentRender:function(R,W){return(0,E.jsxs)(E.Fragment,{children:[R,W]})}},ee))};c.Item=v.Z,c.List=d.Z.List,c.Provider=d.Z.Provider,c.ErrorList=d.Z.ErrorList,c.useForm=d.Z.useForm,c.useFormInstance=d.Z.useFormInstance,c.useWatch=d.Z.useWatch,i.Z=c},79500:function(N,i,e){"use strict";e.d(i,{N:function(){return r},x:function(){return t}});function r(m){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2e3;return new Promise(function(f){setTimeout(function(){f({data:m,success:!0,code:"200",msg:""})},l)})}var t=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:300;return Math.floor(Math.random()*(f-l+1))+l}},2477:function(N,i,e){"use strict";e.d(i,{Z:function(){return d}});var r=e(67294),t=e(18446),m=e.n(t),l=function(C,h){return C===void 0&&(C=[]),h===void 0&&(h=[]),m()(C,h)},f=function(C){return function(h,v){var A=(0,r.useRef)(),E=(0,r.useRef)(0);(v===void 0||!l(v,A.current))&&(A.current=v,E.current+=1),C(h,[E.current])}},d=f(r.useEffect)},49867:function(N,i,e){"use strict";e.d(i,{N:function(){return r}});const r=t=>({color:t.colorLink,textDecoration:"none",outline:"none",cursor:"pointer",transition:`color ${t.motionDurationSlow}`,"&:focus, &:hover":{color:t.colorLinkHover},"&:active":{color:t.colorLinkActive}})},66309:function(N,i,e){"use strict";e.d(i,{Z:function(){return H}});var r=e(67294),t=e(97937),m=e(94184),l=e.n(m),f=e(98787),d=e(69760),C=e(45353),h=e(53124),v=e(14747),A=e(45503),E=e(67968);const q=n=>{const{paddingXXS:b,lineWidth:j,tagPaddingHorizontal:u,componentCls:_}=n,w=u-j,G=b-j;return{[_]:Object.assign(Object.assign({},(0,v.Wf)(n)),{display:"inline-block",height:"auto",marginInlineEnd:n.marginXS,paddingInline:w,fontSize:n.tagFontSize,lineHeight:n.tagLineHeight,whiteSpace:"nowrap",background:n.defaultBg,border:`${n.lineWidth}px ${n.lineType} ${n.colorBorder}`,borderRadius:n.borderRadiusSM,opacity:1,transition:`all ${n.motionDurationMid}`,textAlign:"start",position:"relative",[`&${_}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:n.defaultColor},[`${_}-close-icon`]:{marginInlineStart:G,color:n.colorTextDescription,fontSize:n.tagIconSize,cursor:"pointer",transition:`all ${n.motionDurationMid}`,"&:hover":{color:n.colorTextHeading}},[`&${_}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${n.iconCls}-close, ${n.iconCls}-close:hover`]:{color:n.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${_}-checkable-checked):hover`]:{color:n.colorPrimary,backgroundColor:n.colorFillSecondary},"&:active, &-checked":{color:n.colorTextLightSolid},"&-checked":{backgroundColor:n.colorPrimary,"&:hover":{backgroundColor:n.colorPrimaryHover}},"&:active":{backgroundColor:n.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${n.iconCls} + span, > span + ${n.iconCls}`]:{marginInlineStart:w}}),[`${_}-borderless`]:{borderColor:"transparent",background:n.tagBorderlessBg}}},D=n=>{const{lineWidth:b,fontSizeIcon:j}=n,u=n.fontSizeSM,_=`${n.lineHeightSM*u}px`;return(0,A.TS)(n,{tagFontSize:u,tagLineHeight:_,tagIconSize:j-2*b,tagPaddingHorizontal:8,tagBorderlessBg:n.colorFillTertiary})},c=n=>({defaultBg:n.colorFillQuaternary,defaultColor:n.colorText});var I=(0,E.Z)("Tag",n=>{const b=D(n);return q(b)},c),U=function(n,b){var j={};for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&b.indexOf(u)<0&&(j[u]=n[u]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var _=0,u=Object.getOwnPropertySymbols(n);_<u.length;_++)b.indexOf(u[_])<0&&Object.prototype.propertyIsEnumerable.call(n,u[_])&&(j[u[_]]=n[u[_]]);return j},ee=n=>{const{prefixCls:b,style:j,className:u,checked:_,onChange:w,onClick:G}=n,ge=U(n,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:te,tag:X}=r.useContext(h.E_),O=V=>{w==null||w(!_),G==null||G(V)},ie=te("tag",b),[ue,de]=I(ie),_e=l()(ie,`${ie}-checkable`,{[`${ie}-checkable-checked`]:_},X==null?void 0:X.className,u,de);return ue(r.createElement("span",Object.assign({},ge,{style:Object.assign(Object.assign({},j),X==null?void 0:X.style),className:_e,onClick:O})))},z=e(98719);const L=n=>(0,z.Z)(n,(b,j)=>{let{textColor:u,lightBorderColor:_,lightColor:w,darkColor:G}=j;return{[`${n.componentCls}-${b}`]:{color:u,background:w,borderColor:_,"&-inverse":{color:n.colorTextLightSolid,background:G,borderColor:G},[`&${n.componentCls}-borderless`]:{borderColor:"transparent"}}}});var y=(0,E.b)(["Tag","preset"],n=>{const b=D(n);return L(b)},c);function p(n){return typeof n!="string"?n:n.charAt(0).toUpperCase()+n.slice(1)}const T=(n,b,j)=>{const u=p(j);return{[`${n.componentCls}-${b}`]:{color:n[`color${j}`],background:n[`color${u}Bg`],borderColor:n[`color${u}Border`],[`&${n.componentCls}-borderless`]:{borderColor:"transparent"}}}};var R=(0,E.b)(["Tag","status"],n=>{const b=D(n);return[T(b,"success","Success"),T(b,"processing","Info"),T(b,"error","Error"),T(b,"warning","Warning")]},c),W=function(n,b){var j={};for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&b.indexOf(u)<0&&(j[u]=n[u]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var _=0,u=Object.getOwnPropertySymbols(n);_<u.length;_++)b.indexOf(u[_])<0&&Object.prototype.propertyIsEnumerable.call(n,u[_])&&(j[u[_]]=n[u[_]]);return j};const se=(n,b)=>{const{prefixCls:j,className:u,rootClassName:_,style:w,children:G,icon:ge,color:te,onClose:X,closeIcon:O,closable:ie,bordered:ue=!0}=n,de=W(n,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:_e,direction:V,tag:B}=r.useContext(h.E_),[he,Y]=r.useState(!0);r.useEffect(()=>{"visible"in de&&Y(de.visible)},[de.visible]);const fe=(0,f.o2)(te),be=(0,f.yT)(te),Ee=fe||be,o=Object.assign(Object.assign({backgroundColor:te&&!Ee?te:void 0},B==null?void 0:B.style),w),a=_e("tag",j),[g,x]=I(a),M=l()(a,B==null?void 0:B.className,{[`${a}-${te}`]:Ee,[`${a}-has-color`]:te&&!Ee,[`${a}-hidden`]:!he,[`${a}-rtl`]:V==="rtl",[`${a}-borderless`]:!ue},u,_,x),P=S=>{S.stopPropagation(),X==null||X(S),!S.defaultPrevented&&Y(!1)},[,K]=(0,d.Z)(ie,O,S=>S===null?r.createElement(t.Z,{className:`${a}-close-icon`,onClick:P}):r.createElement("span",{className:`${a}-close-icon`,onClick:P},S),null,!1),F=typeof de.onClick=="function"||G&&G.type==="a",me=ge||null,Ce=me?r.createElement(r.Fragment,null,me,G&&r.createElement("span",null,G)):G,re=r.createElement("span",Object.assign({},de,{ref:b,className:M,style:o}),Ce,K,fe&&r.createElement(y,{key:"preset",prefixCls:a}),be&&r.createElement(R,{key:"status",prefixCls:a}));return g(F?r.createElement(C.Z,{component:"Tag"},re):re)},ne=r.forwardRef(se);ne.CheckableTag=ee;var H=ne},18446:function(N,i,e){var r=e(90939);function t(m,l){return r(m,l)}N.exports=t},79370:function(N,i,e){"use strict";e.d(i,{G:function(){return l}});var r=e(98924),t=function(d){if((0,r.Z)()&&window.document.documentElement){var C=Array.isArray(d)?d:[d],h=window.document.documentElement;return C.some(function(v){return v in h.style})}return!1},m=function(d,C){if(!t(d))return!1;var h=document.createElement("div"),v=h.style[d];return h.style[d]=C,h.style[d]!==v};function l(f,d){return!Array.isArray(f)&&d!==void 0?m(f,d):t(f)}},63001:function(N,i,e){"use strict";e.d(i,{Z:function(){return h}});var r=e(37834),t="__lodash_hash_undefined__";function m(v){return this.__data__.set(v,t),this}var l=m;function f(v){return this.__data__.has(v)}var d=f;function C(v){var A=-1,E=v==null?0:v.length;for(this.__data__=new r.Z;++A<E;)this.add(v[A])}C.prototype.add=C.prototype.push=l,C.prototype.has=d;var h=C},74073:function(N,i){"use strict";function e(r,t){for(var m=-1,l=r==null?0:r.length,f=Array(l);++m<l;)f[m]=t(r[m],m,r);return f}i.Z=e},51685:function(N,i,e){"use strict";e.d(i,{Z:function(){return L}});var r=e(69203);function t(y,p,T){switch(T.length){case 0:return y.call(p);case 1:return y.call(p,T[0]);case 2:return y.call(p,T[0],T[1]);case 3:return y.call(p,T[0],T[1],T[2])}return y.apply(p,T)}var m=t,l=Math.max;function f(y,p,T){return p=l(p===void 0?y.length-1:p,0),function(){for(var R=arguments,W=-1,se=l(R.length-p,0),ne=Array(se);++W<se;)ne[W]=R[p+W];W=-1;for(var H=Array(p+1);++W<p;)H[W]=R[W];return H[p]=T(ne),m(y,this,H)}}var d=f;function C(y){return function(){return y}}var h=C,v=e(77904),A=v.Z?function(y,p){return(0,v.Z)(y,"toString",{configurable:!0,enumerable:!1,value:h(p),writable:!0})}:r.Z,E=A,q=800,D=16,c=Date.now;function I(y){var p=0,T=0;return function(){var R=c(),W=D-(R-T);if(T=R,W>0){if(++p>=q)return arguments[0]}else p=0;return y.apply(void 0,arguments)}}var U=I,s=U(E),ee=s;function z(y,p){return ee(d(y,p,r.Z),y+"")}var L=z},59548:function(N,i){"use strict";function e(r,t){return r.has(t)}i.Z=e},69203:function(N,i){"use strict";function e(r){return r}i.Z=e},836:function(N,i,e){"use strict";var r=e(50585),t=e(18533);function m(l){return(0,t.Z)(l)&&(0,r.Z)(l)}i.Z=m}}]);
