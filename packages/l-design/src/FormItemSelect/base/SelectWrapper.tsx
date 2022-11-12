import { usePrevious } from 'ahooks';
import type { SelectProps } from 'antd';
import { Select } from 'antd';
import type { DependencyList, FC, ReactNode } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { depsSame } from '../../utils';

export type SelectWrapperProps = Record<string, any> & {
  request?: (...args: any[]) => Promise<any>;
  all?: boolean;
  allValue?: number | string;
  allLabel?: ReactNode;
  selectProps?: SelectProps;
  dependencies?: string[];
};

const SelectWrapper: FC<SelectWrapperProps> = ({
  value,
  onChange,
  dependencies,
  options: outOptions = [],
  request,
  all = false,
  allValue = '',
  allLabel = '全部',
  selectProps = {},

  ...restProps
}) => {
  const isFirst = useRef(true);
  const [optsRequest, setOpts] = useState<{ label: ReactNode; value: string | number }[]>([]);
  const deps = dependencies?.map((dep) => restProps[dep]) ?? [];
  const prevDeps = usePrevious(deps);
  console.log('798 ');
  useEffect(() => {
    if (request && (isFirst.current || !depsSame(prevDeps as DependencyList, deps))) {
      (async () => {
        isFirst.current = false;
        const newOptions = await request(...deps);
        if (all) {
          setOpts([{ label: allLabel, value: allValue }, ...newOptions]);
        } else {
          setOpts([...newOptions]);
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restProps]);

  const opts = useMemo(() => {
    const rawOptions = selectProps.options || outOptions;
    if (all) {
      rawOptions.unshift({
        label: allLabel,
        value: allValue,
      });
    }
    return rawOptions;
  }, [all, allLabel, allValue, outOptions, selectProps.options]);

  return (
    <Select
      value={value}
      onChange={onChange}
      options={optsRequest?.length > 0 ? optsRequest : opts}
      placeholder="请选择"
      allowClear
      style={{ width: '100%' }}
      {...selectProps}
    />
  );
};

export default SelectWrapper;
