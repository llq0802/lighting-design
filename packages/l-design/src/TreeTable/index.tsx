import { useControllableValue } from 'ahooks';
import { Table } from 'antd';
import type { FC } from 'react';
import { getMaxLevel } from '../utils';

const trreData = [
  {
    label: '首页',
    value: 'HOME',
  },
  {
    label: '商户管理',
    value: 'MERCHANT',
    children: [
      {
        label: '商户列表',
        value: 'MERCHANT_LIST',
        children: [
          {
            label: '商户修改',
            value: 'MERCHANT_EDIT',
          },
          {
            label: '查看商户详情',
            value: 'MERCHANT_DETAIL',
          },
          {
            label: '新增商户',
            value: 'MERCHANT_ADD',
            // children: [
            //   {
            //     label: '新增',
            //     value: 'ADD',
            //   },
            // ],
          },
        ],
      },
      {
        label: '商户仓库',
        value: 'MERCHANT_Chang',
      },
    ],
  },
  // {
  //   label: '交易管理',
  //   value: 'TRADE',
  //   children: [
  //     {
  //       label: '交易查询',
  //       value: 'TRADE_LIST',
  //       children: [
  //         {
  //           label: '交易查询',
  //           value: 'TRADE_QUERY',
  //         },
  //         {
  //           label: '交易详情',
  //           value: 'TRADE_DETAIL',
  //         },
  //       ],
  //     },
  //   ],
  // },
];

const sfga = [
  {
    'col-0': {
      value: 'HOME',
      data: [{ label: '首页', value: 'HOME' }],
    },
  },
  {
    'col-0': {
      value: 'MERCHANT',
      data: [{ label: '商户管理', value: 'MERCHANT' }],
    },
    'col-1': {
      value: 'MERCHANT_LIST',
      data: [{ label: '商户列表', value: 'MERCHANT_LIST' }],
    },
    'col-2': {
      value: 'MERCHANT_LIST',
      data: [
        {
          label: '商户修改',
          value: 'MERCHANT_EDIT',
        },
        {
          label: '查看商户详情',
          value: 'MERCHANT_DETAIL',
        },
        {
          label: '新增商户',
          value: 'MERCHANT_ADD',
        },
      ],
    },
  },
];

const columns: ColumnsType<DataType> = [
  {
    title: '一级',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '二级',
    dataIndex: 'age',
  },
  {
    title: '三级',
    dataIndex: 'tel',
    onCell: (record, index) => {
      // console.log('record', record);
      if (index === 2) {
        return { rowSpan: 3 };
      }

      // These two are merged into above cell
      if (index === 3) {
        return { rowSpan: 0 };
      }
      if (index === 4) {
        return { rowSpan: 0 };
      }

      return {};
    },
  },
];

const dataSource: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '5',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park',
  },
];

const LTreeTable: FC<{}> = (props) => {
  const [checkList, setCheckList] = useControllableValue<(string | number)[]>({
    defaultValue: [],
    ...props,
  });

  const treeToList = (trreData) => {
    const maxLevel = getMaxLevel(trreData);
    const columns = [];

    console.log('maxLevel', maxLevel);

    const list = [];
    function fn(trreData, prevData = {}, parentkey = null, count = -1) {
      let index = count;
      index++;

      trreData.forEach((item) => {
        const newValue = {
          ...prevData,
          parentkey,
          key: item.value,
          label: item.label,
          [`col-${index}`]: {
            value: item.value,
            data: [{ label: item.label, value: item.value }],
          },
        };

        if (index === maxLevel - 1 && item.children?.length) {
          console.log('到了最大层级', item, index);
          list.push({
            ...newValue,
            [`col-${index + 1}`]: {
              value: item.value,
              data: item.children,
            },
          });
        } else {
          list.push(newValue);
        }
        // console.log('item ', item);
        // console.log('newValue ', newValue);

        if (item.children?.length) {
          fn(item.children, newValue, item.value, index);
        }
        // if (!item.children?.length) {
        //   list.push(newValue);
        // } else if (index === maxLevel - 1) {
        //   console.log('item ', item);
        //   list.push({
        //     ...newValue,
        //     parentkey,
        //     // key: `row-${parentkey}-${item.value}`,
        //     key: `row-${item.value}`,
        //     label: item.label,
        //     [`col-${index + 1}`]: {
        //       value: item.value,
        //       data: item.children,
        //     },
        //   });
        // } else {
        //   fn(item.children, newValue, item.value, index);
        // }
      });
    }
    fn(trreData);

    for (let i = 0; i <= maxLevel; i++) {
      columns.push({
        dataIndex: `col-${i}`,
      });

      for (let j = 0; j < list.length; j++) {
        if (!list[j][`col-${i}`]) {
          list[j][`col-${i}`] = {
            value: null,
            data: [],
            // rowSpan: 1
          };
        } else {
          continue;
        }
      }
    }
    console.log('list', list);
  };
  treeToList(trreData);

  return <Table dataSource={dataSource} columns={columns} bordered />;
};

export default LTreeTable;
