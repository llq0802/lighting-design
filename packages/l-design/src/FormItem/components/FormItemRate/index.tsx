import type { SpinProps } from 'antd';
import type { FC } from 'react';
import { usePlaceholder } from '../../../utils';
import type { LFormItemProps } from '../../base/BaseFromItem';
import LFormItem from '../../base/BaseFromItem';
import type { RateWrapperProps } from './base/RateWrapper';
import RateWrapper from './base/RateWrapper';

export interface LFormItemRateProps
  extends LFormItemProps,
    Pick<RateWrapperProps, 'rateProps' | 'request'> {
  dependencies?: string[];
  debounceTime?: number;
  /**
   * @name 自定义loading效果 具体参考(https://ant-design.gitee.io/components/spin-cn/#API)
   */
  spin?: SpinProps;
}

const LFormItemRate: FC<LFormItemRateProps> = ({
  request,
  debounceTime,
  rateProps,
  required,
  disabled,
  placeholder,
  spin,

  ...restProps
}) => {
  const messageLabel = usePlaceholder({
    placeholder,
    restProps,
    isSelectType: true,
  });

  return (
    <LFormItem required={required} isSelectType placeholder={messageLabel} {...restProps}>
      <RateWrapper
        dependencies={restProps?.dependencies}
        disabled={disabled}
        outLoading={spin}
        request={request}
        debounceTime={debounceTime}
        rateProps={rateProps}
      />
    </LFormItem>
  );
};

export default LFormItemRate;
