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
      <h4>LColorSketchPicker</h4>
      <LColorSketchPicker
        value={color6}
        onChange={setColor6}
        colorMode="rgb"
        placement="topLeft"
        size="middle"
      />
      <br />
      <h4>LColorChromePicker</h4>
      <LColorChromePicker
        value={color2}
        onChange={setColor2}
        colorMode="rgb"
        placement="topLeft"
      />
      <br />
      <h4>LColorBlockPicker</h4>
      <LColorBlockPicker value={color1} onChange={setColor1} disabled />
      <br />
      <h4>LColorCompactPicker</h4>
      <LColorCompactPicker value={color3} onChange={setColor3} />
      <br />
      <h4>LColorPhotoshopPicker</h4>
      <LColorPhotoshopPicker
        value={color4}
        onChange={setColor4}
        placement="topLeft"
      />
      <br />
      <h4>LColorCirclePicker</h4>
      <LColorCirclePicker
        value={color5}
        onChange={setColor5}
        placement="topLeft"
      />
      <br />
      <h4>原生input</h4>
      <input type="color" />
    </>
  );
};
