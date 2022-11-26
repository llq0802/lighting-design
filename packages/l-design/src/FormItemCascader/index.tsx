import type { FC } from 'react';
import type { LFormItemProps } from '../FormItem/base/BaseFromItem';
import LFormItem from '../FormItem/base/BaseFromItem';
import type { CascaderWrapperProps } from './base/CascaderWrapper';
import CascaderWrapper from './base/CascaderWrapper';

export interface LFormItemCascaderProps
  extends LFormItemProps,
    Pick<CascaderWrapperProps, 'options' | 'request' | 'cascaderProps' | 'debounceTime'> {
  dependencies?: string[];
}

const LFormItemCascader: FC<LFormItemCascaderProps> = ({
  required,
  options = [],
  request,
  debounceTime,
  cascaderProps = {},
  ...restProps
}) => {
  return (
    <LFormItem required={required} isSelectType {...restProps}>
      <CascaderWrapper
        dependencies={restProps?.dependencies}
        options={options}
        request={request}
        debounceTime={debounceTime}
        cascaderProps={cascaderProps}
      />
    </LFormItem>
  );
};

export default LFormItemCascader;
