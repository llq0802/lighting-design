import type { Dayjs } from './day';
import dayjs from './day';

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
export function getDateFormat(
  format: string,
  picker: Picker,
  showTime = false,
) {
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
export function createDisabledDate(
  picker: Picker = 'date',
  opts: CreateDisabledDateOptions,
) {
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
 * 转化string number dayjs 转换为 dayjs类型值
 * @param value
 * @param format
 */
export function transform2Dayjs(
  value?: string | number | Dayjs,
  format?: string,
  picker?: Picker,
): Dayjs;
export function transform2Dayjs(
  value?: (string | number | Dayjs)[],
  format?: string,
  picker?: Picker,
): [Dayjs, Dayjs];
export function transform2Dayjs(
  value?: string | number | Dayjs | (string | number | Dayjs)[],
  format?: string,
  picker?: Picker,
) {
  if (dayjs.isDayjs(value)) {
    return value;
  }

  if (Array.isArray(value)) {
    return value?.map((item) => transform2Dayjs(item, format, picker));
  }

  if (typeof value === 'string') {
    // 季度
    if (picker === 'quarter') {
      const quarterNum =
        format === DateFormat.quarter ? +value.slice(-1) : +value.slice(5, 6);
      return dayjs().quarter(quarterNum);
    }

    // 周
    if (picker === 'week') {
      const weekNum = parseInt(value.slice(5)); // +1; // antd的原因 要加一周
      return dayjs().week(weekNum);
    }

    return dayjs(value, format);
    // return dayjs(value);
  }

  if (typeof value === 'number') {
    return dayjs(value);
  }

  return value || void 0;
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
