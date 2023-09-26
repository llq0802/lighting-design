import { Button } from 'antd';
import Mock from 'mockjs';
import { useState } from 'react';

const options = {
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
  'arr1|1': ['11', '22', '33'],
  'arr2|2': ['11'],
  'arr3|1-5': ['11'],
  '@guid': '@guid',
  '@id': '@id',
  '@name': '@name',
  '@cfirst': '@cfirst',
  '@clast': '@clast',
  '@cname': '@cname',
  '@ctitle': '@ctitle',
  '@cparagraph': '@cparagraph(2)',
  '@csentence': '@csentence',
  '@email': '@email(163.com)',
  '@url': '@url(https)',
  '@ip': '@ip',
  '@zip': '@zip',
  '@date': '@date',
  '@time': '@time',
  '@datetime': '@datetime',
  '@color': '@color',
  '@rgb': '@rgb',
  '@rgba': '@rgba',
  '@phone': '@phone',
  '@region': '@region',
  '@county': '@county(true)',
  '@province@city@county': '@province@city@county',
};

const defaultData = Mock.mock(options);

const Demo1 = () => {
  const [obj, setObj] = useState(defaultData);

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setObj(Mock.mock(options));
        }}
      >
        刷新
      </Button>
      <pre style={{ background: '#f5f5dc', fontSize: 16, fontWeight: 700 }}>
        {JSON.stringify(obj, null, 4)}
      </pre>
    </div>
  );
};

export default Demo1;
