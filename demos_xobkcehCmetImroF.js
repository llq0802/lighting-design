(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[39],{"70Xi":function(e,a,t){"use strict";t.r(a);var l=t("tJVT"),n=t("q1tI"),r=t.n(n),c=t("zK1H"),u=()=>{var e=c["k"].useForm(),a=Object(l["a"])(e,1),t=a[0];return r.a.createElement(c["k"],{form:t,onFinish:e=>{console.log("values",e)}},r.a.createElement(c["q"],{label:"\u9009\u62e91",name:"select",beforeAll:{label:"\u5168\u90e8",value:"all",onChange(e){console.log(e)}},required:!0,options:[{label:"\u4e0a\u73ed",value:"1"},{label:"\u7761\u89c9",value:"2"},{label:"\u6253\u8c46\u8c46",value:"3"}],checkboxProps:{onChange(e){console.log(e)}}}),r.a.createElement(c["q"],{label:"\u9009\u62e92",name:"select2",beforeAll:!0,required:!0,options:[{label:"\u4e0a\u73ed",value:"1"},{label:"\u7761\u89c9",value:"2"},{label:"\u6253\u8c46\u8c46",value:"3"}]}))};a["default"]=u},"7Ci8":function(e,a,t){"use strict";function l(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3;return new Promise((t=>{setTimeout((()=>{t({data:e,success:!0,code:"200"})}),a)}))}t.d(a,"a",(function(){return l}))},KNpi:function(e,a,t){"use strict";t.r(a);var l=t("qLMh"),n=t("9og8"),r=t("tJVT"),c=t("q1tI"),u=t.n(c),s=t("ye1Q"),o=t("zK1H"),i=t("7Ci8"),b=()=>{var e=o["k"].useForm(),a=Object(r["a"])(e,1),t=a[0];return u.a.createElement(o["k"],{form:t,labelCol:{flex:"80px"},submitter:{buttonAlign:80},initialValues:["3"]},u.a.createElement(o["q"],{label:"\u591a\u90091",name:"checkbox1",request:Object(n["a"])(Object(l["a"])().mark((function e(){var a;return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["a"])([{label:"\u4e0a\u73ed",value:"1"},{label:"\u7761\u89c9",value:"2"},{label:"\u6253\u8c46\u8c46",value:"3",disabled:!0}]);case 2:if(a=e.sent,!a.success){e.next=5;break}return e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))}),u.a.createElement(o["q"],{label:"\u591a\u90092",spin:{indicator:u.a.createElement(s["a"],{style:{fontSize:24},spin:!0})},name:"checkbox2",request:Object(n["a"])(Object(l["a"])().mark((function e(){var a;return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["a"])([{label:"\u4e0a\u73ed",value:"1"},{label:"\u7761\u89c9",value:"2"},{label:"\u6253\u8c46\u8c46",value:"3"}]);case 2:if(a=e.sent,!a.success){e.next=5;break}return e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))}))};a["default"]=b},LfHI:function(e,a,t){"use strict";t.r(a);var l=t("qLMh"),n=t("9og8"),r=t("tJVT"),c=t("q1tI"),u=t.n(c),s=t("ye1Q"),o=t("zK1H"),i=t("7Ci8"),b=()=>{var e=o["k"].useForm(),a=Object(r["a"])(e,1),t=a[0];return u.a.createElement(o["k"],{name:"LFormItemSelect3",form:t,labelCol:{flex:"80px"},submitter:{buttonAlign:80}},u.a.createElement(o["z"],{label:"select1",name:"select1",required:!0,options:[{label:"A",value:"a"},{label:"B",value:"b"},{label:"C",value:"c"}]}),u.a.createElement(o["q"],{dependencies:["select1"],label:"select2",name:"select2",required:!0,spin:{indicator:u.a.createElement(s["a"],{style:{fontSize:24},spin:!0})},notDependRender:()=>u.a.createElement("span",null,"\u8bf7\u5148\u9009\u62e9select1"),request:function(){var e=Object(n["a"])(Object(l["a"])().mark((function e(a){var t,n;return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("select1 ",a),t=[],"a"===a&&(t=[{label:"A",value:"a"}]),"b"===a&&(t=[{label:"B",value:"b"}]),"c"===a&&(t=[{label:"C",value:"c"}]),e.next=7,Object(i["a"])(t);case 7:if(n=e.sent,!n.success){e.next=10;break}return e.abrupt("return",n.data);case 10:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}))};a["default"]=b},SKBJ:function(e,a,t){"use strict";t.r(a);var l=t("tJVT"),n=t("q1tI"),r=t.n(n),c=t("zK1H"),u=()=>{var e=c["k"].useForm(),a=Object(l["a"])(e,1),t=a[0];return r.a.createElement(c["k"],{name:"LFormItemSelect",form:t},r.a.createElement(c["q"],{name:"select",required:!0,options:[{label:"\u4e0a\u73ed",value:"1"},{label:"\u7761\u89c9",value:"2"},{label:"\u6253\u8c46\u8c46",value:"3"}],initialValue:["1","2"]}))};a["default"]=u},hmrN:function(e,a,t){"use strict";t.r(a);var l=t("tJVT"),n=t("q1tI"),r=t.n(n),c=t("zK1H"),u=()=>{var e=c["k"].useForm(),a=Object(l["a"])(e,1),t=a[0];return r.a.createElement(c["k"],{form:t},r.a.createElement(c["q"],{disabled:!0,label:"\u591a\u9009",name:"select",options:[{label:"\u4e0a\u73ed",value:"1"},{label:"\u7761\u89c9",value:"2"},{label:"\u6253\u8c46\u8c46",value:"3"}]}))};a["default"]=u}}]);