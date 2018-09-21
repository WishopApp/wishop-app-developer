import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'

export default class ProductStat extends Component {
  render() {
    return (
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <h5>AVAILABLE</h5>
            <h2>200</h2>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <h5>OUT OF STOCK</h5>
            <h2>150</h2>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <h5>BANNED</h5>
            <h2>0</h2>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <h5>TOTAL</h5>
            <h2>350</h2>
          </Card>
        </Col>
      </Row>
    )
  }
}
