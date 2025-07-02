import { useControllableValue } from 'ahooks';
import { Drawer } from 'antd';
import LForm from 'lighting-design/l-form';
import { useLFormInstance } from 'lighting-design/l-form/hooks';
import type { FC, MouseEvent } from 'react';
import { cloneElement } from 'react';
import type { LDrawerFormProps } from './interface';

const LDrawerForm: FC<LDrawerFormProps> = (props) => {
  const {
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
    focusTriggerAfterClose: false,
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
      const ret = await onFinish?.(values);
      if (ret === true) setOpen(false);
    },
  };
  const submitterProps =
    innerDrawerProps?.footer || typeof submitter === 'boolean'
      ? false
      : {
          resetText: '取消',
          submitText: '确定',
          formItemBottom: 0,
          position: 'center',
          ...submitter,
          resetButtonProps: {
            preventDefault: true,
            ...submitter?.resetButtonProps,
            onClick: (e: any) => {
              setOpen(false);
              submitter?.resetButtonProps?.onClick?.(e);
            },
          },
        };

  return (
    <>
      <LForm
        {...innerFormProps}
        submitter={submitterProps}
        renderLFrom={(doms) => {
          return (
            <Drawer
              footer={doms.submitterDom}
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
              {doms.formItemsDom}
            </Drawer>
          );
        }}
      >
        {children}
      </LForm>
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
