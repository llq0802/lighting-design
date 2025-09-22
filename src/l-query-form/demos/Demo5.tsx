import { Divider } from 'antd';
import { LFormItemDate, LFormItemInput, LQueryForm } from 'lighting-design';

const defualtColSpan = {
  xs: 24, // 屏幕 < 576px 响应式栅格
  sm: 24, // 屏幕 ≥ 576px 响应式栅格，
  md: 12, // 屏幕 ≥ 768px 响应式栅格
  lg: 12, // 屏幕 ≥ 992px 响应式栅格
  xl: 8, // 屏幕 ≥ 1200px 响应式栅格
  xxl: 6, // 屏幕 ≥ 1600px 响应式栅格
};

const Demo1 = () => {
  return (
    <>
      <LQueryForm
        column={{
          xs: 24, // 屏幕 < 576px 响应式栅格
          sm: 24, // 屏幕 ≥ 576px 响应式栅格，
          md: 12, // 屏幕 ≥ 768px 响应式栅格
          lg: 12, // 屏幕 ≥ 992px 响应式栅格
          xl: 8, // 屏幕 ≥ 1200px 响应式栅格
          xxl: 8, // 屏幕 ≥ 1600px 响应式栅格
        }}
        items={[
          <LFormItemInput name="inpu1" required label="输入框1" />,
          <LFormItemInput name="input2" required label="输入框2" />,
          <LFormItemInput name="input3" required label="输入框3" />,
          <LFormItemInput name="input4" required label="输入框4" />,
          <LFormItemInput name="input5" required label="输入框5" />,
        ]}
      />

      <Divider></Divider>
      <LQueryForm
        column={{
          xs: 24, // 屏幕 < 576px 响应式栅格
          sm: 24, // 屏幕 ≥ 576px 响应式栅格，
          md: 12, // 屏幕 ≥ 768px 响应式栅格
          lg: 12, // 屏幕 ≥ 992px 响应式栅格
          xl: 8, // 屏幕 ≥ 1200px 响应式栅格
          xxl: 6, // 屏幕 ≥ 1600px 响应式栅格
        }}
        items={[
          <LFormItemInput name="input1" required label="输入框1" />,
          <LFormItemInput name="input2" required label="输入框2" />,
          <LFormItemInput name="input3" required label="输入框3" />,
          <LFormItemInput name="input4" required label="输入框4" />,
          <LFormItemInput name="input5" required label="输入框5" />,
          {
            content: <LFormItemDate rangePicker name="input6" required label="日期" />,
            colProps: {
              xs: 24, // 屏幕 < 576px 响应式栅格
              sm: 24, // 屏幕 ≥ 576px 响应式栅格，
              md: 12, // 屏幕 ≥ 768px 响应式栅格
              lg: 12, // 屏幕 ≥ 992px 响应式栅格
              xl: 8, // 屏幕 ≥ 1200px 响应式栅格
              xxl: 12, // 屏幕 ≥ 1600px 响应式栅格
            },
          },
        ]}
      />
    </>
  );
};

export default Demo1;
