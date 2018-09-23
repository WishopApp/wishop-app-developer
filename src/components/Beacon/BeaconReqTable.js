import React, { Component } from 'react'
import { Link } from 'react-static'
import { Table, Badge, Modal, Select } from 'antd'

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]

const Option = Select.Option

export default class CategoryTable extends Component {
  state = {
    statusVisible: false,
  }

  render() {
    const columns = [
      {
        title: 'Store name',
        dataIndex: 'store',
        key: 'store',
      },
      {
        title: 'Store Owner',
        dataIndex: 'owner',
        key: 'owner',
      },
      {
        title: 'Telno',
        dataIndex: 'telno',
        key: 'telno',
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
          <a onClick={() => this.setState({ statusVisible: true })}>
            CHANGE STATUS
          </a>
        ),
      },
    ]

    return (
      <div>
        <Table columns={columns} dataSource={data} />
        <Modal
          title="CHANGE BEACON STATUS"
          visible={this.state.statusVisible}
          onOk={this.handleOk}
          onCancel={() => this.setState({ statusVisible: false })}
        >
          <p className="m-b-16">Status</p>
          <Select
            defaultValue={this.state.status}
            style={{ width: '100%' }}
            onChange={status => this.setState({ status })}
          >
            <Option value="INDOOR">Indoor</Option>
            <Option value="STICKER">Sticker</Option>
          </Select>
        </Modal>
      </div>
    )
  }
}
