import { useDeepCompareEffect, useRafState, useRequest } from 'ahooks';
import { Transfer } from 'antd';
import type { TransferDirection } from 'antd/es/transfer';
import type { FC } from 'react';
import type { LFormItemTransferProps } from '..';

export type FieldNames = { label: string; value: string };
export interface RecordType {
  value: string | number;
  label: React.ReactNode;
  disabled?: boolean;
  [key: string]: any;
}

type TransferWrapperProps = Pick<
  LFormItemTransferProps,
  'limitMaxCount' | 'transferProps' | 'fieldNames' | 'options'
> &
  Record<string, any>;

const TransferWrapper: FC<TransferWrapperProps> = (props) => {
  const {
    fieldNames = { label: 'label', value: 'value' },
    limitMaxCount = 0,
    transferProps,
    options,
    request = async () => [],
    requestOptions,

    ...restProps
  } = props;
  const value = restProps.targetKeys ?? [];
  const { label: labelKey, value: valueKey } = fieldNames;
  const [opt, setOpt] = useRafState(() => options ?? []);

  const { run, loading } = useRequest(
    async (...args) => {
      return await request?.(...args);
    },
    {
      ...requestOptions,
      manual: true,
    },
  );
  // const list = data ?? [];

  // console.log('list++++++', list);
  /**
   * 判断是否disabled
   * @param sourList 左侧数据的数据源
   * @param targetList 右侧已选择的数据
   * @param canCount 可选择的个数
   * @returns
   */
  const isDisabled = (
    sourList: RecordType[],
    targetList: RecordType[],
    canCount: number,
  ) => {
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
  };

  useDeepCompareEffect(() => {
    if (value?.length && limitMaxCount) {
      // 得到左侧数据
      const sourceSelectedList = opt.filter(
        (item) => !value.includes(item[valueKey]),
      );
      const targetSelectedList = opt
        .filter((item) => value.includes(item[valueKey]))
        .map((item) => ({ ...item, disabled: false }));
      // 得到可选择的个数: 减去右侧
      const canSelectCount = limitMaxCount - value.length;
      isDisabled(sourceSelectedList, targetSelectedList, canSelectCount);
    } else if (limitMaxCount) {
      isDisabled(opt, [], limitMaxCount);
    } else {
      setOpt([...opt]);
    }
  }, [value]);

  useDeepCompareEffect(() => {
    setOpt(options ?? []);
  }, [options]);
  // console.log('TransferWrapper-props', props);

  const onChange = (
    nextTargetKeys: string[],
    direction: TransferDirection,
    moveKeys: string[],
  ) => {
    // console.log('nextTargetKeys', nextTargetKeys);
    // console.log('direction', direction);
    // console.log('moveKeys', moveKeys);
    if (direction === 'left') {
      const newList = opt.map((item) => {
        return {
          ...item,
          disabled: false,
        };
      });
      setOpt([...newList]);
    } else if (limitMaxCount) {
      // 此时左侧的数据
      const sourceSelectedList = opt.filter(
        (item) => !nextTargetKeys.includes(item[valueKey]),
      );
      const targetSelectedList = opt
        .filter((item) => nextTargetKeys.includes(item[valueKey]))
        .map((item) => ({ ...item, disabled: false }));
      // 得到可选择的个数: 减去右侧
      const canSelectCount = limitMaxCount - nextTargetKeys.length;
      isDisabled(sourceSelectedList, targetSelectedList, canSelectCount);
    }

    transferProps?.onChange?.(nextTargetKeys, direction, moveKeys);
    restProps?.onChange?.(nextTargetKeys, direction, moveKeys);
  };

  const onSelectChange = (
    leftSelectedKeys: string[], // 左
    rightSelectedKeys: string[], // 右
  ) => {
    restProps?.onSelectChange?.(leftSelectedKeys, rightSelectedKeys);
    if (rightSelectedKeys?.length || !limitMaxCount) return;

    // 得到可选择的个数: 减去右侧、左侧已选择的个数
    const canSelectCount =
      limitMaxCount - value.length - leftSelectedKeys.length;
    // 此时左侧的数据
    // const sourceSelectedList = options
    //   .filter(
    //     (item: RecordType) =>
    //       ![...value, ...leftSelectedKeys].includes(item[valueKey]),
    //   )
    //   .map((item) => ({ ...item, disabled: canSelectCount <= 0 }));

    // const targetSelectedList = options
    //   .filter((item: RecordType) =>
    //     [...value, ...leftSelectedKeys].includes(item[valueKey]),
    //   )
    //   .map((item) => ({ ...item, disabled: false }));
    const sourceSelectedList = opt.filter(
      (item: RecordType) => ![...value].includes(item[valueKey]),
    );
    // 此时右侧的数据
    const targetSelectedList = opt
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

  // const filterOption = (inputValue: string, option: RecordType) =>
  //   option.description.indexOf(inputValue) > -1;

  return (
    <Transfer
      // style={{
      //   background: 'red',
      // }}
      // operationStyle={{
      //   background: 'blue',
      // }}
      // showSearch
      // selectedKeys={selectedKeys}
      // filterOption={filterOption}
      pagination
      showSelectAll={!limitMaxCount}
      titles={['数据源', '已选择']}
      listStyle={{
        width: 300,
        height: 420,
      }}
      rowKey={(record: Record<string, any>) => record[fieldNames?.value]}
      dataSource={opt}
      render={(item: Record<string, any>) => item[labelKey] ?? item[valueKey]}
      {...transferProps}
      {...restProps}
      onChange={onChange}
      onSelectChange={onSelectChange}
    />
  );
};

export default TransferWrapper;
