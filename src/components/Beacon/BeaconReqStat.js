import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'

export default class ProductStat extends Component {
  render() {
    return (
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <h5>NEW</h5>
            <h2>5</h2>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <h5>COMPLETE</h5>
            <h2>5</h2>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <h5>REJECTED</h5>
            <h2>2</h2>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <h5>TOTAL</h5>
            <h2>12</h2>
          </Card>
        </Col>
      </Row>
    )
  }
}
