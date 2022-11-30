import type { Moment } from 'moment';
import moment from 'moment';

// DatePicker picker值
export type Picker = 'time' | 'date' | 'week' | 'month' | 'quarter' | 'year';

// moment 与antd-Data度量值
export enum MomentEnum {
  date = 'days',
  week = 'weeks',
  month = 'months',
  quarter = 'months',
  year = 'years',
}

// 日期格式
export enum DateFormat {
  date = 'YYYY-MM-DD',
  week = 'YYYY-wo',
  month = 'YYYY-MM',
  quarter = 'YYYY-\\QQ',
  year = 'YYYY',
}

type CreateDisabledDateOptions = {
  disabledDateBefore?: number;
  disabledDateAfter?: number;
};

export type DateValueType = 'string' | 'number' | 'moment';

// 获取日期格式
export function getDateFormat(format: any, picker: string, showTime = false) {
  if (format) return format;
  const timeFormatStr = picker === 'date' && showTime ? ' HH:mm:ss' : '';
  return DateFormat[picker] + timeFormatStr || 'YYYY-MM-DD';
}

// 创建不可选日期方法
export function createDisabledDate(picker: Picker = 'date', opts: CreateDisabledDateOptions) {
  const { disabledDateBefore, disabledDateAfter } = opts;
  const hasBefore = typeof disabledDateBefore === 'number';
  const hasAfter = typeof disabledDateAfter === 'number';

  if (!hasBefore && !hasAfter) {
    return () => false;
  }
  const momentType = MomentEnum[picker];

  if (!momentType) {
    return () => false;
  }

  return (current: Moment) => {
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
        current <= moment().subtract(before, momentType).endOf(momentType) ||
        current >= moment().add(after, momentType).startOf(momentType)
      );
    } else if (hasBefore) {
      return current <= moment().subtract(before, momentType).endOf(momentType);
    } else if (hasAfter) {
      return current >= moment().add(after, momentType).startOf(momentType);
    }

    return false;
  };
}

// string number moment 转换为moment
export function transformMomentValue(val: string | number | Moment): Moment;
export function transformMomentValue(val: (string | number | Moment)[]): [Moment, Moment];
export function transformMomentValue(val: string | number | Moment | (string | number | Moment)[]) {
  if (Array.isArray(val)) {
    return val.map((item) => transformMomentValue(item));
  }
  if (val && (typeof val === 'string' || typeof val === 'number')) {
    return moment(val);
  }
  return val;
}

// moment转换为string number moment
export function transformDate(
  date: Moment,
  format: string,
  dateValueType: string,
): string | number | Moment;

export function transformDate(
  date: Moment[],
  format: string,
  dateValueType: string,
): (string | number | Moment)[];

export function transformDate(
  date: Moment | Moment[],
  format: string,
  dateValueType: string,
): string | number | Moment | (string | number | Moment)[] {
  if (Array.isArray(date) && date.length > 0) {
    return date.map((item) => transformDate(item, format, dateValueType));
  }
  if (moment.isMoment(date) && dateValueType === 'moment') {
    return date;
  }
  if (date && dateValueType === 'number') {
    return moment(date as Moment).valueOf();
  }
  if (date && dateValueType === 'string') {
    return moment(date as Moment, format).format(format);
  }
  return date;
}
