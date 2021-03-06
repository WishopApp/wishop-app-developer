import React, { Component } from 'react'
import {
  Row,
  Col,
  Card,
  Button,
  Icon,
  Modal,
  Input,
  Select,
  AutoComplete,
} from 'antd'

import BeaconReqTable from '../components/Beacon/BeaconReqTable'
import BeaconReqStat from '../components/Beacon/BeaconReqStat'
import BeaconTable from '../components/Beacon/BeaconTable'
import BeaconStat from '../components/Beacon/BeaconStat'

const Option = Select.Option

class Beacon extends Component {
  state = {
    visible: false,
    detailVisible: false,
    name: '',
    uuid: '',
    major: '',
    minor: '',
  }

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
              <Button
                type="primary"
                onClick={() => this.setState({ visible: true })}
              >
                <Icon type="plus" />
                ADD NEW
              </Button>
            </Row>
            <BeaconTable />
          </Card>
        </Col>

        <Modal
          title="NEW BEACON"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={() => this.setState({ visible: false })}
          okText="CREATE"
          cancelText="CLOSE"
        >
          <p className="m-b-16">Name</p>
          <Input
            type="text"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <p className="m-t-16 m-b-16">UUID</p>
          <Input
            type="text"
            value={this.state.uuid}
            onChange={e => this.setState({ uuid: e.target.value })}
          />
          <p className="m-t-16 m-b-16">Major</p>
          <Input
            type="text"
            value={this.state.major}
            onChange={e => this.setState({ major: e.target.value })}
          />
          <p className="m-t-16 m-b-16">Minor</p>
          <Input
            type="text"
            value={this.state.minor}
            onChange={e => this.setState({ minor: e.target.value })}
          />
        </Modal>
      </Row>
    )
  }
}

export default Beacon
