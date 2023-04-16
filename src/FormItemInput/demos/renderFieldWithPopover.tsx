import type { PopoverProps } from 'antd';
import { Popover } from 'antd';
import React from 'react';

const getPopupContainer = (e: HTMLElement) =>
  (e?.parentNode || document.body) as HTMLElement;

function renderFieldWithPopover(popoverProps?: PopoverProps) {
  return (dom: React.ReactElement) => {
    const WrapperComp = (fieldProps: any) => {
      return (
        <Popover
          trigger="focus"
          getPopupContainer={getPopupContainer}
          {...popoverProps}
        >
          {React.cloneElement(dom, fieldProps)}
        </Popover>
      );
    };
    return <WrapperComp />;
  };
}

export default renderFieldWithPopover;
