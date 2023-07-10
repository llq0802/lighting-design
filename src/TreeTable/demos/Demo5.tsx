import type { LTreeTableData } from 'lighting-design';
import { LForm, LFormItem, LFormItemInput, LTreeTable } from 'lighting-design';
import { awaitTime } from 'lighting-design/_test';
import { useEffect, useState } from 'react';
import { data1 } from './data';

export default () => {
  const [form] = LForm.useForm();
  const [loading, setLoading] = useState(true);
  const [treeData, setTreeData] = useState<LTreeTableData>([]);

  useEffect(() => {
    const getData = async () => {
      await awaitTime(3000);
      setTreeData(data1);
      setLoading(false);
    };

    getData();
  }, []);

  return (
    <LForm
      form={form}
      submitter={{ buttonAlign: 'center' }}
      onFinish={(values) => {
        console.log('onFinish-values', values);
      }}
      onValuesChange={(name, value, allVales) => {
        console.log('name', name);
        console.log('value', value);
        console.log('allVales', allVales);
      }}
    >
      <LFormItemInput name="name" label="名字" required />

      <LFormItem name="treetbale" label="菜单" required _isSelectType>
        <LTreeTable
          size="small"
          lastColumnMerged
          treeData={treeData}
          loading={loading}
          showHeader={false}
        />
      </LFormItem>
    </LForm>
  );
};
