import { useControllableValue } from 'ahooks';
import type { ModalProps } from 'antd';
import { Form, Modal } from 'antd';
import type { FC, MouseEvent, ReactElement, ReactNode } from 'react';
import { cloneElement, useRef, useState } from 'react';
import type { DraggableData, DraggableEvent } from 'react-draggable';
import Draggable from 'react-draggable';
import type { BaseFormProps } from '../../base/BaseForm';
import BaseForm from '../../base/BaseForm';

export interface LModalFormProps<T = any>
  extends Omit<BaseFormProps<T>, 'title' | 'onFinish'>,
    Pick<ModalProps, 'open'> {
  title?: ReactNode;
  /** 是否允许拖动 */
  isDraggable?: boolean;
  /** 底部操作栏位置 */
  actionaType?: 'left' | 'center' | 'right';
  /** Moadl的宽 */
  width?: ModalProps['width'];
  /** 打开弹窗的按钮 */
  trigger?: ReactElement;
  /** Moadl的其他配置属性 */
  modalProps?: Omit<ModalProps, 'open' | 'onOk'>;
  /** 弹窗打开关闭的回调 */
  onOpenChange?: (open: boolean) => void;
  /** 表单提交 返回true时将自动关闭弹窗 */
  onFinish: (values: Record<string, any>) => void | undefined | true | Promise<any>;
}

const LModalForm: FC<LModalFormProps> = (props: LModalFormProps) => {
  const {
    isDraggable = false,
    trigger,
    actionaType = 'right',

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
  const [disabled, setDisabled] = useState(false);
  const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 });
  const draggleRef = useRef<HTMLDivElement>(null);
  const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };

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
                  return (
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: actionaType,
                      }}
                    >
                      {submitterDom}
                    </div>
                  );
                },
              }
            : submitter // 这是 false
        }
        formRender={(formDom, submitterDom) => {
          return !isDraggable ? (
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
          ) : (
            <Modal
              width={width}
              footer={submitterDom}
              maskClosable={false}
              destroyOnClose
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
              modalRender={(modal) => (
                <Draggable
                  disabled={disabled}
                  bounds={bounds}
                  onStart={(event, uiData) => onStart(event, uiData)}
                >
                  <div ref={draggleRef}>{modalProps?.modalRender?.(modal) ?? modal}</div>
                </Draggable>
              )}
              title={
                <div
                  className="lightd-draggable-modal-header"
                  style={{ width: '100%', cursor: 'move' }}
                  onMouseOver={() => {
                    if (disabled) {
                      setDisabled(false);
                    }
                  }}
                  onMouseOut={() => setDisabled(true)}
                >
                  {title || modalProps?.title}
                </div>
              }
            >
              {formDom}
            </Modal>
          );
        }}
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