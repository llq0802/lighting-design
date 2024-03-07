import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { LForm, LFormItem, LFormItemInput, LListForm } from 'lighting-design';

const Demo1 = () => {
  return (
    <div>
      <LForm
        onFinish={(values) => {
          console.log('values', values);
        }}
        submitter={{ buttonAlign: 'center' }}
        // initialValues={{
        //   input: '名字',
        //   list: [
        //     { first: '345', last: '57' },
        //     { first: '687', last: '3278' },
        //   ],
        // }}
      >
        <LFormItemInput name="input" label="其他输入的字段" />

        <LListForm name="list">
          {(fields, { add, remove, move }, { errors }) => {
            return (
              <>
                {fields.map((field) => {
                  const { key, name, ...restField } = field;
                  console.log('==field====>', field);
                  return (
                    <LFormItem label="名字" key={key} style={{ marginBottom: 0 }}>
                      <Space key={key} style={{ display: 'flex', width: '100%' }} align="baseline">
                        <LFormItemInput
                          {...restField}
                          placeholder="请输入 First 名"
                          required
                          name={[name, 'first']}
                        />
                        <LFormItemInput
                          {...restField}
                          placeholder="请输入 Last 名"
                          required
                          name={[name, 'last']}
                        />

                        <MinusCircleOutlined onClick={() => remove(name)} />
                        <PlusOutlined onClick={() => add()} />
                      </Space>
                    </LFormItem>
                  );
                })}

                <LFormItem>
                  <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                    增加一项
                  </Button>
                </LFormItem>
              </>
            );
          }}
        </LListForm>
      </LForm>
    </div>
  );
};

export default Demo1;
