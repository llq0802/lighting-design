(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[34],{MkTV:function(e,a,l){"use strict";l.r(a);var n=l("tJVT"),t=l("q1tI"),o=l.n(t),r=l("zK1H"),s=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],u=()=>{var e=r["k"].useForm(),a=Object(n["a"])(e,1),l=a[0],u=Object(t["useState"])(s),i=Object(n["a"])(u,2),c=i[0],d=i[1];return o.a.createElement(r["k"],{name:"LFormItemAddress",form:l,submitter:{buttonAlign:"center",resetText:"\u66f4\u65b0",resetButtonProps:{preventDefault:!0,onClick(){d((e=>[...e]))}}},onValuesChange:(e,a)=>{console.log(" a",e),console.log(" v",a)}},o.a.createElement(r["m"],{label:"\u5730\u5740\u9009\u62e9",required:!0,names:["location","address"],options:c}),o.a.createElement(r["m"],{label:"\u5f00\u6237\u94f6\u884c",required:!0,names:["location1","address2"],options:c,placeholder:["\u8bf7\u9009\u62e9\u7701\u5e02","\u8bf7\u8f93\u5165\u94f6\u884c\u652f\u884c"]}),o.a.createElement(r["m"],{label:"\u5404\u5360\u4e00\u534a",required:!0,names:["location2","address1"],options:c,cascaderColProps:{xs:24,md:12,lg:12,xxl:12},inputColProps:{xs:24,md:12,lg:12,xxl:12}}))};a["default"]=u}}]);