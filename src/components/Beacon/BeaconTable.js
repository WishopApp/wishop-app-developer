import React, { Component } from 'react'
import { Link } from 'react-static'
import {
  Table,
  Badge,
  Divider,
  Select,
  AutoComplete,
  Modal,
  Input,
  Button,
  List,
  Row,
  Col,
} from 'antd'

const Option = Select.Option

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

const data2 = [
  {
    type: 'ASSIGN',
    title: `Assign to 'Store name'`,
  },
  {
    type: 'IDLE',
    title: `Change status to 'Idle'`,
  },
  {
    type: 'EXPIRED',
    title: `Change status to 'Expire'`,
  },
]

export default class CategoryTable extends Component {
  state = {
    visible: false,
    detailVisible: false,
    type: 'INDOOR',
    locationX: '',
    locationY: '',
    dataSource: ['A', 'B', 'C'],
  }

  handleSearch = value => {
    console.log(value)
    // this.setState({
    //   dataSource: !value ? [] : [value, value + value, value + value + value],
    // })
  }

  changeStore = value => {
    console.log(value)
  }

  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Token',
        dataIndex: 'token',
        key: 'token',
      },
      {
        title: 'Store owner',
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
            <a onClick={() => this.setState({ detailVisible: true })}>DETAIL</a>
            <Divider type="vertical" />
            <a onClick={() => this.setState({ visible: true })}>ASSIGN</a>
            <Divider type="vertical" />
            <Link to="#">DE ASSIGN</Link>
          </div>
        ),
      },
    ]

    return (
      <div>
        <Table columns={columns} dataSource={data} />

        <Modal
          title="USAGE HISTORY"
          visible={this.state.detailVisible}
          onOk={this.handleOk}
          onCancel={() => this.setState({ detailVisible: false })}
          okText="CREATE"
          cancelText="CLOSE"
        >
          <p className="m-b-16">History</p>
          <Row style={{ marginBottom: 50 }}>
            <List
              bordered
              dataSource={data2}
              renderItem={item => (
                <List.Item>
                  <Row
                    type="flex"
                    justify="space-between"
                    style={{ width: '100%' }}
                  >
                    <Col span={16}>
                      {item.type === 'ASSIGN' && (
                        <Badge status="processing" text={item.title} />
                      )}
                      {item.type === 'IDLE' && (
                        <Badge status="success" text={item.title} />
                      )}
                      {item.type === 'EXPIRED' && (
                        <Badge status="error" text={item.title} />
                      )}
                    </Col>
                    <Col span={8} style={{ textAlign: 'right' }}>
                      <p>2018-06-06</p>
                    </Col>
                  </Row>
                </List.Item>
              )}
            />
          </Row>

          <p className="m-t-16 m-b-16">Close this Beacon</p>
          <Button type="danger">CHANGE BEACON TO EXPIRE</Button>
        </Modal>

        <Modal
          title="NEW BEACON"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={() => this.setState({ visible: false })}
        >
          <p className="m-b-16">Assign to</p>
          <AutoComplete
            dataSource={this.state.dataSource}
            style={{ width: '100%' }}
            onSelect={this.changeStore}
            onSearch={this.handleSearch}
          />
          <p className="m-t-16 m-b-16">Type</p>
          <Select
            defaultValue={this.state.type}
            style={{ width: '100%' }}
            onChange={type => this.setState({ type })}
          >
            <Option value="INDOOR">Indoor</Option>
            <Option value="STICKER">Sticker</Option>
          </Select>
          <p className="m-t-16 m-b-16">Location X</p>
          <Input
            type="number"
            value={this.state.locationX}
            onChange={e => this.setState({ locationX: e.target.value })}
          />
          <p className="m-t-16 m-b-16">Location Y</p>
          <Input
            type="number"
            value={this.state.locationY}
            onChange={e => this.setState({ locationY: e.target.value })}
          />
        </Modal>
      </div>
    )
  }
}
