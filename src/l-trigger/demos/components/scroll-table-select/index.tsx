import { Select, Tooltip } from 'antd';
import { useRef, useState } from 'react';
import TableSelectRenderer from './TableSelectRender';

function ScrollTableSelect({
  onChange,
  value,
  mode,
  tableColumns,
  labelKey = 'label',
  rowKey = 'id',
  modalTitle,
  url,
  tableFetchDataHandle,
  tableProps,
}) {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const selectBoxRef = useRef();
  const tableRef = useRef();

  // 把当前选中的值转换为select格式的值
  function getValue() {
    if (mode === 'multiple') {
      return value?.map((item) => ({ value: item?.[rowKey], label: item?.[labelKey] }));
    } else {
      return { value: value?.[rowKey], label: value?.[labelKey] };
    }
  }

  return (
    <div ref={selectBoxRef}>
      <Select
        onDropdownVisibleChange={(flag) => {
          setOpen(flag);
          tableRef.current?.setHidden(!flag);
        }}
        onSearch={setSearchValue}
        searchValue={searchValue}
        showSearch
        open={open}
        style={{ width: 300 }}
        dropdownRender={() => (
          <TableSelectRenderer
            rowKey={rowKey}
            setOpen={setOpen}
            mode={mode}
            onChange={onChange}
            value={value}
            columns={tableColumns}
            modalTitle={modalTitle}
            fetchDataHandle={tableFetchDataHandle}
            url={url}
            tableProps={tableProps}
            selectBoxRef={selectBoxRef}
            searchValue={searchValue}
            ref={tableRef}
          />
        )}
        value={getValue()}
        mode={mode}
        onDeselect={(v) => {
          // 通过标签移除某项值
          if (mode === 'multiple') {
            onChange(value.filter((item) => item[rowKey] !== v.value));
          }
        }}
        labelInValue
        maxTagCount="responsive"
        maxTagPlaceholder={(omittedValues) => {
          // 用Tooltip显示多余的值
          return (
            <Tooltip title={omittedValues.map((o) => o.label).join(',')}>
              <div>+ {omittedValues.length}</div>
            </Tooltip>
          );
        }}
      />
    </div>
  );
}

export default ScrollTableSelect;
