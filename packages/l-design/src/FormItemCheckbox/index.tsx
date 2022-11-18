import type { CheckboxOptionType } from 'antd/lib/checkbox';
import type { FC } from 'react';
import type { LFormItemProps } from '../FormItem/base/BaseFromItem';
import LFormItem from '../FormItem/base/BaseFromItem';
import type { CheckboxWrapperProps } from './base/CheckboxWrapper';
import CheckboxWrapper from './base/CheckboxWrapper';


export interface LFormItemCheckboxProps
  extends LFormItemProps,
    Pick<CheckboxWrapperProps, 'checkboxProps' | 'request' | 'beforeAll'> {
  dependencies?: string[];
  debounceTime?: number;
  options: CheckboxOptionType[];
}

const LFormItemCheckbox: FC<LFormItemCheckboxProps> = ({
  request,
  beforeAll,
  options = [],
  checkboxProps = {},
  debounceTime,

  required,
  ...restProps
}) => {
  return (
    <LFormItem required={required} isSelectType {...restProps}>
      <CheckboxWrapper
        dependencies={restProps?.dependencies}
        options={options}
        request={request}
        debounceTime={debounceTime}
        beforeAll={beforeAll}
        checkboxProps={checkboxProps}
      />
    </LFormItem>
  );
};

export default LFormItemCheckbox;
