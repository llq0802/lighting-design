import { Checkbox, Divider, Flex, Input } from 'antd';
import { LHighlightText } from 'lighting-design';
import { useState } from 'react';

const text = 'Lighting Design 是基于 Ant Design 扩展的业务场景组件。可以显著的提升制作 CRUD 页面的效率。';

const Demo3 = () => {
  const [value, setValue] = useState<string>('');
  const [caseSensitive, setCaseSensitive] = useState(false);
  return (
    <div>
      <Flex>
        <Checkbox checked={caseSensitive} onChange={(e) => setCaseSensitive(e.target.checked)}>
          区分大小写
        </Checkbox>
      </Flex>
      <Divider />
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="试一试搜索关键字"
        style={{ width: 280 }}
      />
      <Divider />
      <LHighlightText text={text} highlightWords={[value]} caseSensitive={caseSensitive} />
    </div>
  );
};

export default Demo3;
