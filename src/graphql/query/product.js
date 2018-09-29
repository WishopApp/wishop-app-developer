import gql from 'graphql-tag'

export const PRODUCTS = gql`
  query Product {
    products {
      _id
      name
      category {
        name
      }
      subCategory {
        name
      }
      store {
        name
      }
      createdAt
      status
    }
  }
`

export const PRODUCT_STATISTIC = gql`
  query ProductStatistic {
    productStatistic {
      available
      outOfStock
      total
    }
  }
`
