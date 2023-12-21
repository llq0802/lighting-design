import { DownOutlined } from '@ant-design/icons';
import { useControllableValue } from 'ahooks';
import type { PopoverProps, SelectProps } from 'antd';
import { Popover, Select } from 'antd';
import classnames from 'classnames';
import { emptyObject } from 'lighting-design/constants';
import type { ReactNode } from 'react';
import React, { cloneElement, useRef } from 'react';

const prefixCls = 'lightd-trigger';

type FieldNames = {
  label: string;
  value: string;
};

type ValueType = {
  [key: string]: string | string[] | number | number[] | undefined;
  value?: string | string[] | number | number[] | undefined;
  babel?: string | string[] | number | number[] | undefined;
};

export type LTriggerProps = {
  /**
   * 是否把传入子组件 value 的值 从 value.value 变为 { value: xxx, label: xxx } 的格式
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  labelInValue?: boolean;
  /**
   * 显示的模式
   * @author 李岚清 <https://github.com/llq0802>
   * @type { 'default' | 'tag' }
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  value?: ValueType;
  /**
   * 显示的模式
   * @author 李岚清 <https://github.com/llq0802>
   * @type { 'default' | 'tag' }
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  defaultValue?: ValueType;
  /**
   * 显示的模式
   * @author 李岚清 <https://github.com/llq0802>
   * @type { 'default' | 'tag' }
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  onChange?: (val: ValueType) => void;
  /**
   * 显示的模式
   * @author 李岚清 <https://github.com/llq0802>
   * @type { 'default' | 'tag' }
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  onOpenChange?: (b: boolean) => void;
  /**
   * 显示的模式
   * @author 李岚清 <https://github.com/llq0802>
   * @type { 'default' | 'tag' }
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  mode?: 'default' | 'tag';
  /**
   * 是否打开
   * @author 李岚清 <https://github.com/llq0802>
   * @type { boolean }
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   *
   */
  open?: boolean;
  /**
   * 是否打开
   * @author 李岚清 <https://github.com/llq0802>
   * @type { boolean }
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   *
   */
  defaultOpen?: boolean;
  /**
   *  组件宽度
   * @author 李岚清 <https://github.com/llq0802>
   * @type { number | string }
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   *  */
  width?: number | string;
  /**
   * 弹出层的类名
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  overlayClassName?: string;
  /**
   * 弹出层方向
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  placement?: PopoverProps['placement'];
  /**
   * 弹出层样式
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  overlayStyle?: PopoverProps['overlayStyle'];
  /**
   * 自定义弹出层的挂载
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  getPopupContainer?: PopoverProps['getPopupContainer'];
  /**
   * 弹出层关闭时是否销毁 children 组件
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  destroyOnHide?: PopoverProps['destroyTooltipOnHide'];
  /**
   * 修改弹出层的箭头的显示状态以及修改箭头是否指向目标元素中心
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  overlayArrow?: PopoverProps['arrow'];
  /**
   * 自定义配置字段名称 label为展示名称的字段 value 为字段的值
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   * @example  fieldNames = {{
   *  label:'name',
   *  value:'id'
   * }}
   */
  fieldNames?: FieldNames;
  /**
   * 在mode='tag'时自定义标签
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  tagRender?: (
    props: Record<string, any>,
  ) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  /**
   * children 组件会接受到 open，setOpen，value，onChange 必须在 children 组件中绑定 value，onChange 才会收集到数据
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  children: ReactNode;
  selectProps?: SelectProps;
  popoverProps?: PopoverProps;
} & Pick<
  SelectProps,
  | 'allowClear'
  | 'disabled'
  | 'placeholder'
  | 'style'
  | 'size'
  | 'suffixIcon'
  | 'bordered'
  | 'className'
  | 'style'
>;

const LTrigger: React.FC<LTriggerProps> = (props) => {
  const {
    labelInValue = false,
    mode: outMode = 'default',
    width = 250,
    bordered = true,
    allowClear = true,
    suffixIcon,
    className,
    size,
    fieldNames = { label: 'label', value: 'value' } as FieldNames,
    placement = 'bottomLeft',
    disabled = false,
    placeholder = '请选择',
    style,
    tagRender,

    overlayArrow = false,
    overlayClassName,
    overlayStyle,
    getPopupContainer,
    destroyOnHide,

    children,
    selectProps = emptyObject,
    popoverProps = emptyObject,
  } = props;
  const selectRef = useRef<any>();

  const [isOpen, setIsOpen] = useControllableValue<boolean>(props, {
    defaultValue: false,
    defaultValuePropName: 'defaultOpen',
    valuePropName: 'open',
    trigger: 'onOpenChange',
  });

  const [state, setState] = useControllableValue<ValueType>(props, {
    defaultValue: props.defaultValue,
    defaultValuePropName: 'defaultValue',
    valuePropName: 'value',
    trigger: 'onChange',
  });
  const content = cloneElement(children, {
    // @ts-ignore
    value: labelInValue ? state : state?.[fieldNames.value],
    onChange: setState,
    open: isOpen,
    setOpen: setIsOpen,
  });

  const innerSuffixIcon = suffixIcon || (
    <DownOutlined
      style={{
        transition: '0.3s',
        transform: `rotate(${isOpen ? -180 : 0}deg)`,
      }}
    />
  );

  const value = state?.[fieldNames.label] === 0 ? 0 : state?.[fieldNames.label] || void 0;

  return (
    <Popover
      {...popoverProps}
      arrow={overlayArrow}
      content={content}
      open={isOpen}
      trigger="click"
      rootClassName={`${prefixCls}-overlay`}
      placement={placement}
      onOpenChange={(b) => {
        selectRef.current?.blur?.();
        setIsOpen(b);
      }}
      getPopupContainer={getPopupContainer}
      destroyTooltipOnHide={destroyOnHide}
      overlayClassName={overlayClassName}
      overlayStyle={overlayStyle}
    >
      <Select
        {...selectProps}
        ref={selectRef}
        className={classnames(prefixCls, className)}
        style={{ width, ...style }}
        removeIcon={false}
        showSearch={false}
        virtual={false}
        size={size}
        bordered={bordered}
        allowClear={allowClear}
        suffixIcon={innerSuffixIcon}
        placeholder={placeholder}
        disabled={disabled}
        fieldNames={fieldNames}
        tagRender={tagRender}
        mode={outMode === 'default' ? void 0 : 'multiple'}
        onChange={setState}
        value={value}
        notFoundContent={null}
        options={void 0}
        onInputKeyDown={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      />
    </Popover>
  );
};

export default LTrigger;
