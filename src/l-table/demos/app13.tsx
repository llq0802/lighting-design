import { useLatest, usePagination } from 'ahooks';
import { Button, Pagination } from 'antd';
import Mock from 'better-mock';
import { sleep } from 'lighting-design/test';
import React, { useState } from 'react';
import type { DataType } from './service';

type PropsType = {};

const App: React.FC<PropsType> = ({}) => {
  const [count, setCount] = useState(0);
  const [p, setP] = React.useState({
    current: 1,
    pageSize: 10,
  });

  const [initLoading, setInitLoading] = useState(() => true);
  const [noInitLoading, setNoInitLoading] = useState(false);
  const [firstRequest, setFirstRequest] = useState(true);
  const firstRequestRef = useLatest(firstRequest);

  const { run, loading, data } = usePagination(
    async () => {
      if (firstRequestRef.current) {
        setInitLoading(true);
      } else {
        setNoInitLoading(true);
      }
      await sleep();
      const list: DataType[] = Mock.mock({
        [`list|${12}`]: [
          {
            'id|+1': 1,
            name: '@cname',
            'sex|1': ['男', '女'],
            'age|10-50': 10,
            phone: '@phone',
            birthday: `@date`,
            'status|1': [1, 0],
            address: `@province@city@county`,
            'isMarried|1': [true, false],
          },
        ],
      }).list;
      return { total: list.length, list };
    },
    {
      manual: true,
      onFinally(...args) {
        if (firstRequestRef.current) {
          setInitLoading(false);
          setFirstRequest(false);
        } else {
          setNoInitLoading(false);
        }
      },
    },
  );

  return (
    <div>
      <Button
        onClick={() => {
          run({
            current: 1,
            pageSize: 10,
          });
          setCount(count + 1);
        }}
      >
        {count}
      </Button>

      <pre>{JSON.stringify(p, null, 4)}</pre>
      <pre>{JSON.stringify(data?.list, null, 4)}</pre>

      <Pagination
        disabled={loading}
        current={void 0}
        pageSize={void 0}
        defaultCurrent={1}
        defaultPageSize={4}
        total={data?.total || 0}
        onChange={(current, pageSize) => {
          setP({ current, pageSize });
        }}
        hideOnSinglePage
        align="end"
      />
    </div>
  );
};

export default App;
