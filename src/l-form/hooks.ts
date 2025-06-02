import { Form, type FormInstance } from 'antd';
import { useRef } from 'react';

/**
 * 使用Form.useForm获取表单实例
 * @param outForm - 外部传入的表单实例
 * @returns 表单实例
 */
export function useLFormInstance<T>(outForm?: FormInstance<T>) {
  const [form] = Form.useForm();
  const formRef = useRef(outForm || form);
  return formRef;
}
