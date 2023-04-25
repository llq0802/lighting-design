import * as antIcons from '@ant-design/icons';
import Icon, { createFromIconfontCN } from '@ant-design/icons';
import { message } from 'antd';
import copy from 'copy-to-clipboard';
import { LForm, LFormItemIcon } from 'lighting-design';
import { useState } from 'react';
import { DIYIconList } from './data';

const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/c/font_3950463_4e8682pkb7.js'],
  // scriptUrl: ['/fontIcon.js'], // 离线版
});

const Demo = () => {
  const [form] = LForm.useForm();
  const [iconItem, setIconItem] = useState<any>('');
  const [open, setopen] = useState(false);

  return (
    <LForm
      name="LFormItemIcon"
      form={form}
      submitter={{ buttonAlign: 'center' }}
      onValuesChange={(_, values) => {
        setIconItem(values?.icon ? values.icon : '');
      }}
      onFinish={(values) => {
        console.log('values', values);
      }}
      onReset={() => setIconItem('')}
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
          width: 800,
          onCancel() {
            setopen(false);
          },
        }}
        inputProps={{
          onClick: () => setopen(true),
        }}
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
        contentAfter={
          iconItem &&
          (antIcons[iconItem] ? (
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
          ) : (
            <IconFont
              type={iconItem}
              style={{
                fontSize: 20,
                color: '#10101090',
                verticalAlign: 'middle',
              }}
              onClick={() => {
                copy(iconItem);
                message.success('复制成功');
              }}
            />
          ))
        }
      />
    </LForm>
  );
};
export default Demo;
