import { SettingOutlined } from '@ant-design/icons';
import type { TableColumnType } from 'antd';
import { Checkbox, Popover, Tooltip, Tree } from 'antd';
import type { Key, ReactNode } from 'react';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import TableContext from '../TableContext';

const prefixCls = 'lightd-table';

const ColumnSetting = () => {
  const { columns = [], setColumns } = useContext(TableContext);
  // 全部列的 key
  const columnsKey = useMemo(
    () =>
      columns.map((column: TableColumnType<any>, index: number) => {
        return `${column.dataIndex || ''}-${column.key || ''}-${index}`;
      }),
    [columns],
  );

  const [selectedKey, setSelectedKey] = useState<Key[]>(columnsKey); // 当前显示的列 key ，默认全部选中

  const checkAll = useMemo(() => selectedKey.length === columns.length, [selectedKey, columns]);

  const indeterminate = useMemo(
    () => selectedKey.length > 0 && selectedKey.length !== columns.length,
    [selectedKey, columns],
  );

  // useEffect(() => {
  //   const newColumns = columns.filter((item, index) => selectedKey.includes(columnsKey[index]));
  //   console.log('newColumns ', newColumns);
  //   setColumns?.(newColumns);
  // }, [selectedKey]);

  console.log(' setSelectedKey');
  useEffect(() => {
    setSelectedKey(columnsKey);
  }, [columnsKey]);

  const treeData = useMemo(() => {
    return columns.map((item, index) => {
      return {
        key: columnsKey[index],
        title: (item.title || '') as ReactNode,
      };
    });
  }, [columns, columnsKey]);

  const onCheckAllChange = useCallback(() => {
    if (selectedKey.length === columns.length) {
      setSelectedKey([]);
    } else {
      setSelectedKey([...columnsKey]);
    }
  }, [selectedKey.length, columns.length, columnsKey]);

  const onCheck = useCallback((checkedKeysValue: Key[]) => {
    setSelectedKey(checkedKeysValue);
  }, []);

  return (
    <Popover
      title={
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
          style={{ height: '32px', lineHeight: '32px' }}
        >
          全选
        </Checkbox>
      }
      content={
        <Tree
          checkable
          selectable={false}
          blockNode
          onCheck={onCheck}
          checkedKeys={selectedKey}
          treeData={treeData}
          className={`${prefixCls}-column-setting`}
        />
      }
      arrowPointAtCenter
      placement="bottomRight"
      trigger={['click']}
    >
      <Tooltip title="列设置">
        <SettingOutlined />
      </Tooltip>
    </Popover>
  );
};

export default ColumnSetting;
