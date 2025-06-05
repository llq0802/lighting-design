import { useMemoizedFn } from 'ahooks';
import { Button, Form, Space, type ButtonProps } from 'antd';
import { emptyObject } from 'lighting-design/constants';
import LFormItem, { type LFormItemProps } from 'lighting-design/l-form-item';
import type { ReactElement, ReactNode } from 'react';

export type LFormSubmitterProps<T extends any = any> = {
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
  /**
   * 是否按`Enter`键能提交表单
   * - 如果设置 `submitter.renderSubmitter` 且不使用内部 `dom (提交按钮)` 则无效
   */
  isEnterSubmit?: boolean;
  /** 是否展示重置按钮 */
  showReset?: boolean;

  /** 重新渲染函数 */
  renderSubmitter?: (dom: ReactElement[], props: LFormSubmitterProps) => ReactNode[] | ReactNode | false;
  /**
   * 按钮的排列方式
   */
  position?: 'flex-start' | 'flex-end' | 'center' | number | string;
  /**
   * 表单提交按钮和重置按钮外层包裹的 LFormItem 的 Props
   */
  formItemProps?: LFormItemProps;
} & Pick<LFormItemProps, 'formItemBottom'>;

const LFormSubmitter = <T,>(props: LFormSubmitterProps<T>) => {
  const {
    isReady = true,
    loading,
    isEnterSubmit,
    onSubmit,
    onReset,
    submitText = '提交',
    showReset = true,
    resetText = '重置',
    submitButtonProps: outSubmitButtonProps = emptyObject,
    resetButtonProps: outResetButtonProps = emptyObject,
    renderSubmitter,
    formItemBottom,
    formItemProps,
    position,
  } = props;
  const form = Form.useFormInstance();
  const { preventDefault: submitPreventDefault = false, ...submitButtonProps } = outSubmitButtonProps;
  const { preventDefault: resetPreventDefault = false, ...resetButtonProps } = outResetButtonProps;

  const resetClick = useMemoizedFn((e) => {
    if (!resetPreventDefault && isReady) {
      form?.resetFields();
      // 由于刚重置表单，使用异步可防止立即触发提交操作，导致数据过时而提交失败。
      // refs: https://github.com/ant-design/ant-design/issues/26747
      Promise.resolve().then(() => onReset?.(e));
    }
    resetButtonProps?.onClick?.(e);
  });

  const submitClick = useMemoizedFn((e) => {
    if (!submitPreventDefault && isReady) {
      if (submitButtonProps?.htmlType !== 'submit' && !isEnterSubmit) {
        form?.submit?.();
      }
      const valuse = form?.getFieldsValue();
      Promise.resolve().then(() => onSubmit?.(valuse, e));
    }
    submitButtonProps?.onClick?.(e);
  });

  const buttonDomArr = [
    showReset ? (
      <Button key="reset" htmlType="button" disabled={loading} {...resetButtonProps} onClick={resetClick}>
        {resetText}
      </Button>
    ) : null,
    <Button
      key="submit"
      type="primary"
      loading={loading}
      htmlType={isEnterSubmit ? 'submit' : 'button'}
      {...submitButtonProps}
      onClick={submitClick}
    >
      {submitText}
    </Button>,
  ].filter(Boolean) as JSX.Element[];

  const dom = renderSubmitter ? renderSubmitter(buttonDomArr, props) : <Space>{buttonDomArr}</Space>;

  const justifyContent =
    position === 'flex-start' || position === 'center' || position === 'flex-end' ? position : void 0;

  const paddingLeft = position === 'flex-start' || position === 'center' || position === 'flex-end' ? void 0 : position;

  return (
    <LFormItem
      formItemBottom={formItemBottom}
      {...formItemProps}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent,
        paddingLeft,
        ...formItemProps?.style,
      }}
      colon={false}
    >
      {dom}
    </LFormItem>
  );
};

export default LFormSubmitter;
