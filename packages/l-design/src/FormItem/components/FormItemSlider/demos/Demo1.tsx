import { LForm, LFormItemSlider } from 'lighting-design';

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm name="LFormItemSelect" form={form}>
      <LFormItemSlider
        name="slider"
        label="滑块"
        required
        tooltip="禁止空格"
        contentAfter={<div>后面</div>}
      />
      <LFormItemSlider
        max={300}
        name="slider2"
        label="滑块"
        required
        tooltip="禁止空格"
        sliderProps={{
          tooltip: { open: false },
        }}
        sliderStyle={{
          width: 300,
          height: 32,
          display: 'flex',
          alignItems: 'center',
          margin: '0 6px 0',
        }}
        handleStyle={{
          width: 32,
          height: 32,
          backgroundColor: 'blue',
          marginTop: 0,
          borderRadius: 0,
          transform: `translateX(0%)`,
          border: 'none',
        }}
        trackStyle={{
          backgroundColor: '#000',
          height: 32,
        }}
        railStyle={{
          backgroundColor: 'red',
          height: 32,
          width: 332,
        }}
      />
    </LForm>
  );
};
export default Demo1;
