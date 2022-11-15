import type { DrawerProps, FormProps } from 'antd';
import { Button, Drawer, Space } from 'antd';
import type { FormInstance } from 'antd/es/form';
import type { ForwardRefRenderFunction, MutableRefObject } from 'react';
import { forwardRef, useEffect, useRef, useState } from 'react';

export interface DrawerSubmitProps {
  /**
   * 确定loading
   */
  loading: boolean;
  /**
   * 按钮位置
   */
  align: 'left' | 'right' | 'center';
  /**
   * 确定回调
   */
  onSubmit: (fields: Record<string, any>, form: FormInstance) => any;
  /**
   * 取消回调
   */
  onClose: () => void;
}

export interface DrawerModalProps extends DrawerProps {
  submitProps?: Partial<DrawerSubmitProps>;
}

export interface FormDrawerSlotProps extends FormProps {
  formValues?: Record<string, any>;
  [key: string]: any;
}

const useFormModal = (
  FormSlot: (props: FormDrawerSlotProps, ref: MutableRefObject<FormInstance<any>>) => JSX.Element,
  modalProps?: DrawerModalProps,
) => {

  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  const ref = useRef<FormInstance>(null);
  const FormSlotCompoent = forwardRef(
    FormSlot as ForwardRefRenderFunction<FormInstance<any>, FormDrawerSlotProps>,
  );

  const FormDrawer = (formSlotProps: FormDrawerSlotProps) => {
    const {
      onClose: close,
      onSubmit,
      loading,
      align,
    } = modalProps?.submitProps as Partial<DrawerSubmitProps>;

    const onCancel = () => {
      if (!close) {
        ref.current?.resetFields();
        onClose();
        return;
      }
      close();
    };

    const onOk = async () => {
      const fields = await ref.current?.validateFields();
      onSubmit?.(fields, ref.current as FormInstance);
    };

    useEffect(() => {
      const { formValues } = formSlotProps;
      if (formValues && Object.keys(formValues).length > 0) {
        ref.current?.setFieldsValue({ ...formValues });
      } else {
        ref.current?.setFieldsValue({});
      }
    }, []);

    return (
      <Drawer
        title="抽屉"
        placement="right"
        onClose={onCancel}
        open={open}
        footer={
          modalProps?.submitProps !== undefined && (
            <div
              style={{
                display: 'flex',
                justifyContent: align || 'center',
              }}
            >
              <Space size={22}>
                <Button onClick={onCancel}>取消</Button>
                <Button type="primary" loading={loading} onClick={onOk}>
                  确定
                </Button>
              </Space>
            </div>
          )
        }
        {...modalProps}
      >
        <FormSlotCompoent ref={ref} {...formSlotProps} />
      </Drawer>
    );
  };

  return {
    FormDrawer,
    form: ref.current,
    onOpen,
    onClose,
  };
};
export default useFormModal;
