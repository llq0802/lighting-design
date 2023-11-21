import { useMemoizedFn, useMount, useRequest } from 'ahooks';
import type { SpinProps, TreeSelectProps } from 'antd';
import { Form, Spin, TreeSelect } from 'antd';
import { publicSpinStyle } from 'lighting-design/FormItemRadio/base/RadioWrapper';
import { getOptions, useDependValues, useIsClearDependValues } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import useDeepUpdateEffect from 'lighting-design/useDeepUpdateEffect';
import type { FC } from 'react';
import { useImperativeHandle, useMemo } from 'react';

export type TreeSelectWrapperProps = Record<string, any> & {
  /**
   *数据化配置选项内容
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTreeSelectProps
   */
  treeData?: TreeSelectProps['treeData'];
  /**
   *请求数据异步函数
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTreeSelectProps
   */
  request?: (...dependValues: any[]) => Promise<LTreeSelectOption[]>;
  /**
   *是否显示 Checkbox
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTreeSelectProps
   */
  treeCheckable?: boolean;
  debounceTime?: number;
  /**
   *antd树选择组件的 Props
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTreeSelectProps
   */
  treeSelectProps?: TreeSelectProps;
  dependencies?: string[];
  /**
   *异步加载数据
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTreeSelectProps
   */
  loadData?: TreeSelectProps['loadData'];
  outLoading?: SpinProps;
};

export type LTreeSelectOption = {
  value: string;
  title: string;
  placeholder?: string;
  children?: LTreeSelectOption[];
  disabled?: boolean;
  disableCheckbox?: boolean;
  selectable?: boolean;
  checkable?: boolean;
  /** 设为 `false` 时会强制标记为父节点，即使当前节点没有 children，也会显示展开图标 */
  isLeaf?: boolean;
};

const TreeSelectWrapper: FC<TreeSelectWrapperProps> = ({
  actionRef,
  treeDataSimpleMode,
  value,
  onChange,
  dependencies = emptyArray,
  treeData: outTreeData = emptyArray,
  treeCheckable = false,
  request,
  debounceTime,
  disabled,
  placeholder,
  loadData,
  treeSelectProps = emptyObject,
  outLoading,
  requestOptions = emptyObject,
  name,
  ...restProps // LFormItem传过来的其他值
}) => {
  const form = Form.useFormInstance();
  const dependValues = useDependValues(dependencies, restProps);
  const hasEmptyDepends = useIsClearDependValues(dependValues);

  const requestRes = useRequest(request || (async () => []), {
    ...requestOptions,
    manual: true,
    debounceWait: debounceTime,
  });
  const { run, loading, data } = requestRes;

  useMount(() => {
    if (!request || outTreeData?.length || treeSelectProps.treeData?.length) return;
    run(...dependValues);
  });
  useImperativeHandle(actionRef, () => requestRes);

  useDeepUpdateEffect(() => {
    if (!request || outTreeData?.length || treeSelectProps.treeData?.length) return;
    form.setFieldValue(name, void 0);
    if (!hasEmptyDepends) run(...dependValues);
  }, dependValues);

  const treeSelectData = useMemo(() => {
    const innerOptions = getOptions(outTreeData, treeSelectProps.treeData, data);
    return innerOptions;
  }, [outTreeData, data, treeSelectProps.treeData]);

  const handleChange = useMemoizedFn(
    (vals: string | string[], labelList: React.ReactNode[], extra: any) => {
      onChange?.(vals);
      if (treeSelectProps?.onChange) {
        treeSelectProps.onChange(vals, labelList, extra);
      }
    },
  );

  return (
    <Spin spinning={loading} style={publicSpinStyle} {...outLoading}>
      <TreeSelect
        {...restProps}
        allowClear
        disabled={disabled ?? hasEmptyDepends}
        placeholder={placeholder}
        treeData={treeSelectData}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeCheckable={treeCheckable}
        loadData={loadData}
        treeDataSimpleMode={treeDataSimpleMode}
        {...treeSelectProps}
        style={{ width: '100%', ...treeSelectProps?.style }}
        value={value}
        onChange={handleChange}
      />
    </Spin>
  );
};

export default TreeSelectWrapper;
