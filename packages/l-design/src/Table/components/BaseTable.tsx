import { Card, Table } from 'antd';

const BaseTable = () => {
  const tableDom = (
    <Card bordered={false}>
      <Table />
    </Card>
  );

  return <div>{tableDom}</div>;
};

export default BaseTable;
