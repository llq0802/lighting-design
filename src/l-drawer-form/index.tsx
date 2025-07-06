import { useControllableValue, useUpdateEffect } from 'ahooks';
import { Drawer } from 'antd';
import LForm from 'lighting-design/l-form';
import LFormSubmitter from 'lighting-design/l-form/components/base-submitter';
import { useLFormInstance } from 'lighting-design/l-form/hooks';
import type { FC, MouseEvent } from 'react';
import { cloneElement, useState } from 'react';
import type { LDrawerFormProps } from './interface';

const LDrawerForm: FC<LDrawerFormProps> = (props) => {
  const {
    isReady,
    trigger,
    isResetFields = true,
    destroyOnHidden,
    forceRender,
    title,
    width = 600,
    height,
    placement = 'right',
    children,
    className,
    form: outForm,
    onFinish,
    submitter,
    isFullscreen,
    onCancel,
    drawerProps,

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    open: outOpen,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onOpenChange: outOnOpenChange,
    ...formProps
  } = props;
  const [loading, setLoading] = useState(false);

  useUpdateEffect(() => {
    if (!isReady) return;
    // 准备完成后，重新设置表单的初始值
    // 因而其子组件也会重新 mount 从而消除自定义组件可能存在的副作用（例如异步数据、状态等等）。
    formRef.current?.resetFields?.();
  }, [isReady]);

  const formRef = useLFormInstance(outForm);

  const [open, setOpen] = useControllableValue(props, {
    defaultValue: false,
    valuePropName: 'open',
    trigger: 'onOpenChange',
  });

  const innerDrawerProps = {
    open,
    placement,
    title,
    forceRender,
    destroyOnHidden: true,
    maskClosable: false,
    keyboard: false,
    ...drawerProps,
    styles: {
      ...drawerProps?.styles,
      footer: {
        padding: 16,
        ...drawerProps?.styles?.footer,
      },
    },
    onClose: (e) => {
      setOpen(false);
      onCancel?.(e);
      drawerProps?.onClose?.(e);
    },
  };

  const innerFormProps = {
    form: formRef.current,
    clearOnDestroy: true,
    ...formProps,
    onFinish: async (values: Record<string, any>) => {
      try {
        setLoading(true);
        const ret = await onFinish?.(values);
        if (ret === true) setOpen(false);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    },
  };

  const submitterProps =
    typeof submitter === 'boolean'
      ? false
      : {
          resetText: '取消',
          submitText: '确定',
          formItemBottom: 0,
          position: 'center',
          loading,
          ...submitter,
          resetButtonProps: {
            preventDefault: true,
            ...submitter?.resetButtonProps,
            onClick: (e: any) => {
              setOpen(false);
              submitter?.resetButtonProps?.onClick?.(e);
            },
          },
          formInstance: formRef.current,
        };

  const submitterDom = submitterProps ? <LFormSubmitter {...submitterProps} /> : null;

  return (
    <>
      <Drawer
        footer={submitterDom}
        {...innerDrawerProps}
        width={
          isFullscreen && ['left', 'right'].includes(innerDrawerProps.placement)
            ? '100vw'
            : innerDrawerProps.width || width
        }
        height={
          isFullscreen && ['top', 'bottom'].includes(innerDrawerProps.placement)
            ? '100vh'
            : innerDrawerProps.height || height
        }
        afterOpenChange={(b) => {
          innerDrawerProps?.afterOpenChange?.(b);
          if (b) return;
          if (!innerDrawerProps.destroyOnHidden || !innerFormProps.clearOnDestroy) {
            if (isResetFields) formRef.current?.resetFields?.();
          }
        }}
      >
        <LForm {...innerFormProps} submitter={false}>
          {children}
        </LForm>
      </Drawer>
      {trigger &&
        cloneElement(trigger, {
          ...trigger.props,
          onClick(e: MouseEvent<HTMLElement>) {
            setOpen(true);
            trigger.props?.onClick?.(e);
          },
        })}
    </>
  );
};

export default LDrawerForm;
export * from './interface';
