import {
  useDeepCompareEffect,
  useLatest,
  useMemoizedFn,
  usePagination,
  useRafState,
} from 'ahooks';
import { ConfigProvider, Spin, Transfer } from 'antd';
import type { TransferDirection } from 'antd/es/transfer';
import zhCN from 'antd/locale/zh_CN';
import classnames from 'classnames';
import { useImperativeHandle, type FC } from 'react';
import type { LFormItemTransferProps } from '..';

export type FieldNames = { label: string; value: string };
export interface RecordType {
  key?: string | number;
  title?: React.ReactNode;
  disabled?: boolean;
  [key: string]: any;
}

type TransferWrapperProps = Pick<
  LFormItemTransferProps,
  | 'limitMaxCount'
  | 'transferProps'
  | 'fieldNames'
  | 'options'
  | 'actionRef'
  | 'request'
  | 'disabled'
  | 'requestOptions'
  | 'pagination'
> &
  Record<string, any>;

const prefixCls = 'lightd-transfer';

const TransferWrapper: FC<TransferWrapperProps> = (props) => {
  const {
    fieldNames = { label: 'title', value: 'key' },
    limitMaxCount = 0,
    transferProps,
    options = [],
    request,
    requestOptions,
    actionRef,
    outLoading,
    disabled,
    pagination,

    isCustomTransfer,
    ...restProps
  } = props;
  const value = restProps.targetKeys ?? [];
  const { label: labelKey, value: valueKey } = fieldNames;
  const [opt, setOpt] = useRafState(() => options);
  const optRef = useLatest(opt); // 得到最新的值 防止闭包

  const { loading, pagination: reqPagination } = usePagination(
    // @ts-ignore
    async (...args) => {
      if (options?.length) {
        return {
          total: options.length,
          list: options,
        };
      }
      // @ts-ignore
      const res = await request?.(...args);
      return {
        total: res?.total || res?.data?.length,
        list: res?.data,
      };
    },
    {
      ...requestOptions,
      onSuccess(res) {
        setOpt([...(res?.list ?? [])]);
      },
    },
  );

  useImperativeHandle(actionRef, () => reqPagination);

  /**
   * 判断是否 disabled
   * @param {RecordType[]} sourList 左侧数据的数据源
   * @param {RecordType[]} targetList 右侧已选择的数据
   * @param {number} canCount 可选择的个数
   * @return {void} 无返回值
   */
  const isDisabled = useMemoizedFn(
    (
      sourList: RecordType[],
      targetList: RecordType[],
      canCount: number,
    ): void => {
      // 设置disabled
      if (canCount > 0 && sourList.length >= canCount) {
        sourList.forEach((item: RecordType) => {
          item.disabled = false;
        });
      } else {
        // 设置disabled
        sourList.forEach((item: RecordType) => {
          item.disabled = true;
        });
      }
      setOpt([...sourList, ...targetList]);
    },
  );

  useDeepCompareEffect(() => {
    if (value?.length && limitMaxCount) {
      // 得到左侧数据
      const sourceSelectedList = optRef.current.filter(
        (item) => !value.includes(item[valueKey]),
      );
      const targetSelectedList = optRef.current
        .filter((item) => value.includes(item[valueKey]))
        .map((item) => ({ ...item, disabled: false }));
      // 得到可选择的个数: 减去右侧
      const canSelectCount = limitMaxCount - value.length;
      isDisabled(sourceSelectedList, targetSelectedList, canSelectCount);
    } else if (limitMaxCount) {
      isDisabled(optRef.current, [], limitMaxCount);
    } else {
      // 好像没什么用
      // setOpt([...optRef.current]);
    }
  }, [value]);

  useDeepCompareEffect(() => {
    setOpt(options ?? []);
  }, [options]);

  const onChange = (
    nextTargetKeys: string[],
    direction: TransferDirection,
    moveKeys: string[],
  ) => {
    if (limitMaxCount) {
      if (direction === 'left') {
        const newList = optRef.current.map((item) => {
          return {
            ...item,
            disabled: false,
          };
        });
        setOpt([...newList]);
      } else {
        // 此时左侧的数据
        const sourceSelectedList = optRef.current.filter(
          (item) => !nextTargetKeys.includes(item[valueKey]),
        );
        const targetSelectedList = optRef.current
          .filter((item) => nextTargetKeys.includes(item[valueKey]))
          .map((item) => ({ ...item, disabled: false }));
        // 得到可选择的个数: 减去右侧
        const canSelectCount = limitMaxCount - nextTargetKeys.length;
        isDisabled(sourceSelectedList, targetSelectedList, canSelectCount);
      }
    }

    transferProps?.onChange?.(nextTargetKeys, direction, moveKeys);
    restProps?.onChange?.(nextTargetKeys, direction, moveKeys);
  };

  const onSelectChange = (
    leftSelectedKeys: string[], // 左
    rightSelectedKeys: string[], // 右
  ) => {
    restProps?.onSelectChange?.(leftSelectedKeys, rightSelectedKeys);

    if (!limitMaxCount || rightSelectedKeys?.length) return;

    // 得到可选择的个数: 减去右侧、左侧已选择的个数
    const canSelectCount =
      limitMaxCount - value.length - leftSelectedKeys.length;
    // 此时左侧的数据
    const sourceSelectedList = optRef.current.filter(
      (item: RecordType) => ![...value].includes(item[valueKey]),
    );
    // 此时右侧的数据
    const targetSelectedList = optRef.current
      .filter((item: RecordType) => [...value].includes(item[valueKey]))
      .map((item) => ({ ...item, disabled: false }));

    if (canSelectCount > 0 && sourceSelectedList.length >= canSelectCount) {
      sourceSelectedList.forEach((item: RecordType) => {
        item.disabled = false;
      });
    } else {
      // 设置disabled
      sourceSelectedList.forEach((item: RecordType) => {
        // 过滤掉已经选择的
        if (!leftSelectedKeys.includes(item[valueKey])) {
          item.disabled = true;
        } else {
          item.disabled = false;
        }
      });
    }
    // console.log('onSelectChange-sourceSelectedList', sourceSelectedList);
    // console.log('onSelectChange-targetSelectedList', targetSelectedList);
    setOpt([...sourceSelectedList, ...targetSelectedList]);
  };

  return (
    <ConfigProvider locale={zhCN}>
      <Spin spinning={!options?.length && loading} {...(outLoading ?? {})}>
        <Transfer
          pagination={pagination}
          disabled={disabled}
          showSelectAll={!limitMaxCount}
          titles={['数据源', '已选择']}
          rowKey={(record: Record<string, any>) => record[valueKey]}
          dataSource={optRef.current}
          render={(item: Record<string, any>) =>
            item[labelKey] ?? item[valueKey]
          }
          {...transferProps}
          {...restProps}
          listStyle={{
            height: isCustomTransfer ? 'auto' : 410,
            width: isCustomTransfer ? 'auto' : 200,
            ...transferProps?.listStyle,
          }}
          className={classnames(prefixCls, transferProps?.className)}
          onChange={onChange}
          onSelectChange={onSelectChange}
        />
      </Spin>
    </ConfigProvider>
  );
};

export default TransferWrapper;
