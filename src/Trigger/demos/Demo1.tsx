import { Flex } from 'antd';
import { LTrigger } from 'lighting-design';
import ChildTable1 from './ChildTable1';
import ChildTable6 from './ChildTable6';

const Demo1 = () => {
  return (
    <div>
      <Flex gap="small" align="center">
        <h5>表格单选</h5>
        <LTrigger>
          <ChildTable1 />
        </LTrigger>
      </Flex>
      <Flex gap="small" align="center">
        <h5>宽度百分比</h5>
        <LTrigger width="60%">
          <ChildTable1 />
        </LTrigger>
      </Flex>
      <Flex gap="small" align="center">
        <h5>overlayArrow</h5>
        <LTrigger overlayArrow>
          <ChildTable1 />
        </LTrigger>
      </Flex>
      <Flex gap="small" align="center">
        <h5>弹出方向</h5>
        <LTrigger placement="right" overlayArrow>
          <ChildTable1 />
        </LTrigger>
      </Flex>
      <Flex gap="small" align="center">
        <h5>形态变体 ( antd版本大于5.13.0可用 )</h5>
        <LTrigger variant="filled">
          <ChildTable1 />
        </LTrigger>
      </Flex>
      <Flex gap="small" align="center">
        <h5>隐藏弹出层时隐藏 DOM</h5>
        <LTrigger destroyOnHide placeholder="请选择摸鱼员工">
          <ChildTable1 />
        </LTrigger>
      </Flex>
      <Flex gap="small" align="center">
        <h5>禁用</h5>
        <LTrigger disabled>
          <ChildTable1 />
        </LTrigger>
      </Flex>
      <Flex gap="small" align="center">
        <h5>自定义字段名</h5>
        <LTrigger
          labelInValue
          overlayClassName="my-LTrigger-11"
          fieldNames={{ label: 'name', value: 'id' }}
          overlayInnerStyle={{ background: '#3e9bed' }}
        >
          <ChildTable6 />
        </LTrigger>
      </Flex>

      {/* <h4>表格多选1</h4>
      <LTrigger width="50%">
        <ChildTable2 />
      </LTrigger>
      <h4>表格多选2</h4>
      <LTrigger width="50%" overlayArrow>
        <ChildTable5 />
      </LTrigger> */}
    </div>
  );
};
export default Demo1;
