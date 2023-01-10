import { useControllableValue } from 'ahooks';
import { Steps } from 'antd';
import type { FC } from 'react';
import { Children, useRef } from 'react';
import StepsFormContext from './StepsFormContext';

const prefixCls = 'lightd-steps-form';

export type LStepsFormProps = Record<string, any>;

const StepsForm: FC<LStepsFormProps> = (props) => {
  const { defaultCurrent = 0, stepsProps, onFinish, stepsRender, children } = props;

  const stepsConfigRef = useRef<any[]>([]); // 步骤条配置

  // 当前步骤
  const [stepNum, setStepNum] = useControllableValue(props, {
    defaultValue: defaultCurrent,
    defaultValuePropName: 'defaultCurrent',
    valuePropName: 'current',
    trigger: 'onCurrentChange',
  });

  // 遍历子组件提取配置
  const childs = Children.toArray(children);
  childs.forEach((childItem, index) => {
    const { title, subTitle, icon, description, stepProps } = childItem.props as StepItem;
    stepsConfigRef.current[index] = {
      key: `${index}`,
      title,
      subTitle,
      icon,
      description,
      ...stepProps,
    };
  });

  const next = () => {
    setStepNum(stepNum + 1);
  };
  const prev = () => {
    setStepNum(stepNum - 1);
  };

  const returnDom = <Steps {...stepsProps} current={stepNum} items={stepsConfigRef.current} />;

  return (
    <StepsFormContext.Provider value={{}}>
      <div className={`${prefixCls}-container`}>{returnDom}</div>
    </StepsFormContext.Provider>
  );
};

export default StepsForm;
