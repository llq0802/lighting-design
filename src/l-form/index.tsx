import BaseForm from './components/base-form';
import { LFormContextProvider } from './context';
import type { LFormProps } from './interface';

function LForm<T extends any = any>(props: LFormProps<T>): React.ReactElement {
  const { labelWidth, wrapperWidth, alignItems, formItemBottom, ...restProps } = props;

  return (
    <LFormContextProvider
      disabled={props.disabled}
      size={props.size}
      labelWidth={labelWidth}
      wrapperWidth={wrapperWidth}
      alignItems={alignItems}
      formItemBottom={formItemBottom}
    >
      <BaseForm<T> {...restProps} />
    </LFormContextProvider>
  );
}

export default LForm;
export { useLFormContext } from './context';
export * from './interface';
