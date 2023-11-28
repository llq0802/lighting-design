import type { SpinProps } from 'antd';
import type { CheckboxOptionType } from 'antd/lib/checkbox';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import type { LFormItemActionRef } from 'lighting-design/FormItemSelect';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext } from 'react';
import type { CheckboxWrapperProps } from './base/CheckboxWrapper';
import CheckboxWrapper from './base/CheckboxWrapper';
export interface LFormItemCheckboxProps
  extends LFormItemProps,
    Pick<CheckboxWrapperProps, 'checkboxProps' | 'request' | 'beforeAll' | 'notDependRender'> {
  /**
   *依赖项
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.25
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemCheckboxProps
   *@See (https://ant.design/components/spin-cn/#api)
   */
  dependencies?: string[];
  /**
   *当依赖项发生变化时重新请求的防抖时间
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.25
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemCheckboxProps
   *@See (https://ant.design/components/spin-cn/#api)
   */
  debounceTime?: number;
  /**
   *数据源
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.25
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemCheckboxProps
   *@See (https://ant.design/components/spin-cn/#api)
   */
  options?: CheckboxOptionType[];
  /**
   *自定义 loading 效果
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.25
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemCheckboxProps
   *@See (https://ant.design/components/spin-cn/#api)
   */
  spin?: SpinProps;
  /**
   *配置 request 时 useRequest 的返回值
   *@author 李岚清 <https://github.com/llq0802>
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemInputProps
   *@version 2.1.25
   */
  actionRef?: React.MutableRefObject<LFormItemActionRef>;
  /**
   *ahook 的 request 的配置项
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.25
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSelectProps
   */
  requestOptions?: Record<string, any>;
}

const LFormItemCheckbox: FC<LFormItemCheckboxProps> = ({
  size,
  actionRef,
  request,
  beforeAll,
  options = emptyArray,
  checkboxProps = emptyObject,
  debounceTime,
  disabled,
  required,
  spin,
  notDependRender,
  requestOptions = emptyObject,
  ...restProps
}) => {
  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem required={required} _isSelectType {...restProps}>
      <CheckboxWrapper
        name={restProps.name}
        dependencies={restProps?.dependencies}
        notDependRender={notDependRender}
        actionRef={actionRef}
        options={options}
        request={request}
        disabled={disabled ?? formDisabled}
        debounceTime={debounceTime}
        outLoading={spin}
        beforeAll={beforeAll}
        checkboxProps={checkboxProps}
        requestOptions={requestOptions}
      />
    </LFormItem>
  );
};

export type { LCheckboxBeforeAllProps, LCheckboxOptions } from './base/CheckboxWrapper';

export default LFormItemCheckbox;
