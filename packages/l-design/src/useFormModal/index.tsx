import type { FormProps } from 'antd';
import { Modal } from 'antd';
import type { FormInstance } from 'antd/es/form';
import type { ModalProps } from 'antd/lib/modal';
import type { ForwardRefRenderFunction, MutableRefObject } from 'react';
import { forwardRef, useEffect, useRef, useState } from 'react';
import type { DraggableData, DraggableEvent } from 'react-draggable';
import Draggable from 'react-draggable';

export interface FormSlotProps extends FormProps {
  formValues?: Record<string, any>;
  submit?: (fields: Record<string, any>, form: FormInstance) => any;
  [key: string]: any;
}

export type DraggableModalProps = { isDraggable: boolean } & ModalProps;

const useFormModal = (
  FormSlot: (props: FormSlotProps, ref: MutableRefObject<FormInstance<any>>) => JSX.Element,
  modalProps?: DraggableModalProps,
) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  const ref = useRef<FormInstance>(null);
  const FormSlotCompoent = forwardRef(
    FormSlot as ForwardRefRenderFunction<FormInstance<any>, FormSlotProps>,
  );

  const FormModal = (formSlotProps: FormSlotProps) => {
    const [disabled, setDisabled] = useState(false);
    const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 });
    const draggleRef = useRef<HTMLDivElement>(null);
    const onCancel = () => {
      ref.current?.resetFields();
      onClose();
    };
    const onOk = async () => {
      const fields = await ref.current?.validateFields();
      formSlotProps?.submit?.(fields, ref.current as FormInstance);
    };

    useEffect(() => {
      const { formValues } = formSlotProps;
      if (formValues && Object.keys(formValues).length > 0) {
        ref.current?.setFieldsValue({ ...formValues });
      } else {
        ref.current?.setFieldsValue({});
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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

    return !modalProps?.isDraggable ? (
      <Modal
        title="弹窗"
        okText="确定"
        cancelText="取消"
        wrapClassName="lightd-form-modal-wrap"
        open={open}
        onCancel={onCancel}
        onOk={onOk}
        width={600}
        {...modalProps}
      >
        <FormSlotCompoent ref={ref} {...formSlotProps} />
      </Modal>
    ) : (
      <Modal
        okText="确定"
        cancelText="取消"
        wrapClassName="lightd-form-modal-wrap"
        open={open}
        onCancel={onCancel}
        onOk={onOk}
        width={600}
        {...modalProps}
        modalRender={(modal) => (
          <Draggable
            disabled={disabled}
            bounds={bounds}
            onStart={(event, uiData) => onStart(event, uiData)}
          >
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        )}
        title={
          <div
            className="lightd-form-modal-header"
            style={{ width: '100%', cursor: 'move' }}
            onMouseOver={() => {
              if (disabled) {
                setDisabled(false);
              }
            }}
            onMouseOut={() => setDisabled(true)}
          >
            {modalProps?.title || '弹窗'}
          </div>
        }
      >
        <FormSlotCompoent ref={ref} {...formSlotProps} />
      </Modal>
    );
  };

  return {
    FormModal,
    form: ref.current,
    onOpen,
    onClose,
  };
};
export default useFormModal;
