(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"+O2I":function(e,t,n){"use strict";n.r(t);n("+L6B");var a=n("2/Rp"),r=n("tJVT"),c=n("xAjY"),u=n("q1tI"),l=()=>{var e=u["useState"](0),t=Object(r["a"])(e,2),n=t[0],a=t[1],l=Object(c["f"])();return u["useEffect"]((()=>{var e=setInterval((()=>{if(!l.current)return()=>{clearInterval(e)};a((e=>e+1))}),400)}),[]),u["createElement"]("div",null,"\u8ba1\u6570\uff1a",n)};function o(){var e=u["useState"](!0),t=Object(r["a"])(e,2),n=t[0],c=t[1];return u["createElement"](u["Fragment"],null,u["createElement"](a["a"],{onClick:()=>c((e=>!e))},"\u70b9\u51fb\u5207\u6362\u663e\u793a/\u9690\u85cf"),n&&u["createElement"](l,null))}t["default"]=o},"+sTL":function(e,t,n){"use strict";n.r(t);n("+L6B");var a=n("2/Rp"),r=(n("5NDa"),n("5rEg")),c=n("tJVT"),u=n("q1tI"),l=n.n(u),o=n("xAjY");function i(){var e=Object(u["useState"])(0),t=Object(c["a"])(e,2),n=t[0],i=t[1],s=Object(u["useState"])(""),m=Object(c["a"])(s,2),f=m[0],b=m[1],v=Object(o["l"])(f);return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Now: ",f),l.a.createElement("p",null,"before: ",v),l.a.createElement(r["a"],{type:"text",onChange:e=>b(e.target.value),value:f}),l.a.createElement("p",null,"count: ",n),l.a.createElement(a["a"],{onClick:()=>i((e=>e+1))},"add count"))}t["default"]=i},"6QCE":function(e,t,n){"use strict";n.r(t);n("+L6B");var a=n("2/Rp"),r=n("qLMh"),c=(n("miYZ"),n("tsqr")),u=n("9og8"),l=n("q1tI"),o=n.n(l),i=n("xAjY"),s=[];function m(){return new Promise((e=>{setTimeout((()=>{e("\u6210\u529f")}),1e3)}))}for(var f=0;f<7;f++)s.push(m);t["default"]=()=>{var e=Object(i["c"])(s),t=e.run,n=e.loading;return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"\u5f53\u524d\u8bf7\u6c42\u72b6\u6001: ",n?"\u8bf7\u6c42\u4e2d...":"\u8bf7\u6c42\u5b8c\u6210"),o.a.createElement(a["a"],{disabled:n,onClick:Object(u["a"])(Object(r["a"])().mark((function e(){var n;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:n=e.sent,c["b"].info("".concat(JSON.stringify(n,null,2))),console.log(" retArr",n);case 5:case"end":return e.stop()}}),e)})))},"Submit"))}},"6t5m":function(e,t,n){"use strict";n.r(t);n("+L6B");var a=n("2/Rp"),r=(n("5NDa"),n("5rEg")),c=n("tJVT"),u=n("q1tI"),l=n.n(u),o=n("xAjY");function i(){var e=Object(u["useState"])(""),t=Object(c["a"])(e,2),n=t[0],i=t[1],s=Object(u["useState"])(),m=Object(c["a"])(s,2),f=m[0],b=m[1],v=Object(o["d"])(b,1e3),j=v.run,d=v.cancel,E=v.flush;return l.a.createElement("div",null,l.a.createElement(r["a"],{value:n,onChange:e=>{i(e.target.value),j(e.target.value)},placeholder:"Typed value",style:{width:280}}),l.a.createElement("p",{style:{margin:"16px 0"}},l.a.createElement(a["a"],{onClick:d},"Cancel Debounce")),l.a.createElement("p",{style:{margin:"16px 0"}},l.a.createElement(a["a"],{onClick:E},"flush Debounce")),l.a.createElement("p",null,"value: ",n),l.a.createElement("p",null,"DebouncedValue: ",f))}t["default"]=i},"8pkI":function(e,t,n){"use strict";n.r(t);n("2qtc");var a=n("kLXV"),r=(n("sRBo"),n("kaz8")),c=(n("y8nQ"),n("Vl3Y")),u=(n("5NDa"),n("5rEg")),l=n("tJVT"),o=(n("DYRE"),n("zeV3")),i=(n("+L6B"),n("2/Rp")),s=(n("miYZ"),n("tsqr")),m=n("q1tI"),f=n.n(m),b=n("xAjY"),v=()=>{var e=Object(m["useRef"])(null),t=()=>{var t;null===(t=e.current)||void 0===t||t.onShow({name:"\u674e\u5c9a\u6e05",age:25,remember:!0})},n=()=>{var t;null===(t=e.current)||void 0===t||t.onHide({name:"\u5434\u5f66\u7956",age:18,remember:!1})},a=()=>{var t,n=null===(t=e.current)||void 0===t?void 0:t.getChildData();s["b"].info("\u83b7\u5f97\u5230\u5b50\u7ec4\u4ef6\u6570\u636e\u4e3a:   ".concat(JSON.stringify(n,null,2))),console.log(" childData",n)};return f.a.createElement("div",{style:{border:"1px solid #888",padding:20}},f.a.createElement("h2",null,"\u8fd9\u662f\u7236\u7ec4\u4ef6"),f.a.createElement(o["b"],null,f.a.createElement(i["a"],{onClick:t}," \u7236\u7ec4\u4ef6\u8c03\u7528onShow\u4e8b\u4ef6\u5e76\u4f20\u53c2\u6570\u7ed9\u5b50\u7ec4\u4ef6"),f.a.createElement(i["a"],{onClick:n}," \u7236\u7ec4\u4ef6\u8c03\u7528onHide\u4e8b\u4ef6\u5e76\u4f20\u53c2\u6570\u7ed9\u5b50\u7ec4\u4ef6"),f.a.createElement(i["a"],{onClick:a}," \u7236\u7ec4\u4ef6\u83b7\u53d6\u5b50\u7ec4\u4ef6\u6570\u636e")),f.a.createElement(j,{funcRef:e}))};function j(e){var t=e.funcRef,n=Object(m["useState"])(!1),o=Object(l["a"])(n,2),i=o[0],v=o[1],j=Object(b["p"])(t,{onShow:e=>{s["b"].info("\u7236\u7ec4\u4ef6\u8c03\u7528\u4e86onShow\u5e76\u4f20\u53c2\u6570".concat(JSON.stringify(e,null,2))),console.log("\u7236\u7ec4\u4ef6\u8c03\u7528\u4e86onShow\u5e76\u4f20\u53c2\u6570 ",e),v(!0)},onHide:e=>{s["b"].info("\u7236\u7ec4\u4ef6\u8c03\u7528\u4e86onHide\u5e76\u4f20\u53c2\u6570".concat(JSON.stringify(e,null,2))),console.log("\u7236\u7ec4\u4ef6\u8c03\u7528\u4e86onHide\u5e76\u4f20\u53c2\u6570 ",e),v(!1)}}),d=j.parentData,E=j.setParentData,O=()=>{E({title:"\u6211\u662f\u5b50\u7ec4\u4ef6\u6570\u636e",value:99}),v(!1)},p=()=>{E(null),v(!1)};return f.a.createElement(f.a.Fragment,null,f.a.createElement(a["a"],{open:i,title:"\u8fd9\u662f\u5b50\u7ec4\u4ef6\u5f39\u7a97",onOk:O,onCancel:p,okText:"\u70b9\u6211\u5411\u7236\u7ec4\u4ef6\u4f20\u6570\u636e"},f.a.createElement(c["a"],{name:"basic",labelCol:{span:5},wrapperCol:{span:19},initialValues:d},f.a.createElement(c["a"].Item,{label:"name",name:"name",rules:[{required:!0,message:"Please input your name!"}]},f.a.createElement(u["a"],null)),f.a.createElement(c["a"].Item,{label:"age",name:"age",rules:[{required:!0,message:"Please input your age!"}]},f.a.createElement(u["a"],null)),f.a.createElement(c["a"].Item,{name:"remember",valuePropName:"checked",wrapperCol:{offset:5,span:19}},f.a.createElement(r["a"],null,"Remember me")),f.a.createElement(c["a"].Item,{wrapperCol:{offset:5,span:19}},f.a.createElement("span",null,"\u7236\u7ec4\u4ef6\u4f20\u8fc7\u6765\u7684\u503c: "),f.a.createElement("pre",null,JSON.stringify(d,null,4))))))}t["default"]=v},AC7D:function(e,t,n){"use strict";n.r(t);n("+L6B");var a=n("2/Rp"),r=n("tJVT"),c=(n("miYZ"),n("tsqr")),u=n("q1tI"),l=n.n(u),o=n("xAjY"),i=()=>(Object(o["r"])((()=>{c["b"].info("MyComponent\u7ec4\u4ef6\u5378\u8f7d")})),l.a.createElement("div",null,"\u6211\u662fMyComponent\u7ec4\u4ef6"));function s(){var e=Object(u["useState"])(!0),t=Object(r["a"])(e,2),n=t[0],c=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(a["a"],{onClick:()=>c((e=>!e))},n?"unmount":"mount"),n&&l.a.createElement(i,null))}t["default"]=s},Ax2Q:function(e,t,n){"use strict";n.r(t);n("5NDa");var a=n("5rEg"),r=n("tJVT"),c=n("q1tI"),u=n.n(c),l=n("xAjY");function o(){var e=Object(c["useState"])(""),t=Object(r["a"])(e,2),n=t[0],o=t[1],i=Object(l["l"])(n);return u.a.createElement(u.a.Fragment,null,u.a.createElement("p",null,"Now: ",n),u.a.createElement("p",null,"before: ",i),u.a.createElement(a["a"],{type:"text",onChange:e=>o(e.target.value),value:n}))}t["default"]=o},G8yC:function(e,t,n){"use strict";n.r(t);n("+L6B");var a=n("2/Rp"),r=n("tJVT"),c=n("q1tI"),u=n.n(c),l=n("xAjY");t["default"]=()=>{var e=Object(l["m"])({hello:"",count:0}),t=Object(r["a"])(e,3),n=t[0],c=t[1],o=t[2];return u.a.createElement("div",null,u.a.createElement("pre",null,JSON.stringify(n,null,2)),u.a.createElement("p",null,u.a.createElement(a["a"],{style:{marginRight:"8px"},onClick:()=>c({hello:"world",count:1})},"set hello and count"),u.a.createElement(a["a"],{onClick:o},"resetState")))}},"J/RM":function(e,t,n){"use strict";n.r(t);n("+L6B");var a=n("2/Rp"),r=n("tJVT"),c=n("xAjY"),u=n("q1tI"),l=()=>{var e=u["useState"](0),t=Object(r["a"])(e,2),n=t[0],a=t[1],l=Object(c["g"])();return u["useEffect"]((()=>{var e=setInterval((()=>{l.current||a((e=>e+1))}),400);return()=>{clearInterval(e)}}),[]),u["createElement"]("div",null,"\u8ba1\u6570\uff1a",n)};function o(){var e=u["useState"](!0),t=Object(r["a"])(e,2),n=t[0],c=t[1];return u["createElement"](u["Fragment"],null,u["createElement"](a["a"],{onClick:()=>c((e=>!e))},"\u70b9\u51fb\u5207\u6362\u663e\u793a/\u9690\u85cf"),n&&u["createElement"](l,null))}t["default"]=o},J3nA:function(e,t,n){"use strict";n.r(t);n("+L6B");var a=n("2/Rp"),r=n("tJVT"),c=n("q1tI"),u=n.n(c),l=n("xAjY");function o(){var e=Object(c["useState"])(0),t=Object(r["a"])(e,2),n=t[0],o=t[1],i=Object(l["d"])(o,500),s=i.run;return u.a.createElement("div",null,u.a.createElement("p",{style:{marginTop:16}}," Clicked count: ",n," "),u.a.createElement(a["a"],{onClick:()=>s(n+1)},"Click fast!"))}t["default"]=o},LGqa:function(e,t,n){"use strict";n.r(t);n("+L6B");var a=n("2/Rp"),r=(n("miYZ"),n("tsqr")),c=n("tJVT"),u=n("q1tI"),l=n.n(u),o=n("xAjY"),i=()=>{var e=Object(u["useState"])(0),t=Object(c["a"])(e,2),n=t[0],i=t[1];return Object(o["s"])((()=>{r["b"].info("\u7ec4\u4ef6\u66f4\u65b0\u89e6\u53d1")})),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,"\u66f4\u65b0\u7ec4\u4ef6\u89e6\u53d1"),l.a.createElement("div",null,"count: ",n),l.a.createElement(a["a"],{onClick:()=>i(n+1)},"add count "))};t["default"]=i},Li4z:function(e,t,n){"use strict";n.r(t);n("+L6B");var a=n("2/Rp"),r=(n("miYZ"),n("tsqr")),c=n("tJVT"),u=n("q1tI"),l=n.n(u),o=n("xAjY"),i=()=>{var e=Object(o["a"])(0),t=Object(c["a"])(e,2),n=t[0],u=t[1],i=()=>{u(n+1,(e=>{console.log("newCount",e),r["b"].info("\u83b7\u53d6\u5230\u6700\u65b0count\u503c\u662f:".concat(e))}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,"\u5f53\u524dcount: ",n),l.a.createElement(a["a"],{onClick:i},"\u70b9\u51fb\u589e\u52a0count\u540e\u505a\u64cd\u4f5c"))};t["default"]=i},OeXC:function(e,t,n){"use strict";n.r(t);n("+L6B");var a=n("2/Rp"),r=(n("miYZ"),n("tsqr")),c=n("tJVT"),u=n("q1tI"),l=n.n(u),o=n("xAjY"),i=()=>{var e=Object(u["useState"])(0),t=Object(c["a"])(e,2),n=t[0],i=t[1],s=Object(u["useState"])(99),m=Object(c["a"])(s,2),f=m[0],b=m[1];return Object(o["s"])((()=>{r["b"].info("\u53ea\u6709\u5728age\u53d8\u5316\u65f6\u624d\u89e6\u53d1")}),[f]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,"\u53ea\u6709\u5728age\u53d8\u5316\u65f6\u624d\u89e6\u53d1"),l.a.createElement("div",null,"count: ",n),l.a.createElement("div",null,"age: ",f),l.a.createElement(a["a"],{onClick:()=>i(n+1)},"add count "),l.a.createElement(a["a"],{onClick:()=>b(f+1)},"add age "))};t["default"]=i},WxIM:function(e,t,n){"use strict";n.r(t);n("+L6B");var a=n("2/Rp"),r=(n("miYZ"),n("tsqr")),c=n("tJVT"),u=n("q1tI"),l=n.n(u),o=n("xAjY"),i=()=>{var e=Object(u["useState"])(0),t=Object(c["a"])(e,2),n=t[0],i=t[1];return Object(o["j"])((()=>{r["b"].info("\u7ec4\u4ef7\u6302\u5728\u5b8c\u6210\u89e6\u53d1")})),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,"\u7ec4\u4ef7\u6302\u5728\u5b8c\u6210\u89e6\u53d1,\u66f4\u65b0\u7ec4\u4ef6\u4e0d\u89e6\u53d1"),l.a.createElement("div",null,"count: ",n),l.a.createElement(a["a"],{onClick:()=>i(n+1)},"add count "))};t["default"]=i},XEvv:function(e,t,n){"use strict";n.r(t);n("+L6B");var a=n("2/Rp"),r=n("tJVT"),c=n("q1tI"),u=n.n(c),l=n("xAjY"),o=()=>{var e=Object(l["n"])(),t=Object(r["a"])(e,2),n=t[0],a=t[1];Object(c["useEffect"])((()=>{setTimeout((()=>{a("data loaded from server")}),5e3)}),[]);var o=n||"\u7ec4\u4ef6Loading 5s...";return u.a.createElement("div",null,o)};t["default"]=()=>{var e=Object(c["useState"])(!0),t=Object(r["a"])(e,2),n=t[0],l=t[1];return u.a.createElement("div",null,n&&u.a.createElement(o,null),u.a.createElement(a["a"],{onClick:()=>l(!1)},"Unmount"),u.a.createElement(a["a"],{onClick:()=>l(!0)},"mount"))}},ccbN:function(e,t,n){"use strict";n.r(t);n("miYZ");var a=n("tsqr"),r=n("tJVT"),c=(n("+L6B"),n("2/Rp")),u=n("xAjY"),l=n("q1tI"),o=n.n(l),i=o.a.memo((e=>{var t=e.showCount,n=Object(l["useRef"])(0);return n.current+=1,o.a.createElement("div",null,o.a.createElement("p",null,"\u5b50\u7ec4\u4ef6\u6e32\u67d3\u4e86 : ",n.current,"\u6b21"),o.a.createElement(c["a"],{type:"primary",onClick:t},"showParentCount"))}));function s(){var e=Object(l["useState"])(0),t=Object(r["a"])(e,2),n=t[0],s=t[1],m=Object(u["k"])((()=>{a["b"].info("Current count is ".concat(n))})),f=Object(l["useCallback"])((()=>{a["b"].info("Current count is ".concat(n))}),[n]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(c["a"],{onClick:()=>{s((e=>e+1))}},"Add Count"),o.a.createElement("p",null,"\u60a8\u53ef\u4ee5\u5355\u51fb\u8be5\u6309\u94ae\u67e5\u770b\u5b50\u7ec4\u4ef6\u6e32\u67d3\u7684\u6b21\u6570"),o.a.createElement("div",{style:{marginTop:32}},o.a.createElement("h4",null,"\u7528\u4e86usePersistFn:"),o.a.createElement(i,{showCount:m})),o.a.createElement("div",{style:{marginTop:32}},o.a.createElement("h4",null,"\u7528\u4e86useCallback:"),o.a.createElement(i,{showCount:f})))}i.displayName="Child",t["default"]=s},m1Fu:function(e,t,n){"use strict";n.r(t);n("+L6B");var a=n("2/Rp"),r=n("qLMh"),c=(n("miYZ"),n("tsqr")),u=n("9og8"),l=n("tJVT"),o=n("q1tI"),i=n.n(o),s=n("xAjY");function m(){return new Promise((e=>{setTimeout((()=>{e()}),2e3)}))}t["default"]=()=>{var e=Object(o["useState"])(0),t=Object(l["a"])(e,2),n=t[0],f=t[1],b=Object(s["i"])(function(){var e=Object(u["a"])(Object(r["a"])().mark((function e(t){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c["b"].info("\u5f00\u59cb\u8bf7\u6c42".concat(t)),e.next=3,m();case 3:f((e=>e+1)),c["b"].success("\u8bf7\u6c42\u6210\u529f");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),v=b.run;b.loading;return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"\u8bf7\u6c42\u6b21\u6570: ",n),i.a.createElement(a["a"],{onClick:()=>v("99")},"Submit"))}},nv6X:function(e,t,n){"use strict";n.r(t);n("+L6B");var a=n("2/Rp"),r=n("tJVT"),c=n("q1tI"),u=n.n(c),l=n("xAjY");function o(){var e=Object(c["useState"])(0),t=Object(r["a"])(e,2),n=t[0],o=t[1],i=Object(l["q"])(o,500),s=i.run;return u.a.createElement("div",null,u.a.createElement("p",{style:{marginTop:16}}," Clicked count: ",n," "),u.a.createElement(a["a"],{onClick:()=>{s(n+1)}},"Click fast!"))}t["default"]=o},oX2b:function(e,t,n){"use strict";n.r(t);n("+L6B");var a=n("2/Rp"),r=n("q1tI"),c=n.n(r),u=n("xAjY"),l=()=>{var e=Object(u["e"])();return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{style:{color:"gray"}},"\u65f6\u95f4\u6233\uff08\u76d1\u6d4b\u662f\u5426\u89e6\u53d1\u66f4\u65b0\u6e32\u67d3\uff09\uff1a",Date.now()),c.a.createElement(a["a"],{onClick:e},"\u5f3a\u5236\u66f4\u65b0"))};t["default"]=l},tiwv:function(e,t,n){"use strict";n.r(t);n("+L6B");var a=n("2/Rp"),r=(n("5NDa"),n("5rEg")),c=n("tJVT"),u=n("q1tI"),l=n.n(u),o=n("xAjY");function i(){var e=Object(u["useState"])(""),t=Object(c["a"])(e,2),n=t[0],i=t[1],s=Object(u["useState"])(),m=Object(c["a"])(s,2),f=m[0],b=m[1],v=Object(o["q"])(b,1e3),j=v.run,d=v.cancel,E=v.flush;return l.a.createElement("div",null,l.a.createElement(r["a"],{value:n,onChange:e=>{i(e.target.value),j(e.target.value)},placeholder:"Typed value",style:{width:280}}),l.a.createElement("p",{style:{margin:"16px 0"}},l.a.createElement(a["a"],{onClick:d},"Cancel Throttle")),l.a.createElement("p",{style:{margin:"16px 0"}},l.a.createElement(a["a"],{onClick:E},"flush Throttle")),l.a.createElement("p",null,"value: ",n),l.a.createElement("p",null,"throttleValue: ",f))}t["default"]=i},uqnK:function(e,t,n){"use strict";n.r(t);n("DYRE");var a=n("zeV3"),r=(n("+L6B"),n("2/Rp")),c=n("tJVT"),u=n("xAjY"),l=n("q1tI");function o(){var e=l["useState"](0),t=Object(c["a"])(e,2),n=t[0],o=t[1],i=Object(u["h"])(n),s=l["useRef"](null),m=()=>{clearTimeout(s.current),s.current=setTimeout((()=>{alert("\u6700\u65b0\u7684 count \u503c\u4e3a\uff1a".concat(i.current))}),3e3)};return l["createElement"]("div",null,l["createElement"]("p",null,"\u70b9\u51fb ",n," \u6b21"),l["createElement"](a["b"],null,l["createElement"](r["a"],{type:"primary",onClick:()=>o(n+1)},"\u70b9\u6211"),l["createElement"](r["a"],{onClick:m},"\u70b9\u51fb3\u79d2\u540e\u5f39\u7a97\u663e\u793a\u70b9\u51fb\u6b21\u6570")))}t["default"]=o},xAjY:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return E})),n.d(t,"e",(function(){return p})),n.d(t,"f",(function(){return C})),n.d(t,"g",(function(){return k})),n.d(t,"h",(function(){return v})),n.d(t,"i",(function(){return y})),n.d(t,"j",(function(){return S})),n.d(t,"k",(function(){return x})),n.d(t,"l",(function(){return q})),n.d(t,"m",(function(){return T})),n.d(t,"n",(function(){return J})),n.d(t,"o",(function(){return V})),n.d(t,"p",(function(){return F})),n.d(t,"q",(function(){return z})),n.d(t,"r",(function(){return j})),n.d(t,"s",(function(){return X}));var a=n("tJVT"),r=n("q1tI");function c(e){return"function"===typeof e}function u(e){var t=Object(r["useRef"])(null),n=Object(r["useState"])(e),u=Object(a["a"])(n,2),l=u[0],o=u[1];Object(r["useEffect"])((()=>{var e;null===t||void 0===t||null===(e=t.current)||void 0===e||e.call(t,l)}),[l]);var i=Object(r["useCallback"])((function(e,n){t.current=n,c(e)?o((t=>{var n=null===e||void 0===e?void 0:e(t);return n})):o(e)}),[]);return[l,i]}function l(){var e=Object(r["useRef"])(null),t=Object(r["useState"])(),n=Object(a["a"])(t,2),c=n[0],u=n[1];return Object(r["useEffect"])((()=>{var t;e.current&&u(null===(t=e.current)||void 0===t?void 0:t.getBoundingClientRect())}),[e]),[c,e]}var o=l,i=n("qLMh"),s=n("9og8");function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,n=Object(r["useState"])(!1),c=Object(a["a"])(n,2),u=c[0],l=c[1],o=Object(r["useCallback"])((()=>new Promise(((n,a)=>{if(0!==e.length)for(var r=[],c=0,u=0,o=Math.min(t,e.length),m=0;m<o;m++)f();else n([]);function f(){return b.apply(this,arguments)}function b(){return b=Object(s["a"])(Object(i["a"])().mark((function t(){var o,s,m;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(c!==e.length){t.next=2;break}return t.abrupt("return");case 2:return o=c,s=e[c],c++,t.prev=4,l(!0),t.next=8,s();case 8:m=t.sent,r[o]=m,t.next=17;break;case 12:t.prev=12,t.t0=t["catch"](4),r[o]=t.t0,l(!1),a(t.t0);case 17:return t.prev=17,u++,u===e.length&&(l(!1),n(r)),f(),t.finish(17);case 22:case"end":return t.stop()}}),t,null,[[4,12,17,22]])}))),b.apply(this,arguments)}}))),[]);return{run:o,loading:u}}var f=n("sEfC"),b=n.n(f);function v(e){var t=Object(r["useRef"])(e);return t.current=e,t}var j=function(e){var t=v(e);Object(r["useEffect"])((()=>()=>{var e;null===(e=t.current)||void 0===e||e.call(t)}),[])};function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=Object(r["useRef"])(e);a.current=e;var c=Object(r["useRef"])(b()((function(){return a.current(...arguments)}),t,n));return j((()=>{c.current.cancel()})),{run:c.current,cancel:c.current.cancel,flush:c.current.flush}}var E=d,O=()=>{var e=Object(r["useState"])({}),t=Object(a["a"])(e,2),n=t[1];return Object(r["useCallback"])((()=>n({})),[])},p=O,g=()=>{var e=Object(r["useRef"])(!1);return Object(r["useEffect"])((()=>(e.current=!0,()=>{e.current=!1})),[]),e},C=g,h=()=>{var e=Object(r["useRef"])(!1);return Object(r["useEffect"])((()=>(e.current=!1,()=>{e.current=!0})),[]),e},k=h;function y(e){var t=Object(r["useState"])(!1),n=Object(a["a"])(t,2),c=n[0],u=n[1],l=Object(r["useRef"])(!1),o=Object(r["useCallback"])(Object(s["a"])(Object(i["a"])().mark((function t(){var n,a=arguments;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!l.current){t.next=2;break}return t.abrupt("return");case 2:return l.current=!0,t.prev=3,u(!0),t.next=7,e(...a);case 7:return n=t.sent,u(!1),l.current=!1,t.abrupt("return",n);case 13:throw t.prev=13,t.t0=t["catch"](3),u(!1),l.current=!1,t.t0;case 18:case"end":return t.stop()}}),t,null,[[3,13]])}))),[e]);return{loading:c,run:o}}var R=e=>{Object(r["useEffect"])((()=>{null===e||void 0===e||e()}),[])},S=R;function w(e){var t=Object(r["useRef"])(e);t.current=e;var n=Object(r["useCallback"])((function(){for(var e=t.current,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return null===e||void 0===e?void 0:e(...a)}),[t]);return n}var x=w;function q(e){var t=Object(r["useRef"])(),n=Object(r["useRef"])(e);return Object.is(n.current,e)||(t.current=n.current,n.current=e),t.current}var I=e=>{var t=Object(r["useState"])(e),n=Object(a["a"])(t,2),c=n[0],u=n[1],l=x((()=>{u(e)}));return[c,u,l]},T=I;function Y(e){var t=k(),n=r["useState"](e),c=Object(a["a"])(n,2),u=c[0],l=c[1],o=r["useCallback"]((e=>{t||l(e)}),[]);return[u,o]}var J=Y,A=n("k1fw"),L=e=>{var t=Object(r["useState"])(e),n=Object(a["a"])(t,2),u=n[0],l=n[1],o=Object(r["useCallback"])((e=>{l((t=>{var n=c(e)?e(t):e;return n instanceof Object?Object(A["a"])(Object(A["a"])({},t),n):t}))}),[]);return[u,o]},V=L,B=n("BkRI"),D=n.n(B);function F(e,t){var n=Object(r["useRef"])(null),a=Object(r["useRef"])(null),c=t.onShow,u=t.onFormart,l=t.onHide,o=Object(r["useCallback"])((e=>{a.current=e}),[]);return Object(r["useImperativeHandle"])(e,(()=>({onShow:function(e){n.current=D()(e),c&&c(n.current)},onHide:function(e){l&&l(e)},getChildData:function(){return a.current}}))),{parentData:u?u(n.current):n.current,setParentData:o}}var N=n("DzJC"),P=n.n(N);function Z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=Object(r["useRef"])(e);a.current=e;var c=Object(r["useRef"])(P()((function(){return a.current(...arguments)}),t,n));return j((()=>{c.current.cancel()})),{run:c.current,cancel:c.current.cancel,flush:c.current.flush}}var z=Z,H=()=>{var e=Object(r["useRef"])(!0),t=e.current;return t?(e.current=!1,!0):t},M=(e,t)=>{t=Array.isArray(t)&&t.length>0?t:void 0;var n=H();Object(r["useEffect"])((()=>{if(!n)return e()}),t)},X=M},z7fR:function(e,t,n){"use strict";n.r(t);n("DYRE");var a=n("zeV3"),r=(n("+L6B"),n("2/Rp")),c=n("tJVT"),u=n("q1tI"),l=n.n(u),o=n("xAjY");function i(){var e=Object(o["o"])({foo:0,count:0}),t=Object(c["a"])(e,2),n=t[0],u=t[1];return l.a.createElement("div",null,l.a.createElement("p",null,"* \u8bbe\u7f6e\u76f8\u540c\u7684 foo/bar \u503c\u65f6\u8fd8\u662f\u4f1a\u89e6\u53d1\u6e32\u67d3"),l.a.createElement("p",{style:{color:"gray"}},"\u65f6\u95f4\u6233\uff08\u76d1\u6d4b\u662f\u5426\u89e6\u53d1\u6e32\u67d3\uff09\uff1a",Date.now()),l.a.createElement(a["b"],null,l.a.createElement(r["a"],{type:"primary",onClick:()=>u({foo:42})},"\u8bbe\u7f6e foo"),l.a.createElement(r["a"],{type:"primary",onClick:()=>u({bar:"biz"})},"\u8bbe\u7f6e bar"),l.a.createElement(r["a"],{type:"primary",onClick:()=>u((e=>({count:e.count+1})))},"count + 1"),l.a.createElement(r["a"],{type:"dashed",onClick:()=>{u(1324)}},"\u975e\u5bf9\u8c61\u6570\u636e\u4e0d\u5904\u7406")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("pre",null,JSON.stringify(n,null,2)))}t["default"]=i}}]);