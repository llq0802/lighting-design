(self["webpackChunklignting_design"]=self["webpackChunklignting_design"]||[]).push([[1471],{41193:function(e,n,t){"use strict";t.r(n);var r=t(2824),a=t(67294),l=t(85486),s=function(){var e=l.a0.useForm(),n=(0,r.Z)(e,1),t=n[0];return a.createElement(l.a0,{name:"LFormItemSelect",form:t},a.createElement(l.g2,{label:"\u5355\u90091",name:"LFormItemRadio1",required:!0,options:[{label:"Unresolved",value:"open"},{label:"Resolved",value:"closed"},{label:"Resolving",value:"processing"}]}),a.createElement(l.g2,{label:"\u5355\u90092",name:"LFormItemRadio2",all:!0,required:!0,options:[{label:"Unresolved",value:"open"},{label:"Resolved",value:"closed"},{label:"Resolving",value:"processing"}]}))};n["default"]=s},98337:function(e,n,t){"use strict";t.r(n);var r=t(90636),a=t(3182),l=t(2824),s=t(67294),u=t(85486),c=t(93343),o=function(){var e=u.a0.useForm(),n=(0,l.Z)(e,1),t=n[0];return s.createElement(u.a0,{name:"LFormItemSelect",form:t},s.createElement(u.g2,{label:"\u5355\u90091",name:"LFormItemRadio1",required:!0,request:(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,c.N)([{label:"Unresolved",value:"open"},{label:"Resolved",value:"closed"},{label:"Resolving",value:"processing"}]);case 2:if(n=e.sent,!n.success){e.next=5;break}return e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))}),s.createElement(u.g2,{label:"\u5355\u90092",name:"LFormItemRadio2",all:!0,required:!0,request:(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,c.N)([{label:"Unresolved",value:"open"},{label:"Resolved",value:"closed"},{label:"Resolving",value:"processing"}],3e3);case 2:if(n=e.sent,!n.success){e.next=5;break}return e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))}))};n["default"]=o},58842:function(e,n,t){"use strict";t.r(n);var r=t(90636),a=t(3182),l=t(7085),s=t(2824),u=t(67294),c=t(85486),o=t(93343),i=function(){var e=c.a0.useForm(),n=(0,s.Z)(e,1),t=n[0];return u.createElement(c.a0,{name:"LFormItemSelect3",form:t,labelCol:{flex:"80px"},submitter:{buttonAlign:80}},u.createElement(c.up,{label:"select1",name:"select1",required:!0,options:[{label:"A",value:"a"},{label:"B",value:"b"},{label:"C",value:"c"}]}),u.createElement(c.g2,{dependencies:["select1"],label:"select2",name:"select2",required:!0,spin:{indicator:u.createElement(l.Z,{style:{fontSize:24},spin:!0})},notDependRender:function(){return u.createElement("span",null,"\u8bf7\u5148\u9009\u62e9select1")},request:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("select1 ",n),t=[],"a"===n&&(t=[{label:"A",value:"a"}]),"b"===n&&(t=[{label:"B",value:"b"}]),"c"===n&&(t=[{label:"C",value:"c"}]),e.next=7,(0,o.N)(t);case 7:if(a=e.sent,!a.success){e.next=10;break}return e.abrupt("return",a.data);case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}))};n["default"]=i},93343:function(e,n,t){"use strict";function r(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3;return new Promise((function(t){setTimeout((function(){t({data:e,success:!0,code:"200"})}),n)}))}t.d(n,{N:function(){return r}})}}]);