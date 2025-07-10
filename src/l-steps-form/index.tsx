import { useControllableValue, useLatest } from 'ahooks';
import { Steps } from 'antd';
import LForm from 'lighting-design/l-form';
import { useLFormInstance } from 'lighting-design/l-form/hooks';
import React, { useImperativeHandle, useState, type FC } from 'react';
import StepsSubmitter from './components/steps-submitter';
import { disposeInitialItems } from './utils';

const LStepsForm: FC<any> = (props) => {
  const {
    form,
    isReady,
    onFinish,
    submitter,
    //
    actionRef,
    stepsProps,
    //
    items: outItems = [],
    submitStepNum: outSubmitStepNum,
    destroyOnHidden,
    forceRender,
    defaultCurrent = 0,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    current: outCurrent,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onCurrentChange: outOnCurrentChange,
    ...restProps
  } = props;
  const defaultValue = outCurrent || defaultCurrent;
  const formRef = useLFormInstance(form);
  const [loading, setLoading] = useState(false);
  const [initialItems] = useState<any[]>(() => disposeInitialItems(outItems));
  const [stepNum, setStepNum] = useControllableValue(props, {
    defaultValue,
    defaultValuePropName: 'defaultCurrent',
    valuePropName: 'current',
    trigger: 'onCurrentChange',
  });
  const stepNumRef = useLatest(stepNum);

  const [items, setItems] = useState<any[]>(() => {
    if (forceRender) return initialItems;
    return initialItems?.slice(0, stepNumRef.current + 1) || [];
  });

  // 下一步
  const next = () => {
    if (stepNumRef.current >= initialItems.length - 1) return;
    const nextStepNum = stepNumRef.current + 1;
    const nextItem = initialItems[nextStepNum];
    setItems((p) => {
      const alreadyHasFormName = p.find((v) => v.formName === nextItem.formName);
      if (!alreadyHasFormName) {
        return [...p, nextItem];
      }
      return p;
    });
    setStepNum(nextStepNum);
  };
  // 上一步
  const prev = () => {
    if (stepNumRef.current <= 0) return;
    const prevStepNum = stepNumRef.current - 1;
    setStepNum(prevStepNum);
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
    formRef.current?.resetFields();
    setStepNum(defaultValue);
  };

  const stepsItems = initialItems?.map(({ formName, formItems, nameLists, ...rest }) => rest);

  const submitStepNum = outSubmitStepNum || initialItems.length - 1;

  const handleItemFinish = async () => {
    const nameLists = initialItems[stepNumRef.current].nameLists;
    const selectedValues = await formRef.current.validateFields(nameLists);
    if (typeof initialItems[stepNumRef.current]?.onFinish === 'function') {
      const ret = initialItems[stepNumRef.current].onFinish(selectedValues);
      if (ret instanceof Promise) {
        try {
          setLoading(true);
          await ret;
        } finally {
          setLoading(false);
        }
      }
    }
  };
  const handleFinish = async () => {
    const allValues = formRef.current.getFieldsValue(true);
    const res = await onFinish?.(allValues);
    if (res instanceof Promise) {
      try {
        setLoading(true);
        const r = await res;
        if (r === true) reset();
      } finally {
        setLoading(false);
      }
    }
  };

  useImperativeHandle(actionRef, () => ({
    prev,
    next,
    toStep,
    submit: handleFinish,
    reset,
  }));

  return (
    <LForm form={formRef.current} onFinish={handleFinish} {...restProps} submitter={false} preserve>
      <Steps {...stepsProps} current={stepNumRef.current} items={stepsItems} />
      <div data-role="l-steps-form-content">
        {items.map((item, index) => {
          const isSelected = stepNumRef.current === index;
          const isDestroyOnHidden = item?.destroyOnHidden || destroyOnHidden;
          return (
            (isSelected || !isDestroyOnHidden) && (
              <div data-steps-num={index} key={item.formName} style={{ display: isSelected ? 'block' : 'none' }}>
                {item.formItems?.map?.((it, i) => {
                  const rowKey = `${item.formName}-${i}`;
                  return (
                    <React.Fragment key={rowKey}>
                      {React.cloneElement(it.content, { name: it.nameList })}
                    </React.Fragment>
                  );
                })}
              </div>
            )
          );
        })}
      </div>
      <StepsSubmitter
        loading={loading}
        onPrev={() => {
          prev();
        }}
        onNext={async () => {
          await handleItemFinish();
          next();
        }}
        onSubmit={() => formRef.current?.submit()}
        stepNum={stepNum}
        submitStepNum={submitStepNum}
      />
    </LForm>
  );
};

export default LStepsForm;
