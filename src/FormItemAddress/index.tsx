import type { CascaderProps, ColProps, InputProps } from 'antd';
import { Cascader, Col, Input, Row } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem';
import LFormItem from 'lighting-design/FormItem';
import type { FC } from 'react';
import { useContext } from 'react';
export interface LFormItemAddressProps<DataNodeType = any>
  extends Omit<LFormItemProps, 'name'> {
  /**
   *数据源
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.2
   *@memberof LFormItemAddressProps
   */
  options?: CascaderProps<DataNodeType>['options'];
  /**
   * 字段数组 如 ['location', 'address']
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.2
   *@memberof LFormItemAddressProps
   */
  names: [LFormItemProps['name'], LFormItemProps['name']];
  inputProps?: InputProps;
  cascaderProps?: CascaderProps<DataNodeType>;
  inputFormProps?: LFormItemProps;
  cascaderFormProps?: LFormItemProps;
  inputColProps?: ColProps;
  cascaderColProps?: ColProps;
  disabled?: boolean;
}

const colSpan1 = {
  xs: 24,
  md: 12,
  lg: 6,
  xxl: 8,
};

const colSpan2 = {
  xs: 24,
  md: 12,
  lg: 18,
  xxl: 16,
};

const LFormItemAddress: FC<LFormItemAddressProps> = ({
  names,
  label,
  required = false,
  disabled,
  options = [],
  placeholder = ['请选择省/市/区', '请输入详细地址'],
  inputFormProps = {},
  cascaderFormProps = {},
  cascaderProps = {},
  inputProps = {},
  inputColProps = {},
  cascaderColProps = {},
  style,
  ...restProps
}) => {
  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem
      required={required}
      label={label}
      style={{ marginBottom: 0, ...style }}
      {...restProps}
    >
      <Row gutter={8}>
        <Col {...colSpan1} {...inputColProps}>
          <LFormItem
            name={names[0]}
            rules={[
              {
                validator(rule, value) {
                  let errMsg = '';
                  if (!value || value?.length <= 0) {
                    errMsg = required ? `${placeholder[0]}` : '';
                  }
                  if (errMsg) {
                    return Promise.reject(errMsg);
                  }
                  return Promise.resolve();
                },
              },
            ]}
            {...cascaderFormProps}
          >
            <Cascader
              disabled={disabled ?? formDisabled}
              options={options}
              placeholder={`${placeholder[0]}`}
              {...cascaderProps}
            />
          </LFormItem>
        </Col>
        <Col {...colSpan2} {...cascaderColProps}>
          <LFormItem
            name={names[1]}
            rules={[
              {
                validator(rule, value) {
                  let errMsg = '';
                  if (!value) {
                    errMsg = required ? `${placeholder[1]}` : '';
                  }
                  if (errMsg) {
                    return Promise.reject(errMsg);
                  }
                  return Promise.resolve();
                },
              },
            ]}
            {...inputFormProps}
          >
            <Input
              disabled={disabled ?? formDisabled}
              placeholder={`${placeholder[1]}`}
              allowClear
              autoComplete="off"
              {...inputProps}
            />
          </LFormItem>
        </Col>
      </Row>
    </LFormItem>
  );
};

export default LFormItemAddress;
