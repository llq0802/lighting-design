import type { FC } from 'react';
import type { LFormItemProps } from '../../base/BaseFromItem';
import LFormItem from '../../base/BaseFromItem';
import type { RateWrapperProps } from './base/RateWrapper';
import RateWrapper from './base/RateWrapper';

export interface LFormItemRateProps
  extends LFormItemProps,
    Pick<RateWrapperProps, 'rateProps' | 'request'> {
  dependencies?: string[];
  debounceTime?: number;
}

const LFormItemRate: FC<LFormItemRateProps> = ({
  request,
  debounceTime,
  rateProps,
  required,
  disabled,
  ...restProps
}) => {
  return (
    <LFormItem required={required} isSelectType {...restProps}>
      <RateWrapper
        dependencies={restProps?.dependencies}
        disabled={disabled}
        request={request}
        debounceTime={debounceTime}
        rateProps={rateProps}
      />
    </LFormItem>
  );
};

export default LFormItemRate;
