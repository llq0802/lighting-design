import type { CascaderProps, ColProps, InputProps } from 'antd';
import { Cascader, Col, Input, Row } from 'antd';
import type { FC } from 'react';
import type { LFormItemProps } from '../../base/BaseFromItem';
import LFormItem from '../../base/BaseFromItem';

export interface LFormItemAddressProps<DataNodeType = any> extends Omit<LFormItemProps, 'name'> {
  options?: CascaderProps<DataNodeType>['options'];
  names: [LFormItemProps['name'], LFormItemProps['name']]; // 如 ['location', 'address']
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
  disabled = false,
  options = [],
  placeholder = ['省/市/区', '详细地址'],
  inputFormProps = {},
  cascaderFormProps = {},
  cascaderProps = {},
  inputProps = {},
  inputColProps = {},
  cascaderColProps = {},
  style,
  ...restProps
}) => {
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
                    errMsg = required ? `请选择${placeholder[0]}` : '';
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
              disabled={disabled}
              options={options}
              placeholder={`请选择${placeholder[0]}`}
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
                    errMsg = required ? `请输入${placeholder[1]}` : '';
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
              disabled={disabled}
              placeholder={`请输入${placeholder[1]}`}
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
