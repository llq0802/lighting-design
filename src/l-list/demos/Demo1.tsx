import { Avatar, message } from 'antd';
import { LList } from 'lighting-design';
import React, { useEffect, useState } from 'react';

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

const fakeDataUrl = 'https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo';
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

  useEffect(() => {
    appendData();
  }, []);

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
    <LList
      dataSource={data}
      height={ContainerHeight}
      itemHeight={10}
      rowKey="email"
      onScrollBottom={onScrollBottom}
      renderItem={(item: UserItem) => (
        <div style={{ border: '1px solid', marginBottom: 10 }}>
          <Avatar src={item.picture.large} />
          <div>{item.name.last}</div>
          <div>{item.email}</div>
        </div>
      )}
    />
  );
};

export default Demo1;
