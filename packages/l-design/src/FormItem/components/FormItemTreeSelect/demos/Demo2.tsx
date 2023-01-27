import { LoadingOutlined } from '@ant-design/icons';
import { LForm, LFormItemSelect, LFormItemTreeSelect } from 'lighting-design';
import { awaitTime } from '../../../../_utils';

const Index = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      name="LFormItemTreeSelect"
      form={form}
      labelCol={{ flex: '80px' }}
      submitter={{
        buttonAlign: 80,
      }}
    >
      <LFormItemSelect
        label="select1"
        name="select1"
        required
        options={[
          { label: 'A', value: 'a' },
          { label: 'B', value: 'b' },
          { label: 'C', value: 'c' },
        ]}
      />
      <LFormItemTreeSelect
        // debounceTime={200} 防抖更新
        dependencies={['select1']}
        label="select2"
        name="select2"
        required
        spin={{
          indicator: <LoadingOutlined style={{ fontSize: 24 }} spin />,
        }}
        request={async (select1) => {
          console.log('select1 ', select1);
          let data: Record<string, any>[] = [];
          if (select1 === 'a') {
            data = [
              {
                title: 'A',
                value: 'a',
                children: [
                  {
                    title: 'A-1',
                    value: 'a-1',
                  },
                ],
              },
            ];
          }
          if (select1 === 'b') {
            data = [
              {
                title: 'B',
                value: 'b',
                children: [
                  {
                    title: 'B-1',
                    value: 'b-1',
                  },
                ],
              },
            ];
          }
          if (select1 === 'c') {
            data = [
              {
                title: 'C',
                value: 'c',

                children: [
                  {
                    title: 'C-1',
                    value: 'c-1',
                  },
                ],
              },
            ];
          }
          const result = await awaitTime(data);
          if (result.success) return result.data;
        }}
      />
    </LForm>
  );
};
export default Index;
