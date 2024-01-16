import type { SpinProps } from 'antd';
import type { SegmentedLabeledOption, SegmentedValue } from 'antd/lib/segmented';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import type { LFormItemActionRef } from 'lighting-design/FormItemSelect';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext } from 'react';
import type { SegmentedWrapperProps } from './base/SegmentedWrapper';
import SegmentedWrapper from './base/SegmentedWrapper';

export interface LFormItemSegmentedoProps
  extends LFormItemProps,
    Pick<SegmentedWrapperProps, 'segmentedProps' | 'request' | 'notDependRender'> {
  dependencies?: string[];
  /**
   *当依赖项发生变化时重新请求的防抖时间
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSegmentedoProps
   */
  debounceTime?: number;
  /**
   *数据化配置选项
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSegmentedoProps
   */
  options?: (SegmentedValue | SegmentedLabeledOption)[];
  /**
   *自定义 loading 效果
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSegmentedoProps
   */
  spin?: SpinProps;
  /**
   *ahook 的 request 的配置项
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSelectProps
   */
  requestOptions?: Record<string, any>;
  /**
   *配置 request 时 useRequest 的返回值
   *@author 李岚清 <https://github.com/llq0802>
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemInputProps
   *@version 2.1.29
   */
  actionRef?: React.MutableRefObject<LFormItemActionRef>;
}

const LFormItemSegmented: FC<LFormItemSegmentedoProps> = ({
  request,
  debounceTime,
  options = emptyArray,
  segmentedProps = emptyObject,
  requestOptions = emptyObject,
  spin,
  size,
  actionRef,
  disabled,
  notDependRender,

  required,
  ...restProps
}) => {
  const { disabled: formDisabled, size: formSize } = useContext(LFormContext);

  return (
    <LFormItem required={required} _isSelectType {...restProps}>
      <SegmentedWrapper
        name={restProps.name}
        dependencies={restProps?.dependencies}
        size={size ?? formSize}
        actionRef={actionRef}
        options={options}
        request={request}
        outLoading={spin}
        disabled={disabled ?? formDisabled}
        debounceTime={debounceTime}
        notDependRender={notDependRender}
        // @ts-ignore
        segmentedProps={segmentedProps}
        requestOptions={requestOptions}
      />
    </LFormItem>
  );
};

export default LFormItemSegmented;
