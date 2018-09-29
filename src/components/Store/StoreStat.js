import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'
import { Query } from 'react-apollo'

import { STORE_STATISTIC } from '../../graphql/query/store'

export default class ProductStat extends Component {
  render() {
    return (
      <Query query={STORE_STATISTIC}>
        {({ loading, error, data }) => {
          if (loading) return <Card loading />
          if (error) return `Error: ${error.message}`

          return (
            <Row gutter={16}>
              <Col span={6}>
                <Card>
                  <h5>OPEN</h5>
                  <h2>{data.storeStatistic.open}</h2>
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <h5>CLOSED</h5>
                  <h2>{data.storeStatistic.closed}</h2>
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <h5>BANNED</h5>
                  <h2>{data.storeStatistic.banned}</h2>
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <h5>TOTAL</h5>
                  <h2>{data.storeStatistic.total}</h2>
                </Card>
              </Col>
            </Row>
          )
        }}
      </Query>
    )
  }
}
