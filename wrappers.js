(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16,10],{MZF8:function(e,t,n){"use strict";var r=n("ogwx");n.d(t,"a",(function(){return r["b"]}));n("VCU9")},OYlG:function(e,t,n){"use strict";n.r(t);var r=n("0Owb"),o=n("q1tI"),i=n.n(o),s=n("RGYn"),a=n("qLMh"),u=n("9og8"),c=n("rlch"),l="import { Button } from 'lighting-design';\r\nimport type { FC } from 'react';\r\n\r\nconst Demo: FC = () => {\r\n  return <Button loading> \u6309\u94ae</Button>;\r\n};\r\n\r\nexport default Demo;",p="import { Input } from 'lighting-design';\r\nimport type { FC } from 'react';\r\n\r\nconst LInput: FC = () => {\r\n  return <Input />;\r\n};\r\n\r\nexport default LInput;",d="import { useCallbackState } from 'rc-use-hooks';\r\nimport type { FC } from 'react';\r\n\r\nconst Demo1: FC = () => {\r\n  const [count, setcount] = useCallbackState<number>(0);\r\n\r\n  const onClick = () => {\r\n    setcount(count + 1, (newCount) => {\r\n      // \u66f4\u65b0\u5b8c\u6210\u540e\u6267\u884c\u4e00\u4e9b\u56de\u8c03\u64cd\u4f5c\r\n      console.log('newCount', newCount);\r\n    });\r\n  };\r\n\r\n  return <div onClick={onClick}>count: {count}</div>;\r\n};\r\n\r\nexport default Demo1;",m="import { useLatest } from 'rc-use-hooks';\r\nimport { useState } from 'react';\r\n\r\nconst demo1 = () => {\r\n  const [value, setValue] = useState(0);\r\n  const latestValue = useLatest(value);\r\n\r\n  return <div>latestValue:{latestValue}</div>;\r\n};\r\n\r\nexport default demo1;",h={"button-base":{component:Object(c["c"])({loader:function(){var e=Object(u["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"CfUW"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:l}},dependencies:{"lighting-design":{version:"0.1.0"},antd:{version:">=4.2.0",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},componentName:"Button",identifier:"button-base"}},"input-base":{component:Object(c["c"])({loader:function(){var e=Object(u["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"WSLC"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:p}},dependencies:{"lighting-design":{version:"0.1.0"},antd:{version:">=4.2.0",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},componentName:"Input",identifier:"input-base"}},"usecallbackstate-demo1":{component:Object(c["c"])({loader:function(){var e=Object(u["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"Li4z"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:d}},dependencies:{"rc-use-hooks":{version:"1.0.0"},react:{version:">=16.9.0"}},identifier:"usecallbackstate-demo1"}},"uselatest-demo1":{component:Object(c["c"])({loader:function(){var e=Object(u["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"uqnK"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:m}},dependencies:{"rc-use-hooks":{version:"1.0.0"},react:{version:">=16.9.0"}},identifier:"uselatest-demo1"}}},f=n("Zs1V"),b=n("KcUY"),g=n.n(b);t["default"]=e=>i.a.createElement(g.a,Object(r["a"])({},e,{config:s,demos:h,apis:f}))},RGYn:function(e){e.exports=JSON.parse('{"menus":{"en-US":{"/components":[{"title":"\u7ec4\u4ef6\u603b\u89c8","children":[{"path":"/components","title":"\u7ec4\u4ef6\u63cf\u8ff0"},{"path":"/components/button","title":"Button"},{"path":"/components/input","title":"Input"}]}],"/hooks":[{"title":"rc-use-hooks","children":[{"path":"/hooks/start","title":"\u5feb\u901f\u5f00\u59cb"}]},{"title":"state","children":[{"path":"/hooks/state/use-callback-state","title":"useCallbackState"},{"path":"/hooks/state/use-latest","title":"useLatest"}]}],"*":[{"path":"/","title":"\u9875\u9762\u7ea7\u522b\u7684\u524d\u7aef\u7ec4\u4ef6","meta":{"order":10}}],"/guide":[{"title":"\u6307\u5357","path":"/guide/","meta":{"order":1},"children":[{"path":"/guide/get-start","title":"\u5feb\u901f\u5f00\u59cb","meta":{"order":1}},{"path":"/guide/faq","title":"FAQ","meta":{"order":2}}]},{"path":"/guide/que","title":"\u5e38\u89c1\u95ee\u9898","meta":{"order":3}}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"order":1,"path":"/guide","title":"\u6307\u5357"},{"order":2,"path":"/components","title":"\u7ec4\u4ef6"},{"order":3,"path":"/hooks","title":"Hooks"},{"title":"GitHub","path":"https://github.com/llq0802/lighting-design"}]},"title":"lighting-design","logo":"https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png","mode":"site","repository":{"url":"","branch":"master"},"theme":{}}')},Zs1V:function(e){e.exports=JSON.parse('{"Button":{"default":[{"identifier":"className","description":"\u7c7b\u540d","type":"string","default":"-"},{"identifier":"size","description":"\u7c7b\u578b","type":"\\"small\\" | \\"medium\\" | \\"large\\"","default":"medium"},{"identifier":"type","description":"\u7c7b\u578b","type":"string","default":"-"},{"identifier":"loading","description":"\u7c7b\u578b","type":"boolean","default":"-"},{"identifier":"icon","description":"\u7c7b\u578b","type":"ReactNode","default":"-"},{"identifier":"style","description":"\u7c7b\u578b","type":"CSSProperties","default":"-"}]}}')}}]);