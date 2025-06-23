import { usePagination } from 'ahooks';
import { ConfigProvider, Spin, Transfer } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { useImperativeHandle, type FC } from 'react';

const BaseTransfer: FC<Record<string, any>> = (props) => {
  const {
    fieldNames = { label: 'label', value: 'value' },
    options,
    //
    actionRef,
    request,
    requestOptions,
    spin,
    dataSource,
    ...restProps
  } = props;
  const { label: labelKey, value: valueKey } = fieldNames;

  const requestRes = usePagination(
    async (...args) => {
      if (request) {
        const res = await request?.(...args);
        return res;
      }
      return { list: [], total: 0 };
    },
    { manual: !request, ...requestOptions },
  );
  const { loading, data } = requestRes;

  useImperativeHandle(actionRef, () => requestRes);

  const dom = (
    <Transfer
      titles={['数据项', '已选择']}
      rowKey={(record: Record<string, any>) => record[valueKey] || 'value'}
      render={(item: Record<string, any>) => item[labelKey] ?? item[valueKey]}
      dataSource={dataSource || options || data?.list}
      {...restProps}
      listStyle={
        restProps?.listStyle || {
          flex: 1,
          height: 400,
        }
      }
    />
  );

  return (
    <ConfigProvider locale={zhCN}>
      {dataSource || options ? (
        dom
      ) : (
        <Spin spinning={loading} {...spin}>
          {dom}
        </Spin>
      )}
    </ConfigProvider>
  );
};

export default BaseTransfer;
