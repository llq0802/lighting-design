import { useControllableValue } from 'ahooks';
import { Steps } from 'antd';
import type { FC } from 'react';
import StepsFormContext from './StepsFormContext';

const prefixCls = 'lightd-steps-form';

export type LStepsFormProps = Record<string, any>;

const StepsForm: FC<LStepsFormProps> = (props) => {
  const { defaultCurrent = 0, children } = props;
  console.log('Steps', Steps);

  const items = [
    {
      title: 'First',
      content: 'First-content',
    },
    {
      title: 'Second',
      content: 'Second-content',
    },
    {
      title: 'Last',
      content: 'Last-content',
    },
  ];

  // 当前步骤
  const [stepNum, setStepNum] = useControllableValue(props, {
    defaultValue: defaultCurrent,
    defaultValuePropName: 'defaultCurrent',
    valuePropName: 'current',
    trigger: 'onCurrentChange',
  });

  const returnDom = <Steps current={stepNum} items={items} />;

  return (
    <StepsFormContext.Provider value={{}}>
      <div className={`${prefixCls}-container`}>{returnDom}</div>
    </StepsFormContext.Provider>
  );
};

export default StepsForm;
