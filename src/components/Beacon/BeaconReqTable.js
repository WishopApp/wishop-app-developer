import React, { Component } from 'react'
import { Link } from 'react-static'
import { Table, Badge, Modal, Select, notification } from 'antd'
import { Query, Mutation } from 'react-apollo'
import moment from 'moment'

import { BEACON_TICKETS } from '../../graphql/query/beacon'
import { UPDATE_BEACON_TICKET } from '../../graphql/mutation/beacon'

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
        render: store => store.name,
      },
      {
        title: 'Telno',
        dataIndex: 'telNo',
        key: 'telNo',
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
            {status === 'NEW' && <Badge status="processing" text="New" />}
            {status === 'COMPLETE' && (
              <Badge status="success" text="Complete" />
            )}
            {status === 'REJECTED' && <Badge status="error" text="Rejected" />}
          </div>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <a
            onClick={() =>
              this.setState({
                statusVisible: true,
                ticketId: record._id,
                status: record.status,
              })
            }
          >
            CHANGE STATUS
          </a>
        ),
      },
    ]

    return (
      <div>
        <Query query={BEACON_TICKETS}>
          {({ loading, error, data }) => {
            if (loading) return <Table loading />
            if (error) return `Error: ${error.message}`

            return (
              <Table columns={columns} dataSource={data.beaconRequestTickets} />
            )
          }}
        </Query>

        <Mutation mutation={UPDATE_BEACON_TICKET}>
          {updateBeaconTicket => (
            <Modal
              title="CHANGE BEACON STATUS"
              visible={this.state.statusVisible}
              onOk={async () => {
                try {
                  await updateBeaconTicket({
                    variables: {
                      id: this.state.ticketId,
                      status: this.state.status,
                    },
                  })

                  this.setState({
                    statusVisible: false,
                    ticketId: '',
                    status: 'NEW',
                  })

                  notification.success({
                    message: 'Success',
                    description: 'Beacon Request Ticket has been updated.',
                  })
                } catch (err) {
                  console.error(err)
                  notification.error({
                    message: 'Error',
                    description:
                      'Something is not correct, please try again later.',
                  })
                }
              }}
              onCancel={() => this.setState({ statusVisible: false })}
            >
              <p className="m-b-16">Status</p>
              <Select
                defaultValue={this.state.status}
                style={{ width: '100%' }}
                onChange={status => this.setState({ status })}
              >
                <Option value="NEW">New</Option>
                <Option value="COMPLETE">Complete</Option>
                <Option value="REJECTED">Reject</Option>
              </Select>
            </Modal>
          )}
        </Mutation>
      </div>
    )
  }
}
