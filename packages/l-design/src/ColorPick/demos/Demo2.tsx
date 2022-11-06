/**
 * title: 选择颜色
 * desc: |
 *  支持设置颜色选择器位置、颜色模式（`rgb`、`hex`）。
 *
 *  其中 `ColorChromePicker` `ColorSketchPicker` 在颜色模式为 `rgb` 时，支持设置透明度。
 */

import {
  LColorBlockPicker,
  LColorChromePicker,
  LColorCirclePicker,
  LColorCompactPicker,
  LColorPhotoshopPicker,
  LColorSketchPicker,
} from 'lighting-design';
import { useState } from 'react';

export default () => {
  const [color1, setColor1] = useState('#e60000');
  const [color2, setColor2] = useState('rgba(255,127,0,1)');
  const [color3, setColor3] = useState('#fcdc00');
  const [color4, setColor4] = useState('#a4dd00');
  const [color5, setColor5] = useState('rgba(104,204,202,1)');
  const [color6, setColor6] = useState('#000');

  return (
    <>
      <h3>LColorBlockPicker</h3>
      <LColorBlockPicker value={color1} onChange={setColor1} showText />
      <br />
      <br />
      <h3>LColorChromePicker</h3>
      <LColorChromePicker
        value={color2}
        onChange={setColor2}
        showText
        colorMode="rgb"
        placement="topLeft"
      />
      <br />
      <br />
      <h3>LColorCompactPicker</h3>
      <LColorCompactPicker value={color3} onChange={setColor3} showText />
      <br />
      <br />
      <h3>LColorPhotoshopPicker</h3>
      <LColorPhotoshopPicker value={color4} onChange={setColor4} showText placement="topLeft" />
      <br />
      <br />
      {/* <h3>ColorSliderPicker</h3>
      <ColorSliderPicker value={color4} onChange={setColor4} showText placement="topLeft" />
      <br />
      <br /> */}
      <h3>LColorCirclePicker</h3>
      <LColorCirclePicker value={color5} onChange={setColor5} showText placement="topLeft" />

      <br />
      <br />
      <h3>LColorSketchPicker</h3>
      <LColorSketchPicker
        value={color6}
        onChange={setColor6}
        showText
        colorMode="rgb"
        placement="topLeft"
        size="middle"
      />
      {/* <input type="color" /> */}
    </>
  );
};
