import type { SpinProps } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext } from 'react';
import type { CascaderWrapperProps } from './base/CascaderWrapper';
import CascaderWrapper from './base/CascaderWrapper';

export interface LFormItemCascaderProps
  extends LFormItemProps,
    Pick<CascaderWrapperProps, 'options' | 'request' | 'cascaderProps' | 'debounceTime'> {
  dependencies?: string[];
  /**
   * Spin组件的props 用于自定义loading效果
   * @see 参考(https://ant.design/components/spin-cn/#api)
   */
  spin?: SpinProps;
}

const LFormItemCascader: FC<LFormItemCascaderProps> = ({
  required,
  disabled,
  placeholder,
  options = emptyArray,
  request,
  debounceTime,
  spin,
  size,
  actionRef,

  cascaderProps = emptyObject,
  requestOptions = emptyObject,
  ...restProps
}) => {
  const messageLabel = usePlaceholder({
    placeholder,
    restProps,
    isSelectType: true,
  });

  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem required={required} placeholder={messageLabel} _isSelectType {...restProps}>
      <CascaderWrapper
        name={restProps.name}
        dependencies={restProps?.dependencies}
        options={options}
        request={request}
        size={size}
        outLoading={spin}
        debounceTime={debounceTime}
        cascaderProps={cascaderProps}
        disabled={disabled ?? formDisabled}
        placeholder={messageLabel}
        requestOptions={requestOptions}
        actionRef={actionRef}
      />
    </LFormItem>
  );
};

export default LFormItemCascader;
export type { LCascaderOption } from './base/CascaderWrapper';
