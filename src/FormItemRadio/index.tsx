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
  dependencies?: string[];
  debounceTime?: number;
  /**
   * @see 自定义loading效果 具体参考(https://ant.design/components/spin-cn/#api)
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

            if (!value && !hasOptValue && !(all && allValue === value)) {
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
        radioProps={radioProps}
      />
    </LFormItem>
  );
};

export default LFormItemRadio;

export type { LRadioOptions } from './base/RadioWrapper';
