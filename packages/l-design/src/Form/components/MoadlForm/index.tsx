import { useControllableValue } from 'ahooks';
import type { ModalProps } from 'antd';
import { Form, Modal } from 'antd';
import type { FC, MouseEvent, ReactElement, ReactNode } from 'react';
import { cloneElement, useRef } from 'react';
import type { BaseFormProps } from '../../base/BaseForm';
import BaseForm from '../../base/BaseForm';

export interface LModalFormProps<T = any>
  extends Omit<BaseFormProps<T>, 'title'>,
    Pick<ModalProps, 'open'> {
  title?: ReactNode;
  width?: ModalProps['width'];
  trigger?: ReactElement;
  modalProps?: Omit<ModalProps, 'open'>;
  onOpenChange?: (open: boolean) => void;
}

const LModalForm: FC<LModalFormProps> = (props: LModalFormProps) => {
  const {
    trigger,

    title = '弹窗',
    width = 600,
    modalProps = {},

    form: outForm,
    onFinish,

    submitter,
    children,

    ...restProps
  } = props;

  const [open, setOpen] = useControllableValue(restProps, {
    defaultValue: false,
    valuePropName: 'open',
    trigger: 'onOpenChange',
  });

  const [form] = Form.useForm();
  const formRef = useRef(outForm || form);

  return (
    <>
      {/* @ts-ignore */}
      <BaseForm<any>
        {...restProps}
        form={formRef.current}
        onFinish={onFinish}
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
                  ...(submitter ? submitter?.resetButtonProps : {}),
                  onClick: (e) => {
                    setOpen(false);
                    modalProps?.onCancel?.(e);
                    submitter?.resetButtonProps?.onClick?.(e);
                  },
                },

                render: (submitterDom, submitterProps) => {
                  if (submitter && typeof submitter?.render === 'function') {
                    return submitter.render(submitterDom, submitterProps);
                  }
                  return submitterDom;
                },
              }
            : submitter
        }
        formRender={(formDom, submitterDom) => (
          <Modal
            title={title}
            width={width}
            footer={submitterDom}
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
