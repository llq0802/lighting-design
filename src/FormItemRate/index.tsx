import type { SpinProps } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import type { FC } from 'react';
import { useContext } from 'react';
import type { RateWrapperProps } from './base/RateWrapper';
import RateWrapper from './base/RateWrapper';

export interface LFormItemRateProps
  extends LFormItemProps,
    Pick<RateWrapperProps, 'rateProps' | 'request'> {
  dependencies?: string[];
  debounceTime?: number;
  count?: number;
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
  count = 5,
  requestOptions = {},
  ...restProps
}) => {
  const { disabled: formDisabled } = useContext(LFormContext);

  const messageLabel = usePlaceholder({
    restProps,
    isSelectType: true,
  });

  const rules = [
    {
      validator(rule, value: number) {
        let errMsg = '';
        if (!value) {
          errMsg = required ? `${messageLabel}!` : '';
        }
        if (errMsg) {
          return Promise.reject(errMsg);
        }
        return Promise.resolve();
      },
    },
  ];

  return (
    <LFormItem required={required} _isSelectType rules={rules} {...restProps}>
      <RateWrapper
        name={restProps.name}
        count={count}
        dependencies={restProps?.dependencies}
        disabled={disabled ?? formDisabled}
        outLoading={spin}
        request={request}
        debounceTime={debounceTime}
        rateProps={rateProps}
        requestOptions={requestOptions}
      />
    </LFormItem>
  );
};

export default LFormItemRate;
