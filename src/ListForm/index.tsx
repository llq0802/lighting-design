import LForm from 'lighting-design/Form';

// export type LListFormProps = {
//   name: string | number | (string | number)[];
// } & Record<string, any>;

// const LListForm: FC<LListFormProps> = (props) => {
//   const { name, children, actionRef } = props;
//   const fieldsRef = useRef<FormListFieldData[]>([]);

//   // 暴露外部方法
//   useImperativeHandle(actionRef, () => ({
//     fields: fieldsRef.current,
//   }));

//   // return (
//   //   <LForm.List name={name}>
//   //     {(fields, actions, metas) => {
//   //       const { add, remove, move } = actions;
//   //       const { errors } = metas;
//   //       fieldsRef.current = fields;
//   //       return children(fields, actions, metas);
//   //     }}
//   //   </LForm.List>
//   // );
//   return <LForm.List></LForm.List>
// };

export default LForm.List;
