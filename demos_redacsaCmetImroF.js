(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{yZKC:function(e,a,l){"use strict";l.r(a);l("+L6B");var n=l("2/Rp"),t=l("qLMh"),r=l("9og8"),c=(l("y8nQ"),l("Vl3Y")),u=l("tJVT"),i=l("q1tI"),o=l.n(i),s=l("zK1H"),b=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],h=()=>{var e=c["a"].useForm(),a=Object(u["a"])(e,1),l=a[0],h=Object(i["useState"])([]),d=Object(u["a"])(h,2),m=(d[0],d[1]);return o.a.createElement(c["a"],{name:"LFormItemSelect",form:l},o.a.createElement(s["r"],{label:"select\u9009\u62e9",name:"select",all:!0,required:!0,options:[{label:"A",value:"a"},{label:"B",value:"b"},{label:"C",value:"c"}]}),o.a.createElement(s["k"],{label:"\u7ea7\u8054\u9009\u62e9",name:"cascader",required:!0,dependencies:["select"],debounceTime:300,request:function(){var e=Object(r["a"])(Object(t["a"])().mark((function e(a){return Object(t["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("request-params",a),e.abrupt("return",b);case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}),o.a.createElement(n["a"],{onClick:()=>{l.validateFields().then((e=>{console.log(" res ",e)}))}},"\u9a8c\u8bc1"),o.a.createElement(n["a"],{onClick:()=>{console.log(" form.getFieldsValue()  ",l.getFieldsValue())}},"\u83b7\u53d6"),o.a.createElement(n["a"],{onClick:()=>{m([])}},"\u5f3a\u5236\u66f4\u65b0"))};a["default"]=h}}]);