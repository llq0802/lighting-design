import { useControllableValue, useMemoizedFn } from 'ahooks';
import { Modal, Space } from 'antd';
import classnames from 'classnames';
import BaseForm from 'lighting-design/Form/base/BaseForm';
import { useLFormInstance } from 'lighting-design/Form/base/hooks';
import { BUTTON_ALIGN_MAP, emptyObject } from 'lighting-design/constants';
import type { FC, MouseEvent } from 'react';
import { cloneElement, useRef, useState } from 'react';
import type { DraggableData, DraggableEvent } from 'react-draggable';
import Draggable from 'react-draggable';
import { useModalFormInitialValues } from './hooks';
import type { LModalFormProps } from './interface';

const prefixCls = 'lightd-form-modal';

const LModalForm: FC<LModalFormProps> = (props) => {
  const {
    isResetFields = true,
    isAntdReset = true,
    isDraggable = false,
    destroyOnClose = false,
    forceRender = false,
    loading = false,
    centered = false,
    trigger,
    modalTop,
    title = '标题',
    width = 600,
    modalProps = emptyObject,
    children,
    className,
    form: outForm,
    onFinish,
    submitter,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    open: outOpen,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onOpenChange: outOnOpenChange,
    initialValues,
    ...restProps
  } = props;

  const [open, setOpen] = useControllableValue(props, {
    defaultValue: false,
    valuePropName: 'open',
    trigger: 'onOpenChange',
  });
  const formRef = useLFormInstance(outForm);
  const [disabled, setDisabled] = useState(false);
  const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 1000, right: 1000 });
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

  const handleCancel = (e) => {
    setOpen(false);
    modalProps?.onCancel?.(e);
  };

  const initVal = useModalFormInitialValues({
    open,
    isAntdReset,
    form: formRef.current,
    initialValues,
  });

  const modalAfterClose = () => {
    if (isResetFields) {
      if (isAntdReset) {
        formRef.current.resetFields(); // 弹窗关闭后重置表单
      } else {
        formRef.current.setFieldsValue({ ...initVal });
      }
    }
    modalProps?.afterClose?.();
  };

  const publicProps = {
    width,
    centered,
    maskClosable: false,
    forceRender,
    destroyOnClose,
  };

  return (
    <>
      <BaseForm
        className={classnames(prefixCls, className)}
        loading={modalProps?.confirmLoading || modalProps?.okButtonProps?.loading || loading}
        form={formRef.current}
        onFinish={handleFinish}
        submitter={
          submitter === void 0 || !!submitter
            ? {
                resetText: modalProps?.cancelText || '取消',
                submitText: modalProps?.okText || '确认',
                ...submitter,
                resetButtonProps: {
                  ...submitter?.resetButtonProps,
                  // 把重置按钮配置成取消按钮
                  preventDefault: true, // 不触发默认的重置表单事件
                  onClick: (e: any) => {
                    setOpen(false);
                    modalProps?.onCancel?.(e);
                    submitter?.resetButtonProps?.onClick?.(e);
                  },
                },
                submitButtonProps: {
                  type: modalProps?.okType || 'primary',
                  ...submitter?.submitButtonProps,
                },
                render: (dom, submitterProps) => {
                  const newDom = Array.isArray(dom) && dom.length > 1 ? <Space>{dom}</Space> : dom;
                  const justifyContent =
                    typeof submitter?.buttonAlign === 'string'
                      ? // @ts-ignore
                        BUTTON_ALIGN_MAP[submitter?.buttonAlign] ?? 'flex-end'
                      : 'flex-end';
                  return (
                    <div style={{ display: 'flex', justifyContent }}>
                      {submitter?.render ? submitter?.render(dom, submitterProps) : newDom}
                    </div>
                  );
                },
              }
            : false
        }
        formRender={(formDom, submitterDom) => {
          return !isDraggable ? (
            <Modal
              title={title}
              {...publicProps}
              footer={submitterDom}
              {...modalProps}
              style={{ top: modalTop, ...modalProps?.style }}
              open={open}
              onCancel={handleCancel}
              afterClose={modalAfterClose}
            >
              {formDom}
            </Modal>
          ) : (
            <Modal
              {...publicProps}
              footer={submitterDom}
              {...modalProps}
              style={{ top: modalTop, ...modalProps?.style }}
              open={open}
              onCancel={handleCancel}
              afterClose={() => {
                modalAfterClose();
                setPosition({ x: 0, y: 0 });
              }}
              modalRender={(modalDom) => (
                <Draggable
                  defaultClassName={classnames(`${prefixCls}-draggable`)}
                  defaultClassNameDragging={classnames(`${prefixCls}-dragging`)}
                  defaultClassNameDragged={classnames(`${prefixCls}-dragged`)}
                  disabled={disabled}
                  bounds={bounds}
                  position={position}
                  handle={
                    typeof isDraggable === 'boolean'
                      ? '.ant-modal-header'
                      : (isDraggable as any)?.handle
                  }
                  onStart={(event, uiData) => onStart(event, uiData)}
                  onStop={(event, uiData) => onStop(event, uiData)}
                >
                  <div ref={draggleRef}>{modalProps?.modalRender?.(modalDom) ?? modalDom}</div>
                </Draggable>
              )}
              title={
                <div
                  className={classnames(`${prefixCls}-draggable-header`)}
                  style={{ width: '100%', cursor: 'move' }}
                  onMouseOver={() => {
                    if (disabled) setDisabled(false);
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
export * from './interface';
