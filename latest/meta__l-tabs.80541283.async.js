"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[6606],{57090:function(l,e,n){var a;n.r(e),n.d(e,{demos:function(){return u}});var o=n(90228),i=n.n(o),r=n(87999),_=n.n(r),s=n(75271),m=n(69243),u={"l-tabs-demo-demo":{component:s.memo(s.lazy(function(){return n.e(6256).then(n.bind(n,56150))})),asset:{type:"BLOCK",id:"l-tabs-demo-demo",refAtomIds:["l-tabs"],dependencies:{"index.tsx":{type:"FILE",value:n(36685).Z},"lighting-design":{type:"NPM",value:"3.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"lighting-design":m,react:a||(a=n.t(s,2))},renderOpts:{compile:function(){var g=_()(i()().mark(function b(){var d,h=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(8816).then(n.bind(n,28816));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,h));case 3:case"end":return t.stop()}},b)}));function p(){return g.apply(this,arguments)}return p}()}}}},64642:function(l,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:"\u4E8C\u6B21\u5C01\u88C5\u7684 antd.Tabs \u7EC4\u4EF6\uFF0C\u5185\u5BB9\u81EA\u52A8\u6491\u7BD9\uFF0C\u4E00\u822C\u914D\u5408 LCard \u4F7F\u7528",paraId:0,tocIndex:0},{value:`import { LTabs } from 'lighting-design';
`,paraId:1,tocIndex:2},{value:"api \u4E0E antd.Tabs \u5B8C\u5168\u4E00\u81F4",paraId:2,tocIndex:2}]},36685:function(l,e){e.Z=`import type { TabsProps } from 'antd';
import { LCard, LTabs } from 'lighting-design';
import React from 'react';

type PropsType = {};
const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];
const Index: React.FC<PropsType> = ({}) => {
  return (
    <div
      style={{
        height: 500,
        border: '1px solid red',
      }}
    >
      <LCard size="small">
        <LTabs items={items}></LTabs>
      </LCard>
    </div>
  );
};

export default Index;
`}}]);
