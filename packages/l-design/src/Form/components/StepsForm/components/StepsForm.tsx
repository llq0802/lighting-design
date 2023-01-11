import { useControllableValue, useSafeState, useUpdate } from 'ahooks';
import type { FormInstance } from 'antd';
import { Form, Steps } from 'antd';
import classNames from 'classnames';
import type { FC, ReactElement, ReactNode } from 'react';
import { Children, cloneElement, useImperativeHandle, useRef } from 'react';
import StepsFormContext from './StepsFormContext';
import StepsSubmitter from './StepsSubmitter';
import './styles.less';

const prefixCls = 'lightd-steps-form';

export type LStepsFormProps = Record<string, any>;

const StepsForm: FC<LStepsFormProps> = (props) => {
  const {
    defaultCurrent = 0,
    stepsProps,
    actionRef,
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
  const formInstanceListRef = useRef<FormInstance[]>([]); // 每个步骤的form实例
  const formDataRef = useRef({}); // 全部表单数据

  const [loading, setLoading] = useSafeState(false);

  // 手动触发更新
  const update = useUpdate();
  const forgetUpdate = () => {
    setTimeout(() => {
      update();
    });
  };

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
    } = (childItem as ReactElement).props;
    // 配置Steps组件的item属性
    stepsConfigRef.current[index] = {
      key: `${index}`,
      title,
      subTitle,
      icon,
      description,
      ...stepProps,
    };

    // 获取每个表单组件的submitter属性并合并
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

  // 提交
  const submit = async () => {
    if (typeof onFinish === 'function') {
      const values = formDataRef.current;
      // 展开每个表单的值
      // const values = Object.values<typeof formDataRef.current>(formDataRef.current).reduce(
      //   (pre, cur) => ({ ...pre, ...cur }),
      //   {},
      // );
      const ret = onFinish(values);
      if (ret instanceof Promise) {
        setLoading(true);
        try {
          await ret;
        } catch (err) {
          console.error(err); // eslint-disable-line
        } finally {
          setLoading(false);
        }
      }
    }
  };

  // 单个表单下一步/提交时触发，仅用于记录当前表单值
  const onFormFinish = (name: string, values: Record<string, any>) => {
    formDataRef.current[name] = values;
  };

  const renderSubmitter = () => {
    if (!Array.isArray(formSubmitterRef.current) || formSubmitterRef.current.length <= 0) {
      return null;
    }

    const currentSubmitter = formSubmitterRef.current[stepNum]; // 当前from的配置

    if (currentSubmitter === false) {
      return null;
    }

    const initProps = {
      prevButtonProps: {
        disabled: loading || !isReady,
        ...currentSubmitter?.prevButtonProps,
      },
      nextButtonProps: {
        loading,
        disabled: !isReady,
        ...currentSubmitter?.nextButtonProps,
      },
      submitButtonProps: {
        loading,
        disabled: !isReady,
        ...currentSubmitter?.submitButtonProps,
      },
      onPrev: (e) => {
        prev();
        currentSubmitter?.onPrev?.(e);
      },
      onNext: (e) => {
        currentSubmitter?.onNext?.(e);
      },
      onSubmit: (e) => {
        currentSubmitter?.onSubmit?.(e);
      },
    };

    return (
      <StepsSubmitter
        total={stepsConfigRef.current.length}
        current={stepNum}
        {...initProps}
        form={formInstanceListRef.current[stepNum]}
      />
    );
  };

  const submitterDom = renderSubmitter();

  const formDom = childs.map((item: any, index) => {
    const isCurrentIndex = stepNum === index;
    const name = item.props?.name || index + ''; // 每个表单的name 没有则用index

    const config = {
      submitter: false, // 不渲染自带的提交重置按钮
      contentRender: (dom: ReactNode) => (
        <>
          {/* 渲染form主体 */}
          {stepFormRender ? stepFormRender(dom) : dom}
          {/* 渲染操作上一步 下一步 提交按钮 */}
          {!stepsFormRender && isCurrentIndex ? <Form.Item>{submitterDom}</Form.Item> : null}
        </>
      ),
    };

    return (
      <div
        className={classNames(`${prefixCls}-item`, { [`${prefixCls}-active`]: isCurrentIndex })}
        style={{ display: isCurrentIndex ? 'block' : 'none' }} // 只显示当前步骤条的form
        key={name}
      >
        {cloneElement(item, {
          ...config,
          ...formProps,
          ...item.props,
          name,
          step: index,
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

  const stepsDom = renderStepsDom();

  useImperativeHandle(actionRef, () => ({
    formInstanceList: formInstanceListRef.current,
    prev: () => {
      if (!isReady) {
        return;
      }
      prev();
      const currentSubmitter = formSubmitterRef.current[stepNum];
      currentSubmitter?.onPrev();
    },
    // 是否触发当前表单提交验证
    // 部分情况下第二步提交，第三步为结果。提交之后无需再次触发当前表单提交校验
    next: (submitted = true) => {
      if (!isReady) {
        return;
      }
      if (submitted) {
        formInstanceListRef.current[stepNum].submit();
      } else {
        next();
      }
      const currentSubmitter = formSubmitterRef.current[stepNum];
      currentSubmitter?.onNext?.();
    },
    submit: () => {
      if (!isReady) {
        return;
      }
      formInstanceListRef.current[stepNum].submit();
      const currentSubmitter = formSubmitterRef.current[stepNum];
      currentSubmitter?.onSubmit?.();
    },
    reset: () => {
      if (!isReady) {
        return;
      }
      setStepNum(defaultCurrent);
      formDataRef.current = {};
      formInstanceListRef.current.forEach((item) => {
        item?.resetFields();
      });
    },
  }));

  return (
    <div className={`${prefixCls}-container`}>
      <StepsFormContext.Provider
        value={{
          total: stepsConfigRef.current.length,
          formInstanceListRef,
          onFormFinish,
          next,
          submit,
          forgetUpdate,
          loading,
          setLoading,
        }}
      >
        {stepsFormRender ? (
          stepsFormRender(
            <div className={`${prefixCls}-top`}> {stepsDom}</div>,
            <div className={`${prefixCls}-content`}>{formDom}</div>,
            submitterDom,
          )
        ) : (
          <>
            <div className={`${prefixCls}-top`}> {stepsDom}</div>
            <div className={`${prefixCls}-content`}>{formDom}</div>
          </>
        )}
      </StepsFormContext.Provider>
    </div>
  );
};

export default StepsForm;
