import { DownOutlined } from '@ant-design/icons';
import { useControllableValue } from 'ahooks';
import { Popover, Select } from 'antd';
import classnames from 'classnames';
import { emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { cloneElement, isValidElement, useMemo } from 'react';
import type { LTriggerProps } from './interface';

const prefixCls = 'lightd-trigger';

const LTrigger: FC<LTriggerProps> = (props) => {
  const {
    labelInValue = false,
    allowClear = true,
    disabled = false,
    overlayArrow = false,
    destroyOnHide = false,
    mode: outMode = 'default',
    width = 250,
    variant,
    suffixIcon,
    className,
    size,
    fieldNames = { label: 'label', value: 'value' },
    placement = 'bottomLeft',
    placeholder = '请选择',
    overlayInnerStyle,
    style,
    tagRender,
    overlayClassName,
    overlayStyle,
    getPopupContainer,
    children,
    selectProps = emptyObject,
    popoverProps = emptyObject,
  } = props;

  const valueKey = fieldNames?.value as string;
  const labelKey = fieldNames?.label as string;

  const [isOpen, setIsOpen] = useControllableValue<boolean>(props, {
    defaultValue: false,
    defaultValuePropName: 'defaultOpen',
    valuePropName: 'open',
    trigger: 'onOpenChange',
  });

  const [state, setState] = useControllableValue(props, {
    defaultValue: props.defaultValue,
    defaultValuePropName: 'defaultValue',
    valuePropName: 'value',
    trigger: 'onChange',
  });
  const childMode = useMemo(() => {
    // 'checkboxTag' | 'radioTag' | 'checkbox' | 'radio';
    if (outMode === 'default') return 'radio';
    if (outMode === 'tag') return 'radioTag';
    return outMode;
  }, []);

  const content = isValidElement(children)
    ? cloneElement(children, {
        // @ts-ignore
        value: labelInValue ? state : state?.[valueKey],
        onChange: setState,
        open: isOpen,
        setOpen: setIsOpen,
        labelInValue,
        mode: childMode,
      })
    : children;

  const innerSuffixIcon = suffixIcon || (
    <DownOutlined
      style={{
        transition: '0.3s',
        transform: `rotate(${isOpen ? -180 : 0}deg)`,
      }}
    />
  );

  const value = state?.[labelKey] === 0 ? 0 : state?.[labelKey] || void 0;

  const selectMode = useMemo(() => {
    if (outMode === 'default' || outMode === 'radio' || outMode === 'checkbox') {
      return void 0;
    }
    return 'multiple';
  }, []);

  return (
    <Popover
      {...popoverProps}
      arrow={overlayArrow}
      content={content}
      open={isOpen}
      trigger="click"
      rootClassName={`${prefixCls}-overlay`}
      placement={placement}
      onOpenChange={(b) => setIsOpen(b)}
      getPopupContainer={getPopupContainer}
      destroyTooltipOnHide={destroyOnHide}
      overlayClassName={overlayClassName}
      overlayStyle={overlayStyle}
      overlayInnerStyle={overlayInnerStyle}
    >
      <Select
        {...selectProps}
        removeIcon={false}
        showSearch={false}
        virtual={false}
        options={void 0}
        popupMatchSelectWidth={false}
        defaultActiveFirstOption={false}
        notFoundContent={null}
        className={classnames(prefixCls, className)}
        style={{ width, ...style }}
        size={size}
        variant={variant}
        allowClear={allowClear}
        suffixIcon={innerSuffixIcon}
        placeholder={placeholder}
        disabled={disabled}
        fieldNames={fieldNames}
        tagRender={tagRender}
        mode={selectMode}
        onChange={setState}
        value={value}
        onInputKeyDown={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      />
    </Popover>
  );
};

export default LTrigger;
export * from './interface';
