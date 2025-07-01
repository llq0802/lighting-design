import { useControllableValue } from 'ahooks';
import { Modal } from 'antd';
import LForm from 'lighting-design/l-form';
import { useLFormInstance } from 'lighting-design/l-form/hooks';
import type { MouseEvent } from 'react';
import { cloneElement, useRef, useState } from 'react';
import type { DraggableData, DraggableEvent } from 'react-draggable';
import type { LModalFormProps } from './interface';

const LModalForm: <T = any>(props: LModalFormProps<T>) => JSX.Element = (props: LModalFormProps) => {
  const {
    isResetFields = true,
    destroyOnClose = true,
    isDraggable,
    forceRender,
    centered,
    form: outForm,
    trigger,
    modalTop = '20vh',
    title = '标题',
    width = 600,
    modalProps,
    children,
    onCancel,
    submitter,
    onFinish,
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

  const draggleRef = useRef<HTMLDivElement>(null);
  const [disabled, setDisabled] = useState(false);
  const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 1000, right: 1000 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) return;
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };
  const onStop = (_event: DraggableEvent, uiData: DraggableData) => {
    setPosition({ x: uiData.x, y: uiData.y });
  };

  const innerModalProps = {
    open,
    width,
    title,
    centered,
    destroyOnHidden: true,
    focusTriggerAfterClose: false,
    maskClosable: false,
    keyboard: false,
    footer: null,
    ...modalProps,
    onCancel: (e) => {
      setOpen(false);
      modalProps?.onCancel?.(e);
    },
    style: {
      top: centered ? void 0 : modalTop,
      ...modalProps?.style,
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
    innerModalProps?.footer || typeof submitter === 'boolean'
      ? false
      : {
          resetText: '取消',
          submitText: '确定',
          formItemBottom: 0,
          position: 'flex-end',
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
      <Modal
        {...innerModalProps}
        afterClose={() => {
          if (!innerModalProps.destroyOnHidden || !innerFormProps.clearOnDestroy) {
            if (isResetFields) formRef.current?.resetFields?.();
          }
          innerModalProps?.afterClose?.();
        }}
      >
        <LForm {...innerFormProps} submitter={submitterProps}>
          {children}
        </LForm>
      </Modal>
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
