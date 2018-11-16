import React, { Component } from 'react'
import { Link } from 'react-static'
import { Query, Mutation } from 'react-apollo'
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
  notification,
  Popconfirm,
} from 'antd'
import { BEACONS } from '../../graphql/query/beacon'
import { STORES } from '../../graphql/query/store'
import { STORE_BRANCHES } from '../../graphql/query/store-branch'
import {
  ASSIGN_BEACON_TO_STORE,
  UPDATE_BEACON,
} from '../../graphql/mutation/beacon'

const Option = Select.Option

export default class CategoryTable extends Component {
  state = {
    visible: false,
    detailVisible: false,
    beaconHistory: [],
    type: 'INDOOR',
    locationX: '',
    locationY: '',
    filterChoice: [],
    filterWord: '',
    beaconId: '',
    storeId: '',
    storeBranchId: '',
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

  changeStoreBranch = (value, storeBranches) => {
    const filteredStoreBranches = storeBranches.filter(
      store => store.name === value
    )
    this.setState({
      storeBranchId: filteredStoreBranches[0]._id,
    })
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
        render: status => (
          <div>
            {status === 'IDLE' && <Badge status="success" text="Idle" />}
            {status === 'INUSE' && <Badge status="processing" text="Inused" />}
            {status === 'EXPIRE' && <Badge status="error" text="Expired" />}
          </div>
        ),
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
            {record.status === 'IDLE' && <Divider type="vertical" />}
            {record.status === 'IDLE' && (
              <a
                onClick={() =>
                  this.setState({ visible: true, beaconId: record._id })
                }
              >
                ASSIGN
              </a>
            )}

            {record.status === 'INUSE' && <Divider type="vertical" />}
            {record.status === 'INUSE' && (
              <Mutation mutation={UPDATE_BEACON}>
                {(updateBeacon, _) => (
                  <Popconfirm
                    title="Are you sure?"
                    onConfirm={async () => {
                      try {
                        await updateBeacon({
                          variables: {
                            id: record._id,
                            assignId: '',
                            status: 'IDLE',
                          },
                        })

                        notification.success({
                          message: 'Success',
                          description: 'Beacon has been de-assigned.',
                        })

                        window.location.reload()
                      } catch (err) {
                        notification.error({
                          message: 'Error',
                          description:
                            'Please check your information or try again later.',
                        })
                      }
                    }}
                    okText="Yes"
                    cancelText="No"
                  >
                    <a>DE-ASSIGN</a>
                  </Popconfirm>
                )}
              </Mutation>
            )}

            {record.status !== 'EXPIRE' && <Divider type="vertical" />}
            {record.status !== 'EXPIRE' && (
              <Mutation mutation={UPDATE_BEACON}>
                {(updateBeacon, _) => (
                  <Popconfirm
                    title="Are you sure?"
                    onConfirm={async () => {
                      try {
                        await updateBeacon({
                          variables: {
                            id: record._id,
                            assignId: '',
                            status: 'EXPIRE',
                          },
                        })

                        notification.success({
                          message: 'Success',
                          description: 'Beacon has been updated to expired.',
                        })
                      } catch (err) {
                        notification.error({
                          message: 'Error',
                          description:
                            'Please check your information or try again later.',
                        })
                      }
                    }}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button type="danger">CLOSE</Button>
                  </Popconfirm>
                )}
              </Mutation>
            )}
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
                      {item.type === 'EXPIRE' && (
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

        <Mutation mutation={ASSIGN_BEACON_TO_STORE}>
          {(assignBeaconToStore, _) => (
            <Modal
              title="ASSIGN TO"
              visible={this.state.visible}
              onOk={async () => {
                try {
                  await assignBeaconToStore({
                    variables: {
                      id: this.state.beaconId,
                      assignId: this.state.storeBranchId,
                    },
                  })

                  this.setState({
                    visible: false,
                    beaconId: '',
                    storeId: '',
                  })

                  notification.success({
                    message: 'Success',
                    description: 'Beacon has been assigned.',
                  })

                  window.location.reload()
                } catch (err) {
                  notification.error({
                    message: 'Error',
                    description:
                      'Please check your information or try again later.',
                  })
                }
              }}
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
                    <div>
                      <AutoComplete
                        dataSource={storeNames}
                        style={{ width: '100%' }}
                        onSelect={value => this.changeStore(value, data.stores)}
                        onSearch={value => this.handleSearch(value, storeNames)}
                      />
                      {this.state.storeId && (
                        <Query
                          query={STORE_BRANCHES}
                          variables={{ storeId: this.state.storeId }}
                        >
                          {({ loading, error, data }) => {
                            if (loading) return 'Loading...'
                            if (error) return `Error: ${error.message}`

                            let storeBranchName = data.storeBranches.map(
                              sb => sb.name
                            )

                            return (
                              <div>
                                <p className="m-b-16 m-t-16">Select branch</p>
                                <AutoComplete
                                  dataSource={storeBranchName}
                                  style={{ width: '100%' }}
                                  onSelect={value =>
                                    this.changeStoreBranch(
                                      value,
                                      data.storeBranches
                                    )
                                  }
                                  onSearch={value =>
                                    this.handleSearch(value, storeNames)
                                  }
                                />
                              </div>
                            )
                          }}
                        </Query>
                      )}
                    </div>
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
          )}
        </Mutation>
      </div>
    )
  }
}
