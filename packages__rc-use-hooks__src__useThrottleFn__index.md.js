(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[94,43],{DU8f:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("dEAq"),c=a("Zxc8"),m=a("H1Ra"),u=a("dMo/"),o=l.a.memo((e=>{var t=e.demos,a=t["usethrottlefn-demo1"].component,n=t["usethrottlefn-demo2"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"usethrottlefn"},l.a.createElement(r["AnchorLink"],{to:"#usethrottlefn","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"useThrottleFn"),l.a.createElement("p",null,"\u7528\u6765\u5904\u7406\u8282\u6d41\u51fd\u6570\u7684 Hook\u3002"),l.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.a.createElement(r["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),l.a.createElement("h3",{id:"\u57fa\u7840\u7528\u6cd5"},l.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),l.a.createElement(c["default"],t["usethrottlefn-demo1"].previewerProps,l.a.createElement(a,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u5bf9\u6bd4"},l.a.createElement(r["AnchorLink"],{to:"#\u5bf9\u6bd4","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5bf9\u6bd4")),l.a.createElement(c["default"],t["usethrottlefn-demo2"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement(m["a"],{code:"const { run, cancel, flush } = useThrottleFn(\n  fn: (...args: any) => any,\n  wait?: number,\n  options?: ThrottleSettings\n);",lang:"typescript"}),l.a.createElement("h3",{id:"result"},l.a.createElement(r["AnchorLink"],{to:"#result","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Result"),l.a.createElement(u["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"run"),l.a.createElement("td",null,"\u89e6\u53d1\u6267\u884c fn\uff0c\u53c2\u6570\u4e5f\u4f1a\u4f20\u9012\u7ed9 fn"),l.a.createElement("td",null,l.a.createElement("code",null,"(...args: any[]) => any"))),l.a.createElement("tr",null,l.a.createElement("td",null,"cancel"),l.a.createElement("td",null,"\u53d6\u6d88\u5f53\u524d\u8282\u6d41"),l.a.createElement("td",null,l.a.createElement("code",null,"() => void"))),l.a.createElement("tr",null,l.a.createElement("td",null,"flush"),l.a.createElement("td",null,"\u7acb\u5373\u8c03\u7528\u8282\u6d41\u51fd\u6570"),l.a.createElement("td",null,l.a.createElement("code",null,"() => void"))))),l.a.createElement("h3",{id:"params"},l.a.createElement(r["AnchorLink"],{to:"#params","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Params"),l.a.createElement(u["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"fn"),l.a.createElement("td",null,"\u9700\u8981\u8282\u6d41\u7684\u51fd\u6570"),l.a.createElement("td",null,l.a.createElement("code",null,"function")),l.a.createElement("td",null,l.a.createElement("code",null,"() => ","{","}"))),l.a.createElement("tr",null,l.a.createElement("td",null,"wait"),l.a.createElement("td",null,"\u8282\u6d41\u7b49\u5f85\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2"),l.a.createElement("td",null,l.a.createElement("code",null,"number")),l.a.createElement("td",null,l.a.createElement("code",null,"300ms"))),l.a.createElement("tr",null,l.a.createElement("td",null,"options"),l.a.createElement("td",null,"\u8282\u6d41\u914d\u7f6e"),l.a.createElement("td",null,l.a.createElement("code",null,"ThrottleSettings")),l.a.createElement("td",null,"-")))),l.a.createElement("h3",{id:"throttlesettings"},l.a.createElement(r["AnchorLink"],{to:"#throttlesettings","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"ThrottleSettings"),l.a.createElement(u["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"leading"),l.a.createElement("td",null,"\u5ef6\u8fdf\u5f00\u59cb\u524d\u8c03\u7528"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"true"))),l.a.createElement("tr",null,l.a.createElement("td",null,"trailing"),l.a.createElement("td",null,"\u5ef6\u8fdf\u7ed3\u675f\u540e\u8c03\u7528"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"true"))))))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),a=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(o,{demos:a})}},MZF8:function(e,t,a){"use strict";var n=a("ogwx");a.d(t,"a",(function(){return n["b"]}));a("VCU9")}}]);