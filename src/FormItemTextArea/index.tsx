import type { TextAreaProps } from 'antd/lib/input';
import { emptyObject } from 'lighting-design/constants';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import type { FC } from 'react';
import { useContext } from 'react';
import TextAreaWrapper from './TextAreaWrapper';

export interface LFormItemTextAreaProps extends LFormItemProps {
  /**
   *  是否禁用空格
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormItemTextAreaProps
   */
  disabledWhiteSpace?: boolean;
  /**
   *  Input.TextArea或者Input的属性
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormItemTextAreaProps
   *@see https://ant.design/components/input-cn#inputtextarea
   */
  textAreaProps?: TextAreaProps;
}

const LFormItemTextArea: FC<LFormItemTextAreaProps> = ({
  disabledWhiteSpace = true,
  required = false,
  disabled,
  size,
  placeholder,
  textAreaProps = emptyObject,
  ...restProps
}) => {
  const messagePlaceholder = usePlaceholder({
    placeholder,
    restProps,
  });
  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem
      required={required}
      placeholder={messagePlaceholder}
      validateTrigger="onBlur"
      {...restProps}
    >
      <TextAreaWrapper
        size={size}
        disabled={disabled ?? formDisabled}
        disabledWhiteSpace={disabledWhiteSpace}
        placeholder={messagePlaceholder}
        {...textAreaProps}
      />
    </LFormItem>
  );
};

export default LFormItemTextArea;
