import { useRafState, useUpdateLayoutEffect } from 'ahooks';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import { Children, useMemo, useRef } from 'react';
import rfdc from 'rfdc';

/**
 * 快速深克隆函数
 */
export const fastDeepClone = rfdc();

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
 * 判断某个值是不是字符串
 * @export 判断某个值是不是字符串
 * @param {*} patch 传递的变量
 * @return {boolean} 是不是字符串
 */
export function isString(patch: any): boolean {
  return typeof patch === 'string';
}

/**
 * 保留 object 中的部分内容
 * @param obj
 * @param keys
 */
export function pick(
  obj: Record<string, unknown> | undefined,
  keys: string[],
): Record<string, unknown> | undefined {
  if (!obj) return void 0;
  const r: Record<string, any> = {};
  keys.forEach((key) => {
    r[key] = obj[key];
  });
  return r;
}

/**
 * 合并两个`props`属性, 并对两个`props`的方法进行合并调用
 * @param {T} originProps 原始props
 * @param {Partial<T>} patchProps 需要合并覆盖的的props
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
let _id = 0;
/**
 * 生产唯一id
 * @param prefix
 * @returns
 */
export function uniqueId(prefix = 'lightd') {
  _id++;
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
export const useDependValues = (dependencies: string[], restProps: Record<string, any>) => {
  return useMemo(() => {
    if (!dependencies?.length) {
      return emptyArray;
    }
    return dependencies?.map((nameStr) => restProps[nameStr]);
  }, [dependencies, restProps]);
};

/**
 * 判断依赖项的值是否有 undefined null 空字符串 空数组
 * @param dependValues
 * @returns
 */
export const useIsClearDependValues = (dependValues: any[]) => {
  return useMemo(() => {
    if (!dependValues?.length) return false;

    if (dependValues?.length === 1) {
      const nameValue = dependValues?.[0];
      return nameValue === void 0 || nameValue === null || nameValue === '' || !nameValue?.length;
    }
    return dependValues?.every(
      (nameValue) =>
        nameValue === void 0 || nameValue === null || nameValue === '' || !nameValue?.length,
    );
  }, dependValues);
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

type GetFormInitValuesOptions = {
  formItems: any[];
  fields: any[] | undefined;
  initialValues: Record<string, any> | undefined;
  submitter: Record<string, any> | false | undefined;
};
/**
 * 获取 LForm 表单的初始值
 * @param {GetFormInitValuesOptions} options 配置项
 * @returns  initialValues 收集到的初始表单值
 */
export const getFormInitValues = ({
  formItems,
  fields,
  initialValues,
  submitter,
}: GetFormInitValuesOptions) => {
  if (submitter === false || submitter?.isAntdReset) {
    if (initialValues) {
      return initialValues;
    }
    return emptyObject;
  }

  let ret: Record<string, any> = {};
  if (fields?.length) {
    fields.forEach((field: any) => {
      if (field && typeof field === 'string') {
        ret[field] = initialValues?.[field] ?? void 0;
      } else if (Array.isArray(field) && field?.length) {
        const field_0 = field[0];
        const field_1 = field[1];
        const val = initialValues?.[field_0]?.[field_1] ?? void 0;
        if (!ret[field_0]) {
          ret[field_0] = {
            [field_1]: val,
          };
        } else {
          ret[field_0][field_1] = val;
        }
      } else if (field === 0) {
        ret[0] = initialValues?.[0] ?? void 0;
      }
    });

    return ret;
  }

  formItems.forEach((item: any) => {
    const itemName = item?.props?.name;
    const child = item?.props?.children;
    const itemInitialValue = item?.props?.initialValue;

    if (itemName && typeof itemName === 'string' && !Object.keys(ret).includes(itemName)) {
      ret[itemName] = itemInitialValue ?? initialValues?.[itemName] ?? void 0;
    } else if (Array.isArray(itemName) && itemName?.length) {
      const field_0 = itemName[0];
      const field_1 = itemName[1];
      const val = (itemInitialValue ?? initialValues)?.[field_0]?.[field_1] ?? void 0;
      if (!ret[field_0]) {
        ret[field_0] = {
          [field_1]: val,
        };
      } else {
        ret[field_0][field_1] = val;
      }
    } else if (itemName === 0) {
      ret[0] = itemInitialValue ?? initialValues?.[0] ?? void 0;
    }

    if (Children.toArray(child)?.length > 0) {
      ret = {
        ...ret,
        ...getFormInitValues({
          formItems: Children.toArray(child),
          fields,
          initialValues,
          submitter,
        }),
      };
    }
  });

  return ret;
};

export const isChrome = navigator.userAgent.indexOf('Chrome') > -1;

/**
 * - 获取表格列的每一项唯一 key 值
 * @param col -当前列
 * @param i 索引
 * @return key数组
 */
export const getTableColumnsKey = (col: Record<string, any>, i: number) =>
  `${col?.dataIndex || ''}-${col.key || ''}-${i}`;

/**
 * rem宽度适配计算
 * @param size
 * @returns
 */
const autoFontSize = (size: number, designWidth = 1920) => {
  const clientWidth =
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (!clientWidth) return size;

  const widthRate = clientWidth / designWidth; // 设计图宽度

  if (!window.isNaN(size)) {
    return +size * widthRate;
  }

  return 14;
};

/**
 * 转化echarts的 option 找到能resize的字段
 * @param option
 * @param changeFields
 * @param designWidth
 * @returns 新的 option
 */
export const transformEchartsOption = (
  option: Record<string, any>,
  changeFields: string[] = [],
  designWidth = 1920,
) => {
  if (!changeFields?.length) {
    return option;
  }
  Object.keys(option).forEach((key) => {
    if (changeFields.includes(key)) {
      if (typeof option[key] === 'number') {
        option[key] = autoFontSize(option[key], designWidth);
      }
      if (typeof option[key] === 'string' && !window.isNaN(option[key])) {
        option[key] = autoFontSize(option[key], designWidth);
      }
    }

    if (typeof option[key] === 'object' && option[key] !== null) {
      if (Array.isArray(option[key])) {
        option[key].forEach((item: Record<string, any>) => {
          transformEchartsOption(item, changeFields, designWidth);
        });
      } else {
        transformEchartsOption(option[key], changeFields, designWidth);
      }
    }
  });
  return option;
};

/**
 * 获取组件的 options 属性
 * @param opt1
 * @param opt2
 * @param data
 * @returns
 */
export const getOptions = (opt1: any[] = [], opt2: any[] = [], data?: any[] | undefined) => {
  if (opt1?.length) {
    return opt1;
  }
  if (opt2?.length) {
    return opt1;
  }
  if (data?.length) {
    return data;
  }
  return emptyArray;
};

/**
 * 设置与监听loading
 * @param {boolean} outLoading 初始值 loading
 * @return
 */
export const useLoading = (
  outLoading: boolean,
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [loading, setLoading] = useRafState(() => outLoading);
  useUpdateLayoutEffect(() => setLoading(outLoading), [outLoading]);
  return [loading, setLoading];
};

// dispose 处理
// format  格式化
// transform 转化
/**
 * 转化单选多选组件传入的value
 * @param param0
 * @returns
 */
export const transformValue = ({ value, multiple, labelInValue }) => {
  if (labelInValue) {
    if (multiple) {
      return value?.map?.((item) => (typeof item === 'object' ? item?.value : item)) ?? emptyArray;
    }
    return typeof value === 'object' ? value?.value : value;
  }
  return multiple ? value || emptyArray : value;
};
/**
 * 转化单选多选组件onChange的value
 * @param param0
 * @returns
 */
export const transformChangeValue = ({ value, multiple, labelInValue, options }) => {
  if (labelInValue) {
    if (multiple) {
      return options.filter((item) => value?.includes?.(item.value));
    }
    return options.find((item) => item.value === value);
  }
  return value;
};

export const BUTTON_ALIGN_MAP = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
} as const;
