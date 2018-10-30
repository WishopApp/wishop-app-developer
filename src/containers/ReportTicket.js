import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'

import UserTable from '../components/User/UserTable'
import UserStat from '../components/User/UserStat'

class ReportTicket extends Component {
  render() {
    return (
      <Row gutter={16}>
        <Col span={24} className="m-b-16">
          <h3>STATUS</h3>
        </Col>
        <Col span={24} className="m-b-32">
          <UserStat />
        </Col>
        <Col span={24} className="m-b-16">
          <h3>REPORTS</h3>
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

export default ReportTicket
