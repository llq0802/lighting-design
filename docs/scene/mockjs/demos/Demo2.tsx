import { Button } from 'antd';
import Mock from 'better-mock';
import { useState } from 'react';

const mockOptions = {
  '@emoji': '@emoji(3)',
  '@version': '@version',
  '@guid': '@guid',
  '@id': '@id',
  '@zip': '@zip',
  '@ip': '@ip',
  '@phone': '@phone',

  '@name': '@name',
  '@cfirst': '@cfirst',
  '@clast': '@clast',
  '@cname': '@cname',
  '@ctitle': '@ctitle',
  '@cparagraph': '@cparagraph(2)',
  '@csentence': '@csentence',
  '@email': '@email(163.com)',
  '@url': '@url(https)',

  '@color': '@color',
  '@rgb': '@rgb',
  '@rgba': '@rgba',

  '@region': '@region',
  '@province': '@province',
  '@city': '@city',
  '@county': '@county(true)',
  '@province@city@county': '@province@city@county',

  '@boolean': '@boolean',
  '@natural': '@natural(1,100)',
  '@integer': '@integer(1,10)',
  '@float': '@float(0,99999,0,2)',
  '@character': '@character',
  '@string': '@string',
  '@range': '@range(4)',

  '@date': '@date',
  '@time': '@time',
  '@datetime': '@datetime',
  '@now': '@now',
  '@pick': '@pick(["a", "e", "k", "h", "w"])',
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
