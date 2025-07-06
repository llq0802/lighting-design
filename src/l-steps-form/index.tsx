import { useControllableValue } from 'ahooks';
import { Flex, Steps } from 'antd';
import { useState, type FC } from 'react';
import StepsItem from './components/steps-item';
import StepsSubmitter from './components/steps-submitter';

const LStepsForm: FC<any> = (props) => {
  const {
    className,
    style,
    isResetFields = true,
    destroyOnHidden,
    forceRender,
    //
    actionRef,
    onFinish,
    stepsProps,
    submitter,
    formProps,
    items: outItems = [],

    defaultCurrent = 0,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    current: outCurrent,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onCurrentChange: outOnCurrentChange,
  } = props;
  forceRender;

  const [initialItems, setInitialItems] = useState<any[]>(outItems);

  // 当前步骤
  const [stepNum, setStepNum] = useControllableValue(props, {
    defaultValue: outCurrent || defaultCurrent,
    defaultValuePropName: 'defaultCurrent',
    valuePropName: 'current',
    trigger: 'onCurrentChange',
  });

  const [items, setItems] = useState<any[]>(() => {
    if (forceRender) {
      return initialItems;
    }
    return initialItems?.slice(0, stepNum + 1) || [];
  });

  // 下一步
  const next = () => {
    if (stepNum < initialItems.length - 1) {
      const nextStepNum = stepNum + 1;
      const nextItem = initialItems[nextStepNum];
      const isDestroyOnHidden = destroyOnHidden || nextItem.destroyOnHidden;
      setItems((p) => (isDestroyOnHidden ? [nextItem] : [...p, nextItem]));
      setStepNum(nextStepNum);
    }
  };
  // 上一步
  const prev = () => {
    if (stepNum > 0) {
      const prevStepNum = stepNum - 1;
      const pevtItem = initialItems[prevStepNum];
      const isDestroyOnHidden = destroyOnHidden || pevtItem.destroyOnHidden;
      setItems((p) => (isDestroyOnHidden ? [pevtItem] : p.slice(0, stepNum)));
      setStepNum(prevStepNum);
    }
  };

  // 指定跳到哪一步
  const toStep = (num: number) => {
    if (num >= 0 && num <= initialItems.length - 1) {
      const currentItem = initialItems[num];
      const isDestroyOnHidden = destroyOnHidden || currentItem.destroyOnHidden;
      setItems((p) => (isDestroyOnHidden ? [currentItem] : p.slice(0, num)));
      setStepNum(num);
    }
  };

  const stepsItems = initialItems?.map((item) => {
    const { formName, form, formItems, formProps, ...rest } = item;
    return {
      ...rest,
    };
  });
  console.log('===initialItems==>', initialItems);
  return (
    <Flex vertical gap={16}>
      <Steps current={stepNum} items={stepsItems} />
      <div>
        {items.map((item, index) => {
          const selected = stepNum === index;
          return (
            <StepsItem
              key={index}
              name={item.formName}
              {...item.formProps}
              style={{
                display: selected ? 'block' : 'none',
                ...item.formProps?.style,
              }}
              //
              stepNum={stepNum}
              initialItems={initialItems}
              setInitialItems={setInitialItems}
            >
              {item.formItems}
            </StepsItem>
          );
        })}
      </div>
      <StepsSubmitter
        form={initialItems[stepNum]?.form}
        current={stepNum}
        onPrev={prev}
        onNext={next}
        submitStepNum={initialItems.length - 1}
      />
    </Flex>
  );
};

export default LStepsForm;
