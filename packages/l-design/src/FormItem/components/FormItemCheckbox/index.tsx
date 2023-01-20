import type { SpinProps } from 'antd';
import type { CheckboxOptionType } from 'antd/lib/checkbox';
import type { FC } from 'react';
import { useContext } from 'react';
import { LFormContext } from '../../../Form/base/BaseForm';
import { usePlaceholder } from '../../../utils';
import type { LFormItemProps } from '../../base/BaseFromItem';
import LFormItem from '../../base/BaseFromItem';
import type { CheckboxWrapperProps } from './base/CheckboxWrapper';
import CheckboxWrapper from './base/CheckboxWrapper';
export interface LFormItemCheckboxProps
  extends LFormItemProps,
    Pick<CheckboxWrapperProps, 'checkboxProps' | 'request' | 'beforeAll' | 'notDependRender'> {
  dependencies?: string[];
  debounceTime?: number;
  options?: CheckboxOptionType[];
  /**
   * @name 自定义loading效果 具体参考(https://4x.ant.design/components/spin-cn/#API)
   */
  spin?: SpinProps;
}

const LFormItemCheckbox: FC<LFormItemCheckboxProps> = ({
  request,
  beforeAll,
  options = [],
  checkboxProps = {},
  debounceTime,
  placeholder,
  disabled,
  required,
  spin,
  notDependRender,
  ...restProps
}) => {
  // const messageLabel = useMemo(() => getFormItemLabel(restProps), [restProps]);

  const messageLabel = usePlaceholder({
    placeholder,
    restProps,
    isSelectType: true,
  });
  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem
      required={required}
      isSelectType
      rules={[
        {
          validator(rule, value) {
            let errMsg = '';
            if (!value || !value?.length) {
              errMsg = required ? `${messageLabel}!` : '';
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

export default LFormItemCheckbox;
