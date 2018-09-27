import React, { Component } from 'react'
import { Link } from 'react-static'
import { Table, Badge } from 'antd'

const columns = [
  {
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Store name',
    dataIndex: 'token',
    key: 'token',
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
        <Link to={`/user/1`}>DETAIL</Link>
      </div>
    ),
  },
]

export default class UserTable extends Component {
  render() {
    return <Table columns={columns} dataSource={this.props.dataSource} />
  }
}
