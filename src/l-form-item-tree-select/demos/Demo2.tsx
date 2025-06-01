import { LoadingOutlined } from '@ant-design/icons';
import { LForm, LFormItemSelect, LFormItemTreeSelect } from 'lighting-design';
import { awaitTime } from '../../test';

const Index = () => {
  const [form] = LForm.useForm();
  const select1Val = LForm.useWatch('select1', form);

  return (
    <LForm
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
        label="select2"
        name="select2"
        required
        refreshDeps={[select1Val]}
        spin={{
          indicator: <LoadingOutlined style={{ fontSize: 24 }} spin />,
        }}
        disabled={!select1Val}
        request={async () => {
          form.setFieldValue('select2', null);
          if (!select1Val) return [];
          let data: Record<string, any>[] = [];
          if (select1Val === 'a') {
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
          if (select1Val === 'b') {
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
          if (select1Val === 'c') {
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
          await awaitTime();
          return data;
        }}
      />
    </LForm>
  );
};
export default Index;
