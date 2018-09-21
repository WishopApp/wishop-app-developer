import React, { Component } from 'react'
import { Row, Col, Card, Button, Icon } from 'antd'

import BeaconReqTable from '../components/Beacon/BeaconReqTable'
import BeaconReqStat from '../components/Beacon/BeaconReqStat'
import BeaconTable from '../components/Beacon/BeaconTable'
import BeaconStat from '../components/Beacon/BeaconStat'

class Beacon extends Component {
  render() {
    return (
      <Row gutter={16}>
        <Col span={24} className="m-b-16">
          <h3>BEACON REQUEST STATISTIC</h3>
        </Col>
        <Col span={24} className="m-b-32">
          <BeaconReqStat />
        </Col>
        <Col span={24} className="m-b-16">
          <h3>BEACON REQUEST LIST</h3>
        </Col>
        <Col span={24}>
          <Card className="m-t-16">
            <Row type="flex" justify="end" className="m-b-16">
              <Button type="primary">
                <Icon type="plus" />
                ADD NEW
              </Button>
            </Row>
            <BeaconReqTable />
          </Card>
        </Col>
        <Col span={24} className="m-t-32 m-b-16">
          <h3>BEACON STATISTIC</h3>
        </Col>
        <Col span={24} className="m-b-32">
          <BeaconStat />
        </Col>
        <Col span={24} className="m-b-16">
          <h3>BEACON LIST</h3>
        </Col>
        <Col span={24}>
          <Card className="m-t-16">
            <Row type="flex" justify="end" className="m-b-16">
              <Button type="primary">
                <Icon type="plus" />
                ADD NEW
              </Button>
            </Row>
            <BeaconTable />
          </Card>
        </Col>
      </Row>
    )
  }
}

export default Beacon
