import type { CascaderProps } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import type { LFormItemSelectProps } from 'lighting-design/FormItemSelect';
import { usePlaceholder } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext } from 'react';
import CascaderWrapper from './base/CascaderWrapper';

export interface LFormItemCascaderProps
  extends LFormItemProps,
    Pick<LFormItemSelectProps, 'request' | 'requestOptions' | 'spin' | 'actionRef'> {
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

const LFormItemCascader: FC<LFormItemCascaderProps> = ({
  required,
  disabled,

  changeOnSelect,
  expandTrigger,
  displayRender,
  showSearch,
  placeholder,
  multiple,
  loadData,
  options = emptyArray,
  size,
  fieldNames,

  request,
  requestOptions = emptyObject,
  spin,
  actionRef,

  cascaderProps = emptyObject,

  ...restProps
}) => {
  const messageLabel = usePlaceholder({
    placeholder,
    restProps,
    isSelectType: true,
  });

  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem required={required} placeholder={messageLabel} _isSelectType {...restProps}>
      <CascaderWrapper
        dependencies={restProps?.dependencies}
        options={options}
        request={request}
        size={size}
        outLoading={spin}
        disabled={disabled ?? formDisabled}
        placeholder={messageLabel}
        multiple={multiple}
        showSearch={showSearch}
        fieldNames={fieldNames}
        requestOptions={requestOptions}
        actionRef={actionRef}
        loadData={loadData}
        changeOnSelect={changeOnSelect}
        expandTrigger={expandTrigger}
        displayRender={displayRender}
        {...cascaderProps}
      />
    </LFormItem>
  );
};

export default LFormItemCascader;
