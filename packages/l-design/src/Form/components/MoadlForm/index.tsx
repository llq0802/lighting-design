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
    title,
    width,
    trigger,
    modalProps,
    children,
    submitter,
    onFinish,
    form: outForm,
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
                  preventDefault: true,
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
            width={width || 600}
            centered
            footer={submitterDom}
            {...modalProps}
            open={open}
            onCancel={(e) => {
              setOpen(false);
              modalProps?.onCancel?.(e);
            }}
            afterClose={() => {
              formRef.current.resetFields();
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
