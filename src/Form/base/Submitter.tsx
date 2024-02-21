import { useMemoizedFn } from 'ahooks';
import { Button, Space } from 'antd';
import { emptyObject } from 'lighting-design/constants';
import type { FC, ReactElement } from 'react';
import { useMemo } from 'react';
import type { LFormSubmitterProps } from '../interface';

const LFormSubmitter: FC<LFormSubmitterProps> = (props) => {
  const {
    isEnterSubmit = true,
    isReady = true,
    isAntdReset = true,
    showReset = true,
    initFormValues = {},
    onSubmit = () => {},
    onReset = () => {},
    submitText = '提交',
    resetText = '重置',
    submitButtonProps: outSubmitButtonProps = emptyObject,
    resetButtonProps: outResetButtonProps = emptyObject,
    form,
    render,
  } = props;
  const { preventDefault: submitPreventDefault, ...submitButtonProps } = outSubmitButtonProps;
  const { preventDefault: resetPreventDefault, ...resetButtonProps } = outResetButtonProps;

  const resetClick = useMemoizedFn((e) => {
    if (!resetPreventDefault) {
      if (!isAntdReset) {
        form?.setFieldsValue({ ...initFormValues });
      } else {
        // resetFields 会重置整个 Field，因而其子组件也会重新 mount 从而消除自定义组件可能存在的副作用（例如异步数据、状态等等）。
        form?.resetFields();
      }
      // 由于刚重置表单，使用异步可防止立即触发提交操作，导致数据过时而提交失败。
      // refs: https://github.com/ant-design/ant-design/issues/26747
      Promise.resolve().then(() => onReset?.(e));
    }
    resetButtonProps?.onClick?.(e);
  });
  const submitClick = useMemoizedFn((e) => {
    if (!submitPreventDefault) {
      if (isReady && submitButtonProps?.htmlType !== 'submit') {
        form?.submit();
      }
      Promise.resolve().then(() => onSubmit?.(e));
    }
    submitButtonProps?.onClick?.(e);
  });

  const dom = useMemo(() => {
    const ret = [
      // 默认设置为重置
      <Button key="reset-lightd-form" {...resetButtonProps} htmlType="button" onClick={resetClick}>
        {resetText}
      </Button>,
      // 默认设置为提交, antd的表单默认按下enter键都会触发onSubmit/onFinish事件,通过键盘事件以及配置是否阻止默认行为
      <Button key="submit-lightd-form" type="primary" {...submitButtonProps} onClick={submitClick}>
        {submitText}
      </Button>,
    ];

    if (!showReset) {
      return ret.slice(1);
    }
    return ret;
  }, [
    isReady,
    isEnterSubmit,
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
