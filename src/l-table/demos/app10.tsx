import { Button, Divider, Flex } from 'antd';
import Mock from 'better-mock';
import { LFormItemInput, LFormItemSelect } from 'lighting-design';
import { useState } from 'react';
import LTable from '..';
import { apiGetUserList, columns } from './service';

const options = Mock.mock({ 'list|5': [{ label: '@cname', value: '@id' }] }).list;

const CacheLTable1: React.FC = ({}) => {
  return (
    <LTable
      rowKey="id"
      requestCacheKey="CacheLTable1"
      formItems={[
        <LFormItemInput label="输入框1" name="input1" />,
        <LFormItemInput label="输入框2" name="input2" />,
        <LFormItemSelect label="下拉框1" name="select1" options={options} />,
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
        const res = await apiGetUserList(params, 95);
        return res;
      }}
    />
  );
};
const CacheLTable2: React.FC = ({}) => {
  return (
    <LTable
      rowKey="id"
      requestCacheKey="CacheLTable2"
      isRequestCacheParams
      formItems={[
        <LFormItemInput label="输入框1" name="input1" />,
        <LFormItemInput label="输入框2" name="input2" />,
        <LFormItemSelect label="下拉框1" name="select1" options={options} />,
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
        console.log('request', params, type);
        const res = await apiGetUserList(params, 95);
        return res;
      }}
    />
  );
};

export default () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <div>
      <p>您可以多次单击该按钮，表格数据将被缓存.</p>
      <p>
        <Button type="primary" onClick={() => setShow1(!show1)}>
          {!show1 ? 'show 表格' : 'hide 表格'}
        </Button>
      </p>
      {show1 && <CacheLTable1 />}
      <Divider size="large" />
      <Divider size="large" />
      <p>您可以多次单击该按钮并使用表单查询与分页，表单数据与请求参数以及表格数据将被缓存.</p>
      <p>
        <Button type="primary" onClick={() => setShow2(!show2)}>
          {!show2 ? 'show 表格' : 'hide 表格'}
        </Button>
      </p>
      {show2 && <CacheLTable2 />}
      <Divider size="large" />
    </div>
  );
};
