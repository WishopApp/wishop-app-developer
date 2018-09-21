import React, { Component } from 'react'
import { Link } from 'react-static'
import { Table, Badge, Divider } from 'antd'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Token',
    dataIndex: 'token',
    key: 'token',
  },
  {
    title: 'Store owner',
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
    render: (text, record) => (
      <div>
        <Link to="#">DETAIL</Link>
        <Divider type="vertical" />
        <Link to="#">ASSIGN STORE</Link>
      </div>
    ),
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
