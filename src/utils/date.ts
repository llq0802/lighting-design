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

export type DateValueType = 'string' | 'timestamp' | 'dayjs';
export enum PickerEnum {
  date = 'date',
  week = 'week',
  month = 'month',
  quarter = 'quarter',
  year = 'year',
}

export enum DayjsEnum {
  time = 'hours',
  date = 'days',
  week = 'weeks',
  month = 'months',
  quarter = 'months',
  year = 'years',
}

const InternalQuarterFormat = 'YYYY-qQ';
export enum DateFormat {
  time = ' HH:mm:ss',
  date = 'YYYY-MM-DD',
  week = 'YYYY-wo',
  month = 'YYYY-MM',
  // quarter = 'YYYY-Q',
  quarter = 'YYYY-qQ',
  year = 'YYYY',
}

type CreateDisabledDateOptions = {
  disabledDateBefore?: number;
  disabledDateAfter?: number;
};

/**
 * 获取日期格式
 * @param picker
 * @param showTime
 */
export function getDateFormat(format: string | undefined, picker: PickerEnum = PickerEnum.date, showTime: any) {
  if (format) return format;

  if (picker === PickerEnum.quarter) {
    return void 0;
  }

  const timeFormatStr = picker === PickerEnum.date && showTime ? DateFormat.time : '';
  const ret = (DateFormat[picker] || DateFormat.date) + timeFormatStr;
  return ret;
}

/**
 * 创建不可选日期方法
 * @param picker
 * @param opts
 * @returns
 */
export function createDisabledDate(
  disabledDate: any,
  picker: PickerEnum = PickerEnum.date,
  opts: CreateDisabledDateOptions,
) {
  if (disabledDate) return disabledDate;
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
    if (!current) return false;

    let before = disabledDateBefore as number,
      after = disabledDateAfter as number;

    // 处理季度转化
    // if (picker === PickerEnum.quarter) {
    //   if (hasBefore) {
    //     before = before * 3 - 1;
    //   }
    //   if (hasAfter) {
    //     after = after * 3 - 1;
    //   }
    // }

    if (hasBefore && hasAfter) {
      return (
        // 禁用早于 before 或晚于 after 的日期。
        current <= dayjs().subtract(before, dayjsType).endOf(dayjsType) ||
        current >= dayjs().add(after, dayjsType).startOf(dayjsType)
      );
    } else if (hasBefore) {
      // 只有 before：禁用早于 before 的日期。
      return current <= dayjs().subtract(before, dayjsType).endOf(dayjsType);
    } else if (hasAfter) {
      // 只有 after：禁用晚于 after 的日期。
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
export function transform2Dayjs(value?: string | number | Dayjs, format?: string, picker?: PickerEnum): Dayjs;
export function transform2Dayjs(value?: (string | number | Dayjs)[], format?: string, picker?: PickerEnum): Dayjs[];
export function transform2Dayjs(
  value?: string | number | Dayjs | (string | number | Dayjs)[],
  format?: string,
  picker?: PickerEnum,
) {
  if (dayjs.isDayjs(value)) {
    return value;
  }

  if (typeof value === 'string') {
    // 季度
    if (picker === PickerEnum.quarter) {
      const quarterNum = Number(value?.at?.(-1)) || 1;
      const year = value.slice(0, 4);
      return dayjs(`${year}-1-1`).startOf('year').quarter(quarterNum);
    }
    // 周
    if (picker === PickerEnum.week) {
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
