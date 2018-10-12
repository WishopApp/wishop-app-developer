import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'

export default class ProductDetail extends Component {
  render() {
    return (
      <Row>
        <Col span={24}>
          <h3>PRODUCT DETAIL</h3>
          <Card className="m-t-16">
            {this.props.categoryProps.length !== 0 &&
              this.props.categoryProps.map((cp, index) => (
                <Row
                  type="flex"
                  justify="space-between"
                  className="m-b-16"
                  key={index}
                >
                  <h4>{cp.name}: </h4>
                  <p>{cp.value}</p>
                </Row>
              ))}
            {this.props.subCategoryProps.length !== 0 &&
              this.props.subCategoryProps.map((scp, index) => (
                <Row
                  type="flex"
                  justify="space-between"
                  className="m-b-16"
                  key={index}
                >
                  <h4>{scp.name}: </h4>
                  <p>{scp.value}</p>
                </Row>
              ))}
          </Card>
        </Col>
      </Row>
    )
  }
}
