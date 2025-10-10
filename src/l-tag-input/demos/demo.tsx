import { Button, Flex } from 'antd';
import React, { useRef } from 'react';
import LTagInput from '..';

type PropsType = {};

const Index: React.FC<PropsType> = ({}) => {
  const actionRef = useRef<any>();
  return (
    <Flex gap="24px">
      <LTagInput
        actionRef={actionRef}
        tagClassName="mdsads999"
        defaultValue="dasdsadasDFSD"
        onFocus={(e) => {
          console.log('=== onFocus==>', e);
        }}
        onBlur={(e) => {
          console.log('=== onBlur==>', e);
        }}
      />
      <Button onClick={() => actionRef.current.addTag('hello', '111')}>插入</Button>
      <Button onClick={() => actionRef.current.clear()}>清除</Button>
    </Flex>
  );
};

export default Index;
