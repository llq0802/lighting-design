import { useControllableValue } from 'ahooks';
import type { ModalProps } from 'antd';
import { Form, Modal } from 'antd';
import type { FC, MouseEvent, ReactElement, ReactNode } from 'react';
import { cloneElement, useRef } from 'react';
import type { BaseFormProps } from '../../base/BaseForm';
import BaseForm from '../../base/BaseForm';

export interface LModalFormProps<T = any>
  extends Omit<BaseFormProps<T>, 'title' | 'onFinish'>,
    Pick<ModalProps, 'open'> {
  title?: ReactNode;
  width?: ModalProps['width'];
  trigger?: ReactElement;
  modalProps?: Omit<ModalProps, 'open' | 'onOk'>;
  onOpenChange?: (open: boolean) => void;
  onFinish: (values: Record<string, any>) => void | undefined | true | Promise<any>;
}

const LModalForm: FC<LModalFormProps> = (props: LModalFormProps) => {
  const {
    trigger,
    title = '标题',
    width = 600,
    modalProps = {},
    open: outOpen,
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
    if (ret === true) {
      setOpen(false);
    }
  };

  return (
    <>
      {/* @ts-ignore */}
      <BaseForm<any>
        {...restProps}
        loading={modalProps?.confirmLoading ?? loading}
        form={formRef.current}
        onFinish={handleFinish}
        submitter={
          typeof submitter == 'undefined' || submitter
            ? {
                resetText: modalProps?.cancelText || '取消',
                submitText: modalProps?.okText || '确认',

                submitButtonProps: {
                  type: (modalProps?.okType as 'primary') || 'primary',
                  ...submitter?.submitButtonProps,
                },
                ...submitter,
                resetButtonProps: {
                  // 把重置按钮配置成取消按钮
                  preventDefault: true, // 不触发默认的重置表单事件
                  ...submitter?.resetButtonProps,
                  onClick: (e) => {
                    setOpen(false);
                    modalProps?.onCancel?.(e);
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
            : submitter // 这是 false
        }
        formRender={(formDom, submitterDom) => (
          <Modal
            title={title}
            width={width}
            footer={submitterDom}
            maskClosable={false}
            {...modalProps}
            open={open}
            onCancel={(e) => {
              setOpen(false);
              modalProps?.onCancel?.(e);
            }}
            afterClose={() => {
              formRef.current.resetFields(); // 弹窗关闭后重置表单
              modalProps?.afterClose?.();
            }}
          >
            {formDom}
          </Modal>
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

export default LModalForm;
