(self["webpackChunklignting_design"]=self["webpackChunklignting_design"]||[]).push([[182],{73602:function(e,t,n){"use strict";n.d(t,{m:function(){return l.m}});var l=n(67624);n(93142)},1115:function(e,t,n){"use strict";n.r(t);var l=n(67294),a=n(16924),c=n(64184),r=n(16148),m=n(29107),u=l.memo((function(e){var t=e.demos,n=t["usedebouncefn-demo1"].component,u=t["usedebouncefn-demo2"].component;return l.createElement(l.Fragment,null,l.createElement(l.Fragment,null,l.createElement("div",{className:"markdown"},l.createElement("h1",{id:"usedebouncefn"},l.createElement(a.AnchorLink,{to:"#usedebouncefn","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"useDebounceFn"),l.createElement("p",null,"\u7528\u6765\u5904\u7406\u9632\u6296\u51fd\u6570\u7684 Hook\u3002"),l.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.createElement(a.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),l.createElement("h3",{id:"\u57fa\u7840\u7528\u6cd5"},l.createElement(a.AnchorLink,{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),l.createElement(c.default,t["usedebouncefn-demo1"].previewerProps,l.createElement(n,null)),l.createElement("div",{className:"markdown"},l.createElement("h3",{id:"\u5bf9\u6bd4"},l.createElement(a.AnchorLink,{to:"#\u5bf9\u6bd4","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u5bf9\u6bd4")),l.createElement(c.default,t["usedebouncefn-demo2"].previewerProps,l.createElement(u,null)),l.createElement("div",{className:"markdown"},l.createElement("h2",{id:"api"},l.createElement(a.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"API"),l.createElement(r.Z,{code:"const { run, cancel, flush } = useDebounceFn(\n  fn: (...args: any[]) => any,\n  wait?: number,\n  options?: DebounceSettings\n);",lang:"typescript"}),l.createElement("h3",{id:"result"},l.createElement(a.AnchorLink,{to:"#result","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"Result"),l.createElement(m.Z,null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u53c2\u6570"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"run"),l.createElement("td",null,"\u89e6\u53d1\u6267\u884c fn\uff0c\u53c2\u6570\u4e5f\u4f1a\u4f20\u9012\u7ed9 fn"),l.createElement("td",null,l.createElement("code",null,"(...args: any[]) => any"))),l.createElement("tr",null,l.createElement("td",null,"cancel"),l.createElement("td",null,"\u53d6\u6d88\u5f53\u524d\u9632\u6296"),l.createElement("td",null,l.createElement("code",null,"() => void"))),l.createElement("tr",null,l.createElement("td",null,"flush"),l.createElement("td",null,"\u7acb\u5373\u8c03\u7528\u9632\u6296\u51fd\u6570"),l.createElement("td",null,l.createElement("code",null,"() => void"))))),l.createElement("h3",{id:"params"},l.createElement(a.AnchorLink,{to:"#params","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"Params"),l.createElement(m.Z,null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u53c2\u6570"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"),l.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"fn"),l.createElement("td",null,"\u9700\u8981\u9632\u6296\u7684\u51fd\u6570"),l.createElement("td",null,l.createElement("code",null,"function")),l.createElement("td",null,l.createElement("code",null,"() => ","{","}"))),l.createElement("tr",null,l.createElement("td",null,"wait"),l.createElement("td",null,"\u9632\u6296\u7b49\u5f85\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2"),l.createElement("td",null,l.createElement("code",null,"number")),l.createElement("td",null,l.createElement("code",null,"300ms"))),l.createElement("tr",null,l.createElement("td",null,"options"),l.createElement("td",null,"\u9632\u6296\u914d\u7f6e"),l.createElement("td",null,l.createElement("code",null,"DebounceSettings")),l.createElement("td",null,"-")))),l.createElement("h3",{id:"debouncesettings"},l.createElement(a.AnchorLink,{to:"#debouncesettings","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"DebounceSettings"),l.createElement(m.Z,null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u53c2\u6570"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"),l.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"leading"),l.createElement("td",null,"\u5ef6\u8fdf\u5f00\u59cb\u524d\u8c03\u7528"),l.createElement("td",null,l.createElement("code",null,"boolean")),l.createElement("td",null,l.createElement("code",null,"false"))),l.createElement("tr",null,l.createElement("td",null,"maxWait"),l.createElement("td",null,"\u8c03\u7528\u524d\u5141\u8bb8\u5ef6\u8fdf\u7684\u6700\u5927\u65f6\u95f4"),l.createElement("td",null,l.createElement("code",null,"number")),l.createElement("td",null,"-")),l.createElement("tr",null,l.createElement("td",null,"trailing"),l.createElement("td",null,"\u5ef6\u8fdf\u7ed3\u675f\u540e\u8c03\u7528"),l.createElement("td",null,l.createElement("code",null,"boolean")),l.createElement("td",null,l.createElement("code",null,"true"))))))))}));t["default"]=function(e){var t=l.useContext(a.context),n=t.demos;return l.useEffect((function(){var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.createElement(u,{demos:n})}}}]);