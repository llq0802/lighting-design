// import {
//   LColorChromePicker,
//   LColorPhotoshopPicker,
//   LColorSketchPicker,
// } from 'lighting-design/ColorPick';
// import type { ColorChromePickerProps } from 'lighting-design/ColorPick/components/ChromePicker';
// import type { ColorSketchPickerProps } from 'lighting-design/ColorPick/components/SketchPicker';
// import { emptyObject } from 'lighting-design/constants';
// import { LFormContext } from 'lighting-design/Form/base/BaseForm';
// import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
// import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
// import type { FC } from 'react';
// import { useContext, useMemo } from 'react';

// export interface LFormItemColorProps extends LFormItemProps {
//   /**
//    * LColor 组件 Props
//    *@author 李岚清 <https://github.com/llq0802>
//    *@version 2.1.29
//    *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemColorProps
//    */
//   colorProps?: ColorSketchPickerProps | ColorChromePickerProps;
//   /**
//    *内置组件类型
//    *@author 李岚清 <https://github.com/llq0802>
//    *@version 2.1.29
//    *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemColorProps
//    */
//   colorType?: 'sketch' | 'chrome' | 'photoshop';
// }

// const LFormItemColor: FC<LFormItemColorProps> = ({
//   required = false,
//   colorType = 'sketch',
//   disabled,
//   size,
//   colorProps = emptyObject,
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   placeholder,
//   ...restProps
// }) => {
//   const { disabled: formDisabled, size: formSize } = useContext(LFormContext);

//   const ColorConent = useMemo(() => {
//     if (colorType === 'sketch') {
//       return (
//         <LColorSketchPicker
//           size={size ?? formSize}
//           showText
//           disabled={disabled ?? formDisabled}
//           {...colorProps}
//         />
//       );
//     }

//     if (colorType === 'photoshop') {
//       return (
//         <LColorPhotoshopPicker
//           showText
//           size={size ?? formSize}
//           disabled={disabled ?? formDisabled}
//           {...colorProps}
//         />
//       );
//     }
//     return (
//       <LColorChromePicker
//         showText
//         size={size ?? formSize}
//         disabled={disabled ?? formDisabled}
//         {...colorProps}
//       />
//     );
//   }, [colorProps, colorType, disabled, formDisabled]);

//   return (
//     <LFormItem required={required} _isSelectType {...restProps}>
//       {ColorConent}
//     </LFormItem>
//   );
// };

// export default LFormItemColor;

import { ColorPicker } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext } from 'react';
import type { LFormItemColorProps } from './interface';

const LFormItemColor: FC<LFormItemColorProps> = ({
  disabled,
  size,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  placeholder,

  colorProps = emptyObject,
  showText,
  ...restProps
}) => {
  const { disabled: formDisabled, size: formSize } = useContext(LFormContext);

  return (
    <LFormItem _isSelectType {...restProps}>
      <ColorPicker
        size={size || formSize}
        disabled={disabled || formDisabled}
        showText={showText}
        {...colorProps}
      />
    </LFormItem>
  );
};

export default LFormItemColor;
