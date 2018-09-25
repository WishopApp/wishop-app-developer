import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'

import StoreDetail from '../components/Store/StoreDetail'
import BeaconList from '../components/Store/BeaconList'
import ProductList from '../components/Store/ProductList'
import OwnerDetail from '../components/Store/OwnerDetail'
import BranchList from '../components/Store/BranchList'

export default class ProductDetail extends Component {
  render() {
    return (
      <Row gutter={16}>
        <Col span={24}>
          <Row gutter={32}>
            <Col span={16}>
              <Row gutter={16}>
                <Col span={24}>
                  <StoreDetail />
                </Col>
                <Col span={24} className="m-t-32">
                  <h3>PRODUCT LIST</h3>
                  <Card className="m-t-16">
                    <ProductList />
                  </Card>
                </Col>
                <Col span={24} className="m-t-32">
                  <h3>BRANCH LIST</h3>
                  <Card className="m-t-16">
                    <BranchList />
                  </Card>
                </Col>
                <Col span={24} className="m-t-32">
                  <h3>BEACON LIST</h3>
                  <Card className="m-t-16">
                    <BeaconList />
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col span={8}>
              <OwnerDetail />
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}
