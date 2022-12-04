import type { SelectProps } from 'antd';
import type { FC } from 'react';
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
}

const LFormItemRadio: FC<LFormItemRadioProps> = ({
  request,
  debounceTime,
  all = false,
  allValue = '',
  allLabel = '全部',
  options = [],
  radioProps = {},

  required,
  ...restProps
}) => {
  return (
    <LFormItem required={required} isSelectType {...restProps}>
      <RadioWrapper
        dependencies={restProps?.dependencies}
        options={options}
        request={request}
        debounceTime={debounceTime}
        all={all}
        allValue={allValue}
        allLabel={allLabel}
        radioProps={radioProps}
      />
    </LFormItem>
  );
};

export default LFormItemRadio;
