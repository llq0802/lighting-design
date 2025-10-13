"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[7276],{87241:function(l,n,e){var a;e.r(n),e.d(n,{demos:function(){return v}});var r=e(90228),d=e.n(r),t=e(87999),i=e.n(t),s=e(75271),m=e(78855),u=e(61291),h=e.n(u),p=e(69243),I=e(85768),v={"l-form-item-radio-demo-demo":{component:s.memo(s.lazy(function(){return e.e(8052).then(e.bind(e,2862))})),asset:{type:"BLOCK",id:"l-form-item-radio-demo-demo",refAtomIds:["l-form-item-radio"],dependencies:{"index.tsx":{type:"FILE",value:e(9976).Z},ahooks:{type:"NPM",value:"3.9.0"},"better-mock":{type:"NPM",value:"0.3.7"},"lighting-design":{type:"NPM",value:"3.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{ahooks:m,"better-mock":u,"lighting-design":p,"lighting-design/test":I,react:a||(a=e.t(s,2))},renderOpts:{compile:function(){var g=i()(d()().mark(function x(){var c,b=arguments;return d()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(8816).then(e.bind(e,28816));case 2:return o.abrupt("return",(c=o.sent).default.apply(c,b));case 3:case"end":return o.stop()}},x)}));function _(){return g.apply(this,arguments)}return _}()}}}},85768:function(l,n,e){e.r(n),e.d(n,{getRandomNumber:function(){return r},sleep:function(){return a}});function a(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1e3;return new Promise(function(t){setTimeout(t,d)})}var r=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:300;return Math.floor(Math.random()*(i-t+1))+t}},67643:function(l,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"\u5355\u9009\u6846",paraId:0,tocIndex:0},{value:"\u7279\u70B9",paraId:1,tocIndex:0},{value:"\u652F\u6301\u8BF7\u6C42\u6570\u636E\u83B7\u5F97 ",paraId:2,tocIndex:0},{value:"options",paraId:2,tocIndex:0},{value:"\u652F\u6301\u914D\u7F6E",paraId:2,tocIndex:0},{value:"\u5168\u90E8",paraId:2,tocIndex:0},{value:"\u9009\u9879",paraId:2,tocIndex:0},{value:`import { LFormItemRadio } from 'lighting-design';
`,paraId:3,tocIndex:3},{value:"\u9664\u4E86\u4EE5\u4E0B\u53C2\u6570\uFF0C\u5176\u4F59\u548C ",paraId:4,tocIndex:3},{value:"LFormItem",paraId:5,tocIndex:3},{value:` \u4E00\u6837\u3002
\u5305\u542B `,paraId:4,tocIndex:3},{value:"LFormItemSelect",paraId:6,tocIndex:3},{value:" \u7684 ",paraId:4,tocIndex:3},{value:"request",paraId:4,tocIndex:3},{value:" ",paraId:4,tocIndex:3},{value:"requestOptions",paraId:4,tocIndex:3},{value:" ",paraId:4,tocIndex:3},{value:"spin",paraId:4,tocIndex:3},{value:" ",paraId:4,tocIndex:3},{value:"actionRef",paraId:4,tocIndex:3},{value:" ",paraId:4,tocIndex:3},{value:"options",paraId:4,tocIndex:3},{value:" ",paraId:4,tocIndex:3},{value:"fieldNames",paraId:4,tocIndex:3},{value:" ",paraId:4,tocIndex:3},{value:"disabled",paraId:4,tocIndex:3},{value:" ",paraId:4,tocIndex:3},{value:"size",paraId:4,tocIndex:3},{value:"\u53C2\u6570",paraId:7,tocIndex:3},{value:"\u8BF4\u660E",paraId:7,tocIndex:3},{value:"\u7C7B\u578B",paraId:7,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:3},{value:"block",paraId:7,tocIndex:3},{value:"\u5C06 RadioGroup \u5BBD\u5EA6\u8C03\u6574\u4E3A\u5176\u7236\u5BBD\u5EA6\u7684\u9009\u9879",paraId:7,tocIndex:3},{value:"RadioGroupProps['block']",paraId:7,tocIndex:3},{value:"-",paraId:7,tocIndex:3},{value:"optionType",paraId:7,tocIndex:3},{value:"\u7528\u4E8E\u8BBE\u7F6E Radio options \u7C7B\u578B",paraId:7,tocIndex:3},{value:"RadioGroupProps['optionType']",paraId:7,tocIndex:3},{value:"-",paraId:7,tocIndex:3},{value:"buttonStyle",paraId:7,tocIndex:3},{value:"RadioButton \u7684\u98CE\u683C\u6837\u5F0F",paraId:7,tocIndex:3},{value:"RadioGroupProps['buttonStyle']",paraId:7,tocIndex:3},{value:"-",paraId:7,tocIndex:3},{value:"radioProps",paraId:7,tocIndex:3},{value:"\u5355\u9009\u7EC4 Props",paraId:7,tocIndex:3},{value:"RadioGroupProps",paraId:7,tocIndex:3},{value:"-",paraId:7,tocIndex:3}]},9976:function(l,n){n.Z=`import { useMount } from 'ahooks';
import Mock from 'better-mock';
import { LForm, LFormItemRadio, type LFormItemActionRef } from 'lighting-design';
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
  checkbox7?: string;
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
      <LFormItemRadio label="\u57FA\u7840" name="checkbox1" required options={opts1} />
      <LFormItemRadio
        label="disabled"
        name="checkbox3"
        required
        initialValue={'4'}
        options={[
          { label: '\u4E0A\u73ED', value: '1', disabled: true },
          { label: '\u7761\u89C9', value: '2' },
          { label: '\u6478\u9C7C', value: '3' },
          { label: '\u6253\u8C46\u8C46', value: '4' },
        ]}
      />
      <LFormItemRadio
        label="fieldNames"
        name="checkbox2"
        options={opts2}
        fieldNames={{ label: 'city', value: 'code' }}
      />
      <LFormItemRadio
        label="request"
        name="checkbox4"
        required
        request={async () => {
          await sleep();
          return Mock.mock({ 'list|4': [{ label: '@cname', value: '@id' }] }).list;
        }}
      />
      <LFormItemRadio
        label="radioProps"
        name="checkbox5"
        required
        options={Mock.mock({ 'list|4': [{ label: '@cname', value: '@id' }] }).list}
        radioProps={{ name: 'radioProps-checkbox5' }}
      />
      <LFormItemRadio
        actionRef={actionRef}
        label="actionRef"
        name="checkbox6"
        request={async () => {
          await sleep();
          return Mock.mock({ 'list|4': [{ label: '@cname', value: '@id' }] }).list;
        }}
        requestOptions={{
          cacheKey: 'LFormItemRadio-Demo1-1',
          manual: true,
        }}
      />
      <LFormItemRadio
        optionType="button"
        buttonStyle="solid"
        label="\u6309\u94AE\u578B"
        name="checkbox7"
        options={Mock.mock({ 'list|4': [{ label: '@cname', value: '@id' }] }).list}
      />
    </LForm>
  );
};

export default App;
`}}]);
