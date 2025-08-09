import { Alert, Button, Card, Flex, Table } from 'antd';
import Mock from 'better-mock';
import { LFormItemInput, LFormItemSelect, LTable } from 'lighting-design';
import React from 'react';
import { apiGetUserList, columns, type DataType } from './service';

type PropsType = {};

const App: React.FC<PropsType> = ({}) => {
  return (
    <LTable<DataType>
      rowKey="id"
      title={() => <Alert message="title" type="info"></Alert>}
      tableExtra={
        <Card>
          <Alert message="tableExtra" type="info"></Alert>
        </Card>
      }
      footer={() => <Alert message="footer" type="info"></Alert>}
      formItems={[
        <LFormItemInput label="输入框1" name="input1" />,
        <LFormItemInput label="输入框2" name="input2" />,
        <LFormItemSelect
          label="下拉框1"
          name="select1"
          options={Mock.mock({ 'list|5': [{ label: '@cname', value: '@id' }] }).list}
        />,
      ]}
      toolbar={
        <Flex gap={8} flex={1}>
          <Button>按钮1</Button>
          <Button>按钮2</Button>
          <Button>按钮3</Button>
          <Button>按钮4</Button>
          <Button type="primary" style={{ marginLeft: 'auto' }}>
            按钮4
          </Button>
          <Button type="primary">按钮5</Button>
        </Flex>
      }
      columns={columns}
      request={async (params, type) => {
        // console.log('===request请求之前==>', type, params);
        const res = await apiGetUserList(params, 95);
        // console.log('===request请求之后==>', type, params);
        return res;
      }}
      summary={() => (
        <Table.Summary>
          <Table.Summary.Row>
            <Table.Summary.Cell align="center" index={0}>
              Summary1
            </Table.Summary.Cell>
            <Table.Summary.Cell align="center" index={1}>
              Summary2
            </Table.Summary.Cell>
            <Table.Summary.Cell align="center" index={2}>
              Summary3
            </Table.Summary.Cell>
            <Table.Summary.Cell align="center" index={3}>
              Summary4
            </Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
    />
  );
};

export default App;
