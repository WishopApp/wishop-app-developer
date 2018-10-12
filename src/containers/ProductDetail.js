import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'
import { withRouter } from 'react-static'
import { Query } from 'react-apollo'

import { PRODUCT } from '../graphql/query/product'
import StoreDetail from '../components/Product/StoreDetail'
import ProductImages from '../components/Product/ProductImages'
import ProductDetailCard from '../components/Product/ProductDetail'
import ProductCategory from '../components/Product/ProductCategory'

class ProductDetail extends Component {
  render() {
    console.log(this.props.match.params)
    return (
      <Query query={PRODUCT} variables={{ id: this.props.match.params.id }}>
        {({ loading, error, data }) => {
          if (loading) return <Card loading />
          if (error) return `Error: ${error.message}`

          console.log(data.product)

          return (
            <Row gutter={16}>
              <Col span={24}>
                <Row gutter={16}>
                  <Col span={16}>
                    <Row gutter={16}>
                      <Col span={24}>
                        <ProductImages images={data.product.images} />
                      </Col>
                      <Col span={12} className="m-t-32">
                        <ProductDetailCard
                          categoryProps={data.product.categoryProps}
                          subCategoryProps={data.product.subCategoryProps}
                        />
                      </Col>
                      <Col span={12} className="m-t-32">
                        <ProductCategory
                          category={data.product.category}
                          subCategory={data.product.subCategory}
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col span={8}>
                    <Col span={24}>
                      <StoreDetail store={data.product.store} />
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

export default withRouter(ProductDetail)
