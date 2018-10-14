import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'
import { Query } from 'react-apollo'
import { withRouter } from 'react-static'

import UserAction from '../components/User/UserAction'
import UserProfile from '../components/User/UserProfile'
import { USER } from '../graphql/query/user'

class UserDetail extends Component {
  render() {
    return (
      <Query query={USER} variables={{ id: this.props.match.params.id }}>
        {({ loading, error, data }) => {
          if (loading) return <Card loading />
          if (error) return `Error: ${error.message}`

          return (
            <Row gutter={16}>
              <Col span={24}>
                <Row gutter={16}>
                  <Col span={16}>
                    <Row gutter={16}>
                      <Col span={24}>
                        <UserProfile user={data.user} />
                      </Col>
                    </Row>
                  </Col>
                  <Col span={8}>
                    <Col span={24}>
                      <UserAction />
                    </Col>
                  </Col>
                </Row>
              </Col>
            </Row>
          )
        }}
      </Query>
    )
  }
}

export default withRouter(UserDetail)
