import type { ButtonProps, FormInstance } from 'antd';
import { Button, Space } from 'antd';
import type { FC, MouseEvent, ReactElement, ReactNode } from 'react';
import { useCallback, useMemo } from 'react';

export interface LFormSubmitterProps {
  resetText?: ReactNode;
  submitText?: ReactNode;

  resetButtonProps?: ButtonProps & { preventDefault?: boolean };
  submitButtonProps?: ButtonProps & { preventDefault?: boolean };

  onReset?: (event: MouseEvent<HTMLElement>) => void;

  onSubmit?: (event: MouseEvent<HTMLElement>) => void;

  showReset?: boolean;

  form?: FormInstance;

  render?:
    | ((dom: ReactElement[], props: LFormSubmitterProps) => ReactNode[] | ReactNode | false)
    | false;
}

const LFormSubmitter: FC<LFormSubmitterProps> = (props) => {
  const {
    onSubmit = () => {},
    onReset = () => {},
    submitText = '提交',
    resetText = '重置',
    submitButtonProps: outSubmitButtonProps = {},
    resetButtonProps: outResetButtonProps = {},
    showReset = true,
    form,
    render,
  } = props;
  const { preventDefault: submitPreventDefault, ...submitButtonProps } = outSubmitButtonProps;
  const { preventDefault: resetPreventDefault, ...resetButtonProps } = outResetButtonProps;

  const handleReset = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      form?.resetFields();
      // 由于刚重置表单，使用异步可防止立即触发提交操作，导致数据过时而提交失败。
      // refs: https://github.com/ant-design/ant-design/issues/26747
      Promise.resolve().then(() => onReset?.(e));
    },
    [form, onReset],
  );

  const handleSubmit = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      form?.submit();
      onSubmit?.(e);
    },
    [form, onSubmit],
  );

  const dom = useMemo(() => {
    const ret = [
      // 默认设置为重置
      <Button
        key="reset-lightd-form"
        {...resetButtonProps}
        onClick={(e) => {
          if (!resetPreventDefault) handleReset(e);
          resetButtonProps?.onClick?.(e);
        }}
      >
        {resetText}
      </Button>,
      // 默认设置为提交
      <Button
        key="submit-lightd-form"
        type="primary"
        {...submitButtonProps}
        onClick={(e) => {
          if (!submitPreventDefault) handleSubmit(e);
          submitButtonProps?.onClick?.(e);
        }}
      >
        {submitText}
      </Button>,
    ];

    if (!showReset) {
      return ret.slice(0, 1);
    }
    return ret;
  }, [
    handleReset,
    handleSubmit,
    resetButtonProps,
    resetPreventDefault,
    resetText,
    showReset,
    submitButtonProps,
    submitPreventDefault,
    submitText,
  ]);

  const renderDom = render ? render(dom, props) : dom;

  if (!renderDom) {
    return null;
  }

  if (Array.isArray(renderDom)) {
    if (renderDom?.length <= 0) return null;
    if (renderDom?.length === 1) {
      return renderDom[0] as ReactElement;
    }
    return <Space>{renderDom}</Space>;
  }

  return renderDom as ReactElement;
};

export default LFormSubmitter;
