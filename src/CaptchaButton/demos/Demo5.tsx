// import { usePagination } from 'ahooks';
// import { Button, Pagination } from 'antd';
// import Mock from 'mockjs';

import { useCreation } from 'ahooks';
import { Button } from 'antd';
import { useState } from 'react';

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
function BB({ countA }) {
  const [countB, setCountB] = useState(countA);
  const [list, setList] = useState([1, 2, 3]);

  const asa = useCreation(() => {
    console.log('123');

    return 123;
  }, [list]);

  return (
    <div>
      <Button
        onClick={() => {
          setList([...list]);
        }}
      ></Button>
      <h3>countA: {countA}</h3>
      <hr />
      <h3>countB: {countB}</h3>
    </div>
  );
}

function AA() {
  const [countA, setCountA] = useState(0);

  return (
    <div>
      <Button
        onClick={() => {
          setCountA(countA + 1);
        }}
      >
        更新 countA
      </Button>
      <BB countA={countA}></BB>
    </div>
  );
}

export default AA;
