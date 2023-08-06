import {
  Alert,
  Card,
  Col,
  ConfigProvider,
  Row,
  Watermark,
  type FormInstance,
} from 'antd';
import type { LTableInstance } from 'lighting-design';
import { LFormItemInput, LTable } from 'lighting-design';
import type { FC } from 'react';
import { useRef } from 'react';
import { apiGetUserList, columns } from './service';

const formItems = [
  <LFormItemInput key="2" name="input6" label="输入框" />,
  <LFormItemInput key="3" name="input7" label="输入框" />,
  <LFormItemInput key="4" name="input8" label="输入框" />,
];

const Demo14: FC = () => {
  const formRef = useRef<FormInstance>();
  const tableRef = useRef<LTableInstance>();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b',
        },
      }}
    >
      <Watermark content="Lighting Design">
        <LTable
          rowKey="key"
          tableRef={tableRef}
          queryFormProps={{
            isSpace: true,
            showColsNumber: 2,
            isEnterSubmit: false,
          }}
          pagination={{ showQuickJumper: false }}
          showToolbar={false}
          formItems={formItems}
          formRef={formRef}
          columns={columns}
          tableExtra={<Alert message="展示某些信息" type="info" />}
          request={async (params, requestType) => {
            // console.log('==params==', params);
            // console.log('==requestType==', requestType);
            const res: Record<string, any> = await apiGetUserList();
            return {
              success: true,
              data: res.data,
              total: res.total,
            };
          }}
          tableRender={(doms) => {
            // console.log('doms', doms);
            return (
              // 自定义一些组装

              <Row gutter={16}>
                <Col span={6}>
                  <Card bordered={false} style={{ height: '100%' }}>
                    可以自由组合
                  </Card>
                </Col>

                <Col span={18}>
                  {doms.searchFormDom}

                  <div style={{ marginBottom: 16 }}>{doms.tableExtraDom}</div>

                  {doms.toolbarDom}

                  {doms.tableDom}
                </Col>
              </Row>
            );
          }}
        />
      </Watermark>
    </ConfigProvider>
  );
};

export default Demo14;
