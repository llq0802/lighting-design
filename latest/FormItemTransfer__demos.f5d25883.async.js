"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[1765],{40612:function(z,s,n){n.r(s);var C=n(4390),e=n(34501),A=n(85893),v=Array.from({length:10}).map(function(h,_){return{key:_.toString(),title:"content--".concat(_)}});s.default=function(){return(0,A.jsx)(C.Z,{labelCol:{flex:"120px"},submitter:{buttonAlign:"center"},onFinish:function(_){console.log("values",_)},children:(0,A.jsx)(e.Z,{options:v,label:"\u7A7F\u68AD\u6846",name:"transfer"})})}},65893:function(z,s,n){n.r(s);var C=n(17061),e=n.n(C),A=n(17156),v=n.n(A),h=n(66309),_=n(69693),B=n(4390),U=n(34501),d=n(79500),D=n(50189),M=n(85893),g=["cat","dog","bird"],i=Array.from({length:20}).map(function(f,r){return{key:r.toString(),title:"content-".concat(r+1),desc:"desc-".concat(r+1),tag:g[r%3]}}),l=[{dataIndex:"title",title:"Name",align:"center"},{dataIndex:"desc",title:"Desc",align:"center"},{dataIndex:"tag",title:"Tag",align:"center",render:function(r){return(0,M.jsx)(h.Z,{children:r})}}],t=[{dataIndex:"title",title:"Name",align:"center"}],x=function(r,o){return o.title.indexOf(r)!==-1||o.tag.indexOf(r)!==-1};s.default=function(){return(0,M.jsx)(B.Z,{labelCol:{flex:"120px"},submitter:{buttonAlign:"center"},onFinish:function(r){console.log("values",r)},children:(0,M.jsx)(U.Z,{request:function(){var f=v()(e()().mark(function r(o,H){return e()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,(0,d.N)();case 2:return c.abrupt("return",{data:i,total:i.length});case 3:case"end":return c.stop()}},r)}));return function(r,o){return f.apply(this,arguments)}}(),label:"\u7A7F\u68AD\u6846",name:"transfer",transferProps:{showSearch:!0,filterOption:x,listStyle:{padding:8},children:function(r){var o=r.direction,H=r.filteredItems,Y=r.onItemSelectAll,c=r.onItemSelect,y=r.selectedKeys,S=r.disabled,N=o==="left"?l:t,Q={getCheckboxProps:function(m){return{disabled:S||m.disabled}},onSelectAll:function(m,W){var F=W.filter(function(T){return!T.disabled}).map(function(T){var w=T.key;return w}),V=m?(0,D.Z)(F,y):(0,D.Z)(y,F);Y(V,m)},onSelect:function(m,W){var F=m.key;c(F,W)},selectedRowKeys:y};return(0,M.jsx)(_.Z,{size:"small",rowSelection:Q,columns:N,dataSource:H,style:{pointerEvents:S?"none":void 0},onRow:function(m){var W=m.key,F=m.disabled;return{onClick:function(){F||S||c(W,!y.includes(W))}}}})}}})})}},82965:function(z,s,n){n.r(s);var C=n(17061),e=n.n(C),A=n(17156),v=n.n(A),h=n(4390),_=n(34501),B=n(79500),U=n(67294),d=n(85893),D=Array.from({length:20}).map(function(g,i){return{key:i.toString(),title:"content--".concat(i)}}),M=D.filter(function(g){return Number(g.key)<=1}).map(function(g){return g.key});s.default=function(){var g=(0,U.useRef)();return(0,d.jsx)(h.Z,{labelCol:{flex:"120px"},submitter:{buttonAlign:"center"},initialValues:{transfer:M},onFinish:function(l){console.log("values",l)},children:(0,d.jsx)(_.Z,{contentAfter:!1,contentInline:!1,transferProps:{listStyle:{flex:"auto"}},required:!0,pagination:!0,label:"\u7A7F\u68AD\u6846",name:"transfer",actionRef:g,request:function(){var i=v()(e()().mark(function l(t,x){return e()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return console.log(" page-pageSize ",t,x),r.next=3,(0,B.N)();case 3:return r.abrupt("return",{data:D,total:D.length});case 4:case"end":return r.stop()}},l)}));return function(l,t){return i.apply(this,arguments)}}()})})}},2122:function(z,s,n){n.r(s);var C=n(17061),e=n.n(C),A=n(17156),v=n.n(A),h=n(4390),_=n(34501),B=n(79500),U=n(67294),d=n(85893),D=Array.from({length:20}).map(function(i,l){return{key:l.toString(),title:"\u674E\u5C9A\u6E05-\u5434\u5F66\u7956-\u9648\u51A0\u5E0C-\u5F6D\u4E8E\u664F-".concat(l)}}),M=D.filter(function(i){return Number(i.value)<=1}).map(function(i){return i.value}),g=function(l,t){return t.title.indexOf(l)>-1};s.default=function(){var i=(0,U.useRef)();return(0,d.jsx)(h.Z,{labelCol:{flex:"120px"},submitter:{buttonAlign:"center"},onFinish:function(t){console.log("values",t)},children:(0,d.jsx)(_.Z,{pagination:{simple:!1},label:"\u7A7F\u68AD\u6846",name:"transfer",required:!0,actionRef:i,request:function(){var l=v()(e()().mark(function t(x,f){return e()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,B.N)();case 2:return o.abrupt("return",{data:D,total:D.length});case 3:case"end":return o.stop()}},t)}));return function(t,x){return l.apply(this,arguments)}}(),transferProps:{titles:["\u6570\u636E\u9879","\u9009\u62E9\u9879"],showSelectAll:!1,filterOption:g,showSearch:!0,listStyle:{width:300,height:470}}})})}},44426:function(z,s,n){n.r(s);var C=n(17061),e=n.n(C),A=n(17156),v=n.n(A),h=n(4390),_=n(34501),B=n(79500),U=n(67294),d=n(85893),D=Array.from({length:10}).map(function(i,l){return{key:l.toString(),title:"\u674E\u5C9A\u6E05-\u5434\u5F66\u7956-\u9648\u51A0\u5E0C-\u5F6D\u4E8E\u664F-".concat(l)}}),M=D.filter(function(i){return Number(i.value)<=1}).map(function(i){return i.value}),g=function(l,t){return t.title.indexOf(l)>-1};s.default=function(){var i=(0,U.useRef)();return(0,d.jsx)(h.Z,{labelCol:{flex:"120px"},submitter:{buttonAlign:"center"},onFinish:function(t){console.log("values",t)},children:(0,d.jsx)(_.Z,{limitMaxCount:3,label:"\u7A7F\u68AD\u6846",name:"transfer",required:!0,actionRef:i,request:function(){var l=v()(e()().mark(function t(x,f){return e()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,B.N)();case 2:return o.abrupt("return",{data:D,total:D.length});case 3:case"end":return o.stop()}},t)}));return function(t,x){return l.apply(this,arguments)}}(),transferProps:{listStyle:{width:300}}})})}},30613:function(z,s,n){n.r(s);var C=n(861),e=n.n(C),A=n(17061),v=n.n(A),h=n(17156),_=n.n(h),B=n(27424),U=n.n(B),d=n(42122),D=n.n(d),M=n(70215),g=n.n(M),i=n(94706),l=n(4390),t=n(34501),x=n(79500),f=n(85893),r=["children"],o=[{key:"0-0",title:"0-0"},{key:"0-1",title:"0-1",children:[{key:"0-1-0",title:"0-1-0"},{key:"0-1-1",title:"0-1-1"}]},{key:"0-2",title:"0-2"},{key:"0-3",title:"0-3"},{key:"0-4",title:"0-4"}],H=function(y,S){return y.includes(S)},Y=function c(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return y.map(function(N){var Q=N.children,p=g()(N,r);return D()(D()({},p),{},{disabled:S.includes(p.key),children:c(Q,S)})})};s.default=function(){var c=l.Z.useForm(),y=U()(c,1),S=y[0],N=[];function Q(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];p.forEach(function(m){N.push(m),Q(m.children)})}return Q(o),(0,f.jsx)(l.Z,{form:S,labelCol:{flex:"120px"},submitter:{buttonAlign:"center"},onFinish:function(m){console.log("values",m)},children:(0,f.jsx)(t.Z,{request:function(){var p=_()(v()().mark(function m(W,F){return v()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,(0,x.N)();case 2:return T.abrupt("return",{data:N,total:N.length});case 3:case"end":return T.stop()}},m)}));return function(m,W){return p.apply(this,arguments)}}(),label:"\u7A7F\u68AD\u6846",name:"transfer",transferProps:{showSelectAll:!1,children:function(m){var W=m.direction,F=m.onItemSelect,V=m.selectedKeys;if(W==="left"){var T,w=(T=S.getFieldValue("transfer"))!==null&&T!==void 0?T:[],rn=[].concat(e()(V),e()(w));return(0,f.jsx)("div",{style:{padding:8},children:(0,f.jsx)(i.Z,{blockNode:!0,checkable:!0,checkStrictly:!0,defaultExpandAll:!0,checkedKeys:rn,treeData:Y(o,w),onCheck:function(vn,an){var a=an.node.key;F(a,!H(rn,a))},onSelect:function(vn,an){var a=an.node.key;F(a,!H(rn,a))}})})}}}})})}},34501:function(z,s,n){n.d(s,{Z:function(){return vn}});var C=n(42122),e=n.n(C),A=n(70215),v=n.n(A),h=n(40964),_=n(89889),B=n(84640),U=n(33168),d=n(67294),D=n(861),M=n.n(D),g=n(17061),i=n.n(g),l=n(17156),t=n.n(l),x=n(27424),f=n.n(x),r=n(27347),o=n(3930),H=n(15479),Y=n(22638),c=n(93812),y=n(41093),S=n(57953),N=n(40784),Q=n(82925),p=n(94184),m=n.n(p),W=n(85893),F=["fieldNames","limitMaxCount","transferProps","options","request","requestOptions","actionRef","outLoading","disabled","pagination","isCustomTransfer"],V="lightd-transfer",T=function(a){var ln,q=a.fieldNames,on=q===void 0?{label:"title",value:"key"}:q,un=a.limitMaxCount,Z=un===void 0?0:un,b=a.transferProps,_n=a.options,K=_n===void 0?h.ow:_n,sn=a.request,fn=a.requestOptions,cn=a.actionRef,nn=a.outLoading,en=a.disabled,mn=a.pagination,dn=a.isCustomTransfer,X=v()(a,F),I=(ln=X.targetKeys)!==null&&ln!==void 0?ln:[],Pn=on.label,J=on.value,On=(0,r.Z)(function(){return K}),hn=f()(On,2),Cn=hn[0],tn=hn[1],$=(0,o.Z)(Cn),Dn=(0,H.Z)(t()(i()().mark(function P(){var u,E,O,L,j,R=arguments;return i()().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:if(!(K!=null&&K.length)){G.next=2;break}return G.abrupt("return",{total:K.length,list:K});case 2:for(E=R.length,O=new Array(E),L=0;L<E;L++)O[L]=R[L];return G.next=5,sn==null?void 0:sn.apply(void 0,O);case 5:return j=G.sent,G.abrupt("return",{total:(j==null?void 0:j.total)||(j==null||(u=j.data)===null||u===void 0?void 0:u.length),list:j==null?void 0:j.data});case 7:case"end":return G.stop()}},P)})),e()(e()({},fn),{},{onSuccess:function(u){var E;tn(M()((E=u==null?void 0:u.list)!==null&&E!==void 0?E:[]))}})),An=Dn.loading,yn=Dn.pagination;(0,d.useImperativeHandle)(cn,function(){return{pagination:yn,data:$.current,setData:tn}});var En=(0,Y.Z)(function(P,u,E){E>0&&P.length>=E?P.forEach(function(O){O.disabled=!1}):P.forEach(function(O){O.disabled=!0}),tn([].concat(M()(P),M()(u)))});(0,c.Z)(function(){if(I!=null&&I.length&&Z){var P=$.current.filter(function(O){return!I.includes(O[J])}),u=$.current.filter(function(O){return I.includes(O[J])}).map(function(O){return e()(e()({},O),{},{disabled:!1})}),E=Z-I.length;En(P,u,E)}else Z&&En($.current,[],Z)},[I]),(0,c.Z)(function(){tn(K!=null?K:[])},[K]);var bn=(0,Y.Z)(function(P,u,E){var O,L;if(Z)if(u==="left"){var j=$.current.map(function(k){return e()(e()({},k),{},{disabled:!1})});tn(M()(j))}else{var R=$.current.filter(function(k){return!P.includes(k[J])}),Mn=$.current.filter(function(k){return P.includes(k[J])}).map(function(k){return e()(e()({},k),{},{disabled:!1})}),G=Z-P.length;En(R,Mn,G)}b==null||(O=b.onChange)===null||O===void 0||O.call(b,P,u,E),X==null||(L=X.onChange)===null||L===void 0||L.call(X,P,u,E)}),Wn=(0,Y.Z)(function(P,u){var E;if(b==null||(E=b.onSelectChange)===null||E===void 0||E.call(b,P,u),!(!Z||u!=null&&u.length)){var O=Z-I.length-P.length,L=$.current.filter(function(R){return!M()(I).includes(R[J])}),j=$.current.filter(function(R){return M()(I).includes(R[J])}).map(function(R){return e()(e()({},R),{},{disabled:!1})});O>0&&L.length>=O?L.forEach(function(R){R.disabled=!1}):L.forEach(function(R){P.includes(R[J])?R.disabled=!1:R.disabled=!0}),tn([].concat(M()(L),M()(j)))}});return(0,W.jsx)(y.ZP,{locale:Q.Z,children:(0,W.jsx)(S.Z,e()(e()({spinning:!(K!=null&&K.length)&&An},nn!=null?nn:{}),{},{children:(0,W.jsx)(N.Z,e()(e()(e()({pagination:mn,disabled:en,showSelectAll:!Z,titles:["\u6570\u636E\u6E90","\u5DF2\u9009\u62E9"],rowKey:function(u){return u[J]},dataSource:$.current,render:function(u){var E;return(E=u[Pn])!==null&&E!==void 0?E:u[J]}},b),X),{},{listStyle:e()({height:dn?"auto":410,width:dn?"auto":200},b==null?void 0:b.listStyle),className:m()(V,b==null?void 0:b.className),onChange:bn,onSelectChange:Wn}))}))})},w=T,rn=["required","disabled","pagination","limitMaxCount","fieldNames","actionRef","request","requestOptions","options","spin","transferProps"],gn=function(a){var ln=a.required,q=a.disabled,on=a.pagination,un=a.limitMaxCount,Z=a.fieldNames,b=a.actionRef,_n=a.request,K=a.requestOptions,sn=K===void 0?h.FD:K,fn=a.options,cn=a.spin,nn=a.transferProps,en=nn===void 0?h.FD:nn,mn=v()(a,rn),dn=(0,d.useContext)(_.e),X=dn.disabled,I=(0,U.mf)(en==null?void 0:en.children);return(0,W.jsx)(B.Z,e()(e()({contentAfter:I?void 0:" ",contentInline:!I,_isSelectType:!0,required:ln},mn),{},{valuePropName:"targetKeys",children:(0,W.jsx)(w,{isCustomTransfer:I,disabled:q!=null?q:X,pagination:on,outLoading:cn,actionRef:b,options:fn,limitMaxCount:un,request:_n,requestOptions:sn,fieldNames:Z,transferProps:en})}))},vn=gn},61117:function(z,s,n){var C=n(84640);s.Z=C.Z},4390:function(z,s,n){var C=n(42122),e=n.n(C),A=n(70215),v=n.n(A),h=n(93421),_=n(99859),B=n(61117),U=n(89889),d=n(85893),D=["submitter"],M=["render"],g=function(l){var t=l.submitter,x=v()(l,D),f=typeof t=="boolean"||!t?{}:t,r=f.render,o=v()(f,M),H=typeof t=="undefined"||t?e()({render:function(c){var y=Array.isArray(c)&&c.length>1?(0,d.jsx)(h.Z,{children:c}):c;return(0,d.jsx)(_.Z.Item,{colon:!1,className:"lightd-form-submitter",style:{marginBottom:0,paddingLeft:typeof(t==null?void 0:t.buttonAlign)=="number"?"".concat(t==null?void 0:t.buttonAlign,"px"):0},wrapperCol:f==null?void 0:f.wrapperCol,children:(0,d.jsx)("div",{style:{display:"flex",justifyContent:typeof(t==null?void 0:t.buttonAlign)=="string"?t==null?void 0:t.buttonAlign:"initial"},children:r?(0,d.jsx)(d.Fragment,{children:r(y,f)}):y})})}},o):!1;return(0,d.jsx)(U.Z,e()({submitter:H,contentRender:function(c,y){return(0,d.jsxs)(d.Fragment,{children:[c,y]})}},x))};g.Item=B.Z,g.List=_.Z.List,g.Provider=_.Z.Provider,g.ErrorList=_.Z.ErrorList,g.useForm=_.Z.useForm,g.useFormInstance=_.Z.useFormInstance,g.useWatch=_.Z.useWatch,s.Z=g},79500:function(z,s,n){n.d(s,{N:function(){return C},x:function(){return e}});function C(A){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2e3;return new Promise(function(h){setTimeout(function(){h({data:A,success:!0,code:"200",msg:""})},v)})}var e=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:300;return Math.floor(Math.random()*(h-v+1))+v}}}]);
