import type { ButtonProps } from 'antd';
import { Button, Space } from 'antd';
import * as React from 'react';
import type { LFormSubmitterProps } from '../../../base/Submitter';

export interface StepsFormSubmitterProps
  extends Omit<
    LFormSubmitterProps,
    'render' | 'resetText' | 'resetButtonProps' | 'onReset' | 'noReset' | 'onSubmit'
  > {
  total: number;
  current: number;

  prevText?: React.ReactNode;
  onPrev?: (event?: React.FormEvent<HTMLFormElement>) => void;
  prevButtonProps?: ButtonProps;
  noPrev?: boolean;

  nextText?: React.ReactNode;
  onNext?: (event?: React.FormEvent<HTMLFormElement>) => void;
  nextButtonProps?: ButtonProps;
  noNext?: boolean;

  onSubmit?: (event?: React.FormEvent<HTMLFormElement>) => void;

  forceShowPrev?: boolean;
  forceShowNext?: boolean;
  forceShowSubmit?: boolean;

  render?:
    | ((
        props: StepsFormSubmitterProps,
        dom: React.ReactElement[],
      ) => React.ReactNode[] | React.ReactNode | false)
    | false;
}

const StepsFormSubmitter: React.FC<StepsFormSubmitterProps> = (props) => {
  const {
    total = 0,
    current = 0,

    prevText = '上一步',
    prevButtonProps = {},
    onPrev = () => {},
    noPrev = false,

    nextText = '下一步',
    nextButtonProps = {},
    onNext = () => {},
    noNext = false,

    submitText = '提交',
    submitButtonProps = {},
    onSubmit = () => {},

    forceShowPrev = false,
    forceShowNext = false,
    forceShowSubmit = false,

    form,
    render,
  } = props;

  const handlePrev = (e) => {
    onPrev?.(e);
    prevButtonProps?.onClick?.(e);
  };

  const handleNext = (e) => {
    form?.submit();
    onNext?.(e);
    nextButtonProps?.onClick?.(e);
  };

  const handleSubmit = (e) => {
    form?.submit();
    onSubmit?.(e);
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
    let prevView = current !== 0 && !noPrev ? prevButton : null;
    let nextView = current < total - 1 && !noNext ? nextButton : null;
    let submitView = current === total - 1 ? submitButton : null;

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

  const renderDom = render ? render(props, createDom()) : createDom();

  if (!renderDom) {
    return null;
  }
  if (Array.isArray(renderDom)) {
    if (renderDom?.length < 1) {
      return null;
    }
    if (renderDom.length === 1) {
      return renderDom[0] as React.ReactElement;
    }
    return <Space>{renderDom}</Space>;
  }

  return renderDom as React.ReactElement;
};

export default StepsFormSubmitter;
