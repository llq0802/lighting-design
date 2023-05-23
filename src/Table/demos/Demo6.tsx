import type { FormInstance } from 'antd';
import { Button, Card, Col, Row } from 'antd';
import type { LTableInstance } from 'lighting-design';
import { LFormItemInput, LTable } from 'lighting-design';
import type { FC } from 'react';
import { useRef } from 'react';
import AddEditModal from './components/AddEditModal';

const originData = [
  {
    key: '1',
    name: 'John Brown',
    age: 10,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '5',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '6',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '7',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '8',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '9',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

const Demo1: FC = () => {
  const formRef = useRef<FormInstance>();
  const tableRef = useRef<LTableInstance>();

  const formItems = [
    <LFormItemInput key="0" name="input4" label="输入框" />,
    <LFormItemInput key="1" name="input5" label="输入框" />,
    <LFormItemInput key="2" name="input6" label="输入框" />,
    <LFormItemInput key="3" name="input7" label="输入框" />,
    <LFormItemInput key="4" name="input8" label="输入框" />,
  ];

  return (
    <LTable
      tableRef={tableRef}
      formRef={formRef}
      queryFormProps={{ showColsNumber: 3 }}
      toolbarLeft={
        <>
          <Button
            type="primary"
            onClick={() => {
              console.log(' tableRef', tableRef);
            }}
          >
            新增
          </Button>
          <AddEditModal />
        </>
      }
      formItems={formItems}
      request={async (params, requestType) => {
        // console.log('==params==', params);
        // console.log('requestType ', requestType);
        // console.log('tableRef ', tableRef.current);
        return {
          success: true,
          data: originData,
          total: originData.length,
        };
      }}
      contentRender={(data: any[]) => (
        <Row gutter={[10, 10]}>
          {data.map((item) => (
            <Col span={8} key={item.key}>
              <Card title={item.name} />
            </Col>
          ))}
        </Row>
      )}
    />
  );
};

export default Demo1;
