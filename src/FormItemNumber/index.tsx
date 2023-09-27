import type { InputNumberProps } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import { emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext } from 'react';
import NumberWrapper from './NumberWrapper';

export interface LFormItemNumberProps extends LFormItemProps {
  /**
   * InputNumber的属性
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LFormItemNumberProps
   *@see https://ant.design/components/input-number-cn/#api
   */
  numberProps?: InputNumberProps;
  /**
   * 保留小数点后几位
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LFormItemNumberProps
   */
  precision?: number;
  /**
   * 最小值
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LFormItemNumberProps
   */
  min?: number;
  /**
   * 最大值
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LFormItemNumberProps
   */
  max?: number;
}

const LFormItemNumber: FC<LFormItemNumberProps> = ({
  disabled,
  size,

  required = false,
  precision,
  min = 0,
  max = 9999,
  placeholder,

  numberProps = emptyObject,

  ...restProps
}) => {
  const messageLabel = usePlaceholder({
    placeholder,
    restProps,
  });

  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem
      required={required}
      placeholder={messageLabel}
      validateTrigger="onBlur"
      {...restProps}
    >
      <NumberWrapper
        size={size}
        disabled={disabled ?? formDisabled}
        placeholder={messageLabel}
        min={min}
        max={max}
        precision={precision}
        {...numberProps}
      />
    </LFormItem>
  );
};

export default LFormItemNumber;
