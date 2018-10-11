import React, { Component } from 'react'
import { Link } from 'react-static'
import { Query } from 'react-apollo'
import moment from 'moment'
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
import { BEACONS } from '../../graphql/query/beacon'
import { STORES } from '../../graphql/query/store'

const Option = Select.Option

export default class CategoryTable extends Component {
  s
  state = {
    visible: false,
    detailVisible: false,
    beaconHistory: [],
    type: 'INDOOR',
    locationX: '',
    locationY: '',
    filterChoice: [],
    filterWord: '',
    storeId: '',
  }

  handleSearch = (value, storeNames) => {
    if (storeNames.length !== 0) {
      const filterChoice = storeNames.filter(name => name.includes(value))
      this.setState({
        filterChoice,
        filterWord: value,
      })
    }
  }

  changeStore = (value, stores) => {
    const filteredStore = stores.filter(store => store.name === value)
    this.setState({
      storeId: filteredStore[0]._id,
    })
  }

  assignTo = () => {
    console.log(this.state.storeId)
  }

  render() {
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
        render: () => <Badge status="processing" text="NEW" />,
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <div>
            <a
              onClick={() =>
                this.setState({
                  detailVisible: true,
                  beaconHistory: record.history || [],
                })
              }
            >
              DETAIL
            </a>
            <Divider type="vertical" />
            <a onClick={() => this.setState({ visible: true })}>ASSIGN</a>
            <Divider type="vertical" />
            <Link to="#">DE ASSIGN</Link>
            <Divider type="vertical" />
            <Button type="danger">CLOSE</Button>
          </div>
        ),
      },
    ]

    return (
      <div>
        <Query query={BEACONS}>
          {({ loading, error, data }) => {
            if (loading) return <Table loading />
            if (error) return `Error: ${error.message}`

            return <Table columns={columns} dataSource={data.beacons} />
          }}
        </Query>

        <Modal
          title="USAGE HISTORY"
          visible={this.state.detailVisible}
          onOk={this.handleOk}
          onCancel={() => this.setState({ detailVisible: false })}
          footer={null}
        >
          <p className="m-b-16">History</p>
          <Row style={{ marginBottom: 50 }}>
            <List
              bordered
              dataSource={this.state.beaconHistory}
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
                      <div>
                        <p>{moment(item.createdAt).format('DD-MM-YY HH:MM')}</p>
                      </div>
                    </Col>
                  </Row>
                </List.Item>
              )}
            />
          </Row>
        </Modal>

        <Modal
          title="ASSIGN TO"
          visible={this.state.visible}
          onOk={this.assignTo}
          onCancel={() => this.setState({ visible: false })}
          cancelText="CLOSE"
          okText="SAVE"
        >
          <p className="m-b-16">Assign to</p>
          <Query query={STORES}>
            {({ loading, error, data }) => {
              if (loading) return <Table loading />
              if (error) return `Error: ${error.message}`

              let storeNames = data.stores.map(s => s.name)

              if (this.state.filterWord) {
                storeNames = this.state.filterChoice
              }

              return (
                <AutoComplete
                  dataSource={storeNames}
                  style={{ width: '100%' }}
                  onSelect={value => this.changeStore(value, data.stores)}
                  onSearch={value => this.handleSearch(value, storeNames)}
                />
              )
            }}
          </Query>
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
