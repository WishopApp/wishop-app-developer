import React, { Component } from 'react'
import { Row, Col, Card, Button, Icon } from 'antd'

import CategoryTable from '../components/Category/CategoryTable'
import SubCategoryTable from '../components/Category/SubCategoryTable'

class Category extends Component {
  render() {
    return (
      <Row gutter={16}>
        <Col span={12}>
          <Col span={24}>
            <h3>CATEGORY</h3>
          </Col>
          <Col span={24}>
            <Card className="m-t-16">
              <Row type="flex" justify="end" className="m-b-16">
                <Button type="primary">
                  <Icon type="plus" />
                  ADD NEW
                </Button>
              </Row>
              <CategoryTable />
            </Card>
          </Col>
        </Col>

        <Col span={12}>
          <Col span={24}>
            <h3>SUB CATEGORY</h3>
          </Col>
          <Col span={24}>
            <Card className="m-t-16">
              <Row type="flex" justify="end" className="m-b-16">
                <Button type="primary">
                  <Icon type="plus" />
                  ADD NEW
                </Button>
              </Row>
              <SubCategoryTable />
            </Card>
          </Col>
        </Col>
      </Row>
    )
  }
}

export default Category
