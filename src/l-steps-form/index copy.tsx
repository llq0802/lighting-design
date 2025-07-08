import { useControllableValue, useLatest } from 'ahooks';
import { Steps } from 'antd';
import LForm from 'lighting-design/l-form';
import { useLFormInstance } from 'lighting-design/l-form/hooks';
import React, { useState, type FC } from 'react';
import StepsSubmitter from './components/steps-submitter copy';

const LStepsForm: FC<any> = (props) => {
  const {
    form,
    //
    actionRef,
    onFinish,
    stepsProps,
    submitter,
    //
    items: outItems = [],
    submitStepNum: outSubmitStepNum,

    destroyOnHidden,
    forceRender = true,
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
  const [initialItems] = useState<any[]>(() => {
    return outItems?.map((v, i) => {
      return { formName: `${i}`, ...v };
    });
  });

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
  const next = async () => {
    if (stepNumRef.current < initialItems.length - 1) {
      const currentNameList = initialItems[stepNumRef.current].formItems.map((v) => {
        return [initialItems[stepNumRef.current].formName, v.props?.name];
      });
      console.log('===currentNameList==>', currentNameList);
      const vals = await formRef.current?.validateFields(currentNameList);

      console.log('===vals==>', vals);
      const nextStepNum = stepNumRef.current + 1;
      const nextItem = initialItems[nextStepNum];
      setItems((p) => {
        const hasFormName = p.find((v) => v.formName === nextItem.formName);
        if (!hasFormName) {
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
    formRef.current?.resetFields();
    setStepNum(defaultValue);
  };

  const stepsItems = initialItems?.map((item) => {
    const { formName, formItems, ...rest } = item;
    return {
      ...rest,
    };
  });

  const submitStepNum = outSubmitStepNum || initialItems.length - 1;

  const handleFinish = (v) => {
    console.log('===v==>', v);
  };
  return (
    <LForm form={formRef.current} onFinish={handleFinish} {...restProps} submitter={false}>
      <Steps {...stepsProps} current={stepNumRef.current} items={stepsItems} />
      <div data-role="l-steps-form-content">
        {items.map((item, index) => {
          const isSelected = stepNumRef.current === index;
          const isDestroyOnHidden = item?.destroyOnHidden || destroyOnHidden;
          return (
            (isSelected || !isDestroyOnHidden) && (
              <div
                data-role="l-steps-form-items"
                key={item.formName}
                style={{ display: isSelected ? 'block' : 'none' }}
              >
                {item.formItems?.map?.((itemDom, i) => {
                  const rowKey = itemDom?.key || itemDom?.props?.name + `-${i}`;
                  return (
                    <React.Fragment key={rowKey}>
                      {React.cloneElement(itemDom, {
                        name: [item.formName, itemDom.props.name],
                      })}
                    </React.Fragment>
                  );
                })}
              </div>
            )
          );
        })}
      </div>
      <StepsSubmitter
        onPrev={prev}
        onNext={next}
        onSubmit={() => formRef.current?.submit()}
        stepNum={stepNum}
        submitStepNum={submitStepNum}
      />
    </LForm>
  );
};

export default LStepsForm;
