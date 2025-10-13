"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[3733],{17201:function(r,n,e){var a;e.r(n),e.d(n,{demos:function(){return c}});var l=e(90228),d=e.n(l),t=e(87999),s=e.n(t),u=e(75271),i=e(61291),f=e.n(i),I=e(69243),p=e(85768),c={"l-form-item-mentions-demo-demo":{component:u.memo(u.lazy(function(){return e.e(5804).then(e.bind(e,72582))})),asset:{type:"BLOCK",id:"l-form-item-mentions-demo-demo",refAtomIds:["l-form-item-mentions"],dependencies:{"index.tsx":{type:"FILE",value:e(82170).Z},"better-mock":{type:"NPM",value:"0.3.7"},"lighting-design":{type:"NPM",value:"3.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"better-mock":i,"lighting-design":I,"lighting-design/test":p,react:a||(a=e.t(u,2))},renderOpts:{compile:function(){var v=s()(d()().mark(function g(){var m,x=arguments;return d()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(8816).then(e.bind(e,28816));case 2:return o.abrupt("return",(m=o.sent).default.apply(m,x));case 3:case"end":return o.stop()}},g)}));function _(){return v.apply(this,arguments)}return _}()}}}},85768:function(r,n,e){e.r(n),e.d(n,{getRandomNumber:function(){return l},sleep:function(){return a}});function a(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1e3;return new Promise(function(t){setTimeout(t,d)})}var l=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:300;return Math.floor(Math.random()*(s-t+1))+t}},98175:function(r,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"\u63D0\u53CA\u8F93\u5165\u6846",paraId:0,tocIndex:0},{value:`import { LFormItemMentions } from 'lighting-design';
`,paraId:1,tocIndex:3},{value:"\u9664\u4E86\u4EE5\u4E0B\u53C2\u6570\uFF0C\u5176\u4F59\u548C ",paraId:2,tocIndex:3},{value:"LFormItem",paraId:3,tocIndex:3},{value:" \u4E00\u6837\u3002",paraId:2,tocIndex:3},{value:"\u5305\u542B ",paraId:4,tocIndex:3},{value:"LFormItemSelect",paraId:5,tocIndex:3},{value:" \u7684 ",paraId:4,tocIndex:3},{value:"request",paraId:4,tocIndex:3},{value:" ",paraId:4,tocIndex:3},{value:"requestOptions",paraId:4,tocIndex:3},{value:" ",paraId:4,tocIndex:3},{value:"spin",paraId:4,tocIndex:3},{value:" ",paraId:4,tocIndex:3},{value:"actionRef",paraId:4,tocIndex:3},{value:" ",paraId:4,tocIndex:3},{value:"options",paraId:4,tocIndex:3},{value:" ",paraId:4,tocIndex:3},{value:"fieldNames",paraId:4,tocIndex:3},{value:" ",paraId:4,tocIndex:3},{value:"placeholder",paraId:4,tocIndex:3},{value:" ",paraId:4,tocIndex:3},{value:"disabled",paraId:4,tocIndex:3},{value:" ",paraId:4,tocIndex:3},{value:"variant",paraId:4,tocIndex:3},{value:" ",paraId:4,tocIndex:3},{value:"size",paraId:4,tocIndex:3},{value:"\u7528\u6CD5\u4E0E ",paraId:6,tocIndex:3},{value:"LFormItemSelect",paraId:7,tocIndex:3},{value:" \u4E00\u81F4",paraId:6,tocIndex:3},{value:"\u53C2\u6570",paraId:8,tocIndex:3},{value:"\u8BF4\u660E",paraId:8,tocIndex:3},{value:"\u7C7B\u578B",paraId:8,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:3},{value:"options",paraId:8,tocIndex:3},{value:"\u6570\u636E\u6E90",paraId:8,tocIndex:3},{value:"MentionProps[]",paraId:8,tocIndex:3},{value:"-",paraId:8,tocIndex:3},{value:"autoSize",paraId:8,tocIndex:3},{value:"\u81EA\u9002\u5E94\u5185\u5BB9\u9AD8\u5EA6",paraId:8,tocIndex:3},{value:"MentionProps['autoSize']",paraId:8,tocIndex:3},{value:"-",paraId:8,tocIndex:3},{value:"mentionsProps",paraId:8,tocIndex:3},{value:"antd.Mentions \u7684\u5176\u4ED6\u5C5E\u6027",paraId:8,tocIndex:3},{value:"MentionProps",paraId:8,tocIndex:3},{value:"-",paraId:8,tocIndex:3}]},82170:function(r,n){n.Z=`import Mock from 'better-mock';
import { LForm, LFormItemMentions } from 'lighting-design';
import { sleep } from 'lighting-design/test';
import React from 'react';
const opts1 = Mock.mock({ 'list|20': [{ label: '@cname', value: '@cname' }] }).list;

type FieldType = {
  mentions1?: string;
};

const App: React.FC = () => {
  const [form] = LForm.useForm<FieldType>();

  return (
    <LForm<FieldType>
      labelWidth={100}
      form={form}
      onFinish={(values) => {
        console.log('===onFinish===', values);
      }}
    >
      <LFormItemMentions required label="\u6807\u7B7E1" name="mentions1" options={opts1} />
      <LFormItemMentions
        label="request"
        name="mentions2"
        request={async () => {
          await sleep();
          return Mock.mock({ 'list|6': [{ label: '@cname', value: '@cname' }] }).list;
        }}
      />
    </LForm>
  );
};

export default App;
`}}]);
