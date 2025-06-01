import * as antIcons from '@ant-design/icons';
import Icon, { createFromIconfontCN } from '@ant-design/icons';
import { message } from 'antd';
import copy from 'copy-to-clipboard';
import { LForm, LFormItemIcon } from 'lighting-design';
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

  const iconItem = LForm.useWatch('icon2', form);

  return (
    <LForm
      form={form}
      submitter={{ buttonAlign: 'center' }}
      onValuesChange={(curName, curVal) => {
        console.log('curName', curName);
        console.log('curVal', curVal);
      }}
      onFinish={(values) => {
        console.log('values', values);
      }}
      initialValues={{ icon2: 'icon-shutiao' }}
    >
      <LFormItemIcon
        name="icon2"
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
        // itemRender={(item, node) => {
        //   return <Tooltip title={item}>{node}</Tooltip>;
        // }}
        contentBefore={
          iconItem &&
          (antIcons[iconItem as keyof typeof antIcons] ? (
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
              component={antIcons[iconItem as keyof typeof antIcons] as any}
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
