(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{"/0+/":function(e,a,t){"use strict";t.r(a);t("+L6B");var l=t("2/Rp"),n=(t("y8nQ"),t("Vl3Y")),o=t("tJVT"),r=t("q1tI"),d=t.n(r),i=t("zK1H"),c=()=>{var e=n["a"].useForm(),a=Object(o["a"])(e,1),t=a[0],c=Object(r["useState"])([{id:1,pId:0,value:"1",title:"Expand to load"},{id:2,pId:0,value:"2",title:"Expand to load"},{id:3,pId:0,value:"3",title:"Tree Node",isLeaf:!0}]),s=Object(o["a"])(c,2),u=s[0],m=s[1],p=function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=Math.random().toString(36).substring(2,6);return{id:t,pId:e,value:t,title:a?"Tree Node":"Expand to load",isLeaf:a}},v=e=>{var a=e.id;return new Promise((e=>{setTimeout((()=>{m(u.concat([p(a,!1),p(a,!0),p(a,!0)])),e(void 0)}),300)}))};return d.a.createElement(n["a"],{name:"LFormItemSelect",form:t},d.a.createElement(i["x"],{label:"select\u9009\u62e9",name:"select",all:!0,required:!0,options:[{label:"A",value:"a"},{label:"B",value:"b"},{label:"C",value:"c"}]}),d.a.createElement(i["C"],{label:"\u6811\u5f62\u9009\u62e9",name:"tree",required:!0,dependencies:["select"],treeData:u,treeCheckable:!0,treeSelectProps:{treeDataSimpleMode:!0,loadData:v}}),d.a.createElement(l["a"],{onClick:()=>{t.validateFields().then((e=>{console.log(" res ",e)}))}},"\u9a8c\u8bc1"),d.a.createElement(l["a"],{onClick:()=>{console.log(" form.getFieldsValue()  ",t.getFieldsValue())}},"\u83b7\u53d6"))};a["default"]=c}}]);