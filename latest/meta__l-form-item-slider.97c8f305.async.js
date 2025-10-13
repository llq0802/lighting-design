"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[3056],{63536:function(o,n,e){var a;e.r(n),e.d(n,{demos:function(){return p}});var l=e(90228),d=e.n(l),r=e(87999),s=e.n(r),i=e(75271),m=e(69243),I=e(85768),p={"l-form-item-slider-demo-demo":{component:i.memo(i.lazy(function(){return e.e(6356).then(e.bind(e,74707))})),asset:{type:"BLOCK",id:"l-form-item-slider-demo-demo",refAtomIds:["l-form-item-slider"],dependencies:{"index.tsx":{type:"FILE",value:e(88671).Z},"lighting-design":{type:"NPM",value:"3.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"lighting-design":m,"lighting-design/test":I,react:a||(a=e.t(i,2))},renderOpts:{compile:function(){var g=s()(d()().mark(function c(){var u,v=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8816).then(e.bind(e,28816));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,v));case 3:case"end":return t.stop()}},c)}));function _(){return g.apply(this,arguments)}return _}()}}}},85768:function(o,n,e){e.r(n),e.d(n,{getRandomNumber:function(){return l},sleep:function(){return a}});function a(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1e3;return new Promise(function(r){setTimeout(r,d)})}var l=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:300;return Math.floor(Math.random()*(s-r+1))+r}},59032:function(o,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"\u6ED1\u52A8\u6761",paraId:0,tocIndex:0},{value:`import { LFormItemSlider } from 'lighting-design';
`,paraId:1,tocIndex:3},{value:"\u9664\u4E86\u4EE5\u4E0B\u53C2\u6570\uFF0C\u5176\u4F59\u548C ",paraId:2,tocIndex:3},{value:"LFormItem",paraId:3,tocIndex:3},{value:" \u4E00\u6837\u3002",paraId:2,tocIndex:3},{value:"\u53C2\u6570",paraId:4,tocIndex:3},{value:"\u8BF4\u660E",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:3},{value:"disabled",paraId:4,tocIndex:3},{value:"\u7981\u7528",paraId:4,tocIndex:3},{value:"boolean",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"min",paraId:4,tocIndex:3},{value:"\u6700\u5C0F\u503C",paraId:4,tocIndex:3},{value:"number",paraId:4,tocIndex:3},{value:"0",paraId:4,tocIndex:3},{value:"max",paraId:4,tocIndex:3},{value:"\u6700\u5927\u503C",paraId:4,tocIndex:3},{value:"number",paraId:4,tocIndex:3},{value:"100",paraId:4,tocIndex:3},{value:"step",paraId:4,tocIndex:3},{value:"Slider \u7684 step",paraId:4,tocIndex:3},{value:"SliderProps['step']",paraId:4,tocIndex:3},{value:"1",paraId:4,tocIndex:3},{value:"marks",paraId:4,tocIndex:3},{value:"Slider \u7684 marks",paraId:4,tocIndex:3},{value:"SliderProps['marks']",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"sliderProps",paraId:4,tocIndex:3},{value:"antd \u6ED1\u5757\u7684\u5C5E\u6027",paraId:4,tocIndex:3},{value:"SliderProps",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3}]},88671:function(o,n){n.Z=`import { LForm, LFormItemSlider } from 'lighting-design';\r
import { sleep } from 'lighting-design/test';\r
import React from 'react';\r
\r
type FieldType = {\r
  input?: string;\r
};\r
\r
const App: React.FC = () => {\r
  const [form] = LForm.useForm<FieldType>();\r
  return (\r
    <LForm<FieldType>\r
      submitter={{\r
        isEnterSubmit: true,\r
        position: 'center',\r
        onReset(event) {\r
          console.log('onReset');\r
        },\r
        onSubmit: (vals) => {\r
          console.log('onSubmit', vals);\r
        },\r
      }}\r
      labelWidth={100}\r
      form={form}\r
      onFinish={async (values) => {\r
        console.log('===onFinish===', values);\r
        await sleep();\r
      }}\r
    >\r
      <LFormItemSlider name="slider1" label="\u8303\u56F4" />\r
    </LForm>\r
  );\r
};\r
\r
export default App;\r
`}}]);
