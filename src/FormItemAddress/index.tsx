import type { CascaderProps, ColProps, InputProps } from 'antd';
import { Cascader, Col, Input, Row } from 'antd';
import { emptyArray, emptyObject } from 'lighting-design/constants';
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
   *@version 2.1.20
   *@memberof LFormItemAddressProps
   */
  options?: CascaderProps<DataNodeType>['options'];
  /**
   * 字段数组 如 ['location', 'address']
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormItemAddressProps
   */
  names: [LFormItemProps['name'], LFormItemProps['name']];
  /**
   * Input组件的props
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormItemAddressProps
   */
  inputProps?: InputProps;
  /**
   * Cascader组件的props
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormItemAddressProps
   */
  cascaderProps?: CascaderProps<DataNodeType>;
  /**
   * 输入框外层Form.Item的 Props
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormItemAddressProps
   */
  inputFormProps?: LFormItemProps;
  /**
   *  级联组件外层Form.Itme的 Props
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormItemAddressProps
   */
  cascaderFormProps?: LFormItemProps;
  /**
   *  输入框外层Col 组件的 Props
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormItemAddressProps
   */
  inputColProps?: ColProps;
  /**
   *  级联组件外层Col 组件的 Props
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormItemAddressProps
   */
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
  size,
  options = emptyArray,
  placeholder = ['请选择省/市/区', '请输入详细地址'],
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
              size={size}
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
              size={size}
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
