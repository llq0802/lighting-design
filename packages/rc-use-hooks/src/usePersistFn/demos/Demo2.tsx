/**
 * title: 基础用法
 * desc: 通过 usePersistFn, 函数引用永远不会变化。
 */

import { Button, message } from 'antd';
import { usePersistFn } from 'rc-use-hooks';
import React, { useCallback, useRef, useState } from 'react';

interface PropsType {
  showCount: () => void;
}

// some expensive component with React.memo
const Child = React.memo(({ showCount }: PropsType) => {
  const renderCountRef = useRef(0);
  renderCountRef.current += 1;

  return (
    <div>
      <p>子组件渲染了 : {renderCountRef.current}次</p>
      <Button type="primary" onClick={showCount}>
        showParentCount
      </Button>
    </div>
  );
});

Child.displayName = 'Child';

function Demo() {
  const [count, setCount] = useState(0);

  const showCountByUsePersistFn = usePersistFn(() => {
    message.info(`Current count is ${count}`);
  });

  const showCountByUseCallback = useCallback(() => {
    message.info(`Current count is ${count}`);
  }, [count]);

  return (
    <>
      <Button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Add Count
      </Button>
      <p>您可以单击该按钮查看子组件渲染的次数</p>

      <div style={{ marginTop: 32 }}>
        <h4>用了usePersistFn:</h4>
        <Child showCount={showCountByUsePersistFn} />
      </div>

      <div style={{ marginTop: 32 }}>
        <h4>用了useCallback:</h4>
        <Child showCount={showCountByUseCallback} />
      </div>
    </>
  );
}

export default Demo;
