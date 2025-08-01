import { usePagination } from 'ahooks';
import { ConfigProvider, Spin, Transfer } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { useImperativeHandle, type FC } from 'react';

const BaseTransfer: FC<Record<string, any>> = (props) => {
  const {
    fieldNames = { label: 'label', value: 'value' },
    block,
    listHeight = 400,
    options,
    dataSource,
    //
    actionRef,
    request,
    requestOptions,
    spin,
    ...restProps
  } = props;
  const { label: labelKey, value: valueKey } = fieldNames;

  const requestRes = usePagination(
    async (...args) => {
      if (request) {
        return await request?.(...args);
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
      rowKey={(record: Record<string, any>) => record[valueKey] ?? record[labelKey]}
      render={(item: Record<string, any>) => item[labelKey] ?? item[valueKey]}
      dataSource={dataSource || options || data?.list}
      {...restProps}
      style={{
        width: block ? '100%' : 'fit-content',
        height: listHeight,
        ...restProps?.style,
      }}
      listStyle={{
        flex: 1,
        height: '100%',
        ...restProps?.listStyle,
      }}
    />
  );

  return (
    <ConfigProvider locale={zhCN}>
      {loading && !dataSource && !options ? <Spin {...spin}>{dom}</Spin> : dom}
    </ConfigProvider>
  );
};

export default BaseTransfer;
