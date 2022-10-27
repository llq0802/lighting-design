/**
 * title: 基础用法
 * desc: 频繁调用 run，但只会每隔 500ms 执行一次相关函数。
 */

import { Button } from 'antd';
import { useThrottleFn } from 'rc-use-hooks';
import { useState } from 'react';

function Demo() {
  const [value, setValue] = useState(0);
  const { run } = useThrottleFn(setValue, 500);

  return (
    <div>
      <p style={{ marginTop: 16 }}> Clicked count: {value} </p>
      <Button
        onClick={() => {
          run(value + 1);
        }}
      >
        Click fast!
      </Button>
    </div>
  );
}

export default Demo;
