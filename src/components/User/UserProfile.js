import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'

import ExImg from '../../../public/logo/app-logo-no-title.svg'

export default class ProfileDetail extends Component {
  render() {
    return (
      <Row>
        <Col span={24}>
          <h3>USER PROFILE</h3>
          <Card className="m-t-16">
            <Row gutter={16} type="flex" align="middle">
              <Col span={6} style={{ marginRight: 100 }}>
                <img
                  src={ExImg}
                  alt="OK"
                  style={{ width: '100%', padding: 20 }}
                />
              </Col>
              <Col span={12}>
                <Row type="flex" justify="space-between" className="m-b-16">
                  <h4>NAME: </h4>
                  <p>{this.props.user.profile.name}</p>
                </Row>
                <Row type="flex" justify="space-between" className="m-b-16">
                  <h4>TEL NO: </h4>
                  <p>{this.props.user.profile.telNo}</p>
                </Row>
                <Row type="flex" justify="space-between" className="m-b-16">
                  <h4>EMAIL: </h4>
                  <p>{this.props.user.email}</p>
                </Row>
                <Row type="flex" justify="space-between" className="m-b-16">
                  <h4>ADDRESS: </h4>
                  <p>
                    {this.props.user.profile.address.district}
                    {this.props.user.profile.address.province}
                    {this.props.user.profile.address.country}
                    {this.props.user.profile.address.zipcode}
                    {this.props.user.profile.address.detail}
                  </p>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }
}
