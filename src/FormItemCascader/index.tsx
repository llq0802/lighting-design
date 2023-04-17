import type { SpinProps } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import type { FC } from 'react';
import { useContext } from 'react';
import type { CascaderWrapperProps } from './base/CascaderWrapper';
import CascaderWrapper from './base/CascaderWrapper';

export interface LFormItemCascaderProps
  extends LFormItemProps,
    Pick<
      CascaderWrapperProps,
      'options' | 'request' | 'cascaderProps' | 'debounceTime'
    > {
  dependencies?: string[];
  /**
   * @name 自定义loading效果 具体参考(https://ant.design/components/spin-cn/#api)
   */
  spin?: SpinProps;
}

const LFormItemCascader: FC<LFormItemCascaderProps> = ({
  required,
  disabled,
  placeholder,
  options = [],
  request,
  debounceTime,
  spin,
  cascaderProps = {},
  ...restProps
}) => {
  const messageLabel = usePlaceholder({
    placeholder,
    restProps,
    isSelectType: true,
  });

  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem
      required={required}
      placeholder={messageLabel}
      _isSelectType
      {...restProps}
    >
      <CascaderWrapper
        name={restProps.name}
        dependencies={restProps?.dependencies}
        options={options}
        request={request}
        outLoading={spin}
        debounceTime={debounceTime}
        cascaderProps={cascaderProps}
        disabled={disabled ?? formDisabled}
        placeholder={messageLabel}
      />
    </LFormItem>
  );
};

export default LFormItemCascader;
export type { LCascaderOption } from './base/CascaderWrapper';