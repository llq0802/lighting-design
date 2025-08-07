import { Button, Divider, Flex } from 'antd';
import Mock from 'better-mock';
import { LFormItemDate, LFormItemInput, LFormItemSelect, LTable } from 'lighting-design';
import React from 'react';
import { apiGetUserList, columns, type DataType } from './service';

type PropsType = {};

const options = Mock.mock({ 'list|5': [{ label: '@cname', value: '@id' }] }).list;

const App: React.FC<PropsType> = ({}) => {
  return (
    <Flex vertical gap={16}>
      <LTable<DataType>
        size="middle"
        rowKey="id"
        queryFormProps={{
          isSpace: true,
        }}
        pagination={{ defaultPageSize: 5 }}
        formItems={[
          <LFormItemInput name="input5" placeholder="请输入字段1" />,
          <LFormItemInput name="input6" placeholder="请输入字段2" />,
          <LFormItemSelect name="select1" options={options} placeholder="请选择字段3" />,
        ]}
        toolbar={
          <Flex gap={8} flex={1}>
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
          const res = await apiGetUserList(params);
          return res;
        }}
      />
      <Divider />
      <LTable
        size="middle"
        rowKey="id"
        queryFormProps={{
          isSpace: true,
          submitter: {
            position: 'flex-start',
          },
        }}
        pagination={{ defaultPageSize: 5 }}
        formItems={[
          <LFormItemInput name="input5" placeholder="请输入字段1" />,
          <LFormItemInput name="input6" placeholder="请输入字段2" />,
          <LFormItemSelect name="select1" options={options} placeholder="请选择字段3" />,
        ]}
        toolbar={
          <Flex gap={8} flex={1}>
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
          const res = await apiGetUserList(params);
          return res;
        }}
      />
      <Divider />
      <LTable
        size="middle"
        rowKey="id"
        queryFormProps={{
          isSpace: true,
          justify: 'end',
          submitter: {
            position: 'flex-start',
          },
        }}
        pagination={{ defaultPageSize: 5 }}
        formItems={[
          <LFormItemInput name="input5" placeholder="请输入字段1" />,
          <LFormItemInput name="input6" placeholder="请输入字段2" />,
          <LFormItemSelect name="select1" options={options} placeholder="请选择字段3" />,
        ]}
        toolbar={
          <Flex gap={8} flex={1}>
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
          const res = await apiGetUserList(params);
          return res;
        }}
      />
      <Divider />

      <LTable
        size="middle"
        rowKey="id"
        queryFormProps={{
          isSpace: true,
          justify: 'center',
          submitter: {
            position: 'flex-start',
          },
        }}
        pagination={{ defaultPageSize: 5 }}
        formItems={[
          <LFormItemInput name="input5" placeholder="请输入字段1" />,
          <LFormItemInput name="input6" placeholder="请输入字段2" />,
          <LFormItemSelect name="select1" options={options} placeholder="请选择字段3" />,
        ]}
        toolbar={
          <Flex gap={8} flex={1}>
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
          const res = await apiGetUserList(params);
          return res;
        }}
      />
      <Divider />
      <LTable
        size="middle"
        rowKey="id"
        queryFormProps={{
          column: 3,
          submitter: {
            position: 'flex-start',
          },
        }}
        pagination={{ defaultPageSize: 5 }}
        formItems={[
          <LFormItemInput name="input5" placeholder="请输入字段1" />,
          <LFormItemInput name="input6" placeholder="请输入字段2" />,
          <LFormItemSelect name="select1" options={options} placeholder="请选择字段3" />,
        ]}
        toolbar={
          <Flex gap={8} flex={1}>
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
          const res = await apiGetUserList(params);
          return res;
        }}
      />
      <Divider />
      <LTable
        size="middle"
        rowKey="id"
        queryFormProps={{
          column: 3,
        }}
        pagination={{ defaultPageSize: 5 }}
        formItems={[
          <LFormItemInput name="input5" placeholder="请输入字段1" />,
          <LFormItemInput name="input6" placeholder="请输入字段2" />,
          <LFormItemInput name="input1" placeholder="请输入字段3" />,
          <LFormItemInput name="input2" placeholder="请输入字段4" />,
          <LFormItemSelect name="select1" options={options} placeholder="请选择字段99" />,
        ]}
        toolbar={
          <Flex gap={8} flex={1}>
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
          const res = await apiGetUserList(params);
          return res;
        }}
      />
      <Divider />
      <LTable
        size="middle"
        rowKey="id"
        queryFormProps={{
          column: 4,
        }}
        pagination={{ defaultPageSize: 5 }}
        formItems={[
          <LFormItemInput name="input5" placeholder="请输入字段1" />,
          <LFormItemInput name="input6" placeholder="请输入字段2" />,
          <LFormItemInput name="input1" placeholder="请输入字段3" />,
          <LFormItemInput name="input4" placeholder="请输入字段4" />,
          <LFormItemSelect name="select1" options={options} placeholder="请选择字段99" />,
          {
            content: <LFormItemDate rangePicker name="input66" />,
            colProps: {
              xs: 24, // 屏幕 < 576px 响应式栅格
              sm: 24, // 屏幕 ≥ 576px 响应式栅格，
              md: 12, // 屏幕 ≥ 768px 响应式栅格
              lg: 12, // 屏幕 ≥ 992px 响应式栅格
              xl: 8, // 屏幕 ≥ 1200px 响应式栅格
              xxl: 12, // 屏幕 ≥ 1600px 响应式栅格
            },
          },
        ]}
        toolbar={
          <Flex gap={8} flex={1}>
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
          const res = await apiGetUserList(params);
          return res;
        }}
      />
      <Divider />
      <LTable
        size="middle"
        rowKey="id"
        queryFormProps={{
          submitter: {
            renderSubmitter(doms, props) {
              return (
                <Flex gap={8} flex={1}>
                  <Button>按钮1</Button>
                  <Button>按钮2</Button>
                  <Button>按钮3</Button>
                  <Button>按钮4</Button>
                  {doms.resetDom}
                  {doms.submitDom}
                </Flex>
              );
            },
          },
        }}
        pagination={{ defaultPageSize: 5 }}
        formItems={[
          <LFormItemInput name="input5" placeholder="请输入字段1" />,
          <LFormItemInput name="input6" placeholder="请输入字段2" />,
          <LFormItemInput name="input1" placeholder="请输入字段3" />,
          <LFormItemInput name="input2" placeholder="请输入字段4" />,
          <LFormItemSelect name="select1" options={options} placeholder="请选择字段99" />,
        ]}
        columns={columns}
        request={async (params, type) => {
          const res = await apiGetUserList(params);
          return res;
        }}
      />
      <Divider />
    </Flex>
  );
};

export default App;
