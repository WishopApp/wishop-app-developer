import React, { Component } from 'react'
import { Link } from 'react-static'
import { Table, Badge } from 'antd'
import { Query } from 'react-apollo'
import { STORES } from '../../graphql/query/store'

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
    render: owner => owner && <p>{owner.email}</p>,
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
