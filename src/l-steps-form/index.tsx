import { useControllableValue, useLatest, useUpdateEffect } from 'ahooks';
import { Steps } from 'antd';
import LForm from 'lighting-design/l-form';
import { useLFormInstance } from 'lighting-design/l-form/hooks';
import { Fragment, cloneElement, useImperativeHandle, useMemo, useState } from 'react';
import StepsSubmitter from './components/steps-submitter';
import type { LStepsFormProps } from './interface';
import { disposeInitialItems } from './utils';

const LStepsForm = <T extends any>(props: LStepsFormProps<T>) => {
  const {
    form,
    isReady = true,
    onFinish,
    submitter,
    renderChildren,
    renderLStepsForm,
    //
    isMergeValues,
    actionRef,
    stepsProps,
    //
    items: outItems = [],
    forceRender,
    destroyOnHidden,
    contentClassName,
    contentStyle,
    defaultCurrent = 0,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    current: outCurrent,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onCurrentChange: outOnCurrentChange,
    ...restProps
  } = props;
  const defaultValue = useMemo(() => outCurrent || defaultCurrent, []);
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
  const next = async () => {
    if (!isReady) return;
    if (stepNumRef.current >= initialItems.length - 1) return;

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
      setStepNum(num);
    }
  };

  const reset = () => {
    formRef.current?.resetFields();
    setStepNum(defaultValue);
  };

  const handleFinish = async () => {
    if (!isReady) return;
    let allValues = formRef.current.getFieldsValue(true);
    if (isMergeValues) {
      //@ts-ignore
      allValues = Object.values(isMergeValues).reduce((pre, cur) => ({ ...pre, ...cur }), {});
    }

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

  useUpdateEffect(() => {
    if (!isReady) return;
    reset();
  }, [isReady]);

  const stepsDom = (
    <Steps
      {...stepsProps}
      current={stepNumRef.current}
      items={initialItems?.map(({ formName, formItems, nameLists, ...rest }) => rest)}
      style={{ marginBottom: 32, ...stepsProps?.style }}
    />
  );

  const contentDom = (
    <>
      {items.map((item, index) => {
        const isSelected = stepNumRef.current === index;
        const isDestroyOnHidden = item?.destroyOnHidden || destroyOnHidden;
        return (
          (isSelected || !isDestroyOnHidden) && (
            <div data-steps-num={index} key={item.formName} style={{ display: isSelected ? 'block' : 'none' }}>
              {item.formItems?.map?.((it: any, i: number) => {
                const rowKey = `${item.formName}-${i}`;
                return <Fragment key={rowKey}>{cloneElement(it.content, { name: it.nameList })}</Fragment>;
              })}
            </div>
          )
        );
      })}
    </>
  );

  const submitterDom =
    submitter === false ? null : (
      <StepsSubmitter
        submitStepNum={initialItems.length - 1}
        loading={loading}
        {...submitter}
        onPrev={(e) => {
          prev();
          submitter?.onPrev?.(e);
        }}
        onNext={async (e) => {
          next();
          submitter?.onNext?.(e);
        }}
        onSubmit={(e) => {
          formRef.current?.submit();
          submitter?.onSubmit?.(e);
        }}
        stepNum={stepNumRef.current}
      />
    );

  const childrenDom = renderChildren ? (
    renderChildren(
      {
        stepsDom,
        contentDom,
        submitterDom,
      },
      props,
    )
  ) : (
    <>
      {stepsDom}
      <div data-role="l-steps-form-content" className={contentClassName} style={contentStyle}>
        {contentDom}
      </div>
      {submitterDom}
    </>
  );

  const dom = (
    <LForm clearOnDestroy form={formRef.current} onFinish={handleFinish} {...restProps} submitter={false} preserve>
      {childrenDom}
    </LForm>
  );

  const returnDom = renderLStepsForm
    ? renderLStepsForm(
        {
          dom,
          stepsDom,
          contentDom,
          submitterDom,
        },
        props,
      )
    : dom;

  return returnDom;
};

export default LStepsForm;
