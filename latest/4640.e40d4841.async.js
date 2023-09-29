"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[4640],{84640:function(Ae,oe,t){t.d(oe,{Z:function(){return m}});var le=t(97857),d=t.n(le),ie=t(9783),ue=t.n(ie),ae=t(13769),c=t.n(ae),M=t(99859),G=t(94184),w=t.n(G),j=t(67294),se=t(89889),k=t(33168),f=t(85893),de=["className","alignItems","after","before","contentInline","children"],q="lightd-form-item-wrapper",ye=function(e){var l,o=e.className,b=e.alignItems,u=b===void 0?"center":b,i=e.after,h=i===void 0?null:i,g=e.before,P=g===void 0?null:g,r=e.contentInline,v=r===void 0?!1:r,a=e.children,D=c()(e,de),C=d()({},(l=a==null?void 0:a.props)!==null&&l!==void 0?l:{}),p=(0,k.VR)(C,D,!0),A=(0,j.isValidElement)(a)?(0,j.cloneElement)(a,p):a;if(!h&&!P)return A===void 0?null:A;var F=P&&(0,f.jsx)("div",{className:"".concat(q,"-before"),children:P}),E=h&&(0,f.jsx)("div",{className:"".concat(q,"-after"),children:h}),O=(0,f.jsx)("div",{className:"".concat(q,"-content"),style:v?{flex:"initial"}:{},children:A}),B=u?{alignItems:u==="center"?u:"flex-".concat(u)}:{};return(0,f.jsxs)("div",{className:w()(q,o),style:B,children:[F,O,E]})},S=ye,ve=["placeholder","renderField","renderFormItem","labelWidth","contentClassName","contentBefore","contentAfter","contentProps","contentInline","contentAlignItems","wrapperAlignItems","name","required","shouldUpdate","dependencies","rules","className","labelCol","children","_isSelectType","ownColSpans"],ce="ligthd-from-item",he=function(e){var l=e.placeholder,o=e.renderField,b=e.renderFormItem,u=e.labelWidth,i=u===void 0?"auto":u,h=e.contentClassName,g=e.contentBefore,P=e.contentAfter,r=e.contentProps,v=e.contentInline,a=v===void 0?!1:v,D=e.contentAlignItems,C=D===void 0?"center":D,p=e.wrapperAlignItems,A=p===void 0?"start":p,F=e.name,E=e.required,O=e.shouldUpdate,B=e.dependencies,$=e.rules,ee=e.className,W=e.labelCol,T=e.children,me=e._isSelectType,be=e.ownColSpans,s=c()(e,ve),Z=F;typeof F=="number"&&(Z==null||Z.toString());var H=(0,j.useContext)(se.e),L=H.layout,ne=H.labelColProps,U=(0,k.JY)({restProps:s,isSelectType:me,placeholder:l}),z=(0,j.useMemo)(function(){return w()(ce,ue()({},"".concat(ce,"-wrapper-label-").concat(A),!!(s!=null&&s.label)),ee)},[ee,A,s==null?void 0:s.label]),te=(0,j.useMemo)(function(){return $&&($==null?void 0:$.length)>0?$:[{validator:function(R,Y){var I=typeof Y=="string"?Y.trim():Y,re="";if(!I&&I!==0||!(0,k.$e)(I)){var Fe;re=E?"".concat((s==null||(Fe=s.messageVariables)===null||Fe===void 0?void 0:Fe.label)||U,"!"):""}return re?Promise.reject(re):Promise.resolve()}}]},[U,E,$]),V=(0,j.useMemo)(function(){var y=L!=="vertical"&&i&&i!=="auto"?{flex:"0 0 ".concat(i,"px")}:{};return d()(d()(d()({},ne),y),W)},[L,i,ne,W]);if(O){var ge=(0,f.jsx)(M.Z.Item,d()(d()({labelCol:V,name:Z,required:E,shouldUpdate:O,rules:te,className:z},s),{},{children:function(R){var Y=typeof T=="function"?T(R):T;return(0,f.jsx)(S,d()(d()({className:h,before:g,after:P,alignItems:C,contentInline:a},r),{},{children:o?o(Y,e):Y}))}}));return b?b(ge):ge}if(B&&(B==null?void 0:B.length)>0){var X=(0,f.jsx)(M.Z.Item,{noStyle:!0,dependencies:B,children:function(R){var Y=R.getFieldsValue(B),I=typeof T=="function"?T(R):T,re=(0,j.isValidElement)(I)?(0,j.cloneElement)(I,d()({},Y)):I;return(0,f.jsx)(M.Z.Item,d()(d()({name:Z,labelCol:V,required:E,rules:te,className:z},s),{},{children:(0,f.jsx)(S,d()(d()({className:h,before:g,after:P,alignItems:C,contentInline:a},r),{},{children:o?o(re,e):re}))}))}});return b?b(X):X}var x=(0,f.jsx)(M.Z.Item,d()(d()({name:Z,labelCol:V,required:E,rules:te,className:z},s),{},{children:(0,f.jsx)(S,d()(d()({className:h,before:g,after:P,alignItems:C,contentInline:a},r),{},{children:o?o(T,e):T}))}));return b?b(x):x};he.useStatus=M.Z.Item.useStatus;var m=he},89889:function(Ae,oe,t){t.d(oe,{e:function(){return h},Z:function(){return P}});var le=t(15009),d=t.n(le),ie=t(99289),ue=t.n(ie),ae=t(97857),c=t.n(ae),M=t(5574),G=t.n(M),w=t(13769),j=t.n(w),se=t(27347),k=t(77598),f=t(22638),de=t(99859),q=t(94184),ye=t.n(q),S=t(67294),ve=t(33168),ce=t(15867),he=t(78957),m=t(40964),n=t(85893),e=["preventDefault"],l=["preventDefault"],o=function(v){var a=v.initFormValues,D=v.onSubmit,C=D===void 0?function(){}:D,p=v.onReset,A=p===void 0?function(){}:p,F=v.submitText,E=F===void 0?"\u63D0\u4EA4":F,O=v.resetText,B=O===void 0?"\u91CD\u7F6E":O,$=v.submitButtonProps,ee=$===void 0?m.FD:$,W=v.resetButtonProps,T=W===void 0?m.FD:W,me=v.showReset,be=me===void 0?!0:me,s=v.form,Z=v.render,H=ee.preventDefault,L=j()(ee,e),ne=T.preventDefault,U=j()(T,l),z=(0,f.Z)(function(y){var R=Object.keys(a!=null?a:{}).length>0;R?s==null||s.setFieldsValue(c()({},a)):s==null||s.resetFields(),Promise.resolve().then(function(){return A==null?void 0:A(y)})}),te=(0,f.Z)(function(y){s==null||s.submit(),C==null||C(y)}),V=(0,f.Z)(function(y){var R;ne||z(y),U==null||(R=U.onClick)===null||R===void 0||R.call(U,y)}),ge=(0,f.Z)(function(y){var R;H||te(y),L==null||(R=L.onClick)===null||R===void 0||R.call(L,y)}),X=(0,S.useMemo)(function(){var y=[(0,n.jsx)(ce.ZP,c()(c()({},U),{},{onClick:V,children:B}),"reset-lightd-form"),(0,n.jsx)(ce.ZP,c()(c()({type:"primary"},L),{},{onClick:ge,children:E}),"submit-lightd-form")];return be?y:y.slice(1)},[z,te,U,ne,B,be,L,H,E]),x=Z?Z(X,v):X;return x?Array.isArray(x)?(x==null?void 0:x.length)<=0?null:(x==null?void 0:x.length)===1?x[0]:(0,n.jsx)(he.Z,{children:x}):x:null},b=o,u=["_lformRef","allFields","labelWidth","contentRender","formRender","submitter","loading","isEnterSubmit","isReady","onReset","transformValues","name","size","layout","disabled","labelCol","form","onFinish","children","initialValues","className","onValuesChange"],i="lightd-form",h=(0,S.createContext)({layout:"horizontal",labelColProps:{},disabled:void 0,size:void 0});function g(r){var v=r._lformRef,a=r.allFields,D=r.labelWidth,C=D===void 0?"auto":D,p=r.contentRender,A=r.formRender,F=r.submitter,E=r.loading,O=E===void 0?!1:E,B=r.isEnterSubmit,$=B===void 0?!0:B,ee=r.isReady,W=ee===void 0?!0:ee,T=r.onReset,me=r.transformValues,be=r.name,s=r.size,Z=r.layout,H=Z===void 0?"horizontal":Z,L=r.disabled,ne=r.labelCol,U=r.form,z=r.onFinish,te=r.children,V=r.initialValues,ge=r.className,X=r.onValuesChange,x=j()(r,u),y=de.Z.useForm(),R=G()(y,1),Y=R[0],I=(0,S.useRef)(U||Y),re=(0,se.Z)(function(){return O}),Fe=G()(re,2),Ee=Fe[0],Ie=Fe[1],Be=(0,S.useMemo)(function(){return be||"".concat((0,ve.EL)("lightd-form"),"}}")},[be]);(0,k.Z)(function(){Ie(O)},[O]),(0,k.Z)(function(){if(W){var N;(N=I.current)===null||N===void 0||N.setFieldsValue(c()({},V))}},[W]);var Pe=S.Children.toArray(te),Re=(0,S.useMemo)(function(){return(0,ve.ry)({formItems:Pe,fields:a,initialValues:V,submitter:F})},[Pe,a==null?void 0:a.join(""),F,V]);(0,S.useImperativeHandle)(v,function(){return Re});var Se=(0,S.useMemo)(function(){var N=H!=="vertical"&&C&&C!=="auto"?{flex:"0 0 ".concat(C,"px")}:{};return c()(c()({},N),ne)},[H,C,ne]),Te=(0,f.Z)(function(){var N=ue()(d()().mark(function J(Q){var _,De,Ce;return d()().wrap(function(fe){for(;;)switch(fe.prev=fe.next){case 0:if((0,ve.mf)(z)){fe.next=2;break}return fe.abrupt("return");case 2:if(De=me&&(_=me(Q))!==null&&_!==void 0?_:Q,Ce=z==null?void 0:z(De),!(Ce instanceof Promise)){fe.next=7;break}return Ie(!0),fe.abrupt("return",Ce.then(function(je){return Ie(!1),je}).catch(function(je){return Ie(!1),Promise.reject(je)}));case 7:case"end":return fe.stop()}},J)}));return function(J){return N.apply(this,arguments)}}()),K=(0,S.useMemo)(function(){return typeof F=="boolean"||!F?{}:F},[F]),xe=(0,S.useMemo)(function(){return F?(0,n.jsx)(b,c()(c()({initFormValues:Re,onReset:T},K),{},{form:I==null?void 0:I.current,resetButtonProps:c()({disabled:Ee||!W},K==null?void 0:K.resetButtonProps),submitButtonProps:c()({loading:Ee,disabled:!W},K==null?void 0:K.submitButtonProps)})):null},[Re,W,Ee,F,K]),We=p?p(Pe,xe,I==null?void 0:I.current):Pe,Ze=(0,f.Z)(function(N){var J,Q=K==null||(J=K.submitButtonProps)===null||J===void 0?void 0:J.htmlType;if($&&Q!=="submit"&&N.key==="Enter"&&W){var _;(_=I.current)===null||_===void 0||_.submit()}}),Ne=(0,f.Z)(function(N,J){var Q,_=(Q=Object.entries(N))===null||Q===void 0?void 0:Q[0],De=G()(_,2),Ce=De[0],pe=De[1];X==null||X(Ce,pe,J)}),Me=(0,n.jsx)(h.Provider,{value:{size:s,disabled:L,layout:H,labelColProps:Se},children:(0,n.jsxs)(de.Z,c()(c()({size:s,name:Be,layout:H,form:I.current,labelCol:Se,initialValues:V,className:ye()(i,ge),onFinish:Te,onKeyUp:Ze,onValuesChange:Ne},x),{},{children:[(0,n.jsx)(de.Z.Item,{noStyle:!0,shouldUpdate:!0,children:function(J){return I.current=J,null}}),We]}))});return A?A(Me,xe):Me}var P=g},33168:function(Ae,oe,t){t.d(oe,{$e:function(){return ve},EL:function(){return de},Hl:function(){return ce},JY:function(){return se},RZ:function(){return ye},VR:function(){return w},YZ:function(){return q},Zm:function(){return S},mf:function(){return G},ry:function(){return he}});var le=t(9783),d=t.n(le),ie=t(52677),ue=t.n(ie),ae=t(97857),c=t.n(ae),M=t(67294);function G(m){return typeof m=="function"}function w(m,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,l=c()(c()({},m),e?n:{});return Object.keys(n).forEach(function(o){var b=n[o];G(b)&&(l[o]=function(){for(var u,i=arguments.length,h=new Array(i),g=0;g<i;g++)h[g]=arguments[g];return b==null||b.apply(void 0,h),(u=m[o])===null||u===void 0?void 0:u.call.apply(u,[m].concat(h))})}),l}function j(m){var n=m.label,e=m.messageVariables,l=e===void 0?{}:e;return typeof n=="string"?n:l!=null&&l.label?l.label:""}var se=function(n){var e=n.placeholder,l=n.restProps,o=n.isSelectType,b=o===void 0?!1:o;return e||"".concat(b?"\u8BF7\u9009\u62E9":"\u8BF7\u8F93\u5165").concat(j(l))},k=Math.random().toString(16).substring(2),f=0;function de(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"lightd";return f++,"".concat(m,"-").concat(k,"-").concat(f)}var q=function(){var n=(0,M.useRef)(!0),e=n.current;return e&&(n.current=!1,!0)},ye=function(n,e){return(0,M.useMemo)(function(){var l;return n!=null&&n.length?(l=n==null?void 0:n.map(function(o){return e[o]}))!==null&&l!==void 0?l:[]:[]},[n,e])},S=function(n){return(0,M.useMemo)(function(){return n!=null&&n.length?(n==null?void 0:n.length)===1?n==null?void 0:n.some(function(e){return e==null||e===""||!(e!=null&&e.length)}):n==null?void 0:n.every(function(e){return e==null||e===""||!(e!=null&&e.length)}):!1},[n])},ve=function(n){if(Array.isArray(n)){var e;return n!=null&&n.length?(e=n.filter(function(l){return l||l===0}))===null||e===void 0?void 0:e.length:!1}return!0},ce=function m(n){if(n===null)return null;var e=Object.assign({},n);return Object.keys(e).forEach(function(l){return e[l]=ue()(n[l])==="object"?m(n[l]):n[l]}),Array.isArray(n)?(e.length=n.length,Array.from(e)):e},he=function m(n){var e=n.formItems,l=n.fields,o=n.initialValues,b=n.submitter,u={};return b===!1?u:l!=null&&l.length?(l.forEach(function(i){if(i&&typeof i=="string"){var h;u[i]=(h=o==null?void 0:o[i])!==null&&h!==void 0?h:void 0}else if(Array.isArray(i)&&i!==null&&i!==void 0&&i.length){var g,P,r=i[0],v=i[1],a=(g=o==null||(P=o[r])===null||P===void 0?void 0:P[v])!==null&&g!==void 0?g:void 0;u[r]?u[r][v]=a:u[r]=d()({},v,a)}else if(i===0){var D;u[0]=(D=o==null?void 0:o[0])!==null&&D!==void 0?D:void 0}}),u):(e.forEach(function(i){var h,g,P,r=i==null||(h=i.props)===null||h===void 0?void 0:h.name,v=i==null||(g=i.props)===null||g===void 0?void 0:g.children;if(r&&typeof r=="string"){var a;u[r]=(a=o==null?void 0:o[r])!==null&&a!==void 0?a:void 0}else if(Array.isArray(r)&&r!==null&&r!==void 0&&r.length){var D,C,p=r[0],A=r[1],F=(D=o==null||(C=o[p])===null||C===void 0?void 0:C[A])!==null&&D!==void 0?D:void 0;u[p]?u[p][A]=F:u[p]=d()({},A,F)}else if(r===0){var E;u[0]=(E=o==null?void 0:o[0])!==null&&E!==void 0?E:void 0}((P=M.Children.toArray(v))===null||P===void 0?void 0:P.length)>0&&(u=c()(c()({},u),m({formItems:M.Children.toArray(v),fields:l,initialValues:o,submitter:b})))}),u)}},40964:function(Ae,oe,t){t.d(oe,{Ao:function(){return d},Dd:function(){return ie},FD:function(){return se},Kp:function(){return M},LE:function(){return G},Wj:function(){return ue},Zd:function(){return ae},nb:function(){return le},ow:function(){return j},sM:function(){return c},v5:function(){return w}});var le=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],d=/^\S*(?=\S{8,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[+-.~!@#$%^&*? ])\S*$/,ie=/^(?:(?:\+|00)86)?1\d{10}$/,ue=/^[1-9]\d{9,29}$/,ae=/^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/,c=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,M=/^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/,G=/^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/,w=".jpg, .jpeg, .png, .gif, .webp, .bmp",j=[],se={}}}]);
