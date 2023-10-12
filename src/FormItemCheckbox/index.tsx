import type { SpinProps } from 'antd';
import type { CheckboxOptionType } from 'antd/lib/checkbox';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext } from 'react';
import type { CheckboxWrapperProps } from './base/CheckboxWrapper';
import CheckboxWrapper from './base/CheckboxWrapper';
export interface LFormItemCheckboxProps
  extends LFormItemProps,
    Pick<
      CheckboxWrapperProps,
      'checkboxProps' | 'request' | 'beforeAll' | 'notDependRender'
    > {
  /**
   *依赖项
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.22
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemCheckboxProps
   *@See (https://ant.design/components/spin-cn/#api)
   */
  dependencies?: string[];
  /**
   *当依赖项发生变化时重新请求的防抖时间
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.22
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemCheckboxProps
   *@See (https://ant.design/components/spin-cn/#api)
   */
  debounceTime?: number;
  /**
   *数据源
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.22
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemCheckboxProps
   *@See (https://ant.design/components/spin-cn/#api)
   */
  options?: CheckboxOptionType[];
  /**
   *自定义 loading 效果
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.22
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemCheckboxProps
   *@See (https://ant.design/components/spin-cn/#api)
   */
  spin?: SpinProps;
  requestOptions?: Record<string, any>;
}

const LFormItemCheckbox: FC<LFormItemCheckboxProps> = ({
  request,
  beforeAll,
  options = emptyArray,
  checkboxProps = emptyObject,
  debounceTime,
  disabled,
  size,
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

export type {
  LCheckboxBeforeAllProps,
  LCheckboxOptions,
} from './base/CheckboxWrapper';

export default LFormItemCheckbox;
