import { useControllableValue, useMemoizedFn } from 'ahooks';
import { Drawer } from 'antd';
import { emptyObject } from 'lighting-design/constants';
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
    onCancel,
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

  return (
    <>
      <Drawer
        title={title}
        placement={placement}
        width={isFullscreen && ['left', 'right'].includes(placement) ? '100vw' : width}
        height={isFullscreen && ['top', 'bottom'].includes(placement) ? '100vh' : void 0}
        forceRender={forceRender}
        // footer={actionBarDir === 'footer' && submitterDom}
        // extra={actionBarDir === 'extra' && submitterDom}
        maskClosable={false}
        keyboard={false}
        destroyOnHidden={destroyOnHidden}
        open={open}
        onClose={(e) => {
          setOpen(false);
          onCancel?.(e);
          drawerProps?.onClose?.(e);
        }}
        afterOpenChange={(flag) => {
          // 完全关闭后回调
          if (!flag && isResetFields) {
            if (isAntdReset) {
              formRef.current.resetFields();
            } else {
              formRef.current.setFieldsValue({ ...initVal });
            }
          }
          drawerProps?.afterOpenChange?.(flag);
        }}
      >
        {formDom}
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
