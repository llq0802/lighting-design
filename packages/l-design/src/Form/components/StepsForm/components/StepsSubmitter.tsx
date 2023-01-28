import type { ButtonProps } from 'antd';
import { Button, Space } from 'antd';
import type { FC, FormEvent, ReactElement, ReactNode } from 'react';
import { useContext } from 'react';
import type { LFormSubmitterProps } from '../../../base/Submitter';
import StepsFormContext from './StepsFormContext';

export interface LStepsFormSubmitterProps
  extends Pick<
    LFormSubmitterProps,
    'submitText' | 'submitButtonProps' | 'form' | 'wrapperCol' | 'buttonAlign'
  > {
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

  /** 自定义渲染 */
  render?:
    | ((dom: ReactElement[], props: LStepsFormSubmitterProps) => ReactNode[] | ReactNode | false)
    | false;
}

const StepsFormSubmitter: FC<LStepsFormSubmitterProps> = (props) => {
  const {
    prevText = '上一步',
    prevButtonProps = {},
    onPrev = () => {},
    showPrev = true,

    nextText = '下一步',
    nextButtonProps = {},
    onNext = () => {},
    showNext = true,

    submitText = '确定',
    submitButtonProps = {},
    onSubmit = () => {},

    forceShowPrev = false,
    forceShowNext = false,
    forceShowSubmit = false,

    form,
    render,
  } = props;

  const { total = 0, current = 0 } = useContext(StepsFormContext);

  const handlePrev = (e) => {
    onPrev?.(e);
    prevButtonProps?.onClick?.(e);
  };

  const handleNext = (e) => {
    form?.submit(); // 提交表单验证
    onNext?.(e);
    nextButtonProps?.onClick?.(e);
  };

  const handleSubmit = (e) => {
    form?.submit(); // 提交表单验证
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
    let prevView = current !== 0 && showPrev ? prevButton : null;
    let nextView = current < total - 1 && showNext ? nextButton : null;
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
