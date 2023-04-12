import { useMemo } from 'react';

/**
 * 合并组件 props
 * @template T
 * @param {T} originProps
 * @param {Partial<T>} patchProps
 * @param {boolean} [isAll]
 * @return {*}
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
        func(...args);
        return originProps[key]?.(...args);
      };
    }
  });
  return composedProps;
}

/**
 * 获取Form组价的label名称
 * @export
 * @param {Record<string, any>} props
 * @return {*}  {string}
 */
export function getFormItemLabel(props: Record<string, any>): string {
  const { label, messageVariables = {} } = props;
  if (messageVariables?.label) {
    return messageVariables.label;
  }
  const ret = typeof label === 'string' ? label : '';
  return ret;
}

export const usePlaceholder = (options: {
  placeholder?: string | string[];
  isSelectType?: boolean;
  restProps: Record<string, any>;
}): any => {
  const { placeholder, restProps, isSelectType = false } = options;

  if (placeholder) return placeholder;

  const res = useMemo(
    () => `${isSelectType ? '请选择' : '请输入'}${getFormItemLabel(restProps)}`,
    [restProps, isSelectType],
  );
  return res;
};

// 生产唯一id
const randomStr = Math.random().toString(16).substring(2);
let _id = 1;
export function uniqueId(prefix = 'lightd') {
  ++_id;
  return `${prefix}-${randomStr}-${_id}`;
}
