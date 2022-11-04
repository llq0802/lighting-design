import { Modal } from 'antd';
import type { FormInstance } from 'antd/es/form';
import type { ModalProps } from 'antd/lib/modal';
import React, { useState } from 'react';

const useFormModal = (modalProps: ModalProps, FormSlot: React.FC<any>) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const FormModal = (formSlotProps: Record<string, any>) => {
    const ref = React.useRef<FormInstance>(null);
    const onCancel = () => {
      onClose();
      ref.current?.resetFields();
    };
    const onOk = () => {
      ref.current?.submit();
    };
    return (
      <Modal
        open={open}
        onCancel={onCancel}
        onOk={onOk}
        wrapClassName="form-modal-wrap"
        okText="提交"
        cancelButtonProps={{ shape: 'round' }}
        okButtonProps={{ shape: 'round' }}
        width={600}
        {...modalProps}
      >
        <FormSlot ref={ref} {...formSlotProps} />
        {/* {React.cloneElement(Slot, {
          ref,
          ...formSlotProps,
        })} */}
      </Modal>
    );
  };

  return {
    FormModal,
    onOpen,
  };
};
export default useFormModal;
