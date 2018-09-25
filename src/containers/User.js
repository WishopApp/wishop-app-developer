import React, { Component } from 'react'
import { Row, Col, Card, Button, Icon } from 'antd'

import UserTable from '../components/User/UserTable'
import UserStat from '../components/User/UserStat'

class User extends Component {
  render() {
    return (
      <Row gutter={16}>
        <Col span={24} className="m-b-16">
          <h3>USER STATISTIC</h3>
        </Col>
        <Col span={24} className="m-b-32">
          <UserStat />
        </Col>
        <Col span={24} className="m-b-16">
          <h3>USER LIST</h3>
        </Col>
        <Col span={24}>
          <Card className="m-t-16">
            <UserTable />
          </Card>
        </Col>
      </Row>
    )
  }
}

export default User
