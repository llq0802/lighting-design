import Mock from 'better-mock';
import type { LTableProps } from '../interface';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

export const columns: LTableProps['columns'] = [
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
    title: '出生年月',
    dataIndex: 'birthday',
    key: 'birthday',
    align: 'center',
  },
  {
    title: '城市',
    dataIndex: 'address',
    key: 'address',
    align: 'center',
    toolTip: true,
  },
];

export const originData: DataType[] = Mock.mock({
  'list|10': [
    {
      key: '@id',
      name: '@cname',
      'age|10-60': 10,
      birthday: `@date`,
      address: `@county(true)`,
    },
  ],
}).list;

export function apiGetUserList(
  req: Record<string, any> = {},
  time = 800,
): Promise<Record<string, any>> {
  const { current, pageSize = 10, formValues = {} } = req;
  const data: DataType[] = Mock.mock({
    [`list|${pageSize}`]: [
      {
        key: '@id',
        name: '@cname',
        'age|10-50': 10,
        birthday: `@date`,
        address: `@city`,
        // address: `@province@city@county`,
        // address: `@county(true)`,
      },
    ],
  }).list;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data,
        total: 50,
        success: true,
      });
    }, time);
  });
}
