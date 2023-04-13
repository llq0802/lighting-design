import type { SpinProps } from 'antd';
import type { CheckboxOptionType } from 'antd/lib/checkbox';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import type { FC } from 'react';
import { useContext } from 'react';
import type { CheckboxWrapperProps } from './base/CheckboxWrapper';
import CheckboxWrapper from './base/CheckboxWrapper';
export interface LFormItemCheckboxProps
  extends LFormItemProps,
    Pick<
      CheckboxWrapperProps,
      'checkboxProps' | 'request' | 'beforeAll' | 'notDependRender'
    > {
  dependencies?: string[];
  debounceTime?: number;
  options?: CheckboxOptionType[];
  /**
   * @see 自定义loading效果 具体参考(https://ant.design/components/spin-cn/#api)
   */
  spin?: SpinProps;
}

const LFormItemCheckbox: FC<LFormItemCheckboxProps> = ({
  request,
  beforeAll,
  options = [],
  checkboxProps = {},
  debounceTime,
  disabled,
  required,
  spin,
  notDependRender,
  ...restProps
}) => {
  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem required={required} _isSelectType {...restProps}>
      <CheckboxWrapper
        dependencies={restProps?.dependencies}
        notDependRender={notDependRender}
        options={options}
        request={request}
        disabled={disabled ?? formDisabled}
        debounceTime={debounceTime}
        outLoading={spin}
        beforeAll={beforeAll}
        checkboxProps={checkboxProps}
      />
    </LFormItem>
  );
};

export type {
  LCheckboxBeforeAllProps,
  LCheckboxOptions,
} from './base/CheckboxWrapper';

export default LFormItemCheckbox;
