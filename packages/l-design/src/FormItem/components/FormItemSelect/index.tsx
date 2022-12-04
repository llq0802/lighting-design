import type { SelectProps } from 'antd';
import type { FC } from 'react';
import { useMemo } from 'react';
import { getFormItemLabel, usePlaceholder } from '../../../utils';
import type { LFormItemProps } from '../../base/BaseFromItem';
import LFormItem from '../../base/BaseFromItem';
import type { SelectWrapperProps } from './base/SelectWrapper';
import SelectWrapper from './base/SelectWrapper';

export interface LFormItemSelectProps
  extends LFormItemProps,
    Pick<SelectWrapperProps, 'selectProps' | 'request' | 'all' | 'allValue' | 'allLabel'>,
    Pick<SelectProps, 'options'> {
  dependencies?: string[];
  debounceTime?: number;
}

const LFormItemSelect: FC<LFormItemSelectProps> = ({
  request,
  debounceTime,
  all = false,
  allValue = '',
  allLabel = '全部',
  options = [],
  selectProps = {},

  required,
  disabled,
  placeholder,
  ...restProps
}) => {
  const messageLabel = useMemo(() => getFormItemLabel(restProps), [restProps]);

  const messagePlaceholder = usePlaceholder({
    placeholder,
    restProps,
    isSelectType: true,
  });

  return (
    <LFormItem
      required={required}
      isSelectType
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
        disabled={disabled}
        placeholder={messagePlaceholder}
        dependencies={restProps?.dependencies}
        options={options}
        request={request}
        debounceTime={debounceTime}
        all={all}
        allValue={allValue}
        allLabel={allLabel}
        selectProps={selectProps}
      />
    </LFormItem>
  );
};

export default LFormItemSelect;
