import type { FC } from 'react';
import { usePlaceholder } from '../../../utils';
import type { LFormItemProps } from '../../base/BaseFromItem';
import LFormItem from '../../base/BaseFromItem';
import type { CascaderWrapperProps } from './base/CascaderWrapper';
import CascaderWrapper from './base/CascaderWrapper';

export interface LFormItemCascaderProps
  extends LFormItemProps,
    Pick<CascaderWrapperProps, 'options' | 'request' | 'cascaderProps' | 'debounceTime'> {
  dependencies?: string[];
}

const LFormItemCascader: FC<LFormItemCascaderProps> = ({
  required,
  disabled,
  placeholder,
  options = [],
  request,
  debounceTime,
  cascaderProps = {},
  ...restProps
}) => {
  const messageLabel = usePlaceholder({
    placeholder,
    restProps,
    isSelectType: true,
  });
  return (
    <LFormItem required={required} isSelectType {...restProps}>
      <CascaderWrapper
        dependencies={restProps?.dependencies}
        options={options}
        request={request}
        debounceTime={debounceTime}
        cascaderProps={cascaderProps}
        disabled={disabled}
        placeholder={messageLabel}
      />
    </LFormItem>
  );
};

export default LFormItemCascader;