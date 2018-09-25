import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'

export default class ProductStat extends Component {
  render() {
    return (
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <h5>IDLE</h5>
            <h2>10</h2>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <h5>IN USE</h5>
            <h2>10</h2>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <h5>EXPIRED</h5>
            <h2>2</h2>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <h5>TOTAL</h5>
            <h2>22</h2>
          </Card>
        </Col>
      </Row>
    )
  }
}
