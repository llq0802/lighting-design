import { useControllableValue, useMemoizedFn } from 'ahooks';
import { Drawer } from 'antd';
import classnames from 'classnames';
import BaseForm from 'lighting-design/Form/base/BaseForm';
import { useLFormInstance } from 'lighting-design/Form/base/hooks';
import { isAntdVersionMoreThan514, isFunction } from 'lighting-design/_utils';
import { BUTTON_ALIGN_MAP, emptyObject } from 'lighting-design/constants';
import type { FC, MouseEvent } from 'react';
import { cloneElement, useEffect, useState } from 'react';
import type { LDrawerFormProps } from './interface';

const prefixCls = 'lightd-form-drawer';

const LDrawerForm: FC<LDrawerFormProps> = (props) => {
  const {
    trigger,
    isResetFields = true,
    isAntdReset = true,
    destroyOnClose = false,
    forceRender = false,
    title = '标题',
    width = 600,
    placement = 'right',
    drawerProps = emptyObject,
    actionBarDir = 'footer',
    children,
    className,
    form: outForm,
    onFinish,
    submitter,
    isFullscreen,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    open: outOpen,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onOpenChange: outOnOpenChange,
    ...restProps
  } = props;
  const formRef = useLFormInstance(outForm);
  const [open, setOpen] = useControllableValue(props, {
    defaultValue: false,
    valuePropName: 'open',
    trigger: 'onOpenChange',
  });
  const handleFinish = useMemoizedFn(async (values: Record<string, any>) => {
    const ret = await onFinish?.(values);
    // 如果表单提交函数返回true 则关闭弹窗
    if (ret === true) setOpen(false);
  });

  const [initVal, setIninVal] = useState(() => restProps.initialValues || {});
  useEffect(() => {
    if (!isAntdReset && open) {
      setIninVal({ ...formRef.current.getFieldsValue(), ...initVal });
    }
  }, [open]);

  const compatibilityStyle = isAntdVersionMoreThan514
    ? {
        styles: {
          ...drawerProps?.styles,
          footer: {
            display: 'flex',
            justifyContent:
              submitter && typeof submitter?.buttonAlign === 'string'
                ? // @ts-ignore
                  BUTTON_ALIGN_MAP[submitter?.buttonAlign] ?? 'center'
                : 'center',
            ...(drawerProps?.footerStyle ?? drawerProps?.styles?.footer),
          },
        },
      }
    : {
        footerStyle: {
          display: 'flex',
          justifyContent:
            submitter && typeof submitter?.buttonAlign === 'string'
              ? // @ts-ignore
                BUTTON_ALIGN_MAP[submitter?.buttonAlign] ?? 'center'
              : 'center',
          ...(drawerProps?.footerStyle ?? drawerProps?.styles?.footer),
        },
      };

  return (
    <>
      <BaseForm
        className={classnames(prefixCls, className)}
        form={formRef.current}
        onFinish={handleFinish}
        submitter={
          submitter === void 0 || submitter
            ? {
                resetText: '取消',
                submitText: '确认',
                ...submitter,
                resetButtonProps: {
                  ...submitter?.resetButtonProps,
                  // 把重置按钮配置成取消按钮
                  preventDefault: true, // 不触发默认的重置表单事件
                  onClick: (e) => {
                    setOpen(false);
                    drawerProps?.onClose?.(e);
                    submitter?.resetButtonProps?.onClick?.(e);
                  },
                },
                submitButtonProps: {
                  type: 'primary',
                  ...submitter?.submitButtonProps,
                },
                render: (submitterDom, submitterProps) => {
                  if (isFunction(submitter?.render)) {
                    return submitter?.render?.(submitterDom, submitterProps);
                  }
                  return submitterDom;
                },
              }
            : submitter
        }
        formRender={(formDom, submitterDom) => (
          <Drawer
            title={title}
            placement={placement}
            width={isFullscreen && ['left', 'right'].includes(placement) ? '100vw' : width}
            height={isFullscreen && ['top', 'bottom'].includes(placement) ? '100vh' : void 0}
            forceRender={forceRender}
            footer={actionBarDir === 'footer' && submitterDom}
            extra={actionBarDir === 'extra' && submitterDom}
            maskClosable={false}
            destroyOnClose={destroyOnClose}
            {...drawerProps}
            className={classnames('lightd-drawer', drawerProps.className)}
            {...compatibilityStyle}
            open={open}
            onClose={(e) => {
              setOpen(false);
              drawerProps?.onClose?.(e);
            }}
            afterOpenChange={(flag) => {
              // 完全关闭后回调
              if (!flag && isResetFields) {
                if (isAntdReset) {
                  formRef.current.resetFields();
                } else {
                  // resetFormInitValues();
                  formRef.current.setFieldsValue({ ...initVal });
                }
              }
              drawerProps?.afterOpenChange?.(flag);
            }}
          >
            {formDom}
          </Drawer>
        )}
        {...restProps}
      >
        {children}
      </BaseForm>

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
