import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'

import ExImg from '../../../public/logo/app-logo-no-title.svg'

export default class ProfileDetail extends Component {
  render() {
    return (
      <Row>
        <Col span={24}>
          <h3>USER PROFILE</h3>
          <Card className="m-t-16">
            <Row gutter={16} type="flex" align="middle">
              <Col span={6} style={{ marginRight: 100 }}>
                <img
                  src={ExImg}
                  alt="OK"
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
        <Col span={24} className="m-t-32">
          <h3>STORE DETAIL</h3>
          <Card className="m-t-16">
            <Row gutter={16} type="flex" align="middle">
              <Col span={6} style={{ marginRight: 100 }}>
                <img
                  src={ExImg}
                  alt="OK"
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
        <Col span={24} className="m-t-16">
          <Row gutter={16}>
            <Col span={12} style={{ textAlign: 'center' }}>
              <Card>
                <h4>PRODUCTS</h4>
                <h3>100</h3>
              </Card>
            </Col>
            <Col span={12} style={{ textAlign: 'center' }}>
              <Card>
                <h4>BRANCH</h4>
                <h3>100</h3>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}
