import type { SelectProps, SpinProps } from 'antd';
import type { FC } from 'react';
import { usePlaceholder } from '../../../utils';
import type { LFormItemProps } from '../../base/BaseFromItem';
import LFormItem from '../../base/BaseFromItem';
import type { RadioWrapperProps } from './base/RadioWrapper';
import RadioWrapper from './base/RadioWrapper';

export interface LFormItemRadioProps
  extends LFormItemProps,
    Pick<RadioWrapperProps, 'radioProps' | 'request' | 'all' | 'allValue' | 'allLabel'>,
    Pick<SelectProps, 'options'> {
  dependencies?: string[];
  debounceTime?: number;
  /**
   * @name 自定义loading效果 具体参考(https://4x.ant.design/components/spin-cn/#API)
   */
  spin?: SpinProps;
}

const LFormItemRadio: FC<LFormItemRadioProps> = ({
  request,
  debounceTime,
  all = false,
  allValue = '',
  allLabel = '全部',
  options = [],
  disabled,
  radioProps = {},
  placeholder,
  spin,

  required,
  ...restProps
}) => {
  // const messageLabel = useMemo(() => getFormItemLabel(restProps), [restProps]);
  const messageLabel = usePlaceholder({
    placeholder,
    restProps,
    isSelectType: true,
  });
  return (
    <LFormItem
      required={required}
      isSelectType
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
        dependencies={restProps?.dependencies}
        options={options}
        request={request}
        disabled={disabled}
        debounceTime={debounceTime}
        outLoading={spin}
        all={all}
        allValue={allValue}
        allLabel={allLabel}
        radioProps={radioProps}
      />
    </LFormItem>
  );
};

export default LFormItemRadio;
