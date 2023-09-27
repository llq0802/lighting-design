import type { CardProps, FormInstance } from 'antd';
import { Card } from 'antd';
import classNames from 'classnames';
import type { LQueryFormProps } from 'lighting-design/QueryForm';
import LQueryForm from 'lighting-design/QueryForm';
import { uniqueId } from 'lighting-design/_utils';
import type { ReactNode } from 'react';
import { cloneElement, forwardRef, useImperativeHandle, useMemo } from 'react';
import LForm from '../../Form';
import './styles.less';

export const LIGHTD_CARD = 'lightd-card';

export declare interface SearchFormProps extends LQueryFormProps {
  formItems?: Exclude<
    ReactNode,
    string | number | boolean | null | undefined
  >[];
  cardProps?: CardProps;
  ref?:
    | React.MutableRefObject<FormInstance | undefined>
    | ((instance: FormInstance<any>) => void);
}

const SearchForm = forwardRef(
  (
    {
      formItems: items = [],
      cardProps,
      name,
      loading,
      isReady,
      submitter,
      ...restProps
    }: SearchFormProps,
    ref,
  ) => {
    const [form] = LForm.useForm();
    useImperativeHandle(ref, () => form);
    const searchFormId = useMemo(
      () => name || uniqueId('lightd-table-search-form'),
      [name],
    );

    const dom = useMemo(() => {
      if (items?.length <= 0) {
        return [];
      }
      return items?.map((item: any, index: number) =>
        cloneElement(item, {
          key:
            item?.key ||
            item?.props?.key ||
            item?.props?.name + index.toString(),
        }),
      );
    }, [items]);

    if (items?.length <= 0) {
      return null;
    }
    return (
      <Card
        bordered={false}
        {...cardProps}
        className={classNames(`${LIGHTD_CARD}`, cardProps?.className)}
        style={{
          marginBottom: 16,
          ...cardProps?.style,
        }}
        bodyStyle={{
          paddingBottom: 0,
          ...cardProps?.bodyStyle,
        }}
      >
        <LQueryForm
          form={form}
          name={searchFormId}
          loading={loading}
          isReady={isReady}
          {...restProps}
          submitter={{
            ...submitter,
            resetButtonProps: {
              disabled: loading || !isReady,
              ...submitter?.resetButtonProps,
            },
            submitButtonProps: {
              // loading,
              loading: false,
              disabled: loading || !isReady,
              ...submitter?.submitButtonProps,
            },
          }}
        >
          {dom}
        </LQueryForm>
      </Card>
    );
  },
);

export default SearchForm;
