import type { FormInstance } from 'antd';
import { Button } from 'antd';
import { LFormItemInput } from 'lighting-design';
import type { FC } from 'react';
import { useRef, useState } from 'react';
import { LTable } from '..';
import { apiGetUserList, columns } from './utils';

const Demo1: FC = () => {
  const formRef = useRef<FormInstance>();
  const tableRef = useRef<null>(null);

  // useEffect(() => {
  //   console.log('formRef', formRef);
  // }, []);

  const [state, setState] = useState({
    parentId: '0',
  });

  const formItems = [
    <LFormItemInput key="0" name="input4" label="输入框" />,
    <LFormItemInput key="1" name="input5" label="输入框" />,
    <LFormItemInput key="2" name="input6" label="输入框" />,
    <LFormItemInput key="3" name="input7" label="输入框" />,
    <LFormItemInput key="4" name="input8" label="输入框" />,
  ];

  return (
    <LTable
      // showToolbar={false}
      loading={{ size: 'large' }}
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
              console.log(' tableRef', tableRef);
            }}
          >
            新增
          </Button>
          <Button type="primary">导出</Button>
        </>
      }
      // toolbarRight={
      //   <>
      //     <Button type="primary">标记</Button>
      //     <Button type="primary">导入</Button>
      //   </>
      // }
      formItems={formItems}
      formRef={formRef}
      columns={columns}
      // formInitialValues={{
      //   input4: '123123',
      // }}
      request={async (params, requestType) => {
        console.log('==params==', params);
        console.log('requestType ', requestType);
        console.log('tableRef ', tableRef.current);

        const res: Record<string, any> = await apiGetUserList();
        return {
          success: true,
          data: res.data,
          total: res.total,
        };
      }}
      expandable={{
        onExpand: async (isOPen, record) => {
          if (isOPen) {
            // console.log('record', record);
            await setState({
              parentId: Math.random().toString(16).slice(2),
            });
            tableRef.current!.onReload();
          }
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
  );
};

export default Demo1;
