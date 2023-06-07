import { Tag } from 'antd';
import { LTrigger } from 'lighting-design';
import ChildTable1 from './ChildTable1';
import ChildTable3 from './ChildTable3';

const tagRender = (props) => {
  const { label, value, closable, onClose } = props;
  console.log('props', props);
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      onMouseDown={onPreventMouseDown}
      // closable={closable}
      // onClose={onClose}
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
      <LTrigger selectProps={{ mode: 'multiple', removeIcon: false }}>
        <ChildTable1 />
      </LTrigger>
      <h4>Tags多选内容</h4>

      <LTrigger
        selectProps={{
          mode: 'multiple',

          tagRender,
        }}
      >
        <ChildTable3 />
      </LTrigger>
    </div>
  );
};
export default Demo1;
