import LFormItem from 'lighting-design/l-form-item';
import { getFormItemPlaceholder } from 'lighting-design/utils';
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
  ...formItemProps
}) => {
  const innerPlaceholder = getFormItemPlaceholder({
    placeholder,
    formItemProps,
  });

  const baseProps = {
    size,
    disabled,
    placeholder: innerPlaceholder,
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
    <LFormItem {...formItemProps}>
      <BaseMentions {...baseProps} />
    </LFormItem>
  );
};

export default LFormItemMentions;
export * from './interface';
