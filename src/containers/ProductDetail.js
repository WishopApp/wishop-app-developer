import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'

import StoreDetail from '../components/Product/StoreDetail'
import ProductImages from '../components/Product/ProductImages'
import ProductDetailCard from '../components/Product/ProductDetail'
import ProductCategory from '../components/Product/ProductCategory'

export default class ProductDetail extends Component {
  render() {
    return (
      <Row gutter={16}>
        <Col span={24}>
          <Row gutter={16}>
            <Col span={16}>
              <Row gutter={16}>
                <Col span={24}>
                  <ProductImages />
                </Col>
                <Col span={12} className="m-t-32">
                  <ProductDetailCard />
                </Col>
                <Col span={12} className="m-t-32">
                  <ProductCategory />
                </Col>
              </Row>
            </Col>
            <Col span={8}>
              <Col span={24}>
                <StoreDetail />
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}
