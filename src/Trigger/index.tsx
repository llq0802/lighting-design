// import { useControllableValue } from 'ahooks';
// import type { SelectProps } from 'antd';
// import { Select } from 'antd';
// import classnames from 'classnames';
// import type { FC, ReactElement, ReactNode } from 'react';
// import { cloneElement, isValidElement } from 'react';

// export type LTriggerProps = {
//   /**
//    * 显示的模式
//    * @author 李岚清 <https://github.com/llq0802>
//    * @type { 'default' | 'tag' }
//    * @version 2.1.20
//    * @memberof LTriggerProps
//    */
//   mode?: 'default' | 'tag';
//   /**
//    * 是否打开
//    * @author 李岚清 <https://github.com/llq0802>
//    * @type { boolean }
//    * @version 2.1.20
//    * @memberof LTriggerProps
//    *
//    */
//   open: boolean;
//   /**
//    *  组件宽度
//    * @author 李岚清 <https://github.com/llq0802>
//    * @type { number | string }
//    * @version 2.1.20
//    * @memberof LTriggerProps
//    *  */
//   width: number | string;
//   /**
//    * 弹出层宽度 当值小于选择框宽度时会被忽略
//    * @author 李岚清 <https://github.com/llq0802>
//    * @type { boolean }
//    * @version 2.1.20
//    * @memberof LTriggerProps
//    */
//   dropdownWidth: number;
//   /**
//    * 自定义配置字段名称 label为展示名称的字段 value为字段的值
//    * @author 李岚清 <https://github.com/llq0802>
//    * @version 2.1.20
//    * @memberof LTriggerProps
//    * @example  fieldNames = {{
//    *  label:'name',
//    *  value:'id'
//    * }}
//    */
//   fieldNames?: {
//     label: string;
//     value: string;
//   };
//   className: string;
//   /**
//    * 在mode='tag'时自定义标签
//    * @author 李岚清 <https://github.com/llq0802>
//    * @version 2.1.20
//    * @memberof LTriggerProps
//    */
//   tagRender: (props: Record<string, any>) => ReactNode;
//   /**
//    * children 组件会接受到 open，setOpen，value，onChange 必须在 children 组件中绑定 value，onChange 才会收集到数据
//    * @author 李岚清 <https://github.com/llq0802>
//    * @version 2.1.20
//    * @memberof LTriggerProps
//    */
//   children: ReactElement;
//   /**
//    * 自定义清除图标
//    * @author 李岚清 <https://github.com/llq0802>
//    * @version 2.1.20
//    * @memberof LTriggerProps
//    */
//   clearIcon: SelectProps['clearIcon'];
//   onDropdownOpenChange: SelectProps['onDropdownVisibleChange'];
//   selectProps: SelectProps;
// } & Pick<
//   SelectProps,
//   | 'value'
//   | 'onChange'
//   | 'placement'
//   | 'allowClear'
//   | 'disabled'
//   | 'placeholder'
//   | 'style'
//   | 'getPopupContainer'
//   | 'size'
//   | 'suffixIcon'
//   | 'dropdownStyle'
//   | 'popupClassName'
// >;

// const prefixCls = 'lightd-trigger';

// const LTrigger: FC<Partial<LTriggerProps>> = (props) => {
//   const {
//     mode: outMode = 'default',
//     width = 250,
//     dropdownWidth = 500,
//     popupClassName,
//     allowClear = true,
//     suffixIcon,
//     clearIcon,
//     className,
//     size,
//     getPopupContainer,
//     fieldNames = { label: 'label', value: 'value' },
//     placement = 'bottomLeft',
//     disabled = false,
//     placeholder = '请选择',
//     style,
//     dropdownStyle,
//     tagRender,
//     children,
//     selectProps = {},
//   } = props;

//   const [isOpen, setIsOpen] = useControllableValue<boolean>(props, {
//     defaultValue: false,
//     defaultValuePropName: 'defaultOpen',
//     valuePropName: 'open',
//     trigger: 'onOpenChange',
//   });
//   const [state, setState] = useControllableValue<Record<string, any>>(props, {
//     defaultValue: { [fieldNames.label]: void 0, [fieldNames.value]: void 0 },
//     defaultValuePropName: 'defaultValue',
//     valuePropName: 'value',
//     trigger: 'onChange',
//   });

//   const isTag = outMode === 'tag' && Array.isArray(state);

//   console.log('state', state);

//   const isComponent = isValidElement(children);
//   const dropdownRender = !isComponent
//     ? void 0
//     : () => (
//         <div
//           style={{ width: '100%' }}
//           className={`${prefixCls}-popup`}
//           onMouseDown={(e) => {
//             e.preventDefault();
//             e.stopPropagation();
//           }}
//         >
//           {cloneElement(children, {
//             // @ts-ignore
//             value: state?.[fieldNames.value],
//             onChange: setState,
//             open: isOpen,
//             setOpen: setIsOpen,
//           })}
//         </div>
//       );

//   return (
//     <Select
//       onInputKeyDown={(e) => {
//         e.stopPropagation();
//         e.preventDefault();
//       }}
//       removeIcon={false}
//       showSearch={false}
//       size={size}
//       clearIcon={clearIcon}
//       allowClear={allowClear}
//       suffixIcon={suffixIcon}
//       placeholder={placeholder}
//       placement={placement}
//       disabled={disabled}
//       popupClassName={popupClassName}
//       dropdownStyle={dropdownStyle}
//       fieldNames={fieldNames}
//       getPopupContainer={getPopupContainer}
//       popupMatchSelectWidth={dropdownWidth}
//       tagRender={tagRender}
//       {...selectProps}
//       mode={outMode === 'default' ? void 0 : 'multiple'}
//       style={{ width: width, ...style }}
//       className={classnames(prefixCls, className)}
//       dropdownRender={dropdownRender}
//       onChange={setState}
//       value={
//         !selectProps?.labelInValue ? state?.[fieldNames.label] || void 0 : state
//       }
//       // open={isOpen}
//       open
//       onDropdownVisibleChange={(visible) => setIsOpen(visible)}
//     />
//   );
// };

// export default LTrigger;

import { DownOutlined } from '@ant-design/icons';
import { useControllableValue, useUpdateEffect } from 'ahooks';
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
   * 显示的模式
   * @author 李岚清 <https://github.com/llq0802>
   * @type { 'default' | 'tag' }
   * @version 2.1.20
   * @memberof LTriggerProps
   */
  value?: ValueType;
  /**
   * 显示的模式
   * @author 李岚清 <https://github.com/llq0802>
   * @type { 'default' | 'tag' }
   * @version 2.1.20
   * @memberof LTriggerProps
   */
  defaultValue?: ValueType;
  /**
   * 显示的模式
   * @author 李岚清 <https://github.com/llq0802>
   * @type { 'default' | 'tag' }
   * @version 2.1.20
   * @memberof LTriggerProps
   */
  onChange?: (val: ValueType) => void;
  /**
   * 显示的模式
   * @author 李岚清 <https://github.com/llq0802>
   * @type { 'default' | 'tag' }
   * @version 2.1.20
   * @memberof LTriggerProps
   */
  onOpenChange?: (b: boolean) => void;
  /**
   * 显示的模式
   * @author 李岚清 <https://github.com/llq0802>
   * @type { 'default' | 'tag' }
   * @version 2.1.20
   * @memberof LTriggerProps
   */
  mode?: 'default' | 'tag';
  /**
   * 是否打开
   * @author 李岚清 <https://github.com/llq0802>
   * @type { boolean }
   * @version 2.1.20
   * @memberof LTriggerProps
   *
   */
  open?: boolean;
  /**
   * 是否打开
   * @author 李岚清 <https://github.com/llq0802>
   * @type { boolean }
   * @version 2.1.20
   * @memberof LTriggerProps
   *
   */
  defaultOpen?: boolean;
  /**
   *  组件宽度
   * @author 李岚清 <https://github.com/llq0802>
   * @type { number | string }
   * @version 2.1.20
   * @memberof LTriggerProps
   *  */
  width?: number | string;
  /**
   * 弹出层的类名
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.20
   * @memberof LTriggerProps
   */
  overlayClassName?: string;
  /**
   * 弹出层方向
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.20
   * @memberof LTriggerProps
   */
  placement?: PopoverProps['placement'];
  /**
   * 弹出层样式
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.20
   * @memberof LTriggerProps
   */
  overlayStyle?: PopoverProps['overlayStyle'];
  /**
   * 自定义弹出层的挂载
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.20
   * @memberof LTriggerProps
   */
  getPopupContainer?: PopoverProps['getPopupContainer'];
  /**
   * 弹出层关闭时是否销毁 children 组件
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.20
   * @memberof LTriggerProps
   */
  destroyOnHide?: PopoverProps['destroyTooltipOnHide'];
  /**
   * 修改弹出层的箭头的显示状态以及修改箭头是否指向目标元素中心
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.20
   * @memberof LTriggerProps
   */
  overlayArrow?: PopoverProps['arrow'];
  /**
   * 自定义配置字段名称 label为展示名称的字段 value 为字段的值
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.20
   * @memberof LTriggerProps
   * @example  fieldNames = {{
   *  label:'name',
   *  value:'id'
   * }}
   */
  fieldNames?: FieldNames;
  /**
   * 在mode='tag'时自定义标签
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.20
   * @memberof LTriggerProps
   */
  tagRender?: (
    props: Record<string, any>,
  ) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  /**
   * children 组件会接受到 open，setOpen，value，onChange 必须在 children 组件中绑定 value，onChange 才会收集到数据
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.20
   * @memberof LTriggerProps
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
    // Select属性
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

    // Popover属性
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
    defaultValue: { [fieldNames.label]: void 0, [fieldNames.value]: void 0 },
    defaultValuePropName: 'defaultValue',
    valuePropName: 'value',
    trigger: 'onChange',
  });

  const content = cloneElement(children, {
    // @ts-ignore
    value: state?.[fieldNames.value],
    onChange: setState,
    open: isOpen,
    setOpen: setIsOpen,
  });

  useUpdateEffect(() => {
    if (Object.prototype.toString.call(state).slice(8, -1) !== 'Object') {
      setState({
        [fieldNames.label]: void 0,
        [fieldNames.value]: void 0,
      });
    }
  }, [state]);
  const innerSuffixIcon = suffixIcon || (
    <DownOutlined
      style={{
        transition: '0.3s',
        transform: `rotate(${isOpen ? -180 : 0}deg)`,
      }}
    />
  );

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
        style={{ width: width, ...style }}
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
        value={state?.[fieldNames.label] ?? void 0}
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
