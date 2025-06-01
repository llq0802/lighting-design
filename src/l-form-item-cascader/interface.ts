import type { CascaderProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/FormItem/interface';
import type { LFormItemSelectProps } from 'lighting-design/FormItemSelect/interface';

export interface LFormItemCascaderProps
  extends LFormItemProps,
    Pick<
      LFormItemSelectProps,
      | 'request'
      | 'requestOptions'
      | 'spin'
      | 'actionRef'
      | 'autoRequest'
      | 'refreshDeps'
      | 'variant'
    > {
  cascaderProps?: CascaderProps;
  showSearch?: boolean;
  multiple?: boolean;
  loadData?: CascaderProps['loadData'];
  fieldNames?: CascaderProps['fieldNames'];
  changeOnSelect?: CascaderProps['changeOnSelect'];
  displayRender?: CascaderProps['displayRender'];
  expandTrigger?: CascaderProps['expandTrigger'];
  options?: CascaderProps['options'] | Record<string, any>[];
}
