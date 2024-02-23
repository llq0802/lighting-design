import { Cascader, Col, Input, Row } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import LFormItem from 'lighting-design/FormItem';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext } from 'react';
import type { LFormItemAddressProps } from './interface';

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
  placeholder = ['请选择省/市/区', '请输入详细地址'],
  size,
  disabled = false,
  required = false,
  names,
  variant,
  options = emptyArray,
  inputFormProps = emptyObject,
  cascaderFormProps = emptyObject,
  cascaderProps = emptyObject,
  inputProps = emptyObject,
  inputColProps = emptyObject,
  cascaderColProps = emptyObject,
  style,
  ...restProps
}) => {
  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem required={required} style={{ marginBottom: 0, ...style }} {...restProps}>
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
              size={size}
              variant={variant}
              disabled={disabled || formDisabled}
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
              variant={variant}
              size={size}
              disabled={disabled || formDisabled}
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
export * from './interface';
