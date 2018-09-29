import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'
import { Query } from 'react-apollo'

import { PRODUCT_STATISTIC } from '../../graphql/query/product'

export default class ProductStat extends Component {
  render() {
    return (
      <Query query={PRODUCT_STATISTIC}>
        {({ loading, error, data }) => {
          if (loading) return <Card loading />
          if (error) return `Error: ${error.message}`

          return (
            <Row gutter={16}>
              <Col span={6}>
                <Card>
                  <h5>AVAILABLE</h5>
                  <h2>{data.productStatistic.available}</h2>
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <h5>OUT OF STOCK</h5>
                  <h2>{data.productStatistic.outOfStock}</h2>
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <h5>TOTAL</h5>
                  <h2>{data.productStatistic.total}</h2>
                </Card>
              </Col>
            </Row>
          )
        }}
      </Query>
    )
  }
}
