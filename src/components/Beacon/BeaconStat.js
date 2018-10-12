import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'
import { Query } from 'react-apollo'

import { BEACON_STATISTIC } from '../../graphql/query/beacon'

export default class ProductStat extends Component {
  render() {
    return (
      <Query query={BEACON_STATISTIC}>
        {({ loading, error, data }) => {
          if (loading) return <Card loading />
          if (error) return `Error ${error.message}`

          return (
            <Row gutter={16}>
              <Col span={6}>
                <Card>
                  <h5>IDLE</h5>
                  <h2>{data.beaconStatistic.idle}</h2>
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <h5>IN USE</h5>
                  <h2>{data.beaconStatistic.inuse}</h2>
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <h5>EXPIRED</h5>
                  <h2>{data.beaconStatistic.expire}</h2>
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <h5>TOTAL</h5>
                  <h2>{data.beaconStatistic.total}</h2>
                </Card>
              </Col>
            </Row>
          )
        }}
      </Query>
    )
  }
}
