import { Button } from 'antd';
import Mock from 'better-mock';
import type { UseShowInstance } from 'rc-use-hooks';
import React from 'react';
import MyModal from './MyModal';

const Demo3 = () => {
  const modalRef = React.useRef<UseShowInstance>();

  const handleClick = () => {
    const record = Mock.mock({
      name: '@cname',
      address: '@county(true)',
      'age|20-50': 20,
      date: '@date',
      phone: '@phone',
      email: '@email(163.com)',
      sex: '@pick(["男", "女",])',
    });
    modalRef.current?.onShow(record);
  };
  return (
    <div>
      <Button type="primary" onClick={handleClick}>
        详情
      </Button>
      <MyModal modalRef={modalRef} />
    </div>
  );
};

export default Demo3;
