import type { FormInstance } from 'antd';
import { Button, Col, Row } from 'antd';
import type { LTableInstance } from 'lighting-design';
import { LFormItemInput, LTable } from 'lighting-design';
import type { FC } from 'react';
import { useRef } from 'react';
import { apiGetUserList, columns } from './service';

const formItems = [
  <LFormItemInput key="0" name="input4" label="输入框" />,
  <LFormItemInput key="1" name="input5" label="输入框" />,
  <LFormItemInput key="2" name="input6" label="输入框" />,
  <LFormItemInput key="3" name="input7" label="输入框" />,
  <LFormItemInput key="4" name="input8" label="输入框" />,
];

const Demo3: FC = () => {
  const formRef = useRef<FormInstance>();
  const tableRef = useRef<LTableInstance>();

  return (
    <LTable
      tableLayout="fixed"
      rowKey="key"
      tableRef={tableRef}
      toolbarLeft={<Button type="primary">新增</Button>}
      toolbarRight={<Button type="primary">审批</Button>}
      formItems={formItems}
      tableHeaderRender={(cols) => {
        return (
          <Row
            style={{
              padding: `10px 0`,
              marginBottom: 16,
              border: '1px solid #000',
              background: '#eee',
            }}
          >
            {cols.map((col) => {
              return (
                <Col flex={1} key={col.key} style={{ display: 'grid', placeItems: 'center' }}>
                  <b style={{ color: '#1677ff' }}>{col.title}</b>
                </Col>
              );
            })}
          </Row>
        );
      }}
      formRef={formRef}
      columns={columns}
      request={async (params, requestType) => {
        const res: Record<string, any> = await apiGetUserList(params);
        return {
          success: true,
          data: res.data,
          total: res.total,
        };
      }}
    />
  );
};

export default Demo3;
