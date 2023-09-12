import { useMemoizedFn } from 'ahooks';
import type { ButtonProps, FormInstance } from 'antd';
import { Button, Space } from 'antd';
import type { FormProps } from 'antd/es/form';
import type { FC, MouseEvent, ReactElement, ReactNode } from 'react';
import { useMemo } from 'react';

export interface LFormSubmitterProps {
  /** 表单的初始值 */
  initFormValues?: Record<string, any>;
  /** 重置按钮名称*/
  resetText?: ReactNode;
  /** 提交按钮名称*/
  submitText?: ReactNode;
  /** 重置按钮的Props 如果配置preventDefault为`true`则不会触发表单重置事件 */
  resetButtonProps?: ButtonProps & { preventDefault?: boolean };
  /** 提交按钮的Props 如果配置preventDefault为`true`则不会触发表单提交事件 */
  submitButtonProps?: ButtonProps & { preventDefault?: boolean };
  /** 重置回调 */
  onReset?: (event: MouseEvent<HTMLElement>) => void;
  /** 提交回调 */
  onSubmit?: (event: MouseEvent<HTMLElement>) => void;
  /** 是否展示重置按钮 */
  showReset?: boolean;
  /** form实例 */
  form?: FormInstance;
  /** 同Form的wrapperCol */
  wrapperCol?: FormProps['wrapperCol'];
  /** 重新渲染函数 */
  render?: (
    dom: ReactElement[],
    props: LFormSubmitterProps,
  ) => ReactNode[] | ReactNode | false;
  /** 按钮位置 */
  buttonAlign?: 'left' | 'right' | 'center' | number;
}

const LFormSubmitter: FC<LFormSubmitterProps> = (props) => {
  const {
    initFormValues,
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
  const { preventDefault: submitPreventDefault, ...submitButtonProps } =
    outSubmitButtonProps;
  const { preventDefault: resetPreventDefault, ...resetButtonProps } =
    outResetButtonProps;

  const handleReset = useMemoizedFn((e: MouseEvent<HTMLElement>) => {
    const hasInitFormValues = Object.keys(initFormValues ?? {}).length > 0;
    if (hasInitFormValues) {
      form?.setFieldsValue({ ...initFormValues });
    } else {
      // resetFields 会重置整个 Field，因而其子组件也会重新 mount 从而消除自定义组件可能存在的副作用（例如异步数据、状态等等）。
      // form?.resetFields();
      form?.resetFields();
    }
    // 由于刚重置表单，使用异步可防止立即触发提交操作，导致数据过时而提交失败。
    // refs: https://github.com/ant-design/ant-design/issues/26747
    Promise.resolve().then(() => onReset?.(e));
  });

  const handleSubmit = useMemoizedFn((e: MouseEvent<HTMLElement>) => {
    form?.submit();
    onSubmit?.(e);
  });

  const resetClick = useMemoizedFn((e) => {
    if (!resetPreventDefault) handleReset(e);
    resetButtonProps?.onClick?.(e);
  });
  const submitClick = useMemoizedFn((e) => {
    if (!submitPreventDefault) handleSubmit(e);
    submitButtonProps?.onClick?.(e);
  });

  const dom = useMemo(() => {
    const ret = [
      // 默认设置为重置
      <Button
        key="reset-lightd-form"
        {...resetButtonProps}
        onClick={resetClick}
      >
        {resetText}
      </Button>,
      // 默认设置为提交
      <Button
        key="submit-lightd-form"
        type="primary"
        {...submitButtonProps}
        onClick={submitClick}
      >
        {submitText}
      </Button>,
    ];

    if (!showReset) {
      return ret.slice(1);
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
