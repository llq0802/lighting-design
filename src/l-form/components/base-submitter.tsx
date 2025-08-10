import { Button, Flex, Form, type ButtonProps, type FormInstance } from 'antd';
import { emptyObject } from 'lighting-design/constants';
import { type LFormItemProps } from 'lighting-design/l-form-item';
import type { ReactNode } from 'react';
import { useLFormContext } from '../context';

export type LFormSubmitterProps<T extends any = any> = {
  className?: string;
  style?: React.CSSProperties;
  /** 重置按钮名称*/
  resetText?: ReactNode;
  /** 提交按钮名称*/
  submitText?: ReactNode;
  /** 重置按钮的Props 如果配置preventDefault为`true`则不会触发表单重置事件 */
  resetButtonProps?: ButtonProps & { preventDefault?: boolean };
  /** 提交按钮的Props 如果配置preventDefault为`true`则不会触发表单提交事件 */
  submitButtonProps?: ButtonProps & { preventDefault?: boolean };
  /** 点击重置按钮并且表单重置完成后回调 */
  onReset?: (event: React.MouseEvent<HTMLElement>) => void;
  /** 提交回调 */
  onSubmit?: (values: T, event: React.MouseEvent<HTMLElement>) => void;
  /** 表单是否准备完成 */
  isReady?: boolean;
  /**
   * 是否 `disabled` 重置按钮
   *
   * 是否 `loading` 提交按钮
   */
  loading?: boolean;
  disabled?: boolean;
  /**
   * 是否按`Enter`键能提交表单
   * - 如果设置 `submitter.renderSubmitter` 且不使用内部 `dom (提交按钮)` 则无效
   */
  isEnterSubmit?: boolean;
  /** 是否展示重置按钮 */
  showReset?: boolean;
  /** 重新渲染函数 */
  renderSubmitter?: (
    doms: {
      submitDom: ReactNode;
      resetDom: ReactNode;
    },
    props: LFormSubmitterProps,
  ) => ReactNode[] | ReactNode;
  /**
   * 按钮的排列方式
   */
  position?: 'flex-start' | 'flex-end' | 'center' | number | string;
  formInstance?: FormInstance;
  gap?: number | string;
  marginBottom?: number | string;
} & Pick<LFormItemProps, 'formItemBottom'>;

const LFormSubmitter = <T,>(props: LFormSubmitterProps<T>) => {
  const {
    isReady = true,
    className,
    style,
    loading,
    disabled,
    isEnterSubmit,
    onSubmit,
    onReset,
    submitText = '提交',
    showReset = true,
    resetText = '重置',
    submitButtonProps: outSubmitButtonProps = emptyObject,
    resetButtonProps: outResetButtonProps = emptyObject,
    renderSubmitter,
    marginBottom: outMarginBottom,
    position: outPosition,
    gap = 8,
    //
    formInstance,
  } = props;

  const form = formInstance || Form.useFormInstance();
  const { labelWidth, formItemBottom: innerFormItemBottom } = useLFormContext();
  const position = outPosition ?? labelWidth ?? 'center';
  const marginBottom = outMarginBottom ?? innerFormItemBottom;
  const { preventDefault: submitPreventDefault = false, ...submitButtonProps } = outSubmitButtonProps;
  const { preventDefault: resetPreventDefault = false, ...resetButtonProps } = outResetButtonProps;
  const resetClick = (e) => {
    if (!resetPreventDefault && isReady) {
      form?.resetFields();
      // 由于刚重置表单，使用异步可防止立即触发提交操作，导致数据过时而提交失败。
      // refs: https://github.com/ant-design/ant-design/issues/26747
      Promise.resolve().then(() => onReset?.(e));
    }
    resetButtonProps?.onClick?.(e);
  };
  const submitClick = (e) => {
    if (!submitPreventDefault && isReady) {
      if (submitButtonProps?.htmlType !== 'submit' && !isEnterSubmit) {
        form?.submit?.();
      }
      const valuse = form?.getFieldsValue();
      Promise.resolve().then(() => onSubmit?.(valuse, e));
    }
    submitButtonProps?.onClick?.(e);
  };

  const resetDom = showReset ? (
    <Button key="reset" htmlType="button" disabled={disabled || loading} {...resetButtonProps} onClick={resetClick}>
      {resetText}
    </Button>
  ) : null;

  const submitDom = (
    <Button
      key="submit"
      type="primary"
      loading={loading}
      disabled={disabled}
      htmlType={isEnterSubmit ? 'submit' : 'button'}
      {...submitButtonProps}
      onClick={submitClick}
    >
      {submitText}
    </Button>
  );

  const isPresetposition = position === 'flex-start' || position === 'center' || position === 'flex-end';
  const justifyContent = isPresetposition ? position : void 0;
  const paddingLeft = isPresetposition ? void 0 : position;

  const dom = renderSubmitter ? (
    renderSubmitter({ resetDom, submitDom }, props)
  ) : (
    <Flex
      className={className}
      gap={gap}
      align="center"
      style={{ justifyContent, paddingLeft, marginBottom, ...style }}
    >
      {resetDom}
      {submitDom}
    </Flex>
  );

  return dom;
};

export default LFormSubmitter;
