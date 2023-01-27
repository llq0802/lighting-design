import { SettingOutlined } from '@ant-design/icons';
import { useUpdateEffect } from 'ahooks';
import type { TableColumnType } from 'antd';
import { Checkbox, ConfigProvider, Popover, Tooltip, Tree } from 'antd';
import type { Key, ReactNode } from 'react';
import { useCallback, useContext, useMemo, useState } from 'react';
import TableContext from '../TableContext';
import { LIGHTD_TABLE } from './BaseTable';

const ColumnSetting = () => {
  const { columns: outColumns = [], setColumns, rootRef } = useContext(TableContext);
  // 全部列的 key
  const columnsKey = useMemo(
    () =>
      outColumns.map((column: TableColumnType<any>, index: number) => {
        return `${column.dataIndex || ''}-${column.key || ''}-${index}`;
      }),
    [outColumns],
  );
  // 当前显示的列 key ，默认全部选中
  const [selectedKey, setSelectedKey] = useState<Key[]>(columnsKey);

  const checkAll = useMemo(
    () => selectedKey.length === outColumns.length,
    [selectedKey, outColumns],
  );

  const indeterminate = useMemo(
    () => selectedKey.length > 0 && selectedKey.length !== outColumns.length,
    [selectedKey, outColumns],
  );

  useUpdateEffect(() => {
    const newColumns = outColumns.filter((item, index) => selectedKey.includes(columnsKey[index]));
    setColumns?.(newColumns);
  }, [outColumns, columnsKey, selectedKey, setColumns]);

  useUpdateEffect(() => {
    setSelectedKey(columnsKey);
  }, [columnsKey]);

  const treeData = useMemo(() => {
    return outColumns.map((item, index) => {
      return {
        key: columnsKey[index],
        title: (item.title || '') as ReactNode,
      };
    });
  }, [outColumns, columnsKey]);

  const onCheckAllChange = useCallback(() => {
    if (selectedKey.length === outColumns.length) {
      setSelectedKey([]);
    } else {
      setSelectedKey([...columnsKey]);
    }
  }, [selectedKey.length, outColumns.length, columnsKey]);

  const handleTreeCheck = useCallback(
    (checkedKeys: Key[] | { checked: Key[]; halfChecked: Key[] }) => {
      setSelectedKey(checkedKeys as Key[]);
    },
    [],
  );

  return (
    <ConfigProvider getPopupContainer={() => rootRef!.current || document.body}>
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
            onCheck={handleTreeCheck}
            checkedKeys={selectedKey}
            treeData={treeData}
            className={`${LIGHTD_TABLE}-column-setting`}
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
    </ConfigProvider>
  );
};

export default ColumnSetting;
