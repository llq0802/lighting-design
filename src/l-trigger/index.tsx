import { DownOutlined } from '@ant-design/icons';
import { useControllableValue } from 'ahooks';
import { Popover, Select } from 'antd';
import { emptyObject } from 'lighting-design/constants';
import { isValueTrue } from 'lighting-design/utils';
import type { FC } from 'react';
import { cloneElement, isValidElement, useMemo } from 'react';
import type { LTriggerProps } from './interface';

const LTrigger: FC<LTriggerProps> = (props) => {
  const {
    labelInValue = false,
    popupArrow = false,
    destroyOnHidden,
    mode: outMode = 'radio',
    width = 250,
    placement = 'bottomLeft',
    placeholder = '请选择',
    getPopupContainer,
    children,
    split = ' / ',
    popoverProps = emptyObject,
    ...restProps
  } = props;
  const [isOpen, setIsOpen] = useControllableValue<boolean>(props, {
    defaultValue: false,
    defaultValuePropName: 'defaultOpen',
    valuePropName: 'open',
    trigger: 'onOpenChange',
  });
  const [state, setState] = useControllableValue(props, { defaultValue: void 0 as LTriggerProps['value'] });
  const stateLabel: any = state?.label;
  const stateValue = state?.value;

  const selectMode = useMemo(() => {
    if (outMode === 'radio' || outMode === 'checkbox') {
      return void 0;
    }
    return 'multiple';
  }, [outMode]);

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
  }, [state, outMode]);

  const innerSuffixIcon = (
    <DownOutlined
      style={{
        transition: '0.2s',
        transform: `rotate(${isOpen ? -180 : 0}deg)`,
      }}
    />
  );

  const contentProps = {
    value: labelInValue ? state : stateValue,
    onChange: setState,
    open: isOpen,
    setOpen: setIsOpen,
    labelInValue,
    mode: outMode,
  };

  const noSelectProps = {
    removeIcon: false,
    showSearch: false,
    virtual: false,
    options: void 0,
    popupMatchSelectWidth: false,
    defaultActiveFirstOption: false,
    notFoundContent: null,
  };

  const content = isValidElement(children)
    ? cloneElement(children, contentProps)
    : typeof children === 'function'
    ? cloneElement(children?.(contentProps), contentProps)
    : children;

  return (
    <Popover
      getPopupContainer={getPopupContainer}
      destroyOnHidden={destroyOnHidden}
      arrow={popupArrow}
      placement={placement}
      {...popoverProps}
      content={content}
      open={isOpen}
      trigger="click"
      onOpenChange={(b) => setIsOpen(b)}
    >
      <Select
        suffixIcon={innerSuffixIcon}
        {...restProps}
        {...noSelectProps}
        style={{ width, ...restProps?.style }}
        placeholder={placeholder}
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
