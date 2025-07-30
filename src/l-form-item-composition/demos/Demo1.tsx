import { Cascader, Input } from 'antd';
import { LForm, LFormItemComposition } from 'lighting-design';
import { useEffect, useState } from 'react';

const Demo1 = () => {
  const [form] = LForm.useForm();
  const [AREA_DATA, set_AREA_DATA] = useState([]);

  useEffect(() => {
    fetch('https://unpkg.com/province-city-china@8.5.6/dist/level.json')
      .then((res) => res.json())
      .then((result) => {
        set_AREA_DATA(result);
      });
  }, []);

  return (
    <LForm
      form={form}
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <LFormItemComposition
        name="composition1"
        label="组合选择"
        required
        leftComponent={
          <Cascader
            style={{ width: '30%' }}
            options={AREA_DATA}
            fieldNames={{
              value: 'code',
              label: 'name',
            }}
            placeholder="请选择"
          />
        }
        transformRightOnChangeParams={(e) => e.target.value}
        rightComponent={<Input placeholder="请输入" />}
      />
    </LForm>
  );
};
export default Demo1;
