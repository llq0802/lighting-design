import { useDeepCompareEffect, useRequest } from 'ahooks';
import type { CheckboxOptionType } from 'antd';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent, CheckboxGroupProps } from 'antd/lib/checkbox';
import type { CheckboxValueType } from 'antd/lib/checkbox/Group';
import type { FC, ReactNode } from 'react';
import { useMemo, useRef, useState } from 'react';

export type CheckboxWrapperProps = Record<string, any> &
  Partial<{
    request: (...args: any[]) => Promise<any>;
    debounceTimex: number;
    beforeAll: CheckboxOptionType;
    checkboxProps: CheckboxGroupProps;
    dependencies: string[];
  }>;

const CheckboxWrapper: FC<CheckboxWrapperProps> = ({
  value = [],
  onChange,
  dependencies = [],
  options: outOptions = [],
  request,
  debounceTime,
  beforeAll,
  checkboxProps = {},

  ...restProps
}) => {
  const [indeterminate, setIndeterminate] = useState<boolean>(false);
  const [checkAll, setCheckAll] = useState<boolean>(false);

  const [optsRequest, setOpts] = useState<{ label: ReactNode; value: string | number }[]>([]);
  const isFirst = useRef<boolean>(true); // 组件是否第一次挂载
  const { run } = useRequest(request || (async () => []), {
    manual: true,
    debounceWait: debounceTime,
    onSuccess: (result) => {
      setOpts([...result]);
    },
    onError: () => {
      setOpts([]);
    },
  });

  // 获取依赖项
  const depends = useMemo(
    () => dependencies?.map((nameStr) => restProps[nameStr]),
    [dependencies, restProps],
  );
  // 判断依赖项是否有空或undefined
  const isClearDepends = useMemo(
    () => depends.some((nameValue) => nameValue === '' || nameValue == undefined),
    [depends],
  );

  const opts = useMemo(() => {
    const rawOptions = checkboxProps.options || outOptions;
    return rawOptions;
  }, [outOptions, checkboxProps.options]);

  useDeepCompareEffect(() => {
    if (!request) return;
    // 组件第一次加载时调用request
    if (isFirst.current) {
      isFirst.current = false;
      (async () => {
        try {
          const newOptions = await request(...depends);
          setOpts([...newOptions]);
        } catch (error) {
          setOpts([]);
        }
      })();
    } else {
      // 防抖调用
      run(...depends);
    }
  }, [restProps]);

  // 依赖清除
  useDeepCompareEffect(() => {
    if (isClearDepends && value != undefined) {
      onChange(undefined);
    }
  }, [value, isClearDepends]);

  const selectOptions = useMemo(() => {
    if (optsRequest?.length > 0) {
      return optsRequest;
    } else if (opts.length > 0) {
      return opts;
    } else {
      return [];
    }
  }, [opts, optsRequest]);

  const checkAllChange = (e: CheckboxChangeEvent) => {
    let checkAllValue: CheckboxValueType[] = [];
    if (e.target.checked) {
      checkAllValue = selectOptions.map((item: CheckboxOptionType) => item.value);
    }
    console.log(value);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
    onChange(checkAllValue);
  };

  const checkChange = (checkedValue: CheckboxValueType[]) => {
    if (beforeAll?.value) {
      setIndeterminate(!!checkedValue.length && checkedValue.length < selectOptions.length);
      setCheckAll(checkedValue.length === selectOptions.length);
    }
    onChange(checkedValue);
  };
  return (
    <>
      {beforeAll?.value && (
        <Checkbox
          indeterminate={indeterminate}
          style={beforeAll.style}
          disabled={beforeAll.disabled}
          onChange={checkAllChange}
          checked={checkAll}
        >
          {beforeAll.label || '全选'}
        </Checkbox>
      )}
      <Checkbox.Group
        value={value}
        options={selectOptions}
        onChange={checkChange}
        disabled={isClearDepends}
        {...checkboxProps}
      />
    </>
  );
};

export default CheckboxWrapper;
