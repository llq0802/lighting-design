import type { TreeSelectProps } from 'antd';
import type { LFormItemSelectProps } from 'lighting-design/l-form-item-select';
import type { LFormItemProps } from 'lighting-design/l-form-item/interface';
import type { LFormProps } from 'lighting-design/l-form/interface';

export interface LFormItemTreeSelectProps
  extends LFormItemProps,
    Pick<LFormProps, 'variant' | 'disabled' | 'size'>,
    Pick<LFormItemSelectProps, 'actionRef' | 'requestOptions' | 'request' | 'spin'> {
  placeholder?: string;
  maxHeight?: string | number;
  treeDataSimpleMode?: TreeSelectProps['treeDataSimpleMode'];
  showSearch?: TreeSelectProps['showSearch'];
  multiple?: TreeSelectProps['multiple'];
  treeIcon?: TreeSelectProps['treeIcon'];
  treeLine?: TreeSelectProps['treeLine'];
  treeCheckable?: TreeSelectProps['treeCheckable'];
  loadData?: TreeSelectProps['loadData'];
  treeData?: TreeSelectProps['treeData'];
  fieldNames?: TreeSelectProps['fieldNames'];
  treeSelectProps?: TreeSelectProps;
}
