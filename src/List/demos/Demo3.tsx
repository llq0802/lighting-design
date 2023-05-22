import { Avatar } from 'antd';
import { LList } from 'lighting-design';
import React from 'react';

interface UserItem {
  id: string;
  email: string;
  name: string;
  img: string;
}

const data: UserItem[] = [];
for (let index = 0; index < 500; index++) {
  data[index] = {
    id: `${index}0`,
    name: 'jack',
    email: '958614130@qq.com',
    img: `https://randomuser.me/api/portraits/men/${index + 1}.jpg`,
  };
}

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
      itemMinHeight={10}
      rowKey="id"
      renderItem={(item: UserItem) => (
        <div style={{ border: '1px solid', margin: 10 }}>
          <Avatar src={item.img} />
          <div>{item.name}</div>
          <div>{item.email}</div>
        </div>
      )}
    />
  );
};

export default Demo1;
