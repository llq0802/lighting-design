(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{BN53:function(e,a,t){"use strict";t.r(a);var n=t("tJVT"),r=t("q1tI"),l=t.n(r),o=t("zK1H"),u=t("D+je"),m=(t("Q9Ik"),()=>{var e=o["j"].useForm(),a=Object(n["a"])(e,1),t=a[0];return l.a.createElement(o["j"],{name:"LFormItemUpload",labelWidth:90,submitter:{buttonAlign:90},form:t,onFinish:e=>{console.log("values",e)}},l.a.createElement(o["E"],{name:"default",label:"\u9ed8\u8ba4\u4e0a\u4f20",accept:".jpg, .jpeg",onUpload:u["a"],buttonProps:{type:"primary"},uploadProps:{name:"fileName"}}),l.a.createElement(o["E"],{required:!0,onUpload:u["a"],uploadType:"avatar",name:"avatar",label:"\u5934\u50cf\u4e0a\u4f20",uploadProps:{className:"my-avatar2",name:"fileName"}}),l.a.createElement(o["E"],{name:"image",label:"\u56fe\u7247\u4e0a\u4f20",uploadType:"image",onUpload:u["a"],uploadProps:{name:"fileName"}}))});a["default"]=m},"D+je":function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var n=t("qLMh"),r=t("9og8"),l="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return new Promise((a=>{setTimeout((()=>{a(l)}),e)}))},u=function(){var e=Object(r["a"])(Object(n["a"])().mark((function e(a){var t;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("file ",a),e.next=3,o();case 3:return t=e.sent,e.abrupt("return",{url:t});case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},Q9Ik:function(e,a,t){},ssnw:function(e,a,t){"use strict";t.r(a);var n=t("tJVT"),r=t("q1tI"),l=t.n(r),o=t("zK1H"),u=t("D+je"),m=()=>{var e=o["j"].useForm(),a=Object(n["a"])(e,1),t=a[0];return l.a.createElement(o["j"],{name:"LFormItemUpload",labelWidth:90,submitter:{buttonAlign:90},form:t,onFinish:e=>{console.log("values",e)}},l.a.createElement(o["E"],{required:!0,name:"default",label:"\u9ed8\u8ba4\u4e0a\u4f20",accept:".jpg, .jpeg",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",uploadProps:{name:"fileName"}}),l.a.createElement(o["E"],{required:!0,onUpload:u["a"],uploadType:"avatar",name:"avatar",label:"\u5934\u50cf\u4e0a\u4f20",uploadProps:{className:"my-avatar",name:"fileName"}}),l.a.createElement(o["E"],{required:!0,name:"image",label:"\u56fe\u7247\u4e0a\u4f20",uploadType:"image",onUpload:u["a"],initialValue:[{name:"meinv",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}],uploadProps:{name:"fileName"}}),l.a.createElement(o["E"],{required:!0,uploadType:"dragger",name:"dragger",label:"\u62d6\u52a8\u4e0a\u4f20",uploadProps:{name:"fileName"}}))};a["default"]=m}}]);