import React, { Component } from 'react'
import { Link } from 'react-static'
import { Table } from 'antd'

const columns = [
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
    title: 'Action',
    key: 'action',
    render: (text, record) => <Link to="#">DETAIL</Link>,
  },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    category: 'Shoe',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    category: 'Dress',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    category: 'Shoe',
    tags: ['cool', 'teacher'],
  },
]

export default class SubCategoryTable extends Component {
  render() {
    return <Table columns={columns} dataSource={data} />
  }
}
