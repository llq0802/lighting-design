import type { FormInstance } from 'antd';
import { Button } from 'antd';
import { LFormItemInput } from 'lighting-design';
import { useRef, useState } from 'react';
import BaseTable from '../components/BaseTable';
import { apiGetUserList, columns } from './utils';

const Demo1 = () => {
  const formRef = useRef<FormInstance>();
  const tableRef = useRef();

  // useEffect(() => {
  //   console.log('formRef', formRef);
  // }, []);

  const [state, setState] = useState({
    useid: '123',
  });

  return (
    <>
      <BaseTable
        // loading={{
        //   size: 'large',
        // }}
        tableRef={tableRef}
        requestParams={state}
        queryFormProps={{
          showColsNumber: 3,
          isSpace: false,
        }}
        toolbarLeft={
          <>
            <Button
              type="primary"
              onClick={() => {
                setState({
                  useid: Math.random().toString(16).slice(2),
                });
                console.log(' tableRef', tableRef);
              }}
            >
              新增
            </Button>
            <Button type="primary">导出</Button>
          </>
        }
        toolbarRight={
          <>
            <Button type="primary">标记</Button>
            <Button type="primary">导入</Button>
          </>
        }
        formItems={[
          <LFormItemInput name="input4" label="输入框" />,
          <LFormItemInput name="input5" label="输入框" />,
          <LFormItemInput name="input6" label="输入框" />,
          <LFormItemInput name="input7" label="输入框" />,
          <LFormItemInput name="input8" label="输入框" />,
        ]}
        formRef={formRef}
        columns={columns}
        formInitialValues={{
          input4: '123123',
        }}
        request={async (params, requestType) => {
          console.log('params --', params);
          // console.log('requestType ', requestType);
          const res = await apiGetUserList();
          // console.log(' res', res);
          return {
            success: true,
            data: res.data,
            total: res.total,
          };
        }}
        expandable={{
          onExpand: (a, b) => {
            console.log(' a,b', a, b);
          },
        }}
        // contentRender={(data: any[]) => (
        //   <Row gutter={[8, 8]}>
        //     {data.map((d) => (
        //       <Col span={8} key={d.key}>
        //         <Card title={d.name} />
        //       </Col>
        //     ))}
        //   </Row>
        // )}
      />
    </>
  );
};

export default Demo1;
