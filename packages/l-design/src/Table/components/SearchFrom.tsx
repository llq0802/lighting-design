import type { CardProps, FormInstance } from 'antd';
import { Card } from 'antd';
import type { ReactNode } from 'react';
import { cloneElement, forwardRef, useImperativeHandle, useMemo } from 'react';
import LForm from '../../Form';
import type { LQueryFormProps } from '../../Form/components/QueryForm';
import LQueryForm from '../../Form/components/QueryForm';
import { uniqueId } from '../../utils';

export declare interface SearchFormProps extends LQueryFormProps {
  formItems?: Exclude<ReactNode, string | number | boolean | null | undefined>[];
  cardProps?: CardProps;
  ref?: React.MutableRefObject<FormInstance | undefined> | ((instance: FormInstance<any>) => void);
}

const SearchForm = forwardRef(
  ({ formItems, cardProps, name, ...restProps }: SearchFormProps, ref) => {
    const [form] = LForm.useForm();

    let items: Exclude<ReactNode, string | number | boolean | null | undefined>[] = [];

    if (Array.isArray(formItems) && formItems.length > 0) {
      items = formItems;
    }

    if (items.length <= 0) {
      return null;
    }

    const searchFormId = useMemo(() => name || uniqueId('lightd-table-search-form'), [name]);

    useImperativeHandle(ref, () => form, [form]);

    return (
      <Card
        bordered={false}
        {...cardProps}
        bodyStyle={{ paddingBottom: 0, ...cardProps?.bodyStyle }}
      >
        <LQueryForm form={form} name={searchFormId} {...restProps}>
          {items.map((item: any, index: number) =>
            cloneElement(item, {
              key: item?.key || item?.props?.key || item?.props?.name + index.toString(),
            }),
          )}
        </LQueryForm>
      </Card>
    );
  },
);

export default SearchForm;
