import { useDeepCompareEffect, useLatest, useMemoizedFn, usePagination, useRafState, useUpdateEffect } from 'ahooks';
import { ConfigProvider, Spin, Transfer } from 'antd';
import type { TransferDirection } from 'antd/es/transfer';
import zhCN from 'antd/locale/zh_CN';
import classnames from 'classnames';
import LForm, { useLFormContext } from 'lighting-design/Form';
import { getOptions } from 'lighting-design/utils';
import { useImperativeHandle, type FC } from 'react';
import type { RecordType } from '../interface';

const prefixCls = 'lightd-transfer';

// 是否手动请求
const isManual = (options: RecordType[], autoRequest: boolean) => {
  if (options?.length) {
    return true;
  }
  return !autoRequest;
};

const TransferWrapper: FC<Record<string, any>> = (props) => {
  const {
    name,
    initialValue,
    fieldNames = { label: 'title', value: 'key' },
    limitMaxCount = 0,
    options,
    autoRequest = true,
    refreshDeps,
    request,
    requestOptions,
    actionRef,
    outLoading,
    disabled,
    listStyle: outListStyle,
    isCustomTransfer,
    ...restProps
  } = props;
  const value = restProps.targetKeys ?? [];
  const { label: labelKey, value: valueKey } = fieldNames;
  const [opt, setOpt] = useRafState(() => options);
  const optRef = useLatest(opt); // 得到最新的值 防止闭包

  const requestRes = usePagination(
    async (...args) => {
      if (request) {
        const res = await request?.(...args);
        return { list: res?.data, total: res?.total || res?.data?.length };
      }
      return { list: [], total: 0 };
    },
    { manual: isManual(options, autoRequest), refreshDeps, ...requestOptions },
  );
  const { loading, data, ...rest } = requestRes;

  const from = LForm.useFormInstance();
  const { initialValues } = useLFormContext();
  useUpdateEffect(() => {
    if (refreshDeps && refreshDeps?.length > 0) {
      from.setFieldValue(name, initialValue ?? initialValues?.[name] ?? void 0);
    }
  }, [...(refreshDeps || [])]);

  useImperativeHandle(actionRef, () => {
    return {
      ...rest,
      loading,
      data: optRef.current,
      mutate: setOpt,
    };
  });
  /**
   * 判断是否 disabled
   * @param {RecordType[]} sourList 左侧数据的数据源
   * @param {RecordType[]} targetList 右侧已选择的数据
   * @param {number} canCount 可选择的个数
   * @return {void} 无返回值
   */
  const isDisabled = useMemoizedFn((sourList: RecordType[], targetList: RecordType[], canCount: number): void => {
    if (!sourList) return;
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
  });

  const handleChange = useMemoizedFn((nextTargetKeys: string[], direction: TransferDirection, moveKeys: string[]) => {
    restProps?.onChange?.(nextTargetKeys, direction, moveKeys);
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
        const sourceSelectedList = optRef.current.filter((item) => !nextTargetKeys.includes(item[valueKey]));
        const targetSelectedList = optRef.current
          .filter((item) => nextTargetKeys.includes(item[valueKey]))
          .map((item) => ({ ...item, disabled: false }));
        // 得到可选择的个数: 减去右侧
        const canSelectCount = limitMaxCount - nextTargetKeys.length;
        isDisabled(sourceSelectedList, targetSelectedList, canSelectCount);
      }
    }
  });
  const onSelectChange = useMemoizedFn(
    (
      leftSelectedKeys: string[], // 左
      rightSelectedKeys: string[], // 右
    ) => {
      restProps?.onSelectChange?.(leftSelectedKeys, rightSelectedKeys);
      if (!limitMaxCount || rightSelectedKeys?.length) return;
      // 得到可选择的个数: 减去右侧、左侧已选择的个数
      const canSelectCount = limitMaxCount - value.length - leftSelectedKeys.length;
      // 此时左侧的数据
      const sourceSelectedList = optRef.current.filter((item: RecordType) => ![...value].includes(item[valueKey]));
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
      setOpt([...sourceSelectedList, ...targetSelectedList]);
    },
  );

  useDeepCompareEffect(() => {
    const innerOpts = getOptions(options, data?.list);
    if (innerOpts.length) setOpt(innerOpts);
  }, [options, data?.list]);

  useDeepCompareEffect(() => {
    if (value?.length && limitMaxCount) {
      // 得到左侧数据
      const sourceSelectedList = optRef.current.filter((item) => !value.includes(item[valueKey]));
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

  const dom = (
    <Transfer
      rowKey={(record: Record<string, any>) => record[valueKey] || 'value'}
      render={(item: Record<string, any>) => item[labelKey] ?? item[valueKey]}
      disabled={disabled}
      showSelectAll={!limitMaxCount}
      titles={['数据项', '已选择']}
      dataSource={optRef.current}
      {...restProps}
      listStyle={
        outListStyle || {
          height: isCustomTransfer ? 'auto' : 410,
          width: isCustomTransfer ? 'auto' : 200,
        }
      }
      className={classnames(prefixCls, restProps?.className)}
      onChange={handleChange}
      onSelectChange={onSelectChange}
    />
  );

  return (
    <ConfigProvider locale={zhCN}>
      {options?.length ? (
        dom
      ) : (
        <Spin spinning={loading} {...(outLoading ?? {})}>
          {dom}
        </Spin>
      )}
    </ConfigProvider>
  );
};

export default TransferWrapper;
