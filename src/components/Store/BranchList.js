import React, { Component } from 'react'
import { Link } from 'react-static'
import { Table, Badge } from 'antd'

const columns = [
  {
    title: 'Exmaple Image',
    dataIndex: 'image',
    key: 'image',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Owner',
    dataIndex: 'owner',
    key: 'owner',
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
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
    render: (text, record) => <Link to={`/store/1`}>MORE</Link>,
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

export default class StoreTable extends Component {
  render() {
    return <Table columns={columns} dataSource={data} />
  }
}
