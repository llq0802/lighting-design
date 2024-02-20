import type { CheckboxProps } from 'antd';
import type { CheckboxOptionType } from 'antd/lib/checkbox';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import type { LFormItemSelectProps } from 'lighting-design/FormItemSelect';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext } from 'react';
import type { CheckboxWrapperProps } from './base/CheckboxWrapper';
import CheckboxWrapper from './base/CheckboxWrapper';
export interface LFormItemCheckboxProps
  extends LFormItemProps,
    Pick<CheckboxWrapperProps, 'beforeAll'>,
    Pick<LFormItemSelectProps, 'fieldNames' | 'actionRef' | 'requestOptions' | 'request' | 'spin'> {
  /**
   *数据源
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemCheckboxProps
   *@See (https://ant.design/components/spin-cn/#api)
   */
  options?: CheckboxOptionType[] | Record<string, any>[];
  checkboxProps?: CheckboxProps;
}

const LFormItemCheckbox: FC<LFormItemCheckboxProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  size,
  fieldNames,
  actionRef,
  request,
  beforeAll,
  options = emptyArray,
  checkboxProps = emptyObject,
  disabled,
  required,
  spin,
  requestOptions = emptyObject,
  ...restProps
}) => {
  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem required={required} _isSelectType {...restProps}>
      <CheckboxWrapper
        dependencies={restProps?.dependencies}
        actionRef={actionRef}
        options={options}
        request={request}
        requestOptions={requestOptions}
        outLoading={spin}
        disabled={disabled ?? formDisabled}
        fieldNames={fieldNames}
        beforeAll={beforeAll}
        {...checkboxProps}
      />
    </LFormItem>
  );
};

export type { LCheckboxBeforeAllProps, LCheckboxOptions } from './base/CheckboxWrapper';

export default LFormItemCheckbox;
