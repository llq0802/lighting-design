import { useMemo, useRef } from 'react';

/**
 * 判断某个值是不是函数类型
 * @export 判断某个值是不是函数类型
 * @param {*} patch 传递的变量
 * @return {boolean} 是不是函数类型
 */
export function isFunction(patch: any): boolean {
  return typeof patch === 'function';
}

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
    if (isFunction(func)) {
      composedProps[key] = (...args: any[]) => {
        func?.(...args);
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
 * @param options
 * @returns
 */
export const usePlaceholder = (options: {
  placeholder?: string | string[];
  isSelectType?: boolean;
  restProps: Record<string, any>;
}): any => {
  const { placeholder, restProps, isSelectType = false } = options;

  if (placeholder) return placeholder;

  return `${isSelectType ? '请选择' : '请输入'}${getFormItemLabel(restProps)}`;
};

const randomStr = Math.random().toString(16).substring(2);
let _id = 1;
/**
 * 生产唯一id
 * @param prefix
 * @returns
 */
export function uniqueId(prefix = 'lightd') {
  ++_id;
  return `${prefix}-${randomStr}-${_id}`;
}

/**
 * 是否时第一次渲染组件
 * @returns
 */
export const useIsFirstRender = (): boolean => {
  const isFirst = useRef<boolean>(true);
  const { current } = isFirst;
  // 如果是第一次，改变状态并返回true
  if (current) {
    isFirst.current = false;
    return true;
  }
  return current;
};

/**
 * 获取依赖项的值
 * @param dependencies
 * @param restProps
 * @returns
 */
export const useDependValues = (
  dependencies: string[],
  restProps: Record<string, any>,
) => {
  return useMemo(() => {
    if (!dependencies?.length) {
      return [];
    }
    return dependencies?.map((nameStr) => restProps[nameStr]) ?? [];
  }, [dependencies, restProps]);
};

/**
 * 判断依赖项的值是否有空或undefined null或者空数组
 * @param dependValues
 * @returns
 */
export const useIsClearDependValues = (dependValues: any[]) => {
  return useMemo(() => {
    if (!dependValues?.length) return false;

    if (dependValues?.length === 1) {
      return dependValues?.some(
        (nameValue) =>
          nameValue === void 0 ||
          nameValue === null ||
          nameValue === '' ||
          !nameValue?.length,
      );
    }
    return dependValues?.every(
      (nameValue) =>
        nameValue === void 0 ||
        nameValue === null ||
        nameValue === '' ||
        !nameValue?.length,
    );
  }, [dependValues]);
};

/**
 * 判断是否是真数组(只有0的数组算数组)
 * @param {String} value
 * @returns
 */
export const isTrueArray = (value: any) => {
  if (Array.isArray(value)) {
    if (!value?.length) {
      return false;
    }
    return value.filter((item: any) => item || item === 0)?.length;
  }
  return true;
};

/**
 * 深克隆
 * @param obj
 * @returns
 */
export const _cloneDeep = (obj: any) => {
  if (obj === null) return null;
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    (key) =>
      (clone[key] =
        typeof obj[key] === 'object' ? _cloneDeep(obj[key]) : obj[key]),
  );
  if (Array.isArray(obj)) {
    clone.length = obj.length;
    return Array.from(clone);
  }
  return clone;
};
