import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'
import { Query } from 'react-apollo'

import UserTable from '../components/User/UserTable'
import UserStat from '../components/User/UserStat'
import { USERS } from '../graphql/query/user'

class User extends Component {
  render() {
    return (
      <Row gutter={16}>
        <Col span={24} className="m-b-16">
          <h3>USER STATISTIC</h3>
        </Col>
        <Col span={24} className="m-b-32">
          <UserStat />
        </Col>
        <Col span={24} className="m-b-16">
          <h3>USER LIST</h3>
        </Col>
        <Col span={24}>
          <Card className="m-t-16">
            <Query query={USERS}>
              {({ loading, error, data }) => {
                if (loading) return 'Loading...'
                if (error) return `Error - ${error.message}`

                return <UserTable dataSource={data.users} />
              }}
            </Query>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default User
