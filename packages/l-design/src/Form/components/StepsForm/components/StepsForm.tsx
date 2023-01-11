import { useControllableValue, useSafeState } from 'ahooks';
import { Form, Steps } from 'antd';
import classNames from 'classnames';
import type { FC } from 'react';
import { Children, cloneElement, useRef } from 'react';
import StepsFormContext from './StepsFormContext';
import StepsSubmitter from './StepsSubmitter';

const prefixCls = 'lightd-steps-form';

export type LStepsFormProps = Record<string, any>;

const StepsForm: FC<LStepsFormProps> = (props) => {
  const {
    defaultCurrent = 0,
    stepsProps,

    onFinish,
    submitter,
    isReady = true,
    formProps,
    stepsRender,
    stepFormRender,
    stepsFormRender,
    children,
  } = props;

  const stepsConfigRef = useRef<any[]>([]); // 步骤条配置
  const formSubmitterRef = useRef<any[]>([]); // 操作配置
  const [loading, setLoading] = useSafeState(false);

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
    const {
      title,
      subTitle,
      icon,
      description,
      stepProps,
      submitter: childSubmitter,
    } = childItem.props as StepItem;
    stepsConfigRef.current[index] = {
      key: `${index}`,
      title,
      subTitle,
      icon,
      description,
      ...stepProps,
    };
    if (childSubmitter === false || childSubmitter === null) {
      formSubmitterRef.current[index] = false;
    } else if (typeof childSubmitter === 'object') {
      formSubmitterRef.current[index] = submitter
        ? { ...submitter, ...childSubmitter }
        : childSubmitter;
    } else {
      formSubmitterRef.current[index] = submitter;
    }
  });

  const renderSubmitter = () => {
    if (!Array.isArray(formSubmitterRef.current) || formSubmitterRef.current.length <= 0) {
      return null;
    }

    const currentSubmitter = formSubmitterRef.current[stepNum]; // 当前from的配置

    if (currentSubmitter === false) {
      return null;
    }

    const internalProps = {};

    return (
      <StepsSubmitter total={stepsConfigRef.current.length} current={stepNum} {...internalProps} />
    );
  };

  const submitterDom = renderSubmitter();

  const formDom = childs.map((item: any, index) => {
    const isCurrentIndex = stepNum === index;
    const name = item.props?.name || index;

    const config = {
      submitter: false,
      contentRender: (dom) => (
        <>
          {stepFormRender ? stepFormRender(dom) : dom}
          {!stepsFormRender && isCurrentIndex ? <Form.Item>{submitterDom}</Form.Item> : null}
        </>
      ),
    };

    return (
      <div
        className={classNames(`${prefixCls}-item`, { [`${prefixCls}-active`]: isCurrentIndex })}
        style={{ display: isCurrentIndex ? 'block' : 'none' }}
        key={name}
      >
        {cloneElement(item, {
          ...config,
          ...formProps,
          ...item.props,
          stepNum: index,
          name,
        })}
      </div>
    );
  });

  const renderStepsDom = () => {
    if (!Array.isArray(stepsConfigRef.current) || stepsConfigRef.current.length <= 0) {
      return null;
    }
    const dom = <Steps {...stepsProps} items={stepsConfigRef.current} current={stepNum} />;
    return stepsRender ? stepsRender(stepsConfigRef.current, dom) : dom;
  };

  // 下一步
  const next = () => {
    if (stepNum < childs.length - 1) {
      const currStep = stepNum + 1;
      setStepNum(currStep);
    }
  };
  // 上一步
  const prev = () => {
    if (stepNum > 0) {
      const currStep = stepNum - 1;
      setStepNum(currStep);
    }
  };

  const stepsDom = renderStepsDom();

  return (
    <div className={`${prefixCls}-container`}>
      <StepsFormContext.Provider value={{}}>
        <div className={`${prefixCls}-top`}> {stepsDom}</div>
        <div className={`${prefixCls}-content`}>{formDom}</div>
      </StepsFormContext.Provider>
    </div>
  );
};

export default StepsForm;
