(self["webpackChunklignting_design"]=self["webpackChunklignting_design"]||[]).push([[3541],{79795:function(e,t,l){"use strict";l.r(t);var a=l(2824),n=l(67294),r=l(85486),u=function(){var e=r.a0.useForm(),t=(0,a.Z)(e,1),l=t[0];return n.createElement(r.a0,{name:"LFormItemSelect",form:l},n.createElement(r.bd,{name:"select",required:!0,options:[{label:"\u4e0a\u73ed",value:"1"},{label:"\u7761\u89c9",value:"2"},{label:"\u6253\u8c46\u8c46",value:"3"}],initialValue:["1","2"]}))};t["default"]=u},85719:function(e,t,l){"use strict";l.r(t);var a=l(2824),n=l(67294),r=l(85486),u=function(){var e=r.a0.useForm(),t=(0,a.Z)(e,1),l=t[0];return n.createElement(r.a0,{form:l,onFinish:function(e){console.log("values",e)}},n.createElement(r.bd,{label:"\u9009\u62e91",name:"select",beforeAll:{label:"\u5168\u90e8",value:"all",onChange:function(e){console.log(e)}},required:!0,options:[{label:"\u4e0a\u73ed",value:"1"},{label:"\u7761\u89c9",value:"2"},{label:"\u6253\u8c46\u8c46",value:"3"}],checkboxProps:{onChange:function(e){console.log(e)}}}),n.createElement(r.bd,{label:"\u9009\u62e92",name:"select2",beforeAll:!0,required:!0,options:[{label:"\u4e0a\u73ed",value:"1"},{label:"\u7761\u89c9",value:"2"},{label:"\u6253\u8c46\u8c46",value:"3"}]}))};t["default"]=u},47737:function(e,t,l){"use strict";l.r(t);var a=l(2824),n=l(67294),r=l(85486),u=function(){var e=r.a0.useForm(),t=(0,a.Z)(e,1),l=t[0];return n.createElement(r.a0,{form:l},n.createElement(r.bd,{disabled:!0,label:"\u591a\u9009",name:"select",options:[{label:"\u4e0a\u73ed",value:"1"},{label:"\u7761\u89c9",value:"2"},{label:"\u6253\u8c46\u8c46",value:"3"}]}))};t["default"]=u},94358:function(e,t,l){"use strict";l.r(t);var a=l(7085),n=l(90636),r=l(3182),u=l(2824),c=l(67294),s=l(85486),i=l(93343),o=function(){var e=s.a0.useForm(),t=(0,u.Z)(e,1),l=t[0];return c.createElement(s.a0,{form:l,labelCol:{flex:"80px"},submitter:{buttonAlign:80},initialValues:["3"]},c.createElement(s.bd,{label:"\u591a\u90091",name:"checkbox1",request:(0,r.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,i.N)([{label:"\u4e0a\u73ed",value:"1"},{label:"\u7761\u89c9",value:"2"},{label:"\u6253\u8c46\u8c46",value:"3",disabled:!0}]);case 2:if(t=e.sent,!t.success){e.next=5;break}return e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})))}),c.createElement(s.bd,{label:"\u591a\u90092",spin:{indicator:c.createElement(a.Z,{style:{fontSize:24},spin:!0})},name:"checkbox2",request:(0,r.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,i.N)([{label:"\u4e0a\u73ed",value:"1"},{label:"\u7761\u89c9",value:"2"},{label:"\u6253\u8c46\u8c46",value:"3"}]);case 2:if(t=e.sent,!t.success){e.next=5;break}return e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})))}))};t["default"]=o},68513:function(e,t,l){"use strict";l.r(t);var a=l(90636),n=l(3182),r=l(7085),u=l(2824),c=l(67294),s=l(85486),i=l(93343),o=function(){var e=s.a0.useForm(),t=(0,u.Z)(e,1),l=t[0];return c.createElement(s.a0,{name:"LFormItemSelect3",form:l,labelCol:{flex:"80px"},submitter:{buttonAlign:80}},c.createElement(s.up,{label:"select1",name:"select1",required:!0,options:[{label:"A",value:"a"},{label:"B",value:"b"},{label:"C",value:"c"}]}),c.createElement(s.bd,{dependencies:["select1"],label:"select2",name:"select2",required:!0,spin:{indicator:c.createElement(r.Z,{style:{fontSize:24},spin:!0})},notDependRender:function(){return c.createElement("span",null,"\u8bf7\u5148\u9009\u62e9select1")},request:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var l,n;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("select1 ",t),l=[],"a"===t&&(l=[{label:"A",value:"a"}]),"b"===t&&(l=[{label:"B",value:"b"}]),"c"===t&&(l=[{label:"C",value:"c"}]),e.next=7,(0,i.N)(l);case 7:if(n=e.sent,!n.success){e.next=10;break}return e.abrupt("return",n.data);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}))};t["default"]=o},93343:function(e,t,l){"use strict";function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3;return new Promise((function(l){setTimeout((function(){l({data:e,success:!0,code:"200"})}),t)}))}l.d(t,{N:function(){return a}})}}]);