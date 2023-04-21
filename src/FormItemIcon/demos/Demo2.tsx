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
        if (values?.icon) {
          setIconItem(values.icon);
        }
      }}
      onReset={() => setIconItem('')}
    >
      <LFormItemIcon
        name="icon"
        label="图标"
        options={{
          Outlined: {
            label: '线性风格',
            disabled: false,
          },
          Filled: {
            label: '实底风格',
            disabled: false,
            children(list) {
              return <div>{list}</div>;
            },
          },
          TwoTone: {
            label: '双色风格',
            disabled: true,
          },
        }}
        modalProps={{
          width: 800,
        }}
        // extendOptions={[{
        //   label: '',
        //   data: [],
        //   scriptUrl: '',
        // }]}
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
