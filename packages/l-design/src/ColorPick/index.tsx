import type { ColorProps } from './base/BaseColor';
import Color from './base/BaseColor';
import type { ColorBlockPickerProps } from './components/BlockPicker';
import ColorBlockPicker from './components/BlockPicker';
import type { ColorChromePickerProps } from './components/ChromePicker';
import ColorChromePicker from './components/ChromePicker';
import ColorCirclePicker from './components/CirclePicker';
import type { ColorCompactPickerProps } from './components/CompactPicker';
import ColorCompactPicker from './components/CompactPicker';
import type { ColorPhotoshopPickerProps } from './components/PhotoshopPicker';
import ColorPhotoshopPicker from './components/PhotoshopPicker';
import type { ColorSketchPickerProps } from './components/SketchPicker';
import ColorSketchPicker from './components/SketchPicker';
import type { ColorSliderPickerProps } from './components/SliderPicker';
import ColorSliderPicker from './components/SliderPicker';

export type {
  ColorProps,
  ColorBlockPickerProps,
  ColorChromePickerProps,
  ColorCompactPickerProps,
  ColorPhotoshopPickerProps,
  ColorSliderPickerProps,
  ColorSketchPickerProps,
};
export {
  Color,
  ColorBlockPicker,
  ColorChromePicker,
  ColorCompactPicker,
  ColorPhotoshopPicker,
  ColorSketchPicker,
  ColorSliderPicker,
  ColorCirclePicker,
};

export default Color;
