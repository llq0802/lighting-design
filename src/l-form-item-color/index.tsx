import { ColorPicker } from 'antd';
import { emptyObject } from 'lighting-design/constants';
import LFormItem from 'lighting-design/l-form-item';
import type { FC } from 'react';
import type { LFormItemColorProps } from './interface';

const LFormItemColor: FC<LFormItemColorProps> = ({
  disabled,
  size,
  //
  showText,
  colorFormat,
  colorProps = emptyObject,
  ...restProps
}) => {
  const baseProps = {
    size,
    disabled,
    destroyOnHidden: true,
    //
    format: colorFormat,
    ...colorProps,
  };

  return (
    <LFormItem {...restProps}>
      <ColorPicker {...baseProps} />
    </LFormItem>
  );
};

export default LFormItemColor;
