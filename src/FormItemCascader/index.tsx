import type { SpinProps } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import type { LFormItemActionRef } from 'lighting-design/FormItemSelect';
import { usePlaceholder } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext } from 'react';
import type { CascaderWrapperProps } from './base/CascaderWrapper';
import CascaderWrapper from './base/CascaderWrapper';

export interface LFormItemCascaderProps
  extends LFormItemProps,
    Pick<CascaderWrapperProps, 'options' | 'request' | 'cascaderProps' | 'debounceTime'> {
  dependencies?: string[];
  /**
   * Spin组件的props 用于自定义loading效果
   * @see 参考(https://ant.design/components/spin-cn/#api)
   */
  spin?: SpinProps;
  /**
   *配置 request 时 useRequest 的返回值
   *@author 李岚清 <https://github.com/llq0802>
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemInputProps
   *@version 2.1.29
   */
  actionRef?: React.MutableRefObject<LFormItemActionRef>;
  /**
   *ahook 的 request 的配置项
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSelectProps
   */
  requestOptions?: Record<string, any>;
}

const LFormItemCascader: FC<LFormItemCascaderProps> = ({
  required,
  disabled,
  placeholder,
  options = emptyArray,
  request,
  debounceTime,
  spin,
  size,
  actionRef,

  cascaderProps = emptyObject,
  requestOptions = emptyObject,
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
        name={restProps.name}
        dependencies={restProps?.dependencies}
        options={options}
        request={request}
        size={size}
        outLoading={spin}
        debounceTime={debounceTime}
        cascaderProps={cascaderProps}
        disabled={disabled ?? formDisabled}
        placeholder={messageLabel}
        requestOptions={requestOptions}
        actionRef={actionRef}
      />
    </LFormItem>
  );
};

export default LFormItemCascader;
export type { LCascaderOption } from './base/CascaderWrapper';
