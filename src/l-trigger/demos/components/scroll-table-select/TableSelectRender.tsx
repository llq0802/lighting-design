import { useUpdateEffect } from 'ahooks';
import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import ScrollTable from './ScrollTable';

function TableSelectRender(
  {
    setOpen,
    mode,
    onChange = () => {},
    value,
    columns,
    fetchDataHandle,
    url,
    tableProps,
    rowKey,
    selectBoxRef,
    searchValue,
    searchKey = 'keywords',
  },
  ref,
) {
  const [hidden, setHidden] = useState(false);
  const [selectedRows, setSelectedRows] = useState(value || []);

  const tableRef = useRef();

  useEffect(() => {
    setSelectedRows(value);
  }, [value]);

  useUpdateEffect(() => {
    tableRef.current?.search({ [searchKey]: searchValue });
  }, [searchValue]);

  const width = useMemo(() => {
    if (selectBoxRef.current) {
      return selectBoxRef.current.querySelector('.ant-select')?.offsetWidth;
    }
    return 0;
  }, [selectBoxRef.current]);

  useImperativeHandle(
    ref,
    () => {
      return {
        // 延迟显示表格的loading
        setHidden: (flag) => {
          if (!flag) {
            setTimeout(() => {
              setHidden(false);
            }, 100);
          } else {
            setHidden(true);
          }
        },
      };
    },
    [],
  );

  return (
    <ScrollTable
      {...tableProps}
      ref={tableRef}
      size="small"
      url={url}
      allowChecked={mode === 'multiple'}
      fetchDataHandle={fetchDataHandle}
      rowClassName={(record) => {
        return mode !== 'multiple' && record[rowKey] === value?.[rowKey]
          ? 'ant-table-row-selected'
          : '';
      }}
      onCheckedChange={(_selectedRows) => {
        onChange(_selectedRows);
      }}
      selectedRows={selectedRows}
      rowKey={rowKey}
      onRow={(record) => {
        return {
          onClick: () => {
            if (mode !== 'multiple') {
              onChange(record);
              setOpen(false);
            }
          },
        };
      }}
      columns={columns}
      scroll={{ y: 300 }}
      virtual
      summaryWidth={width}
      hiddenLoading={hidden}
    />
  );
}

export default forwardRef(TableSelectRender);
