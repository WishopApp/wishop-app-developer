import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'

import UserAction from '../components/User/UserAction'
import UserProfile from '../components/User/UserProfile'

export default class UserDetail extends Component {
  render() {
    return (
      <Row gutter={16}>
        <Col span={24}>
          <Row gutter={16}>
            <Col span={16}>
              <Row gutter={16}>
                <Col span={24}>
                  <UserProfile />
                </Col>
              </Row>
            </Col>
            <Col span={8}>
              <Col span={24}>
                <UserAction />
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}
