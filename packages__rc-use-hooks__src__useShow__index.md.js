(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[33,13],{MZF8:function(e,n,a){"use strict";var t=a("ogwx");a.d(n,"a",(function(){return t["b"]}));a("VCU9")},RUm1:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),r=a("dEAq"),c=a("Zxc8"),o=a("H1Ra"),m=a("dMo/"),i=l.a.memo((e=>{var n=e.demos,a=n["useshow-demo1"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"useshow"},l.a.createElement(r["AnchorLink"],{to:"#useshow","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"useShow"),l.a.createElement("p",null,"\u7236\u7ec4\u4ef6\u901a\u8fc7 ref \u5524\u8d77\u5b50\u7ec4\u4ef6\u3001\u7528\u4e8e\u4e1a\u52a1\u529f\u80fd\u4ee3\u7801\u5206\u79bb\u3001\u907f\u514d\u8fc7\u591a\u72b6\u6001\u548c\u4e1a\u52a1\u4ee3\u7801\u96c6\u4e2d\u5728\u4e00\u4e2a\u6587\u4ef6\u4e0a\u3002"),l.a.createElement("p",null,"\u57fa\u4e8e useImperativeHandle\u3001\u53ef\u4ee5\u76f8\u4e92\u4f20\u53c2\u3002\u5404\u7ec4\u4ef6\u62e5\u6709\u72ec\u7acb\u7684\u72b6\u6001\u3001",l.a.createElement("code",null,"\u72b6\u6001\u66f4\u65b0\u4e5f\u4e0d\u4f1a\u9020\u6210\u5176\u4ed6\u7ec4\u4ef6\u91cd\u590d\u6267\u884c"),"\u3002"),l.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.a.createElement(r["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),l.a.createElement("h3",{id:"\u57fa\u7840\u7528\u6cd5"},l.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),l.a.createElement(c["default"],n["useshow-demo1"].previewerProps,l.a.createElement(a,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement(o["a"],{code:"//\u7236\u7ec4\u4ef6\nconst funRef = useRef<OnShowInstance>(null);\nfunRef.current?.onShow({name:'\u674e\u5c9a\u6e05',age:'25})\n<ChildModel funcRef={funRef} />;\n\n//\u5b50\u7ec4\u4ef6\n\nconst { parentData, setParentData } = useShow(funcRef, {\n  onShow: (data: Record<string, any>) => {\n    console.log('\u7236\u7ec4\u4ef6\u8c03\u7528\u4e86onShow\u5e76\u4f20\u53c2\u6570 ', data); // {name:'\u674e\u5c9a\u6e05',age:'25}\n  },\n});",lang:"typescript"}),l.a.createElement("h3",{id:"\u7236\u7ec4\u4ef6\u8c03\u7528"},l.a.createElement(r["AnchorLink"],{to:"#\u7236\u7ec4\u4ef6\u8c03\u7528","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u7236\u7ec4\u4ef6\u8c03\u7528"),l.a.createElement(o["a"],{code:"funRef.current?.onShow(data); // \u89e6\u53d1\u5b50\u7ec4\u4ef6\u65b9\u6cd5onShow\nfunRef.current?.onHide(); // \u89e6\u53d1\u5b50\u7ec4\u4ef6\u65b9\u6cd5onHide\nfunRef.current?.getChildData(); // \u83b7\u53d6\u5b50\u7ec4\u4ef6\u6570\u636e",lang:"ts"}),l.a.createElement("h3",{id:"\u5b50\u7ec4\u4ef6\u8c03\u7528"},l.a.createElement(r["AnchorLink"],{to:"#\u5b50\u7ec4\u4ef6\u8c03\u7528","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5b50\u7ec4\u4ef6\u8c03\u7528"),l.a.createElement(o["a"],{code:"/**\n *  record \u7236\u7ec4\u4ef6\u4f20\u7ed9\u5b50\u7ec4\u4ef6\u7684\u53c2\u6570\n *  onCallback \u5b50\u7ec4\u4ef6\u6267\u884c\u65b9\u6cd5\uff0c\u5f80ref\u5b58\u653e\u6570\u636e\u3001\u7236\u7ec4\u4ef6\u4f7f\u7528getData\u83b7\u53d6\u6570\u636e\n **/\nconst { parentData, setParentData } = useShow(funRef, {\n  onShow: () => void, // \u7236\u7ec4\u4ef6\u6267\u884conShow\u7684\u65f6\u5019\u89e6\u53d1\n  onHide: () => void, // \u7236\u7ec4\u4ef6\u6267\u884conShow\u7684\u65f6\u5019\u89e6\u53d1\n  onFormart: (data:Record<string,any>) => any, // \u683c\u5f0f\u5316\u7236\u7ec4\u4ef6\u8c03\u7528onShow\u4f20\u5165\u7684\u53c2\u6570\n});",lang:"ts"}),l.a.createElement("h3",{id:"params"},l.a.createElement(r["AnchorLink"],{to:"#params","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Params"),l.a.createElement(m["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"state"),l.a.createElement("td",null,"state \u7684\u503c"),l.a.createElement("td",null,"-"),l.a.createElement("td",null,"-")))),l.a.createElement("h3",{id:"result"},l.a.createElement(r["AnchorLink"],{to:"#result","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Result"),l.a.createElement(m["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"setState"),l.a.createElement("td",null,"\u7b2c\u4e00\u4e2a\u53c2\u6570\u4f20\u5165\u65b0\u7684 state,\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u56de\u8c03\u51fd\u6570\u63a5\u53d7\u6700\u65b0\u4f20\u5165\u7684 state"),l.a.createElement("td",null,"(newState: SetStateAction",l.a.createElement("t",null,", cb: (newState: T) => void) => void;")),l.a.createElement("td",null,"-")))),l.a.createElement("h3",{id:"onshowinstance"},l.a.createElement(r["AnchorLink"],{to:"#onshowinstance","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"OnShowInstance"))))}));n["default"]=e=>{var n=l.a.useContext(r["context"]),a=n.demos;return l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(i,{demos:a})}}}]);