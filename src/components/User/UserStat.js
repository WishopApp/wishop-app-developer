import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'

export default class UserStat extends Component {
  render() {
    return (
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <h5>CUSTOMER</h5>
            <h2>150</h2>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <h5>SHOP OWNER</h5>
            <h2>80</h2>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <h5>BANNED</h5>
            <h2>10</h2>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <h5>TOTAL</h5>
            <h2>240</h2>
          </Card>
        </Col>
      </Row>
    )
  }
}
