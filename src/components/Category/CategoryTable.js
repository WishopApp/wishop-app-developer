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
    title: 'Action',
    key: 'action',
    render: (text, record) => <Link to="#">DETAIL</Link>,
  },
]

export default class CategoryTable extends Component {
  render() {
    return <Table columns={columns} dataSource={this.props.dataSource} />
  }
}
