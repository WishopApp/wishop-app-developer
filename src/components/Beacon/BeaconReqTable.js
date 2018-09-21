import React, { Component } from 'react'
import { Link } from 'react-static'
import { Table, Badge } from 'antd'

const columns = [
  {
    title: 'Store name',
    dataIndex: 'store',
    key: 'store',
  },
  {
    title: 'Store Owner',
    dataIndex: 'owner',
    key: 'owner',
  },
  {
    title: 'Telno',
    dataIndex: 'telno',
    key: 'telno',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Registered At',
    dataIndex: 'registered_at',
    key: 'registered_at',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: () => <Badge status="processing" text="NEW" />,
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => <Link to="#">MORE</Link>,
  },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]

export default class CategoryTable extends Component {
  render() {
    return <Table columns={columns} dataSource={data} />
  }
}
