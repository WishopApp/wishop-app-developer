import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'

import ExImg from '../../../public/logo/app-logo-no-title.svg'

export default class StoreDetail extends Component {
  render() {
    return (
      <Row>
        <Col>
          <h3>STORE DETAIL</h3>
          <Card className="m-t-16">
            <Row gutter={16} type="flex" align="middle">
              <Col span={6} style={{ marginRight: 100 }}>
                <img
                  src={ExImg}
                  alt="Image"
                  style={{ width: '100%', padding: 20 }}
                />
              </Col>
              <Col span={12}>
                <Row type="flex" justify="space-between" className="m-b-16">
                  <h4>NAME: </h4>
                  <p>Product name</p>
                </Row>
                <Row type="flex" justify="space-between" className="m-b-16">
                  <h4>NAME: </h4>
                  <p>Product name</p>
                </Row>
                <Row type="flex" justify="space-between" className="m-b-16">
                  <h4>NAME: </h4>
                  <p>Product name</p>
                </Row>
                <Row type="flex" justify="space-between" className="m-b-16">
                  <h4>NAME: </h4>
                  <p>Product name</p>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }
}
