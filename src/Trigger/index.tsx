import { DownOutlined } from '@ant-design/icons';
import { useControllableValue } from 'ahooks';
import { Popover, Select } from 'antd';
import classnames from 'classnames';
import { isValueTrue } from 'lighting-design/_utils';
import { emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { cloneElement, isValidElement, useMemo } from 'react';
import type { LTriggerProps } from './interface';

const prefixCls = 'lightd-trigger';

const LTrigger: FC<LTriggerProps> = (props) => {
  const {
    maxTagCount,
    labelInValue = false,
    allowClear = true,
    disabled = false,
    overlayArrow = false,
    destroyOnHide = false,
    mode: outMode = 'radio',
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
    split = ' / ',
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
    defaultValue: void 0,
    defaultValuePropName: 'defaultValue',
    valuePropName: 'value',
    trigger: 'onChange',
  });
  const stateLabel: any = state?.[labelKey];
  const stateValue = state?.[valueKey];

  const selectMode = useMemo(() => {
    if (outMode === 'radio' || outMode === 'checkbox') {
      return void 0;
    }
    return 'multiple';
  }, []);

  const innerValue = useMemo(() => {
    if (outMode === 'checkbox' && Array.isArray(stateLabel)) {
      return stateLabel?.join(split) || void 0;
    }

    if (outMode === 'radioTag') {
      if (!Array.isArray(stateLabel)) {
        return isValueTrue(stateLabel) ? [stateLabel] : void 0;
      }
      return stateLabel || void 0;
    }
    return isValueTrue(stateLabel) ? stateLabel : void 0;
  }, [state]);

  const innerSuffixIcon = suffixIcon || (
    <DownOutlined
      style={{
        transition: '0.3s',
        transform: `rotate(${isOpen ? -180 : 0}deg)`,
      }}
    />
  );

  const contentProps = {
    // @ts-ignore
    value: labelInValue ? state : stateValue,
    onChange: setState,
    open: isOpen,
    setOpen: setIsOpen,
    labelInValue,
    fieldNames,
    mode: outMode,
  };

  const content = isValidElement(children)
    ? cloneElement(children, contentProps)
    : typeof children === 'function'
    ? cloneElement(children?.(contentProps), contentProps)
    : children;

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
        maxTagCount={maxTagCount}
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
        value={innerValue}
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
