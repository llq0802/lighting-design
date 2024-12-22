import { Button } from 'antd';
import Mock from 'better-mock';
import { useState } from 'react';

const mockOptions = {
  'str1|2': 'a',
  'str2|1-5': 'a',
  'num1|+1': 1,
  'num2|1-10': 1,
  'num3|1-10.2': 1,
  'boolean|1': true,
  'obj1|1-3': {
    '310005': '重庆市',
    '310000': '上海市',
    '320000': '江苏省',
    '330000': '浙江省',
    '340000': '安徽省',
  },
  'obj2|1': {
    '310005': '重庆市',
    '310000': '上海市',
    '320000': '江苏省',
    '330000': '浙江省',
    '340000': '安徽省',
  },
  'arr1|1': ['0', '1', '2'],
  'arr2|2': ['99'],
  'arr3|1-5': [
    {
      'id|+1': 1,
      'age|1-40': 10,
    },
  ],
};

const Demo1 = () => {
  const [obj, setObj] = useState(Mock.mock(mockOptions));
  return (
    <div>
      <Button type="primary" onClick={() => setObj(Mock.mock(mockOptions))}>
        重新生成
      </Button>
      <pre
        style={{
          background: '#f5f5dc',
          fontSize: 16,
          fontWeight: 700,
          lineHeight: 1.4,
        }}
      >
        {JSON.stringify(obj, null, 4)}
      </pre>
      <Button type="primary" onClick={() => setObj(Mock.mock(mockOptions))}>
        重新生成
      </Button>
    </div>
  );
};

export default Demo1;
