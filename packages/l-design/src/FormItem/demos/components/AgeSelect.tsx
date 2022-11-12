import { Select } from 'antd';
import type { FC } from 'react';

const AgeSelect: FC<Record<string, any>> = (props) => {
  console.log(' AgeSelect-props', props);
  return (
    <>
      <Select
        value={props.value}
        placeholder="选择年龄"
        options={[
          { value: '18', label: '18' },
          { value: '19', label: '19' },
          { value: '20', label: '20' },
          { value: '21', label: '21' },
          { value: '22', label: '22' },
        ]}
        onChange={props.onChange}
      />
    </>
  );
};

export default AgeSelect;
