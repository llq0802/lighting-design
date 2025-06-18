import type { CascaderProps } from 'antd';
import type { LFormItemSelectProps } from 'lighting-design/l-form-item-select';
import type { LFormItemProps } from 'lighting-design/l-form-item/interface';
import type { LFormProps } from 'lighting-design/l-form/interface';

export interface LFormItemCascaderProps
  extends LFormItemProps,
    Pick<LFormProps, 'variant' | 'disabled' | 'size'>,
    Pick<LFormItemSelectProps, 'request' | 'requestOptions' | 'spin' | 'actionRef'> {
  placeholder?: string;
  showSearch?: boolean;
  multiple?: boolean;
  loadData?: CascaderProps['loadData'];
  fieldNames?: CascaderProps['fieldNames'];
  changeOnSelect?: CascaderProps['changeOnSelect'];
  displayRender?: CascaderProps['displayRender'];
  expandTrigger?: CascaderProps['expandTrigger'];
  options?: CascaderProps['options'] | Record<string, any>[];
  cascaderProps?: CascaderProps;
}
