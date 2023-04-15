import type { SpinProps } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import type { FC } from 'react';
import { useContext } from 'react';
import type { RateWrapperProps } from './base/RateWrapper';
import RateWrapper from './base/RateWrapper';

export interface LFormItemRateProps
  extends LFormItemProps,
    Pick<RateWrapperProps, 'rateProps' | 'request'> {
  dependencies?: string[];
  debounceTime?: number;
  /**
   * @name 自定义loading效果 具体参考(https://ant.design/components/spin-cn/#api)
   */
  spin?: SpinProps;
}

const LFormItemRate: FC<LFormItemRateProps> = ({
  request,
  debounceTime,
  rateProps,
  required,
  disabled,
  spin,

  ...restProps
}) => {
  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem required={required} _isSelectType {...restProps}>
      <RateWrapper
        name={restProps.name}
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
