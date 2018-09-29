import React, { Component } from 'react'
import { Link } from 'react-static'
import { Table, Badge } from 'antd'
import { Query } from 'react-apollo'

import { USERS } from '../../graphql/query/user'

const columns = [
  {
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Name',
    dataIndex: 'profile',
    key: 'profile',
    render: profile => <p>{profile.name}</p>,
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
        <Link to={`/user/${record._id}`}>DETAIL</Link>
      </div>
    ),
  },
]

export default class UserTable extends Component {
  render() {
    return (
      <Query query={USERS}>
        {({ loading, error, data }) => {
          if (loading) return <Table loading />
          if (error) return `Error: ${error.message}`

          return <Table columns={columns} dataSource={data.users} />
        }}
      </Query>
    )
  }
}
