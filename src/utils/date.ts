import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import isoWeek from 'dayjs/plugin/isoWeek';
import localeData from 'dayjs/plugin/localeData';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import relativeTime from 'dayjs/plugin/relativeTime';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import weekYear from 'dayjs/plugin/weekYear';
import weekday from 'dayjs/plugin/weekday';
import { TIME_LIST } from 'lighting-design/constants';
dayjs.extend(isoWeek);
dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(localeData);
dayjs.extend(relativeTime);
dayjs.extend(quarterOfYear);
dayjs.extend(weekday);
dayjs.extend(weekYear);
dayjs.extend(weekOfYear);
dayjs.locale('zh-cn');

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
  date = 'day',
  week = 'week',
  month = 'month',
  quarter = 'quarter',
  year = 'year',
}

export enum DateFormatEnum {
  time = ' HH:mm:ss',
  date = 'YYYY-MM-DD',
  week = 'YYYY-wo',
  month = 'YYYY-MM',
  // quarter = `YYYY-\QQ`,
  quarter = 'YYYY-qQ',
  year = 'YYYY',
}

/**
 * 获取日期格式
 * @param picker
 * @param showTime
 */
export function getDateFormat(format: string | undefined, picker: PickerEnum = PickerEnum.date, showTime: any) {
  if (format) return format;
  if (picker === PickerEnum.quarter || picker === PickerEnum.week) {
    return void 0;
  }
  const timeFormatStr = picker === PickerEnum.date && showTime ? DateFormatEnum.time : '';
  const ret = (DateFormatEnum[picker] || DateFormatEnum.date) + timeFormatStr;
  return ret;
}

/**
 * 创建不可选日期方法
 * @param picker
 * @param opts
 */
export function createDisabledDate(
  disabledDate: any,
  picker: PickerEnum = PickerEnum.date,
  opts: {
    disabledDateBefore?: number;
    disabledDateAfter?: number;
  },
) {
  if (disabledDate) return disabledDate;
  const { disabledDateBefore, disabledDateAfter } = opts;
  const hasBefore = typeof disabledDateBefore === 'number';
  const hasAfter = typeof disabledDateAfter === 'number';

  if (!hasBefore && !hasAfter) {
    return () => false;
  }

  const dayjsType = DayjsEnum[picker] as any;
  if (!dayjsType) {
    return () => false;
  }

  return (current: Dayjs) => {
    if (!current) return false;

    let before = disabledDateBefore as number,
      after = disabledDateAfter as number;

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

  if (typeof value === 'string' && value) {
    // 周
    if (picker === PickerEnum.week) {
      const match = value.split(value.slice(4, 5) || '-')[1]?.match(/\d+/g);
      const weekNum = match ? match[0] : void 0;
      const selectedYear = value.slice(0, 4) ?? DateFormatEnum.year;
      return (
        dayjs(selectedYear ? `${selectedYear}-01-01` : void 0)
          .startOf('year')
          // @ts-ignore
          .week(weekNum ? +weekNum : void 0)
      );
    }
    // 季度
    if (picker === PickerEnum.quarter) {
      const quarterNum = [...value].findLast((v) => !isNaN(Number(v)));
      const selectedYear = value.slice(0, 4) ?? DateFormatEnum.year;
      return (
        dayjs(selectedYear ? `${selectedYear}-01-01` : void 0)
          .startOf('year')
          //@ts-ignore
          .quarter(quarterNum ? +quarterNum : void 0)
      );
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
