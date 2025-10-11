import { Button, Flex } from 'antd';
import React, { useRef } from 'react';
import LTagInput from '..';

type PropsType = {};

const Index: React.FC<PropsType> = ({}) => {
  const actionRef = useRef<any>();
  const ref = useRef();

  return (
    <Flex gap="24px">
      <LTagInput
        ref={ref}
        actionRef={actionRef}
        tagClassName="LTagInput-tag"
        prefix={<div>prefix</div>}
        suffix={<div>suffix</div>}
        // defaultValue="dasdsadasDFSD"
        // onFocus={(e) => {
        //   console.log('=== onFocus==>', e);
        // }}
        // onBlur={(e) => {
        //   console.log('=== onBlur==>', e);
        // }}
        // onChange={(val) => {
        //   console.log('=== onChange==>', val);
        // }}
        // onEnter={(e) => {
        //   console.log('=== onEnter==>', e);
        // }}
      />
      <Button onClick={() => actionRef.current.inset('hello', '111')}>插入</Button>
      <Button onClick={() => actionRef.current.clear()}>清除</Button>
    </Flex>
  );
};

export default Index;
