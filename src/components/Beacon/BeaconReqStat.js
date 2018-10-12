import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'
import { Query } from 'react-apollo'

import { BEACON_TICKET_STATISTIC } from '../../graphql/query/beacon'

export default class ProductStat extends Component {
  render() {
    return (
      <Query query={BEACON_TICKET_STATISTIC}>
        {({ loading, error, data }) => {
          if (loading) return <Card loading />
          if (error) return `Error: ${error.message}`

          return (
            <Row gutter={16}>
              <Col span={6}>
                <Card>
                  <h5>NEW</h5>
                  <h2>{data.beaconTicketStatistic.new}</h2>
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <h5>COMPLETE</h5>
                  <h2>{data.beaconTicketStatistic.complete}</h2>
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <h5>REJECTED</h5>
                  <h2>{data.beaconTicketStatistic.reject}</h2>
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <h5>TOTAL</h5>
                  <h2>{data.beaconTicketStatistic.total}</h2>
                </Card>
              </Col>
            </Row>
          )
        }}
      </Query>
    )
  }
}
