(self["webpackChunklignting_design"]=self["webpackChunklignting_design"]||[]).push([[2319],{97115:function(e,a,n){"use strict";n.r(a);var t=n(90636),r=n(3182),l=n(2824),u=n(67294),c=n(36966),s=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],i=()=>{var e=c.a0.useForm(),a=(0,l.Z)(e,1),n=a[0];return u.createElement(c.a0,{name:"LFormItemSelect",form:n},u.createElement(c.up,{label:"select\u9009\u62e9",name:"select",required:!0,options:[{label:"A",value:"a"},{label:"B",value:"b"},{label:"C",value:"c"}]}),u.createElement(c.e3,{label:"\u7ea7\u8054\u9009\u62e9",name:"cascader",required:!0,request:function(){var e=(0,r.Z)((0,t.Z)().mark((function e(a){return(0,t.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("request-params",a),e.abrupt("return",s);case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}))};a["default"]=i},62387:function(e,a,n){"use strict";n.r(a);var t=n(90636),r=n(3182),l=n(7085),u=n(2824),c=n(67294),s=n(36966),i=n(93343),o=()=>{var e=s.a0.useForm(),a=(0,u.Z)(e,1),n=a[0];return c.createElement(s.a0,{name:"LFormItemSelect3",form:n,labelCol:{flex:"80px"},submitter:{buttonAlign:80}},c.createElement(s.up,{label:"select1",name:"select1",required:!0,options:[{label:"A",value:"a"},{label:"B",value:"b"},{label:"C",value:"c"}]}),c.createElement(s.e3,{debounceTime:300,dependencies:["select1"],label:"select2",name:"select2",required:!0,spin:{indicator:c.createElement(l.Z,{style:{fontSize:24},spin:!0})},request:function(){var e=(0,r.Z)((0,t.Z)().mark((function e(a){var n,r;return(0,t.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("select1 ",a),n=[],"a"===a&&(n=[{label:"A",value:"a"}]),"b"===a&&(n=[{label:"B",value:"b"}]),"c"===a&&(n=[{label:"C",value:"c"}]),e.next=7,(0,i.N)(n);case 7:if(r=e.sent,!r.success){e.next=10;break}return e.abrupt("return",r.data);case 10:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}))};a["default"]=o},48244:function(e,a,n){"use strict";n.r(a);var t=n(7085),r=n(90636),l=n(3182),u=n(2824),c=n(67294),s=n(36966),i=n(93343),o=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],b=()=>{var e=s.a0.useForm(),a=(0,u.Z)(e,1),n=a[0];return c.createElement(s.a0,{name:"LFormItemSelect",form:n,submitter:!1},c.createElement(s.e3,{label:"\u7ea7\u8054\u9009\u62e9",name:"cascader1",required:!0,request:(0,l.Z)((0,r.Z)().mark((function e(){var a;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,i.N)(o);case 2:if(a=e.sent,!a.success){e.next=5;break}return e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))}),c.createElement(s.e3,{label:"\u7ea7\u8054\u9009\u62e9",name:"cascader2",spin:{indicator:c.createElement(t.Z,{style:{fontSize:24},spin:!0})},required:!0,request:(0,l.Z)((0,r.Z)().mark((function e(){var a;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,i.N)(o);case 2:if(a=e.sent,!a.success){e.next=5;break}return e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))}))};a["default"]=b},93343:function(e,a,n){"use strict";function t(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3;return new Promise((n=>{setTimeout((()=>{n({data:e,success:!0,code:"200"})}),a)}))}n.d(a,{N:function(){return t}})}}]);