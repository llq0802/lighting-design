import type { FormListFieldData } from 'antd';
import LForm from 'lighting-design/Form';
import type { FC } from 'react';
import { useRef } from 'react';

export type LListFormProps = {
  name: string | number | (string | number)[];
} & Record<string, any>;

const LListForm: FC<LListFormProps> = (props) => {
  const { name, children } = props;
  const fieldsRef = useRef<FormListFieldData[]>([]);

  // useImperativeHandle(()=>{

  // })
  return (
    <LForm.List name={name}>
      {(fields, actions, metas) => {
        const { add, remove, move } = actions;
        const { errors } = metas;

        fieldsRef.current = fields;
        return children(fields, actions, metas);
      }}
    </LForm.List>
  );
};

export default LListForm;
