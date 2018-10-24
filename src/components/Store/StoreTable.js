import React, { Component } from 'react'
import { Link } from 'react-static'
import { Table, Badge } from 'antd'
import { Query } from 'react-apollo'
import moment from 'moment'

import { STORES } from '../../graphql/query/store'
import ExamplePhoto from '../ExamplePhoto'

const columns = [
  {
    title: 'Exmaple Image',
    dataIndex: 'avatarUrl',
    key: 'avatarUrl',
    width: 150,
    render: avatarUrl => <ExamplePhoto img={avatarUrl} />,
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
    render: owner => owner && <p>{owner.email}</p>,
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
    align: 'center',
    render: createdAt => (
      <div>
        {moment(createdAt).format('DD-MM-YYYY')}
        <br />
        {moment(createdAt).format('HH:mm')}
      </div>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: status => (
      <div>
        {status === 'OPEN' && <Badge status="success" text="Open" />}
        {status === 'CLOSED' && <Badge status="warning" text="Closed" />}
        {status === 'BANNED' && <Badge status="error" text="Banned" />}
      </div>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => <Link to={`/store/${record._id}`}>MORE</Link>,
  },
]

export default class StoreTable extends Component {
  render() {
    return (
      <div>
        <Query query={STORES}>
          {({ loading, error, data }) => {
            if (loading) return <Table loading />
            if (error) return `Error: ${error.message}`

            return <Table columns={columns} dataSource={data.stores} />
          }}
        </Query>
      </div>
    )
  }
}
