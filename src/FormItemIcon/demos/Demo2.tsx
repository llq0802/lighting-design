import { createFromIconfontCN } from '@ant-design/icons';
import { LForm, LFormItemIcon } from 'lighting-design';
import { useState } from 'react';
import { DIYIconList } from './data';

const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/c/font_3950463_4e8682pkb7.js'],
  // scriptUrl: ['/fontIcon.js'], // 离线版
});

const Demo = () => {
  const [form] = LForm.useForm();
  const [open, setopen] = useState(false);

  return (
    <LForm
      name="LFormItemIcon"
      form={form}
      submitter={{ buttonAlign: 'center' }}
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <LFormItemIcon
        name="icon"
        label="图标"
        options={{
          Outlined: {
            label: '线性风格',
          },
          Filled: {
            label: '实底风格',
            children(_list, node) {
              return <div>{node}</div>;
            },
          },
        }}
        modalProps={{
          open,
          width: 700,
          onCancel() {
            setopen(false);
          },
        }}
        inputProps={{ onClick: () => setopen(true) }}
        extendRender={{
          IconFont,
          options: [
            {
              label: '笑脸图标风格😀',
              data: DIYIconList,
              key: '1',
            },
          ],
        }}
        iconStyle={{
          fontSize: 20,
          color: '#10101090',
        }}
      />
    </LForm>
  );
};
export default Demo;
