import { useControllableValue, useMemoizedFn } from 'ahooks';
import type { PopoverProps, TooltipProps } from 'antd';
import { Popover } from 'antd';
import classNames from 'classnames';
import type { FC, ReactElement } from 'react';
import { cloneElement } from 'react';
import { transformColor } from '../utils';
import BaseColor, { prefixCls } from './BaseColor';
import './styles.less';

export interface PickerCommonProps {
  className?: string;
  value?: string;
  showText?: boolean;
  disabled?: boolean;
  onChange?: (colorStr: string) => void;
  colorMode?: 'hex' | 'rgb';
  placement?: TooltipProps['placement'];
  changeMethod?: 'onChange' | 'onChangeComplete';
  size?: 'small' | 'middle' | 'large';
}

export interface PickerWrapperProps extends PickerCommonProps, PopoverProps {
  children?: ReactElement | any;
  isNoChangeMethod?: boolean;
  [key: string]: any;
}

const PickerWrapper: FC<PickerWrapperProps> = ({
  style,
  value,
  onChange,
  children,
  className,
  showText = true,
  disabled = false,
  trigger = 'click',
  colorMode = 'hex',
  placement = 'bottomLeft',
  changeMethod = 'onChange',
  isNoChangeMethod = false,
  size = 'middle',
  ...restProps
}) => {
  const [open, setOpen] = useControllableValue<boolean>(restProps, {
    defaultValue: void 0,
    defaultValuePropName: 'defaultOpen',
    valuePropName: 'open',
    trigger: 'onOpenChange',
  });

  const handleChange = useMemoizedFn((color) => {
    onChange?.(transformColor(color, colorMode));
  });

  return (
    <BaseColor
      value={value}
      style={style}
      showText={showText}
      disabled={disabled}
      size={size}
      className={classNames(`${prefixCls}-picker`, className)}
      renderColor={(dom) =>
        disabled ? (
          dom
        ) : (
          <Popover
            arrow={false}
            content={
              isNoChangeMethod
                ? children
                : cloneElement(children, {
                    [changeMethod]: handleChange,
                    color: value,
                  })
            }
            trigger={trigger}
            open={open}
            onOpenChange={setOpen}
            placement={placement}
            overlayClassName={`${prefixCls}-overlay-normalize`}
            {...restProps}
          >
            {dom}
          </Popover>
        )
      }
    />
  );
};

export default PickerWrapper;
