import { SettingOutlined } from '@ant-design/icons';
import { useMemoizedFn } from 'ahooks';
import { Checkbox, Popover, Tree } from 'antd';
import { getTableColumnsKey } from 'lighting-design/_utils';
import type { Key } from 'react';
import { useContext, useMemo } from 'react';
import TableContext from '../TableContext';
import { LIGHTD_TABLE } from './BaseTable';

const ColumnSetting = ({ onColumnIconChange }) => {
  const { columns: outColumns = [], columnKeys = [], setColumnKeys } = useContext(TableContext);

  const treeData = useMemo(() => {
    return outColumns.map((item, i) => {
      return {
        key: getTableColumnsKey(item, i),
        title: item.title || '',
      };
    });
  }, [outColumns]);

  const indeterminate = useMemo(
    () => columnKeys.length > 0 && columnKeys.length !== outColumns.length,
    [columnKeys, outColumns],
  );
  const checkAll = useMemo(() => columnKeys.length === outColumns.length, [columnKeys, outColumns]);

  const handleTreeCheck = useMemoizedFn((keys: Key[]) => {
    setColumnKeys([...keys]);
    onColumnIconChange?.([...keys]);
  });

  const onCheckAllChange = useMemoizedFn((e) => {
    if (e.target.checked) {
      const newKey = outColumns.map(getTableColumnsKey);
      setColumnKeys(newKey);
    } else {
      setColumnKeys([]);
    }
  });

  return (
    <>
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
            checkedKeys={columnKeys}
            treeData={treeData}
            className={`${LIGHTD_TABLE}-column-setting-tree`}
          />
        }
        arrow={false}
        placement="bottomRight"
        trigger={['click']}
        overlayClassName={`${LIGHTD_TABLE}-column-setting-overlay`}
      >
        <SettingOutlined title="列设置" />
      </Popover>
    </>
  );
};

export default ColumnSetting;
