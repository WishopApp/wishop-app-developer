import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'

import ExamplePhoto from '../ExamplePhoto'

export default class ProductCategory extends Component {
  render() {
    console.log(this.props)

    return (
      <Row>
        <Col span={24}>
          <h3>CATEGORY</h3>
          <Card className="m-t-16">
            <Row type="flex" justify="center" className="m-b-32">
              <Col span={24} style={{ textAlign: 'center' }} className="m-b-32">
                <h4>CATEGORY</h4>
              </Col>
              <Col span={24} style={{ textAlign: 'center' }} className="m-b-32">
                <ExamplePhoto img={this.props.category.logo} />
              </Col>
              <Col span={24} style={{ textAlign: 'center' }}>
                <p>{this.props.category.name}</p>
              </Col>
            </Row>
            <Row type="flex" justify="center" className="m-b-16">
              <Col span={24} style={{ textAlign: 'center' }}>
                <p>{this.props.subCategory.name}</p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }
}
