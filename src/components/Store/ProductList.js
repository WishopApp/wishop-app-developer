import React, { Component } from 'react'
import { Link } from 'react-static'
import { Table, Badge } from 'antd'
import moment from 'moment'

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
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
    align: 'center',
    render: createdAt => (
      <div>
        <p>{moment(createdAt).format('DD-MM-YY')}</p>
        <p>{moment(createdAt).format('HH:MM')}</p>
      </div>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: status => (
      <div>
        {status === 'AVAILABLE' && <Badge status="success" text="Available" />}
        {status === 'OUT_OF_STOCK' && (
          <Badge status="error" text="Out of stock" />
        )}
      </div>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => <Link to={`/products/${record._id}`}>MORE</Link>,
  },
]

export default class StoreTable extends Component {
  render() {
    return <Table columns={columns} dataSource={this.props.products} />
  }
}
