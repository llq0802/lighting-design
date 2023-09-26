import type { ColumnsType } from 'antd/lib/table';
import Mock from 'better-mock';

export const columns: ColumnsType<any> = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    className: 'my-name-columns',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    align: 'center',
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
    align: 'center',
  },
];

interface Item {
  key: string;
  name: string;
  age: number;
  address: string;
}

export const originData: Item[] = Mock.mock({
  'list|10': [
    {
      key: '@id',
      name: '@cname',
      'age|10-60': 10,
      address: `@province@city@county`,
    },
  ],
}).list;

export function apiGetUserList(time = 1000): Promise<Record<string, any>> {
  const data: Item[] = Mock.mock({
    'list|20-60': [
      {
        key: '@id',
        name: '@cname',
        'age|10-60': 10,
        address: `@province@city@county`,
      },
    ],
  }).list;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: data,
        total: data.length,
        success: true,
      });
    }, time);
  });
}
