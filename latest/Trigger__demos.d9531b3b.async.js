"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[8449],{63860:function(z,C,e){e.r(C),e.d(C,{default:function(){return B}});var P=e(17329),m=e(54579),T=e(98765),O=e(97857),M=e.n(O),W=e(94117),D=e(69649),l=e.n(D),r=e(67294),d=e(85893),i=[{title:"Name",dataIndex:"name",render:function(p){return(0,d.jsx)("a",{children:p})}},{title:"Age",dataIndex:"age"},{title:"Address",dataIndex:"address"}],u=[{key:"1",name:"\u674E\u5C9A\u6E05",age:l().Random.integer(25,45),address:l().Random.city(!0)},{key:"2",name:"\u5434\u5F66\u7956",age:l().Random.integer(25,45),address:l().Random.city(!0)},{key:"3",name:"\u9648\u51A0\u5E0C",age:l().Random.integer(25,45),address:l().Random.city(!0)},{key:"4",name:"\u5218\u5FB7\u534E",age:l().Random.integer(25,45),address:l().Random.city(!0)},{key:"5",name:"\u5F6D\u4E8E\u664F",age:l().Random.integer(25,45),address:l().Random.city(!0)}],b=function(p){var h=p.value,f=p.onChange,j=p.open,o=p.setOpen,_={onChange:function(n,s){var a=s.map(function(y){return y.name}).join(" , "),g=n!=null&&n.length?n:void 0;f({label:a,value:g})}};return(0,d.jsx)(W.Z,{size:"small",rowSelection:M()({selectedRowKeys:h!=null?h:[],type:"checkbox",preserveSelectedRowKeys:!0},_),columns:i,dataSource:u})},x=b,c=function(){return(0,d.jsxs)("div",{children:[(0,d.jsx)("h4",{children:"\u8868\u683C\u5355\u9009"}),(0,d.jsx)(P.Z,{children:(0,d.jsx)(m.Z,{})}),(0,d.jsx)("br",{}),(0,d.jsx)("h4",{children:"\u8868\u683C\u591A\u90091"}),(0,d.jsx)(P.Z,{width:"50%",children:(0,d.jsx)(T.Z,{})}),(0,d.jsx)("h4",{children:"\u8868\u683C\u591A\u90092"}),(0,d.jsx)(P.Z,{width:"50%",overlayArrow:!0,children:(0,d.jsx)(x,{})})]})},B=c},39092:function(z,C,e){e.r(C);var P=e(15009),m=e.n(P),T=e(99289),O=e.n(T),M=e(97857),W=e.n(M),D=e(13769),l=e.n(D),r=e(4390),d=e(21478),i=e(61117),u=e(17329),b=e(54579),x=e(98765),c=e(85893),B=["trigger1","trigger2"],t=function(){return(0,c.jsxs)(r.Z,{labelWidth:90,submitter:{buttonAlign:90},transformValues:function(f){var j=f.trigger1,o=f.trigger2,_=l()(f,B);return W()(W()({},_),{},{trigger1Id:j==null?void 0:j.value,trigger2Id:o==null?void 0:o.value})},onFinish:function(){var h=O()(m()().mark(function f(j){return m()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:console.log("values",j);case 1:case"end":return _.stop()}},f)}));return function(f){return h.apply(this,arguments)}}(),children:[(0,c.jsx)(d.Z,{name:"input",label:"\u8F93\u5165\u6846"}),(0,c.jsx)(i.Z,{required:!0,name:"trigger1",label:"\u5355\u9009\u8868\u683C",children:(0,c.jsx)(u.Z,{children:(0,c.jsx)(b.Z,{})})}),(0,c.jsx)(i.Z,{name:"trigger2",label:"\u591A\u9009\u8868\u683C",children:(0,c.jsx)(u.Z,{style:{width:"100%"},children:(0,c.jsx)(x.Z,{})})})]})};C.default=t},74534:function(z,C,e){e.r(C),e.d(C,{default:function(){return f}});var P=e(66309),m=e(17329),T=e(97857),O=e.n(T),M=e(94117),W=e(69649),D=e.n(W),l=e(67294),r=e(85893),d=[{title:"Name",dataIndex:"name",render:function(o){return(0,r.jsx)("a",{children:o})}},{title:"Age",dataIndex:"age"},{title:"Address",dataIndex:"address"}],i=D().mock({"list|25":[{key:"@id",name:"@cname",address:"@county(true)","age|10-30":10}]}).list,u=function(o){var _=o.value,E=o.onChange,n=o.open,s=o.setOpen,a={onChange:function(y,v){E({label:v.map(function(I){return I.name}),value:y})}};return(0,r.jsx)(M.Z,{pagination:{defaultPageSize:5},style:{width:450},size:"small",rowSelection:O()({selectedRowKeys:_!=null?_:[],type:"checkbox",preserveSelectedRowKeys:!0},a),columns:d,dataSource:i})},b=u,x=[{title:"Name",dataIndex:"name",render:function(o){return(0,r.jsx)("a",{children:o})}},{title:"Age",dataIndex:"age"},{title:"Address",dataIndex:"address"}],c=D().mock({"list|25":[{key:"@id",name:"@cname",address:"@county(true)","age|10-30":10}]}).list,B=function(o){var _=o.value,E=o.onChange,n=o.open,s=o.setOpen,a={onChange:function(y,v){E({label:v.map(function(I){return I.name}),value:y}),s(!1)}};return(0,r.jsx)(M.Z,{pagination:{defaultPageSize:5},style:{width:500},size:"small",rowSelection:O()({selectedRowKeys:_,type:"radio",preserveSelectedRowKeys:!0},a),columns:x,dataSource:c})},t=B,p=function(o){var _=o.label,E=o.value;console.log("props",o);var n=function(a){a.preventDefault(),a.stopPropagation()};return(0,r.jsx)(P.Z,{color:"#3e9bed",onMouseDown:n,style:{marginRight:4},children:_})},h=function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{children:"Tags\u5355\u9009\u5185\u5BB9"}),(0,r.jsx)(m.Z,{mode:"tag",placement:"right",children:(0,r.jsx)(t,{})}),(0,r.jsx)("h4",{children:"Tags\u591A\u9009\u5185\u5BB9"}),(0,r.jsx)(m.Z,{mode:"tag",width:400,children:(0,r.jsx)(b,{})}),(0,r.jsx)("h4",{children:"Tags\u81EA\u5B9A\u4E49"}),(0,r.jsx)(m.Z,{mode:"tag",tagRender:p,width:400,children:(0,r.jsx)(b,{})})]})},f=h},85927:function(z,C,e){e.r(C),e.d(C,{default:function(){return _}});var P=e(17329),m=e(97857),T=e.n(m),O=e(15009),M=e.n(O),W=e(99289),D=e.n(W),l=e(21478),r=e(96267),d=e(67294),i=e(85893),u=[{key:"1",name:"John Brown",age:10},{key:"2",name:"Jim Green",age:42},{key:"3",name:"Joe Black1",age:32},{key:"4",name:"Joe Black2",age:32},{key:"5",name:"Joe Black3",age:32}],b=[{title:"\u59D3\u540D",dataIndex:"name",key:"name",align:"center",className:"my-name-columns"},{title:"\u5E74\u9F84",dataIndex:"age",key:"age",align:"center"}],x=[(0,i.jsx)(l.Z,{name:"input4",label:"\u8F93\u5165\u6846"},"0")],c=function(n){var s=n.value,a=n.onChange,g=n.open,y=n.setOpen,v=(0,d.useRef)(),I=(0,d.useRef)(),N={onChange:function(R,S){a({label:S.map(function(A){return A.name}),value:R}),y(!1)}};return(0,i.jsx)(r.ZP,{tableCardProps:{style:{borderRadius:0},bodyStyle:{paddingTop:0}},formCardProps:{style:{marginBottom:0,borderRadius:0}},showToolbar:!1,size:"small",columns:b,tableRef:I,formRef:v,queryFormProps:{size:"small",isSpace:!0},formItems:x,request:function(){var L=D()(M()().mark(function R(S,A){return M()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.abrupt("return",{success:!0,data:u,total:u.length});case 1:case"end":return K.stop()}},R)}));return function(R,S){return L.apply(this,arguments)}}(),rowSelection:T()({selectedRowKeys:s,type:"radio"},N)})},B=c,t=[{key:"1",name:"John Brown",age:10},{key:"2",name:"Jim Green",age:42},{key:"3",name:"Joe Black1",age:32},{key:"4",name:"Joe Black2",age:32},{key:"5",name:"Joe Black3",age:32}],p=[{title:"\u59D3\u540D",dataIndex:"name",key:"name",align:"center"},{title:"\u5E74\u9F84",dataIndex:"age",key:"age",align:"center"}],h=[(0,i.jsx)(l.Z,{name:"username",label:"\u8F93\u5165\u6846"},"0")],f=function(n){var s=n.value,a=n.onChange,g=n.open,y=n.setOpen,v=(0,d.useRef)(),I=(0,d.useRef)(),N={onChange:function(R,S){a({label:S.map(function(A){return A.name}),value:R})}};return(0,i.jsx)(r.ZP,{showToolbar:!1,size:"small",columns:p,tableRef:I,formRef:v,queryFormProps:{size:"small",isSpace:!0},tableCardProps:{style:{borderRadius:0},bodyStyle:{paddingTop:0}},formCardProps:{style:{marginBottom:0,borderRadius:0}},formItems:h,request:function(){var L=D()(M()().mark(function R(S,A){return M()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.abrupt("return",{success:!0,data:t,total:t.length});case 1:case"end":return K.stop()}},R)}));return function(R,S){return L.apply(this,arguments)}}(),rowSelection:T()({selectedRowKeys:s!=null?s:[],type:"checkbox"},N)})},j=f,o=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h4",{children:" LTable \u591A\u9009"}),(0,i.jsx)(P.Z,{mode:"tag",width:"50%",children:(0,i.jsx)(j,{})})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h4",{children:" LTable \u5355\u9009"}),(0,i.jsx)(P.Z,{mode:"tag",children:(0,i.jsx)(B,{})})]})]})},_=o},21478:function(z,C,e){e.d(C,{Z:function(){return _}});var P=e(97857),m=e.n(P),T=e(13769),O=e.n(T),M=e(89889),W=e(84640),D=e(33168),l=e(40964),r=e(67294),d=e(5574),i=e.n(d),u=e(42170),b=e(22638),x=e(69677),c=e(85893),B=["value","onChange","type","disabledWhiteSpace"],t=function(n,s){var a=n;if((s==="phone"||s==="bankCard")&&window.isNaN(a)){var g;return console.warn("lighting-design: phone \u6216 bankCard \u7C7B\u578B\u7684 Input \u53EA\u80FD\u8F93\u5165\u6570\u5B57"),((g=a.match(l.zj))===null||g===void 0?void 0:g.join(""))||""}if(s==="idCard"){var y;if(window.isNaN(a==null?void 0:a.slice(0,17))){var v;return console.warn("lighting-design: idCard \u7C7B\u578B\u7684 Input \u53EA\u80FD\u8F93\u516518\u4F4D\u6570\u5B57 (\u6700\u540E\u4E00\u4F4D\u53EF\u4E3A\u6570\u5B57\u6216\u5B57\u7B26\u5927\u5C0F\u5199 X )"),((v=a.match(l.zj))===null||v===void 0?void 0:v.join(""))||""}if(a.length===18&&window.isNaN(a==null?void 0:a.at(-1))&&(a==null||(y=a.at(-1))===null||y===void 0?void 0:y.toLocaleLowerCase())!=="x")return console.warn("lighting-design: idCard \u7C7B\u578B\u7684 Input \u53EA\u80FD\u8F93\u516518\u4F4D\u6570\u5B57 (\u6700\u540E\u4E00\u4F4D\u53EF\u4E3A\u6570\u5B57\u6216\u5B57\u7B26\u5927\u5C0F\u5199 X )"),(a==null?void 0:a.slice(0,-1))||""}return a},p=function(n){var s=n.value,a=n.onChange,g=n.type,y=n.disabledWhiteSpace,v=O()(n,B),I=(0,r.useRef)(!1),N=(0,r.useState)(function(){return s}),L=i()(N,2),R=L[0],S=L[1];(0,u.Z)(function(){S(s)},[s]);var A=(0,r.useMemo)(function(){return g==="phone"||g==="idCard"||g==="bankCard"?"text":g},[g]),F=(0,r.useMemo)(function(){return g==="phone"?11:g==="idCard"?18:void 0},[g]),K=(0,b.Z)(function(V){var U=V.target.value;y&&(U=U.replace(l.wr,""));var Z=t(U,g);S(Z),!I.current&&(a==null||a(Z))});return(0,c.jsx)(x.Z,m()(m()({allowClear:!0,autoComplete:"off",type:A,maxLength:F},v),{},{onCompositionStart:function(U){var Z;I.current=!0,v==null||(Z=v.onCompositionStart)===null||Z===void 0||Z.call(v,U)},onCompositionEnd:function(U){var Z;if(I.current=!1,D.i7){var $,H=t(($=U.target)===null||$===void 0?void 0:$.value,g);a==null||a(H)}v==null||(Z=v.onCompositionEnd)===null||Z===void 0||Z.call(v,U)},value:R,onChange:K}))},h=p;function f(E,n,s){var a=void 0;return E==="phone"&&(a=[{required:n,message:s||"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7\u683C\u5F0F!",pattern:l.Dd}]),E==="idCard"&&(a=[{required:n,message:s||"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u8EAB\u4EFD\u8BC1\u683C\u5F0F!",pattern:l.LE}]),E==="url"&&(a=[{required:n,message:s||"\u8BF7\u8F93\u5165\u6B63\u786E\u7684URL\u7F51\u5740\u683C\u5F0F!",pattern:l.Kp}]),E==="bankCard"&&(a=[{required:n,message:s||"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u94F6\u884C\u5361\u683C\u5F0F!",pattern:l.Wj}]),E==="email"&&(a=[{required:n,message:s||"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u683C\u5F0F!",pattern:l.sM}]),E==="chinese"&&(a=[{required:n,message:s||"\u8BF7\u8F93\u5165\u4E2D\u6587\u6C49\u5B57!",pattern:l.Zd}]),a}var j=["size","disabled","type","disabledWhiteSpace","required","placeholder","inputProps"],o=function(n){var s,a=n.size,g=n.disabled,y=n.type,v=n.disabledWhiteSpace,I=v===void 0?!1:v,N=n.required,L=n.placeholder,R=n.inputProps,S=R===void 0?l.FD:R,A=O()(n,j),F=(0,D.JY)({placeholder:L,restProps:A}),K=(0,r.useContext)(M.e),V=K.disabled,U=f(y,!!N,(A==null||(s=A.messageVariables)===null||s===void 0?void 0:s.label)||F);return(0,c.jsx)(W.Z,m()(m()({placeholder:F,required:N,rules:U,validateTrigger:"onBlur"},A),{},{children:(0,c.jsx)(h,m()({size:a,disabled:g!=null?g:V,placeholder:F,type:y,disabledWhiteSpace:I},S))}))},_=o},96267:function(z,C,e){var P=e(86336);C.ZP=P.Z},54579:function(z,C,e){var P=e(97857),m=e.n(P),T=e(94117),O=e(69649),M=e.n(O),W=e(67294),D=e(85893),l=[{title:"Name",dataIndex:"name",render:function(u){return(0,D.jsx)("a",{children:u})}},{title:"Age",dataIndex:"age"},{title:"Address",dataIndex:"address"}],r=M().mock({"list|25":[{"key|+1":1,name:"@cname",address:"@county(true)","age|10-30":10}]}).list,d=function(u){var b=u.value,x=u.onChange,c=u.open,B=u.setOpen,t={onChange:function(h,f){console.log("selectedRowKeys:",h,"selectedRows: ",f),x({label:f[0].name,value:h[0]}),B(!1)}};return(0,D.jsx)(T.Z,{pagination:{defaultPageSize:5},size:"small",rowSelection:m()({selectedRowKeys:b?[b]:[],type:"radio",preserveSelectedRowKeys:!0},t),columns:l,dataSource:r})};C.Z=d},98765:function(z,C,e){var P=e(97857),m=e.n(P),T=e(94117),O=e(69649),M=e.n(O),W=e(67294),D=e(85893),l=[{title:"Name",dataIndex:"name",render:function(u){return(0,D.jsx)("a",{children:u})}},{title:"Age",dataIndex:"age"},{title:"Address",dataIndex:"address"}],r=M().mock({"list|25":[{key:"@id",name:"@cname",address:"@county(true)","age|10-30":10}]}).list,d=function(u){var b=u.value,x=u.onChange,c=u.open,B=u.setOpen,t={onChange:function(h,f){var j=f.map(function(_){return _.name}).join(" / "),o=h!=null&&h.length?h:void 0;x({label:j,value:o})}};return(0,D.jsx)(T.Z,{pagination:{defaultPageSize:5},size:"small",rowSelection:m()({selectedRowKeys:b!=null?b:[],type:"checkbox",preserveSelectedRowKeys:!0},t),columns:l,dataSource:r})};C.Z=d},17329:function(z,C,e){var P=e(97857),m=e.n(P),T=e(5574),O=e.n(T),M=e(80882),W=e(90768),D=e(74627),l=e(34041),r=e(94184),d=e.n(r),i=e(40964),u=e(67294),b=e(85893),x="lightd-trigger",c=function(t){var p=t.mode,h=p===void 0?"default":p,f=t.width,j=f===void 0?250:f,o=t.bordered,_=o===void 0?!0:o,E=t.allowClear,n=E===void 0?!0:E,s=t.suffixIcon,a=t.className,g=t.size,y=t.fieldNames,v=y===void 0?{label:"label",value:"value"}:y,I=t.placement,N=I===void 0?"bottomLeft":I,L=t.disabled,R=L===void 0?!1:L,S=t.placeholder,A=S===void 0?"\u8BF7\u9009\u62E9":S,F=t.style,K=t.tagRender,V=t.overlayArrow,U=V===void 0?!1:V,Z=t.overlayClassName,$=t.overlayStyle,H=t.getPopupContainer,le=t.destroyOnHide,re=t.children,w=t.selectProps,oe=w===void 0?i.FD:w,k=t.popoverProps,se=k===void 0?i.FD:k,q=(0,u.useRef)(),de=(0,W.Z)(t,{defaultValue:!1,defaultValuePropName:"defaultOpen",valuePropName:"open",trigger:"onOpenChange"}),ee=O()(de,2),X=ee[0],ae=ee[1],ie=(0,W.Z)(t,{defaultValuePropName:"defaultValue",valuePropName:"value",trigger:"onChange"}),ne=O()(ie,2),Y=ne[0],te=ne[1],ue=(0,u.cloneElement)(re,{value:Y==null?void 0:Y[v.value],onChange:te,open:X,setOpen:ae}),ve=s||(0,b.jsx)(M.Z,{style:{transition:"0.3s",transform:"rotate(".concat(X?-180:0,"deg)")}});return(0,b.jsx)(D.Z,m()(m()({},se),{},{arrow:U,content:ue,open:X,trigger:"click",rootClassName:"".concat(x,"-overlay"),placement:N,onOpenChange:function(J){var G,Q;(G=q.current)===null||G===void 0||(Q=G.blur)===null||Q===void 0||Q.call(G),ae(J)},getPopupContainer:H,destroyTooltipOnHide:le,overlayClassName:Z,overlayStyle:$,children:(0,b.jsx)(l.default,m()(m()({},oe),{},{ref:q,className:d()(x,a),style:m()({width:j},F),removeIcon:!1,showSearch:!1,virtual:!1,size:g,bordered:_,allowClear:n,suffixIcon:ve,placeholder:A,disabled:R,fieldNames:v,tagRender:K,mode:h==="default"?void 0:"multiple",onChange:te,value:Y==null?void 0:Y[v.label],notFoundContent:null,options:void 0,onInputKeyDown:function(J){J.stopPropagation(),J.preventDefault()}}))}))};C.Z=c}}]);
