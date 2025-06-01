/**
 * 转化单选多选组件传入的value
 */
export const transformValue = ({
  value,
  multiple,
  labelInValue,
  valueKey,
}: {
  value: any;
  multiple: boolean;
  labelInValue: boolean;
  valueKey: string;
}) => {
  if (labelInValue) {
    if (multiple) {
      return value?.map?.((item: any) => (typeof item === 'object' ? item[valueKey] : item)) ?? [];
    }
    return typeof value === 'object' ? value[valueKey] : value;
  }
  return multiple ? value || [] : value;
};
/**
 * 转化单选多选组件onChange的value
 */
export const transformChangeValue = ({
  value,
  multiple,
  labelInValue,
  valueKey,
  options,
}: {
  value: any;
  multiple: boolean;
  labelInValue: boolean;
  valueKey: string;
  options: any[];
}) => {
  if (labelInValue) {
    if (multiple) {
      return options?.filter((item) => value?.includes?.(item[valueKey]));
    }
    return options?.find((item) => item[valueKey] === value);
  }
  return value;
};
