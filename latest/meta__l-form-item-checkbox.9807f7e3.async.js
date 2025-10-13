"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[31],{4330:function(r,n,e){var t;e.r(n),e.d(n,{demos:function(){return _}});var s=e(90228),l=e.n(s),o=e(87999),i=e.n(o),m=e(75271),u=e(78855),d=e(61291),f=e.n(d),p=e(69243),g=e(85768),_={"l-form-item-checkbox-demo-demo":{component:m.memo(m.lazy(function(){return e.e(290).then(e.bind(e,5731))})),asset:{type:"BLOCK",id:"l-form-item-checkbox-demo-demo",refAtomIds:["l-form-item-checkbox"],dependencies:{"index.tsx":{type:"FILE",value:e(99133).Z},ahooks:{type:"NPM",value:"3.9.0"},"better-mock":{type:"NPM",value:"0.3.7"},"lighting-design":{type:"NPM",value:"3.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{ahooks:u,"better-mock":d,"lighting-design":p,"lighting-design/test":g,react:t||(t=e.t(m,2))},renderOpts:{compile:function(){var h=i()(l()().mark(function b(){var c,v=arguments;return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(8816).then(e.bind(e,28816));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,v));case 3:case"end":return a.stop()}},b)}));function I(){return h.apply(this,arguments)}return I}()}}}},85768:function(r,n,e){e.r(n),e.d(n,{getRandomNumber:function(){return s},sleep:function(){return t}});function t(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1e3;return new Promise(function(o){setTimeout(o,l)})}var s=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:300;return Math.floor(Math.random()*(i-o+1))+o}},57315:function(r,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"\u591A\u9009\u6846",paraId:0,tocIndex:0},{value:`import { LFormItemCheckbox } from 'lighting-design';
`,paraId:1,tocIndex:3},{value:"\u9664\u4E86\u4EE5\u4E0B\u53C2\u6570\uFF0C\u5176\u4F59\u548C ",paraId:2,tocIndex:3},{value:"LFormItem",paraId:3,tocIndex:3},{value:" \u4E00\u6837\u3002",paraId:2,tocIndex:3},{value:"\u5305\u542B ",paraId:4,tocIndex:3},{value:"LFormItemSelect",paraId:5,tocIndex:3},{value:" \u7684 ",paraId:4,tocIndex:3},{value:"request",paraId:4,tocIndex:3},{value:" ",paraId:4,tocIndex:3},{value:"requestOptions",paraId:4,tocIndex:3},{value:" ",paraId:4,tocIndex:3},{value:"spin",paraId:4,tocIndex:3},{value:" ",paraId:4,tocIndex:3},{value:"actionRef",paraId:4,tocIndex:3},{value:" ",paraId:4,tocIndex:3},{value:"options",paraId:4,tocIndex:3},{value:" ",paraId:4,tocIndex:3},{value:"fieldNames",paraId:4,tocIndex:3},{value:" ",paraId:4,tocIndex:3},{value:"disabled",paraId:4,tocIndex:3}]},99133:function(r,n){n.Z=`import { useMount } from 'ahooks';
import Mock from 'better-mock';
import { LForm, LFormItemCheckbox, type LFormItemActionRef } from 'lighting-design';
import { sleep } from 'lighting-design/test';
import React, { useRef } from 'react';

const opts1 = Mock.mock({ 'list|4': [{ label: '@cname', value: '@id' }] }).list;
const opts2 = Mock.mock({ 'list|4': [{ code: '@id', city: '@city' }] }).list;

type FieldType = {
  checkbox1?: string;
  checkbox2?: string;
  checkbox3?: string;
  checkbox4?: string;
  checkbox5?: string;
  checkbox6?: string;
};

const App: React.FC = () => {
  const [form] = LForm.useForm<FieldType>();

  const actionRef = useRef<LFormItemActionRef>();

  useMount(() => {
    setTimeout(() => {
      actionRef.current?.run();
    }, 1000);
  });

  return (
    <LForm<FieldType>
      labelWidth={120}
      submitter={{
        position: 'center',
      }}
      form={form}
      onFinish={async (values) => {
        await sleep();
        console.log('===onFinish===', values);
      }}
    >
      <LFormItemCheckbox label="\u57FA\u7840" name="checkbox1" required options={opts1} />
      <LFormItemCheckbox
        label="disabled"
        name="checkbox3"
        required
        options={[
          { label: '\u4E0A\u73ED', value: '1', disabled: true },
          { label: '\u7761\u89C9', value: '2' },
          { label: '\u6478\u9C7C', value: '3' },
          { label: '\u6253\u8C46\u8C46', value: '4' },
        ]}
      />
      <LFormItemCheckbox
        label="fieldNames"
        name="checkbox2"
        options={opts2}
        fieldNames={{ label: 'city', value: 'code' }}
      />
      <LFormItemCheckbox
        label="request"
        name="checkbox4"
        required
        request={async () => {
          await sleep();
          return Mock.mock({ 'list|4': [{ label: '@cname', value: '@id' }] }).list;
        }}
      />
      <LFormItemCheckbox
        label="checkboxProps"
        name="checkbox5"
        required
        options={Mock.mock({ 'list|4': [{ label: '@cname', value: '@id' }] }).list}
        checkboxProps={{ name: 'checkboxProps-checkbox5' }}
      />
      <LFormItemCheckbox
        actionRef={actionRef}
        label="actionRef"
        name="checkbox6"
        request={async () => {
          await sleep();
          return Mock.mock({ 'list|4': [{ label: '@cname', value: '@id' }] }).list;
        }}
        requestOptions={{
          cacheKey: 'LFormItemCheckbox-Demo1-1',
          manual: true,
        }}
      />
    </LForm>
  );
};

export default App;
`}}]);
