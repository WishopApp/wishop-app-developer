import React, { Component } from 'react'
import { Link } from 'react-static'
import { Table, Divider } from 'antd'

export default class CategoryTable extends Component {
  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <div>
            {console.log(record)}
            <Link to="#">DETAIL</Link>
            <Divider type="vertical" />
            <a onClick={this.props.onEdit}>EDIT</a>
          </div>
        ),
      },
    ]

    return <Table columns={columns} dataSource={this.props.dataSource} />
  }
}
