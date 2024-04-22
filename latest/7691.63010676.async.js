"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[7691],{59847:function(Bt,gt,o){o.d(gt,{Z:function(){return Mn}});var a=o(67294),pt=o(93967),Be=o.n(pt),at=o(87462),z=o(74902),D=o(1413),B=o(97685),lt=o(91),Ct=o(71002),ot=o(88905),St=o(88708),Ge=o(17341),it=o(21770),Oe=o(80334),yt=function(e){var t=a.useRef({valueLabels:new Map});return a.useMemo(function(){var r=t.current.valueLabels,l=new Map,n=e.map(function(i){var s,u=i.value,c=(s=i.label)!==null&&s!==void 0?s:r.get(u);return l.set(u,c),(0,D.Z)((0,D.Z)({},i),{},{label:c})});return t.current.valueLabels=l,[n]},[e])},xt=function(e,t,r,l){return a.useMemo(function(){var n=e.map(function(c){var d=c.value;return d}),i=t.map(function(c){var d=c.value;return d}),s=n.filter(function(c){return!l[c]});if(r){var u=(0,Ge.S)(n,!0,l);n=u.checkedKeys,i=u.halfCheckedKeys}return[Array.from(new Set([].concat((0,z.Z)(s),(0,z.Z)(n)))),i]},[e,t,r,l])},It=o(1089),Et=function(e,t){return a.useMemo(function(){var r=(0,It.I8)(e,{fieldNames:t,initWrapper:function(n){return(0,D.Z)((0,D.Z)({},n),{},{valueEntities:new Map})},processEntity:function(n,i){var s=n.node[t.value];if(!1)var u;i.valueEntities.set(s,n)}});return r},[e,t])},bt=o(4942),Tt=o(50344),Nt=function(){return null},Ye=Nt,Zt=["children","value"];function st(e){return(0,Tt.Z)(e).map(function(t){if(!a.isValidElement(t)||!t.type)return null;var r=t,l=r.key,n=r.props,i=n.children,s=n.value,u=(0,lt.Z)(n,Zt),c=(0,D.Z)({key:l,value:s},u),d=st(i);return d.length&&(c.children=d),c}).filter(function(t){return t})}function p(e){if(!e)return e;var t=(0,D.Z)({},e);return"props"in t||Object.defineProperty(t,"props",{get:function(){return(0,Oe.ZP)(!1,"New `rc-tree-select` not support return node instance as argument anymore. Please consider to remove `props` access."),t}}),t}function C(e,t,r,l,n,i){var s=null,u=null;function c(){function d(f){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"0",P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return f.map(function(E,H){var L="".concat(w,"-").concat(H),M=E[i.value],Y=r.includes(M),ee=d(E[i.children]||[],L,Y),X=a.createElement(Ye,E,ee.map(function(S){return S.node}));if(t===M&&(s=X),Y){var de={pos:L,node:X,children:ee};return P||u.push(de),de}return null}).filter(function(E){return E})}u||(u=[],d(l),u.sort(function(f,w){var P=f.node.props.value,E=w.node.props.value,H=r.indexOf(P),L=r.indexOf(E);return H-L}))}Object.defineProperty(e,"triggerNode",{get:function(){return(0,Oe.ZP)(!1,"`triggerNode` is deprecated. Please consider decoupling data with node."),c(),s}}),Object.defineProperty(e,"allCheckedNodes",{get:function(){return(0,Oe.ZP)(!1,"`allCheckedNodes` is deprecated. Please consider decoupling data with node."),c(),n?u:u.map(function(f){var w=f.node;return w})}})}var Z=function(e,t,r){var l=r.treeNodeFilterProp,n=r.filterTreeNode,i=r.fieldNames,s=i.children;return a.useMemo(function(){if(!t||n===!1)return e;var u;if(typeof n=="function")u=n;else{var c=t.toUpperCase();u=function(w,P){var E=P[l];return String(E).toUpperCase().includes(c)}}function d(f){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return f.reduce(function(P,E){var H=E[s],L=w||u(t,p(E)),M=d(H||[],L);return(L||M.length)&&P.push((0,D.Z)((0,D.Z)({},E),{},(0,bt.Z)({isLeaf:void 0},s,M))),P},[])}return d(e)},[e,t,s,l,n])};function G(e){var t=a.useRef();t.current=e;var r=a.useCallback(function(){return t.current.apply(t,arguments)},[]);return r}function K(e,t){var r=t.id,l=t.pId,n=t.rootPId,i={},s=[],u=e.map(function(c){var d=(0,D.Z)({},c),f=d[r];return i[f]=d,d.key=d.key||f,d});return u.forEach(function(c){var d=c[l],f=i[d];f&&(f.children=f.children||[],f.children.push(c)),(d===n||!f&&n===null)&&s.push(c)}),s}function _(e,t,r){return a.useMemo(function(){return e?r?K(e,(0,D.Z)({id:"id",pId:"pId",rootPId:null},r!==!0?r:{})):e:st(t)},[t,r,e])}var Gt=a.createContext(null),Mt=Gt,Yt=o(70593),Ve=o(15105),Xt=o(56982),Jt=a.createContext(null),Ot=Jt;function Qt(e){return Array.isArray(e)?e:e!==void 0?[e]:[]}function qt(e){var t=e||{},r=t.label,l=t.value,n=t.children,i=l||"value";return{_title:r?[r]:["title","label"],value:i,key:i,children:n||"children"}}function Pt(e){return!e||e.disabled||e.disableCheckbox||e.checkable===!1}function _t(e,t){var r=[];function l(n){n.forEach(function(i){var s=i[t.children];s&&(r.push(i[t.value]),l(s))})}return l(e),r}function Vt(e){return e==null}var en={width:0,height:0,display:"flex",overflow:"hidden",opacity:0,border:0,padding:0,margin:0},tn=function(t,r){var l=(0,ot.lk)(),n=l.prefixCls,i=l.multiple,s=l.searchValue,u=l.toggleOpen,c=l.open,d=l.notFoundContent,f=a.useContext(Ot),w=f.virtual,P=f.listHeight,E=f.listItemHeight,H=f.listItemScrollOffset,L=f.treeData,M=f.fieldNames,Y=f.onSelect,ee=f.dropdownMatchSelectWidth,X=f.treeExpandAction,de=f.treeTitleRender,S=a.useContext(Mt),A=S.checkable,O=S.checkedKeys,be=S.halfCheckedKeys,Te=S.treeExpandedKeys,Je=S.treeDefaultExpandAll,Ne=S.treeDefaultExpandedKeys,fe=S.onTreeExpand,Ke=S.treeIcon,te=S.showTreeIcon,Ae=S.switcherIcon,ne=S.treeLine,Re=S.treeNodeFilterProp,re=S.loadData,ae=S.treeLoadedKeys,J=S.treeMotion,$e=S.onTreeLoad,ke=S.keyEntities,le=a.useRef(),ve=(0,Xt.Z)(function(){return L},[c,L],function(b,v){return v[0]&&b[1]!==v[1]}),T=a.useState(null),he=(0,B.Z)(T,2),R=he[0],Ze=he[1],F=ke[R],me=a.useMemo(function(){return A?{checked:O,halfChecked:be}:null},[A,O,be]);a.useEffect(function(){if(c&&!i&&O.length){var b;(b=le.current)===null||b===void 0||b.scrollTo({key:O[0]}),Ze(O[0])}},[c]);var oe=String(s).toLowerCase(),He=function(v){return oe?String(v[Re]).toLowerCase().includes(oe):!1},Pe=a.useState(Ne),ge=(0,B.Z)(Pe,2),ie=ge[0],Qe=ge[1],qe=a.useState(null),se=(0,B.Z)(qe,2),j=se[0],Le=se[1],W=a.useMemo(function(){return Te?(0,z.Z)(Te):s?j:ie},[ie,j,Te,s]);a.useEffect(function(){s&&Le(_t(L,M))},[s]);var _e=function(v){Qe(v),Le(v),fe&&fe(v)},pe=function(v){v.preventDefault()},Q=function(v,Ce){var U=Ce.node;A&&Pt(U)||(Y(U.key,{selected:!O.includes(U.key)}),i||u(!1))};if(a.useImperativeHandle(r,function(){var b;return{scrollTo:(b=le.current)===null||b===void 0?void 0:b.scrollTo,onKeyDown:function(Ce){var U,Fe=Ce.which;switch(Fe){case Ve.Z.UP:case Ve.Z.DOWN:case Ve.Z.LEFT:case Ve.Z.RIGHT:(U=le.current)===null||U===void 0||U.onKeyDown(Ce);break;case Ve.Z.ENTER:{if(F){var ue=(F==null?void 0:F.node)||{},et=ue.selectable,Se=ue.value;et!==!1&&Q(null,{node:{key:R},selected:!O.includes(Se)})}break}case Ve.Z.ESC:u(!1)}},onKeyUp:function(){}}}),ve.length===0)return a.createElement("div",{role:"listbox",className:"".concat(n,"-empty"),onMouseDown:pe},d);var De={fieldNames:M};return ae&&(De.loadedKeys=ae),W&&(De.expandedKeys=W),a.createElement("div",{onMouseDown:pe},F&&c&&a.createElement("span",{style:en,"aria-live":"assertive"},F.node.value),a.createElement(Yt.Z,(0,at.Z)({ref:le,focusable:!1,prefixCls:"".concat(n,"-tree"),treeData:ve,height:P,itemHeight:E,itemScrollOffset:H,virtual:w!==!1&&ee!==!1,multiple:i,icon:Ke,showIcon:te,switcherIcon:Ae,showLine:ne,loadData:s?null:re,motion:J,activeKey:R,checkable:A,checkStrictly:!0,checkedKeys:me,selectedKeys:A?[]:O,defaultExpandAll:Je,titleRender:de},De,{onActiveChange:Ze,onSelect:Q,onCheck:Q,onExpand:_e,onLoad:$e,filterTreeNode:He,expandAction:X})))},nn=a.forwardRef(tn),rn=nn,Lt="SHOW_ALL",Dt="SHOW_PARENT",ut="SHOW_CHILD";function Kt(e,t,r,l){var n=new Set(e);return t===ut?e.filter(function(i){var s=r[i];return!(s&&s.children&&s.children.some(function(u){var c=u.node;return n.has(c[l.value])})&&s.children.every(function(u){var c=u.node;return Pt(c)||n.has(c[l.value])}))}):t===Dt?e.filter(function(i){var s=r[i],u=s?s.parent:null;return!(u&&!Pt(u.node)&&n.has(u.key))}):e}function Un(e){var t=e.searchPlaceholder,r=e.treeCheckStrictly,l=e.treeCheckable,n=e.labelInValue,i=e.value,s=e.multiple;warning(!t,"`searchPlaceholder` has been removed."),r&&n===!1&&warning(!1,"`treeCheckStrictly` will force set `labelInValue` to `true`."),(n||r)&&warning(toArray(i).every(function(u){return u&&_typeof(u)==="object"&&"value"in u}),"Invalid prop `value` supplied to `TreeSelect`. You should use { label: string, value: string | number } or [{ label: string, value: string | number }] instead."),r||s||l?warning(!i||Array.isArray(i),"`value` should be an array when `TreeSelect` is checkable or multiple."):warning(!Array.isArray(i),"`value` should not be array when `TreeSelect` is single mode.")}var jn=null,an=["id","prefixCls","value","defaultValue","onChange","onSelect","onDeselect","searchValue","inputValue","onSearch","autoClearSearchValue","filterTreeNode","treeNodeFilterProp","showCheckedStrategy","treeNodeLabelProp","multiple","treeCheckable","treeCheckStrictly","labelInValue","fieldNames","treeDataSimpleMode","treeData","children","loadData","treeLoadedKeys","onTreeLoad","treeDefaultExpandAll","treeExpandedKeys","treeDefaultExpandedKeys","onTreeExpand","treeExpandAction","virtual","listHeight","listItemHeight","listItemScrollOffset","onDropdownVisibleChange","dropdownMatchSelectWidth","treeLine","treeIcon","showTreeIcon","switcherIcon","treeMotion","treeTitleRender"];function ln(e){return!e||(0,Ct.Z)(e)!=="object"}var on=a.forwardRef(function(e,t){var r=e.id,l=e.prefixCls,n=l===void 0?"rc-tree-select":l,i=e.value,s=e.defaultValue,u=e.onChange,c=e.onSelect,d=e.onDeselect,f=e.searchValue,w=e.inputValue,P=e.onSearch,E=e.autoClearSearchValue,H=E===void 0?!0:E,L=e.filterTreeNode,M=e.treeNodeFilterProp,Y=M===void 0?"value":M,ee=e.showCheckedStrategy,X=e.treeNodeLabelProp,de=e.multiple,S=e.treeCheckable,A=e.treeCheckStrictly,O=e.labelInValue,be=e.fieldNames,Te=e.treeDataSimpleMode,Je=e.treeData,Ne=e.children,fe=e.loadData,Ke=e.treeLoadedKeys,te=e.onTreeLoad,Ae=e.treeDefaultExpandAll,ne=e.treeExpandedKeys,Re=e.treeDefaultExpandedKeys,re=e.onTreeExpand,ae=e.treeExpandAction,J=e.virtual,$e=e.listHeight,ke=$e===void 0?200:$e,le=e.listItemHeight,ve=le===void 0?20:le,T=e.listItemScrollOffset,he=T===void 0?0:T,R=e.onDropdownVisibleChange,Ze=e.dropdownMatchSelectWidth,F=Ze===void 0?!0:Ze,me=e.treeLine,oe=e.treeIcon,He=e.showTreeIcon,Pe=e.switcherIcon,ge=e.treeMotion,ie=e.treeTitleRender,Qe=(0,lt.Z)(e,an),qe=(0,St.ZP)(r),se=S&&!A,j=S||A,Le=A||O,W=j||de,_e=(0,it.Z)(s,{value:i}),pe=(0,B.Z)(_e,2),Q=pe[0],De=pe[1],b=a.useMemo(function(){return S?ee||ut:Lt},[ee,S]),v=a.useMemo(function(){return qt(be)},[JSON.stringify(be)]),Ce=(0,it.Z)("",{value:f!==void 0?f:w,postState:function(h){return h||""}}),U=(0,B.Z)(Ce,2),Fe=U[0],ue=U[1],et=function(h){ue(h),P==null||P(h)},Se=_(Je,Ne,Te),tt=Et(Se,v),V=tt.keyEntities,ce=tt.valueEntities,ct=a.useCallback(function(m){var h=[],g=[];return m.forEach(function(x){ce.has(x)?g.push(x):h.push(x)}),{missingRawValues:h,existRawValues:g}},[ce]),dt=Z(Se,Fe,{fieldNames:v,treeNodeFilterProp:Y,filterTreeNode:L}),ft=a.useCallback(function(m){if(m){if(X)return m[X];for(var h=v._title,g=0;g<h.length;g+=1){var x=m[h[g]];if(x!==void 0)return x}}},[v,X]),we=a.useCallback(function(m){var h=Qt(m);return h.map(function(g){return ln(g)?{value:g}:g})},[]),ye=a.useCallback(function(m){var h=we(m);return h.map(function(g){var x=g.label,$=g.value,N=g.halfChecked,I,y=ce.get($);if(y){var k;x=(k=x)!==null&&k!==void 0?k:ft(y.node),I=y.node.disabled}else if(x===void 0){var xe=we(Q).find(function(nt){return nt.value===$});x=xe.label}return{label:x,value:$,halfChecked:N,disabled:I}})},[ce,ft,we,Q]),We=a.useMemo(function(){return we(Q)},[we,Q]),On=a.useMemo(function(){var m=[],h=[];return We.forEach(function(g){g.halfChecked?h.push(g):m.push(g)}),[m,h]},[We]),Wt=(0,B.Z)(On,2),Ue=Wt[0],Ut=Wt[1],jt=a.useMemo(function(){return Ue.map(function(m){return m.value})},[Ue]),Vn=xt(Ue,Ut,se,V),zt=(0,B.Z)(Vn,2),je=zt[0],vt=zt[1],Kn=a.useMemo(function(){var m=Kt(je,b,V,v),h=m.map(function(N){var I,y;return(I=(y=V[N])===null||y===void 0||(y=y.node)===null||y===void 0?void 0:y[v.value])!==null&&I!==void 0?I:N}),g=h.map(function(N){var I=Ue.find(function(k){return k.value===N}),y;return O&&I.label!==void 0?y=I.label:!O&&ie&&(y=ie(I)),{value:N,label:y}}),x=ye(g),$=x[0];return!W&&$&&Vt($.value)&&Vt($.label)?[]:x.map(function(N){var I;return(0,D.Z)((0,D.Z)({},N),{},{label:(I=N.label)!==null&&I!==void 0?I:N.value})})},[v,W,je,Ue,ye,b,V]),An=yt(Kn),Rn=(0,B.Z)(An,1),$n=Rn[0],ht=G(function(m,h,g){var x=ye(m);if(De(x),H&&ue(""),u){var $=m;if(se){var N=Kt(m,b,V,v);$=N.map(function(q){var Ie=ce.get(q);return Ie?Ie.node[v.value]:q})}var I=h||{triggerValue:void 0,selected:void 0},y=I.triggerValue,k=I.selected,xe=$;if(A){var nt=Ut.filter(function(q){return!$.includes(q.value)});xe=[].concat((0,z.Z)(xe),(0,z.Z)(nt))}var rt=ye(xe),Me={preValue:Ue,triggerValue:y},ze=!0;(A||g==="selection"&&!k)&&(ze=!1),C(Me,y,m,Se,ze,v),j?Me.checked=k:Me.selected=k;var mt=Le?rt:rt.map(function(q){return q.value});u(W?mt:mt[0],Le?null:rt.map(function(q){return q.label}),Me)}}),wt=a.useCallback(function(m,h){var g,x=h.selected,$=h.source,N=V[m],I=N==null?void 0:N.node,y=(g=I==null?void 0:I[v.value])!==null&&g!==void 0?g:m;if(!W)ht([y],{selected:!0,triggerValue:y},"option");else{var k=x?[].concat((0,z.Z)(jt),[y]):je.filter(function(Ie){return Ie!==y});if(se){var xe=ct(k),nt=xe.missingRawValues,rt=xe.existRawValues,Me=rt.map(function(Ie){return ce.get(Ie).key}),ze;if(x){var mt=(0,Ge.S)(Me,!0,V);ze=mt.checkedKeys}else{var q=(0,Ge.S)(Me,{checked:!1,halfCheckedKeys:vt},V);ze=q.checkedKeys}k=[].concat((0,z.Z)(nt),(0,z.Z)(ze.map(function(Ie){return V[Ie].node[v.value]})))}ht(k,{selected:x,triggerValue:y},$||"option")}x||!W?c==null||c(y,p(I)):d==null||d(y,p(I))},[ct,ce,V,v,W,jt,ht,se,c,d,je,vt]),kn=a.useCallback(function(m){if(R){var h={};Object.defineProperty(h,"documentClickClose",{get:function(){return(0,Oe.ZP)(!1,"Second param of `onDropdownVisibleChange` has been removed."),!1}}),R(m,h)}},[R]),Hn=G(function(m,h){var g=m.map(function(x){return x.value});if(h.type==="clear"){ht(g,{},"selection");return}h.values.length&&wt(h.values[0].value,{selected:!1,source:"selection"})}),Fn=a.useMemo(function(){return{virtual:J,dropdownMatchSelectWidth:F,listHeight:ke,listItemHeight:ve,listItemScrollOffset:he,treeData:dt,fieldNames:v,onSelect:wt,treeExpandAction:ae,treeTitleRender:ie}},[J,F,ke,ve,he,dt,v,wt,ae,ie]),Wn=a.useMemo(function(){return{checkable:j,loadData:fe,treeLoadedKeys:Ke,onTreeLoad:te,checkedKeys:je,halfCheckedKeys:vt,treeDefaultExpandAll:Ae,treeExpandedKeys:ne,treeDefaultExpandedKeys:Re,onTreeExpand:re,treeIcon:oe,treeMotion:ge,showTreeIcon:He,switcherIcon:Pe,treeLine:me,treeNodeFilterProp:Y,keyEntities:V}},[j,fe,Ke,te,je,vt,Ae,ne,Re,re,oe,ge,He,Pe,me,Y,V]);return a.createElement(Ot.Provider,{value:Fn},a.createElement(Mt.Provider,{value:Wn},a.createElement(ot.Ac,(0,at.Z)({ref:t},Qe,{id:qe,prefixCls:n,mode:W?"multiple":void 0,displayValues:$n,onDisplayValuesChange:Hn,searchValue:Fe,onSearch:et,OptionList:rn,emptyOptions:!Se.length,onDropdownVisibleChange:kn,dropdownMatchSelectWidth:F}))))}),Xe=on;Xe.TreeNode=Ye,Xe.SHOW_ALL=Lt,Xe.SHOW_PARENT=Dt,Xe.SHOW_CHILD=ut;var sn=Xe,un=sn,cn=o(10366),dn=o(87263),At=o(33603),fn=o(8745),Rt=o(9708),vn=o(53124),hn=o(88258),mn=o(98866),$t=o(35792),gn=o(98675),pn=o(65223),Cn=o(27833),Sn=o(30307),yn=o(15030),xn=o(43277),In=o(78642),En=o(4173),bn=o(61639),kt=o(54548),Tn=o(63185),Ht=o(45503),Nn=o(91945),Ft=o(32157);const Zn=e=>{const{componentCls:t,treePrefixCls:r,colorBgElevated:l}=e,n=`.${r}`;return[{[`${t}-dropdown`]:[{padding:`${(0,kt.bf)(e.paddingXS)} ${(0,kt.bf)(e.calc(e.paddingXS).div(2).equal())}`},(0,Ft.Yk)(r,(0,Ht.TS)(e,{colorBgContainer:l})),{[n]:{borderRadius:0,[`${n}-list-holder-inner`]:{alignItems:"stretch",[`${n}-treenode`]:{[`${n}-node-content-wrapper`]:{flex:"auto"}}}}},(0,Tn.C2)(`${r}-checkbox`,e),{"&-rtl":{direction:"rtl",[`${n}-switcher${n}-switcher_close`]:{[`${n}-switcher-icon svg`]:{transform:"rotate(90deg)"}}}}]}]},zn=null;function Pn(e,t,r){return(0,Nn.I$)("TreeSelect",l=>{const n=(0,Ht.TS)(l,{treePrefixCls:t});return[Zn(n)]},Ft.TM)(e,r)}var Ln=function(e,t){var r={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,l=Object.getOwnPropertySymbols(e);n<l.length;n++)t.indexOf(l[n])<0&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(r[l[n]]=e[l[n]]);return r};const Dn=(e,t)=>{var r,{prefixCls:l,size:n,disabled:i,bordered:s=!0,className:u,rootClassName:c,treeCheckable:d,multiple:f,listHeight:w=256,listItemHeight:P=26,placement:E,notFoundContent:H,switcherIcon:L,treeLine:M,getPopupContainer:Y,popupClassName:ee,dropdownClassName:X,treeIcon:de=!1,transitionName:S,choiceTransitionName:A="",status:O,treeExpandAction:be,builtinPlacements:Te,dropdownMatchSelectWidth:Je,popupMatchSelectWidth:Ne,allowClear:fe,variant:Ke,dropdownStyle:te,tagRender:Ae}=e,ne=Ln(e,["prefixCls","size","disabled","bordered","className","rootClassName","treeCheckable","multiple","listHeight","listItemHeight","placement","notFoundContent","switcherIcon","treeLine","getPopupContainer","popupClassName","dropdownClassName","treeIcon","transitionName","choiceTransitionName","status","treeExpandAction","builtinPlacements","dropdownMatchSelectWidth","popupMatchSelectWidth","allowClear","variant","dropdownStyle","tagRender"]);const{getPopupContainer:Re,getPrefixCls:re,renderEmpty:ae,direction:J,virtual:$e,popupMatchSelectWidth:ke,popupOverflow:le}=a.useContext(vn.E_),ve=re(),T=re("select",l),he=re("select-tree",l),R=re("tree-select",l),{compactSize:Ze,compactItemClassnames:F}=(0,En.ri)(T,J),me=(0,$t.Z)(T),oe=(0,$t.Z)(R),[He,Pe,ge]=(0,yn.Z)(T,me),[ie]=Pn(R,he,oe),[Qe,qe]=(0,Cn.Z)(Ke,s),se=Be()(ee||X,`${R}-dropdown`,{[`${R}-dropdown-rtl`]:J==="rtl"},c,ge,me,oe,Pe),j=!!(d||f),Le=(0,In.Z)(ne.suffixIcon,ne.showArrow),W=(r=Ne!=null?Ne:Je)!==null&&r!==void 0?r:ke,{status:_e,hasFeedback:pe,isFormItemInput:Q,feedbackIcon:De}=a.useContext(pn.aM),b=(0,Rt.F)(_e,O),{suffixIcon:v,removeIcon:Ce,clearIcon:U}=(0,xn.Z)(Object.assign(Object.assign({},ne),{multiple:j,showSuffixIcon:Le,hasFeedback:pe,feedbackIcon:De,prefixCls:T,componentName:"TreeSelect"})),Fe=fe===!0?{clearIcon:U}:fe;let ue;H!==void 0?ue=H:ue=(ae==null?void 0:ae("Select"))||a.createElement(hn.Z,{componentName:"Select"});const et=(0,cn.Z)(ne,["suffixIcon","removeIcon","clearIcon","itemIcon","switcherIcon"]),Se=a.useMemo(()=>E!==void 0?E:J==="rtl"?"bottomRight":"bottomLeft",[E,J]),tt=(0,gn.Z)(ye=>{var We;return(We=n!=null?n:Ze)!==null&&We!==void 0?We:ye}),V=a.useContext(mn.Z),ce=i!=null?i:V,ct=Be()(!l&&R,{[`${T}-lg`]:tt==="large",[`${T}-sm`]:tt==="small",[`${T}-rtl`]:J==="rtl",[`${T}-${Qe}`]:qe,[`${T}-in-form-item`]:Q},(0,Rt.Z)(T,b,pe),F,u,c,ge,me,oe,Pe),dt=ye=>a.createElement(bn.Z,{prefixCls:he,switcherIcon:L,treeNodeProps:ye,showLine:M}),[ft]=(0,dn.Cn)("SelectLike",te==null?void 0:te.zIndex),we=a.createElement(un,Object.assign({virtual:$e,disabled:ce},et,{dropdownMatchSelectWidth:W,builtinPlacements:(0,Sn.Z)(Te,le),ref:t,prefixCls:T,className:ct,listHeight:w,listItemHeight:P,treeCheckable:d&&a.createElement("span",{className:`${T}-tree-checkbox-inner`}),treeLine:!!M,suffixIcon:v,multiple:j,placement:Se,removeIcon:Ce,allowClear:Fe,switcherIcon:dt,showTreeIcon:de,notFoundContent:ue,getPopupContainer:Y||Re,treeMotion:null,dropdownClassName:se,dropdownStyle:Object.assign(Object.assign({},te),{zIndex:ft}),choiceTransitionName:(0,At.m)(ve,"",A),transitionName:(0,At.m)(ve,"slide-up",S),treeExpandAction:be,tagRender:j?Ae:void 0}));return He(ie(we))},Ee=a.forwardRef(Dn),wn=(0,fn.Z)(Ee);Ee.TreeNode=Ye,Ee.SHOW_ALL=Lt,Ee.SHOW_PARENT=Dt,Ee.SHOW_CHILD=ut,Ee._InternalPanelDoNotUseOrYouWillBeFired=wn;var Mn=Ee},22028:function(Bt,gt,o){o.d(gt,{Z:function(){return st}});var a=o(74073),pt=o(45401),Be=o(35586);function at(p){var C=p==null?0:p.length;return C?p[C-1]:void 0}var z=at,D=o(13317);function B(p,C,Z){var G=-1,K=p.length;C<0&&(C=-C>K?0:K+C),Z=Z>K?K:Z,Z<0&&(Z+=K),K=C>Z?0:Z-C>>>0,C>>>=0;for(var _=Array(K);++G<K;)_[G]=p[G+C];return _}var lt=B;function Ct(p,C){return C.length<2?p:(0,D.Z)(p,lt(C,0,-1))}var ot=Ct,St=o(62281);function Ge(p,C){return C=(0,Be.Z)(C,p),p=ot(p,C),p==null||delete p[(0,St.Z)(z(C))]}var it=Ge,Oe=o(31899),yt=o(37514);function xt(p){return(0,yt.Z)(p)?void 0:p}var It=xt,Et=o(94008),bt=o(4403),Tt=1,Nt=2,Ye=4,Zt=(0,Et.Z)(function(p,C){var Z={};if(p==null)return Z;var G=!1;C=(0,a.Z)(C,function(_){return _=(0,Be.Z)(_,p),G||(G=_.length>1),_}),(0,Oe.Z)(p,(0,bt.Z)(p),Z),G&&(Z=(0,pt.Z)(Z,Tt|Nt|Ye,It));for(var K=C.length;K--;)it(Z,C[K]);return Z}),st=Zt}}]);