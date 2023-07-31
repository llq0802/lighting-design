import { useControllableValue } from 'ahooks';
import type { SelectProps } from 'antd';
import { Select } from 'antd';
import classnames from 'classnames';
import type { FC, ReactElement, ReactNode } from 'react';
import { cloneElement, isValidElement } from 'react';

export type LTriggerProps = {
  /**
   * 显示的模式
   * @author 李岚清 <https://github.com/llq0802>
   * @type { 'default' | 'tag' }
   * @version 2.1.12
   * @memberof LTriggerProps
   */
  mode?: 'default' | 'tag';
  /**
   * 是否打开
   * @author 李岚清 <https://github.com/llq0802>
   * @type { boolean }
   * @version 2.1.12
   * @memberof LTriggerProps
   *
   */
  open: boolean;
  /**
   *  组件宽度
   * @author 李岚清 <https://github.com/llq0802>
   * @type { number | string }
   * @version 2.1.12
   * @memberof LTriggerProps
   *  */
  width: number | string;
  /**
   * 弹出层宽度 当值小于选择框宽度时会被忽略
   * @author 李岚清 <https://github.com/llq0802>
   * @type { boolean }
   * @version 2.1.12
   * @memberof LTriggerProps
   */
  dropdownWidth: number;
  /**
   * 自定义配置字段名称 label为展示名称的字段 value为字段的值
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.12
   * @memberof LTriggerProps
   * @example  fieldNames = {{
   *  label:'name',
   *  value:'id'
   * }}
   */
  fieldNames?: {
    label: string;
    value: string;
  };
  className: string;
  /**
   * 在mode='tag'时自定义标签
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.12
   * @memberof LTriggerProps
   */
  tagRender: (props: Record<string, any>) => ReactNode;
  /**
   * children 组件会接受到 open，setOpen，value，onChange 必须在 children 组件中绑定 value，onChange 才会收集到数据
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.12
   * @memberof LTriggerProps
   */
  children: ReactElement;
  /**
   * 自定义清除图标
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.12
   * @memberof LTriggerProps
   */
  clearIcon: SelectProps['clearIcon'];
  onDropdownOpenChange: SelectProps['onDropdownVisibleChange'];
  selectProps: SelectProps;
} & Pick<
  SelectProps,
  | 'value'
  | 'onChange'
  | 'placement'
  | 'allowClear'
  | 'disabled'
  | 'placeholder'
  | 'style'
  | 'getPopupContainer'
  | 'size'
  | 'suffixIcon'
  | 'dropdownStyle'
  | 'popupClassName'
>;

const prefixCls = 'lightd-trigger';

const LTrigger: FC<Partial<LTriggerProps>> = (props) => {
  const {
    mode: outMode = 'default',
    width = 250,
    dropdownWidth = 500,
    popupClassName,
    allowClear = true,
    suffixIcon,
    clearIcon,
    className,
    size,
    getPopupContainer,
    fieldNames = { label: 'label', value: 'value' },
    placement = 'bottomLeft',
    disabled = false,
    placeholder = '请选择',
    style,
    dropdownStyle,
    tagRender,
    children,
    selectProps = {},
  } = props;

  const [isOpen, setIsOpen] = useControllableValue<boolean>(props, {
    defaultValue: false,
    defaultValuePropName: 'defaultOpen',
    valuePropName: 'open',
    trigger: 'onOpenChange',
  });
  const [state, setState] = useControllableValue<Record<string, any>>(props, {
    defaultValue: { [fieldNames.label]: void 0, [fieldNames.value]: void 0 },
    defaultValuePropName: 'defaultValue',
    valuePropName: 'value',
    trigger: 'onChange',
  });

  const isComponent = isValidElement(children);
  const dropdownRender = !isComponent
    ? void 0
    : () => (
        <div
          style={{ width: '100%' }}
          className={`${prefixCls}-popup`}
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {cloneElement(children, {
            // @ts-ignore
            value: state?.[fieldNames.value],
            onChange: setState,
            open: isOpen,
            setOpen: setIsOpen,
          })}
        </div>
      );

  return (
    <Select
      onInputKeyDown={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
      removeIcon={false}
      showSearch={false}
      size={size}
      clearIcon={clearIcon}
      allowClear={allowClear}
      suffixIcon={suffixIcon}
      placeholder={placeholder}
      placement={placement}
      disabled={disabled}
      popupClassName={popupClassName}
      dropdownStyle={dropdownStyle}
      fieldNames={fieldNames}
      getPopupContainer={getPopupContainer}
      popupMatchSelectWidth={dropdownWidth}
      tagRender={tagRender}
      {...selectProps}
      mode={outMode === 'default' ? void 0 : 'multiple'}
      style={{ width: width, ...style }}
      className={classnames(prefixCls, className)}
      dropdownRender={dropdownRender}
      onChange={setState}
      value={
        !selectProps?.labelInValue ? state?.[fieldNames.label] || void 0 : state
      }
      open={isOpen}
      onDropdownVisibleChange={(visible) => setIsOpen(visible)}
    />
  );
};

export default LTrigger;
