import type { SpinProps } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import type { LFormItemActionRef } from 'lighting-design/FormItemSelect';
import { usePlaceholder } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext } from 'react';
import type { TreeSelectWrapperProps } from './base/TreeSelectWrapper';
import TreeSelectWrapper from './base/TreeSelectWrapper';

export interface LFormItemTreeSelectProps
  extends LFormItemProps,
    Pick<
      TreeSelectWrapperProps,
      'treeData' | 'request' | 'treeSelectProps' | 'debounceTime' | 'treeCheckable' | 'loadData'
    > {
  dependencies?: string[];
  /**
   *自定义 loading 效果
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.28
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTreeSelectProps
   */
  spin?: SpinProps;
  /**
   *配置 request 时 useRequest 的返回值
   *@author 李岚清 <https://github.com/llq0802>
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTreeSelectProps
   *@version 2.1.28
   */
  actionRef?: React.MutableRefObject<LFormItemActionRef>;
  /**
   *ahook 的 request 的配置项
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.28
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTreeSelectProps
   */
  requestOptions?: Record<string, any>;
  /**
   *是否使用简单格式的 treeData
   *@author 李岚清 <https://github.com/llq0802>
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTreeSelectProps
   *@version 2.1.28
   */
  treeDataSimpleMode?: boolean;
}

const LFormItemTreeSelect: FC<LFormItemTreeSelectProps> = ({
  actionRef,
  required,
  treeData = emptyArray,
  treeCheckable = false,
  treeDataSimpleMode = false,
  loadData,
  request,
  disabled,
  placeholder,
  debounceTime,
  size,
  spin,
  treeSelectProps = emptyObject,
  requestOptions = emptyObject,

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
        treeDataSimpleMode={treeDataSimpleMode}
        actionRef={actionRef}
        placeholder={messagePlaceholder}
        dependencies={restProps?.dependencies}
        treeData={treeData}
        treeCheckable={treeCheckable}
        request={request}
        size={size}
        outLoading={spin}
        debounceTime={debounceTime}
        loadData={loadData}
        treeSelectProps={treeSelectProps}
        requestOptions={requestOptions}
        name={restProps.name}
      />
    </LFormItem>
  );
};

export default LFormItemTreeSelect;

export type { LTreeSelectOption } from './base/TreeSelectWrapper';
