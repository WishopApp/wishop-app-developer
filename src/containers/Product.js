import React, { Component } from 'react'
import { Row, Col, Card, Button, Icon } from 'antd'

import ProductTable from '../components/Product/ProductTable'
import ProductStat from '../components/Product/ProductStat'

class Category extends Component {
  render() {
    return (
      <Row gutter={16}>
        <Col span={24}>
          <Col span={24} className="m-b-16">
            <h3>PRODUCT STATISTIC</h3>
          </Col>
          <Col span={24} className="m-b-32">
            <ProductStat />
          </Col>
          <Col span={24} className="m-b-16">
            <h3>PRODUCT LIST</h3>
          </Col>
          <Col span={24}>
            <Card>
              <ProductTable />
            </Card>
          </Col>
        </Col>
      </Row>
    )
  }
}

export default Category
