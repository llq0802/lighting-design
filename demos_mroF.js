(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"40Hq":function(e,a,t){"use strict";t.d(a,"a",(function(){return o})),t.d(a,"b",(function(){return i})),t.d(a,"c",(function(){return c}));var r=t("qLMh"),l=t("9og8"),n=t("7Ci8"),o=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],i=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return{value:e.repeat(a),label:e.repeat(a)}},m="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",c=function(){var e=Object(l["a"])(Object(r["a"])().mark((function e(){var a,t;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(n["a"])(m);case 2:return a=e.sent,t=a.data,e.abrupt("return",{url:t});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},"7Ci8":function(e,a,t){"use strict";function r(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3;return new Promise((t=>{setTimeout((()=>{t({data:e,success:!0,code:"200"})}),a)}))}t.d(a,"a",(function(){return r}))},"9lTk":function(e,a,t){"use strict";t.r(a);var r=t("qLMh"),l=t("9og8"),n=t("tJVT"),o=t("q1tI"),i=t.n(o),m=t("zK1H"),c=t("40Hq"),u=()=>{var e=m["j"].useForm(),a=Object(n["a"])(e,1),t=a[0],u=Object(o["useState"])([]),s=Object(n["a"])(u,2),d=s[0],b=s[1],p=Object(o["useState"])([{id:1,pId:0,value:"1",title:"Expand to load"},{id:2,pId:0,value:"2",title:"Expand to load"},{id:3,pId:0,value:"3",title:"Tree Node",isLeaf:!0}]),v=Object(n["a"])(p,2),E=v[0],h=v[1],f=function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=Math.random().toString(36).substring(2,6);return{id:t,pId:e,value:t,title:a?"Tree Node":"Expand to load",isLeaf:a}},j=e=>{var a=e.id;return new Promise((e=>{setTimeout((()=>{h(E.concat([f(a,!1),f(a,!0),f(a,!0)])),e(void 0)}),300)}))};return i.a.createElement(m["j"],{disabled:!0,labelWidth:90,submitter:{buttonAlign:90},name:"lform-demo",form:t,onFinish:function(){var e=Object(l["a"])(Object(r["a"])().mark((function e(a){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("onFinish-values ",a);case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},i.a.createElement(m["s"],{name:"LFormItemInput",required:!0,label:"\u8f93\u5165\u68461",tooltip:"\u7981\u6b62\u8f93\u5165\u7a7a\u683c"}),i.a.createElement(m["t"],{name:"LFormItemNumber",required:!0,label:"\u8f93\u5165\u68462",contentAfter:i.a.createElement("div",null,"$")}),i.a.createElement(m["u"],{name:"LFormItemPassword",required:!0,label:"\u5bc6\u7801\u6846"}),i.a.createElement(m["B"],{name:"LFormItemTextArea",required:!0,label:"\u5907\u6ce8"}),i.a.createElement(m["n"],{name:"LFormItemCaptcha",required:!0,label:"\u9a8c\u8bc1\u7801",type:"inline"}),i.a.createElement(m["m"],{name:"LFormItemAutoComplete",required:!0,label:"\u81ea\u52a8\u8054\u60f3",options:d,onSearch:e=>b(e?[Object(c["b"])(e,1),Object(c["b"])(e,2),Object(c["b"])(e,3)]:[])}),i.a.createElement(m["y"],{label:"\u4e0b\u62c9\u9009\u62e9",name:"LFormItemSelect",all:!0,required:!0,options:[{label:"A",value:"a"},{label:"B",value:"b"},{label:"C",value:"c"}]}),i.a.createElement(m["D"],{label:"\u6811\u5f62\u9009\u62e9",name:"LFormItemTreeSelect",required:!0,treeData:E,loadData:j,treeCheckable:!0,treeSelectProps:{treeDataSimpleMode:!0}}),i.a.createElement(m["o"],{label:"\u7ea7\u8054\u9009\u62e9",name:"cascader",required:!0,options:c["a"]}),i.a.createElement(m["l"],{label:"\u5730\u5740\u9009\u62e9",names:["location","address"],required:!0,options:c["a"]}),i.a.createElement(m["r"],{label:"\u65e5\u671f\u9009\u62e9",name:"LFormItemDatePicker1",required:!0,disabledDateBefore:1}),i.a.createElement(m["r"],{label:"\u8303\u56f4\u9009\u62e9",name:"LFormItemDatePicker2",required:!0,disabledDateAfter:1,rangePicker:!0}),i.a.createElement(m["C"],{label:"\u65f6\u95f4\u9009\u62e9",name:"LFormItemTimePicker1",required:!0}),i.a.createElement(m["C"],{label:"\u8303\u56f4\u9009\u62e9",name:"LFormItemTimePicker2",required:!0,rangePicker:!0}),i.a.createElement(m["z"],{name:"LFormItemSlider",label:"\u6ed1\u5757\u9009\u62e9",required:!0,contentAfter:i.a.createElement("div",null,"\u540e\u9762")}),i.a.createElement(m["x"],{label:"\u5206\u6bb5\u5668",required:!0,name:"LFormItemSegmented",options:[{label:"List",value:"List"},{label:"Kanban",value:"Kanban"},{label:"item",value:"item"}]}),i.a.createElement(m["p"],{label:"\u591a\u9009\u6846",name:"LFormItemCheckbox",beforeAll:!0,required:!0,options:[{label:"\u4e0a\u73ed",value:"1"},{label:"\u7761\u89c9",value:"2"},{label:"\u6253\u8c46\u8c46",value:"3"}]}),i.a.createElement(m["v"],{label:"\u5355\u9009\u6846",name:"LFormItemRadio",all:!0,required:!0,options:[{label:"Unresolved",value:"Unresolved"},{label:"Resolved",value:"Resolved"},{label:"Resolving",value:"Resolving"}]}),i.a.createElement(m["E"],{name:"LFormItemUpload1",label:"\u9ed8\u8ba4\u4e0a\u4f20",accept:".jpg, .jpeg",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",required:!0}),i.a.createElement(m["w"],{label:"\u8bc4\u5206",name:"LFormItemRate",initialValue:3,required:!0}),i.a.createElement(m["q"],{name:"LFormItemColor",colorType:"chrome",label:"\u989c\u8272\u9009\u62e9",required:!0}),i.a.createElement(m["A"],{name:"LFormItemSwitch",label:"\u5f00\u5173",tooltip:"\u5f00\u5173\u6309\u94ae"}),i.a.createElement(m["E"],{name:"LFormItemUpload2",required:!0,onUpload:c["c"],uploadType:"avatar",label:"\u5934\u50cf\u4e0a\u4f20"}),i.a.createElement(m["E"],{name:"LFormItemUpload3",label:"\u56fe\u7247\u4e0a\u4f20",required:!0,uploadType:"image",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",initialValue:[{name:"meinv",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}]}),i.a.createElement(m["E"],{required:!0,uploadType:"dragger",name:"LFormItemUpload4",label:"\u62d6\u52a8\u4e0a\u4f20",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76"}))};a["default"]=u},F0dD:function(e,a,t){"use strict";t.r(a);var r=t("qLMh"),l=t("9og8"),n=t("tJVT"),o=t("q1tI"),i=t.n(o),m=t("zK1H"),c=()=>{var e=m["j"].useForm(),a=Object(n["a"])(e,1),t=a[0],c=Object(o["useState"])({name:"\u5f20\u4e09"}),u=Object(n["a"])(c,2),s=u[0],d=u[1],b=Object(o["useState"])(!1),p=Object(n["a"])(b,2),v=p[0],E=p[1];return Object(o["useEffect"])((()=>{E(!0),d({name:"\u674e\u56db"})}),[]),i.a.createElement(m["j"],{isReady:v,labelWrap:!0,labelCol:{flex:"90px"},submitter:{buttonAlign:90},name:"LForm-InitialValues",initialValues:s,form:t,onFinish:function(){var e=Object(l["a"])(Object(r["a"])().mark((function e(a){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("onFinish-values ",a);case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},i.a.createElement(m["s"],{name:"name",required:!0,label:"\u59d3\u540d\u59d3\u540d\u59d3\u540d\u59d3\u540d"}))};a["default"]=c},Kzjw:function(e,a,t){"use strict";t.r(a);var r=t("qLMh"),l=t("9og8"),n=(t("DYRE"),t("zeV3")),o=(t("+L6B"),t("2/Rp")),i=t("tJVT"),m=t("q1tI"),c=t.n(m),u=t("zK1H"),s=()=>{var e=u["j"].useForm(),a=Object(i["a"])(e,1),t=a[0];return c.a.createElement(c.a.Fragment,null,c.a.createElement(u["j"],{labelWidth:90,submitter:{buttonAlign:90,showReset:!1,render(e){return c.a.createElement(n["b"],null,c.a.createElement(o["a"],null,"\u8fd4\u56de"),e)}},name:"LForm-transformValues",form:t,onFinish:function(){var e=Object(l["a"])(Object(r["a"])().mark((function e(a){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("onFinish-values ",a);case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},c.a.createElement(u["s"],{name:"name",required:!0,label:"\u59d3\u540d"})))};a["default"]=s},ibL1:function(e,a,t){"use strict";t.r(a);var r=t("qLMh"),l=t("9og8"),n=t("tJVT"),o=t("q1tI"),i=t.n(o),m=t("zK1H"),c=t("40Hq"),u=()=>{var e=m["j"].useForm(),a=Object(n["a"])(e,1),t=a[0],u=Object(o["useState"])([]),s=Object(n["a"])(u,2),d=s[0],b=s[1],p=Object(o["useState"])([{id:1,pId:0,value:"1",title:"Expand to load"},{id:2,pId:0,value:"2",title:"Expand to load"},{id:3,pId:0,value:"3",title:"Tree Node",isLeaf:!0}]),v=Object(n["a"])(p,2),E=v[0],h=v[1],f=function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=Math.random().toString(36).substring(2,6);return{id:t,pId:e,value:t,title:a?"Tree Node":"Expand to load",isLeaf:a}},j=e=>{var a=e.id;return new Promise((e=>{setTimeout((()=>{h(E.concat([f(a,!1),f(a,!0),f(a,!0)])),e(void 0)}),300)}))};return i.a.createElement(m["j"],{labelWidth:90,submitter:{buttonAlign:90},name:"lform-demo",form:t,onFinish:function(){var e=Object(l["a"])(Object(r["a"])().mark((function e(a){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("onFinish-values ",a);case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},i.a.createElement(m["s"],{name:"LFormItemInput",required:!0,label:"\u8f93\u5165\u68461",tooltip:"\u7981\u6b62\u8f93\u5165\u7a7a\u683c"}),i.a.createElement(m["t"],{name:"LFormItemNumber",required:!0,label:"\u8f93\u5165\u68462",contentAfter:i.a.createElement("div",null,"$")}),i.a.createElement(m["u"],{name:"LFormItemPassword",required:!0,label:"\u5bc6\u7801\u6846"}),i.a.createElement(m["B"],{name:"LFormItemTextArea",required:!0,label:"\u5907\u6ce8"}),i.a.createElement(m["n"],{name:"LFormItemCaptcha",required:!0,label:"\u9a8c\u8bc1\u7801",type:"inline"}),i.a.createElement(m["m"],{name:"LFormItemAutoComplete",required:!0,label:"\u81ea\u52a8\u8054\u60f3",options:d,onSearch:e=>b(e?[Object(c["b"])(e,1),Object(c["b"])(e,2),Object(c["b"])(e,3)]:[])}),i.a.createElement(m["y"],{label:"\u4e0b\u62c9\u9009\u62e9",name:"LFormItemSelect",all:!0,required:!0,options:[{label:"A",value:"a"},{label:"B",value:"b"},{label:"C",value:"c"}]}),i.a.createElement(m["D"],{label:"\u6811\u5f62\u9009\u62e9",name:"LFormItemTreeSelect",required:!0,treeData:E,loadData:j,treeCheckable:!0,treeSelectProps:{treeDataSimpleMode:!0}}),i.a.createElement(m["o"],{label:"\u7ea7\u8054\u9009\u62e9",name:"cascader",required:!0,options:c["a"]}),i.a.createElement(m["l"],{label:"\u5730\u5740\u9009\u62e9",names:["location","address"],required:!0,options:c["a"]}),i.a.createElement(m["r"],{label:"\u65e5\u671f\u9009\u62e9",name:"LFormItemDatePicker1",required:!0,disabledDateBefore:1}),i.a.createElement(m["r"],{label:"\u8303\u56f4\u9009\u62e9",name:"LFormItemDatePicker2",required:!0,disabledDateAfter:1,rangePicker:!0}),i.a.createElement(m["C"],{label:"\u65f6\u95f4\u9009\u62e9",name:"LFormItemTimePicker1",required:!0}),i.a.createElement(m["C"],{label:"\u8303\u56f4\u9009\u62e9",name:"LFormItemTimePicker2",required:!0,rangePicker:!0}),i.a.createElement(m["z"],{name:"LFormItemSlider",label:"\u6ed1\u5757\u9009\u62e9",required:!0,contentAfter:i.a.createElement("div",null,"\u540e\u9762")}),i.a.createElement(m["x"],{label:"\u5206\u6bb5\u5668",required:!0,name:"LFormItemSegmented",options:[{label:"List",value:"List"},{label:"Kanban",value:"Kanban"},{label:"item",value:"item"}]}),i.a.createElement(m["p"],{label:"\u591a\u9009\u6846",name:"LFormItemCheckbox",beforeAll:!0,required:!0,options:[{label:"\u4e0a\u73ed",value:"1"},{label:"\u7761\u89c9",value:"2"},{label:"\u6253\u8c46\u8c46",value:"3"}]}),i.a.createElement(m["v"],{label:"\u5355\u9009\u6846",name:"LFormItemRadio",all:!0,required:!0,options:[{label:"Unresolved",value:"Unresolved"},{label:"Resolved",value:"Resolved"},{label:"Resolving",value:"Resolving"}]}),i.a.createElement(m["E"],{name:"LFormItemUpload1",label:"\u9ed8\u8ba4\u4e0a\u4f20",accept:".jpg, .jpeg",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",required:!0}),i.a.createElement(m["w"],{label:"\u8bc4\u5206",name:"LFormItemRate",initialValue:3,required:!0}),i.a.createElement(m["q"],{name:"LFormItemColor",colorType:"chrome",label:"\u989c\u8272\u9009\u62e9",required:!0}),i.a.createElement(m["A"],{name:"LFormItemSwitch",label:"\u5f00\u5173",tooltip:"\u5f00\u5173\u6309\u94ae"}),i.a.createElement(m["E"],{name:"LFormItemUpload2",required:!0,onUpload:c["c"],uploadType:"avatar",label:"\u5934\u50cf\u4e0a\u4f20"}),i.a.createElement(m["E"],{name:"LFormItemUpload3",label:"\u56fe\u7247\u4e0a\u4f20",required:!0,uploadType:"image",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",initialValue:[{name:"meinv",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}]}),i.a.createElement(m["E"],{required:!0,uploadType:"dragger",name:"LFormItemUpload4",label:"\u62d6\u52a8\u4e0a\u4f20",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76"}))};a["default"]=u},"p/IE":function(e,a,t){"use strict";t.r(a);var r=t("k1fw"),l=t("PpiC"),n=t("qLMh"),o=t("9og8"),i=t("tJVT"),m=t("q1tI"),c=t.n(m),u=t("zK1H"),s=["dates"],d=()=>{var e=u["j"].useForm(),a=Object(i["a"])(e,1),t=a[0];return c.a.createElement(c.a.Fragment,null,c.a.createElement(u["j"],{labelWidth:90,submitter:{buttonAlign:90},name:"LForm-transformValues",form:t,onFinish:function(){var e=Object(o["a"])(Object(n["a"])().mark((function e(a){return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("onFinish-values ",a);case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),transformValues:e=>{e.dates;var a=Object(l["a"])(e,s),t=Object(r["a"])(Object(r["a"])({},a),{},{startDate:e.dates[0],endDate:e.dates[1]});return t}},c.a.createElement(u["s"],{name:"name",required:!0,label:"\u59d3\u540d"}),c.a.createElement(u["r"],{label:"\u65e5\u671f\u9009\u62e9",name:"dates",required:!0,rangePicker:!0})))};a["default"]=d}}]);