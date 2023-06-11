import { List } from 'antd';
import React from 'react';

const data = [
  {
    label: '商户管理',
    value: 'MERCHANT',
    children: [
      {
        label: '商户查询',
        value: 'MERCHANT_LIST',
        children: [
          { label: '商户查询-1', value: 'MERCHANT_QUERY' },
          { label: '查看商户-3', value: 'MERCHANT_DETAIL' },
          { label: '新增商户-2', value: 'MERCHANT_ADD' },
        ],
      },
    ],
  },
];

const newData = [
  [
    {
      label: '商户管理',
      value: 'MERCHANT',
    },
  ],
  [
    {
      label: '商户查询',
      value: 'MERCHANT_LIST',
    },
  ],
  [
    {
      label: '商户查询-1',
      value: 'MERCHANT_QUERY',
    },
    {
      label: '查看商户-3',
      value: 'MERCHANT_DETAIL',
    },
    {
      label: '新增商户-2',
      value: 'MERCHANT_ADD',
    },
  ],
];

// function flatten(tree, arr = []) {
//   tree.forEach((item) => {
//     const { children, ...props } = item;
//     // 添加除了children的属性
//     arr.push(props);

//     if (children) {
//       // 递归将所有节点加入到结果集中
//       flatten(children, arr);
//     }
//   });
//   return arr;
// }

function flatten(tree) {
  const list = [];
  tree.forEach((item) => {
    const arr = [];
    const { children, ...props } = item;

    // 添加除了children的属性

    list.push(arr.push(props));
  });
}

const list = flatten(data);

const LTreeCheckbox: React.FC = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => {
      // console.log('item', item);
      // const list = flatten([item]);
      // console.log('list', list);

      return (
        <div style={{ display: 'flex', gap: 16 }}>
          789
          {/* {list.map((it, index) => {
            return (
              <div key={index}>
                <Checkbox>{it.label}</Checkbox>
              </div>
            );
          })} */}
        </div>
      );
    }}
  />
);

export default LTreeCheckbox;
