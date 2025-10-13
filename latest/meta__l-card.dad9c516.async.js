"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[6775],{75840:function(s,e,n){var a;n.r(e),n.d(e,{demos:function(){return c}});var d=n(90228),o=n.n(d),r=n(87999),_=n.n(r),i=n(75271),u=n(69243),c={"l-card-demo-demo":{component:i.memo(i.lazy(function(){return n.e(2171).then(n.bind(n,84906))})),asset:{type:"BLOCK",id:"l-card-demo-demo",refAtomIds:["l-card"],dependencies:{"index.tsx":{type:"FILE",value:n(80250).Z},"lighting-design":{type:"NPM",value:"3.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"lighting-design":u,react:a||(a=n.t(i,2))},renderOpts:{compile:function(){var m=_()(o()().mark(function p(){var l,y=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(8816).then(n.bind(n,28816));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,y));case 3:case"end":return t.stop()}},p)}));function g(){return m.apply(this,arguments)}return g}()}}}},17241:function(s,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:"\u7528\u6CD5\u4E0E antd.Card \u4E00\u81F4\uFF0C\u81EA\u52A8\u9002\u5E94\u7236\u5BB9\u5668\u9AD8\u5EA6\uFF0C\u7236\u5BB9\u5668\u6CA1\u6709\u9AD8\u5EA6\u65F6\uFF0C\u7528\u5185\u5BB9\u9AD8\u5EA6",paraId:0,tocIndex:0}]},80250:function(s,e){e.Z=`import { LCard } from 'lighting-design';
import React, { useState } from 'react';

type PropsType = {};

const Index: React.FC<PropsType> = ({}) => {
  const tabListNoTitle = [
    {
      key: 'article',
      label: 'article',
    },
    {
      key: 'app',
      label: 'app',
    },
    {
      key: 'project',
      label: 'project',
    },
  ];

  const contentListNoTitle: Record<string, React.ReactNode> = {
    article: <div>article content</div>,
    app: <div>app content</div>,
    project: <div>project content</div>,
  };

  const [activeTabKey2, setActiveTabKey2] = useState<string>('app');
  const onTab2Change = (key: string) => {
    setActiveTabKey2(key);
  };
  return (
    <div
      style={{
        height: 500,
      }}
    >
      <LCard
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey2}
        tabBarExtraContent={<a href="#">More</a>}
        onTabChange={onTab2Change}
      >
        {contentListNoTitle[activeTabKey2]}
        {/* {tabListNoTitle.map((item) => {
          return (
            <div key={item.key} hidden={item.key !== activeTabKey2}>
              {contentListNoTitle[item.key]}
            </div>
          );
        })} */}
      </LCard>
    </div>
  );
};

export default Index;
`}}]);
