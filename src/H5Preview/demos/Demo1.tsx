import { Divider, Radio } from 'antd';
import { LH5Preview } from 'lighting-design';
import { useState } from 'react';

const options = [
  { label: '经典白', value: 'white' },
  { label: '深空灰', value: 'gray' },
  { label: '香槟金', value: 'gold' },
];

enum DeviceColorEnum {
  White = 'white',
  Gold = 'gold',
  Gray = 'gray',
}

const Demo1 = () => {
  const [deviceColor, setDeviceColor] = useState<DeviceColorEnum>(
    DeviceColorEnum.White,
  );
  return (
    <div>
      <Radio.Group
        options={options}
        onChange={(e) => setDeviceColor(e.target.value)}
        value={deviceColor}
        optionType="button"
      />
      <Divider />
      <LH5Preview deviceColor={deviceColor}>
        <div id="h5App">
          <div>手机标题</div>
          <div>手机内容</div>
          <div>手机底部</div>
        </div>
      </LH5Preview>
    </div>
  );
};

export default Demo1;
