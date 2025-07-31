import { Cascader, Input, InputNumber, Select } from 'antd';
import Mock from 'better-mock';
import { LForm, LFormItemComposition } from 'lighting-design';
import { useEffect, useState } from 'react';

const options = Mock.mock({ 'list|15': [{ label: '@cname', value: '@id' }] }).list;

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
        leftComponent={<Select options={options} placeholder="请选择" />}
        transformRightOnChangeParams={(e) => e.target.value}
        rightComponent={<Input placeholder="请输入" />}
      />
      <LFormItemComposition
        name="composition2"
        label="组合选择"
        required
        leftWidth="30%"
        leftComponent={
          <Cascader
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
      <LFormItemComposition
        name="composition3"
        label="组合选择"
        required
        leftComponent={<Input placeholder="请输入" />}
        transformLeftOnChangeParams={(e) => e.target.value}
        rightComponent={<InputNumber placeholder="请输入" />}
      />
    </LForm>
  );
};
export default Demo1;
