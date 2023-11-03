import type { SelectProps, SpinProps } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext } from 'react';
import type { SelectWrapperProps } from './base/SelectWrapper';
import SelectWrapper from './base/SelectWrapper';

export interface LFormItemSelectProps
  extends LFormItemProps,
    Pick<
      SelectWrapperProps,
      'selectProps' | 'request' | 'all' | 'allValue' | 'allLabel'
    >,
    Pick<SelectProps, 'options'> {
  /**
   *依赖的项
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSelectProps
   */
  dependencies?: string[];
  /**
   *当依赖项发生变化时重新请求的防抖时间
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSelectProps
   */
  debounceTime?: number;
  /**
   *自定义 loading 效果
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSelectProps
   *@See (https://ant.design/components/spin-cn/#api)
   */
  spin?: SpinProps;
  requestOptions?: Record<string, any>;
}

const LFormItemSelect: FC<LFormItemSelectProps> = ({
  request,
  debounceTime,
  all = false,
  allValue = '',
  allLabel = '全部',
  options = emptyArray,
  selectProps = emptyObject,
  requestOptions = emptyObject,
  spin,

  required,
  disabled,
  size,
  placeholder,
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
      validator(rule, value) {
        let errMsg = '';
        const hasOptValue = options.find((item) => item?.value === value);
        if (
          (!value &&
            value !== 0 &&
            !hasOptValue &&
            !(all && allValue === value)) ||
          ((selectProps?.mode === 'multiple' || selectProps?.mode === 'tags') &&
            value &&
            value.length <= 0)
        ) {
          errMsg = required ? `${messagePlaceholder}!` : '';
        }
        if (errMsg) {
          return Promise.reject(errMsg);
        }
        return Promise.resolve();
      },
    },
  ];

  return (
    <LFormItem required={required} _isSelectType rules={rules} {...restProps}>
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
      />
    </LFormItem>
  );
};

export default LFormItemSelect;

export type { LSelectOptions } from './base/SelectWrapper';
