"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[8074],{11149:function(d,a,e){var l;e.r(a),e.d(a,{demos:function(){return m}});var i=e(90228),t=e.n(i),o=e(87999),p=e.n(o),r=e(75271),s=e(69243),m={"l-form-item-switch-demo-demo":{component:r.memo(r.lazy(function(){return e.e(9309).then(e.bind(e,26928))})),asset:{type:"BLOCK",id:"l-form-item-switch-demo-demo",refAtomIds:["l-form-item-switch"],dependencies:{"index.tsx":{type:"FILE",value:e(52065).Z},"lighting-design":{type:"NPM",value:"3.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"lighting-design":s,react:l||(l=e.t(r,2))},renderOpts:{compile:function(){var I=p()(t()().mark(function _(){var u,c=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(8816).then(e.bind(e,28816));case 2:return n.abrupt("return",(u=n.sent).default.apply(u,c));case 3:case"end":return n.stop()}},_)}));function v(){return I.apply(this,arguments)}return v}()}}}},70876:function(d,a,e){e.r(a),e.d(a,{texts:function(){return l}});const l=[{value:"\u9700\u8981\u8868\u793A\u5F00\u5173\u72B6\u6001/\u4E24\u79CD\u72B6\u6001\u4E4B\u95F4\u7684\u5207\u6362\u65F6",paraId:0,tocIndex:0},{value:"\u7279\u70B9",paraId:1,tocIndex:0},{value:"\u652F\u6301\u80CC\u666F\u989C\u8272\u7684\u8BBE\u7F6E",paraId:2,tocIndex:0},{value:"\u652F\u6301\u81EA\u5B9A\u4E49\u9009\u4E2D\u4E0E\u672A\u9009\u4E2D\u7684\u503C",paraId:2,tocIndex:0},{value:"LFormItemSwitch",paraId:3},{value:"\u8868\u793A",paraId:3},{value:"true",paraId:3},{value:" ",paraId:3},{value:"false",paraId:3},{value:" \u4E24\u79CD\u72B6\u6001\uFF0C\u4E00\u822C\u4E0D\u5EFA\u8BAE\u914D\u7F6E ",paraId:3},{value:"required",paraId:3},{value:"\u5C5E\u6027 , \u5982\u679C\u6709\u591A\u4E2A\u72B6\u6001 \u8BF7\u4F7F\u7528",paraId:3},{value:"\u5355\u9009\u6846",paraId:3},{value:"\u6216\u8005",paraId:3},{value:"\u4E0B\u62C9\u6846",paraId:3},{value:`import { FormItemSwitch } from 'lighting-design';
`,paraId:4},{value:"\u9664\u4E86\u4EE5\u4E0B\u53C2\u6570\uFF0C\u5176\u4F59\u548C ",paraId:5},{value:"LFormItem",paraId:6},{value:" \u4E00\u6837\u3002",paraId:5},{value:"\u53C2\u6570",paraId:7},{value:"\u8BF4\u660E",paraId:7},{value:"\u7C7B\u578B",paraId:7},{value:"\u9ED8\u8BA4\u503C",paraId:7},{value:"checkedValue",paraId:7},{value:"\u9009\u4E2D\u7684\u503C",paraId:7},{value:"string | number | boolean",paraId:7},{value:"true",paraId:7},{value:"unCheckedValue",paraId:7},{value:"\u672A\u9009\u4E2D\u7684\u503C",paraId:7},{value:"string | number | boolean",paraId:7},{value:"false",paraId:7},{value:"checkedBg",paraId:7},{value:"\u9009\u4E2D\u7684\u80CC\u666F\u989C\u8272",paraId:7},{value:"string",paraId:7},{value:"-",paraId:7},{value:"unCheckedBg",paraId:7},{value:"\u672A\u9009\u4E2D\u7684\u80CC\u666F\u989C\u8272",paraId:7},{value:"string",paraId:7},{value:"-",paraId:7},{value:"checkedChildren",paraId:7},{value:"\u9009\u4E2D\u7684\u5185\u5BB9",paraId:7},{value:"ReactNode",paraId:7},{value:"-",paraId:7},{value:"unCheckedChildren",paraId:7},{value:"\u672A\u9009\u4E2D\u7684\u5185\u5BB9",paraId:7},{value:"ReactNode",paraId:7},{value:"-",paraId:7},{value:"switchProps",paraId:7},{value:"antd \u5F00\u5173\u7684\u5C5E\u6027",paraId:7},{value:"SwitchProps",paraId:7},{value:"-",paraId:7}]},52065:function(d,a){a.Z=`import { LForm, LFormItemSwitch } from 'lighting-design';
import React from 'react';

type FieldType = {
  input?: string;
  input1?: number;
  input2?: number;
};

const App: React.FC = () => {
  const [form] = LForm.useForm<FieldType>();
  return (
    <LForm<FieldType>
      labelWidth={150}
      form={form}
      onFinish={(values) => {
        console.log('===onFinish===', values);
      }}
    >
      <LFormItemSwitch name="input" label="\u57FA\u7840" />
      <LFormItemSwitch name="input1" label="unCheckedValue" checkedValue={1} unCheckedValue={0} />
      <LFormItemSwitch name="input2" label="unCheckedBg" unCheckedBg="red" checkedBg="yellow" />
    </LForm>
  );
};

export default App;
`}}]);
