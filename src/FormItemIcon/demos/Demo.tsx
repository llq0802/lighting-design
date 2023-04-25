import Icon, * as antIcons from '@ant-design/icons';
import { message } from 'antd';
import copy from 'copy-to-clipboard';
import { LForm, LFormItemIcon } from 'lighting-design';
import { useState } from 'react';

const Demo = () => {
  const [form] = LForm.useForm();
  const [iconItem, setIconItem] = useState<any>('');

  return (
    <LForm
      name="LFormItemIcon"
      form={form}
      submitter={{ buttonAlign: 'center' }}
      onValuesChange={(_, values) => {
        setIconItem(values?.icon ? values.icon : '');
      }}
      onReset={() => setIconItem('')}
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <LFormItemIcon
        name="icon"
        label="图标"
        contentAfter={
          iconItem && (
            <Icon
              style={{
                fontSize: 20,
                color: '#10101090',
                verticalAlign: 'middle',
              }}
              onClick={() => {
                copy(iconItem);
                message.success('复制成功');
              }}
              component={antIcons[iconItem]}
            />
          )
        }
      />
    </LForm>
  );
};
export default Demo;
