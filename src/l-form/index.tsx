import BaseForm from './components/base-form';
import { LFormContextProvider } from './context';
import type { LFormProps } from './interface';

function LForm<T extends any = any>(props: LFormProps<T>): React.ReactElement {
  const { labelWidth, wrapperWidth, alignItems, formItemBottom, ...restProps } = props;

  return (
    <LFormContextProvider
      labelWidth={labelWidth}
      wrapperWidth={wrapperWidth}
      alignItems={alignItems}
      formItemBottom={formItemBottom}
    >
      <BaseForm<T> formItemBottom={formItemBottom} {...restProps} />
    </LFormContextProvider>
  );
}

export default LForm;
export * from './interface';
