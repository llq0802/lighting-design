"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[1520],{6965:function(o,n,e){var t;e.r(n),e.d(n,{demos:function(){return v}});var i=e(90228),l=e.n(i),m=e(87999),I=e.n(m),d=e(75271),u=e(26253),p=e(48402),r=e(61291),b=e.n(r),c=e(69243),v={"l-form-item-segmented-demo-demo":{component:d.memo(d.lazy(function(){return e.e(485).then(e.bind(e,70874))})),asset:{type:"BLOCK",id:"l-form-item-segmented-demo-demo",refAtomIds:["l-form-item-segmented"],dependencies:{"index.tsx":{type:"FILE",value:e(76957).Z},"@ant-design/icons":{type:"NPM",value:"6.0.0"},antd:{type:"NPM",value:"5.27.3"},"better-mock":{type:"NPM",value:"0.3.7"},"lighting-design":{type:"NPM",value:"3.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@ant-design/icons":u,antd:p,"better-mock":r,"lighting-design":c,react:t||(t=e.t(d,2))},renderOpts:{compile:function(){var _=I()(l()().mark(function x(){var s,f=arguments;return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(8816).then(e.bind(e,28816));case 2:return a.abrupt("return",(s=a.sent).default.apply(s,f));case 3:case"end":return a.stop()}},x)}));function g(){return _.apply(this,arguments)}return g}()}}}},57631:function(o,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"\u5206\u6BB5\u63A7\u5236\u5668",paraId:0,tocIndex:0},{value:`import { LFormItemSegmented } from 'lighting-design';
`,paraId:1,tocIndex:3},{value:"\u9664\u4E86\u4EE5\u4E0B\u53C2\u6570\uFF0C\u5176\u4F59\u548C ",paraId:2,tocIndex:3},{value:"LFormItem",paraId:3,tocIndex:3},{value:" \u4E00\u6837\u3002",paraId:2,tocIndex:3},{value:"\u5305\u542B ",paraId:4,tocIndex:3},{value:"LFormItemSelect",paraId:5,tocIndex:3},{value:" \u7684 ",paraId:4,tocIndex:3},{value:"request",paraId:4,tocIndex:3},{value:" ",paraId:4,tocIndex:3},{value:"requestOptions",paraId:4,tocIndex:3},{value:" ",paraId:4,tocIndex:3},{value:"spin",paraId:4,tocIndex:3},{value:" ",paraId:4,tocIndex:3},{value:"actionRef",paraId:4,tocIndex:3},{value:" ",paraId:4,tocIndex:3},{value:"options",paraId:4,tocIndex:3},{value:" ",paraId:4,tocIndex:3},{value:"fieldNames",paraId:4,tocIndex:3},{value:" ",paraId:4,tocIndex:3},{value:"size",paraId:4,tocIndex:3},{value:" ",paraId:4,tocIndex:3},{value:"disabled",paraId:4,tocIndex:3},{value:"\u7528\u6CD5\u4E0E ",paraId:6,tocIndex:3},{value:"LFormItemSelect",paraId:7,tocIndex:3},{value:" \u4E00\u81F4",paraId:6,tocIndex:3},{value:"\u53C2\u6570",paraId:8,tocIndex:3},{value:"\u8BF4\u660E",paraId:8,tocIndex:3},{value:"\u7C7B\u578B",paraId:8,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:3},{value:"options",paraId:8,tocIndex:3},{value:"\u6570\u636E",paraId:8,tocIndex:3},{value:"SegmentedProps['options]",paraId:8,tocIndex:3},{value:"-",paraId:8,tocIndex:3},{value:"block",paraId:8,tocIndex:3},{value:"\u662F\u5426\u5360\u6EE1\u7236\u5143\u7D20",paraId:8,tocIndex:3},{value:"SegmentedProps['block]",paraId:8,tocIndex:3},{value:"-",paraId:8,tocIndex:3},{value:"isHighlightFirst",paraId:8,tocIndex:3},{value:"\u662F\u5426\u9ED8\u9AD8\u4EAE\u7B2C\u4E00\u4E2A\u9009\u9879 ",paraId:8,tocIndex:3},{value:"(\u53EA\u9AD8\u4EAE,\u4E0D\u4EE3\u8868\u6709\u503C)",paraId:8,tocIndex:3},{value:"boolean",paraId:8,tocIndex:3},{value:"false",paraId:8,tocIndex:3},{value:"segmentedProps",paraId:8,tocIndex:3},{value:"antd",paraId:8,tocIndex:3},{value:"\u5206\u6BB5\u7EC4\u4EF6 Props",paraId:8,tocIndex:3},{value:"SegmentedProps",paraId:8,tocIndex:3},{value:"-",paraId:8,tocIndex:3}]},76957:function(o,n){n.Z=`import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import Mock from 'better-mock';
import { LForm, LFormItemSegmented } from 'lighting-design';
import React from 'react';
const opts1 = Mock.mock({ 'list|4': [{ label: '@cname', value: '@id' }] }).list;
const opts2 = Mock.mock({ 'list|4': [{ code: '@id', city: '@city' }] }).list;
type FieldType = {
  segmented1?: string;
  segmented2?: string;
};

const App: React.FC = () => {
  const [form] = LForm.useForm<FieldType>();

  return (
    <LForm<FieldType>
      labelWidth={100}
      disabled
      form={form}
      onFinish={(values) => {
        console.log('===onFinish===', values);
      }}
    >
      <LFormItemSegmented disabled={false} label="\u57FA\u7840" required name="segmented1" options={opts1} />
      <LFormItemSegmented label="block" block required name="segmented2" options={opts1} />
      <LFormItemSegmented label="shape" shape="round" required name="segmented3" options={opts1} />
      <LFormItemSegmented
        required
        name="segmented4"
        label="fieldNames"
        options={opts2}
        fieldNames={{ label: 'city', value: 'code' }}
      />

      <LFormItemSegmented
        label="\u9009\u62E9"
        name="segmented5"
        initialValue="1"
        options={[
          {
            label: (
              <div style={{ padding: 4 }}>
                {' '}
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> <div>User 1</div>{' '}
              </div>
            ),
            value: '1',
          },
          {
            label: (
              <div style={{ padding: 4 }}>
                {' '}
                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar> <div>User 2</div>{' '}
              </div>
            ),
            value: '2',
          },
          {
            label: (
              <div style={{ padding: 4 }}>
                {' '}
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} /> <div>User 3</div>{' '}
              </div>
            ),
            value: '3',
          },
        ]}
      />
    </LForm>
  );
};

export default App;
`}}]);
