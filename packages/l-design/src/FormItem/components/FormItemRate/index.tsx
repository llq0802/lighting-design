import type { SpinProps } from 'antd';
import type { FC } from 'react';
import { useContext } from 'react';
import { LFormContext } from '../../../Form/base/BaseForm';
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
   * @name 自定义loading效果 具体参考(https://4x.ant.design/components/spin-cn/#API)
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

  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem required={required} isSelectType placeholder={messageLabel} {...restProps}>
      <RateWrapper
        dependencies={restProps?.dependencies}
        disabled={disabled ?? formDisabled}
        outLoading={spin}
        request={request}
        debounceTime={debounceTime}
        rateProps={rateProps}
      />
    </LFormItem>
  );
};

export default LFormItemRate;
