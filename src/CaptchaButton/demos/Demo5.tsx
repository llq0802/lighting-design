// import { usePagination } from 'ahooks';
// import { Button, Pagination } from 'antd';
// import Mock from 'better-mock';

// import { useCreation, useDeepCompareEffect } from 'ahooks';
// import { Button } from 'antd';
// import { useImperativeHandle, useRef, useState } from 'react';

// interface UserListItem {
//   id: string;
//   name: string;
//   gender: 'male' | 'female';
//   email: string;
//   disabled: boolean;
// }

// const userList = (current: number, pageSize: number) =>
//   Mock.mock({
//     total: 55,
//     [`list|${pageSize}`]: [
//       {
//         id: '@guid',
//         name: '@name',
//         'gender|1': ['male', 'female'],
//         email: '@email',
//         disabled: false,
//       },
//     ],
//   });

// async function getUserList(
//   params: {
//     current: number;
//     pageSize: number;
//   },
//   b,
// ): Promise<{ total: number; list: UserListItem[] }> {
//   console.log('getUserList-params', params);
//   console.log('getUserList-b', b);

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(userList(params.current, params.pageSize));
//     }, 1000);
//   });
// }

// export default () => {
//   const result = usePagination(getUserList);
//   const { data, loading, pagination, refresh, run } = result;
//   console.log('pagination', pagination);

//   return (
//     <div>
//       {loading ? (
//         <p>loading</p>
//       ) : (
//         <ul>
//           {data?.list?.map((item) => (
//             <li key={item.email}>
//               {item.name} - {item.email}
//             </li>
//           ))}
//         </ul>
//       )}
//       <Pagination
//         current={pagination.current}
//         pageSize={pagination.pageSize}
//         total={pagination?.total}
//         onChange={pagination.onChange}
//         // onShowSizeChange={pagination.onChange}
//         showSizeChanger
//         style={{ marginTop: 16, textAlign: 'right' }}
//       />

//       <Button
//         onClick={() => {
//           refresh();
//         }}
//       >
//         刷新
//       </Button>
//       <Button
//         onClick={() => {
//           run({
//             current: pagination.current,
//             pageSize: pagination.pageSize,
//           });
//         }}
//       >
//         请求
//       </Button>
//     </div>
//   );
// };
// function BB({ actionRef, countA }) {
//   const [countB, setCountB] = useState(0);
//   const [list, setList] = useState([1, 2, 3]);

//   const asa = useCreation(() => {
//     console.log('123');
//     return 123;
//   }, [list]);
//   useImperativeHandle(actionRef, () => countB);

//   return (
//     <div>
//       <Button
//         onClick={() => {
//           // setList([...list]);
//           setCountB(countB + 1);
//         }}
//       >
//         更新 countB
//       </Button>
//       <h3>countA: {countA}</h3>
//       <hr />
//       <h3>countB: {countB}</h3>
//     </div>
//   );
// }

// function AA({ list = [1] }) {
//   const [countA, setCountA] = useState(0);

//   const [inList, setInList] = useState(() => list);
//   const actionRef = useRef();

//   useDeepCompareEffect(() => {
//     console.log('list', list);

//     // setInList([...list, 1]);
//   }, [list]);

//   console.log('actionRef.current', actionRef.current);

//   return (
//     <div>
//       <Button
//         onClick={() => {
//           console.log('actionRef.current', actionRef.current);
//           setCountA(countA + 1);
//         }}
//       >
//         更新 countA
//       </Button>
//       <BB countA={countA} actionRef={actionRef}></BB>
//     </div>
//   );
// }

// export default AA;
import { Input, Tree } from 'antd';
import type { DataNode } from 'antd/es/tree';
import React, { useMemo, useState } from 'react';

const { Search } = Input;

const x = 3;
const y = 2;
const z = 1;
const defaultData: DataNode[] = [];

const generateData = (
  _level: number,
  _preKey?: React.Key,
  _tns?: DataNode[],
) => {
  const preKey = _preKey || '0';
  const tns = _tns || defaultData;

  const children: React.Key[] = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);

const dataList: { key: React.Key; title: string }[] = [];
const generateList = (data: DataNode[]) => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const { key } = node;
    dataList.push({ key, title: key as string });
    if (node.children) {
      generateList(node.children);
    }
  }
};
generateList(defaultData);

const getParentKey = (key: React.Key, tree: DataNode[]): React.Key => {
  let parentKey: React.Key;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some((item) => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey!;
};

const App: React.FC = () => {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [autoExpandParent, setAutoExpandParent] = useState(true);

  const onExpand = (newExpandedKeys: React.Key[]) => {
    setExpandedKeys(newExpandedKeys);
    setAutoExpandParent(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const newExpandedKeys = dataList
      .map((item) => {
        if (item.title.indexOf(value) > -1) {
          return getParentKey(item.key, defaultData);
        }
        return null;
      })
      .filter((item, i, self) => item && self.indexOf(item) === i);
    setExpandedKeys(newExpandedKeys as React.Key[]);
    setSearchValue(value);
    setAutoExpandParent(true);
  };

  const treeData = useMemo(() => {
    const loop = (data: DataNode[]): DataNode[] =>
      data.map((item) => {
        const strTitle = item.title as string;
        const index = strTitle.indexOf(searchValue);
        const beforeStr = strTitle.substring(0, index);
        const afterStr = strTitle.slice(index + searchValue.length);
        const title =
          index > -1 ? (
            <span>
              {beforeStr}
              <span className="site-tree-search-value">{searchValue}</span>
              {afterStr}
            </span>
          ) : (
            <span>{strTitle}</span>
          );
        if (item.children) {
          return { title, key: item.key, children: loop(item.children) };
        }

        return {
          title,
          key: item.key,
        };
      });

    return loop(defaultData);
  }, [searchValue]);

  return (
    <div>
      <Search
        style={{ marginBottom: 8 }}
        placeholder="Search"
        onChange={onChange}
      />
      <Tree
        onExpand={onExpand}
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        treeData={treeData}
      />
    </div>
  );
};

export default App;
