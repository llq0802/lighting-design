import { usePagination } from 'ahooks';
import { ConfigProvider, Spin, Transfer } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { useImperativeHandle, type FC } from 'react';

const BaseTransfer: FC<Record<string, any>> = (props) => {
  const {
    fieldNames = { label: 'label', value: 'value' },
    dataSource,
    //
    actionRef,
    request,
    requestOptions,
    spin,
    isCustomTransfer = true,
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
      rowKey={(record: Record<string, any>) => record[valueKey] || 'value'}
      render={(item: Record<string, any>) => item[labelKey] ?? item[valueKey]}
      titles={['数据项', '已选择']}
      dataSource={dataSource || data?.list}
      {...restProps}
      listStyle={
        restProps?.listStyle || {
          height: isCustomTransfer ? 'auto' : 410,
          width: isCustomTransfer ? 'auto' : 200,
        }
      }
    />
  );

  return (
    <ConfigProvider locale={zhCN}>
      {dataSource?.length ? (
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
