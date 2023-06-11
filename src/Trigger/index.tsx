import { useControllableValue } from 'ahooks';
import type { SelectProps } from 'antd';
import { Select } from 'antd';
import classnames from 'classnames';
import type { FC, ReactElement, ReactNode } from 'react';
import { cloneElement, isValidElement } from 'react';

export type LTriggerProps = {
  /** 显示的模式 */
  mode?: 'default' | 'tag';
  /** 是否打开 */
  open: boolean;
  /** 宽度 */
  width: number | string;
  /** 弹窗宽度 */
  dropdownWidth: number;
  /** 配置字段 label为展示名称的字段 value为字段的值*/
  fieldNames?: {
    label: string;
    value: string;
  };
  className: string;
  tagRender: (props: Record<string, any>) => ReactNode;
  children: ReactElement;
  /** 自定义清除图标 */
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
      mode={outMode === 'default' ? undefined : 'multiple'}
      style={{ width: width, ...style }}
      className={classnames(prefixCls, className)}
      dropdownRender={dropdownRender}
      onChange={setState}
      value={!selectProps?.labelInValue ? state?.[fieldNames.label] : state}
      open={isOpen}
      onDropdownVisibleChange={(visible) => setIsOpen(visible)}
    />
  );
};

export default LTrigger;
