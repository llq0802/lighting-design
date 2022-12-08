import { useControllableValue } from 'ahooks';
import type { DrawerProps } from 'antd';
import { Drawer, Form } from 'antd';
import type { FC, MouseEvent, ReactElement, ReactNode } from 'react';
import { cloneElement, useRef } from 'react';
import type { BaseFormProps } from '../../base/BaseForm';
import BaseForm from '../../base/BaseForm';

export interface LDrawerFormProps<T = any>
  extends Omit<BaseFormProps<T>, 'title' | 'onFinish'>,
    Pick<DrawerProps, 'open'> {
  /**
   * 标题
   */
  title?: ReactNode;
  /**
   * 抽屉的宽度
   */
  width?: DrawerProps['width'];
  /**
   * 抽屉的方向
   */
  placement?: DrawerProps['placement'];
  /**
   * 自定义实体
   */
  trigger?: ReactElement;
  /**
   * 提交按钮加载状态
   */
  loading?: boolean;
  /**
   * 抽屉默认操作栏位置 (只生效默认操作栏)
   */
  actionBarDir?: 'footer' | 'extra' | undefined;
  /**
   * 抽屉`props`,具体详见`antd Drawer`
   */
  drawerProps?: Omit<DrawerProps, 'open'>;
  /**
   * 抽屉开关回调
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * 确定回调
   */
  onFinish: (values: Record<string, any>) => void | undefined | true | Promise<any>;
}

const LDrawerForm: FC<LDrawerFormProps> = (props: LDrawerFormProps) => {
  const {
    trigger,
    title = '标题',
    width = 600,
    placement = 'right',
    drawerProps = {},
    open: outOpen,
    actionBarDir = 'footer',
    onOpenChange: outOnOpenChange,
    children,

    form: outForm,
    onFinish,
    loading,
    submitter,
    ...restProps
  } = props;

  const [open, setOpen] = useControllableValue(props, {
    defaultValue: false,
    valuePropName: 'open',
    trigger: 'onOpenChange',
  });

  const [form] = Form.useForm();
  const formRef = useRef(outForm || form);

  const handleFinish = async (values: Record<string, any>) => {
    const ret = await onFinish?.(values);
    // 如果表单提交函数返回true 则关闭弹窗
    if (ret === true) setOpen(false);
  };

  return (
    <>
      <BaseForm<any>
        {...restProps}
        loading={loading}
        form={formRef.current}
        onFinish={handleFinish}
        submitter={
          typeof submitter == 'undefined' || submitter
            ? {
                resetText: '取消',
                submitText: '确认',
                submitButtonProps: {
                  type: 'primary',
                  ...submitter?.submitButtonProps,
                },
                ...submitter,
                resetButtonProps: {
                  // 把重置按钮配置成取消按钮
                  preventDefault: true, // 不触发默认的重置表单事件
                  ...submitter?.resetButtonProps,
                  onClick: (e) => {
                    setOpen(false);
                    drawerProps?.onClose?.(e);
                    submitter?.resetButtonProps?.onClick?.(e);
                  },
                },
                render: (submitterDom, submitterProps) => {
                  if (typeof submitter?.render === 'function') {
                    return submitter.render(submitterDom, submitterProps);
                  }
                  return submitterDom;
                },
              }
            : submitter
        }
        formRender={(formDom, submitterDom) => (
          <Drawer
            title={title}
            width={width}
            placement={placement}
            footer={actionBarDir === 'footer' && submitterDom}
            extra={actionBarDir === 'extra' && submitterDom}
            maskClosable={false}
            {...drawerProps}
            footerStyle={{
              display: 'flex',
              justifyContent: (submitter && submitter?.buttonAlign) || 'center',
              ...drawerProps.footerStyle,
            }}
            open={open}
            onClose={(e) => {
              setOpen(false);
              drawerProps?.onClose?.(e);
            }}
            afterOpenChange={(flag) => {
              // 完全关闭后回调
              if (!flag) {
                formRef.current.resetFields(); // 弹窗关闭后重置表单
                drawerProps?.afterOpenChange?.(flag);
              }
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
