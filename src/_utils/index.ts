import { version } from 'antd';
import { compare } from 'compare-versions';
import { emptyArray } from 'lighting-design/constants';
import { isFunction as isFn, isPlainObject } from 'lodash-es';
import rfdc from 'rfdc';

/**
 * 是否 number
 */
export const isNumber = (val: any) => !window.isNaN(parseFloat(val));

/**
 * 快速深克隆函数
 */
export const fastDeepClone = rfdc();

/**
 * 判断某个值是不是函数类型
 */
export function isFunction(patch: any) {
  return isFn(patch);
}

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
 * 获取LForm组件的label字符串名称
 * @param {Record<string, any>} props
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
 */
export function uniqueId(prefix = 'lightd') {
  _id++;
  return `${prefix}-${randomStr}-${_id}`;
}

/**
 * 验证值是否为合法值
 * @description`'' NaN false undefined null [] {}` 均不合法,  `0 合法`
 * @example isLegalValue(NaN) => false
 */
export const isLegalValue = (value: any) => {
  if (value === 0) return true;
  if (Array.isArray(value)) {
    if (!value?.length) return false;
    return value.filter((item: any) => !!item || item === 0)?.length > 0;
  }
  if (isPlainObject(value)) return Object.keys(value).length > 0;
  return !!value;
};

/**
 * 获取表格列的每一项唯一 key 值
 * @param col -当前列
 * @param i 索引
 * @returns key数组
 */
export const getTableColumnsKey = (col: Record<string, any>, i: number) =>
  `${col?.dataIndex || ''}-${col.key || ''}-${i}`;

/**
 * rem宽度适配计算
 */
const autoFontSize = (size: number, designWidth = 1920) => {
  const clientWidth =
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (!clientWidth) return size;
  const widthRate = clientWidth / designWidth;
  if (!window.isNaN(size)) {
    return +size * widthRate;
  }
  return 14;
};

/**
 * 转化echarts的 option 找到能 resize 的字段
 * @param option echarts option
 * @param changeFields 需要转换的字段
 * @param designWidth 设计宽度
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
 */
export const getOptions = (opt1: any[] = [], opt2: any[] = [], opt3?: any[] | undefined) => {
  if (opt1?.length) return opt1;
  if (opt2?.length) return opt2;
  if (opt3?.length) return opt3;
  return emptyArray;
};

/** 获取`antd`版本是否大于等于`5.14.0`*/
export const isAntdVersionMoreThan514 = compare(version, '5.14.0', '>=');

// type GetFormInitValuesOptions = {
//   formItems: any[];
//   fields: any[] | undefined;
//   initialValues: Record<string, any> | undefined;
//   submitter: Record<string, any> | false | undefined;
// };
// /**
//  * 获取 LForm 表单的初始值
//  * @param {GetFormInitValuesOptions} options 配置项
//  * @returns  initialValues 收集到的初始表单值
//  */
// export const getFormItemInitValues = ({
//   formItems,
//   fields,
//   initialValues,
//   submitter,
// }: GetFormInitValuesOptions) => {
//   // if (initialValues) {
//   //   return initialValues;
//   // }
//   // if (submitter === false || submitter?.isAntdReset) {
//   //   // if (initialValues) {
//   //   //   return initialValues;
//   //   // }
//   //   return emptyObject;
//   // }

//   let ret: Record<string, any> = {};
//   if (fields?.length) {
//     fields.forEach((field: any) => {
//       if (field && typeof field === 'string') {
//         ret[field] = initialValues?.[field] ?? void 0;
//       } else if (Array.isArray(field) && field?.length) {
//         const field_0 = field[0];
//         const field_1 = field[1];
//         const val = initialValues?.[field_0]?.[field_1] ?? void 0;
//         if (!ret[field_0]) {
//           ret[field_0] = {
//             [field_1]: val,
//           };
//         } else {
//           ret[field_0][field_1] = val;
//         }
//       } else if (field === 0) {
//         ret[0] = initialValues?.[0] ?? void 0;
//       }
//     });

//     return ret;
//   }

//   formItems.forEach((item: any) => {
//     const itemName = item?.props?.name;
//     const child = item?.props?.children;
//     const itemInitialValue = item?.props?.initialValue;

//     if (itemName && typeof itemName === 'string' && !Object.keys(ret).includes(itemName)) {
//       ret[itemName] = itemInitialValue ?? initialValues?.[itemName] ?? void 0;
//     } else if (Array.isArray(itemName) && itemName?.length) {
//       const field_0 = itemName[0];
//       const field_1 = itemName[1];
//       const val = (itemInitialValue ?? initialValues)?.[field_0]?.[field_1] ?? void 0;
//       if (!ret[field_0]) {
//         ret[field_0] = {
//           [field_1]: val,
//         };
//       } else {
//         ret[field_0][field_1] = val;
//       }
//     } else if (itemName === 0) {
//       ret[0] = itemInitialValue ?? initialValues?.[0] ?? void 0;
//     }

//     if (Children.toArray(child)?.length > 0) {
//       ret = {
//         ...ret,
//         ...getFormItemInitValues({
//           formItems: Children.toArray(child),
//           fields,
//           initialValues,
//           submitter,
//         }),
//       };
//     }
//   });

//   return ret;
// };
