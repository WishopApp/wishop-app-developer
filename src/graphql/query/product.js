import gql from 'graphql-tag'

export const PRODUCTS = gql`
  query Products {
    products {
      _id
      name
      photoUrlList
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

export const PRODUCT = gql`
  query Product($id: ID!) {
    product(_id: $id) {
      _id
      name
      photoUrlList
      category {
        name
        logo
      }
      subCategory {
        name
      }
      store {
        name
        owner {
          profile {
            name
            telNo
          }
        }
      }
      categoryProps {
        name
        value
      }
      subCategoryProps {
        name
        value
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
