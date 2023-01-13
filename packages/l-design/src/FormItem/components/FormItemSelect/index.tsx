import type { SelectProps, SpinProps } from 'antd';
import type { FC } from 'react';
import { usePlaceholder } from '../../../utils';
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
  /**
   * @name 自定义loading效果 具体参考(https://4x.ant.design/components/spin-cn/#API)
   */
  spin?: SpinProps;
}

const LFormItemSelect: FC<LFormItemSelectProps> = ({
  request,
  debounceTime,
  all = false,
  allValue = '',
  allLabel = '全部',
  options = [],
  selectProps = {},
  spin,

  required,
  disabled,
  placeholder,
  ...restProps
}) => {
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
              errMsg = required ? `${messagePlaceholder}!` : '';
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
        outLoading={spin}
        allValue={allValue}
        allLabel={allLabel}
        selectProps={selectProps}
      />
    </LFormItem>
  );
};

export default LFormItemSelect;
