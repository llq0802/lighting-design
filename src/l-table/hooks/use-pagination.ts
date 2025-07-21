import { useControllableValue } from 'ahooks';
import { useState } from 'react';

export const usePagination = (props) => {
  const [page, setPage] = useControllableValue(props, {
    defaultValuePropName: 'defaultCurrent',
    valuePropName: 'current',
    trigger: 'onChange',
  });

  const [current, setCurrent] = useState(props?.defaultCurrent || 1);
  const [pageSize, setPageSize] = useState(props?.defaultPageSize || 10);
};
