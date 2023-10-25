import type { SpinProps } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import { emptyObject } from 'lighting-design/constants';
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
   *总共的星数
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.23
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemRateProps
   */
  count?: number;
  /**
   *自定义 loading 效果
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.23
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemRateProps
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
  size,
  count = 5,
  requestOptions = emptyObject,
  ...restProps
}) => {
  const { disabled: formDisabled, size: formSize } = useContext(LFormContext);

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
        size={size ?? formSize}
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
