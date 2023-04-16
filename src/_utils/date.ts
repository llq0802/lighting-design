import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

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
export enum DateFormat {
  year = 'YYYY',
  month = 'YYYY-MM',
  date = 'YYYY-MM-DD',
  week = 'YYYY-wo',
  quarter = 'YYYY-\\QQ',
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
  const timeFormatStr = picker === 'date' && showTime ? ' HH:mm:ss' : '';
  const ret = DateFormat[picker] + timeFormatStr || 'YYYY-MM-DD';
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

/**
 * string number dayjs 转换为 dayjs类型值
 * @param val
 * @param format
 */
export function transform2Dayjs(val?: string | number | Dayjs): Dayjs;
export function transform2Dayjs(
  val?: (string | number | Dayjs)[],
): [Dayjs, Dayjs];
export function transform2Dayjs(
  val?: string | number | Dayjs | (string | number | Dayjs)[],
) {
  if (Array.isArray(val)) {
    return val.map((item) => transform2Dayjs(item));
  }
  if (typeof val === 'string' || typeof val === 'number') {
    return dayjs(val);
  }
  return val;
}

/**
 * 格式化用户选择的日期
 * @param date
 * @param format
 * @param dateValueType
 */
export function transformDate(
  date: Dayjs,
  format: string,
  dateValueType: DateValueType,
): string | number | Dayjs;

export function transformDate(
  date: [Dayjs, Dayjs],
  format: string,
  dateValueType: DateValueType,
): [string | number | Dayjs, string | number | Dayjs];

export function transformDate(
  date: Dayjs | Dayjs[],
  format: string,
  dateValueType: DateValueType,
): string | number | Dayjs | (string | number | Dayjs)[] {
  if (Array.isArray(date) && date.length > 0) {
    return date.map((item) => transformDate(item, format, dateValueType));
  }

  if (date && dateValueType === 'string') {
    return dayjs(date as Dayjs).format(format);
  }
  if (date && dateValueType === 'dayjs') {
    return date;
  }
  if (date && dateValueType === 'number') {
    return dayjs(date as Dayjs).valueOf();
  }

  return date;
}
