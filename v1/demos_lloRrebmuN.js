(self["webpackChunklignting_design"]=self["webpackChunklignting_design"]||[]).push([[4732],{94579:function(e,t,a){"use strict";a.r(t);var r=a(2824),l=a(67294),n=a(36966),u={display:"flex",justifyContent:"center"},s=()=>{var e=(0,l.useState)(10),t=(0,r.Z)(e,2),a=t[0],s=t[1],m=()=>{setInterval((()=>{var e=a*Math.floor(1e3*Math.random());s(e)}),3e3)};return(0,l.useEffect)((()=>{m()}),[]),l.createElement(l.Fragment,null,l.createElement(n.Oi,{style:u,value:a}))};t["default"]=s},53975:function(e,t,a){"use strict";a.r(t);var r=a(2824),l=a(67294),n=a(36966),u=a(30381),s=a.n(u),m={display:"flex",justifyContent:"center"},c=()=>{var e=(0,l.useState)(s()(new Date).format("HH:mm:ss")),t=(0,r.Z)(e,2),a=t[0],u=t[1],c=(0,l.useState)(s()(new Date).format("yyyy-MM-DD HH:mm")),i=(0,r.Z)(c,2),f=i[0],y=i[1];return(0,l.useEffect)((()=>{var e=setInterval((()=>{u(s()(new Date).format("HH:mm:ss")),y(s()(new Date).format("yyyy-MM-DD HH:mm"))}),1e3);return()=>{clearInterval(e)}}),[]),l.createElement(l.Fragment,null,l.createElement(n.Oi,{style:m,value:a,type:"date"}),l.createElement("br",null),l.createElement(n.Oi,{style:m,value:f,type:"date"}))};t["default"]=c},71271:function(e,t,a){"use strict";a.r(t);var r=a(2824),l=a(67294),n=a(36966),u={display:"flex",justifyContent:"center"},s=()=>{var e=(0,l.useState)((()=>Number((1e9*Math.random()).toFixed(2)))),t=(0,r.Z)(e,2),a=t[0],s=t[1],m=()=>{setInterval((()=>{var e=Number((1e9*Math.random()).toFixed(2));s(e)}),5e3)};return(0,l.useEffect)((()=>{m()}),[]),l.createElement(l.Fragment,null,l.createElement(n.Oi,{style:u,value:a,dot:2,symbol:","}),l.createElement("br",null))};t["default"]=s},90715:function(e,t,a){"use strict";a.r(t);a(57663);var r=a(71577),l=(a(47673),a(74485)),n=a(2824),u=a(67294),s=a(36966),m={display:"flex",justifyContent:"center"},c=()=>{var e=(0,u.useState)(999.99),t=(0,n.Z)(e,2),a=t[0],c=t[1],i=(0,u.useState)(999.99),f=(0,n.Z)(i,2),y=f[0],o=f[1];return u.createElement(u.Fragment,null,u.createElement(s.Oi,{style:m,value:y}),u.createElement("br",null),u.createElement(l.Z.Group,{compact:!0,style:m},u.createElement(l.Z,{style:{width:200},value:a,placeholder:"\u8bf7\u8f93\u5165\u6570\u5b57",onChange:e=>c(e.target.value)}),u.createElement(r.Z,{type:"primary",onClick:()=>o(Number(a))},"\u8bbe\u7f6e")))};t["default"]=c},16241:function(e,t,a){"use strict";a.r(t);var r=a(2824),l=a(67294),n=a(36966),u={display:"flex",justifyContent:"center"},s=()=>{var e=(0,l.useState)((()=>Number((1e4*Math.random()).toFixed(2)))),t=(0,r.Z)(e,2),a=t[0],s=t[1];return(0,l.useEffect)((()=>{setInterval((()=>{var e=Number((1e4*Math.random()).toFixed(2));s(e)}),3e3)}),[]),l.createElement(l.Fragment,null,l.createElement(n.Oi,{style:u,value:a,scale:.6}),l.createElement("br",null),l.createElement("br",null),l.createElement(n.Oi,{style:u,value:a,scale:1.4}),l.createElement("br",null),l.createElement("br",null),l.createElement("br",null),l.createElement(n.Oi,{style:u,value:a,scale:2}))};t["default"]=s},1213:function(e,t,a){"use strict";a.r(t);var r=a(2824),l=a(67294),n=a(36966),u=a(30381),s=a.n(u),m={display:"flex",justifyContent:"center"},c=()=>{var e=(0,l.useState)(s()(new Date).format("HH:mm:ss")),t=(0,r.Z)(e,2),a=t[0],u=t[1];return(0,l.useEffect)((()=>{var e=setInterval((()=>{u(s()(new Date).format("HH:mm:ss"))}),1e3);return()=>{clearInterval(e)}}),[]),l.createElement(l.Fragment,null,l.createElement(n.Oi,{style:m,className:"numberStyle",value:a,type:"date"}))};t["default"]=c}}]);