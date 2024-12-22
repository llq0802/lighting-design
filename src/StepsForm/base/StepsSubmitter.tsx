import { Button, Space } from 'antd';
import { emptyObject } from 'lighting-design/constants';
import type { FC, ReactElement } from 'react';
import { useContext } from 'react';
import type { LStepsFormSubmitterProps } from '../interface';
import StepsFormContext from './StepsFormContext';

const StepsFormSubmitter: FC<LStepsFormSubmitterProps> = (props) => {
  const {
    prevText = '上一步',
    prevButtonProps = emptyObject,
    onPrev = () => {},
    showPrev = true,

    nextText = '下一步',
    nextButtonProps = emptyObject,
    onNext = () => {},
    showNext = true,

    submitText = '确定',
    submitButtonProps = emptyObject,
    onSubmit = () => {},

    forceShowPrev = false,
    forceShowNext = false,
    forceShowSubmit = false,
    render,
  } = props;

  const { submitStepNum = 0, current = 0, formInstanceListRef } = useContext(StepsFormContext);

  const handlePrev = (e) => {
    onPrev?.(e);
    prevButtonProps?.onClick?.(e);
  };

  const handleNext = (e) => {
    if (nextButtonProps?.htmlType !== 'submit') {
      const form = formInstanceListRef.current[current];
      form?.submit(); // 提交表单验证
    }
    onNext?.(e);
    nextButtonProps?.onClick?.(e);
  };

  const handleSubmit = (e) => {
    if (submitButtonProps?.htmlType !== 'submit') {
      const form = formInstanceListRef.current[current];
      form?.submit(); // 提交表单验证
    }
    Promise.resolve().then(() => onSubmit?.(e));
    submitButtonProps?.onClick?.(e);
  };

  const prevButton = (
    <Button key="prev" {...prevButtonProps} onClick={handlePrev}>
      {prevText}
    </Button>
  );

  const nextButton = (
    <Button key="next" type="primary" {...nextButtonProps} onClick={handleNext}>
      {nextText}
    </Button>
  );

  const submitButton = (
    <Button key="submit" type="primary" {...submitButtonProps} onClick={handleSubmit}>
      {submitText}
    </Button>
  );

  const createDom = () => {
    let prevView = current !== 0 && showPrev ? prevButton : null;

    let nextView = current < submitStepNum && showNext ? nextButton : null;

    let submitView = current >= submitStepNum ? submitButton : null;

    if (forceShowPrev && !prevView) {
      prevView = prevButton;
    }

    if (forceShowNext && !nextView) {
      nextView = nextButton;
    }

    if (forceShowSubmit && !submitView) {
      submitView = submitButton;
    }

    return [prevView, nextView, submitView].filter((item) => !!item);
  };

  const renderDom = render ? render(createDom() as any, props) : createDom();

  if (!renderDom) {
    return null;
  }
  if (Array.isArray(renderDom)) {
    if (renderDom?.length < 1) {
      return null;
    }
    if (renderDom.length === 1) {
      return renderDom[0] as ReactElement;
    }
    return <Space>{renderDom}</Space>;
  }

  return renderDom as ReactElement;
};

export default StepsFormSubmitter;
