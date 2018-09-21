import React, { Component } from 'react'
import { Link } from 'react-static'
import { Table, Badge } from 'antd'

const columns = [
  {
    title: 'Example Image',
    dataIndex: 'image',
    key: 'image',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Store',
    dataIndex: 'store',
    key: 'store',
  },
  {
    title: 'Created At',
    dataIndex: 'created_at',
    key: 'created_at',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: () => <Badge status="success" text="Available" />,
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

export default class ProductTable extends Component {
  render() {
    return <Table columns={columns} dataSource={data} />
  }
}
