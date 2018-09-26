import gql from 'graphql-tag'

export const CATEGORIES = gql`
  query categories($limit: Int, $skip: Int) {
    categories(limit: $limit, skip: $skip) {
      _id
      name
      properties {
        _id
        categoryId
        name
        values
      }
      subCategories {
        _id
        name
      }
    }
  }
`
