import { version } from 'antd';
import { compare } from 'compare-versions';
import { cloneDeep, isPlainObject } from 'lodash-es';

/**
 * 是否为偶数
 */
export const isEvenNumber = (n: number) => n % 2 === 0;
/**
 * 是否 number
 */
export const isNumber = (val: any) => !window.isNaN(parseFloat(val));

/**
 * 快速深克隆函数
 */
export const fastDeepClone = cloneDeep;
/**
 * 判断一个值是不是真值 `( 0 算真值 )`
 */
export const isValueTrue = (v: any) => {
  if (v === 0) return true;
  return !!v;
};

/**
 * 验证值是否为合法值
 * @description`'' NaN false undefined null [] {} {a:''}` 均不合法,  `0 合法`
 * @example isLegalValue(NaN) => false
 */
export const isLegalValue = (value: any) => {
  if (value === 0) return true;
  if (Array.isArray(value)) {
    if (!value?.length) return false;
    return value.every((item: any) => isValueTrue(item));
  }
  if (isPlainObject(value)) {
    return Object.values(value).every((item: any) => isValueTrue(item));
  }
  return !!value;
};

/**
 * 生成唯一 id
 */
export const uniqueId = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 13; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  const timestamp = Date.now();
  return `${result}-${timestamp}`;
};

// 辅助函数：转义正则表达式中的特殊字符
function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
/**
 * 生成密码正则表达式，要求包含大小写字母、数字和特殊字符
 * @param min 最小长度，默认8
 * @param max 最大长度，默认16
 * @returns 正则表达式对象
 */
export const generatePasswordRegex = (min: number = 8, max: number = 16): RegExp => {
  // 特殊字符集，排除空格和可能引起问题的字符
  const specialChars = `!@#$%^&*()_+-=[]{};':",./<>?\\|`;

  return new RegExp(
    `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[${escapeRegExp(specialChars)}])[\\w${escapeRegExp(
      specialChars,
    )}]{${min},${max}}$`,
  );
};

/** 获取`antd`版本是否大于等于`5.14.0`*/
export const isAntdVersionMoreThan514 = compare(version, '5.14.0', '>=');
