import { SpinProps } from 'antd';
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
  /**
   * @name 自定义loading效果 具体参考(https://4x.ant.design/components/spin-cn/#API)
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
  return (
    <LFormItem required={required} isSelectType placeholder={messageLabel} {...restProps}>
      <CascaderWrapper
        dependencies={restProps?.dependencies}
        options={options}
        request={request}
        outLoading={spin}
        debounceTime={debounceTime}
        cascaderProps={cascaderProps}
        disabled={disabled}
        placeholder={messageLabel}
      />
    </LFormItem>
  );
};

export default LFormItemCascader;
