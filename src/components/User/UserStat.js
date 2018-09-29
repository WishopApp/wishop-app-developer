import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'
import { Query } from 'react-apollo'

import { USER_STATISTIC } from '../../graphql/query/user'

export default class UserStat extends Component {
  render() {
    return (
      <Query query={USER_STATISTIC}>
        {({ loading, error, data }) => {
          if (loading) return <Card loading />
          if (error) return `Error: ${error.message}`

          return (
            <Row gutter={16}>
              <Col span={6}>
                <Card>
                  <h5>CUSTOMER</h5>
                  <h2>{data.userStatistic.customer}</h2>
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <h5>SHOP OWNER</h5>
                  <h2>{data.userStatistic.shopOwner}</h2>
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <h5>BANNED</h5>
                  <h2>{data.userStatistic.banned}</h2>
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <h5>TOTAL</h5>
                  <h2>{data.userStatistic.total}</h2>
                </Card>
              </Col>
            </Row>
          )
        }}
      </Query>
    )
  }
}
