import { Modal } from 'antd';
import type { FormInstance } from 'antd/es/form';
import type { ModalProps } from 'antd/lib/modal';
import React, { useState } from 'react';

const useFormModal = (modalProps: ModalProps, Slot: React.FC<any>) => {
  const [visiable, setVisiable] = useState(false);
  const open = () => {
    setVisiable(true);
  };
  const close = () => {
    setVisiable(false);
  };
  const FormModal = (slotProps: Record<string, any>) => {
    const onCancel = () => {
      close();
    };

    const ref = React.useRef<FormInstance>(null);

    const ok = () => {
      ref.current?.submit();
    };

    return (
      // @ts-ignore
      <Modal
        onCancel={onCancel}
        onOk={ok}
        visible={visiable}
        wrapClassName="form-modal-wrap"
        okText="提交"
        cancelButtonProps={{ shape: 'round' }}
        okButtonProps={{ shape: 'round' }}
        width={600}
        {...modalProps}
      >
        <Slot ref={ref} {...slotProps} />
        {/* @ts-ignore */}
        {/* {React.cloneElement(Slot, {
          ref,
          ...slotProps,
        })} */}
      </Modal>
    );
  };

  return {
    FormModal,
    open,
  };
};
export default useFormModal;
