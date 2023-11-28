import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import type { FC } from 'react';
import { useContext } from 'react';
import type { RateWrapperProps } from './base/RateWrapper';
import RateWrapper from './base/RateWrapper';

export interface LFormItemRateProps extends LFormItemProps, Pick<RateWrapperProps, 'rateProps'> {
  /**
   *总共的星数
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.25
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemRateProps
   */
  count?: number;
  /**
   *是否需要半心
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.25
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemRateProps
   */
  allowHalf?: boolean;
}

const LFormItemRate: FC<LFormItemRateProps> = ({
  rateProps,
  required,
  disabled,
  size,
  allowHalf,
  count = 5,
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
        size={size ?? formSize}
        allowHalf={allowHalf}
        count={count}
        disabled={disabled ?? formDisabled}
        rateProps={rateProps}
      />
    </LFormItem>
  );
};

export default LFormItemRate;
