import { Button, Flex } from 'antd';
import { emptyObject } from 'lighting-design/constants';
import type { FC, ReactElement } from 'react';

const StepsSubmitter: FC<any> = (props) => {
  const {
    loading,
    gap = 8,
    justify = 'center',
    prevText = '上一步',
    prevButtonProps = emptyObject,
    onPrev = () => {},
    showPrev = true,

    nextText = '下一步',
    nextButtonProps = emptyObject,
    onNext = () => {},
    showNext = true,

    submitText = '提交',
    submitButtonProps = emptyObject,
    onSubmit = () => {},

    forceShowPrev = false,
    forceShowNext = false,
    forceShowSubmit = false,
    renderSubmitter,
    stepNum,
    submitStepNum,
  } = props;

  const handlePrev = (e) => {
    onPrev?.(e);
    prevButtonProps?.onClick?.(e);
  };

  const handleNext = (e) => {
    onNext?.(e);
    nextButtonProps?.onClick?.(e);
  };

  const handleSubmit = (e) => {
    Promise.resolve().then(() => onSubmit?.(e));
    submitButtonProps?.onClick?.(e);
  };

  const prevButton = (
    <Button key="prev" loading={loading} {...prevButtonProps} onClick={handlePrev}>
      {prevText}
    </Button>
  );

  const nextButton = (
    <Button key="next" type="primary" loading={loading} {...nextButtonProps} onClick={handleNext}>
      {nextText}
    </Button>
  );

  const submitButton = (
    <Button key="submit" type="primary" loading={loading} {...submitButtonProps} onClick={handleSubmit}>
      {submitText}
    </Button>
  );

  const createDom = () => {
    let prevView = stepNum !== 0 && showPrev ? prevButton : null;

    let nextView = stepNum < submitStepNum && showNext ? nextButton : null;

    let submitView = stepNum >= submitStepNum ? submitButton : null;

    if (forceShowPrev && !prevView) {
      prevView = prevButton;
    }

    if (forceShowNext && !nextView) {
      nextView = nextButton;
    }

    if (forceShowSubmit && !submitView) {
      submitView = submitButton;
    }

    return [prevView, nextView, submitView].filter(Boolean);
  };

  const renderDom = renderSubmitter ? (
    renderSubmitter(createDom() as any, props)
  ) : (
    <Flex gap={gap} align="center" justify={justify}>
      {createDom()}
    </Flex>
  );

  if (!renderDom) {
    return null;
  }

  return renderDom as ReactElement;
};

export default StepsSubmitter;
