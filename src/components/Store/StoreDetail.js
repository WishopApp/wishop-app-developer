import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'

import ExamplePhoto from '../ExamplePhoto'

export default class StoreDetail extends Component {
  render() {
    return (
      <Row>
        <Col>
          <h3>STORE DETAIL</h3>
          <Card className="m-t-16">
            <Row gutter={16} type="flex" align="middle">
              <Col span={6} style={{ marginRight: 100 }}>
                <ExamplePhoto img={this.props.store.avatarUrl} />
              </Col>
              <Col span={12}>
                <Row type="flex" justify="space-between" className="m-b-16">
                  <h4>NAME: </h4>
                  <p>{this.props.store.name}</p>
                </Row>
                <Row type="flex" justify="space-between" className="m-b-16">
                  <h4>DESCRIPTION: </h4>
                  <p>{this.props.store.description}</p>
                </Row>
                <Row type="flex" justify="space-between" className="m-b-16">
                  <h4>STATUS: </h4>
                  <p>{this.props.store.status}</p>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }
}
