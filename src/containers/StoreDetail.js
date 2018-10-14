import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'
import { Query } from 'react-apollo'
import { withRouter } from 'react-static'

import StoreDetail from '../components/Store/StoreDetail'
import BeaconList from '../components/Store/BeaconList'
import ProductList from '../components/Store/ProductList'
import OwnerDetail from '../components/Store/OwnerDetail'
import BranchList from '../components/Store/BranchList'
import { STORE } from '../graphql/query/store'

class StoreDetailContainer extends Component {
  render() {
    return (
      <Query
        query={STORE}
        variables={{ id: this.props.match.params.id }}
        fetchPolicy="network-only"
      >
        {({ loading, error, data }) => {
          if (loading) return <Card loading />
          if (error) return `Error: ${error.message}`

          return (
            <Row gutter={16}>
              <Col span={24}>
                <Row gutter={32}>
                  <Col span={16}>
                    <Row gutter={16}>
                      <Col span={24}>
                        <StoreDetail store={data.store} />
                      </Col>
                      <Col span={24} className="m-t-32">
                        <h3>PRODUCT LIST</h3>
                        <Card className="m-t-16">
                          <ProductList products={data.store.products} />
                        </Card>
                      </Col>
                      <Col span={24} className="m-t-32">
                        <h3>BRANCH LIST</h3>
                        <Card className="m-t-16">
                          <BranchList branchs={data.store.branchs} />
                        </Card>
                      </Col>
                      <Col span={24} className="m-t-32">
                        <h3>BEACON LIST</h3>
                        <Card className="m-t-16">
                          <BeaconList beacons={data.store.beacons} />
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={8}>
                    <OwnerDetail owner={data.store.owner} />
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

export default withRouter(StoreDetailContainer)
