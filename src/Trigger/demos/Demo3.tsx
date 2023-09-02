import { Tag } from 'antd';
import { LTrigger } from 'lighting-design';
import ChildTable3 from './ChildTable3';
import ChildTable4 from './ChildTable4';

const tagRender = (props) => {
  const { label, value } = props;
  console.log('props', props);
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color="#3e9bed"
      onMouseDown={onPreventMouseDown}
      style={{ marginRight: 4 }}
    >
      {label}
    </Tag>
  );
};

const Demo1 = () => {
  return (
    <div>
      <h4>Tags单选内容</h4>
      <LTrigger mode="tag" placement="right">
        <ChildTable4 />
      </LTrigger>
      <h4>Tags多选内容</h4>

      <LTrigger mode="tag" width={400}>
        <ChildTable3 />
      </LTrigger>

      <h4>Tags自定义</h4>
      <LTrigger mode="tag" tagRender={tagRender} width={400}>
        <ChildTable3 />
      </LTrigger>
    </div>
  );
};
export default Demo1;
