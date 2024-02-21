import type { TreeSelectProps } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import type { LFormItemSelectProps } from 'lighting-design/FormItemSelect';
import { usePlaceholder } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext } from 'react';
import TreeSelectWrapper from './base/TreeSelectWrapper';

export interface LFormItemTreeSelectProps
  extends LFormItemProps,
    Pick<LFormItemSelectProps, 'actionRef' | 'requestOptions' | 'request' | 'spin'> {
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

const LFormItemTreeSelect: FC<LFormItemTreeSelectProps> = ({
  required,
  placeholder,
  disabled,
  size,

  request,
  requestOptions = emptyObject,
  actionRef,
  spin,

  treeLine,
  treeCheckable,
  treeIcon,
  treeDataSimpleMode,
  multiple,
  showSearch,
  loadData,
  treeData = emptyArray,
  fieldNames,
  treeSelectProps = emptyObject,

  ...restProps
}) => {
  const messagePlaceholder = usePlaceholder({
    placeholder,
    restProps,
    isSelectType: true,
  });
  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem required={required} _isSelectType {...restProps}>
      <TreeSelectWrapper
        disabled={disabled ?? formDisabled}
        actionRef={actionRef}
        placeholder={messagePlaceholder}
        dependencies={restProps?.dependencies}
        treeData={treeData}
        request={request}
        size={size}
        outLoading={spin}
        requestOptions={requestOptions}
        showSearch={showSearch}
        multiple={multiple}
        treeLine={treeLine}
        treeIcon={treeIcon}
        treeCheckable={treeCheckable}
        treeDataSimpleMode={treeDataSimpleMode}
        loadData={loadData}
        fieldNames={fieldNames}
        {...treeSelectProps}
      />
    </LFormItem>
  );
};

export default LFormItemTreeSelect;
