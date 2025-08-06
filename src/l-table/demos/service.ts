import Mock from 'better-mock';
import { LTableProps } from 'lighting-design';

export interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

export const columns: LTableProps<DataType>['columns'] = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
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
  'list|20': [
    {
      key: '@id',
      name: '@cname',
      'age|10-60': 10,
      birthday: `@date`,
      address: `@county(true)`,
    },
  ],
}).list;

export function apiGetUserList(req: Record<string, any> = {}): Promise<{
  list: DataType[];
  total: number;
}> {
  const { current = 1, pageSize = 10, formValues = {} } = req;

  const list: DataType[] = Mock.mock({
    [`list|${50}`]: [
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
        list: list.slice((current - 1) * pageSize, current * pageSize),
        total: list.length,
      });
    }, 700);
  });
}
