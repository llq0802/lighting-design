import type { Result } from 'ahooks/lib/useRequest/src/types';
import type { SelectProps, SpinProps } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import React, { useContext } from 'react';
import type { SelectWrapperProps } from './base/SelectWrapper';
import SelectWrapper from './base/SelectWrapper';

export type LFormItemActionRef = Result<any, any[]> | undefined;

export interface LFormItemSelectProps
  extends LFormItemProps,
    Pick<SelectWrapperProps, 'selectProps' | 'request' | 'all' | 'allValue' | 'allLabel'> {
  /**
   *数据源
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSelectProps
   */
  options?: SelectProps['options'] | Record<string, any>[];
  /**
   *依赖的项
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSelectProps
   */
  dependencies?: string[];
  /**
   *当依赖项发生变化时重新请求的防抖时间
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSelectProps
   */
  debounceTime?: number;
  /**
   *自定义 loading 效果
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSelectProps
   *@See (https://ant.design/components/spin-cn/#api)
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

const validatorSelectVal = (value, mode, all, allValue) => {
  /*   (!value && value !== 0 && !hasOptValue && !(all && allValue === value))
  ||
  ((selectProps?.mode === 'multiple' || selectProps?.mode === 'tags') &&  value && value.length <= 0 */
  if (mode === 'multiple' || mode === 'tags') {
    return value && value?.length > 0;
  }
  if (typeof value === 'number' || (all && allValue === value)) {
    return true;
  }
  return !!value;
};

const LFormItemSelect: FC<LFormItemSelectProps> = ({
  request,
  debounceTime,
  all = false,
  allValue = 'all',
  allLabel = '全部',
  options = emptyArray,
  selectProps = emptyObject,
  requestOptions = emptyObject,
  spin,

  required,
  disabled,
  size,
  placeholder,
  actionRef,
  messageVariables,
  ...restProps
}) => {
  const messagePlaceholder = usePlaceholder({
    placeholder,
    restProps,
    isSelectType: true,
  });
  const { disabled: formDisabled } = useContext(LFormContext);
  const rules = [
    {
      validator(rule, value: any) {
        let errMsg = '';
        if (!validatorSelectVal(value, selectProps?.mode, all, allValue)) {
          errMsg = required ? `${messageVariables?.label || messagePlaceholder}!` : '';
        }
        if (errMsg) {
          return Promise.reject(errMsg);
        }
        return Promise.resolve();
      },
    },
  ];

  return (
    <LFormItem
      required={required}
      _isSelectType
      rules={rules}
      messageVariables={messageVariables}
      {...restProps}
    >
      <SelectWrapper
        name={restProps.name}
        size={size}
        disabled={disabled ?? formDisabled}
        placeholder={messagePlaceholder}
        dependencies={restProps?.dependencies}
        options={options}
        request={request}
        debounceTime={debounceTime}
        all={all}
        outLoading={spin}
        allValue={allValue}
        allLabel={allLabel}
        selectProps={selectProps}
        requestOptions={requestOptions}
        actionRef={actionRef}
      />
    </LFormItem>
  );
};

export default LFormItemSelect;

export type { LSelectOptions } from './base/SelectWrapper';
