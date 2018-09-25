import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'

import ExImg from '../../../public/logo/app-logo-no-title.svg'

export default class StoreDetail extends Component {
  render() {
    return (
      <Row>
        <Col>
          <h3>PRODUCT IMAGES</h3>
          <Card className="m-t-16">
            <Row gutter={16}>
              <Col span={6} style={{ padding: 20 }}>
                <img src={ExImg} alt="Image" style={{ width: '100%' }} />
              </Col>
              <Col span={6} style={{ padding: 20 }}>
                <img src={ExImg} alt="Image" style={{ width: '100%' }} />
              </Col>
              <Col span={6} style={{ padding: 20 }}>
                <img src={ExImg} alt="Image" style={{ width: '100%' }} />
              </Col>
              <Col span={6} style={{ padding: 20 }}>
                <img src={ExImg} alt="Image" style={{ width: '100%' }} />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }
}
