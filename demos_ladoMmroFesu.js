(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{dsn1:function(e,a,t){"use strict";t.r(a);t("DYRE");var n=t("zeV3"),l=(t("+L6B"),t("2/Rp")),r=t("qLMh"),c=t("9og8"),u=t("tJVT"),m=t("q1tI"),o=t.n(m),s=t("zK1H"),i=(t("y8nQ"),t("Vl3Y")),p=(t("5NDa"),t("5rEg")),d=(t("OaEy"),t("2fM7")),E=d["a"].Option,b=(e,a)=>o.a.createElement(i["a"],{ref:a,name:"control-hooks"},o.a.createElement(i["a"].Item,{name:"name",label:"\u59d3\u540d",rules:[{required:!0}]},o.a.createElement(p["a"],null)),o.a.createElement(i["a"].Item,{name:"age",label:"\u5e74\u9f84",rules:[{required:!0}]},o.a.createElement(p["a"],null)),o.a.createElement(i["a"].Item,{name:"sex",label:"\u6027\u522b",rules:[{required:!0}]},o.a.createElement(d["a"],{placeholder:"Select a option and change input text above",allowClear:!0},o.a.createElement(E,{value:"nan"},"\u7537"),o.a.createElement(E,{value:"nv"},"\u5973"))),o.a.createElement(i["a"].Item,{noStyle:!0,shouldUpdate:(e,a)=>e.sex!==a.sex},(e=>{var a=e.getFieldValue;return"nan"===a("sex")?o.a.createElement(i["a"].Item,{name:"desc",label:"\u63cf\u8ff0",rules:[{required:!0}]},o.a.createElement(p["a"],null)):null}))),g=b,v=()=>{var e=Object(m["useState"])({}),a=Object(u["a"])(e,2),t=a[0],i=a[1],p=Object(s["O"])(g,{title:null!==t&&void 0!==t&&t.id?"\u7f16\u8f91":"\u65b0\u589e",isDraggable:!0}),d=p.onOpen,E=p.FormModal,b=p.onClose,v=function(){var e=Object(c["a"])(Object(r["a"])().mark((function e(a,t){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log(a,t),b();case 2:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement(n["b"],null,o.a.createElement(l["a"],{type:"primary",onClick:()=>{d(),i({})}},"\u65b0\u589e"),o.a.createElement(l["a"],{type:"primary",onClick:()=>{d(),i({id:"1",age:"25",name:"\u674e\u5c9a\u6e05",sex:"nan",desc:"\u770b\u89c1\u53e6\u4e00\u79cd\u53ef\u80fd"})}},"\u7f16\u8f91")),o.a.createElement(E,{submit:v,formValues:t}))};a["default"]=v}}]);