import { Avatar } from 'antd';
import Mock from 'better-mock';
import { LList } from 'lighting-design';
import React from 'react';

interface UserItem {
  id: string;
  email: string;
  name: string;
  img: string;
}

const data = Mock.mock({
  'list|36': [
    {
      id: '@guid',
      name: '@cname',
      email: '@email',
      img: `https://randomuser.me/api/portraits/men/${Mock.Random.integer(0, 999999)}.jpg`,
    },
  ],
}).list;

const ContainerHeight = 500;
const Demo1: React.FC = () => {
  return (
    <LList
      className="my-LList"
      style={{
        border: '2px solid red',
      }}
      dataSource={data}
      height={ContainerHeight}
      itemHeight={10}
      rowKey="id"
      renderItem={(item: UserItem, i) => (
        <div style={{ border: '1px solid', marginBottom: 10 }}>
          <Avatar src={item.img} />
          <div>
            {item.name} - {i + 1}
          </div>
          <div>{item.email}</div>
        </div>
      )}
    />
  );
};

export default Demo1;
