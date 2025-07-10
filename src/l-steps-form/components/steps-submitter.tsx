import { Button, Flex, type ButtonProps } from 'antd';
import { emptyObject } from 'lighting-design/constants';
import type { FC, FormEvent, ReactNode } from 'react';

export interface StepsSubmitterProps {
  stepNum: number;
  submitStepNum: number;
  position?: 'flex-start' | 'center' | 'flex-end';
  gap?: number | string;
  loading?: boolean;
  /** 上一步按钮的文字 */
  prevText?: ReactNode;
  /** 点击上一步按钮的回调 */
  onPrev?: (event?: FormEvent<HTMLFormElement>) => void;
  /** 点击上一步按钮的Props*/
  prevButtonProps?: ButtonProps;
  /** 是否显示上一步按钮 */
  showPrev?: boolean;
  /** 下一步按钮的文字 */
  nextText?: ReactNode;
  /** 点击下一步按钮的回调 */
  onNext?: (event?: FormEvent<HTMLFormElement>) => void;
  /** 点击下一步按钮的Props*/
  nextButtonProps?: ButtonProps;
  submitButtonProps?: ButtonProps;
  /** 是否显示下一步按钮 */
  showNext?: boolean;
  /** 点击提交按钮的回调 */
  onSubmit?: (event?: FormEvent<HTMLFormElement>) => void;
  /** 强制显示上一步按钮，优先级比 showPrev 高 */
  forceShowPrev?: boolean;
  /** 强制显示下一步按钮，优先级比 showNext 高 */
  forceShowNext?: boolean;
  /** 强制显示提交按钮 */
  forceShowSubmit?: boolean;
  submitText?: string;
  /** 自定义渲染 */
  renderSubmitter?: (
    doms: {
      prevDom: ReactNode;
      nextDom: ReactNode;
      submitDom: ReactNode;
    },
    props: StepsSubmitterProps,
  ) => ReactNode;
}

const StepsSubmitter: FC<StepsSubmitterProps> = (props) => {
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
