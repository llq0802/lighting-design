(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"0DN1":function(e,t,a){"use strict";a.r(t);a("tU7J");for(var n=a("wFql"),r=a("qLMh"),l=a("9og8"),o=(a("y8nQ"),a("Vl3Y")),c=a("tJVT"),i=a("q1tI"),s=a.n(i),u=a("0Owb"),d=a("sGjT"),m=a("k1fw"),b=(a("5NDa"),a("5rEg")),v=a("PpiC"),p=a("wxaR"),g=a("MKxO"),f=["rowKeyValue","editable","editing","dataIndex","title","record","index","children"],O=["columns","rowKey","size","editTableRef","editTableProps"],j=e=>{var t=e.rowKeyValue,a=(e.editable,e.editing),n=e.dataIndex,r=e.title,l=(e.record,e.index,e.children),c=Object(v["a"])(e,f);return s.a.createElement("td",c,a?s.a.createElement(o["a"].Item,{name:[t,n],style:{margin:0},rules:[{required:!0,message:"Please Input ".concat(r,"!")}]},s.a.createElement(b["a"],null)):l)},k=e=>{var t=e.columns,a=e.rowKey,n=e.size,b=e.editTableRef,f=e.editTableProps,k=Object(v["a"])(e,O),h=f.editKeys,y=void 0===h?[]:h,w=f.editKeysChange,E=f.onSave,C=f.onDelete,S=o["a"].useForm(),R=Object(c["a"])(S,1),x=R[0];Object(i["useEffect"])((()=>{}),[]);var P=Object(i["useCallback"])(((e,t)=>y.includes(Object(p["b"])(a)(e,t))),[y,a]),N=Object(i["useMemo"])((()=>{var e=t.map((e=>e.editable||!0===e.editable?Object(m["a"])(Object(m["a"])({},e),{},{onCell:(t,n)=>({record:t,rowKeyValue:Object(p["b"])(a)(t,n),title:e.title,editable:e.editable,editing:P(t,n),dataIndex:e.dataIndex||n})}):e));return e}),[t,P,a]),z=Object(i["useMemo"])((()=>{var e="";return e="function"===typeof a?a():a||"key",e}),[a]),I=e=>{var t=y.filter((t=>t!==e));w(t)},F=e=>{var t=e[z],a=Object(v["a"])(e,[z].map(d["a"]));x.setFieldsValue({[t]:Object(m["a"])({},a)}),w([...y||[],t])},L=function(){var e=Object(l["a"])(Object(r["a"])().mark((function e(t){var a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x.validateFields();case 2:return a=x.getFieldValue(t),e.next=5,null===E||void 0===E?void 0:E(t,a);case 5:I(t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(l["a"])(Object(r["a"])().mark((function e(t){var a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=x.getFieldValue(t),e.next=3,null===C||void 0===C?void 0:C(t,a);case 3:I(t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=e=>{if(e){var t=[e];x.resetFields([t])}else x.resetFields()};return Object(i["useImperativeHandle"])(b,(()=>({onSave:L,onCancel:I,onEdit:F,onDelete:V,onFormReset:q}))),s.a.createElement(o["a"],{form:x,component:!1,size:n},s.a.createElement(g["b"],Object(u["a"])({rowKey:a,size:n,components:{body:{cell:j}},columns:N,rowClassName:"lightd-editable-row"},k)))},h=k,y=[],w=0;w<100;w++)y.push({id:w.toString()+"lightd",name:"Edrward ".concat(w),age:32,address:"London Park no. ".concat(w)});var E=()=>{var e=o["a"].useForm(),t=Object(c["a"])(e,1),a=(t[0],Object(i["useRef"])()),u=Object(i["useState"])([]),d=Object(c["a"])(u,2),m=d[0],b=d[1],v=Object(i["useState"])(y),p=Object(c["a"])(v,2),g=(p[0],p[1],e=>{a.current.onEdit(e)}),f=e=>{a.current.onCancel(e)},O=function(){var e=Object(l["a"])(Object(r["a"])().mark((function e(t){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:a.current.onSave(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=[{title:"name",dataIndex:"name",width:"25%",editable:!0},{title:"age",dataIndex:"age",width:"15%",editable:!0},{title:"address",dataIndex:"address",width:"40%",editable:!0},{title:"operation",dataIndex:"operation",render:(e,t)=>null!==m&&void 0!==m&&m.includes(t.id)?s.a.createElement("span",null,s.a.createElement(n["a"].Link,{onClick:()=>O(t.id),style:{marginRight:8}},"\u4fdd\u5b58"),s.a.createElement(n["a"].Link,{onClick:()=>f(t.id)},"\u53d6\u6d88")):s.a.createElement(n["a"].Link,{onClick:()=>g(t)},"\u7f16\u8f91")}];return s.a.createElement(h,{rowKey:"id",editTableRef:a,editTableProps:{editKeys:m,editKeysChange:b,onSave:function(){var e=Object(l["a"])(Object(r["a"])().mark((function e(t,a){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("id,values ",t,a);case 1:case"end":return e.stop()}}),e)})));function t(t,a){return e.apply(this,arguments)}return t}()},request:function(){var e=Object(l["a"])(Object(r["a"])().mark((function e(t,a){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("==params==",t),e.abrupt("return",{success:!0,data:y,total:y.length});case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),columns:j,rowClassName:"editable-row"})};t["default"]=E},MKxO:function(e,t,a){"use strict";a.d(t,"a",(function(){return X}));a("GNNt");var n=a("wEI+"),r=(a("T2oS"),a("W9HT")),l=(a("IzEo"),a("bx4M")),o=(a("g9YV"),a("wCAj")),c=(a("DYRE"),a("zeV3")),i=a("0Owb"),s=a("qLMh"),u=a("k1fw"),d=a("9og8"),m=a("tJVT"),b=a("PpiC"),v=a("q1tI"),p=a.n(v),g=a("A6OP"),f=a("NEHW"),O=a("+Gva"),j=a("TSYQ"),k=a.n(j),h=Object(v["createContext"])({}),y=h,w=a("HEza"),E=a("XB5w"),C=a("wxaR"),S=(a("TI+4"),["formItems","cardProps","name"]),R="lightd-card",x=Object(v["forwardRef"])(((e,t)=>{var a=e.formItems,n=e.cardProps,r=e.name,o=Object(b["a"])(e,S),c=w["a"].useForm(),s=Object(m["a"])(c,1),d=s[0],g=[];if(Array.isArray(a)&&a.length>0&&(g=a),g.length<=0)return null;var f=Object(v["useMemo"])((()=>r||Object(C["c"])("lightd-table-search-form")),[r]);return Object(v["useImperativeHandle"])(t,(()=>d),[d]),p.a.createElement(l["a"],Object(i["a"])({className:R,bordered:!1},n,{bodyStyle:Object(u["a"])({paddingBottom:0,marginBottom:16},null===n||void 0===n?void 0:n.bodyStyle)}),p.a.createElement(E["a"],Object(i["a"])({form:d,name:f},o),g.map(((e,t)=>{var a,n;return Object(v["cloneElement"])(e,{key:(null===e||void 0===e?void 0:e.key)||(null===e||void 0===e||null===(a=e.props)||void 0===a?void 0:a.key)||(null===e||void 0===e||null===(n=e.props)||void 0===n?void 0:n.name)+t.toString()})}))))})),P=x,N=(a("5Dmo"),a("3S7+")),z=a("rLCj"),I=a("IehP"),F=a("3R4v"),L=a("VrqK"),V=(a("Q9mQ"),a("diRs")),q=(a("ozfa"),a("MJZm")),J=(a("sRBo"),a("kaz8")),M=a("eFNv"),T=()=>{var e=Object(v["useContext"])(y),t=e.columns,a=void 0===t?[]:t,r=e.setColumns,l=e.rootRef,o=Object(v["useMemo"])((()=>a.map(((e,t)=>"".concat(e.dataIndex||"","-").concat(e.key||"","-").concat(t)))),[a]),c=Object(v["useState"])(o),i=Object(m["a"])(c,2),s=i[0],u=i[1],d=Object(v["useMemo"])((()=>s.length===a.length),[s,a]),b=Object(v["useMemo"])((()=>s.length>0&&s.length!==a.length),[s,a]);Object(f["a"])((()=>{var e=a.filter(((e,t)=>s.includes(o[t])));null===r||void 0===r||r(e)}),[a,o,s,r]),Object(f["a"])((()=>{u(o)}),[o]);var g=Object(v["useMemo"])((()=>a.map(((e,t)=>({key:o[t],title:e.title||""})))),[a,o]),O=Object(v["useCallback"])((()=>{s.length===a.length?u([]):u([...o])}),[s.length,a.length,o]),j=Object(v["useCallback"])((e=>{u(e)}),[]);return p.a.createElement(n["a"],{getPopupContainer:()=>l.current||document.body},p.a.createElement(V["a"],{title:p.a.createElement(J["a"],{indeterminate:b,onChange:O,checked:d,style:{height:"32px",lineHeight:"32px"}},"\u5168\u9009"),content:p.a.createElement(q["a"],{checkable:!0,selectable:!1,blockNode:!0,onCheck:j,checkedKeys:s,treeData:g,className:"".concat(X,"-column-setting")}),arrowPointAtCenter:!0,placement:"bottomRight",trigger:["click"]},p.a.createElement(N["a"],{title:"\u5217\u8bbe\u7f6e"},p.a.createElement(M["a"],null))))},B=T,K=(a("qVdP"),a("jsC+")),D=a("9hi+"),A=()=>{var e=Object(v["useContext"])(y),t=e.size,a=void 0===t?"middle":t,r=e.setSize,l=e.rootRef;return p.a.createElement(n["a"],{getPopupContainer:()=>l.current||document.body},p.a.createElement(K["a"],{placement:"bottom",trigger:["click"],menu:{style:{width:80},selectedKeys:[a&&"large"!==a?a:"default"],onClick(e){var t=e.key;null===r||void 0===r||r(t)},items:[{label:"\u9ed8\u8ba4",key:"default"},{label:"\u4e2d\u7b49",key:"middle"},{label:"\u7d27\u51d1",key:"small"}]}},p.a.createElement(N["a"],{title:"\u8868\u683c\u5bc6\u5ea6"},p.a.createElement(D["a"],null))))},H=A,Q=["showReload","showColumnSetting","showDensity","showFullscreen","style"],Y=()=>{var e=Object(v["useContext"])(y),t=e.reload,a=e.rootRef;return p.a.createElement(n["a"],{getPopupContainer:()=>a.current||document.body},p.a.createElement(N["a"],{title:"\u5237\u65b0\u91cd\u7f6e"},p.a.createElement(z["a"],{onClick:t})))},G=()=>{var e=Object(v["useContext"])(y),t=e.rootRef,a=e.setFullScreen,r=Object(L["a"])(t.current),l=Object(m["a"])(r,2),o=l[0],c=l[1],i=c.enterFullscreen,s=c.exitFullscreen;return o?p.a.createElement(n["a"],{getPopupContainer:()=>t.current||document.body},p.a.createElement(N["a"],{title:"\u9000\u51fa\u5168\u5c4f"},p.a.createElement(I["a"],{onClick:()=>{s(),null===a||void 0===a||a(!1)}}))):p.a.createElement(N["a"],{title:"\u8fdb\u5165\u5168\u5c4f"},p.a.createElement(F["a"],{onClick:()=>{i(),null===a||void 0===a||a(!0)}}))},W=e=>{var t=e.showReload,a=void 0===t||t,n=e.showColumnSetting,r=void 0===n||n,l=e.showDensity,o=void 0===l||l,s=e.showFullscreen,d=void 0===s||s,m=e.style,v=void 0===m?{}:m,g=Object(b["a"])(e,Q);return p.a.createElement(c["b"],Object(i["a"])({size:12},g,{style:Object(u["a"])({fontSize:16},v)}),p.a.createElement(p.a.Fragment,null,a&&p.a.createElement(Y,null),o&&p.a.createElement(H,null),d&&p.a.createElement(G,null),r&&p.a.createElement(B,null)))},_=W,U=["isSort","nowrap","formRef","tableRef","fullScreenBgColor","requestParams","request","autoRequest","formInitialValues","queryFormProps","formCardProps","tableCardProps","tableExtra","tableRender","showToolbar","isReady","toolbarActionConfig","toolbarRender","toolbarLeft","toolbarRight","loading","contentRender","rootClassName","tableClassName","tableStyle","size","columns","formItems","pagination"],X="lightd-table",Z=(e,t)=>p.a.createElement("span",{className:"".concat(X,"-pagination-showTotal")},"\u5f53\u524d\u663e\u793a".concat(t[0],"-").concat(t[1]," \u6761\uff0c\u5171 ").concat(e," \u6761\u6570\u636e")),$=e=>{var t=e.isSort,a=void 0!==t&&t,j=e.nowrap,h=e.formRef,w=e.tableRef,E=e.fullScreenBgColor,C=void 0===E?"#fff":E,S=e.requestParams,x=void 0===S?{}:S,N=e.request,z=e.autoRequest,I=void 0===z||z,F=e.formInitialValues,L=e.queryFormProps,V=e.formCardProps,q=e.tableCardProps,J=e.tableExtra,M=e.tableRender,T=e.showToolbar,B=void 0===T||T,K=e.isReady,D=void 0===K||K,A=e.toolbarActionConfig,H=void 0===A?{showFullscreen:!0}:A,Q=e.toolbarRender,Y=e.toolbarLeft,G=e.toolbarRight,W=e.loading,$=e.contentRender,ee=e.rootClassName,te=e.tableClassName,ae=e.tableStyle,ne=e.size,re=void 0===ne?"middle":ne,le=e.columns,oe=void 0===le?[]:le,ce=e.formItems,ie=void 0===ce?[]:ce,se=e.pagination,ue=Object(b["a"])(e,U),de=Object(v["useState"])(re),me=Object(m["a"])(de,2),be=me[0],ve=me[1],pe=Object(v["useRef"])(null),ge=Object(v["useState"])(!1),fe=Object(m["a"])(ge,2),Oe=fe[0],je=fe[1],ke=Oe?{background:C,overflow:"auto",padding:24}:{},he=Object(v["useRef"])(null),ye=Object(v["useCallback"])((e=>{he.current=e,h&&("function"===typeof h?h(e):h.current=e)}),[h]),we=Object(v["useMemo"])((()=>se&&(se.defaultCurrent||se.current)||1),[se]),Ee=Object(v["useMemo"])((()=>se&&(se.defaultPageSize||se.pageSize)||10),[se]),Ce=Object(v["useMemo"])((()=>Array.isArray(ie)&&ie.length>0),[ie]),Se=Object(v["useMemo"])((()=>W&&"boolean"!==typeof W?W:{spinning:W}),[W]),Re=Object(g["a"])(function(){var e=Object(d["a"])(Object(s["a"])().mark((function e(t,a){var n;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,N(Object(u["a"])(Object(u["a"])({},t),x),a);case 2:if(n=e.sent,null!==n&&void 0!==n&&n.success){e.next=5;break}return e.abrupt("return",{list:[],total:0});case 5:return e.abrupt("return",{list:n.data,total:n.total});case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),{manual:!0,defaultCurrent:we,defaultPageSize:Ee}),xe=Re.data,Pe=Re.loading,Ne=Re.run,ze=Re.params,Ie=Re.pagination,Fe=Object(v["useMemo"])((()=>{if(a){var e={align:"center",title:"\u5e8f\u53f7",dataIndex:"_sortColumn_dataIndex",width:70,render:(e,t,a)=>p.a.createElement(p.a.Fragment,null,((null===Ie||void 0===Ie?void 0:Ie.current)-1)*((null===Ie||void 0===Ie?void 0:Ie.pageSize)||0)+a+1)};return[e,...oe]}return oe}),[oe,a,null===Ie||void 0===Ie?void 0:Ie.current,null===Ie||void 0===Ie?void 0:Ie.pageSize]),Le=Object(v["useState"])(Fe),Ve=Object(m["a"])(Le,2),qe=Ve[0],Je=Ve[1],Me=Object(v["useCallback"])((()=>{if(Ce){var e,t;null===(e=he.current)||void 0===e||e.resetFields();var a=null===(t=he.current)||void 0===t?void 0:t.getFieldsValue();return Ne({current:1,pageSize:Ee,formValues:a},"onReset")}Ie.changeCurrent(1)}),[Ce,Ee,Ie,Ne]),Te=Object(v["useCallback"])((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"onSearch";if(Ce){var t,a=null===(t=he.current)||void 0===t?void 0:t.getFieldsValue();return Ne({current:1,pageSize:Ee,formValues:a},e)}Ie.changeCurrent(1)}),[Ce,Ee,Ie,Ne]),Be=Object(v["useCallback"])((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"onReload";if(Ce){var t,a=null===(t=he.current)||void 0===t?void 0:t.getFieldsValue();return Ne({current:null===Ie||void 0===Ie?void 0:Ie.current,pageSize:null===Ie||void 0===Ie?void 0:Ie.pageSize,formValues:a},e)}Ie.changeCurrent(null===Ie||void 0===Ie?void 0:Ie.current)}),[Ce,Ie,Ne]),Ke=Object(v["useCallback"])((e=>Ne(Object(u["a"])(Object(u["a"])({},ze[0]),{},{current:1,pageSize:Ee,formValues:e}),"onSearch")),[Ee,ze,Ne]),De=Object(v["useCallback"])((e=>{if(Ce){var t,a=null===(t=he.current)||void 0===t?void 0:t.getFieldsValue();return Ne({current:e.current,pageSize:e.pageSize,formValues:a},"onReload")}Ie.changeCurrent(null===e||void 0===e?void 0:e.current)}),[Ce,Ie,Ne]);Object(v["useImperativeHandle"])(w,(()=>{var e;return{onReload:Be,onReset:Me,onSearch:Te,rootRef:pe,tableData:null!==(e=null===xe||void 0===xe?void 0:xe.list)&&void 0!==e?e:(null===ue||void 0===ue?void 0:ue.dataSource)||[],pagination:{current:Ie.current,pageSize:Ie.pageSize}}})),Object(f["a"])((()=>{Je(Fe)}),[Fe]),Object(v["useEffect"])((()=>{I&&D&&(Ce?Promise.resolve().then((()=>{var e;null===(e=he.current)||void 0===e||e.submit()})):Ie.changeCurrent(1))}),[I,Ce,D]);var Ae=p.a.createElement(_,Object(i["a"])({},H,{showColumnSetting:!$&&(null===H||void 0===H?void 0:H.showColumnSetting),showDensity:!$&&(null===H||void 0===H?void 0:H.showDensity),className:"".concat(X,"-toolbar-action")})),He=B?p.a.createElement("div",{className:"".concat(X,"-toolbar")},p.a.createElement("div",{className:"".concat(X,"-toolbar-content-left")},p.a.createElement(c["b"],null,Y)),p.a.createElement("div",{className:"".concat(X,"-toolbar-content-right")},p.a.createElement(c["b"],null,G,Ae))):null,Qe=p.a.createElement(r["a"],Object(i["a"])({},Se,{spinning:!(null===Se||void 0===Se||!Se.spinning)||Pe}),p.a.createElement(l["a"],Object(i["a"])({bordered:!1,className:R},q),Q?Q(Ae):He,p.a.createElement(o["a"],Object(i["a"])({components:{table:$?()=>{var e;return $(null!==(e=null===xe||void 0===xe?void 0:xe.list)&&void 0!==e?e:[])}:void 0},className:te,style:ae,size:be,columns:qe,dataSource:(null===xe||void 0===xe?void 0:xe.list)||[],onChange:De,pagination:!1!==se&&Object(u["a"])(Object(u["a"])({showTotal:Z,showSizeChanger:!0,showQuickJumper:!0},se),{},{current:null===Ie||void 0===Ie?void 0:Ie.current,pageSize:null===Ie||void 0===Ie?void 0:Ie.pageSize,total:null===Ie||void 0===Ie?void 0:Ie.total})},ue,{scroll:Object(u["a"])(Object(u["a"])({},j?{x:!0}:{}),null===ue||void 0===ue?void 0:ue.scroll)})))),Ye=p.a.createElement(P,Object(i["a"])({isReady:D,loading:!(null===Se||void 0===Se||!Se.spinning)||Pe,ref:ye,cardProps:V,onFinish:Ke,formItems:ie,initialValues:F},L)),Ge=p.a.createElement(y.Provider,{value:{reload:Me,size:be,setSize:ve,columns:Fe,setColumns:Je,rootRef:pe,setFullScreen:je}},p.a.createElement("div",{ref:pe,style:ke,className:k()(X,ee,{["".concat(X,"-fullScreen")]:Oe})},Ye,J,Qe)),We=M?M({searchFormDom:Ye,toolbarDom:He,tableExtraDom:J,tableDom:Qe,finallyDom:Ge},e):Ge;return null!==H&&void 0!==H&&H.showFullscreen?p.a.createElement(n["a"],{locale:O["a"],getPopupContainer:()=>pe.current||document.body},We):p.a.createElement(n["a"],{locale:O["a"]},We)};t["b"]=$},"TI+4":function(e,t,a){},yJSv:function(e,t,a){"use strict";a.r(t);for(var n=a("qLMh"),r=a("9og8"),l=(a("+L6B"),a("2/Rp")),o=a("tJVT"),c=a("q1tI"),i=a.n(c),s=a("zK1H"),u=a("MKxO"),d=[{title:"\u59d3\u540d",dataIndex:"name",key:"name"},{title:"\u5e74\u9f84",dataIndex:"age",key:"age"},{title:"\u5730\u5740",dataIndex:"address",key:"address"}],m=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]},{key:"4",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"},{key:"5",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"},{key:"6",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",children:[{key:"6-1",name:"Joe Black12",age:32,address:"Sidney No. 1 Lake Park"}]},{key:"7",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"},{key:"8",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"},{key:"9",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"},{key:"10",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"},{key:"11",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"},{key:"12",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"}],b=[],v=0;v<100;v++)b.push({key:v.toString(),name:"Edrward ".concat(v),age:32,address:"London Park no-".concat(v)});function p(){return new Promise((e=>{setTimeout((()=>{e({data:m,total:m.length,success:!0})}),1e3)}))}var g=()=>{var e=Object(c["useRef"])(),t=Object(c["useRef"])(null),a=Object(c["useState"])({parentId:"0"}),m=Object(o["a"])(a,2),b=m[0],v=m[1],g=[i.a.createElement(s["r"],{key:"0",name:"input4",label:"\u8f93\u5165\u6846"}),i.a.createElement(s["r"],{key:"1",name:"input5",label:"\u8f93\u5165\u6846"}),i.a.createElement(s["r"],{key:"2",name:"input6",label:"\u8f93\u5165\u6846"}),i.a.createElement(s["r"],{key:"3",name:"input7",label:"\u8f93\u5165\u6846"}),i.a.createElement(s["r"],{key:"4",name:"input8",label:"\u8f93\u5165\u6846"})];return i.a.createElement(u["b"],{loading:{size:"large"},tableRef:t,requestParams:b,queryFormProps:{showColsNumber:3,isSpace:!1},toolbarLeft:i.a.createElement(i.a.Fragment,null,i.a.createElement(l["a"],{type:"primary",onClick:()=>{console.log(" tableRef",t)}},"\u65b0\u589e"),i.a.createElement(l["a"],{type:"primary"},"\u5bfc\u51fa")),formItems:g,formRef:e,columns:d,request:function(){var e=Object(r["a"])(Object(n["a"])().mark((function e(t,a){var r;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:return r=e.sent,e.abrupt("return",{success:!0,data:r.data,total:r.total});case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),expandable:{onExpand:function(){var e=Object(r["a"])(Object(n["a"])().mark((function e(a,r){return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=4;break}return e.next=3,v({parentId:Math.random().toString(16).slice(2)});case 3:t.current.onReload();case 4:case"end":return e.stop()}}),e)})));function a(t,a){return e.apply(this,arguments)}return a}()}})};t["default"]=g}}]);