import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext } from 'react';
import TreeSelectWrapper from './base/TreeSelectWrapper';
import type { LFormItemTreeSelectProps } from './interface';

const LFormItemTreeSelect: FC<LFormItemTreeSelectProps> = ({
  placeholder,
  disabled = false,
  size,

  request,
  requestOptions = emptyObject,
  actionRef,
  spin,
  autoRequest = true,
  refreshDeps,
  variant,
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
    <LFormItem _isSelectType {...restProps}>
      <TreeSelectWrapper
        size={size}
        disabled={disabled || formDisabled}
        placeholder={messagePlaceholder}
        dependencies={restProps?.dependencies}
        //
        request={request}
        actionRef={actionRef}
        autoRequest={autoRequest}
        refreshDeps={refreshDeps}
        outLoading={spin}
        requestOptions={requestOptions}
        //
        showSearch={showSearch}
        multiple={multiple}
        treeLine={treeLine}
        treeIcon={treeIcon}
        treeCheckable={treeCheckable}
        treeDataSimpleMode={treeDataSimpleMode}
        loadData={loadData}
        treeData={treeData}
        variant={variant}
        fieldNames={fieldNames}
        {...treeSelectProps}
      />
    </LFormItem>
  );
};

export default LFormItemTreeSelect;
export * from './interface';
