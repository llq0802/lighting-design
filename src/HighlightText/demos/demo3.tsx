import { useDebounce } from 'ahooks';
import { LHighlightText } from 'lighting-design';
import { useState } from 'react';

const text = 'Lighting Design 是基于 Ant Design 扩展的业务场景组件。可以显著的提升制作 CRUD 页面的效率。';

const Demo3 = () => {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce(value, { wait: 500 }); // 防抖值
  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="试一试搜索关键字"
        style={{ width: 280 }}
      />
      <p style={{ marginTop: 16 }}>DebouncedValue: {debouncedValue}</p>
      <LHighlightText text={text} highlightWords={[debouncedValue]} />
    </div>
  );
};

export default Demo3;
