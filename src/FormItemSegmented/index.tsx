import type { SpinProps } from 'antd';
import type {
  SegmentedLabeledOption,
  SegmentedValue,
} from 'antd/lib/segmented';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext } from 'react';
import type { SegmentedWrapperProps } from './base/SegmentedWrapper';
import SegmentedWrapper from './base/SegmentedWrapper';

export interface LFormItemSegmentedoProps
  extends LFormItemProps,
    Pick<
      SegmentedWrapperProps,
      'segmentedProps' | 'request' | 'notDependRender'
    > {
  dependencies?: string[];
  /**
   *当依赖项发生变化时重新请求的防抖时间
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSegmentedoProps
   */
  debounceTime?: number;
  /**
   *数据化配置选项
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSegmentedoProps
   */
  options?: (SegmentedValue | SegmentedLabeledOption)[];
  /**
   *自定义 loading 效果
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSegmentedoProps
   */
  spin?: SpinProps;
}

const LFormItemSegmented: FC<LFormItemSegmentedoProps> = ({
  request,
  debounceTime,
  options = emptyArray,
  segmentedProps = emptyObject,
  requestOptions = emptyObject,
  spin,
  size,
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
