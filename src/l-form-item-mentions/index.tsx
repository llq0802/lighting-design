import LFormItem from 'lighting-design/l-form-item';
import type { FC } from 'react';
import BaseMentions from './base-mentions';
import type { LFormItemMentionsProps } from './interface';

const LFormItemMentions: FC<LFormItemMentionsProps> = ({
  size,
  disabled,
  placeholder,
  variant,
  options,
  autoSize,
  mentionsProps,
  fieldNames,
  spin,
  request,
  requestOptions,
  actionRef,
  ...restProps
}) => {
  const baseProps = {
    size,
    disabled,
    placeholder,
    options,
    autoSize,
    //
    fieldNames,
    requestOptions,
    actionRef,
    request,
    spin,
    ...mentionsProps,
  };

  return (
    <LFormItem {...restProps}>
      <BaseMentions {...baseProps} />
    </LFormItem>
  );
};

export default LFormItemMentions;
export * from './interface';
