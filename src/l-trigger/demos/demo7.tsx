import { Flex } from 'antd';
import { LTrigger } from 'lighting-design';
import ChildTable1 from './components/child-table1';

const Demo1 = () => {
  return (
    <div>
      <Flex gap="small" align="center">
        <h5>表格多选1</h5>
        <LTrigger width="50%" mode="checkbox">
          <ChildTable1 />
        </LTrigger>
      </Flex>
      <Flex gap="small" align="center">
        <h5>表格多选1</h5>
        <LTrigger width="50%" mode="checkbox" split="，">
          <ChildTable1 />
        </LTrigger>
      </Flex>
    </div>
  );
};
export default Demo1;
