import { useControllableValue, useMemoizedFn } from 'ahooks';
import type { DrawerProps } from 'antd';
import { Drawer, Form } from 'antd';
import classnames from 'classnames';
import { emptyObject } from 'lighting-design/constants';
import type { BaseFormProps } from 'lighting-design/Form/base/BaseForm';
import BaseForm from 'lighting-design/Form/base/BaseForm';
import { isFunction } from 'lighting-design/_utils';
import type { FC, MouseEvent, ReactElement, ReactNode } from 'react';
import { cloneElement, useEffect, useRef, useState } from 'react';

export interface LDrawerFormProps
  extends Omit<BaseFormProps, 'title' | 'onFinish'>,
    Pick<DrawerProps, 'open'> {
  /**
   * 标题
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LDrawerFormProps
   */
  title?: ReactNode;
  /**
   * 抽屉的宽度
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LDrawerFormProps
   */
  width?: DrawerProps['width'];
  /**
   * 抽屉的方向
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LDrawerFormProps
   */
  placement?: DrawerProps['placement'];
  /**
   * 自定义触发抽屉打开的按钮
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LDrawerFormProps
   */
  trigger?: ReactElement;
  /**
   * 提交按钮加载状态
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LDrawerFormProps
   */
  loading?: boolean;
  /**
   * 抽屉默认操作栏位置 (只生效默认操作栏)
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LDrawerFormProps
   */
  actionBarDir?: 'footer' | 'extra' | undefined;
  /**
   * 抽屉`props`,具体详见`antd Drawer`
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LDrawerFormProps
   *@see https://ant.design/components/drawer-cn#api
   */
  drawerProps?: Omit<DrawerProps, 'open'>;
  /**
   *  关闭抽屉时是否重置表单到初始值
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LDrawerFormProps
   */
  isResetFields?: boolean;
  /**
   *  是否预渲染`LDrawerForm`的内容
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LDrawerFormProps
   */
  forceRender?: boolean;
  /**
   * 抽屉开关回调
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LDrawerFormProps
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * 确定回调
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LDrawerFormProps
   */
  onFinish?: (
    values: Record<string, any>,
  ) => void | undefined | true | Promise<any>;
}
const prefixCls = 'lightd-form-drawer';

const LDrawerForm: FC<LDrawerFormProps> = (props: LDrawerFormProps) => {
  const {
    trigger,
    isResetFields = true,
    forceRender = false,
    title = '标题',
    width = 600,
    placement = 'right',
    drawerProps = emptyObject,
    actionBarDir = 'footer',
    children,

    className,
    initialValues: outInitialValues = emptyObject,
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
  const _lformRef = useRef<Record<string, any>>();
  const [myInitialValues, setInitialValues] = useState(outInitialValues ?? {});

  const handleFinish = useMemoizedFn(async (values: Record<string, any>) => {
    const ret = await onFinish?.(values);
    // 如果表单提交函数返回true 则关闭弹窗
    if (ret === true) setOpen(false);
  });

  useEffect(() => {
    if (open) {
      const openInitialValues = formRef.current?.getFieldsValue();
      setInitialValues({ ...openInitialValues });
    }
  }, [open]);

  return (
    <>
      <BaseForm
        _lformRef={_lformRef}
        className={classnames(prefixCls, className)}
        initialValues={myInitialValues}
        loading={loading}
        form={formRef.current}
        onFinish={handleFinish}
        submitter={
          typeof submitter === 'undefined' || submitter
            ? {
                resetText: '取消',
                submitText: '确认',
                submitButtonProps: {
                  type: 'primary',
                  ...submitter?.submitButtonProps,
                },
                ...submitter,
                resetButtonProps: {
                  // 把重置按钮配置成取消按钮
                  preventDefault: true, // 不触发默认的重置表单事件
                  ...submitter?.resetButtonProps,
                  onClick: (e) => {
                    setOpen(false);
                    drawerProps?.onClose?.(e);
                    submitter?.resetButtonProps?.onClick?.(e);
                  },
                },
                render: (submitterDom, submitterProps) => {
                  if (isFunction(submitter?.render)) {
                    return submitter?.render?.(submitterDom, submitterProps);
                  }
                  return submitterDom;
                },
              }
            : submitter
        }
        formRender={(formDom, submitterDom) => (
          <Drawer
            title={title}
            width={width}
            placement={placement}
            forceRender={forceRender}
            footer={actionBarDir === 'footer' && submitterDom}
            extra={actionBarDir === 'extra' && submitterDom}
            maskClosable={false}
            {...drawerProps}
            className={classnames('lightd-drawer', drawerProps.className)}
            footerStyle={{
              display: 'flex',
              justifyContent:
                (submitter &&
                  typeof submitter?.buttonAlign === 'string' &&
                  submitter?.buttonAlign) ||
                'center',
              ...drawerProps.footerStyle,
            }}
            open={open}
            onClose={(e) => {
              setOpen(false);
              drawerProps?.onClose?.(e);
            }}
            afterOpenChange={(flag) => {
              // 完全关闭后回调
              if (!flag) {
                if (isResetFields) {
                  // formRef.current.resetFields(); // 弹窗关闭后重置表单
                  formRef.current.setFieldsValue({
                    ..._lformRef.current,
                  });
                }
                drawerProps?.afterOpenChange?.(flag);
              }
            }}
          >
            {formDom}
          </Drawer>
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

export default LDrawerForm;
