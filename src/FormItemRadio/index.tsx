import type { SelectProps, SpinProps } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import type { FC } from 'react';
import { useContext } from 'react';
import type { RadioWrapperProps } from './base/RadioWrapper';
import RadioWrapper from './base/RadioWrapper';

export interface LFormItemRadioProps
  extends LFormItemProps,
    Pick<
      RadioWrapperProps,
      | 'radioProps'
      | 'request'
      | 'all'
      | 'allValue'
      | 'allLabel'
      | 'notDependRender'
    >,
    Pick<SelectProps, 'options'> {
  /**
   * 依赖项
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.3
   *@memberof LFormItemRadioProps
   */
  dependencies?: string[];
  /**
   * 当依赖项发生变化时重新请求的防抖时间
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.3
   *@memberof LFormItemRadioProps
   */
  debounceTime?: number;
  /**
   *自定义 loading 效果
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.3
   *@memberof LFormItemRadioProps
   *@See (https://ant.design/components/spin-cn/#api)
   */
  spin?: SpinProps;
}

const LFormItemRadio: FC<LFormItemRadioProps> = ({
  request,
  debounceTime,
  all = false,
  allValue = 'all',
  allLabel = '全部',
  options = [],
  disabled,
  radioProps = {},
  placeholder,
  spin,
  notDependRender,
  requestOptions = {},

  required,
  ...restProps
}) => {
  const messageLabel = usePlaceholder({
    placeholder,
    restProps,
    isSelectType: true,
  });
  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem
      required={required}
      _isSelectType
      rules={[
        {
          validator(rule, value) {
            let errMsg = '';
            const hasOptValue = options.find((item) => item?.value === value);
            if (
              !value &&
              value !== 0 &&
              !hasOptValue &&
              !(all && allValue === value)
            ) {
              errMsg = required ? `${messageLabel}!` : '';
            }
            if (errMsg) {
              return Promise.reject(errMsg);
            }
            return Promise.resolve();
          },
        },
      ]}
      {...restProps}
    >
      <RadioWrapper
        name={restProps.name}
        dependencies={restProps?.dependencies}
        options={options}
        request={request}
        disabled={disabled ?? formDisabled}
        debounceTime={debounceTime}
        outLoading={spin}
        all={all}
        allValue={allValue}
        allLabel={allLabel}
        notDependRender={notDependRender}
        requestOptions={requestOptions}
        radioProps={radioProps}
      />
    </LFormItem>
  );
};

export default LFormItemRadio;

export type { LRadioOptions } from './base/RadioWrapper';
