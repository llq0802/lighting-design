import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import type { FC } from 'react';
import { useContext } from 'react';
import RateWrapper from './base/RateWrapper';
import type { LFormItemRateProps } from './interface';

const LFormItemRate: FC<LFormItemRateProps> = ({
  rateProps,
  disabled = false,
  size,
  allowHalf,
  character,
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
          errMsg = restProps?.required
            ? `${restProps?.messageVariables?.label || messageLabel}!`
            : '';
        }
        if (errMsg) {
          return Promise.reject(errMsg);
        }
        return Promise.resolve();
      },
    },
  ];

  return (
    <LFormItem _isSelectType rules={rules} {...restProps}>
      <RateWrapper
        size={size || formSize}
        allowHalf={allowHalf}
        count={count}
        character={character}
        disabled={disabled ?? formDisabled}
        {...rateProps}
      />
    </LFormItem>
  );
};

export default LFormItemRate;
export * from './interface';
