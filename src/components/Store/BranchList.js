import React, { Component } from 'react'
import { Table } from 'antd'
import moment from 'moment'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Tel no',
    dataIndex: 'telNo',
    key: 'telNo',
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
]

export default class StoreTable extends Component {
  render() {
    return <Table columns={columns} dataSource={this.props.branchs} />
  }
}
