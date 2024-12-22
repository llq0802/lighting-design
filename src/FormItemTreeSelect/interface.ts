import type { TreeSelectProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/FormItem/interface';
import type { LFormItemSelectProps } from 'lighting-design/FormItemSelect/interface';

export interface LFormItemTreeSelectProps
  extends LFormItemProps,
    Pick<
      LFormItemSelectProps,
      | 'actionRef'
      | 'requestOptions'
      | 'request'
      | 'spin'
      | 'autoRequest'
      | 'refreshDeps'
      | 'variant'
    > {
  treeDataSimpleMode?: boolean;
  showSearch?: boolean;
  multiple?: boolean;
  treeIcon?: TreeSelectProps['treeIcon'];
  treeLine?: TreeSelectProps['treeLine'];
  treeCheckable?: TreeSelectProps['treeCheckable'];
  loadData?: TreeSelectProps['loadData'];
  treeData?: TreeSelectProps['treeData'];
  fieldNames?: TreeSelectProps['fieldNames'];
  treeSelectProps?: TreeSelectProps;
}
