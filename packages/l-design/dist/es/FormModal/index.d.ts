import type { ModalProps } from 'antd/lib/modal';
import React from 'react';
declare const useFormModal: (modalProps: ModalProps, Slot: React.FC<any>) => {
    FormModal: (slotProps: Record<string, any>) => JSX.Element;
    open: () => void;
};
export default useFormModal;
