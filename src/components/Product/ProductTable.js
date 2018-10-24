import React, { Component } from 'react'
import { Link } from 'react-static'
import { Table, Badge } from 'antd'
import { Query } from 'react-apollo'
import moment from 'moment'

import { PRODUCTS } from '../../graphql/query/product'
import ExamplePhoto from '../ExamplePhoto'

const columns = [
  {
    title: 'Example Image',
    dataIndex: 'photoUrlList',
    key: 'photoUrlList',
    width: 150,
    render: photoUrlList => <ExamplePhoto img={photoUrlList[0]} />,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
    render: category => <p>{category.name}</p>,
  },
  {
    title: 'Sub category',
    dataIndex: 'subCategory',
    key: 'subCategory',
    render: subCategory => <p>{subCategory.name}</p>,
  },
  {
    title: 'Store',
    dataIndex: 'store',
    key: 'store',
    render: store => <p>{store.name}</p>,
  },
  {
    title: 'Registerd At',
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
    align: 'center',
    render: status => {
      if (status === 'AVAILABLE')
        return <Badge status="success" text="Available" />
      if (status === 'OUT_OF_STOCK')
        return <Badge status="error" text="Out of stock" />
    },
  },
  {
    title: 'Action',
    key: 'action',
    align: 'center',
    render: (text, record) => <Link to={`/product/${record._id}`}>MORE</Link>,
  },
]

export default class ProductTable extends Component {
  render() {
    return (
      <div>
        <Query query={PRODUCTS}>
          {({ loading, error, data }) => {
            if (loading) return <Table loading />
            if (error) return `Error: ${error.message}`

            return <Table columns={columns} dataSource={data.products} />
          }}
        </Query>
      </div>
    )
  }
}
