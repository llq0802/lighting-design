(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{"02p+":function(e,t,a){"use strict";a.r(t);var l=a("qLMh"),n=a("9og8"),r=a("tJVT"),s=a("q1tI"),c=a.n(s),u=a("ye1Q"),o=a("zK1H"),i=a("7Ci8"),b=()=>{var e=o["k"].useForm(),t=Object(r["a"])(e,1),a=t[0];return c.a.createElement(o["k"],{name:"LFormItemSelect2",form:a,labelWidth:80,submitter:{buttonAlign:80}},c.a.createElement(o["z"],{label:"select1",name:"select1",required:!0,request:Object(n["a"])(Object(l["a"])().mark((function e(){var t;return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["a"])([{label:"Unresolved",value:"open"},{label:"Resolved",value:"closed"},{label:"Resolving",value:"processing"}]);case 2:if(t=e.sent,!t.success){e.next=5;break}return e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})))}),c.a.createElement(o["z"],{label:"select2",name:"select2",required:!0,spin:{indicator:c.a.createElement(u["a"],{style:{fontSize:24},spin:!0})},request:Object(n["a"])(Object(l["a"])().mark((function e(){var t;return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["a"])([{label:"Unresolved",value:"open"},{label:"Resolved",value:"closed"},{label:"Resolving",value:"processing"}],3e3);case 2:if(t=e.sent,!t.success){e.next=5;break}return e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)}))),all:!0}))};t["default"]=b},"7Ci8":function(e,t,a){"use strict";function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3;return new Promise((a=>{setTimeout((()=>{a({data:e,success:!0,code:"200"})}),t)}))}a.d(t,"a",(function(){return l}))},X2NL:function(e,t,a){"use strict";a.r(t);var l=a("tJVT"),n=a("q1tI"),r=a.n(n),s=a("zK1H"),c=()=>{var e=s["k"].useForm(),t=Object(l["a"])(e,1),a=t[0];return r.a.createElement(s["k"],{name:"LFormItemSelect1",form:a,labelWidth:90,submitter:{buttonAlign:"center"}},r.a.createElement(s["z"],{label:"select1",name:"select1",required:!0,options:[{label:"Unresolved",value:"open"},{label:"Resolved",value:"closed"},{label:"Resolving",value:"processing"}]}),r.a.createElement(s["z"],{label:"select2",name:"select2",required:!0,all:!0,options:[{label:"Unresolved",value:"open"},{label:"Resolved",value:"closed"},{label:"Resolving",value:"processing"}]}))};t["default"]=c},qyIg:function(e,t,a){"use strict";a.r(t);var l=a("qLMh"),n=a("9og8"),r=a("tJVT"),s=a("q1tI"),c=a.n(s),u=a("ye1Q"),o=a("zK1H"),i=a("7Ci8"),b=()=>{var e=o["k"].useForm(),t=Object(r["a"])(e,1),a=t[0];return c.a.createElement(o["k"],{name:"LFormItemSelect3",form:a,labelCol:{flex:"80px"},submitter:{buttonAlign:80}},c.a.createElement(o["z"],{label:"select1",name:"select1",required:!0,options:[{label:"A",value:"a"},{label:"B",value:"b"},{label:"C",value:"c"}]}),c.a.createElement(o["z"],{dependencies:["select1"],label:"select2",name:"select2",required:!0,spin:{indicator:c.a.createElement(u["a"],{style:{fontSize:24},spin:!0})},request:function(){var e=Object(n["a"])(Object(l["a"])().mark((function e(t){var a,n;return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("select1 ",t),a=[],"a"===t&&(a=[{label:"A",value:"a"}]),"b"===t&&(a=[{label:"B",value:"b"}]),"c"===t&&(a=[{label:"C",value:"c"}]),e.next=7,Object(i["a"])(a);case 7:if(n=e.sent,!n.success){e.next=10;break}return e.abrupt("return",n.data);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}))};t["default"]=b}}]);