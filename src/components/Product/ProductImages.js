import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'

import ExamplePhoto from '../ExamplePhoto'

export default class StoreDetail extends Component {
  render() {
    return (
      <Row>
        <Col>
          <h3>PRODUCT IMAGES</h3>
          <Card className="m-t-16">
            <Row gutter={16}>
              {this.props.images.map(img => (
                <Col span={6} style={{ padding: 20 }}>
                  <ExamplePhoto img={img} />
                </Col>
              ))}
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }
}
