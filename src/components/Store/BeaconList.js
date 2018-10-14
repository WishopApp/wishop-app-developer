import React, { Component } from 'react'
import { Table, Badge } from 'antd'
import moment from 'moment'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'UUID',
    dataIndex: 'uuid',
    key: 'uuid',
  },
  {
    title: 'Major',
    dataIndex: 'major',
    key: 'major',
  },
  {
    title: 'Minor',
    dataIndex: 'minor',
    key: 'minor',
  },
  {
    title: 'Location X',
    dataIndex: 'locationX',
    key: 'locationX',
  },
  {
    title: 'Location Y',
    dataIndex: 'locationY',
    key: 'locationY',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Registered At',
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
        {status === 'IDLE' && <Badge status="success" text="Idle" />}
        {status === 'INUSE' && <Badge status="processing" text="Inused" />}
        {status === 'EXPIRE' && <Badge status="error" text="Expired" />}
      </div>
    ),
  },
]

export default class StoreTable extends Component {
  render() {
    return <Table columns={columns} dataSource={this.props.beacons} />
  }
}
