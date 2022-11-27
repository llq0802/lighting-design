import type { CascaderProps, ColProps, InputProps } from 'antd';
import { Cascader, Col, Input, Row } from 'antd';
import type { FC } from 'react';
import type { LFormItemProps } from '../FormItem/base/BaseFromItem';
import LFormItem from '../FormItem/base/BaseFromItem';

export interface LFormItemAddressProps<DataNodeType = any> extends Omit<LFormItemProps, 'name'> {
  options?: CascaderProps<DataNodeType>['options'];
  names: [LFormItemProps['name'], LFormItemProps['name']]; // 如 ['location', 'address']
  inputProps?: InputProps;
  cascaderProps?: CascaderProps<DataNodeType>;
  inputFormProps?: LFormItemProps;
  cascaderFormProps?: LFormItemProps;
  placeholders?: [string, string];
  inputColProps?: ColProps;
  cascaderColProps?: ColProps;
}

const LFormItemAddress: FC<LFormItemAddressProps> = ({
  names,
  label,
  required = false,
  options = [],
  placeholders = ['省/市/区', '详细地址'],
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
        <Col span={24} md={12} lg={8} {...inputColProps}>
          <LFormItem
            name={names[0]}
            rules={[
              {
                validator(rule, value) {
                  let errMsg = '';
                  if (!value || value.length <= 0) {
                    errMsg = required ? `请选择${placeholders[0]}` : '';
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
              placeholder={`请选择${placeholders[0]}`}
              options={options}
              {...cascaderProps}
            />
          </LFormItem>
        </Col>
        <Col span={24} md={12} lg={16} {...cascaderColProps}>
          <LFormItem
            name={names[1]}
            rules={[
              {
                validator(rule, value) {
                  let errMsg = '';
                  if (!value) {
                    errMsg = required ? `请输入${placeholders[1]}` : '';
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
              placeholder={`请输入${placeholders[1]}`}
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
