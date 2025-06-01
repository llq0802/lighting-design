import { Button, ConfigProvider, Switch, type FormInstance } from 'antd';
import type { LTableInstance } from 'lighting-design';
import { LFormItemInput, LTable } from 'lighting-design';
import { getRandomNumber } from 'lighting-design/test';
import type { FC } from 'react';
import { useRef, useState } from 'react';
import { columns, originData } from './service';

const formItems = [
  <LFormItemInput key="1" name="input5" />,
  <LFormItemInput key="2" name="input6" />,
  <LFormItemInput key="3" name="input7" />,
  <LFormItemInput key="4" name="input8" />,
];
const publicCardProps = {
  style: {
    borderRadius: 0,
  },
};
const data = originData.slice(6);

const Demo12: FC = () => {
  const formRef = useRef<FormInstance>();
  const tableRef = useRef<LTableInstance>();
  const [fillSpace, setFillSpace] = useState<boolean | number>(false);

  return (
    <>
      <div>
        <span>是否完全占满视口剩余空间：</span>
        <Switch checked={fillSpace as boolean} onChange={(b) => setFillSpace(b)} />

        <Button style={{ marginLeft: 10 }} onClick={() => setFillSpace(getRandomNumber(10, 100))}>
          点击随机距离视口底部
        </Button>
      </div>

      <ConfigProvider
        theme={{
          // components: {
          //   Table: {
          //     colorFillAlter: '#00b96b',
          //     colorBorderSecondary: 'red',
          //   },
          // },
          token: {
            colorFillAlter: '#00b96b',
          },
        }}
      >
        <LTable
          rowClassName="my-row-fill-className"
          tableRef={tableRef}
          formRef={formRef}
          queryFormProps={{ size: 'small', isSpace: true }}
          size="small"
          fillSpace={fillSpace}
          rowKey="key"
          formCardProps={{
            ...publicCardProps,
            // bodyStyle: {
            //   marginBottom: 0,
            // },
            styles: {
              body: {
                marginBottom: 0,
              },
            },
          }}
          tableCardProps={publicCardProps}
          showToolbar={false}
          formItems={formItems}
          columns={columns}
          request={async (params, type) => {
            // console.log('是否占满视口剩余空间-request-params', params, type);
            return {
              success: true,
              data,
              total: data?.length,
            };
          }}
        />
      </ConfigProvider>
    </>
  );
};

export default Demo12;
