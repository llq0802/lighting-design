import { Tag, type PaginationProps } from 'antd';
import type { AnyObject } from 'antd/es/_util/type';
import Mock from 'better-mock';
import { LForm, LFormItemInput, LFormItemSelect, LTable } from 'lighting-design';
import React, { useEffect, useState } from 'react';
import { apiGetUserList, columns, type DataType } from './service';

interface TableParams {
  pagination: {
    current: number;
    pageSize: number;
    total: number;
  };
  formValues?: Record<string, any>;
}

const toURLSearchParams = <T extends AnyObject>(record: T) => {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(record)) {
    params.append(key, value);
  }
  return params;
};

const App: React.FC = () => {
  const [dataSource, setDataSource] = useState<DataType[]>();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
      total: 0,
    },
    formValues: {},
  });

  const fetchGetUserList = async () => {
    try {
      setLoading(true);
      const res = await apiGetUserList();
      setTableParams({
        ...tableParams,
        pagination: { ...tableParams.pagination, total: res.total },
      });
      setDataSource(res.list);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGetUserList();
  }, [tableParams.pagination?.current, tableParams.pagination?.pageSize, tableParams.formValues]);

  const handleTableChange: PaginationProps['onChange'] = (current, pageSize) => {
    setTableParams({
      ...tableParams,
      pagination: {
        ...tableParams.pagination,
        current,
        pageSize,
      },
    });
  };
  const [form] = LForm.useForm();

  return (
    <LTable<DataType>
      rowKey="id"
      form={form}
      queryFormProps={{
        submitter: {
          onReset() {
            setTableParams({
              ...tableParams,
              formValues: {},
            });
          },
          onSubmit(values) {
            setTableParams({
              ...tableParams,
              formValues: { ...values },
            });
          },
        },
      }}
      columns={columns}
      formItems={[
        <LFormItemInput label="输入框1" name="input1" />,
        <LFormItemInput label="输入框2" name="input2" />,
        <LFormItemSelect
          label="下拉框1"
          name="select1"
          options={Mock.mock({ 'list|5': [{ label: '@cname', value: '@id' }] }).list}
        />,
      ]}
      dataSource={dataSource}
      pagination={{
        ...tableParams.pagination,
        onChange: handleTableChange,
        showTotal: (t, r) => (
          <>
            显示 <Tag>{r[0]}</Tag>条 - <Tag>{r[1]}</Tag>，共 <Tag>{t}</Tag>条数据
          </>
        ),
      }}
      loading={loading}
    />
  );
};

export default App;
