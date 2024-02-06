import { useControllableValue, useMemoizedFn } from 'ahooks';
import type { ModalProps } from 'antd';
import { Form, Modal } from 'antd';
import classnames from 'classnames';
import { BUTTON_ALIGN_MAP, useFormInitValues } from 'lighting-design/_utils';
import { emptyObject } from 'lighting-design/constants';
import type { BaseFormProps } from 'lighting-design/Form/base/BaseForm';
import BaseForm from 'lighting-design/Form/base/BaseForm';
import type { FC, MouseEvent, ReactElement, ReactNode } from 'react';
import { cloneElement, useRef, useState } from 'react';
import type { DraggableData, DraggableEvent } from 'react-draggable';
import Draggable from 'react-draggable';

export interface LModalFormProps
  extends Omit<BaseFormProps, 'title' | 'onFinish'>,
    Pick<ModalProps, 'open'> {
  /**
   *  弹窗标题
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LModalFormProps
   */
  title?: ReactNode;
  /**
   * 预渲染Modal内容
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LModalFormProps
   */
  forceRender?: boolean;
  /**
   * 是否在关闭弹窗时重置表单到初始值
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LModalFormProps
   */
  isResetFields?: boolean;
  /**
   * 是否允许拖动
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LModalFormProps
   */
  isDraggable?: boolean;
  /**
   * Moadl的宽
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LModalFormProps
   */
  width?: ModalProps['width'];
  /**
   * 打开弹窗的按钮
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LModalFormProps
   */
  trigger?: ReactElement;
  /**
   * Moadl的其他配置属性 某些属性已被重写
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LModalFormProps
   *@see https://ant.design/components/modal-cn#api
   */
  modalProps?: Omit<ModalProps, 'open' | 'onOk'>;
  /**
   * 弹窗打开关闭的回调
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LModalFormProps
   */
  onOpenChange?: (open: boolean) => void;
  /**
   *  表单提交 只有返回true时才关闭弹窗
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LModalFormProps
   */
  onFinish?: (values: Record<string, any>) => void | undefined | true | Promise<any>;
}
const prefixCls = 'lightd-form-modal';

const LModalForm: FC<LModalFormProps> = (props: LModalFormProps) => {
  const {
    isResetFields = true,
    isDraggable = false,
    trigger,
    title = '标题',
    width = 600,
    forceRender = false,
    modalProps = emptyObject,
    children,
    className,
    form: outForm,
    onFinish,
    loading,
    submitter,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    open: outOpen,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onOpenChange: outOnOpenChange,
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
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const draggleRef = useRef<HTMLDivElement>(null);

  const onStart = useMemoizedFn((_event: DraggableEvent, uiData: DraggableData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) return;
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  });
  const onStop = useMemoizedFn((_event: DraggableEvent, uiData: DraggableData) => {
    setPosition({ x: uiData.x, y: uiData.y });
  });

  const handleFinish = useMemoizedFn(async (values: Record<string, any>) => {
    const ret = await onFinish?.(values);
    // 如果表单提交函数返回true 则关闭弹窗
    if (ret === true) {
      setOpen(false);
    }
  });

  const resetFormInitValues = useFormInitValues(formRef.current, restProps.initialValues);

  return (
    <>
      <BaseForm
        className={classnames(prefixCls, className)}
        loading={modalProps?.confirmLoading ?? loading}
        form={formRef.current}
        onFinish={handleFinish}
        submitter={
          submitter === void 0 || submitter
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
                  return (
                    <div
                      style={{
                        display: 'flex',
                        justifyContent:
                          typeof submitter?.buttonAlign === 'string'
                            ? BUTTON_ALIGN_MAP[submitter?.buttonAlign]
                            : 'flex-end',
                      }}
                    >
                      {submitter?.render
                        ? submitter?.render(submitterDom, submitterProps)
                        : submitterDom}
                    </div>
                  );
                },
              }
            : false // 这是 false
        }
        formRender={(formDom, submitterDom) => {
          return !isDraggable ? (
            <Modal
              title={title}
              width={width}
              footer={submitterDom}
              maskClosable={false}
              forceRender={forceRender}
              {...modalProps}
              className={classnames('lightd-modal', modalProps.className)}
              wrapClassName={classnames('lightd-modal-wrap', modalProps.wrapClassName)}
              open={open}
              onCancel={(e) => {
                setOpen(false);
                modalProps?.onCancel?.(e);
              }}
              afterClose={() => {
                if (isResetFields) {
                  if (submitter && submitter.isAntdReset) {
                    formRef.current.resetFields(); // 弹窗关闭后重置表单
                  } else {
                    resetFormInitValues();
                  }
                }
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
              forceRender={forceRender}
              {...modalProps}
              className={classnames('lightd-modal', modalProps.className)}
              wrapClassName={classnames('lightd-modal-wrap', modalProps.wrapClassName)}
              open={open}
              onCancel={(e) => {
                setOpen(false);
                modalProps?.onCancel?.(e);
              }}
              afterClose={() => {
                if (isResetFields) {
                  if (submitter && submitter.isAntdReset) {
                    formRef.current.resetFields(); // 弹窗关闭后重置表单
                  } else {
                    resetFormInitValues();
                  }
                }
                modalProps?.afterClose?.();
                setPosition({ x: 0, y: 0 });
              }}
              modalRender={(modalDom) => (
                <Draggable
                  defaultClassName="lightd-draggable"
                  disabled={disabled}
                  bounds={bounds}
                  position={position}
                  handle=".ant-modal-header"
                  onStart={(event, uiData) => onStart(event, uiData)}
                  onStop={(event, uiData) => onStop(event, uiData)}
                >
                  <div ref={draggleRef}>{modalProps?.modalRender?.(modalDom) ?? modalDom}</div>
                </Draggable>
              )}
              title={
                <div
                  className="lightd-modal-draggable-header"
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
          onClick(e: MouseEvent<HTMLElement>) {
            setOpen(true);
            trigger.props?.onClick?.(e);
          },
        })}
    </>
  );
};

export default LModalForm;
