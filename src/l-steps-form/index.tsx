import { useControllableValue, useLatest } from 'ahooks';
import { Flex, Steps } from 'antd';
import { useRef, useState, type FC } from 'react';
import StepsItem from './components/steps-item';
import StepsSubmitter from './components/steps-submitter';

const LStepsForm: FC<any> = (props) => {
  const {
    className,
    style,
    isMergeValues,
    destroyOnHidden,
    forceRender,
    //
    actionRef,
    onFinish,
    stepsProps,
    submitter,
    formProps,
    items: outItems = [],
    submitStepNum: outSubmitStepNum,

    defaultCurrent = 0,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    current: outCurrent,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onCurrentChange: outOnCurrentChange,
  } = props;
  forceRender;
  const defaultValue = outCurrent || defaultCurrent;

  const [loading, setLoading] = useState(false);
  const [initialItems, setInitialItems] = useState<any[]>(() => outItems?.map((v, i) => ({ formName: `${i}`, ...v })));
  const formDataRef = useRef<Record<string, any>>({});

  const [stepNum, setStepNum] = useControllableValue(props, {
    defaultValue,
    defaultValuePropName: 'defaultCurrent',
    valuePropName: 'current',
    trigger: 'onCurrentChange',
  });
  const stepNumRef = useLatest(stepNum);

  const [items, setItems] = useState<any[]>(() => {
    if (forceRender) {
      return initialItems;
    }
    return initialItems?.slice(0, stepNumRef.current + 1) || [];
  });

  // 下一步
  const next = () => {
    if (stepNumRef.current < initialItems.length - 1) {
      const nextStepNum = stepNumRef.current + 1;
      const nextItem = initialItems[nextStepNum];
      setItems((p) => {
        const hasName = p.find((v) => v.formName === nextItem.formName);
        console.log('===hasName==>', hasName);
        if (!hasName) {
          return [...p, nextItem];
        }
        return p;
      });
      setStepNum(nextStepNum);
    }
  };
  // 上一步
  const prev = () => {
    if (stepNumRef.current > 0) {
      const prevStepNum = stepNumRef.current - 1;
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

  const reset = () => {
    formDataRef.current = {};
    initialItems.forEach((item) => {
      item?.form?.resetFields();
    });
    setStepNum(defaultValue);
  };

  const submit = async () => {
    if (typeof onFinish !== 'function') return;
    let values;
    if (isMergeValues) {
      values = Object.values(formDataRef.current).reduce((pre, cur) => ({ ...pre, ...cur }), {});
    } else {
      values = formDataRef.current;
    }
    const ret = onFinish?.(values);
    if (ret instanceof Promise) {
      setLoading(true);
      try {
        const res = await ret;
        // 如果返回true就会自动重置表单(包括StepForm变回第一步)
        if (res === true) reset();
      } finally {
        formDataRef.current = {}; // 提交请求完成后重置所有收集到的表单数据
        setLoading(false);
      }
    } else {
      formDataRef.current = {};
      if (ret === true) reset();
    }
  };

  const stepsItems = initialItems?.map((item) => {
    const { formName, form, formItems, formProps, onFinish, ...rest } = item;
    return {
      ...rest,
    };
  });

  const submitStepNum = outSubmitStepNum || initialItems.length - 1;

  return (
    <Flex vertical gap={16}>
      <Steps current={stepNumRef.current} items={stepsItems} />
      <div>
        {items.map((item, index) => {
          const selected = stepNumRef.current === index;
          const name = item.formName;

          const isDestroyOnHidden = destroyOnHidden || item?.destroyOnHidden;

          return (
            (selected || !isDestroyOnHidden) && (
              <StepsItem
                key={index}
                name={name}
                {...item.formProps}
                style={{
                  display: selected ? 'block' : 'none',
                  ...item.formProps?.style,
                }}
                //
                stepNum={stepNumRef.current}
                initialItems={initialItems}
                setInitialItems={setInitialItems}
              >
                {item.formItems}
              </StepsItem>
            )
          );
        })}
      </div>
      <StepsSubmitter
        form={initialItems[stepNumRef.current]?.form}
        current={stepNumRef.current}
        onPrev={prev}
        submitStepNum={submitStepNum}
      />
    </Flex>
  );
};

export default LStepsForm;
