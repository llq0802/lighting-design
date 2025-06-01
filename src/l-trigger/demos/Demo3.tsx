import { Tag } from 'antd';
import { LTrigger } from 'lighting-design';
// import ChildTable3 from './components/ChildTable3';
// import ChildTable4 from './components/ChildTable4';
import ChildTable1 from './components/ChildTable1';

const tagRender = (props) => {
  const { label, value } = props;
  // console.log('props', props);
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag color="#3e9bed" onMouseDown={onPreventMouseDown} style={{ marginRight: 4 }}>
      {label}
    </Tag>
  );
};

const Demo1 = () => {
  return (
    <div>
      <h4>Tags单选内容</h4>
      <LTrigger mode="radioTag" placement="right">
        <ChildTable1 />
      </LTrigger>
      <h4>Tags多选内容</h4>
      <LTrigger mode="checkboxTag" width={400}>
        <ChildTable1 />
      </LTrigger>

      <h4>Tags自定义</h4>
      <LTrigger mode="checkboxTag" tagRender={tagRender} width={400}>
        <ChildTable1 />
      </LTrigger>
    </div>
  );
};
export default Demo1;
