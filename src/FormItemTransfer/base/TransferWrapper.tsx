import { Transfer } from 'antd';
import type { TransferDirection } from 'antd/es/transfer';
import type { FC } from 'react';
import { useState } from 'react';
import type { LFromItemTransferProps } from '..';

interface RecordType {
  value: string;
  label: string;
  description: string;
}

const mockData: RecordType[] = Array.from({ length: 20 }).map((_, i) => ({
  value: i.toString(),
  label: `content${i + 1}`,
  description: `description of content${i + 1}`,
}));

const initialTargetKeys = mockData
  .filter((item) => Number(item.value) > 10)
  .map((item) => item.value);

type TransferWrapperProps = Pick<
  LFromItemTransferProps,
  'limitMaxCount' | 'transferProps' | 'fieldNames'
> &
  Record<string, any>;

const TransferWrapper: FC<TransferWrapperProps> = (props) => {
  const {
    fieldNames = { label: 'label', value: 'value' },
    limitMaxCount,
    transferProps,
    ...restProps
  } = props;
  // console.log('TransferWrapper-props', props);

  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const onChange = (
    nextTargetKeys: string[],
    direction: TransferDirection,
    moveKeys: string[],
  ) => {
    transferProps?.onChange?.(nextTargetKeys, direction, moveKeys);
    restProps?.onChange?.(nextTargetKeys, direction, moveKeys);
  };

  const onSelectChange = (
    sourceSelectedKeys: string[],
    targetSelectedKeys: string[],
  ) => {
    console.log('sourceSelectedKeys:', sourceSelectedKeys);
    console.log('targetSelectedKeys:', targetSelectedKeys);
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  const filterOption = (inputValue: string, option: RecordType) =>
    option.description.indexOf(inputValue) > -1;

  return (
    <Transfer
      // style={{
      //   background: 'red',
      // }}
      // showSelectAll={false}
      operationStyle={{
        background: 'blue',
      }}
      titles={['数据源', '已选择']}
      listStyle={{
        width: 300,
        height: 500,
        background: 'red',
      }}
      showSearch
      rowKey={(record) => record[fieldNames?.value]}
      dataSource={mockData}
      selectedKeys={selectedKeys}
      filterOption={filterOption}
      render={(item) => {
        // console.log('item', item);
        return item.label;
      }}
      {...transferProps}
      {...restProps}
      onChange={onChange}
      onSelectChange={onSelectChange}
    />
  );
};

export default TransferWrapper;
