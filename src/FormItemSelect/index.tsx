import type { SelectProps, SpinProps } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import type { FC } from 'react';
import { useContext } from 'react';
import type { SelectWrapperProps } from './base/SelectWrapper';
import SelectWrapper from './base/SelectWrapper';

export interface LFormItemSelectProps
  extends LFormItemProps,
    Pick<
      SelectWrapperProps,
      'selectProps' | 'request' | 'all' | 'allValue' | 'allLabel'
    >,
    Pick<SelectProps, 'options'> {
  dependencies?: string[];
  debounceTime?: number;
  /**
   * @name 自定义loading效果 具体参考(https://ant.design/components/spin-cn/#api)
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
  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem
      required={required}
      _isSelectType
      rules={[
        {
          validator(rule, value) {
            let errMsg = '';
            const hasOptValue = options.find((item) => item?.value === value);
            if (
              (!value && !hasOptValue && !(all && allValue === value)) ||
              ((selectProps?.mode === 'multiple' ||
                selectProps?.mode === 'tags') &&
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
        name={restProps.name}
        disabled={disabled ?? formDisabled}
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

export type { LSelectOptions } from './base/SelectWrapper';
