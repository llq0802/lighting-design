import type { LFormItemProps } from 'lighting-design/l-form-item';

/**
 * 合并两个`props`属性, 并对两个`props`的方法进行合并调用
 * @param {Record<string, any>} originProps 原始props
 * @param {Record<string, any>} patchProps  需要合并覆盖的的props
 */
export function composeProps<T extends Record<string, any>>(
  originProps: T,
  patchProps: Partial<T>,
  isAll: boolean = true,
) {
  const composedProps: Record<string, any> = {
    ...originProps,
    ...(isAll ? patchProps : {}),
  };
  Object.keys(patchProps).forEach((key) => {
    const func = patchProps[key];
    if (typeof func === 'function') {
      composedProps[key] = (...args: any[]) => {
        func?.(...args);
        return originProps[key]?.(...args);
      };
    }
  });
  return composedProps;
}

/**
 * 获取LFormItem组件的label字符串名称
 * @param {Record<string, any>} props
 */
export function getFormItemLabel(props: LFormItemProps): string {
  const { label, messageVariables = {} } = props;
  if (typeof label === 'string') {
    return label;
  }
  if (messageVariables?.label) {
    return messageVariables.label;
  }
  return '';
}

/**
 * 获取表单项的 placeholder
 */
export const getFormItemPlaceholder = (options: {
  placeholder?: string;
  formItemProps: LFormItemProps;
  isSelectType?: boolean;
}) => {
  const { placeholder, formItemProps, isSelectType = false } = options;
  if (placeholder) return placeholder;
  return `${isSelectType ? '请选择' : '请输入'}${getFormItemLabel(formItemProps)}`;
};
