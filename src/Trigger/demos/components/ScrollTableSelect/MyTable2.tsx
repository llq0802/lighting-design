import { useMount } from 'ahooks';
import { Avatar, Checkbox, message } from 'antd';
import { LList } from 'lighting-design';
import React, { useState } from 'react';

interface UserItem {
  email: string;
  gender: string;
  name: {
    first: string;
    last: string;
    title: string;
  };
  nat: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

const fakeDataUrl =
  'https://randomuser.me/api/?results=10&inc=id,name,gender,email,nat,picture&noinfo';
const ContainerHeight = 500;

const Demo1: React.FC = () => {
  const [data, setData] = useState<UserItem[]>([]);

  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(body.results));
        message.destroy('updatable');
      });
  };

  useMount(() => {
    appendData();
  });

  const onScrollBottom = () => {
    console.log('onScrollBottom');
    message.loading({
      key: 'updatable',
      duration: 0,
      content: '加载中...',
    });
    setTimeout(() => {
      appendData();
    }, 1000);
  };

  return (
    <Checkbox.Group
      style={{ width: '100%', display: 'block' }}
      onChange={(vals) => {
        console.log('==vals====>', vals);
      }}
    >
      <LList
        dataSource={data}
        height={ContainerHeight}
        itemMinHeight={10}
        rowKey="email"
        onScrollBottom={onScrollBottom}
        renderItem={(item: UserItem, i) => {
          return (
            <Checkbox value={i}>
              <div style={{ border: '1px solid', marginBottom: 8 }}>
                <Avatar src={item.picture.large} size="small" />
                <div>{item.name.last}</div>
                <div>{item.email}</div>
              </div>
            </Checkbox>
          );
        }}
      />
    </Checkbox.Group>
  );
};

export default Demo1;
