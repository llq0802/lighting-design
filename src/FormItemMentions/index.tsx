import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import { emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext } from 'react';
import MentionsWrapper from './MentionsWrapper';
import type { LFormItemMentionsProps } from './interface';

const LFormItemMentions: FC<LFormItemMentionsProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  size,
  disabled = false,
  placeholder,

  options: outOptions,
  mentionsProps = emptyObject,
  spin = emptyObject,
  request,
  refreshDeps,
  variant,
  requestOptions = emptyObject,
  actionRef,
  autoRequest = true,
  ...restProps
}) => {
  const messageLabel = usePlaceholder({
    placeholder,
    restProps,
  });
  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem placeholder={messageLabel} {...restProps}>
      <MentionsWrapper
        disabled={disabled || formDisabled}
        dependencies={restProps?.dependencies}
        placeholder={messageLabel}
        actionRef={actionRef}
        spin={spin}
        variant={variant}
        request={request}
        autoRequest={autoRequest}
        requestOptions={requestOptions}
        outOptions={outOptions}
        refreshDeps={refreshDeps}
        {...mentionsProps}
      />
    </LFormItem>
  );
};

export default LFormItemMentions;
export * from './interface';
