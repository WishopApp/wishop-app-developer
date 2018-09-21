import React, { Component } from 'react'
import { Row, Col, Card, Button, Icon } from 'antd'

import StoreTable from '../components/Store/StoreTable'
import StoreStat from '../components/Store/StoreStat'

class Store extends Component {
  render() {
    return (
      <Row gutter={16}>
        <Col span={24}>
          <Col span={24} className="m-b-16">
            <h3>STORE STATISTIC</h3>
          </Col>
          <Col span={24} className="m-b-32">
            <StoreStat />
          </Col>
          <Col span={24} className="m-b-16">
            <h3>STORE LIST</h3>
          </Col>
          <Col span={24}>
            <Card className="m-t-16">
              <Row type="flex" justify="end" className="m-b-16">
                <Button type="primary">
                  <Icon type="plus" />
                  ADD NEW
                </Button>
              </Row>
              <StoreTable />
            </Card>
          </Col>
        </Col>
      </Row>
    )
  }
}

export default Store
