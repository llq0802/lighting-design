(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"1n7/":function(e,t,a){"use strict";a.r(t);var r=a("tJVT"),n=a("q1tI"),l=a.n(n),c=a("zK1H"),u=a("wd/R"),s=a.n(u),m=(a("NRYN"),{display:"flex",justifyContent:"center"}),f=()=>{var e=Object(n["useState"])(s()(new Date).format("HH:mm:ss")),t=Object(r["a"])(e,2),a=t[0],u=t[1];return Object(n["useEffect"])((()=>{var e=setInterval((()=>{u(s()(new Date).format("HH:mm:ss"))}),1e3);return()=>{clearInterval(e)}}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(c["F"],{style:m,className:"numberStyle",value:a,type:"date"}))};t["default"]=f},NRYN:function(e,t,a){},ZGNn:function(e,t,a){"use strict";a.r(t);var r=a("tJVT"),n=a("q1tI"),l=a.n(n),c=a("zK1H"),u=a("wd/R"),s=a.n(u),m={display:"flex",justifyContent:"center"},f=()=>{var e=Object(n["useState"])(s()(new Date).format("HH:mm:ss")),t=Object(r["a"])(e,2),a=t[0],u=t[1],f=Object(n["useState"])(s()(new Date).format("yyyy-MM-DD HH:mm")),o=Object(r["a"])(f,2),y=o[0],b=o[1];return Object(n["useEffect"])((()=>{var e=setInterval((()=>{u(s()(new Date).format("HH:mm:ss")),b(s()(new Date).format("yyyy-MM-DD HH:mm"))}),1e3);return()=>{clearInterval(e)}}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(c["F"],{style:m,value:a,type:"date"}),l.a.createElement("br",null),l.a.createElement(c["F"],{style:m,value:y,type:"date"}))};t["default"]=f},gyOv:function(e,t,a){"use strict";a.r(t);var r=a("tJVT"),n=a("q1tI"),l=a.n(n),c=a("zK1H"),u={display:"flex",justifyContent:"center"},s=()=>{var e=Object(n["useState"])((()=>Number((1e4*Math.random()).toFixed(2)))),t=Object(r["a"])(e,2),a=t[0],s=t[1];return Object(n["useEffect"])((()=>{setInterval((()=>{var e=Number((1e4*Math.random()).toFixed(2));s(e)}),3e3)}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(c["F"],{style:u,value:a,scale:.6}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(c["F"],{style:u,value:a,scale:1.4}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(c["F"],{style:u,value:a,scale:2}))};t["default"]=s},hZsP:function(e,t,a){"use strict";a.r(t);var r=a("tJVT"),n=a("q1tI"),l=a.n(n),c=a("zK1H"),u={display:"flex",justifyContent:"center"},s=()=>{var e=Object(n["useState"])((()=>Number((1e9*Math.random()).toFixed(2)))),t=Object(r["a"])(e,2),a=t[0],s=t[1],m=()=>{setInterval((()=>{var e=Number((1e9*Math.random()).toFixed(2));s(e)}),5e3)};return Object(n["useEffect"])((()=>{m()}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(c["F"],{style:u,value:a,dot:2,symbol:","}),l.a.createElement("br",null))};t["default"]=s},l59M:function(e,t,a){"use strict";a.r(t);var r=a("tJVT"),n=a("q1tI"),l=a.n(n),c=a("zK1H"),u={display:"flex",justifyContent:"center"},s=()=>{var e=Object(n["useState"])(10),t=Object(r["a"])(e,2),a=t[0],s=t[1],m=()=>{setInterval((()=>{var e=a*Math.floor(1e3*Math.random());s(e)}),3e3)};return Object(n["useEffect"])((()=>{m()}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(c["F"],{style:u,value:a}))};t["default"]=s},n6zq:function(e,t,a){"use strict";a.r(t);a("+L6B");var r=a("2/Rp"),n=(a("5NDa"),a("5rEg")),l=a("tJVT"),c=a("q1tI"),u=a.n(c),s=a("zK1H"),m={display:"flex",justifyContent:"center"},f=()=>{var e=Object(c["useState"])(999.99),t=Object(l["a"])(e,2),a=t[0],f=t[1],o=Object(c["useState"])(999.99),y=Object(l["a"])(o,2),b=y[0],v=y[1];return u.a.createElement(u.a.Fragment,null,u.a.createElement(s["F"],{style:m,value:b}),u.a.createElement("br",null),u.a.createElement(n["a"].Group,{compact:!0,style:m},u.a.createElement(n["a"],{style:{width:200},value:a,placeholder:"\u8bf7\u8f93\u5165\u6570\u5b57",onChange:e=>f(e.target.value)}),u.a.createElement(r["a"],{type:"primary",onClick:()=>v(Number(a))},"\u8bbe\u7f6e")))};t["default"]=f}}]);