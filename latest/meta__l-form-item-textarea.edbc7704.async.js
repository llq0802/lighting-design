"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[9279],{4042:function(d,n,e){var a;e.r(n),e.d(n,{demos:function(){return m}});var u=e(90228),o=e.n(u),t=e(87999),l=e.n(t),s=e(75271),p=e(69243),i=e(85768),m={"l-form-item-textarea-demo-demo":{component:s.memo(s.lazy(function(){return e.e(4903).then(e.bind(e,26128))})),asset:{type:"BLOCK",id:"l-form-item-textarea-demo-demo",refAtomIds:["l-form-item-textarea"],dependencies:{"index.tsx":{type:"FILE",value:e(13578).Z},"lighting-design":{type:"NPM",value:"3.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"lighting-design":p,"lighting-design/test":i,react:a||(a=e.t(s,2))},renderOpts:{compile:function(){var c=l()(o()().mark(function v(){var I,g=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8816).then(e.bind(e,28816));case 2:return r.abrupt("return",(I=r.sent).default.apply(I,g));case 3:case"end":return r.stop()}},v)}));function x(){return c.apply(this,arguments)}return x}()}}}},85768:function(d,n,e){e.r(n),e.d(n,{getRandomNumber:function(){return u},sleep:function(){return a}});function a(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1e3;return new Promise(function(t){setTimeout(t,o)})}var u=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:300;return Math.floor(Math.random()*(l-t+1))+t}},46150:function(d,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"\u591A\u884C\u8F93\u5165\u6846",paraId:0,tocIndex:0},{value:"\u7279\u70B9",paraId:1,tocIndex:0},{value:"\u652F\u6301\u7981\u7528\u7A7A\u683C",paraId:2,tocIndex:0},{value:`import { LFormItemTextArea } from 'lighting-design';
`,paraId:3,tocIndex:3},{value:"\u9664\u4E86\u4EE5\u4E0B\u53C2\u6570\uFF0C\u5176\u4F59\u548C ",paraId:4,tocIndex:3},{value:"LFormItem",paraId:5,tocIndex:3},{value:" \u4E00\u6837\u3002",paraId:4,tocIndex:3},{value:"\u53C2\u6570",paraId:6,tocIndex:3},{value:"\u8BF4\u660E",paraId:6,tocIndex:3},{value:"\u7C7B\u578B",paraId:6,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:3},{value:"disabled",paraId:6,tocIndex:3},{value:"InputTextAreaProps['disabled']",paraId:6,tocIndex:3},{value:"InputTextAreaProps['disabled']",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3},{value:"size",paraId:6,tocIndex:3},{value:"InputTextAreaProps['size']",paraId:6,tocIndex:3},{value:"InputTextAreaProps['size']",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3},{value:"placeholder",paraId:6,tocIndex:3},{value:"InputTextAreaProps['placeholder']",paraId:6,tocIndex:3},{value:"InputTextAreaProps['placeholder']",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3},{value:"variant",paraId:6,tocIndex:3},{value:"InputTextAreaProps['variant']",paraId:6,tocIndex:3},{value:"InputTextAreaProps['variant']",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3},{value:"showCount",paraId:6,tocIndex:3},{value:"InputTextAreaProps['showCount']",paraId:6,tocIndex:3},{value:"InputTextAreaProps['showCount']",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3},{value:"autoSize",paraId:6,tocIndex:3},{value:"InputTextAreaProps['autoSize']",paraId:6,tocIndex:3},{value:"InputTextAreaProps['autoSize']",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3},{value:"maxLength",paraId:6,tocIndex:3},{value:"InputTextAreaProps['maxLength']",paraId:6,tocIndex:3},{value:"InputTextAreaProps['maxLength']",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3},{value:"rows",paraId:6,tocIndex:3},{value:"InputTextAreaProps['rows']",paraId:6,tocIndex:3},{value:"InputTextAreaProps['rows']",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3},{value:"textAreaProps",paraId:6,tocIndex:3},{value:"Input.TextArea",paraId:6,tocIndex:3},{value:"\u6216\u8005",paraId:6,tocIndex:3},{value:"Input",paraId:6,tocIndex:3},{value:"\u7684\u5C5E\u6027",paraId:6,tocIndex:3},{value:"InputProps | InputTextAreaProps",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3}]},13578:function(d,n){n.Z=`import { LForm, LFormItemTextarea } from 'lighting-design';
import { sleep } from 'lighting-design/test';
import React from 'react';

type FieldType = {
  input?: string;
};

const App: React.FC = () => {
  const [form] = LForm.useForm<FieldType>();
  return (
    <LForm<FieldType>
      submitter={{
        isEnterSubmit: true,
        position: 'center',
        onReset(event) {
          console.log('onReset');
        },
        onSubmit: (vals) => {
          console.log('onSubmit', vals);
        },
      }}
      labelWidth={100}
      form={form}
      onFinish={async (values) => {
        console.log('===onFinish===', values);
        await sleep();
      }}
    >
      <LFormItemTextarea name="input1" label="\u5907\u6CE8" />
      <LFormItemTextarea
        name="input2"
        label="\u5907\u6CE8"
        autoSize={{
          minRows: 4,
          maxRows: 6,
        }}
      />
    </LForm>
  );
};

export default App;
`}}]);
