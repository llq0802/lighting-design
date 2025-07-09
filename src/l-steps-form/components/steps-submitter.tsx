import { Button, Flex } from 'antd';
import { emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';

const StepsSubmitter: FC<any> = (props) => {
  const {
    loading,
    gap = 8,
    position = 'center',
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
    <Button key="prev" disabled={loading} {...prevButtonProps} onClick={handlePrev}>
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

  let prevDom = stepNum !== 0 && showPrev ? prevButton : null;
  let nextDom = stepNum < submitStepNum && showNext ? nextButton : null;
  let submitDom = stepNum >= submitStepNum ? submitButton : null;

  if (forceShowPrev && !prevDom) {
    prevDom = prevButton;
  }

  if (forceShowNext && !nextDom) {
    nextDom = nextButton;
  }

  if (forceShowSubmit && !submitDom) {
    submitDom = submitButton;
  }

  const dom = renderSubmitter ? (
    renderSubmitter({ prevDom, nextDom, submitDom }, props)
  ) : (
    <Flex gap={gap} align="center" justify={position}>
      {[prevDom, nextDom, submitDom].filter(Boolean)}
    </Flex>
  );

  return dom;
};

export default StepsSubmitter;
