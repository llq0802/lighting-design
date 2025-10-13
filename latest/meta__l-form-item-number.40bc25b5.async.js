"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[8179],{5245:function(t,a,e){var d;e.r(a),e.d(a,{demos:function(){return i}});var l=e(90228),u=e.n(l),I=e(87999),m=e.n(I),r=e(75271),p=e(69243),i={"l-form-item-number-demo-demo":{component:r.memo(r.lazy(function(){return e.e(9600).then(e.bind(e,23945))})),asset:{type:"BLOCK",id:"l-form-item-number-demo-demo",refAtomIds:["l-form-item-number"],dependencies:{"index.tsx":{type:"FILE",value:e(16149).Z},"lighting-design":{type:"NPM",value:"3.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"lighting-design":p,react:d||(d=e.t(r,2))},renderOpts:{compile:function(){var s=m()(u()().mark(function v(){var o,x=arguments;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(8816).then(e.bind(e,28816));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,x));case 3:case"end":return n.stop()}},v)}));function c(){return s.apply(this,arguments)}return c}()}}}},5408:function(t,a,e){e.r(a),e.d(a,{texts:function(){return d}});const d=[{value:"\u6570\u5B57\u8F93\u5165\u6846",paraId:0,tocIndex:0},{value:"\u7279\u70B9",paraId:1,tocIndex:0},{value:"\u8FD4\u56DE\u7684\u503C\u4E3A\u7C7B\u578B\u6570\u5B57",paraId:2,tocIndex:0},{value:`import { LFormItemNumber } from 'lighting-design';
`,paraId:3,tocIndex:3},{value:"\u9664\u4E86\u4EE5\u4E0B\u53C2\u6570\uFF0C\u5176\u4F59\u548C ",paraId:4,tocIndex:3},{value:"LFormItem",paraId:5,tocIndex:3},{value:" \u4E00\u6837\u3002",paraId:4,tocIndex:3},{value:"\u53C2\u6570",paraId:6,tocIndex:3},{value:"\u8BF4\u660E",paraId:6,tocIndex:3},{value:"\u7C7B\u578B",paraId:6,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:3},{value:"placeholder",paraId:6,tocIndex:3},{value:"placeholder",paraId:6,tocIndex:3},{value:"string",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3},{value:"precision",paraId:6,tocIndex:3},{value:"\u4FDD\u7559\u5C0F\u6570\u70B9\u540E\u51E0\u4F4D",paraId:6,tocIndex:3},{value:"number",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3},{value:"min",paraId:6,tocIndex:3},{value:"\u6700\u5C0F\u503C",paraId:6,tocIndex:3},{value:"number",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3},{value:"max",paraId:6,tocIndex:3},{value:"\u6700\u5927\u503C",paraId:6,tocIndex:3},{value:"number",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3},{value:"disabled",paraId:6,tocIndex:3},{value:"InputNumber['disabled']",paraId:6,tocIndex:3},{value:"InputNumber['disabled']",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3},{value:"variant",paraId:6,tocIndex:3},{value:"InputNumber['variant']",paraId:6,tocIndex:3},{value:"InputNumber['variant']",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3},{value:"size",paraId:6,tocIndex:3},{value:"InputNumber['size']",paraId:6,tocIndex:3},{value:"InputNumber['size']",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3},{value:"prefix",paraId:6,tocIndex:3},{value:"InputNumber['prefix']",paraId:6,tocIndex:3},{value:"InputNumber['prefix']",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3},{value:"suffix",paraId:6,tocIndex:3},{value:"InputNumber['suffix']",paraId:6,tocIndex:3},{value:"InputNumber['suffix']",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3},{value:"addonAfter",paraId:6,tocIndex:3},{value:"InputNumber['addonAfter']",paraId:6,tocIndex:3},{value:"InputNumber['addonAfter']",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3},{value:"addonBefore",paraId:6,tocIndex:3},{value:"InputNumber['addonBefore']",paraId:6,tocIndex:3},{value:"InputNumber['addonBefore']",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3},{value:"numberProps",paraId:6,tocIndex:3},{value:"antd ",paraId:6,tocIndex:3},{value:"Input.Number",paraId:6,tocIndex:3},{value:"\u7684\u5C5E\u6027",paraId:6,tocIndex:3},{value:"InputNumberProps",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3}]},16149:function(t,a){a.Z=`import { LForm, LFormItemNumber } from 'lighting-design';
import React from 'react';

type FieldType = {
  number1?: string;
};

const App: React.FC = () => {
  const [form] = LForm.useForm<FieldType>();
  return (
    <LForm<FieldType>
      labelWidth={100}
      form={form}
      onFinish={(values) => {
        console.log('===onFinish===', values);
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(true);
          }, 2000);
        });
      }}
    >
      <LFormItemNumber name="number1" label="\u91D1\u989D" />
      <LFormItemNumber name="number2" label="\u5C0F\u6570\u70B9" precision={2} />
      <LFormItemNumber name="number3" label="min,max" min={0} max={100} />
      <LFormItemNumber name="number4" label="suffix" suffix="\uFFE5" />
      <LFormItemNumber name="number4" label="addonAfter" addonAfter="$" />
    </LForm>
  );
};

export default App;
`}}]);
