import { LCard } from 'lighting-design';
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
