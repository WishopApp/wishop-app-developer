import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'

export default class ProductDetail extends Component {
  render() {
    return (
      <Row>
        <Col span={24}>
          <h3>PRODUCT DETAIL</h3>
          <Card className="m-t-16">
            <Row type="flex" justify="space-between" className="m-b-16">
              <h4>NAME: </h4>
              <p>Product name</p>
            </Row>
            <Row type="flex" justify="space-between" className="m-b-16">
              <h4>COLOR: </h4>
              <p>Red</p>
            </Row>
            <Row type="flex" justify="space-between" className="m-b-16">
              <h4>SIZE: </h4>
              <p>20 (US)</p>
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }
}
