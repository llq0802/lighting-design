import {
  useControllableValue,
  useMemoizedFn,
  useSafeState,
  useUpdate,
  useUpdateEffect,
} from 'ahooks';
import type { FormInstance, StepProps, StepsProps } from 'antd';
import { Form, Steps } from 'antd';
import { default as classnames } from 'classnames';
import type { BaseFormProps } from 'lighting-design/Form/base/BaseForm';
import { isFunction } from 'lighting-design/_utils';
import { emptyObject } from 'lighting-design/constants';
import type { FC, MutableRefObject, ReactElement, ReactNode } from 'react';
import { Children, cloneElement, useImperativeHandle, useRef } from 'react';
import StepForm from './StepForm';
import StepsFormContext from './StepsFormContext';
import type { LStepsFormSubmitterProps } from './StepsSubmitter';
import StepsSubmitter from './StepsSubmitter';
import './styles.less';

export type LStepsFormActionRef = {
  /** 表单实例数组 */
  formInstanceList: FormInstance<any>[];
  /** 到指定步骤 */
  toStep: (num: number) => void;
  /** 上一步 */
  prev: () => void;
  /** 下一步 */
  next: (submitted?: boolean) => void;
  /** 提交 */
  submit: (isFinallySubmit?: boolean) => void;
  /** 重置 */
  reset: () => void;
};

export type LStepsFormProps = {
  /**
   * 指定步骤条方向。目前支持水平（horizontal）和竖直（vertical）两种方向
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.26
   *@see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   *@see https://ant.design/components/grid-cn#col
   */
  direction?: 'horizontal' | 'vertical';
  /**
   *  Steps 组件最外层容器类名
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  stepsWrapperClassName?: string;
  /**
   *  Steps 组件最外层容器样式
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  stepsWrapperStyle?: React.CSSProperties;

  /**
   * 组件最外层容器样式
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  style?: React.CSSProperties;
  /**
   * 设置后变为受控模式。当前表单的步骤数。
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.26
   *@see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   *@see https://ant.design/components/grid-cn#col
   */
  current?: number;
  /**
   *  发生改变的事件
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  onCurrentChange?: (current: number) => void;

  /**
   * 组件最外层容器类名
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  className?: string;
  /**
   * 表单外层容器的类名
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  contentClassName?: string;
  /**
   * 表单外层容器的样式
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  contentStyle?: React.CSSProperties;
  /**
   * 默认当前的步骤
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  defaultCurrent?: number;

  /**
   * 被隐藏时是否销毁 DOM 结构
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  destroyStepForm?: boolean;
  /**
   * 是否将 onFinish 的得到的所有 form 数据合并
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  isMergeValues?: boolean;
  /**
   * 是否提交完成后需要重置
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  isResetFields?: boolean;
  /**
   * 内部的重置按钮是否使用 form.resetFields() true时会每次重置就会重新挂挂载子组件
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  isAntdReset?: boolean;
  /**
   * 是否准备好
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  isReady?: boolean;
  /**
   * 实例包含一些方法和属性
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  actionRef?: MutableRefObject<LStepsFormActionRef | undefined>;
  /**
   * 在哪步为最终的提交操作, 用于触发 onFinish 默认为表单最后一步
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  submitStepNum?: number;

  /**
   * 默认表单最后一步提交成功触发，如果返回true就会自动重置表单(包括StepForm变回第一步)
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  onFinish?: (valuse: Record<string, any>) => Promise<void | boolean>;

  /**
   *上一步下一步提交按钮的配置项
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  submitter?: LStepsFormSubmitterProps | false;

  /**
   *antd Steps 组件的属性
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  stepsProps?: StepsProps;
  /**
   *LForm 组件的属性
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  formProps?: Omit<BaseFormProps, 'title' | 'onReset' | 'contentRender' | 'submitter' | 'isReady'>;
  /**
   * 重新渲染整个组件
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  stepsFormRender?: (stepsDom: ReactNode, formDom: ReactNode, submitterDom: ReactNode) => ReactNode;
  /**
   * 重新渲染每个表单组件
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  stepFormRender?: (dom: ReactNode, index: number) => ReactNode;
  /**
   * 重新渲染步骤组件
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.26
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  stepsRender?: (dom: ReactNode, items: StepProps[]) => ReactNode;
  children: ReactElement[];
};

const prefixCls = 'lightd-form-steps';

const StepsForm: FC<LStepsFormProps> & {
  StepForm: typeof StepForm;
} = (props) => {
  const {
    className,
    style = emptyObject,

    contentClassName,
    contentStyle = emptyObject,

    stepsWrapperClassName,
    stepsWrapperStyle = emptyObject,

    direction = 'horizontal',
    isMergeValues = true,
    isAntdReset = false,
    isResetFields = true,
    isReady = true,
    defaultCurrent = 0,
    actionRef,
    onFinish,
    stepsProps = emptyObject,
    submitter = emptyObject,
    formProps = emptyObject,
    stepsRender,
    stepFormRender,
    stepsFormRender,
    destroyStepForm = false,
    children,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    current: outCurrent,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onCurrentChange: outOnCurrentChange,
  } = props;

  let { submitStepNum } = props;

  const stepsConfigRef = useRef<StepProps[]>([]); // 步骤条配置
  const formSubmitterRef = useRef<any[]>([]); // 每个表单的操作配置
  const formInstanceListRef = useRef<FormInstance[]>([]); // 每个步骤的form实例
  const formInitialValues = useRef<Record<string, any>[]>([]); // 每个步骤表单初始数据
  const formDataRef = useRef<Record<string, any>>({}); // 全部表单最终数据
  const [loading, setLoading] = useSafeState(false);
  let currentFormName = '0';

  // 手动触发更新
  const update = useUpdate();
  // 延迟到最后更新
  const forgetUpdate = () => {
    update();
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
  // 配置最终提交在哪一步触发
  if (typeof submitStepNum !== 'number' || submitStepNum <= 0) {
    submitStepNum = childs.length;
  }
  childs.forEach((childItem, index) => {
    const {
      title,
      subTitle,
      icon,
      description,
      stepItemProps,
      submitter: childSubmitter,
    } = (childItem as ReactElement).props;
    // 配置Steps组件的item属性
    stepsConfigRef.current[index] = {
      key: `${index}`,
      title,
      subTitle,
      icon,
      description,
      ...stepItemProps,
    };

    // 获取每个表单组件的submitter属性并合并
    if (childSubmitter === false || childSubmitter === null || submitter === false) {
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
      const curStep = stepNum + 1;
      setStepNum(curStep);
    }
  };
  // 上一步
  const prev = () => {
    if (stepNum > 0) {
      const curStep = stepNum - 1;
      setStepNum(curStep);
    }
  };

  // 指定跳到哪一步
  const toStep = (num: number) => {
    if (num >= defaultCurrent && num <= childs.length - 1) {
      setStepNum(num);
    }
  };

  // 重置
  const reset = useMemoizedFn(() => {
    formDataRef.current = {};
    formInstanceListRef.current.forEach((item, i) => {
      if (isAntdReset || !Object.keys(formInitialValues.current[i]).length) {
        item?.resetFields();
      } else {
        item?.setFieldsValue({ ...formInitialValues.current[i] });
      }
    });
    setStepNum(defaultCurrent);
  });

  // 最终的提交
  const submit = useMemoizedFn(async () => {
    if (isFunction(onFinish)) {
      let values;
      if (isMergeValues) {
        // 合并每个表单的值
        values = Object.values<typeof formDataRef.current>(formDataRef.current).reduce(
          (pre, cur) => ({ ...pre, ...cur }),
          {},
        );
      } else {
        values = formDataRef.current;
      }
      const ret = onFinish?.(values);
      if (ret instanceof Promise) {
        setLoading(true);
        try {
          const res = await ret;
          if (res === true && isResetFields) {
            reset(); // 如果返回true就会自动重置表单(包括StepForm变回第一步)
          }
        } catch (err) {
          console.error(err); // eslint-disable-line
        } finally {
          formDataRef.current = {}; // 提交请求完成后重置所有收集到的表单数据
          setLoading(false);
        }
      } else {
        if (ret === true && isResetFields) {
          reset(); // 如果返回true就会自动重置表单(包括StepForm变回第一步)
        }
        formDataRef.current = {};
      }
    }
  });

  // 每个表单下一步/提交时触发,用于记录当前表单值
  const onFormFinish = (name: string, values: Record<string, any>) => {
    formDataRef.current[name] = values;
  };

  // 暴露方法和属性
  useImperativeHandle(actionRef, () => ({
    allFormValues: formDataRef.current,
    formInstanceList: formInstanceListRef.current,
    toStep,
    prev: () => {
      if (!isReady) return;
      prev();
      const currentSubmitter = formSubmitterRef.current[stepNum];
      currentSubmitter?.onPrev();
    },
    // submitted是否触发当前表单提交验证
    next: (submitted = false) => {
      if (!isReady) return;
      if (submitted) {
        formInstanceListRef.current[stepNum].submit();
      } else {
        next();
      }
      const currentSubmitter = formSubmitterRef.current[stepNum];
      currentSubmitter?.onNext?.();
    },
    // 是否在最后一步触发提交
    submit: (isFinallySubmit = true) => {
      if (!isReady) return;
      if (!isFinallySubmit) {
        formInstanceListRef.current[stepNum].submit();
      } else {
        submit();
      }
      const currentSubmitter = formSubmitterRef.current[stepNum];
      currentSubmitter?.onSubmit?.();
    },
    reset: () => {
      if (!isReady) return;
      // if (!isResetFields) return;
      reset();
    },
  }));

  // 上一步 下一步 提交按钮
  const renderSubmitter = () => {
    if (formSubmitterRef.current?.length <= 0) {
      return null;
    }
    const currentSubmitter = formSubmitterRef.current[stepNum]; // 当前from的配置
    if (currentSubmitter === false || currentSubmitter === null || currentSubmitter === void 0) {
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
        if (destroyStepForm) {
          const values = formInstanceListRef.current[stepNum]?.getFieldsValue() ?? {};
          onFormFinish(currentFormName, values);
        }
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
        {...currentSubmitter}
        form={formInstanceListRef.current[stepNum]}
        {...initProps}
      />
    );
  };
  const submitterDom = renderSubmitter();

  let formDom = null;
  if (destroyStepForm) {
    currentFormName = childs?.[stepNum]?.props?.name ?? `${stepNum}`;
    const currentSubmitter = formSubmitterRef.current[stepNum]; // 当前from的配置
    const buttonAlign = (submitter as Record<string, any>)?.buttonAlign;
    const formConfig = {
      submitter: false, // 不渲染LForm自带的提交重置按钮
      contentRender: (dom: ReactNode) => (
        <>
          {/* 渲染form主体 */}
          {stepFormRender ? stepFormRender(dom, stepNum) : dom}
          {/* 渲染操作上一步 下一步 提交按钮 */}
          {!stepsFormRender ? (
            <Form.Item
              wrapperCol={currentSubmitter?.wrapperCol}
              className={`${prefixCls}-item-submitter`}
              style={{
                marginBottom: 0,
                paddingLeft: typeof buttonAlign === 'number' ? `${buttonAlign}px` : 0,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: typeof buttonAlign === 'string' ? buttonAlign : 'initial',
                }}
              >
                {submitterDom}
              </div>
            </Form.Item>
          ) : null}
        </>
      ),
    };
    formDom = (
      <div className={classnames(`${prefixCls}-item`, `${prefixCls}-item-active`)}>
        {cloneElement(childs[stepNum], {
          ...formConfig,
          ...formProps,
          _stepNum: stepNum, // 注入每个表单(表示当前表单的索引步骤)
          name: currentFormName,
        })}
      </div>
    );
  } else {
    // 每个表单dom
    formDom = childs.map((itemFrom: any, index) => {
      const isCurrentIndex = stepNum === index;
      const name = itemFrom.props?.name || `${index}`; // 每个步骤表单的name 没有则用index
      const currentSubmitter = formSubmitterRef.current[stepNum]; // 当前from的配置
      const buttonAlign = (submitter as Record<string, any>)?.buttonAlign;

      const config = {
        submitter: false, // 不渲染LForm自带的提交重置按钮
        contentRender: (dom: ReactNode) => (
          <>
            {/* 渲染form主体 */}
            {stepFormRender ? stepFormRender(dom, index) : dom}
            {/* 渲染操作上一步 下一步 提交按钮 */}
            {!stepsFormRender && isCurrentIndex ? (
              <Form.Item
                wrapperCol={currentSubmitter?.wrapperCol}
                className={`${prefixCls}-item-submitter`}
                style={{
                  marginBottom: 0,
                  paddingLeft: typeof buttonAlign === 'number' ? `${buttonAlign}px` : 0,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: typeof buttonAlign === 'string' ? buttonAlign : 'initial',
                  }}
                >
                  {submitterDom}
                </div>
              </Form.Item>
            ) : null}
          </>
        ),
      };
      return (
        <div
          className={classnames(`${prefixCls}-item`, {
            [`${prefixCls}-item-active`]: isCurrentIndex,
          })}
          style={{ display: isCurrentIndex ? 'block' : 'none' }} // 只显示当前步骤条的form
          key={name}
        >
          {cloneElement(itemFrom, {
            ...config,
            ...formProps,
            _stepNum: index, // 注入每个表单(表示当前表单的索引步骤)
            name,
          })}
        </div>
      );
    });
  }

  useUpdateEffect(() => {
    if (destroyStepForm) {
      setTimeout(() => {
        formInstanceListRef.current[stepNum]?.setFieldsValue({
          ...(formDataRef.current?.[currentFormName] ?? {}),
        });
      });
    }
  }, [stepNum]);

  // 步骤条
  const renderStepsDom = () => {
    if (!Array.isArray(stepsConfigRef.current) || stepsConfigRef.current.length <= 0) {
      return null;
    }
    const dom = (
      <Steps
        {...stepsProps}
        direction={direction}
        style={{
          height: '100%',
          ...stepsProps?.style,
        }}
        items={stepsConfigRef.current}
        current={stepNum}
      />
    );
    return stepsRender ? stepsRender(dom, stepsConfigRef.current) : dom;
  };
  const stepsDom = renderStepsDom();

  const formContentDom = (
    <div className={classnames(`${prefixCls}-content`, contentClassName)} style={contentStyle}>
      {formDom}
    </div>
  );

  const stepsContentDom = (
    <div
      className={classnames(`${prefixCls}-top`, stepsWrapperClassName)}
      style={stepsWrapperStyle}
    >
      {stepsDom}
    </div>
  );

  return (
    <StepsFormContext.Provider
      value={{
        current: stepNum,
        total: submitStepNum,
        formInstanceListRef,
        formInitialValues,
        onFormFinish,
        next,
        submit,
        loading,
        setLoading,
        forgetUpdate,
        isAntdReset,
      }}
    >
      {stepsFormRender ? (
        stepsFormRender(stepsContentDom, formContentDom, submitterDom)
      ) : (
        <div
          className={classnames(
            prefixCls,
            {
              [`${prefixCls}-vertical`]: direction === 'vertical',
            },
            className,
          )}
          style={style}
        >
          {stepsContentDom}
          {formContentDom}
        </div>
      )}
    </StepsFormContext.Provider>
  );
};

StepsForm.StepForm = StepForm;

export type { LStepsFormSubmitterProps } from './StepsSubmitter';

export default StepsForm;
