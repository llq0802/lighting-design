import { LoadingOutlined } from '@ant-design/icons';
import { LForm, LFormItemCascader } from 'lighting-design';
import { awaitTime } from '../../../../_utils';

const options: any[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const Index = () => {
  const [form] = LForm.useForm();

  return (
    <LForm name="LFormItemSelect" form={form} submitter={false}>
      <LFormItemCascader
        label="级联选择"
        name="cascader1"
        required
        request={async () => {
          const result = await awaitTime(options);
          if (result.success) {
            return result.data;
          }
        }}
      />
      <LFormItemCascader
        label="级联选择"
        name="cascader2"
        spin={{
          indicator: <LoadingOutlined style={{ fontSize: 24 }} spin />,
        }}
        required
        request={async () => {
          const result = await awaitTime(options);
          if (result.success) {
            return result.data;
          }
        }}
      />
    </LForm>
  );
};
export default Index;
