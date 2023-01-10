import type { DependencyList } from 'react';
import { useMemo } from 'react';

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

/**
 * 判断新旧依赖项是否相同 (比较地址)
 * @export
 * @param {oldDeps,deps} DependencyList
 * @return {*}
 */
export function depsSame(oldDeps: DependencyList, deps: DependencyList): boolean {
  if (oldDeps === deps) return true;
  for (let i = 0; i < oldDeps.length; i++) {
    if (!Object.is(oldDeps[i], deps[i])) return false;
  }
  return true;
}

// 生产唯一id
const randomStr = Math.random().toString(16).substring(2);
let _id = 1;
export function uniqueId(prefix = '') {
  ++_id;
  return `${prefix}${randomStr}${_id}`;
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

export function getTableRowKey(rowKey: Function): Function;
// eslint-disable-next-line @typescript-eslint/unified-signatures
export function getTableRowKey(rowKey: string): Function;
export function getTableRowKey(rowKey: unknown) {
  if (typeof rowKey === 'function') {
    return rowKey;
  }
  return (record: Record<string, any>, index?: number) =>
    typeof rowKey === 'string' ? record[rowKey] : record.key ?? index;
}
