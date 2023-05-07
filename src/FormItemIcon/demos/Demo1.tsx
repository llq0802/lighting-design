import * as antIcons from '@ant-design/icons';
import Icon, { createFromIconfontCN } from '@ant-design/icons';
import { message } from 'antd';
import copy from 'copy-to-clipboard';
import { LForm, LFormItemIcon } from 'lighting-design';
import { useState } from 'react';
import { DIYIconList, FoodIconData } from './data';

export const IconFont = createFromIconfontCN({
  // scriptUrl: '/fontIcon.js', // 离线版
  scriptUrl: [
    '//at.alicdn.com/t/c/font_3950463_4e8682pkb7.js',
    '//at.alicdn.com/t/c/font_4030238_ab5y4oosx0c.js',
  ], // 在线版
});
const Demo = () => {
  const [form] = LForm.useForm();
  const [iconItem, setIconItem] = useState<any>('icon-shutiao');

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
      initialValues={{ icon: 'icon-shutiao' }}
      onReset={() => setIconItem('icon-shutiao')}
    >
      <LFormItemIcon
        name="icon"
        label="图标"
        showIcon={false}
        options={{
          Outlined: {
            label: '线性风格',
          },
          Filled: {
            label: '实底风格(自定义渲染)',
            children(list, node) {
              // console.log(list);
              return <div>自定义渲染</div>;
            },
          },
          TwoTone: {
            label: '双色风格(禁用)',
            disabled: true,
          },
        }}
        // itemRender={(item, node) => {
        //   return <Tooltip title={item}>{node}</Tooltip>;
        // }}
        extendRender={{
          IconFont,
          options: [
            {
              label: '笑脸图标风格😀(自定义图标)',
              data: DIYIconList,
              key: '1',
            },
            {
              label: '食物图标风格🍉(阿里矢量图标)',
              data: FoodIconData,
              key: '2',
            },
          ],
        }}
        contentBefore={
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
