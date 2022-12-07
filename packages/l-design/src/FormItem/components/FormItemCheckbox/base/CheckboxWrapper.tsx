import { useDeepCompareEffect, useRequest } from 'ahooks';
import type { CheckboxOptionType } from 'antd';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent, CheckboxGroupProps } from 'antd/lib/checkbox';
import type { CheckboxValueType } from 'antd/lib/checkbox/Group';
import type { FC, ReactNode } from 'react';
import { useCallback, useMemo, useRef, useState } from 'react';

export type CheckboxWrapperProps = Record<string, any> &
  Partial<{
    request: (...args: any[]) => Promise<any>;
    debounceTimex: number;
    beforeAll: {
      label: React.ReactNode;
      value: CheckboxValueType;
      style?: React.CSSProperties;
      disabled?: boolean;
      onChange?: (e: CheckboxValueType[]) => void;
    };
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
  disabled,

  ...restProps
}) => {
  const [indeterminate, setIndeterminate] = useState<boolean>(false);
  const [checkAll, setCheckAll] = useState<boolean>(false);

  const [optsRequest, setOpts] = useState<{ label: ReactNode; value: string | number }[]>([]);
  const isFirst = useRef<boolean>(true);
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

  const checkAllChange = useCallback(
    (e: CheckboxChangeEvent) => {
      let checkAllValue: CheckboxValueType[] = [];
      if (e.target.checked) {
        checkAllValue = selectOptions.map((item: CheckboxOptionType) => item.value);
      }
      setIndeterminate(false);
      setCheckAll(e.target.checked);
      onChange(checkAllValue);
      beforeAll?.onChange(checkAllValue);
    },
    [beforeAll, onChange, selectOptions],
  );

  const handleChange = useCallback(
    (checkedValue: CheckboxValueType[]) => {
      if (beforeAll?.value) {
        setIndeterminate(!!checkedValue.length && checkedValue.length < selectOptions.length);
        setCheckAll(checkedValue.length === selectOptions.length);
      }
      if (checkboxProps?.onChange) {
        checkboxProps?.onChange(checkedValue);
      }
      onChange(checkedValue);
    },
    [beforeAll?.value, checkboxProps, onChange, selectOptions.length],
  );
  return (
    <>
      {beforeAll?.value && (
        <Checkbox
          indeterminate={indeterminate}
          style={{
            marginRight: '8px',
            ...beforeAll.style,
          }}
          disabled={disabled ?? (beforeAll.disabled || isClearDepends)}
          onChange={checkAllChange}
          checked={checkAll}
        >
          {beforeAll.label || '全选'}
        </Checkbox>
      )}
      <Checkbox.Group
        options={selectOptions}
        disabled={disabled ?? isClearDepends}
        {...checkboxProps}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default CheckboxWrapper;
