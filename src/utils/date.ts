import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localeData from 'dayjs/plugin/localeData';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import relativeTime from 'dayjs/plugin/relativeTime';
import weekday from 'dayjs/plugin/weekday';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import { TIME_LIST } from 'lighting-design/constants';
dayjs.extend(relativeTime);
dayjs.extend(quarterOfYear);
dayjs.extend(advancedFormat);
dayjs.extend(weekOfYear);
dayjs.extend(customParseFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
// DatePicker picker值
export type Picker = 'date' | 'week' | 'month' | 'quarter' | 'year';
export type DateValueType = 'string' | 'number' | 'dayjs';

// dayjs 与antd-Date枚举
export enum DayjsEnum {
  time = 'hours',
  date = 'days',
  week = 'weeks',
  month = 'months',
  quarter = 'months',
  year = 'years',
}

// 日期格式
const InternalQuarterFormat = 'YYYY-qQ';
export enum DateFormat {
  time = ' HH:mm:ss',
  year = 'YYYY',
  month = 'YYYY-MM',
  date = 'YYYY-MM-DD',
  week = 'YYYY-wo',
  quarter = 'YYYY-\\QQ',
  // quarter = 'YYYY-qQ',
}

type CreateDisabledDateOptions = {
  disabledDateBefore?: number;
  disabledDateAfter?: number;
};

/**
 * 获取日期格式
 * @param format
 * @param picker
 * @param showTime
 * @returns
 */
export function getDateFormat(format: string, picker: Picker, showTime = false) {
  if (format) return format;
  const timeFormatStr = picker === 'date' && showTime ? DateFormat.time : '';
  const ret = DateFormat[picker] + timeFormatStr || DateFormat.date;
  return ret;
}

/**
 * 创建不可选日期方法
 * @param picker
 * @param opts
 * @returns
 */
export function createDisabledDate(picker: Picker = 'date', opts: CreateDisabledDateOptions) {
  const { disabledDateBefore, disabledDateAfter } = opts;
  const hasBefore = typeof disabledDateBefore === 'number';
  const hasAfter = typeof disabledDateAfter === 'number';

  if (!hasBefore && !hasAfter) {
    return () => false;
  }
  const dayjsType = DayjsEnum[picker];
  if (!dayjsType) {
    return () => false;
  }

  return (current: Dayjs) => {
    if (!current) {
      return false;
    }

    let before = disabledDateBefore as number,
      after = disabledDateAfter as number;

    // 处理季度转化
    if (picker === 'quarter') {
      if (hasBefore) {
        before = before * 3 - 1;
      }
      if (hasAfter) {
        after = after * 3 - 1;
      }
    }

    if (hasBefore && hasAfter) {
      return (
        current <= dayjs().subtract(before, dayjsType).endOf(dayjsType) ||
        current >= dayjs().add(after, dayjsType).startOf(dayjsType)
      );
    } else if (hasBefore) {
      return current <= dayjs().subtract(before, dayjsType).endOf(dayjsType);
    } else if (hasAfter) {
      return current >= dayjs().add(after, dayjsType).startOf(dayjsType);
    }

    return false;
  };
}

// 格式化，年-季
export function formatQuarter(value: string | Dayjs) {
  return dayjs(value).format(InternalQuarterFormat).toUpperCase();
}

// 年-季字符串转换为Dayjs
export function transformQuarter(value: string | Dayjs) {
  if (dayjs.isDayjs(value)) return value;
  const ret = dayjs((value || '').replace('Q', ''), 'YYYY-Q');
  return ret;
}

/**
 * 转化 string number dayjs 转换为 dayjs 类型值
 * @param value 值
 * @param format 格式化
 * @param picker 类型
 */
export function transform2Dayjs(value?: string | number | Dayjs, format?: string, picker?: Picker): Dayjs;
export function transform2Dayjs(value?: (string | number | Dayjs)[], format?: string, picker?: Picker): Dayjs[];
export function transform2Dayjs(
  value?: string | number | Dayjs | (string | number | Dayjs)[],
  format?: string,
  picker?: Picker,
) {
  if (dayjs.isDayjs(value)) {
    return value;
  }

  if (typeof value === 'string') {
    // 季度
    if (picker === 'quarter') {
      const quarterNum = format === DateFormat.quarter ? +value.slice(-1) : +value.slice(5, 6);
      return dayjs().quarter(quarterNum);
    }
    // 周
    if (picker === 'week') {
      const weekNum = parseInt(value.slice(5)); // +1; // antd的原因 要加一周
      return dayjs().week(weekNum);
    }

    return dayjs(value, format);
  }

  if (typeof value === 'number') {
    return dayjs(value);
  }

  if (Array.isArray(value)) {
    return value?.map((item) => transform2Dayjs(item, format, picker));
  }

  return value || void 0;
}

/**
 * @param hour 当前小时 0-23
 * @param disabledHourBefore 禁用当前时间之前的小时 (0会包括当前小时)
 * @param disabledHourAfter 禁用当前时间之后的小时 (0会包括当前小时)
 * @returns
 */
export function customDisabledHours(hour: number, disabledHourBefore?: number, disabledHourAfter?: number) {
  console.log('===hour==>', hour);
  const hasBefore = typeof disabledHourBefore === 'number';
  const hasAfter = typeof disabledHourAfter === 'number';
  if (!hasBefore && !hasAfter) {
    return [];
  }

  if (hasBefore && hasAfter) {
    const ret = TIME_LIST.slice(hour - disabledHourBefore + 1, hour + disabledHourAfter);
    return TIME_LIST.filter((item) => !ret.includes(item));
  } else if (hasBefore) {
    const ret = TIME_LIST.slice(0, hour - disabledHourBefore + 1);
    return ret;
  } else if (hasAfter) {
    const ret = TIME_LIST.slice(hour + disabledHourAfter);
    return ret;
  }
  return [];
}

/**
 * 格式化用户选择的日期
 * @param date
 * @param format
 * @param dateValueType
 */
// export function formatDayjs(
//   date: Dayjs,
//   format: string,
//   dateValueType: DateValueType,
// ): string | number | Dayjs;
// export function formatDayjs(
//   date: [Dayjs, Dayjs],
//   format: string,
//   dateValueType: DateValueType,
// ): [string | number | Dayjs, string | number | Dayjs];
// export function formatDayjs(
//   date: Dayjs | Dayjs[],
//   format: string,
//   dateValueType: DateValueType,
// ): string | number | Dayjs | (string | number | Dayjs)[] {
//   if (Array.isArray(date) && date.length > 0) {
//     return date.map((item) => formatDayjs(item, format, dateValueType));
//   }

//   if (date && dateValueType === 'string') {
//     return format === DateFormat.quarter
//       ? formatQuarter(date as Dayjs)
//       : (date as Dayjs).format(format);
//     // return (date as Dayjs).format(format);
//   }

//   if (date && dateValueType === 'dayjs') {
//     return date;
//   }

//   if (date && dateValueType === 'number') {
//     return (date as Dayjs).valueOf();
//   }

//   return date;
// }
