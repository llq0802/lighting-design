import { Input } from 'antd';
import { emptyObject } from 'lighting-design/constants';
import LFormItem from 'lighting-design/l-form-item';
import { getFormItemPlaceholder } from 'lighting-design/utils';
import type { FC } from 'react';
import type { LFormItemTextareaProps } from './interface';

const LFormItemTextarea: FC<LFormItemTextareaProps> = ({
  disabled,
  size,
  placeholder,
  variant,
  //
  autoSize,
  showCount,
  maxLength,
  rows,
  textAreaProps = emptyObject,
  ...formItemProps
}) => {
  const itemPlaceholder = getFormItemPlaceholder({
    placeholder,
    formItemProps,
  });

  const baseProps = {
    size,
    disabled,
    placeholder: itemPlaceholder,
    variant,
    //
    showCount,
    maxLength,
    autoSize,
    rows,
    autoComplete: 'off',
    ...textAreaProps,
  };

  return (
    <LFormItem {...formItemProps}>
      <Input.TextArea {...baseProps} />
    </LFormItem>
  );
};

export default LFormItemTextarea;
export * from './interface';
