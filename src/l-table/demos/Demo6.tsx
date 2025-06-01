import type { FormInstance } from 'antd';
import { Button, Card, Col, Row } from 'antd';
import Mock from 'better-mock';
import type { LTableInstance } from 'lighting-design';
import { LFormItemInput, LTable } from 'lighting-design';
import { awaitTime } from 'lighting-design/test';
import type { FC } from 'react';
import { useRef } from 'react';

const originData = Mock.mock({
  'list|9': [
    {
      key: '@id',
      name: '@cname',
      'age|10-70': 10,
      address: `@province@city@county`,
    },
  ],
}).list;

const formItems = [
  <LFormItemInput key="0" name="input4" label="输入框" />,
  <LFormItemInput key="1" name="input5" label="输入框" />,
  <LFormItemInput key="2" name="input6" label="输入框" />,
  <LFormItemInput key="3" name="input7" label="输入框" />,
  <LFormItemInput key="4" name="input8" label="输入框" />,
];

const Demo6: FC = () => {
  const formRef = useRef<FormInstance>();
  const tableRef = useRef<LTableInstance>();

  return (
    <LTable
      tableRef={tableRef}
      formRef={formRef}
      queryFormProps={{ showColsNumber: 3 }}
      toolbarLeft={<Button type="primary">新增</Button>}
      toolbarRight={<Button type="primary">审批</Button>}
      formItems={formItems}
      pagination={{
        pageSize: 9,
        pageSizeOptions: [9, 18, 27, 36],
      }}
      request={async (params, requestType) => {
        await awaitTime();
        return {
          success: true,
          data: originData,
          total: originData.length,
        };
      }}
      contentRender={(list: any[]) => (
        <Row gutter={[10, 10]}>
          {list.map((item) => (
            <Col span={8} key={item.key}>
              <Card title={`${item.name}-${item.age}`}>{item.address}</Card>
            </Col>
          ))}
        </Row>
      )}
    />
  );
};

export default Demo6;
