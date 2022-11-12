import type { SelectProps } from 'antd';
import type { FC } from 'react';
import { useMemo } from 'react';
import type { LFormItemProps } from '../FormItem/base/BaseFromItem';
import LFormItem from '../FormItem/base/BaseFromItem';
import { getFormItemLabel } from '../utils';
import type { SelectWrapperProps } from './base/SelectWrapper';
import SelectWrapper from './base/SelectWrapper';

export interface LFormItemSelectProps
  extends LFormItemProps,
    Pick<SelectWrapperProps, 'selectProps' | 'request' | 'all' | 'allValue' | 'allLabel'>,
    Pick<SelectProps, 'options'> {
  dependencies: string[];
}

const LFormItemSelect: FC<LFormItemSelectProps> = ({
  request,
  all = false,
  allValue = '',
  allLabel = '全部',
  options = [],
  selectProps = {},

  required = false,
  ...restProps
}) => {
  const messageLabel = useMemo(() => getFormItemLabel(restProps), [restProps]);
  return (
    <LFormItem
      required={required}
      rules={[
        {
          validator(rule, value) {
            let errMsg = '';
            const hasOptValue = options.find((item) => item?.value === value);
            if (
              (!value && !hasOptValue && !(all && allValue === value)) ||
              ((selectProps?.mode === 'multiple' || selectProps?.mode === 'tags') &&
                value &&
                value.length <= 0)
            ) {
              errMsg = required ? `请选择${messageLabel}!` : '';
            }
            if (errMsg) {
              return Promise.reject(errMsg);
            }
            return Promise.resolve();
          },
        },
      ]}
      {...restProps}
    >
      <SelectWrapper
        dependencies={restProps?.dependencies}
        options={options}
        request={request}
        all={all}
        allValue={allValue}
        allLabel={allLabel}
        selectProps={selectProps}
      />
    </LFormItem>
  );
};

export default LFormItemSelect;
